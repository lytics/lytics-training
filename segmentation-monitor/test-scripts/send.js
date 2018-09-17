const projectId = '!!! YOUR GOOGLE CLOUD PROJECT ID GOES HERE !!!';
const topicName = 'events';
const subName = 'monitor';

const PubSub = require('@google-cloud/pubsub');
send();
/**
 * Send a message to the topic for the segmentation monitor.
 * 
 * This script can be used to test whether the topic
 * is created and permissions are set up properly.
 * The message will not be in the format required
 * by the segmentation manager.
 
 * In order to run this script, your local user must have 
 * permission to access Pub/Sub. You can grant this 
 * permission using the following command:
 * 
 *      gcloud auth application-default login
 * 
 */
async function send() {
    const client = new PubSub({
        projectId: projectId
    });
    var topic = client.topic(topicName);
    if (! (await topic.exists())) {
        console.log('Topic does not exist.');
        return;
    }
    const data = JSON.stringify({ when: new Date() });
    const dataBuffer = Buffer.from(data);
    try {
        var msg = await client
            .topic(topicName)
            .publisher()
            .publish(dataBuffer);
        console.log(msg);
    }
    catch (err) {
        console.log(err);
    }
}

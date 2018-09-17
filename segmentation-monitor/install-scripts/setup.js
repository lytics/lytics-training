const projectId = '!!! YOUR GOOGLE CLOUD PROJECT ID GOES HERE !!!';
const topicName = 'events';
const subName = 'monitor';

const PubSub = require('@google-cloud/pubsub');
setup();
/**
 * Creates the required topic and subscription 
 * for the segmentation monitor.
 * 
 * In order to run this script, your local user must have 
 * permission to access Pub/Sub. You can grant this 
 * permission using the following command:
 * 
 *      gcloud auth application-default login
 * 
 */
async function setup() {
    console.log('Starting setup.');
    const client = new PubSub({
        projectId: projectId,
    });
    var topic = client.topic(topicName);
    var sub = topic.subscription(subName);
    var res = await topic.exists();
    if (res[0]) {
        console.log('Topic already exists.');
    }
    else {
        await topic.create();
        console.log('Topic created.');   
    }
    res = await sub.exists();
    if (res[0]) {
        console.log('Subscription already exists.');
    }
    else {
        await sub.create();
        console.log('Subscription created.');
    }
    console.log('Finished with setup.');
}

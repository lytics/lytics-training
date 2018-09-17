const projectId = '!!! YOUR GOOGLE CLOUD PROJECT ID GOES HERE !!!';
const topicName = 'events';
const subName = 'monitor';

const PubSub = require('@google-cloud/pubsub');
reset();
/**
 * Removes the required topic and subscription 
 * for the segmentation monitor.
 * 
 * In order to run this script, your local user must have 
 * permission to access Pub/Sub. You can grant this 
 * permission using the following command:
 * 
 *      gcloud auth application-default login
 * 
 */
async function reset() {
    console.log('Starting reset.');
    const client = new PubSub({
        projectId: projectId,
    });
    var topic = client.topic(topicName);
    var sub = topic.subscription(subName);
    var res = await sub.exists();
    if (res[0]) {
        await sub.delete();
        console.log('Subscription was deleted.');
    }
    else {
        console.log('Subscription does not exist.');
    }
    res = await topic.exists();
    if (res[0]) {
        await topic.delete();
        console.log('Topic was deleted.');
    }
    else {
        console.log('Topic does not exist.');
    }
    console.log('Finished with reset.');
}

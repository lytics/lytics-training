const projectId = '!!! YOUR GOOGLE CLOUD PROJECT ID GOES HERE !!!';
const topicName = 'events';
const subName = 'monitor';
const timeout = 2500;

const PubSub = require('@google-cloud/pubsub');
read();
/**
 * Read messages using the subscription for the segmentation monitor.
 * 
 * This script can be used to test whether the subscription
 * is created and permissions are set up properly.
 * Any messages that are read are "acknowlegded", 
 * meaning the will not be available to be read 
 * by the segmentation monitor.
 
 * In order to run this script, your local user must have 
 * permission to access Pub/Sub. You can grant this 
 * permission using the following command:
 * 
 *      gcloud auth application-default login
 * 
 */
async function read() {
    const client = new PubSub({
        projectId: projectId,
    });
    var topic = client.topic(topicName);
    var sub = topic.subscription(subName);

    let messageCount = 0;
    const messageHandler = message => {
        console.log(`Received message ${message.id}:`);
        console.log(`\tData: ${message.data}`);
        messageCount += 1;

        message.ack();
    };

    sub.on(`message`, messageHandler);
    setTimeout(() => {
        sub.removeListener('message', messageHandler);
        console.log(`${messageCount} message(s) received.`);
    }, timeout);
}

const projectId = '!!! YOUR GOOGLE CLOUD PROJECT ID GOES HERE !!!';
const topicName = 'events';
const subName = 'monitor';
const timeout = 2000;

const PubSub = require('@google-cloud/pubsub');
const Buffer = require('safe-buffer').Buffer;

/**
 * Lytics webhook subscription calls this function.
 * 
 * Use the following command to deploy this function:
 * gcloud functions deploy acceptEvent --trigger-http --runtime nodejs8
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.acceptEvent = async (req, res) => {
  const client = new PubSub({
    projectId: projectId
  });
  var topic = client.topic(topicName);
  if (!(await topic.exists())) {
    console.log(`Topic does not exist: ${topicName}`);
    res.status(400);
    res.json(`{"error":"Topic does not exist.", "topic":"${topicName}"}`);
    return;
  }
  const data = JSON.stringify(req.body);
  const dataBuffer = Buffer.from(data);
  var msgId = await client
    .topic(topicName)
    .publisher()
    .publish(dataBuffer);
  res.status(200);
  res.json(`{"message":${msgId}}`);
}

/**
 * Segmon uses this function to read events.
 * 
 * Use the following command to deploy this function:
 * gcloud functions deploy readEvents --trigger-http --runtime nodejs8
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.readEvents = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  const client = new PubSub({
    projectId: projectId,
  });
  var topic = client.topic(topicName);
  var sub = topic.subscription(subName);

  const messages = [];
  const messageHandler = message => {
    console.log(`Received message: ${message.id}`);
    const data = JSON.parse(Buffer.from(message.data, 'base64').toString('utf-8'));
    messages.push(data);
    message.ack();
  };

  sub.on(`message`, messageHandler);
  setTimeout(() => {
    sub.removeListener('message', messageHandler);
    console.log(`${messages.length} message(s) received.`);
    res.json(messages);
  }, timeout);
}

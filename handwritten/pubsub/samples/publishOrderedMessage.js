// Copyright 2019-2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

// sample-metadata:
//   title: Publish Ordered Message
//   description: Demonstrates how to publish messages to a topic
//     with ordering. Please see "Listen for Ordered Messages" for
//     the other side of this.
//   usage: node publishOrderedMessage.js <topic-name> <data>

let publishCounterValue = 1;

function getPublishCounterValue() {
  return publishCounterValue;
}

function setPublishCounterValue(value) {
  publishCounterValue = value;
}

async function main(
  topicName = 'YOUR_TOPIC_NAME',
  data = JSON.stringify({foo: 'bar'})
) {
  // [START pubsub_publish_ordered_message]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';
  // const data = JSON.stringify({foo: 'bar'});

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function publishOrderedMessage() {
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    const attributes = {
      // Pub/Sub messages are unordered, so assign an order ID and manually order messages
      counterId: `${getPublishCounterValue()}`,
    };

    // Publishes the message
    const messageId = await pubSubClient
      .topic(topicName)
      .publish(dataBuffer, attributes);

    // Update the counter value
    setPublishCounterValue(parseInt(attributes.counterId, 10) + 1);
    console.log(`Message ${messageId} published.`);

    return messageId;
  }

  return await publishOrderedMessage();
  // [END pubsub_publish_ordered_message]
}

// This needs to be exported directly so that the system tests can find it.
module.exports = {
  publishOrderedMessage: main,
};

if (require.main === module) {
  main(...process.argv.slice(2)).catch(console.error);
}

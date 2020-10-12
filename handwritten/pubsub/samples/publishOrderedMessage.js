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
//     with ordering. Please see "Create Subscription With Ordering" for
//     information on setting up a subscription that will receive the
//     messages with proper ordering.
//   usage: node publishOrderedMessage.js <topic-name> <data>

async function main(
  topicName = 'YOUR_TOPIC_NAME',
  data = JSON.stringify({foo: 'bar'}),
  orderingKey = 'key1'
) {
  // [START pubsub_publish_with_ordering_keys]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';
  // const data = JSON.stringify({foo: 'bar'});
  // const orderingKey = 'key1';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function publishOrderedMessage() {
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    // Be sure to set an ordering key that matches other messages
    // you want to receive in order, relative to each other.
    const message = {
      data: dataBuffer,
      orderingKey: orderingKey,
    };

    // Publishes the message
    const messageId = await pubSubClient
      .topic(topicName, {enableMessageOrdering: true})
      .publishMessage(message);

    console.log(`Message ${messageId} published.`);

    return messageId;
  }

  return await publishOrderedMessage();
  // [END pubsub_publish_with_ordering_keys]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

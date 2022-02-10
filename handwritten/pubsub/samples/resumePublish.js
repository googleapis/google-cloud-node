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
//   title: Resume Publish
//   description: Demonstrates how to resume publishing on an ordering key if
//     publishing fails for a message.
//   usage: node resumePublish.js <topic-name-or-id> <data>

async function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  data = JSON.stringify({foo: 'bar'}),
  orderingKey = 'key1'
) {
  // [START pubsub_resume_publish_with_ordering_keys]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
  // const data = JSON.stringify({foo: 'bar'});
  // const orderingKey = 'key1';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function resumePublish() {
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);

    // Publishes the message
    const publisher = pubSubClient.topic(topicNameOrId, {
      enableMessageOrdering: true,
    });
    try {
      const message = {
        data: dataBuffer,
        orderingKey: orderingKey,
      };
      const messageId = await publisher.publishMessage(message);
      console.log(`Message ${messageId} published.`);

      return messageId;
    } catch (e) {
      console.log(`Could not publish: ${e}`);
      publisher.resumePublishing(orderingKey);
      return null;
    }
  }

  return await resumePublish();
  // [END pubsub_resume_publish_with_ordering_keys]
}

// This needs to be exported directly so that the system tests can find it.
module.exports = {
  resumePublish: main,
};

if (require.main === module) {
  main(...process.argv.slice(2)).catch(console.error);
}

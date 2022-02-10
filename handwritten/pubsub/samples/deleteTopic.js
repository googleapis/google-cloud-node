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
//   title: Delete Topic
//   description: Deletes an existing topic.
//   usage: node deleteTopic.js <topic-name-or-id>

function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {
  // [START pubsub_delete_topic]
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function deleteTopic() {
    /**
     * TODO(developer): Uncomment the following line to run the sample.
     */
    // const topicName = 'my-topic';

    // Deletes the topic
    await pubSubClient.topic(topicNameOrId).delete();
    console.log(`Topic ${topicNameOrId} deleted.`);
  }

  deleteTopic().catch(console.error);
  // [END pubsub_delete_topic]
}

main(...process.argv.slice(2));

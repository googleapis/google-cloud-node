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
//   title: Get Topic Policy
//   description: Gets the IAM policy for a topic.
//   usage: node getTopicPolicy.js <topic-name>

function main(topicName = 'YOUR_TOPIC_NAME') {
  // [START pubsub_get_topic_policy]
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function getTopicPolicy() {
    // Retrieves the IAM policy for the topic
    const [policy] = await pubSubClient.topic(topicName).iam.getPolicy();
    console.log('Policy for topic: %j.', policy.bindings);
  }

  getTopicPolicy().catch(console.error);
  // [END pubsub_get_topic_policy]
}

main(...process.argv.slice(2));

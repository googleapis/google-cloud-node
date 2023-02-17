// Copyright 2019-2023 Google LLC
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

// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Get Topic Policy
//   description: Gets the IAM policy for a topic.
//   usage: node getTopicPolicy.js <topic-name-or-id>

// [START pubsub_get_topic_policy]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function getTopicPolicy(topicNameOrId) {
  // Retrieves the IAM policy for the topic
  const [policy] = await pubSubClient.topic(topicNameOrId).iam.getPolicy();
  console.log('Policy for topic: %j.', policy.bindings);
}
// [END pubsub_get_topic_policy]

function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {
  getTopicPolicy(topicNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

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
//   title: List All Topics
//   description: Lists all topics in the current project.
//   usage: node listAllTopics.js

function main() {
  // [START pubsub_list_topics]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function listAllTopics() {
    // Lists all topics in the current project
    const [topics] = await pubSubClient.getTopics();
    console.log('Topics:');
    topics.forEach(topic => console.log(topic.name));
  }

  listAllTopics().catch(console.error);
  // [END pubsub_list_topics]
}

main(...process.argv.slice(2));

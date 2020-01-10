// Copyright 2019-2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

// sample-metadata:
//   title: List Subscriptions On a Topic
//   description: Lists all subscriptions in the current project, filtering by a topic.
//   usage: node listTopicSubscriptions.js <topic-name>

function main(topicName = 'YOUR_TOPIC_NAME') {
  // [START pubsub_list_topic_subscriptions]
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function listTopicSubscriptions() {
    // Lists all subscriptions for the topic
    const [subscriptions] = await pubSubClient
      .topic(topicName)
      .getSubscriptions();

    console.log(`Subscriptions for ${topicName}:`);
    subscriptions.forEach(subscription => console.log(subscription.name));
  }

  listTopicSubscriptions().catch(console.error);
  // [END pubsub_list_topic_subscriptions]
}

main(...process.argv.slice(2));

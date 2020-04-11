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
//   title: Test Topic Permissions
//   description: Tests the permissions for a topic.
//   usage: node testTopicPermissions.js <topic-name>

function main(topicName = 'YOUR_TOPIC_NAME') {
  // [START pubsub_test_topic_permissions]
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const topicName = 'YOUR_TOPIC_NAME';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function testTopicPermissions() {
    const permissionsToTest = [
      'pubsub.topics.attachSubscription',
      'pubsub.topics.publish',
      'pubsub.topics.update',
    ];

    // Tests the IAM policy for the specified topic
    const [permissions] = await pubSubClient
      .topic(topicName)
      .iam.testPermissions(permissionsToTest);

    console.log('Tested permissions for topic: %j', permissions);
  }

  testTopicPermissions().catch(console.error);
  // [END pubsub_test_topic_permissions]
}

main(...process.argv.slice(2));

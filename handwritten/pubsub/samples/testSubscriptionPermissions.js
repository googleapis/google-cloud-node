// Copyright 2019-2023 Google LLC
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

// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Test Subscription Permissions
//   description: Tests the permissions for a subscription.
//   usage: node testSubscriptionPermissions.js <subscription-name-or-id>

// [START pubsub_test_subscription_permissions]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function testSubscriptionPermissions(subscriptionNameOrId) {
  const permissionsToTest = [
    'pubsub.subscriptions.consume',
    'pubsub.subscriptions.update',
  ];

  // Tests the IAM policy for the specified subscription
  const [permissions] = await pubSubClient
    .subscription(subscriptionNameOrId)
    .iam.testPermissions(permissionsToTest);

  console.log('Tested permissions for subscription: %j', permissions);
}
// [END pubsub_test_subscription_permissions]

function main(subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID') {
  testSubscriptionPermissions(subscriptionNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

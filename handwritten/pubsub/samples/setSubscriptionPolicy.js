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
//   title: Set Subscription IAM Policy
//   description: Sets the IAM policy for a subscription.
//   usage: node setSubscriptionPolicy.js <subscription-name>

function main(subscriptionName = 'YOUR_SUBSCRIPTION_NAME') {
  // [START pubsub_set_subscription_policy]
  /**
   * TODO(developer): Uncomment this variable before running the sample.
   */
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function setSubscriptionPolicy() {
    // The new IAM policy
    const newPolicy = {
      bindings: [
        {
          // Add a group as editors
          role: 'roles/pubsub.editor',
          members: ['group:cloud-logs@google.com'],
        },
        {
          // Add all users as viewers
          role: 'roles/pubsub.viewer',
          members: ['allUsers'],
        },
      ],
    };

    // Updates the IAM policy for the subscription
    const [updatedPolicy] = await pubSubClient
      .subscription(subscriptionName)
      .iam.setPolicy(newPolicy);

    console.log(`Updated policy for subscription: %j`, updatedPolicy.bindings);
  }

  setSubscriptionPolicy().catch(console.error);
  // [END pubsub_set_subscription_policy]
}

main(...process.argv.slice(2));

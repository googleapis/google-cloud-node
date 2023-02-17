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

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Set Subscription IAM Policy
//   description: Sets the IAM policy for a subscription.
//   usage: node setSubscriptionPolicy.js <subscription-name-or-id>

// [START pubsub_set_subscription_policy]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
import {PubSub, Policy} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function setSubscriptionPolicy(subscriptionNameOrId: string) {
  // The new IAM policy
  const newPolicy: Policy = {
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
    .subscription(subscriptionNameOrId)
    .iam.setPolicy(newPolicy);

  console.log('Updated policy for subscription: %j', updatedPolicy.bindings);
}
// [END pubsub_set_subscription_policy]

function main(subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID') {
  setSubscriptionPolicy(subscriptionNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

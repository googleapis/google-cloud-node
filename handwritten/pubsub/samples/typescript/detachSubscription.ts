// Copyright 2020-2023 Google LLC
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
 * This sample demonstrates how to detach subscriptions with the
 * Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Detach Subscription
//   description: Detaches a subscription from a topic.
//   usage: node detachSubscription.js <existing-subscription-name-or-id>

// [START pubsub_detach_subscription]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_EXISTING_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function detachSubscription(subscriptionNameOrId: string) {
  // Gets the status of the existing subscription
  const sub = pubSubClient.subscription(subscriptionNameOrId);
  const [detached] = await sub.detached();
  console.log(
    `Subscription ${subscriptionNameOrId} 'before' detached status: ${detached}`
  );

  await pubSubClient.detachSubscription(subscriptionNameOrId);
  console.log(`Subscription ${subscriptionNameOrId} detach request was sent.`);

  const [updatedDetached] = await sub.detached();
  console.log(
    `Subscription ${subscriptionNameOrId} 'after' detached status: ${updatedDetached}`
  );
}
// [END pubsub_detach_subscription]

function main(subscriptionNameOrId = 'YOUR_EXISTING_SUBSCRIPTION_NAME_OR_ID') {
  detachSubscription(subscriptionNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

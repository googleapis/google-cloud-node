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
//   title: Synchronous Pull with delivery attempt.
//   description: Receive messages synchronously with delivery attempt.
//   usage: node synchronousPullWithDeliveryAttempts.js <project-id> <subscription-name-or-id>

// [START pubsub_dead_letter_delivery_attempt]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library. v1 is for the lower level
// proto access.
const {v1} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use.
const subClient = new v1.SubscriberClient();

async function synchronousPullWithDeliveryAttempts(
  projectId,
  subscriptionNameOrId
) {
  // The low level API client requires a name only.
  const formattedSubscription =
    subscriptionNameOrId.indexOf('/') >= 0
      ? subscriptionNameOrId
      : subClient.subscriptionPath(projectId, subscriptionNameOrId);

  // The maximum number of messages returned for this request.
  // Pub/Sub may return fewer than the number specified.
  const request = {
    subscription: formattedSubscription,
    maxMessages: 10,
  };

  // The subscriber pulls a specified number of messages.
  const [response] = await subClient.pull(request);

  // Process the messages.
  const ackIds = [];
  for (const message of response.receivedMessages || []) {
    console.log(`Received message: ${message.message.data}`);
    console.log(`Delivery Attempt: ${message.deliveryAttempt}`);
    if (message.ackId) {
      ackIds.push(message.ackId);
    }
  }

  // Acknowledge all of the messages. You could also acknowledge
  // these individually, but this is more efficient.
  const ackRequest = {
    subscription: formattedSubscription,
    ackIds: ackIds,
  };
  await subClient.acknowledge(ackRequest);

  console.log('Done.');
}
// [END pubsub_dead_letter_delivery_attempt]

function main(
  projectId = 'YOUR_PROJECT_ID',
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID'
) {
  synchronousPullWithDeliveryAttempts(projectId, subscriptionNameOrId).catch(
    err => {
      console.error(err.message);
      process.exitCode = 1;
    }
  );
}

main(...process.argv.slice(2));

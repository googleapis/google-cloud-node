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
//   title: Subscribe With Flow Control Settings
//   description: Listen to messages with flow control settings, which are
//     properties of the client/listener instance.
//   usage: node subscribeWithFlowControlSettings.js <subscription-name-or-id>
//     [max-in-progress [timeout-in-seconds]]

// [START pubsub_subscriber_flow_settings]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const maxInProgress = 5;
// const timeout = 10;

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function subscribeWithFlowControlSettings(
  subscriptionNameOrId,
  maxInProgress,
  timeout
) {
  const subscriberOptions = {
    flowControl: {
      maxMessages: maxInProgress,
    },
  };

  // References an existing subscription.
  // Note that flow control settings are not persistent across subscribers.
  const subscription = pubSubClient.subscription(
    subscriptionNameOrId,
    subscriberOptions
  );

  console.log(
    `Subscriber to subscription ${subscription.name} is ready to receive messages at a controlled volume of ${maxInProgress} messages.`
  );

  const messageHandler = message => {
    console.log(`Received message: ${message.id}`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  subscription.on('message', messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.close();
  }, timeout * 1000);
}
// [END pubsub_subscriber_flow_settings]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  maxInProgress = 1,
  timeout = 10
) {
  maxInProgress = Number(maxInProgress);
  timeout = Number(timeout);

  subscribeWithFlowControlSettings(
    subscriptionNameOrId,
    maxInProgress,
    timeout
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

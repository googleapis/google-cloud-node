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
//   title: Listen For Errors
//   description: Listens to messages and errors for a subscription.
//   usage: node listenForErrors.js <subscription-name-or-id> [timeout-in-seconds]

// [START pubsub_subscriber_error_listener]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const timeout = 10;

// Imports the Google Cloud client library
import {Message, PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

function listenForErrors(subscriptionNameOrId: string, timeout: number) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Create an event handler to handle messages
  const messageHandler = (message: Message) => {
    // Do something with the message
    console.log(`Message: ${message}`);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Create an event handler to handle errors
  const errorHandler = (error: Error) => {
    // Do something with the error
    console.error(`ERROR: ${error}`);
    throw error;
  };

  // Listen for new messages/errors until timeout is hit
  subscription.on('message', messageHandler);
  subscription.on('error', errorHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    subscription.removeListener('error', errorHandler);
  }, timeout * 1000);
}
// [END pubsub_subscriber_error_listener]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 10
) {
  timeout = Number(timeout);
  listenForErrors(subscriptionNameOrId, timeout);
}

main(...process.argv.slice(2));

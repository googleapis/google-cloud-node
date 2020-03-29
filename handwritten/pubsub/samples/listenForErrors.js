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
//   title: Listen For Errors
//   description: Listens to messages and errors for a subscription.
//   usage: node listenForErrors.js <subscription-name> [timeout-in-seconds]

async function main(subscriptionName = 'YOUR_SUBSCRIPTION_NAME', timeout = 10) {
  timeout = Number(timeout);

  // [START pubsub_subscriber_error_listener]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
  // const timeout = 10;

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  function listenForErrors() {
    // References an existing subscription
    const subscription = pubSubClient.subscription(subscriptionName);

    // Create an event handler to handle messages
    const messageHandler = function(message) {
      // Do something with the message
      console.log(`Message: ${message}`);

      // "Ack" (acknowledge receipt of) the message
      message.ack();
    };

    // Create an event handler to handle errors
    const errorHandler = function(error) {
      // Do something with the error
      console.error(`ERROR: ${error}`);
      throw error;
    };

    // Listen for new messages/errors until timeout is hit
    subscription.on('message', messageHandler);
    subscription.on('error', errorHandler);

    setTimeout(() => {
      subscription.removeListener('message', messageHandler);
      subscription.removeListener('error', errorHandler);
    }, timeout * 1000);
  }

  listenForErrors();
  // [END pubsub_subscriber_error_listener]
}

main(...process.argv.slice(2)).catch(e => {
  console.error(e);
  process.exitCode = -1;
});

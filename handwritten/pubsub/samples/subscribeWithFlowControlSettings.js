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
//   title: Subscribe With Flow Control Settings
//   description: Listen to messages with flow control settings, which are
//     properties of the client/listener instance.
//   usage: node subscribeWithFlowControlSettings.js <subscription-name>
//     [max-in-progress [timeout-in-seconds]]

function main(
  subscriptionName = 'YOUR_SUBSCRIPTION_NAME',
  maxInProgress = 1,
  timeout = 10
) {
  maxInProgress = Number(maxInProgress);
  timeout = Number(timeout);

  // [START pubsub_subscriber_flow_settings]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
  // const maxInProgress = 5;
  // const timeout = 10;

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function subscribeWithFlowControlSettings() {
    const subscriberOptions = {
      flowControl: {
        maxMessages: maxInProgress,
      },
    };

    // References an existing subscription.
    // Note that flow control settings are not persistent across subscribers.
    const subscription = pubSubClient.subscription(
      subscriptionName,
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

    subscription.on(`message`, messageHandler);

    setTimeout(() => {
      subscription.close();
    }, timeout * 1000);
  }

  // [END pubsub_subscriber_flow_settings]
  subscribeWithFlowControlSettings().catch(console.error);
}

main(...process.argv.slice(2));

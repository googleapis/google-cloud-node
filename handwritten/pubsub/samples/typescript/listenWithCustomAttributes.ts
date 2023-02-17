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
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Listen For Messages With Custom Attributes
//   description: Demonstrates how to receive and process custom attributes on messages.
//   usage: node listenWithCustomAttributes.js <subscription-name-or-id> [timeout-in-seconds]

// [START pubsub_subscriber_async_pull_custom_attributes]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const timeout = 60;

// Imports the Google Cloud client library
import {Message, PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listenWithCustomAttributes(
  subscriptionNameOrId: string,
  timeout: number
) {
  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Create an event handler to handle messages
  const messageHandler = (message: Message) => {
    console.log(
      `Received message: id ${message.id}, data ${
        message.data
      }, attributes: ${JSON.stringify(message.attributes)}`
    );

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Wait a while for the subscription to run. (Part of the sample only.)
  subscription.on('message', messageHandler);
  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
  }, timeout * 1000);
}
// [END pubsub_subscriber_async_pull_custom_attributes]

async function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 60
) {
  timeout = Number(timeout);
  listenWithCustomAttributes(subscriptionNameOrId, timeout).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

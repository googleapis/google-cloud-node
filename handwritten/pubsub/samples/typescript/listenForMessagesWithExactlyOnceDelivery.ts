// Copyright 2022 Google LLC
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
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Listen with exactly-once delivery
//   description: Listen for messages on an exactly-once delivery subscription.
//   usage: node listenForMessagesWithExactlyOnceDelivery.js <subscription-name-or-id>

// [START pubsub_subscriber_exactly_once]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
import {Message, PubSub, AckError} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listenForMessagesWithExactlyOnceDelivery(
  subscriptionNameOrId: string,
  timeout: number
) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = async (message: Message) => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount++;

    // Use `ackWithResponse()` instead of `ack()` to get a Promise that tracks
    // the result of the acknowledge call. When exactly-once delivery is enabled
    // on the subscription, the message is guaranteed not to be delivered again
    // if the ack Promise resolves.
    try {
      // When the Promise resolves, the value is always AckResponses.Success,
      // signaling that the ack was accepted. Note that you may call this
      // method on a subscription without exactly-once delivery, but it will
      // always return AckResponses.Success.
      await message.ackWithResponse();
      console.log(`Ack for message ${message.id} successful.`);
    } catch (e) {
      // In all other cases, the error passed on reject will explain why. This
      // is only for permanent failures; transient errors are retried automatically.
      const ackError = e as AckError;
      console.log(
        `Ack for message ${message.id} failed with error: ${ackError.errorCode}`
      );
    }
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
// [END pubsub_subscriber_exactly_once]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 60
) {
  listenForMessagesWithExactlyOnceDelivery(
    subscriptionNameOrId,
    Number(timeout)
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

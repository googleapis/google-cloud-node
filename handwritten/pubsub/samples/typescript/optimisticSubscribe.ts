// Copyright 2024 Google LLC
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
 * This sample demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Optimistic Subscribe
//   description: Listens for messages from a subscription, creating it if needed.
//   usage: node optimisticSubscribe.js <subscription-name-or-id> <topic-name-or-id> [timeout-in-seconds]

// [START pubsub_optimistic_subscribe]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const timeout = 60;

// Imports the Google Cloud client library
import {PubSub, Message, StatusError} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

function optimisticSubscribe(
  subscriptionNameOrId: string,
  topicNameOrId: string,
  timeout: number,
) {
  // Try using an existing subscription
  let subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = (message: Message) => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Set an error handler so that we're notified if the subscription doesn't
  // already exist.
  subscription.on('error', async (e: StatusError) => {
    // Resource Not Found
    if (e.code === 5) {
      console.log('Subscription not found, creating it');
      await pubSubClient.createSubscription(
        topicNameOrId,
        subscriptionNameOrId,
      );

      // Refresh our subscriber object and re-attach the message handler.
      subscription = pubSubClient.subscription(subscriptionNameOrId);
      subscription.on('message', messageHandler);
    }
  });

  // Listen for new messages until timeout is hit; this will attempt to
  // open the actual subscriber streams. If it fails, the error handler
  // above will be called.
  subscription.on('message', messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
// [END pubsub_optimistic_subscribe]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  timeout = 60,
) {
  timeout = Number(timeout);
  optimisticSubscribe(subscriptionNameOrId, topicNameOrId, timeout);
}

main(...process.argv.slice(2));

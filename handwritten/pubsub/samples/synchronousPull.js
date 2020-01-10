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
//   title: Synchronous Pull
//   description: Receive messages synchronously.
//   usage: node synchronousPull.js <project-id> <subscription-name>

function main(
  projectId = 'YOUR_PROJECT_ID',
  subscriptionName = 'YOUR_SUBSCRIPTION_NAME'
) {
  // [START pubsub_subscriber_sync_pull]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

  // Imports the Google Cloud client library. v1 is for the lower level
  // proto access.
  const {v1} = require('@google-cloud/pubsub');

  // Creates a client; cache this for further use.
  const subClient = new v1.SubscriberClient();

  async function synchronousPull() {
    const formattedSubscription = subClient.subscriptionPath(
      projectId,
      subscriptionName
    );
    // The maximum number of messages returned for this request.
    // Pub/Sub may return fewer than the number specified.
    const maxMessages = 1;
    const newAckDeadlineSeconds = 30;
    const request = {
      subscription: formattedSubscription,
      maxMessages: maxMessages,
    };

    let isProcessed = false;

    // The worker function is meant to be non-blocking. It starts a long-
    // running process, such as writing the message to a table, which may
    // take longer than the default 10-sec acknowledge deadline.
    function worker(message) {
      console.log(`Processing "${message.message.data}"...`);

      setTimeout(() => {
        console.log(`Finished procesing "${message.message.data}".`);
        isProcessed = true;
      }, 30000);
    }

    // The subscriber pulls a specified number of messages.
    const [response] = await subClient.pull(request);
    // Obtain the first message.
    const message = response.receivedMessages[0];
    // Send the message to the worker function.
    worker(message);

    let waiting = true;
    while (waiting) {
      await new Promise(r => setTimeout(r, 10000));
      // If the message has been processed..
      if (isProcessed) {
        const ackRequest = {
          subscription: formattedSubscription,
          ackIds: [message.ackId],
        };

        //..acknowledges the message.
        await subClient.acknowledge(ackRequest);
        console.log(`Acknowledged: "${message.message.data}".`);
        // Exit after the message is acknowledged.
        waiting = false;
        console.log(`Done.`);
      } else {
        // If the message is not yet processed..
        const modifyAckRequest = {
          subscription: formattedSubscription,
          ackIds: [message.ackId],
          ackDeadlineSeconds: newAckDeadlineSeconds,
        };

        //..reset its ack deadline.
        await subClient.modifyAckDeadline(modifyAckRequest);

        console.log(
          `Reset ack deadline for "${message.message.data}" for ${newAckDeadlineSeconds}s.`
        );
      }
    }
  }

  synchronousPull().catch(console.error);
  // [END pubsub_subscriber_sync_pull]
}

main(...process.argv.slice(2));

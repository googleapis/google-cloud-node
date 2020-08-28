// Copyright 2019-2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

// sample-metadata:
//   title: Publish With Retry Settings
//   description: Publishes a message to a topic with retry settings.
//   usage: node publishWithRetrySettings.js <project-id> <topic-name> <data>

function main(
  projectId = 'YOUR_PROJECT_ID',
  topicName = 'YOUR_TOPIC_NAME',
  data = JSON.stringify({foo: 'bar'})
) {
  // [START pubsub_publisher_retry_settings]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID'
  // const topicName = 'YOUR_TOPIC_NAME';
  // const data = JSON.stringify({foo: 'bar'});

  // Imports the Google Cloud client library. v1 is for the lower level
  // proto access.
  const {v1} = require('@google-cloud/pubsub');

  // Creates a publisher client.
  const publisherClient = new v1.PublisherClient({
    // optional auth parameters
  });

  async function publishWithRetrySettings() {
    const formattedTopic = publisherClient.projectTopicPath(
      projectId,
      topicName
    );

    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);
    const messagesElement = {
      data: dataBuffer,
    };
    const messages = [messagesElement];

    // Build the request
    const request = {
      topic: formattedTopic,
      messages: messages,
    };

    // Retry settings control how the publisher handles retryable failures
    // Default values are shown
    const retrySettings = {
      retryCodes: [
        10, // 'ABORTED'
        1, // 'CANCELLED',
        4, // 'DEADLINE_EXCEEDED'
        13, // 'INTERNAL'
        8, // 'RESOURCE_EXHAUSTED'
        14, // 'UNAVAILABLE'
        2, // 'UNKNOWN'
      ],
      backoffSettings: {
        // The initial delay time, in milliseconds, between the completion
        // of the first failed request and the initiation of the first retrying request.
        initialRetryDelayMillis: 100,
        // The multiplier by which to increase the delay time between the completion
        // of failed requests, and the initiation of the subsequent retrying request.
        retryDelayMultiplier: 1.3,
        // The maximum delay time, in milliseconds, between requests.
        // When this value is reached, retryDelayMultiplier will no longer be used to increase delay time.
        maxRetryDelayMillis: 60000,
        // The initial timeout parameter to the request.
        initialRpcTimeoutMillis: 5000,
        // The multiplier by which to increase the timeout parameter between failed requests.
        rpcTimeoutMultiplier: 1.0,
        // The maximum timeout parameter, in milliseconds, for a request. When this value is reached,
        // rpcTimeoutMultiplier will no longer be used to increase the timeout.
        maxRpcTimeoutMillis: 600000,
        // The total time, in milliseconds, starting from when the initial request is sent,
        // after which an error will be returned, regardless of the retrying attempts made meanwhile.
        totalTimeoutMillis: 600000,
      },
    };

    const [response] = await publisherClient.publish(request, {
      retry: retrySettings,
    });
    console.log(`Message ${response.messageIds} published.`);
  }

  publishWithRetrySettings().catch(console.error);
  // [END pubsub_publisher_retry_settings]
}

main(...process.argv.slice(2));

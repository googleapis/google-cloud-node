// Copyright 2021 Google LLC
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
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Publish with flow control
//   description: Publishes to a topic using publisher-side flow control.
//   usage: node publishWithFlowControl.js <topic-name-or-id>

// [START pubsub_publisher_flow_control]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishWithFlowControl(topicNameOrId) {
  // Create publisher options
  const options = {
    flowControlOptions: {
      maxOutstandingMessages: 50,
      maxOutstandingBytes: 10 * 1024 * 1024, // 10 MB
    },
  };

  // Get a publisher.
  const topic = pubSubClient.topic(topicNameOrId, options);

  // For flow controlled publishing, we'll use a publisher flow controller
  // instead of `topic.publish()`.
  const flow = topic.flowControlled();

  // Publish messages in a fast loop.
  const testMessage = {data: Buffer.from('test!')};
  for (let i = 0; i < 1000; i++) {
    // You can also just `await` on `publish()` unconditionally, but if
    // you want to avoid pausing to the event loop on each iteration,
    // you can manually check the return value before doing so.
    const wait = flow.publish(testMessage);
    if (wait) {
      await wait;
    }
  }

  // Wait on any pending publish requests. Note that you can call `all()`
  // earlier if you like, and it will return a Promise for all messages
  // that have been sent to `flowController.publish()` so far.
  const messageIds = await flow.all();
  console.log(`Published ${messageIds.length} with flow control settings.`);
}
// [END pubsub_publisher_flow_control]

function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {
  publishWithFlowControl(topicNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

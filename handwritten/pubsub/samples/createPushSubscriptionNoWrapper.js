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
//   title: Create Push Subscription With No Wrapper
//   description: Creates a new push subscription, but disables wrapping for payloads.
//   usage: node createPushSubscriptionNoWrapper.js <endpoint-url> <topic-name-or-id> <subscription-name-or-id>

// [START pubsub_create_unwrapped_push_subscription]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const pushEndpoint = 'YOUR_ENDPOINT_URL';
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createPushSubscriptionNoWrapper(
  pushEndpoint,
  topicNameOrId,
  subscriptionNameOrId
) {
  const options = {
    pushConfig: {
      // Set to an HTTPS endpoint of your choice. If necessary, register
      // (authorize) the domain on which the server is hosted.
      pushEndpoint,
      // When true, writes the Pub/Sub message metadata to
      // `x-goog-pubsub-<KEY>:<VAL>` headers of the HTTP request. Writes the
      // Pub/Sub message attributes to `<KEY>:<VAL>` headers of the HTTP request.
      noWrapper: {
        writeMetadata: true,
      },
    },
  };

  await pubSubClient
    .topic(topicNameOrId)
    .createSubscription(subscriptionNameOrId, options);
  console.log(`Subscription ${subscriptionNameOrId} created.`);
}
// [END pubsub_create_unwrapped_push_subscription]

function main(
  pushEndpoint = 'YOUR_ENDPOINT_URL',
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID'
) {
  createPushSubscriptionNoWrapper(
    pushEndpoint,
    topicNameOrId,
    subscriptionNameOrId
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

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
 * This snippet demonstrates how to perform basic operations on
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Create a Cloud Storage subscription
//   description: Demonstrates how to create a subscription with Cloud Storage.
//   usage: node createSubscriptionWithCloudStorage.js <topic-name> <subscription-name> <bucket> <filename-prefix> <filename-suffix> <max-duration>

// [START pubsub_create_cloud_storage_subscription]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicName = 'YOUR_TOPIC_NAME';
// const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
// const bucket = 'YOUR_BUCKET_ID';
// const filenamePrefix = 'YOUR_FILENAME_PREFIX';
// const filenameSuffix = 'YOUR_FILENAME_SUFFIX';
// const maxDuration = 60;

// Imports the Google Cloud client library
import {CreateSubscriptionOptions, PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createCloudStorageSubscription(
  topicName: string,
  subscriptionName: string,
  bucket: string,
  filenamePrefix: string,
  filenameSuffix: string,
  maxDuration: number
) {
  const options: CreateSubscriptionOptions = {
    cloudStorageConfig: {
      bucket,
      filenamePrefix,
      filenameSuffix,
      maxDuration: {
        seconds: maxDuration,
      },
    },
  };

  await pubSubClient
    .topic(topicName)
    .createSubscription(subscriptionName, options);

  console.log(
    `Created subscription ${subscriptionName} with a cloud storage configuration.`
  );
}
// [END pubsub_create_cloud_storage_subscription]

function main(
  topicName = 'YOUR_TOPIC_NAME',
  subscriptionName = 'YOUR_SUBSCRIPTION_NAME',
  bucket = 'YOUR_BUCKET_NAME',
  filenamePrefix = 'YOUR_FILENAME_PREFIX',
  filenameSuffix = 'YOUR_FILENAME_SUFFIX',
  maxDuration = 60
) {
  createCloudStorageSubscription(
    topicName,
    subscriptionName,
    bucket,
    filenamePrefix,
    filenameSuffix,
    maxDuration
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

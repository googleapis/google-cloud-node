// Copyright 2024 Google LLC
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
//   title: Create Topic With Kinesis Ingestion
//   description: Creates a new topic, with Kinesis ingestion enabled.
//   usage: node createTopicWithKinesisIngestion.js <topic-name> <role-arn> <gcp-service-account> <stream-arn> <consumer-arn>

// [START pubsub_create_topic_with_kinesis_ingestion]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const roleArn = 'arn:aws:iam:...';
// const gcpServiceAccount = 'ingestion-account@...';
// const streamArn = 'arn:aws:kinesis:...';
// const consumerArn = 'arn:aws:kinesis:...';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithKinesisIngestion(
  topicNameOrId,
  awsRoleArn,
  gcpServiceAccount,
  streamArn,
  consumerArn,
) {
  // Creates a new topic with Kinesis ingestion.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      awsKinesis: {
        awsRoleArn,
        gcpServiceAccount,
        streamArn,
        consumerArn,
      },
    },
  });
  console.log(`Topic ${topicNameOrId} created with AWS Kinesis ingestion.`);
}
// [END pubsub_create_topic_with_kinesis_ingestion]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  roleArn = 'arn:aws:iam:...',
  gcpServiceAccount = 'ingestion-account@...',
  streamArn = 'arn:aws:kinesis:...',
  consumerArn = 'arn:aws:kinesis:...',
) {
  createTopicWithKinesisIngestion(
    topicNameOrId,
    roleArn,
    gcpServiceAccount,
    streamArn,
    consumerArn,
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

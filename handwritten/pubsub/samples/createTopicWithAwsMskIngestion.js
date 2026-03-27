// Copyright 2025 Google LLC
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
//   title: Create Topic With AWS MSK Ingestion
//   description: Creates a new topic, with AWS MSK ingestion enabled.
//   usage: node createTopicWithAwsMskIngestion.js <topic-name> <cluster-arn> <msk-topic> <role-arn> <gcp-service-account>

// [START pubsub_create_topic_with_aws_msk_ingestion]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const clusterArn = 'arn:aws:kafka:...';
// const mskTopic = 'YOUR_MSK_TOPIC';
// const roleArn = 'arn:aws:iam:...';
// const gcpServiceAccount = 'ingestion-account@...';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithAwsMskIngestion(
  topicNameOrId,
  clusterArn,
  mskTopic,
  awsRoleArn,
  gcpServiceAccount,
) {
  // Creates a new topic with AWS MSK ingestion.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      awsMsk: {
        clusterArn,
        topic: mskTopic,
        awsRoleArn,
        gcpServiceAccount,
      },
    },
  });
  console.log(`Topic ${topicNameOrId} created with AWS MSK ingestion.`);
}
// [END pubsub_create_topic_with_aws_msk_ingestion]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  clusterArn = 'arn:aws:kafka:...',
  mskTopic = 'YOUR_MSK_TOPIC',
  roleArn = 'arn:aws:iam:...',
  gcpServiceAccount = 'ingestion-account@...',
) {
  createTopicWithAwsMskIngestion(
    topicNameOrId,
    clusterArn,
    mskTopic,
    roleArn,
    gcpServiceAccount,
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

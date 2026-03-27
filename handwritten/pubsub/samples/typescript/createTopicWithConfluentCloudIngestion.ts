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

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Create Topic With Confluent Cloud Ingestion
//   description: Creates a new topic, with Confluent Cloud ingestion enabled.
//   usage: node createTopicWithConfluentCloudIngestion.js <topic-name> <bootstrap-server> <cluster-id> <confluent-topic> <identity-pool-id> <gcp-service-account>

// [START pubsub_create_topic_with_confluent_cloud_ingestion]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const bootstrapServer = 'url:port';
// const clusterId = 'YOUR_CLUSTER_ID';
// const confluentTopic = 'YOUR_CONFLUENT_TOPIC';
// const identityPoolId = 'pool-ID';
// const gcpServiceAccount = 'ingestion-account@...';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithConfluentCloudIngestion(
  topicNameOrId: string,
  bootstrapServer: string,
  clusterId: string,
  confluentTopic: string,
  identityPoolId: string,
  gcpServiceAccount: string,
) {
  // Creates a new topic with Confluent Cloud ingestion.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      confluentCloud: {
        bootstrapServer,
        clusterId,
        topic: confluentTopic,
        identityPoolId,
        gcpServiceAccount,
      },
    },
  });
  console.log(`Topic ${topicNameOrId} created with Confluent Cloud ingestion.`);
}
// [END pubsub_create_topic_with_confluent_cloud_ingestion]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  bootstrapServer = 'url:port',
  clusterId = 'YOUR_CLUSTER_ID',
  confluentTopic = 'YOUR_CONFLUENT_TOPIC',
  identityPoolId = 'pool-ID',
  gcpServiceAccount = 'ingestion-account@...',
) {
  createTopicWithConfluentCloudIngestion(
    topicNameOrId,
    bootstrapServer,
    clusterId,
    confluentTopic,
    identityPoolId,
    gcpServiceAccount,
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

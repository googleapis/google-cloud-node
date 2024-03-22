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
//   title: Update Topic Ingestion Type
//   description: Update the ingestion type on a topic.
//   usage: node updateTopicIngestionType.js <topic-name-or-id> <stream-arn> <consumer-arn> <aws-role-arn> <gcp-service-account>

// [START pubsub_update_topic_type]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const awsRoleArn = 'arn:aws:iam:...';
// const gcpServiceAccount = 'ingestion-account@...';
// const streamArn = 'arn:aws:kinesis:...';
// const consumerArn = 'arn:aws:kinesis:...';

// Imports the Google Cloud client library
import {PubSub, TopicMetadata} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function updateTopicIngestionType(
  topicNameOrId: string,
  awsRoleArn: string,
  gcpServiceAccount: string,
  streamArn: string,
  consumerArn: string
) {
  const metadata: TopicMetadata = {
    ingestionDataSourceSettings: {
      awsKinesis: {
        awsRoleArn,
        gcpServiceAccount,
        streamArn,
        consumerArn,
      },
    },
  };

  await pubSubClient.topic(topicNameOrId).setMetadata(metadata);

  console.log('Topic updated with Kinesis source successfully.');
}
// [END pubsub_update_topic_type]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  roleArn = 'arn:aws:iam:...',
  gcpServiceAccount = 'ingestion-account@...',
  streamArn = 'arn:aws:kinesis:...',
  consumerArn = 'arn:aws:kinesis:...'
) {
  updateTopicIngestionType(
    topicNameOrId,
    roleArn,
    gcpServiceAccount,
    streamArn,
    consumerArn
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

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
//   title: Create Topic With Cloud Storage Ingestion
//   description: Creates a new topic, with Cloud Storage ingestion enabled.
//   usage: node createTopicWithCloudStorageIngestion.js <topic-name> <bucket> <input-format> <text-delimiter> <match-glob> <minimum-object-creation-time>

// [START pubsub_create_topic_with_cloud_storage_ingestion]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const bucket = 'YOUR_BUCKET_NAME';
// const inputFormat = 'text';
// const textDelimiter = '\n';
// const matchGlob = '**.txt';
// const minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ;

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithCloudStorageIngestion(
  topicNameOrId,
  bucket,
  inputFormat,
  textDelimiter,
  matchGlob,
  minimumObjectCreateTime
) {
  const minimumDate = Date.parse(minimumObjectCreateTime);
  const topicMetadata = {
    name: topicNameOrId,
    ingestionDataSourceSettings: {
      cloudStorage: {
        bucket,
        minimumObjectCreateTime: {
          seconds: minimumDate / 1000,
          nanos: (minimumDate % 1000) * 1000,
        },
        matchGlob,
      },
    },
  };

  // Make a format appropriately.
  switch (inputFormat) {
    case 'text':
      topicMetadata.ingestionDataSourceSettings.cloudStorage.textFormat = {
        delimiter: textDelimiter,
      };
      break;
    case 'avro':
      topicMetadata.ingestionDataSourceSettings.cloudStorage.avroFormat = {};
      break;
    case 'pubsub_avro':
      topicMetadata.ingestionDataSourceSettings.cloudStorage.pubsubAvroFormat =
        {};
      break;
    default:
      console.error('inputFormat must be in ("text", "avro", "pubsub_avro")');
      return;
  }

  // Creates a new topic with Cloud Storage ingestion.
  await pubSubClient.createTopic(topicMetadata);
  console.log(`Topic ${topicNameOrId} created with Cloud Storage ingestion.`);
}
// [END pubsub_create_topic_with_cloud_storage_ingestion]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  bucket = 'YOUR_BUCKET_NAME',
  inputFormat = 'text',
  textDelimiter = '\n',
  matchGlob = '**.txt',
  minimumObjectCreateTime = 'YYYY-MM-DDThh:mm:ssZ'
) {
  createTopicWithCloudStorageIngestion(
    topicNameOrId,
    bucket,
    inputFormat,
    textDelimiter,
    matchGlob,
    minimumObjectCreateTime
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

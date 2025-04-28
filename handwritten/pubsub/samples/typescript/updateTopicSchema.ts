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
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Update Topic Schema
//   description: Update the schema on a topic.
//   usage: node updateTopicSchema.js <topic-name-or-id> <first-revision-id> <last-revision-id>

// [START pubsub_update_topic_schema]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const firstRevisionId = 'YOUR_REVISION_ID';
// const lastRevisionId = 'YOUR_REVISION_ID';

// Imports the Google Cloud client library
import {PubSub, TopicMetadata} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function updateTopicSchema(
  topicNameOrId: string,
  firstRevisionId: string,
  lastRevisionId: string,
) {
  const metadata: TopicMetadata = {
    schemaSettings: {
      firstRevisionId,
      lastRevisionId,
    },
  };

  await pubSubClient.topic(topicNameOrId).setMetadata(metadata);

  console.log('Schema metadata updated successfully.');
}
// [END pubsub_update_topic_schema]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  firstRevisionId = 'YOUR_REVISION_ID',
  lastRevisionId = 'YOUR_REVISION_ID',
) {
  updateTopicSchema(topicNameOrId, firstRevisionId, lastRevisionId).catch(
    err => {
      console.error(err.message);
      process.exitCode = 1;
    },
  );
}

main(...process.argv.slice(2));

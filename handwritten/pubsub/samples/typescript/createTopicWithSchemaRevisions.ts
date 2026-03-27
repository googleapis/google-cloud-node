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

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Create Topic With Schema Revisions
//   description: Creates a new topic, with a schema definition and revisions.
//   usage: node createTopicWithSchema.js <topic-name> <schema-name> <encoding-type> <first-revision-id> <last-revision-id>

// [START pubsub_create_topic_with_schema_revisions]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const schemaName = 'YOUR_SCHEMA_NAME_OR_ID';
// const encodingType = 'BINARY';
// const firstRevisionId = 'YOUR_REVISION_ID';
// const lastRevisionId = 'YOUR_REVISION_ID';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithSchemaRevisions(
  topicNameOrId: string,
  schemaNameOrId: string,
  encodingType: 'BINARY' | 'JSON',
  firstRevisionId: string,
  lastRevisionId: string,
) {
  // Get the fully qualified schema name.
  const schema = pubSubClient.schema(schemaNameOrId);
  const fullName = await schema.getName();

  // Creates a new topic with a schema. Note that you might also
  // pass Encodings.Json or Encodings.Binary here.
  await pubSubClient.createTopic({
    name: topicNameOrId,
    schemaSettings: {
      schema: fullName,
      encoding: encodingType,
      firstRevisionId,
      lastRevisionId,
    },
  });
  console.log(`Topic ${topicNameOrId} created with schema ${fullName}.`);
}
// [END pubsub_create_topic_with_schema_revisions]

function main(
  topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
  schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID',
  encodingType: 'BINARY' | 'JSON' = 'BINARY',
  firstRevisionId = 'YOUR_REVISION_ID',
  lastRevisionId = 'YOUR_REVISION_ID',
) {
  createTopicWithSchemaRevisions(
    topicNameOrId,
    schemaNameOrId,
    encodingType,
    firstRevisionId,
    lastRevisionId,
  ).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

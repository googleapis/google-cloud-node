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
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Delete a Schema Revision
//   description: Deletes a schema revision on a project
//   usage: node deleteSchemaRevision.js <schema-name> <revision-id>

// [START pubsub_delete_schema_revision]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';
// const revisionId = 'YOUR_REVISION_ID';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function deleteSchemaRevision(
  schemaNameOrId: string,
  revisionId: string,
) {
  // Get the fully qualified schema name.
  const schema = pubSubClient.schema(schemaNameOrId);
  const name = await schema.getName();

  // Use the gapic client to delete the schema revision.
  const schemaClient = await pubSubClient.getSchemaClient();
  await schemaClient.deleteSchemaRevision({
    name: `${name}@${revisionId}`,
  });

  console.log(`Schema ${name} revision ${revisionId} deleted.`);
}
// [END pubsub_delete_schema_revision]

function main(
  schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID',
  revisionId = 'YOUR_REVISION_ID',
) {
  deleteSchemaRevision(schemaNameOrId, revisionId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

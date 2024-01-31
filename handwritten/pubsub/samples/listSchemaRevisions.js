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
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: List Revisions on a Schema
//   description: Gets a list of revisions on a schema which was previously created in the project.
//   usage: node listSchemaRevisions.js <schema-name>

// [START pubsub_list_schema_revisions]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listSchemaRevisions(schemaNameOrId) {
  // Get the fully qualified schema name.
  const schema = pubSubClient.schema(schemaNameOrId);
  const name = await schema.getName();

  // Use the gapic client to list the schema revisions.
  const schemaClient = await pubSubClient.getSchemaClient();
  const [results] = await schemaClient.listSchemaRevisions({
    name,
  });
  for (const rev of results) {
    console.log(rev.revisionId, rev.revisionCreateTime);
  }
  console.log(`Listed revisions of schema ${name}.`);
}
// [END pubsub_list_schema_revisions]

function main(schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID') {
  listSchemaRevisions(schemaNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

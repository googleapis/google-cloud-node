// Copyright 2021 Google LLC
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
//   title: Get a previously created schema
//   description: Gets information about a schema which was previously created in the project.
//   usage: node getSchema.js <schema-name>

// [START pubsub_get_schema]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';

// Imports the Google Cloud client library
import {PubSub} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function getSchema(schemaNameOrId: string) {
  const schema = pubSubClient.schema(schemaNameOrId);
  const info = await schema.get();
  const fullName = await schema.getName();
  console.log(`Schema ${fullName} info: ${JSON.stringify(info, null, 4)}.`);
}
// [END pubsub_get_schema]

function main(schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID') {
  getSchema(schemaNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

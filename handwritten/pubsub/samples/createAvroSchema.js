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
//   title: Create an Avro based Schema
//   description: Creates a new schema definition on a project, using Avro
//   usage: node createAvroSchema.js <schema-name> <avsc-filename>

// [START pubsub_create_avro_schema]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';
// const avscFile = 'path/to/an/avro/schema/file/(.avsc)/formatted/in/json';

// Imports the Google Cloud client library
const {PubSub, SchemaTypes} = require('@google-cloud/pubsub');

const fs = require('fs');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createAvroSchema(schemaNameOrId, avscFile) {
  const definition = fs.readFileSync(avscFile).toString();
  const schema = await pubSubClient.createSchema(
    schemaNameOrId,
    SchemaTypes.Avro,
    definition
  );

  const name = await schema.getName();
  console.log(`Schema ${name} created.`);
}
// [END pubsub_create_avro_schema]

function main(
  schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID',
  avscFile = 'path/to/an/avro/schema/file/(.avsc)/formatted/in/json'
) {
  createAvroSchema(schemaNameOrId, avscFile).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

// Copyright 2019-2023 Google LLC
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
//   title: Validate a schema definition
//   description: Validates an Avro-based schema definition before creation (or other use).
//   usage: node validateSchema.js <schema-text>

// (No tag, currently - this sample is non-canonical)
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const schemaText = 'YOUR_SCHEMA_TEXT';

// Imports the Google Cloud client library
import {PubSub, SchemaTypes} from '@google-cloud/pubsub';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function validateSchema(schemaText: string) {
  try {
    await pubSubClient.validateSchema({
      type: SchemaTypes.Avro,
      definition: schemaText,
    });
    console.log('Validated with no error.');
  } catch (e) {
    console.log('Received error:', e);
  }
}
// (No tag, currently - this sample is non-canonical)

// Just a sample AVSC definition to try.
const sampleAvsc = `
{
  "type":"record",
  "name":"Province",
  "namespace":"utilities",
  "doc":"A list of provinces in Canada.",
  "fields":[
  {
    "name":"name",
    "type":"string",
    "doc":"The common name of the province."
  },
  {
    "name":"post_abbr",
    "type":"string",
    "doc":"The postal code abbreviation of the province."
  }
  ]
}
`;

function main(schemaText = sampleAvsc) {
  validateSchema(schemaText).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

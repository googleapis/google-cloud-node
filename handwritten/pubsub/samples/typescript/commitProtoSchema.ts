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
//   title: Commit an Proto-Based Schema
//   description: Commits a new schema definition revision on a project, using Protos
//   usage: node commitProtoSchema.js <schema-name> <proto-filename>

// [START pubsub_commit_proto_schema]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';
// const protoFile = 'path/to/a/proto/schema/file/(.proto)/formatted/in/protcol/buffers';

// Imports the Google Cloud client library
import {PubSub, SchemaTypes} from '@google-cloud/pubsub';

import * as fs from 'fs';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function commitProtoSchema(schemaNameOrId: string, protoFile: string) {
  // Get the fully qualified schema name.
  const schema = pubSubClient.schema(schemaNameOrId);
  const name = await schema.getName();

  // Read the new schema definition from storage.
  const definition: string = fs.readFileSync(protoFile).toString();

  // Use the gapic client to commit the new definition.
  const schemaClient = await pubSubClient.getSchemaClient();
  const [result] = await schemaClient.commitSchema({
    name,
    schema: {
      name,
      type: SchemaTypes.ProtocolBuffer,
      definition,
    },
  });

  console.log(`Schema ${name} committed with revision ${result.revisionId}.`);
}
// [END pubsub_commit_proto_schema]

function main(
  schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID',
  protoFile = 'path/to/a/proto/schema/file/(.proto)/formatted/in/protcol/buffers',
) {
  commitProtoSchema(schemaNameOrId, protoFile).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));

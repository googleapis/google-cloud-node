/**
 * Copyright 2024 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// sample-metadata:
//  title: Creates a new database with a proto column and enum
//  usage: node proto-type-add-column.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

const fs = require('fs');

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_add_proto_type_columns]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance-id';
  // const databaseId = 'my-database-id';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const databaseAdminClient = spanner.getDatabaseAdminClient();
  async function protoTypeAddColumn() {
    // Adds a new Proto Message column and Proto Enum column to the Singers table.

    const request = [
      `CREATE PROTO BUNDLE (
            examples.spanner.music.SingerInfo,
            examples.spanner.music.Genre,
            )`,
      'ALTER TABLE Singers ADD COLUMN SingerInfo examples.spanner.music.SingerInfo',
      'ALTER TABLE Singers ADD COLUMN SingerInfoArray ARRAY<examples.spanner.music.SingerInfo>',
      'ALTER TABLE Singers ADD COLUMN SingerGenre examples.spanner.music.Genre',
      'ALTER TABLE Singers ADD COLUMN SingerGenreArray ARRAY<examples.spanner.music.Genre>',
    ];

    // Read a proto descriptor file and convert it to a base64 string
    const protoDescriptor = fs
      .readFileSync('./resource/descriptors.pb')
      .toString('base64');

    // Alter existing table to add a column.
    const [operation] = await databaseAdminClient.updateDatabaseDdl({
      database: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      statements: request,
      protoDescriptors: protoDescriptor,
    });

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();
    console.log(
      `Altered table "Singers" on database ${databaseId} on instance ${instanceId} with proto descriptors.`,
    );
  }
  protoTypeAddColumn();
  // [END spanner_add_proto_type_columns]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

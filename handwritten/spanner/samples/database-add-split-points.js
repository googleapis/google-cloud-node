/**
 * Copyright 2025 Google LLC
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
//  title: Adds split points to a database.
//  usage: node database-add-split-points.js  <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance-id',
  databaseId = 'my-database-id',
  projectId = 'my-project-id',
) {
  async function addSplitPoints() {
    // [START spanner_database_add_split_points]
    // Import the Google Cloud client library for Spanner.
    const {Spanner} = require('@google-cloud/spanner');

    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance-id';
    // const databaseId = 'my-database-id';

    // Create a Spanner database admin client.
    const spanner = new Spanner({projectId});
    const databaseAdminClient = spanner.getDatabaseAdminClient();

    try {
      // Add split points to table and index
      // first is a table level split that takes table primary key value
      // second is index level split with index key parts
      // third is index level split having index key part and table key part
      // Assume the following table and index structure
      // CREATE TABLE Singers (
      // SingerId INT64 NOT NULL,
      // FirstName STRING(1024),
      // LastName STRING(1024),
      // SingerInfo BYTES(MAX),
      // ) PRIMARY KEY(SingerId);
      //
      // CREATE INDEX SingersByFirstLastName ON Singers(FirstName, LastName);
      const request = [
        'CREATE INDEX IF NOT EXISTS SingersByFirstLastName ON Singers(FirstName, LastName)',
      ];

      const [operation] = await databaseAdminClient.updateDatabaseDdl({
        database: databaseAdminClient.databasePath(
          projectId,
          instanceId,
          databaseId,
        ),
        statements: request,
      });

      console.log('Waiting for operation to complete...');
      await operation.promise();

      console.log('Added the SingersByFirstLastName index.');

      databaseAdminClient.addSplitPoints({
        database: databaseAdminClient.databasePath(
          projectId,
          instanceId,
          databaseId,
        ),
        splitPoints: [
          {
            table: 'Singers',
            keys: [{keyParts: {values: [{stringValue: '42'}]}}],
          },
          {
            index: 'SingersByFirstLastName',
            keys: [
              {
                keyParts: {
                  values: [{stringValue: 'John'}, {stringValue: 'Doe'}],
                },
              },
            ],
          },
          {
            index: 'SingersByFirstLastName',
            keys: [
              {
                keyParts: {
                  values: [{stringValue: 'Jane'}, {stringValue: 'Doe'}],
                },
              },
              {keyParts: {values: [{stringValue: '38'}]}},
            ],
          },
        ],
      });
      console.log('Added Split Points');
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_database_add_split_points]
  }

  addSplitPoints();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

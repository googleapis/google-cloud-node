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

// sample-metadata:
//  title: Updates a Cloud Spanner Database.
//  usage: node database-update.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_update_database]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function updateDatabase() {
    // Update the database metadata fields
    try {
      console.log(
        `Updating database ${databaseAdminClient.databasePath(
          projectId,
          instanceId,
          databaseId,
        )}.`,
      );
      const [operation] = await databaseAdminClient.updateDatabase({
        database: {
          name: databaseAdminClient.databasePath(
            projectId,
            instanceId,
            databaseId,
          ),
          enableDropProtection: true,
        },
        // updateMask contains the fields to be updated in database
        updateMask: (protos.google.protobuf.FieldMask = {
          paths: ['enable_drop_protection'],
        }),
      });
      console.log(
        `Waiting for update operation for ${databaseId} to complete...`,
      );
      await operation.promise();
      console.log(`Updated database ${databaseId}.`);
    } catch (err) {
      console.log('ERROR:', err);
    }
  }
  updateDatabase();
  // [END spanner_update_database]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

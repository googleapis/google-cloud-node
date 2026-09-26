// Copyright 2022 Google LLC
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
//  title: Delete using DML returning on a Spanner PostgreSQL database.
//  usage: node pg-dml-returning-delete.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_postgresql_delete_dml_returning]
  // Imports the Google Cloud client library.
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  function pgDeleteUsingDmlReturning(instanceId, databaseId) {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    database.runTransaction(async (err, transaction) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        const [rows, stats] = await transaction.run({
          sql: 'DELETE FROM Singers WHERE SingerId = 18 RETURNING FullName',
        });

        const rowCount = Math.floor(stats[stats.rowCount]);
        console.log(
          `Successfully deleted ${rowCount} record from the Singers table.`,
        );
        rows.forEach(row => {
          console.log(row.toJSON().fullname);
        });

        await transaction.commit();
      } catch (err) {
        console.error('ERROR:', err);
      } finally {
        // Close the database when finished.
        database.close();
      }
    });
  }
  pgDeleteUsingDmlReturning(instanceId, databaseId);
  // [END spanner_postgresql_delete_dml_returning]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

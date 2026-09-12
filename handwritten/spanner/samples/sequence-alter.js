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
//  title: Alters a sequence in a GoogleSQL database.
//  usage: node sequence-alter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_alter_sequence]

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

  async function alterSequence(instanceId, databaseId) {
    // Gets a reference to a Cloud Spanner Database Admin Client object
    const databaseAdminClient = spanner.getDatabaseAdminClient();

    const request = [
      'ALTER SEQUENCE Seq SET OPTIONS (skip_range_min = 1000, skip_range_max = 5000000)',
    ];

    try {
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

      console.log(
        'Altered Seq sequence to skip an inclusive range between 1000 and 5000000.',
      );
    } catch (err) {
      console.error('ERROR:', err);
    }

    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    database.runTransaction(async (err, transaction) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        const [rows, stats] = await transaction.run({
          sql: "INSERT INTO Customers (CustomerName) VALUES ('Lea'), ('Catalina'), ('Smith') THEN RETURN CustomerId",
        });

        rows.forEach(row => {
          console.log(
            `Inserted customer record with CustomerId: ${
              row.toJSON({wrapNumbers: true}).CustomerId.value
            }`,
          );
        });

        const rowCount = Math.floor(stats[stats.rowCount]);
        console.log(`Number of customer records inserted is: ${rowCount}`);

        await transaction.commit();
      } catch (err) {
        console.error('ERROR:', err);
      } finally {
        // Close the database when finished.
        await database.close();
      }
    });
  }
  await alterSequence(instanceId, databaseId);
  // [END spanner_alter_sequence]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

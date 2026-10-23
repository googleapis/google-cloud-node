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
//  title: Creates sequence in PostgreSQL database.
//  usage: node pg-sequence-create.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_postgresql_create_sequence]
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

  async function createSequence(instanceId, databaseId) {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const request = [
      'CREATE SEQUENCE Seq BIT_REVERSED_POSITIVE',
      "CREATE TABLE Customers (CustomerId BIGINT DEFAULT nextval('Seq'), CustomerName character varying(1024), PRIMARY KEY (CustomerId))",
    ];

    // Creates a new table with sequence
    try {
      const [operation] = await database.updateSchema(request);

      console.log('Waiting for operation to complete...');
      await operation.promise();

      console.log(
        'Created Seq sequence and Customers table, where the key column CustomerId uses the sequence as a default value',
      );
    } catch (err) {
      console.error('ERROR:', err);
    }
    database.runTransaction(async (err, transaction) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        const [rows, stats] = await transaction.run({
          sql: "INSERT INTO Customers (CustomerName) VALUES ('Alice'), ('David'), ('Marc') RETURNING CustomerId",
        });

        rows.forEach(row => {
          console.log(
            `Inserted customer record with CustomerId: ${
              row.toJSON({wrapNumbers: true}).customerid.value
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
  await createSequence(instanceId, databaseId);
  // [END spanner_postgresql_create_sequence]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

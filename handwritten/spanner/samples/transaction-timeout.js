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
//  title: Executes a read/write transaction with transaction timeout
//  usage: node transaction-timeout.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, projectId) {
  // [START spanner_transaction_timeout]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function executeTransactionWithTimeout() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const options = {
      timeout: 60000, // 60 seconds timeout
    };

    try {
      await database.runTransactionAsync(options, async tx => {
        const [results] = await tx.run(
          'SELECT SingerId, FirstName, LastName FROM Singers ORDER BY LastName, FirstName',
        );
        results.forEach(result => {
          console.log(
            `${result[0].name}: ${result[0].value.value}, ${result[1].name}: ${result[1].value}, ${result[2].name}: ${result[2].value}`,
          );
        });
        const sql =
          "INSERT INTO Singers (SingerId, FirstName, LastName) VALUES (100, 'George', 'Washington')";
        const [rowCount] = await tx.runUpdate(sql);
        console.log(`${rowCount} record inserted.`);
        await tx.commit();
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      await database.close();
    }
  }
  executeTransactionWithTimeout();
  // [END spanner_transaction_timeout]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

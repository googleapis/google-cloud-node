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
//  title: Executes a read/write transaction with statement timeout
//  usage: node statement-timeout.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, projectId) {
  // [START spanner_set_statement_timeout]
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

  async function executeSqlWithTimeout() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    try {
      await database.runTransactionAsync(async tx => {
        // NOTE: You can use gaxOptions to set a custom timeout for a single RPC
        // invocation. This timeout can however ONLY BE SHORTER than the default timeout
        // for the RPC. If you set a timeout that is longer than the default timeout, then
        // the default timeout will be used.
        const query = {
          sql: "INSERT INTO Singers (SingerId, FirstName, LastName) VALUES (110, 'George', 'Washington')",
          gaxOptions: {
            timeout: 60000, // 60 seconds timeout
          },
        };
        const results = await tx.run(query);
        console.log(`${results[1].rowCountExact} record inserted.`);
        await tx.commit();
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      await database.close();
    }
  }
  executeSqlWithTimeout();
  // [END spanner_set_statement_timeout]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

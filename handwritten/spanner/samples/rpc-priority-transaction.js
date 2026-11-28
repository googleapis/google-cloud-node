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
//  title: Run transaction with RPC priority
//  usage: node rpc-priority-transaction.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_rpc_priority_transaction]
  // Imports the Google Cloud client library.
  const {Spanner, protos} = require('@google-cloud/spanner');
  const Priority = protos.google.spanner.v1.RequestOptions.Priority;

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

  function transactionWithRpcPriority(instanceId, databaseId) {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    database.runTransaction(async (err, transaction) => {
      if (err) {
        console.error(err);
        return;
      }
      try {
        const [rowCount] = await transaction.runUpdate({
          sql: 'INSERT Singers (SingerId, FirstName, LastName) VALUES (17, @firstName, @lastName)',
          params: {
            firstName: 'Virginia',
            lastName: 'Watson',
          },
        });

        await transaction.commit({
          priority: Priority.PRIORITY_LOW,
        });

        console.log(
          `Successfully inserted ${rowCount} record into the Singers table using low RPC priority.`,
        );
      } catch (err) {
        console.error('ERROR:', err);
      } finally {
        // Close the database when finished.
        database.close();
      }
    });
  }
  transactionWithRpcPriority(instanceId, databaseId);
  // [END spanner_rpc_priority_transaction]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
//  title: Run Batch update with RPC priority
//  usage: node rpc-priority-batch-dml.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_rpc_priority_batch_dml]
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

  async function updateUsingBatchDmlWithRpcPriority(instanceId, databaseId) {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const insert = {
      sql: `INSERT INTO Albums (SingerId, AlbumId, AlbumTitle, MarketingBudget)
      VALUES (1, 4, "Test Album Title", 10000)`,
    };

    const update = {
      sql: `UPDATE Albums SET MarketingBudget = MarketingBudget * 2
      WHERE SingerId = 1 and AlbumId = 4`,
    };

    const dmlStatements = [insert, update];

    try {
      await database.runTransactionAsync(async transaction => {
        const [rowCounts] = await transaction.batchUpdate(dmlStatements, {
          requestOptions: {
            priority: Priority.PRIORITY_LOW,
          },
        });
        await transaction.commit();
        console.log(
          `Successfully executed ${rowCounts.length} SQL statements using Batch DML using low RPC priority.`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
      throw err;
    } finally {
      // Close the database when finished.
      database.close();
    }
  }
  await updateUsingBatchDmlWithRpcPriority(instanceId, databaseId);
  // [END spanner_rpc_priority_batch_dml]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

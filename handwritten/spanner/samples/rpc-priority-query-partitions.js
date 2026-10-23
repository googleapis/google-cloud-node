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
//  title: Create partitions with RPC priority
//  usage: node rpc-priority-query-partitions.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(instanceId, databaseId, projectId) {
  // [START spanner_rpc_priority_query_partitions]
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

  async function createAndExecuteQueryPartitionsWithRpcPriority(
    instanceId,
    databaseId,
  ) {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);
    const [transaction] = await database.createBatchTransaction();

    const [partitions] = await transaction.createQueryPartitions({
      sql: 'SELECT * FROM Singers',
      requestOptions: {
        priority: Priority.PRIORITY_LOW,
      },
    });
    console.log(
      `Successfully created ${partitions.length} query partitions using low RPC priority.`,
    );

    let row_count = 0;
    const promises = [];
    partitions.forEach(partition => {
      // Partition object inherits priority from createQueryPartitions call.
      // Priority for a partition can also be assigned or changed while executing partition.
      partition.requestOptions = {
        priority: Priority.PRIORITY_MEDIUM,
      };

      promises.push(
        transaction.execute(partition).then(results => {
          const rows = results[0].map(row => row.toJSON());
          row_count += rows.length;
        }),
      );
    });
    Promise.all(promises)
      .then(() => {
        console.log(
          `Successfully received ${row_count} from executed partitions.`,
        );
        transaction.close();
      })
      .then(() => {
        database.close();
      });
  }

  createAndExecuteQueryPartitionsWithRpcPriority(instanceId, databaseId);
  // [END spanner_rpc_priority_query_partitions]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

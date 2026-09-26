// Copyright 2018 Google LLC
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

'use strict';

async function createAndExecuteQueryPartitions(
  instanceId,
  databaseId,
  projectId,
) {
  // [START spanner_batch_client]
  // Imports the Google Cloud client library
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

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);
  const [transaction] = await database.createBatchTransaction();

  const query = {
    sql: 'SELECT * FROM Singers',
    // DataBoost option is an optional parameter which can also be used for partition read
    // and query to execute the request via spanner independent compute resources.
    dataBoostEnabled: true,
  };

  // A Partition object is serializable and can be used from a different process.
  const [partitions] = await transaction.createQueryPartitions(query);
  console.log(`Successfully created ${partitions.length} query partitions.`);

  let row_count = 0;
  const promises = [];
  partitions.forEach(partition => {
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
  // [END spanner_batch_client]
}

async function executePartition(
  instanceId,
  databaseId,
  identifier,
  partition,
  projectId,
) {
  // [START spanner_batch_execute_partitions]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const identifier = {};
  // const partition = {};

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);
  const transaction = database.batchTransaction(identifier);

  const [rows] = await transaction.execute(partition);
  console.log(`Successfully received ${rows.length} from executed partition.`);
  // [END spanner_batch_execute_partitions]
}

require('yargs')
  .demand(1)
  .command(
    'create-and-execute-query-partitions <instanceName> <databaseName> <projectId>',
    'Creates query partitions and executes them.',
    {},
    opts =>
      createAndExecuteQueryPartitions(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'execute-partition <instanceName> <databaseName> <identifier> <partition> <projectId>',
    'Executes a partition.',
    {},
    opts =>
      executePartition(
        opts.instanceName,
        opts.databaseName,
        JSON.parse(opts.identifier),
        JSON.parse(opts.partition),
        opts.projectId,
      ),
  )
  .example(
    'node $0 create-and-execute-query-partitions "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 execute-partition "my-instance" "my-database" "{}" "{}" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

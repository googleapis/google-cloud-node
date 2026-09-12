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
//  title: Execute a batch of DML statements on a Spanner PostgreSQL database.
//  usage: node pg-dml-batch.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_batch_dml]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud Spanner client library
  const {Spanner} = require('@google-cloud/spanner');

  // Instantiates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function pgBatchDml() {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const insert1 = {
      sql: `INSERT INTO singers (singerid, firstname, lastname)
      VALUES ($1, $2, $3)`,
      params: {
        p1: 1,
        p2: 'Alice',
        p3: 'Henderson',
      },
      types: {
        p1: 'int64',
        p2: 'string',
        p3: 'string',
      },
    };

    const insert2 = {
      sql: `INSERT INTO singers (singerid, firstname, lastname)
            VALUES (2, 'Shruti', 'Hassan')`,
    };

    const insert3 = {
      sql: `INSERT INTO singers (singerid, firstname, lastname)
      VALUES ($1, $2, $3)`,
      params: {
        p1: 3,
        p2: 'Olivia',
        p3: 'Garcia',
      },
    };

    const dmlStatements = [insert1, insert2, insert3];

    // Batches multiple DML statements into one request, which reduces the number of round trips that is needed for
    // multiple DML statements.
    try {
      await database.runTransactionAsync(async transaction => {
        const [rowCounts] = await transaction.batchUpdate(dmlStatements);
        await transaction.commit();
        console.log(
          `Successfully executed ${rowCounts.length} postgreSQL statements using Batch DML.`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
      throw err;
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }
  pgBatchDml();
  // [END spanner_postgresql_batch_dml]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

// sample-metadata:
//  title: DML

function insertUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_standard_insert]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: 'INSERT Singers (SingerId, FirstName, LastName) VALUES (10, @firstName, @lastName)',
        params: {
          firstName: 'Virginia',
          lastName: 'Watson',
        },
      });

      console.log(
        `Successfully inserted ${rowCount} record into the Singers table.`,
      );

      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_standard_insert]
}

function updateUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_standard_update]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: `UPDATE Albums SET MarketingBudget = MarketingBudget * 2
          WHERE SingerId = 1 and AlbumId = 1`,
      });

      console.log(`Successfully updated ${rowCount} record.`);
      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_standard_update]
}

function deleteUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_standard_delete]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: "DELETE FROM Singers WHERE FirstName = 'Alice'",
      });

      console.log(`Successfully deleted ${rowCount} record.`);
      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_standard_delete]
}

function updateUsingDmlWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_dml_standard_update_with_timestamp]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: `UPDATE Albums
          SET LastUpdateTime = PENDING_COMMIT_TIMESTAMP()
          WHERE SingerId = 1`,
      });

      console.log(`Successfully updated ${rowCount} records.`);
      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_standard_update_with_timestamp]
}

function writeAndReadUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_write_then_read]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      await transaction.runUpdate({
        sql: `INSERT Singers (SingerId, FirstName, LastName)
          VALUES (11, 'Timothy', 'Campbell')`,
      });

      const [rows] = await transaction.run({
        sql: 'SELECT FirstName, LastName FROM Singers',
      });
      rows.forEach(row => {
        const json = row.toJSON();
        console.log(`${json.FirstName} ${json.LastName}`);
      });

      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_write_then_read]
}

function updateUsingDmlWithStruct(instanceId, databaseId, projectId) {
  // [START spanner_dml_structs]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  const nameStruct = Spanner.struct({
    FirstName: 'Timothy',
    LastName: 'Campbell',
  });

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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: `UPDATE Singers SET LastName = 'Grant'
        WHERE STRUCT<FirstName STRING, LastName STRING>(FirstName, LastName) = @name`,
        params: {
          name: nameStruct,
        },
      });

      console.log(`Successfully updated ${rowCount} record.`);
      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });
  // [END spanner_dml_structs]
}

function writeUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_getting_started_insert]
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

  database.runTransaction(async (err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      const [rowCount] = await transaction.runUpdate({
        sql: `INSERT Singers (SingerId, FirstName, LastName) VALUES
        (12, 'Melissa', 'Garcia'),
        (13, 'Russell', 'Morales'),
        (14, 'Jacqueline', 'Long'),
        (15, 'Dylan', 'Shaw')`,
      });
      console.log(`${rowCount} records inserted.`);
      await transaction.commit();
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  });

  // [END spanner_dml_getting_started_insert]
}

async function queryDataWithParameter(instanceId, databaseId, projectId) {
  // [START spanner_query_with_parameter]
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

  const query = {
    sql: `SELECT SingerId, FirstName, LastName
          FROM Singers WHERE LastName = @lastName`,
    params: {
      lastName: 'Garcia',
    },
  };

  // Queries rows from the Albums table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `SingerId: ${json.SingerId}, FirstName: ${json.FirstName}, LastName: ${json.LastName}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_parameter]
}

function writeWithTransactionUsingDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_getting_started_update]
  // This sample transfers 200,000 from the MarketingBudget field
  // of the second Album to the first Album, as long as the second
  // Album has enough money in its budget. Make sure to run the
  // addColumn and updateData samples first (in that order).

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

  const transferAmount = 200000;

  database.runTransaction((err, transaction) => {
    if (err) {
      console.error(err);
      return;
    }
    let firstBudget, secondBudget;
    const queryOne = `SELECT MarketingBudget FROM Albums
      WHERE SingerId = 2 AND AlbumId = 2`;

    const queryTwo = `SELECT MarketingBudget FROM Albums
    WHERE SingerId = 1 AND AlbumId = 1`;

    Promise.all([
      // Reads the second album's budget
      transaction.run(queryOne).then(results => {
        // Gets second album's budget
        const rows = results[0].map(row => row.toJSON());
        secondBudget = rows[0].MarketingBudget;
        console.log(`The second album's marketing budget: ${secondBudget}`);

        // Makes sure the second album's budget is large enough
        if (secondBudget < transferAmount) {
          throw new Error(
            `The second album's budget (${secondBudget}) is less than the transfer amount (${transferAmount}).`,
          );
        }
      }),

      // Reads the first album's budget
      transaction.run(queryTwo).then(results => {
        // Gets first album's budget
        const rows = results[0].map(row => row.toJSON());
        firstBudget = rows[0].MarketingBudget;
        console.log(`The first album's marketing budget: ${firstBudget}`);
      }),
    ])
      .then(() => {
        // Transfers the budgets between the albums
        console.log(firstBudget, secondBudget);
        firstBudget += transferAmount;
        secondBudget -= transferAmount;

        console.log(firstBudget, secondBudget);

        // Updates the database
        // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they
        // must be converted (back) to strings before being inserted as INT64s.

        return transaction
          .runUpdate({
            sql: `UPDATE Albums SET MarketingBudget = @Budget
                WHERE SingerId = 1 and AlbumId = 1`,
            params: {
              Budget: firstBudget,
            },
          })
          .then(() =>
            transaction.runUpdate({
              sql: `UPDATE Albums SET MarketingBudget = @Budget
                    WHERE SingerId = 2 and AlbumId = 2`,
              params: {
                Budget: secondBudget,
              },
            }),
          );
      })
      .then(() => {
        // Commits the transaction and send the changes to the database
        return transaction.commit();
      })
      .then(() => {
        console.log(
          `Successfully executed read-write transaction using DML to transfer ${transferAmount} from Album 2 to Album 1.`,
        );
      })
      .then(() => {
        // Closes the database when finished
        database.close();
      });
  });
  // [END spanner_dml_getting_started_update]
}

async function updateUsingPartitionedDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_partitioned_update]
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

  try {
    const [rowCount] = await database.runPartitionedUpdate({
      sql: 'UPDATE Albums SET MarketingBudget = 100000 WHERE SingerId > 1',
    });
    console.log(`Successfully updated ${rowCount} records.`);
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_dml_partitioned_update]
}

async function deleteUsingPartitionedDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_partitioned_delete]
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

  try {
    const [rowCount] = await database.runPartitionedUpdate({
      sql: 'DELETE FROM Singers WHERE SingerId > 10',
    });
    console.log(`Successfully deleted ${rowCount} records.`);
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_dml_partitioned_delete]
}

async function updateUsingBatchDml(instanceId, databaseId, projectId) {
  // [START spanner_dml_batch_update]
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

  const insert = {
    sql: `INSERT INTO Albums (SingerId, AlbumId, AlbumTitle, MarketingBudget)
      VALUES (1, 3, "Test Album Title", 10000)`,
  };

  const update = {
    sql: `UPDATE Albums SET MarketingBudget = MarketingBudget * 2
      WHERE SingerId = 1 and AlbumId = 3`,
  };

  const dmlStatements = [insert, update];

  try {
    await database.runTransactionAsync(async transaction => {
      const [rowCounts] = await transaction.batchUpdate(dmlStatements);
      await transaction.commit();
      console.log(
        `Successfully executed ${rowCounts.length} SQL statements using Batch DML.`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
    throw err;
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_dml_batch_update]
}

async function insertWithCustomTimeoutAndRetrySettings(
  instanceId,
  databaseId,
  projectId,
) {
  // [START spanner_set_custom_timeout_and_retry]
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
  const UNAVAILABLE_STATUS_CODE = 14;
  const retryAndTimeoutSettings = {
    retry: {
      // The set of error codes that will be retried.
      retryCodes: [UNAVAILABLE_STATUS_CODE],
      backoffSettings: {
        // Configure retry delay settings.
        // The initial amount of time to wait before retrying the request.
        initialRetryDelayMillis: 500,
        // The maximum amount of time to wait before retrying. I.e. after this
        // value is reached, the wait time will not increase further by the
        // multiplier.
        maxRetryDelayMillis: 16000,
        // The previous wait time is multiplied by this multiplier to come up
        // with the next wait time, until the max is reached.
        retryDelayMultiplier: 1.5,

        // Configure RPC and total timeout settings.
        // Timeout for the first RPC call. Subsequent retries will be based off
        // this value.
        initialRpcTimeoutMillis: 60000,
        // Controls the change of timeout for each retry.
        rpcTimeoutMultiplier: 1.0,
        // The max for the per RPC timeout.
        maxRpcTimeoutMillis: 60000,
        // The timeout for all calls (first call + all retries).
        totalTimeoutMillis: 60000,
      },
    },
  };

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);
  const table = database.table('Singers');

  const row = {
    SingerId: 16,
    FirstName: 'Martha',
    LastName: 'Waller',
  };

  await table.insert(row, retryAndTimeoutSettings);

  console.log('record inserted.');
  // [END spanner_set_custom_timeout_and_retry]
}

require('yargs')
  .demand(1)
  .command(
    'insertUsingDml <instanceName> <databaseName> <projectId>',
    'Inserts one record using DML into an example Cloud Spanner table.',
    {},
    opts =>
      insertUsingDml(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'updateUsingDml <instanceName> <databaseName> <projectId>',
    'Updates one record using DML.',
    {},
    opts =>
      updateUsingDml(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'deleteUsingDml <instanceName> <databaseName> <projectId>',
    'Deletes one record using DML.',
    {},
    opts =>
      deleteUsingDml(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'updateUsingDmlWithTimestamp <instanceName> <databaseName> <projectId>',
    'Updates records with timestamp using DML.',
    {},
    opts =>
      updateUsingDmlWithTimestamp(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'writeAndReadUsingDml <instanceName> <databaseName> <projectId>',
    'Inserts and reads one record using DML.',
    {},
    opts =>
      writeAndReadUsingDml(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'updateUsingDmlWithStruct <instanceName> <databaseName> <projectId>',
    'Updates one record using DML and a struct value.',
    {},
    opts =>
      updateUsingDmlWithStruct(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'writeUsingDml <instanceName> <databaseName> <projectId>',
    'Inserts multiple records using DML.',
    {},
    opts => writeUsingDml(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithParameter <instanceName> <databaseName> <projectId>',
    'Query record inserted using DML with a query parameter.',
    {},
    opts =>
      queryDataWithParameter(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'writeWithTransactionUsingDml <instanceName> <databaseName> <projectId>',
    'Execute a read-write transaction using DML.',
    {},
    opts =>
      writeWithTransactionUsingDml(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'updateUsingPartitionedDml <instanceName> <databaseName> <projectId>',
    'Updates multiple records using DML.',
    {},
    opts =>
      updateUsingPartitionedDml(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'deleteUsingPartitionedDml <instanceName> <databaseName> <projectId>',
    'Deletes multilple records using DML.',
    {},
    opts =>
      deleteUsingPartitionedDml(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'updateUsingBatchDml <instanceName> <databaseName> <projectId>',
    'Insert and Update records using Batch DML.',
    {},
    opts =>
      updateUsingBatchDml(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'insertWithCustomTimeoutAndRetrySettings <instanceName> <databaseName> <projectId>',
    'Insert records using custom timeout and retry settings.',
    {},
    opts =>
      insertWithCustomTimeoutAndRetrySettings(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .example('node $0 insertUsingDml "my-instance" "my-database" "my-project-id"')
  .example('node $0 updateUsingDml "my-instance" "my-database" "my-project-id"')
  .example('node $0 deleteUsingDml "my-instance" "my-database" "my-project-id"')
  .example(
    'node $0 updateUsingDmlWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 writeAndReadUsingDml "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 updateUsingDmlWithStruct "my-instance" "my-database" "my-project-id"',
  )
  .example('node $0 writeUsingDml "my-instance" "my-database" "my-project-id"')
  .example(
    'node $0 queryWithParameter "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 writeWithTransactionUsingDml "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 updateUsingPartitionedDml "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 deleteUsingPartitionedDml "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 updateUsingBatchDml "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 insertWithCustomTimeoutAndRetrySettings "my-instance" "my-database" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

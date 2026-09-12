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

async function createTableWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_create_table_with_timestamp_column]
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

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they
  // must be converted to strings before being inserted as INT64s
  const request = [
    `CREATE TABLE Performances (
        SingerId    INT64 NOT NULL,
        VenueId     INT64 NOT NULL,
        EventDate   DATE,
        Revenue     INT64,
        LastUpdateTime TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
      ) PRIMARY KEY (SingerId, VenueId, EventDate),
      INTERLEAVE IN PARENT Singers ON DELETE CASCADE`,
  ];

  // Creates a table in an existing database
  const [operation] = await databaseAdminClient.updateDatabaseDdl({
    database: databaseAdminClient.databasePath(
      projectId,
      instanceId,
      databaseId,
    ),
    statements: request,
  });

  console.log(`Waiting for operation on ${databaseId} to complete...`);

  await operation.promise();

  console.log(`Created table Performances in database ${databaseId}.`);
  // [END spanner_create_table_with_timestamp_column]
}

async function insertWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_insert_data_with_timestamp_column]
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

  // Instantiate Spanner table objects
  const performancesTable = database.table('Performances');

  const data = [
    {
      SingerId: '1',
      VenueId: '4',
      EventDate: '2017-10-05',
      Revenue: '11000',
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      SingerId: '1',
      VenueId: '19',
      EventDate: '2017-11-02',
      Revenue: '15000',
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      SingerId: '2',
      VenueId: '42',
      EventDate: '2017-12-23',
      Revenue: '7000',
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
  ];

  // Inserts rows into the Singers table
  // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so
  // they must be converted to strings before being inserted as INT64s
  try {
    await performancesTable.insert(data);
    console.log('Inserted data.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished
    database.close();
  }
  // [END spanner_insert_data_with_timestamp_column]
}

async function queryTableWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_query_new_table_with_timestamp_column]
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
    sql: `SELECT SingerId, VenueId, EventDate, Revenue, LastUpdateTime
            FROM Performances
		    ORDER BY LastUpdateTime DESC`,
  };

  // Queries rows from the Performances table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `SingerId: ${json.SingerId}, VenueId: ${json.VenueId}, EventDate: ${json.EventDate}, Revenue: ${json.Revenue}, LastUpdateTime: ${json.LastUpdateTime}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished
    database.close();
  }
  // [END spanner_query_new_table_with_timestamp_column]
}

async function addTimestampColumn(instanceId, databaseId, projectId) {
  // [START spanner_add_timestamp_column]
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

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  const request = [
    `ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS
    (allow_commit_timestamp=true)`,
  ];

  // Adds a new commit timestamp column to the Albums table
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
      'Added LastUpdateTime as a commit timestamp column in Albums table.',
    );
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the spanner client when finished.
    // The databaseAdminClient does not require explicit closure. The closure of the Spanner client will automatically close the databaseAdminClient.
    spanner.close();
  }
  // [END spanner_add_timestamp_column]
}

async function updateWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_update_data_with_timestamp_column]
  // [START_EXCLUDE]
  // This sample uses the `MarketingBudget` column. You can add the column
  // by running the `schema.js addColumn` sample or by running this DDL statement against
  // your database:
  //    ALTER TABLE Albums ADD COLUMN MarketingBudget INT64
  //
  // In addition this update expects the `LastUpdateTime` column
  // added by running the `timestamp.js addTimestampColumn` sample
  // or applying the DDL statement:
  //    ALTER TABLE Albums ADD COLUMN
  //    LastUpdateTime TIMESTAMP OPTIONS (allow_commit_timestamp=true)
  // [END_EXCLUDE]

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

  // Update a row in the Albums table
  // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they
  // must be converted to strings before being inserted as INT64s
  const albumsTable = database.table('Albums');

  const data = [
    {
      SingerId: '1',
      AlbumId: '1',
      MarketingBudget: '1000000',
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      SingerId: '2',
      AlbumId: '2',
      MarketingBudget: '750000',
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
  ];

  try {
    await albumsTable.update(data);
    console.log('Updated data.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished
    database.close();
  }
  // [END spanner_update_data_with_timestamp_column]
}

async function queryWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_query_data_with_timestamp_column]
  // [START_EXCLUDE]
  // This sample uses the `MarketingBudget` column. You can add the column
  // by running the `schema.js addColumn` sample or by running this DDL statement against
  // your database:
  //    ALTER TABLE Albums ADD COLUMN MarketingBudget INT64
  //
  // In addition this query expects the `LastUpdateTime` column
  // added by running the `timestamp.js addTimestampColumn` sample
  // or applying the DDL statement:
  //    ALTER TABLE Albums ADD COLUMN
  //    LastUpdateTime TIMESTAMP OPTIONS (allow_commit_timestamp=true)
  // [END_EXCLUDE]

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
    sql: `SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime
            FROM Albums ORDER BY LastUpdateTime DESC`,
  };

  // Queries rows from the Albums table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();

      console.log(
        `SingerId: ${json.SingerId}, AlbumId: ${
          json.AlbumId
        }, MarketingBudget: ${
          json.MarketingBudget ? json.MarketingBudget : null
        }, LastUpdateTime: ${json.LastUpdateTime}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished
    database.close();
  }
  // [END spanner_query_data_with_timestamp_column]
}

require('yargs')
  .demand(1)
  .command(
    'createTableWithTimestamp <instanceName> <databaseName> <projectId>',
    'Creates an example table with a commit timestamp column in a Cloud Spanner database.',
    {},
    opts =>
      createTableWithTimestamp(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'insertWithTimestamp <instanceName> <databaseName> <projectId>',
    'Inserts new rows of data including commit timestamps into an example Cloud Spanner table.',
    {},
    opts =>
      insertWithTimestamp(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryTableWithTimestamp <instanceName> <databaseName> <projectId>',
    'Executes a read-only SQL query against an example Cloud Spanner table created with a commit timestamp column.',
    {},
    opts =>
      queryTableWithTimestamp(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'addTimestampColumn <instanceName> <databaseName> <projectId>',
    'Adds a example commit timestamp column to an existing example Cloud Spanner table.',
    {},
    opts =>
      addTimestampColumn(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'updateWithTimestamp <instanceName> <databaseName> <projectId>',
    'Modifies existing rows of data in an example Cloud Spanner table with a commit timestamp column..',
    {},
    opts =>
      updateWithTimestamp(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithTimestamp <instanceName> <databaseName> <projectId>',
    `Executes a read-only SQL query against an example Cloud Spanner table with an additional
    column (LastUpdateTime) added by addTimestampColumn.`,
    {},
    opts =>
      queryWithTimestamp(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .example(
    'node $0 createTableWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 insertWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 queryTableWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 addTimestampColumn "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 updateWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 queryWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

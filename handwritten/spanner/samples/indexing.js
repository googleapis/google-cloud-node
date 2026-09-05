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

'use strict';

async function createIndex(instanceId, databaseId, projectId) {
  // [START spanner_create_index]
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

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  const request = ['CREATE INDEX AlbumsByAlbumTitle ON Albums(AlbumTitle)'];

  // Creates a new index in the database
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

    console.log('Added the AlbumsByAlbumTitle index.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the spanner client when finished.
    // The databaseAdminClient does not require explicit closure. The closure of the Spanner client will automatically close the databaseAdminClient.
    spanner.close();
  }
  // [END spanner_create_index]
}

async function createStoringIndex(instanceId, databaseId, projectId) {
  // [START spanner_create_storing_index]
  // "Storing" indexes store copies of the columns they index
  // This speeds up queries, but takes more space compared to normal indexes
  // See the link below for more information:
  // https://cloud.google.com/spanner/docs/secondary-indexes#storing_clause

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

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  const request = [
    'CREATE INDEX AlbumsByAlbumTitle2 ON Albums(AlbumTitle) STORING (MarketingBudget)',
  ];

  // Creates a new index in the database
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

    console.log('Added the AlbumsByAlbumTitle2 index.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the spanner client when finished.
    // The databaseAdminClient does not require explicit closure. The closure of the Spanner client will automatically close the databaseAdminClient.
    spanner.close();
  }
  // [END spanner_create_storing_index]
}

async function queryDataWithIndex(
  instanceId,
  databaseId,
  startTitle,
  endTitle,
  projectId,
) {
  // [START spanner_query_data_with_index]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const startTitle = 'Ardvark';
  // const endTitle = 'Goo';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const query = {
    sql: `SELECT AlbumId, AlbumTitle, MarketingBudget
          FROM Albums@{FORCE_INDEX=AlbumsByAlbumTitle}
          WHERE AlbumTitle >= @startTitle AND AlbumTitle <= @endTitle`,
    params: {
      startTitle: startTitle,
      endTitle: endTitle,
    },
  };

  // Queries rows from the Albums table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      const marketingBudget = json.MarketingBudget
        ? json.MarketingBudget
        : null; // This value is nullable
      console.log(
        `AlbumId: ${json.AlbumId}, AlbumTitle: ${json.AlbumTitle}, MarketingBudget: ${marketingBudget}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_data_with_index]
}

async function readDataWithIndex(instanceId, databaseId, projectId) {
  // [START spanner_read_data_with_index]
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

  const albumsTable = database.table('Albums');

  const query = {
    columns: ['AlbumId', 'AlbumTitle'],
    keySet: {
      all: true,
    },
    index: 'AlbumsByAlbumTitle',
  };

  // Reads the Albums table using an index
  try {
    const [rows] = await albumsTable.read(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`AlbumId: ${json.AlbumId}, AlbumTitle: ${json.AlbumTitle}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_read_data_with_index]
}

async function readDataWithStoringIndex(instanceId, databaseId, projectId) {
  // [START spanner_read_data_with_storing_index]
  // "Storing" indexes store copies of the columns they index
  // This speeds up queries, but takes more space compared to normal indexes
  // See the link below for more information:
  // https://cloud.google.com/spanner/docs/secondary-indexes#storing_clause

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

  const albumsTable = database.table('Albums');

  const query = {
    columns: ['AlbumId', 'AlbumTitle', 'MarketingBudget'],
    keySet: {
      all: true,
    },
    index: 'AlbumsByAlbumTitle2',
  };

  // Reads the Albums table using a storing index
  try {
    const [rows] = await albumsTable.read(query);

    rows.forEach(row => {
      const json = row.toJSON();
      let rowString = `AlbumId: ${json.AlbumId}`;
      rowString += `, AlbumTitle: ${json.AlbumTitle}`;
      if (json.MarketingBudget) {
        rowString += `, MarketingBudget: ${json.MarketingBudget}`;
      }
      console.log(rowString);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_read_data_with_storing_index]
}

require('yargs')
  .demand(1)
  .command(
    'createIndex <instanceName> <databaseName> <projectId>',
    'Creates a new index in an example Cloud Spanner table.',
    {},
    opts => createIndex(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'createStoringIndex <instanceName> <databaseName> <projectId>',
    'Creates a new value-storing index in an example Cloud Spanner table.',
    {},
    opts =>
      createStoringIndex(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryIndex <instanceName> <databaseName> <projectId>',
    `Executes a read-only SQL query against an example Cloud Spanner table using an existing index.
    Returns results with titles between a start title (default: 'Ardvark') and an end title (default: 'Goo').`,
    {
      startTitle: {
        type: 'string',
        alias: 's',
        default: 'Ardvark',
      },
      endTitle: {
        type: 'string',
        alias: 'e',
        default: 'Goo',
      },
    },
    opts =>
      queryDataWithIndex(
        opts.instanceName,
        opts.databaseName,
        opts.startTitle,
        opts.endTitle,
        opts.projectId,
      ),
  )
  .command(
    'readIndex <instanceName> <databaseName> <projectId>',
    'Reads data from an example Cloud Spanner table using an existing index.',
    {},
    opts =>
      readDataWithIndex(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'readStoringIndex <instanceName> <databaseName> <projectId>',
    'Reads data from an example Cloud Spanner table using an existing storing index.',
    {},
    opts =>
      readDataWithStoringIndex(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .example('node $0 createIndex "my-instance" "my-database" "my-project-id"')
  .example(
    'node $0 createStoringIndex "my-instance" "my-database" "my-project-id"',
  )
  .example('node $0 queryIndex "my-instance" "my-database" "my-project-id"')
  .example('node $0 readIndex "my-instance" "my-database" "my-project-id"')
  .example(
    'node $0 readStoringIndex "my-instance" "my-database" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

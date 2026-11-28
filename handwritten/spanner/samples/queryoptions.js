// Copyright 2020 Google LLC
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

async function databaseWithQueryOptions(instanceId, databaseId, projectId) {
  // [START spanner_create_client_with_query_options]
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
  const database = instance.database(
    databaseId,
    {},
    {
      optimizerVersion: '1',
      // The list of available statistics packages can be found by querying the
      // "INFORMATION_SCHEMA.SPANNER_STATISTICS" table.
      optimizerStatisticsPackage: 'latest',
    },
  );

  const query = {
    sql: `SELECT AlbumId, AlbumTitle, MarketingBudget
          FROM Albums
          ORDER BY AlbumTitle`,
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
  // [END spanner_create_client_with_query_options]
}

async function queryWithQueryOptions(instanceId, databaseId, projectId) {
  // [START spanner_query_with_query_options]
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
    sql: `SELECT AlbumId, AlbumTitle, MarketingBudget
          FROM Albums
          ORDER BY AlbumTitle`,
    queryOptions: {
      optimizerVersion: 'latest',
      // The list of available statistics packages can be found by querying the
      // "INFORMATION_SCHEMA.SPANNER_STATISTICS" table.
      optimizerStatisticsPackage: 'latest',
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
  // [END spanner_query_with_query_options]
}

require('yargs')
  .demand(1)
  .command(
    'databaseWithQueryOptions <instanceName> <databaseName> <projectId>',
    'Gets a database reference with default query options and executes a query',
    {},
    opts =>
      databaseWithQueryOptions(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'queryWithQueryOptions <instanceName> <databaseName> <projectId>',
    'Executes a query using specific query options',
    {},
    opts =>
      queryWithQueryOptions(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 databaseWithQueryOptions "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 queryWithQueryOptions "my-instance" "my-database" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

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

async function createVenuesTable(instanceId, databaseId, projectId) {
  // [START spanner_create_table_with_datatypes]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  const request = [
    `CREATE TABLE Venues (
        VenueId                INT64 NOT NULL,
        VenueName              STRING(100),
        VenueInfo              BYTES(MAX),
        Capacity               INT64,
        AvailableDates         ARRAY<DATE>,
        LastContactDate        Date,
        OutdoorVenue           BOOL,
        PopularityScore        FLOAT64,
        LastUpdateTime TIMESTAMP NOT NULL OPTIONS (allow_commit_timestamp=true)
      ) PRIMARY KEY (VenueId)`,
  ];

  // Creates a table in an existing database.
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

  console.log(`Created table Venues in database ${databaseId}.`);
  // [END spanner_create_table_with_datatypes]
}

async function insertData(instanceId, databaseId, projectId) {
  // [START spanner_insert_datatypes_data]
  // Imports the Google Cloud client library.
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Creates a client.
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  // Instantiate Spanner table objects.
  const venuesTable = database.table('Venues');
  const exampleBytes1 = new Buffer.from('Hello World 1');
  const exampleBytes2 = new Buffer.from('Hello World 2');
  const exampleBytes3 = new Buffer.from('Hello World 3');
  const availableDates1 = ['2020-12-01', '2020-12-02', '2020-12-03'];
  const availableDates2 = ['2020-11-01', '2020-11-05', '2020-11-15'];
  const availableDates3 = ['2020-10-01', '2020-10-07'];

  // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they
  // must be converted to strings before being inserted as INT64s.
  const data = [
    {
      VenueId: '4',
      VenueName: 'Venue 4',
      VenueInfo: exampleBytes1,
      Capacity: '1800',
      AvailableDates: availableDates1,
      LastContactDate: '2018-09-02',
      OutdoorVenue: false,
      PopularityScore: Spanner.float(0.85543),
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      VenueId: '19',
      VenueName: 'Venue 19',
      VenueInfo: exampleBytes2,
      Capacity: '6300',
      AvailableDates: availableDates2,
      LastContactDate: '2019-01-15',
      OutdoorVenue: true,
      PopularityScore: Spanner.float(0.98716),
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      VenueId: '42',
      VenueName: 'Venue 42',
      VenueInfo: exampleBytes3,
      Capacity: '3000',
      AvailableDates: availableDates3,
      LastContactDate: '2018-10-01',
      OutdoorVenue: false,
      PopularityScore: Spanner.float(0.72598),
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
  ];

  // Inserts rows into the Venues table.
  try {
    await venuesTable.insert(data);
    console.log('Inserted data.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_insert_datatypes_data]
}

async function queryWithArray(instanceId, databaseId, projectId) {
  // [START spanner_query_with_array_parameter]
  // Imports the Google Cloud client library.
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Creates a client.
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'date',
  };

  const parentFieldType = {
    type: 'array',
    child: fieldType,
  };

  const exampleArray = ['2020-10-01', '2020-11-01'];

  const query = {
    sql: `SELECT VenueId, VenueName, AvailableDate FROM Venues v,
            UNNEST(v.AvailableDates) as AvailableDate
            WHERE AvailableDate in UNNEST(@availableDates)`,
    params: {
      availableDates: exampleArray,
    },
    types: {
      availableDates: parentFieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);
    rows.forEach(row => {
      const availableDate = row[2]['value'];
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${
          json.VenueName
        }, AvailableDate: ${JSON.stringify(availableDate).substring(1, 11)}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_array_parameter]
}

async function queryWithBool(instanceId, databaseId, projectId) {
  // [START spanner_query_with_bool_parameter]
  // Imports the Google Cloud client library.
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

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'bool',
  };

  const exampleBool = true;

  const query = {
    sql: `SELECT VenueId, VenueName, OutdoorVenue FROM Venues
            WHERE OutdoorVenue = @outdoorVenue`,
    params: {
      outdoorVenue: exampleBool,
    },
    types: {
      outdoorVenue: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName},` +
          ` OutdoorVenue: ${json.OutdoorVenue}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_bool_parameter]
}

async function queryWithBytes(instanceId, databaseId, projectId) {
  // [START spanner_query_with_bytes_parameter]
  // Imports the Google Cloud client library.
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

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'bytes',
  };

  const exampleBytes = new Buffer.from('Hello World 1');

  const query = {
    sql: `SELECT VenueId, VenueName FROM Venues
            WHERE VenueInfo = @venueInfo`,
    params: {
      venueInfo: exampleBytes,
    },
    types: {
      venueInfo: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`VenueId: ${json.VenueId}, VenueName: ${json.VenueName}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_bytes_parameter]
}

async function queryWithDate(instanceId, databaseId, projectId) {
  // [START spanner_query_with_date_parameter]
  // Imports the Google Cloud client library.
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Creates a client.
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'date',
  };

  const exampleDate = '2019-01-01';

  const query = {
    sql: `SELECT VenueId, VenueName, LastContactDate FROM Venues
            WHERE LastContactDate < @lastContactDate`,
    params: {
      lastContactDate: exampleDate,
    },
    types: {
      lastContactDate: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const date = row[2]['value'];
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName},` +
          ` LastContactDate: ${JSON.stringify(date).substring(1, 11)}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_date_parameter]
}

async function queryWithFloat(instanceId, databaseId, projectId) {
  // [START spanner_query_with_float_parameter]
  // Imports the Google Cloud client library.
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

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'float64',
  };

  const exampleFloat = Spanner.float(0.8);

  const query = {
    sql: `SELECT VenueId, VenueName, PopularityScore FROM Venues
            WHERE PopularityScore > @popularityScore`,
    params: {
      popularityScore: exampleFloat,
    },
    types: {
      popularityScore: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName},` +
          ` PopularityScore: ${json.PopularityScore}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_float_parameter]
}

async function queryWithInt(instanceId, databaseId, projectId) {
  // [START spanner_query_with_int_parameter]
  // Imports the Google Cloud client library.
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

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'int64',
  };

  const exampleInt = 3000;

  const query = {
    sql: `SELECT VenueId, VenueName, Capacity FROM Venues
            WHERE Capacity >= @capacity`,
    params: {
      capacity: exampleInt,
    },
    types: {
      capacity: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName},` +
          ` Capacity: ${json.Capacity}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_int_parameter]
}

async function queryWithString(instanceId, databaseId, projectId) {
  // [START spanner_query_with_string_parameter]
  // Imports the Google Cloud client library.
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

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'string',
  };

  const exampleString = 'Venue 42';

  const query = {
    sql: `SELECT VenueId, VenueName FROM Venues
            WHERE VenueName = @venueName`,
    params: {
      venueName: exampleString,
    },
    types: {
      venueName: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`VenueId: ${json.VenueId}, VenueName: ${json.VenueName}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_string_parameter]
}

async function queryWithTimestamp(instanceId, databaseId, projectId) {
  // [START spanner_query_with_timestamp_parameter]
  // Imports the Google Cloud client library.
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Creates a client.
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const fieldType = {
    type: 'timestamp',
  };

  const exampleTimestamp = new Date().toISOString();

  const query = {
    sql: `SELECT VenueId, VenueName, LastUpdateTime FROM Venues
            WHERE LastUpdateTime < @lastUpdateTime`,
    params: {
      lastUpdateTime: exampleTimestamp,
    },
    types: {
      lastUpdateTime: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(
        `VenueId: ${json.VenueId}, VenueName: ${json.VenueName},` +
          ` LastUpdateTime: ${json.LastUpdateTime}`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_timestamp_parameter]
}

const {addNumericColumn} = require('./numeric-add-column');
const {updateWithNumericData} = require('./numeric-update-data');
const {queryWithNumericParameter} = require('./numeric-query-parameter');
const {addJsonColumn} = require('./json-add-column');
const {updateWithJsonData} = require('./json-update-data');
const {queryWithJsonParameter} = require('./json-query-parameter');

require('yargs')
  .demand(1)
  .command(
    'createVenuesTable <instanceName> <databaseName> <projectId>',
    'Creates sample "Venues" table containing example datatype columns in a Cloud Spanner database.',
    {},
    opts =>
      createVenuesTable(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'insertData <instanceName> <databaseName> <projectId>',
    'Inserts new rows of data into an sample "Venues" Cloud Spanner table.',
    {},
    opts => insertData(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithArray <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with an ARRAY datatype.",
    {},
    opts =>
      queryWithArray(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithBool <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a BOOL datatype.",
    {},
    opts => queryWithBool(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithBytes <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a BYTES datatype.",
    {},
    opts =>
      queryWithBytes(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithDate <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a DATE datatype.",
    {},
    opts => queryWithDate(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithFloat <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a FLOAT64 datatype.",
    {},
    opts =>
      queryWithFloat(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithInt <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a INT64 datatype.",
    {},
    opts => queryWithInt(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithString <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a STRING datatype.",
    {},
    opts =>
      queryWithString(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithTimestamp <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a TIMESTAMP datatype.",
    {},
    opts =>
      queryWithTimestamp(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'addNumericColumn <instanceName> <databaseName> <projectId>',
    'Adds a "Revenue" column to sample "Venues" table in a Cloud Spanner database.',
    {},
    opts =>
      addNumericColumn(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'updateWithNumericData <instanceName> <databaseName> <projectId>',
    'Updates rows to include "Revenue" in sample "Venues" Cloud Spanner table.',
    {},
    opts =>
      updateWithNumericData(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'queryWithNumericParameter <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a NUMERIC datatype.",
    {},
    opts =>
      queryWithNumericParameter(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'addJsonColumn <instanceName> <databaseName> <projectId>',
    'Adds a "VenueDetails" column to sample "Venues" table in a Cloud Spanner database.',
    {},
    opts => addJsonColumn(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'updateWithJsonData <instanceName> <databaseName> <projectId>',
    'Updates rows to include "VenueDetails" in sample "Venues" Cloud Spanner table.',
    {},
    opts =>
      updateWithJsonData(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithJsonParameter <instanceName> <databaseName> <projectId>',
    "Query data from the sample 'Venues' table with a JSON datatype.",
    {},
    opts =>
      queryWithJsonParameter(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 createVenuesTable "my-instance" "my-database" "my-project-id"',
  )
  .example('node $0 insertData "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithArray "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithBool "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithBytes "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithDate "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithFloat "my-instance" "my-database" "my-project-id"')
  .example('node $0 queryWithInt "my-instance" "my-database" "my-project-id"')
  .example(
    'node $0 queryWithString "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 queryWithTimestamp "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 addNumericColumn "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 updateWithNumericData "my-instance" "my-database" "my-project-id"',
  )
  .example(
    'node $0 queryWithNumericParameter "my-instance" "my-database" "my-project-id"',
  )
  .example('node $0 addJsonColumn "my-instance" "my-database" "my-project-id"')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

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

async function writeDataForStructQueries(instanceId, databaseId, projectId) {
  // [START spanner_write_data_for_struct_queries]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment and update the following lines before running the sample.
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

  // Instantiates Spanner table objects
  const singersTable = database.table('Singers');

  // Inserts rows into the Singers table
  // Note: Cloud Spanner interprets Javascript numbers as FLOAT64s.
  // Use strings as shown in this example if you need INT64s.
  try {
    const data = [
      {
        SingerId: '6',
        FirstName: 'Elena',
        LastName: 'Campbell',
      },
      {
        SingerId: '7',
        FirstName: 'Gabriel',
        LastName: 'Wright',
      },
      {
        SingerId: '8',
        FirstName: 'Benjamin',
        LastName: 'Martinez',
      },
      {
        SingerId: '9',
        FirstName: 'Hannah',
        LastName: 'Harris',
      },
    ];

    await singersTable.insert(data);
    console.log('Inserted data.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_write_data_for_struct_queries]
}

async function queryDataWithStruct(instanceId, databaseId, projectId) {
  // [START spanner_create_struct_with_data]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  const nameStruct = Spanner.struct({
    FirstName: 'Elena',
    LastName: 'Campbell',
  });
  // [END spanner_create_struct_with_data]

  // [START spanner_query_data_with_struct]
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
    sql:
      'SELECT SingerId FROM Singers WHERE ' +
      'STRUCT<FirstName STRING, LastName STRING>(FirstName, LastName) = @name',
    params: {
      name: nameStruct,
    },
  };

  // Queries rows from the Singers table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`SingerId: ${json.SingerId}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_data_with_struct]
}

async function queryWithArrayofStruct(instanceId, databaseId, projectId) {
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

  // [START spanner_create_user_defined_struct]
  const nameType = {
    type: 'struct',
    fields: [
      {
        name: 'FirstName',
        type: 'string',
      },
      {
        name: 'LastName',
        type: 'string',
      },
    ],
  };
  // [END spanner_create_user_defined_struct]

  // [START spanner_create_array_of_struct_with_data]
  const bandMembersType = {
    type: 'array',
    child: nameType,
  };

  const bandMembers = [
    Spanner.struct({
      FirstName: 'Elena',
      LastName: 'Campbell',
    }),
    Spanner.struct({
      FirstName: 'Gabriel',
      LastName: 'Wright',
    }),
    Spanner.struct({
      FirstName: 'Benjamin',
      LastName: 'Martinez',
    }),
  ];
  // [END spanner_create_array_of_struct_with_data]

  // [START spanner_query_data_with_array_of_struct]
  const query = {
    sql:
      'SELECT SingerId FROM Singers ' +
      'WHERE STRUCT<FirstName STRING, LastName STRING>(FirstName, LastName) ' +
      'IN UNNEST(@names) ' +
      'ORDER BY SingerId',
    params: {
      names: bandMembers,
    },
    types: {
      names: bandMembersType,
    },
  };

  // Queries rows from the Singers table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`SingerId: ${json.SingerId}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_data_with_array_of_struct]
}

async function queryStructField(instanceId, databaseId, projectId) {
  // [START spanner_field_access_on_struct_parameters]
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

  const nameStruct = Spanner.struct({
    FirstName: 'Elena',
    LastName: 'Campbell',
  });
  const query = {
    sql: 'SELECT SingerId FROM Singers WHERE FirstName = @name.FirstName',
    params: {
      name: nameStruct,
    },
  };

  // Queries rows from the Singers table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`SingerId: ${json.SingerId}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_field_access_on_struct_parameters]
}

async function queryNestedStructField(instanceId, databaseId, projectId) {
  // [START spanner_field_access_on_nested_struct_parameters]
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

  const nameType = {
    type: 'struct',
    fields: [
      {
        name: 'FirstName',
        type: 'string',
      },
      {
        name: 'LastName',
        type: 'string',
      },
    ],
  };

  // Creates Song info STRUCT with a nested ArtistNames array
  const songInfoType = {
    type: 'struct',
    fields: [
      {
        name: 'SongName',
        type: 'string',
      },
      {
        name: 'ArtistNames',
        type: 'array',
        child: nameType,
      },
    ],
  };

  const songInfoStruct = Spanner.struct({
    SongName: 'Imagination',
    ArtistNames: [
      Spanner.struct({FirstName: 'Elena', LastName: 'Campbell'}),
      Spanner.struct({FirstName: 'Hannah', LastName: 'Harris'}),
    ],
  });

  const query = {
    sql:
      'SELECT SingerId, @songInfo.SongName FROM Singers ' +
      'WHERE STRUCT<FirstName STRING, LastName STRING>(FirstName, LastName) ' +
      'IN UNNEST(@songInfo.ArtistNames)',
    params: {
      songInfo: songInfoStruct,
    },
    types: {
      songInfo: songInfoType,
    },
  };

  // Queries rows from the Singers table
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`SingerId: ${json.SingerId}, SongName: ${json.SongName}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_field_access_on_nested_struct_parameters]
}

require('yargs')
  .demand(1)
  .command(
    'writeDataForStructQueries <instanceName> <databaseName> <projectId>',
    'Inserts sample data to an existing table Singers.',
    {},
    opts =>
      writeDataForStructQueries(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'queryDataWithStruct <instanceName> <databaseName> <projectId>',
    'Queries Singers table using STRUCT parameters.',
    {},
    opts =>
      queryDataWithStruct(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryWithArrayOfStruct <instanceName> <databaseName> <projectId>',
    'Queries Singers table with an array of STRUCT parameters.',
    {},
    opts =>
      queryWithArrayofStruct(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .command(
    'queryStructField <instanceName> <databaseName> <projectId>',
    'Queries Singers table using a STRUCT parameter field.',
    {},
    opts =>
      queryStructField(opts.instanceName, opts.databaseName, opts.projectId),
  )
  .command(
    'queryNestedStructField <instanceName> <databaseName> <projectId>',
    'Queries Singers table using a nested STRUCT parameter field.',
    {},
    opts =>
      queryNestedStructField(
        opts.instanceName,
        opts.databaseName,
        opts.projectId,
      ),
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;

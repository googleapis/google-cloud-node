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
//  title: Showcase how to work with the PostgreSQL NUMERIC/DECIMAL data type on a Spanner PostgreSQL database.
//  usage: node ppg-numeric-data-type.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_numeric_data_type]
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

  async function pgNumericDataType() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    const request = [
      `CREATE TABLE Venues 
        (VenueId  bigint NOT NULL PRIMARY KEY,
        Name      varchar(1024) NOT NULL,
        Revenues  numeric
        );`,
    ];

    // Updates schema by adding a new table.
    const [operation] = await database.updateSchema(request);
    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();
    console.log(`Added table venues to database ${databaseId}.`);

    // Instantiate Spanner table objects.
    const venuesTable = database.table('venues');
    const revenues1 = Spanner.pgNumeric('97372.3863');
    const revenues2 = Spanner.pgNumeric(7629);
    const revenues3 = Spanner.pgNumeric(
      '1234567890.000012387293137871837817783828271273962412698378219372373072321997201370913293722379069869126846496978479842178917827474178248943891738912692839263826722738362982366832623281',
    );
    const revenues4 = Spanner.pgNumeric('1.23e-7');
    const revenues5 = Spanner.pgNumeric('NaN');

    const data = [
      {
        venueid: '4',
        name: 'Venue 4',
        revenues: revenues1,
      },
      {
        venueid: '19',
        name: 'Venue 19',
        revenues: revenues2,
      },
      {
        venueid: '42',
        name: 'Venue 42',
        revenues: revenues3,
      },
      {
        venueid: '398',
        name: 'Venue 398',
        revenues: revenues4,
      },
      {
        venueid: '73',
        name: 'Venue 73',
        revenues: revenues5,
      },
      {
        venueid: '568',
        name: 'Venue 568',
        revenues: 'NaN',
      },
      {
        venueid: '3547',
        name: 'Venue 3547',
        revenues: '182730.128673921',
      },
    ];

    // Insert rows into the Venues table.
    try {
      await venuesTable.insert(data);
      console.log('Inserted data.');
    } catch (err) {
      console.error('ERROR:', err);
    }

    const fieldType = {
      type: 'pgNumeric',
    };

    const exampleNumeric = Spanner.pgNumeric('100000');

    const query = {
      sql: `SELECT venueid, revenues FROM venues
            WHERE revenues < $1`,
      params: {
        p1: exampleNumeric,
      },
      types: {
        p1: fieldType,
      },
    };

    // Queries rows from the Venues table.
    try {
      const [rows] = await database.run(query);

      rows.forEach(row => {
        const json = row.toJSON();
        // Check if revenue field is Null
        const revenue =
          json.revenues === null ? json.revenues : json.revenues.value;
        console.log(`VenueId: ${json.venueid}, Revenue: ${revenue}`);
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  }
  pgNumericDataType();
  // [END spanner_postgresql_numeric_data_type]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

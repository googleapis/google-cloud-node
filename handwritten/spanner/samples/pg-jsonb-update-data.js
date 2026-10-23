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
//  title: Showcase how update data to a jsonb column in a PostgreSQL table.
//  usage: node pg-jsonb-update-data.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_jsonb_update_data]
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

  async function pgJsonbUpdateData() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);
    // Instantiate Spanner table objects.
    const venuesTable = database.table('venues');

    const data = [
      {
        VenueId: '19',
        VenueDetails: {rating: 9, open: true},
      },
      {
        VenueId: '4',
        // PG JSONB sorts first by key length and then lexicographically with equivalent key length
        // and takes the last value in the case of duplicate keys
        VenueDetails: `[
        {
          "name": null,
          "available": true
        },
        {
          "name": "room 2",
          "available": false,
          "name": "room 3"
        },
        {
          "main hall": {
            "description": "this is the biggest space",
            "size": 200
          }
        }
      ]`,
      },
      {
        VenueId: '42',
        VenueDetails: {
          name: null,
          open: {
            Monday: true,
            Tuesday: false,
          },
          tags: ['large', 'airy'],
        },
      },
    ];

    try {
      await venuesTable.update(data);
      console.log('Updated data.');
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }
  pgJsonbUpdateData();
  // [END spanner_postgresql_jsonb_update_data]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

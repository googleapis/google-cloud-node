// Copyright 2021 Google LLC
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

async function updateWithJsonData(instanceId, databaseId, projectId) {
  // [START spanner_update_data_with_json_column]
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

  const data = [
    {
      VenueId: '19',
      VenueDetails: {rating: 9, open: true},
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
    {
      VenueId: '4',
      // VenueDetails must be specified as a string, as it contains a top-level
      // array of objects that should be inserted into a JSON column. If we were
      // to specify this value as an array instead of a string, the client
      // library would encode this value as ARRAY<JSON> instead of JSON.
      VenueDetails: `[
        {
          "name": null,
          "open": true
        },
        {
          "name": "room 2",
          "open": false
        },
        {
          "main hall": {
            "description": "this is the biggest space",
            "size": 200
          }
        }
      ]`,
      LastUpdateTime: 'spanner.commit_timestamp()',
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
      LastUpdateTime: 'spanner.commit_timestamp()',
    },
  ];
  // Updates rows in the Venues table.
  try {
    await venuesTable.update(data);
    console.log('Updated data.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_update_data_with_json_column]
}

module.exports.updateWithJsonData = updateWithJsonData;

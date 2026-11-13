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

async function queryWithNumericParameter(instanceId, databaseId, projectId) {
  // [START spanner_query_with_numeric_parameter]
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
    type: 'numeric',
  };

  const exampleNumeric = Spanner.numeric('100000');

  const query = {
    sql: `SELECT VenueId, VenueName, Revenue FROM Venues
            WHERE Revenue < @revenue`,
    params: {
      revenue: exampleNumeric,
    },
    types: {
      revenue: fieldType,
    },
  };

  // Queries rows from the Venues table.
  try {
    const [rows] = await database.run(query);

    rows.forEach(row => {
      const json = row.toJSON();
      console.log(`VenueId: ${json.VenueId}, Revenue: ${json.Revenue.value}`);
    });
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_query_with_numeric_parameter]
}

module.exports.queryWithNumericParameter = queryWithNumericParameter;

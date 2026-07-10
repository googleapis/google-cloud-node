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

// sample-metadata:
//  title: Executes a read-only SQL query using an existing index.
//  usage: node queryDataWithIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID> <START_TITLE> <END_TITLE>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
  startTitle = 'Ardvark',
  endTitle = 'Goo',
) {
  // [START spanner_query_data_with_index]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';
  // const startTitle = 'Ardvark';
  // const endTitle = 'Goo';

  // Imports the Google Cloud Spanner client library
  const {Spanner} = require('@google-cloud/spanner');

  // Instantiates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function queryDataWithIndex() {
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
  }
  queryDataWithIndex();
  // [END spanner_query_data_with_index]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

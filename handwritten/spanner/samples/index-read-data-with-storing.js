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
//  title: Reads data using an existing storing index.
//  usage: node readDataWithStoringIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_read_data_with_storing_index]
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

  // "Storing" indexes store copies of the columns they index
  // This speeds up queries, but takes more space compared to normal indexes
  // See the link below for more information:
  // https://cloud.google.com/spanner/docs/secondary-indexes#storing_clause
  async function readDataWithStoringIndex() {
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
  }
  readDataWithStoringIndex();
  // [END spanner_read_data_with_storing_index]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

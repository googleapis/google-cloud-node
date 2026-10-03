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

async function getCommitStats(instanceId, databaseId, projectId) {
  // [START spanner_get_commit_stats]
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
  const albumsTable = database.table('Albums');

  // Updates rows in the Venues table.
  try {
    const [response] = await albumsTable.upsert(
      [
        {SingerId: '1', AlbumId: '1', MarketingBudget: '200000'},
        {SingerId: '2', AlbumId: '2', MarketingBudget: '400000'},
      ],
      {returnCommitStats: true},
    );
    console.log(
      `Updated data with ${response.commitStats.mutationCount} mutations.`,
    );
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the database when finished.
    database.close();
  }
  // [END spanner_get_commit_stats]
}

module.exports.getCommitStats = getCommitStats;

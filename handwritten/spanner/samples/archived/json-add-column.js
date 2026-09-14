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

async function addJsonColumn(instanceId, databaseId, projectId) {
  // [START spanner_add_json_column]
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

  // Gets a reference to a Cloud Spanner instance.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const request = ['ALTER TABLE Venues ADD COLUMN VenueDetails JSON'];

  // Alter existing table to add a column.
  const [operation] = await database.updateSchema(request);

  console.log(`Waiting for operation on ${databaseId} to complete...`);

  await operation.promise();

  console.log(
    `Added VenueDetails column to Venues table in database ${databaseId}.`,
  );
  // [END spanner_add_json_column]
}

module.exports.addJsonColumn = addJsonColumn;

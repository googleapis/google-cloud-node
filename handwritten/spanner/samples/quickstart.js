// Copyright 2016 Google LLC
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

async function quickstart(
  projectId = 'YOUR-PROJECT-ID', // Your Google Cloud Platform project ID
  instanceId = 'my-instance', // Your Cloud Spanner instance ID
  databaseId = 'my-database', // Your Cloud Spanner database ID
) {
  // [START spanner_quickstart]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({projectId});

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  // The query to execute
  const query = {
    sql: 'SELECT 1',
  };

  // Execute a simple SQL statement
  const [rows] = await database.run(query);
  console.log(`Query: ${rows.length} found.`);
  rows.forEach(row => console.log(row));
  // [END spanner_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);

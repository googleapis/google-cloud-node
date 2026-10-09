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
//  title: Read data with database role
//  usage: node read-data-with-database-role.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_read_data_with_database_role]
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

  async function readDataWithDatabaseRole() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    // Connect to a database using the 'parent' database role. This means that the connection will only have the permissions that have explicitly been granted to the 'parent' role.
    const options = {
      databaseRole: 'parent',
    };
    const database = instance.database(databaseId, options);

    try {
      const query = {
        sql: 'SELECT SingerId, FirstName, LastName FROM Singers',
      };
      const [rows] = await database.run(query);

      for (const row of rows) {
        const json = row.toJSON();

        console.log(
          `SingerId: ${json.SingerId}, FirstName: ${json.FirstName}, LastName: ${json.LastName}`,
        );
      }
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }
  readDataWithDatabaseRole();
  // [END spanner_read_data_with_database_role]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

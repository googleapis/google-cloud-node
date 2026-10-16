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
//  title: Query the information schema metadata in a Spanner PostgreSQL database.
//  usage: node pg-schema-information.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_information_schema]
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

  async function pgSchemaInformation() {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    // Get all the user tables in the database. PostgreSQL uses the `public` schema for user
    // tables. The table_catalog is equal to the database name. The `user_defined_...` columns
    // are only available for PostgreSQL databases.
    const query = {
      sql:
        'SELECT table_schema, table_name, ' +
        'user_defined_type_catalog, ' +
        'user_defined_type_schema, ' +
        'user_defined_type_name ' +
        'FROM INFORMATION_SCHEMA.tables ' +
        "WHERE table_schema='public'",
    };

    try {
      const [rows] = await database.run(query);
      rows.forEach(row => {
        const json = row.toJSON();
        console.log(
          `Table: ${json.table_schema}.${json.table_name} ` +
            `(User defined type: ${json.user_defined_type_catalog}.${json.user_defined_type_schema}.${json.user_defined_type_name})`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }
  pgSchemaInformation();
  // [END spanner_postgresql_information_schema]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

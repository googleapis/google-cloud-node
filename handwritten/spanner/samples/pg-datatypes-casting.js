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
//  title: Use cast operator to cast from one data type to another in a Spanner PostgreSQL database.
//  usage: node pg-datatypes-casting.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_cast_data_type]
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

  async function pgDatatypeCasting() {
    // Gets a reference to a Cloud Spanner instance and database
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    // The `::` cast operator can be used to cast from one data type to another.
    const query = {
      sql:
        "select 1::varchar as str, '2'::int as int, 3::decimal as dec, '4'::bytea as bytes, " +
        "5::float as float, 'true'::bool as bool, " +
        "'2021-11-03T09:35:01UTC'::timestamptz as timestamp",
    };

    try {
      const [rows] = await database.run(query);
      rows.forEach(row => {
        const json = row.toJSON();
        console.log(
          'Data types after casting \n' +
            `String: ${json.str} \n` +
            `Int: ${json.int} \n` +
            `Decimal: ${json.dec.value} \n` +
            `Bytes: ${json.bytes.valueOf()} \n` +
            `Float: ${json.float} \n` +
            `Bool: ${json.bool} \n` +
            `Timestamp: ${Spanner.timestamp(json.timestamp)}`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      await database.close();
    }
  }
  pgDatatypeCasting();
  // [END spanner_postgresql_cast_data_type]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
//  title: Showcases how a Spanner PostgreSQL database orders null values in a query.
//  usage: node pg-ordering-nulls.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_order_nulls]
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

  async function pgOrderingNulls() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    // Instantiate Spanner table objects.
    const authorTable = database.table('author');

    const data = [
      {
        authorid: '4',
        firstname: 'Alice',
      },
      {
        authorid: '5',
        firstname: 'Bruce',
      },
      {
        authorid: '6',
        firstname: null,
      },
    ];

    // Insert rows into the Author table.
    try {
      await authorTable.insert(data);
      console.log('Inserted data.');
    } catch (err) {
      console.error('ERROR:', err);
    }

    try {
      const [rows] = await database.run({
        sql: 'SELECT FirstName FROM Author ORDER BY FirstName',
      });

      console.log('\nAuthor ORDER BY FirstName');
      printAuthors(rows);
    } catch (err) {
      console.error('ERROR:', err);
    }

    try {
      const [rows] = await database.run({
        sql: 'SELECT FirstName FROM Author ORDER BY FirstName DESC',
      });

      console.log('\nAuthor ORDER BY FirstName DESC');
      printAuthors(rows);
    } catch (err) {
      console.error('ERROR:', err);
    }

    try {
      const [rows] = await database.run({
        sql: 'SELECT FirstName FROM Author ORDER BY FirstName NULLS FIRST',
      });

      console.log('\nAuthor ORDER BY FirstName NULLS FIRST');
      printAuthors(rows);
    } catch (err) {
      console.error('ERROR:', err);
    }

    try {
      const [rows] = await database.run({
        sql: 'SELECT FirstName FROM Author ORDER BY FirstName DESC NULLS LAST',
      });

      console.log('\nAuthor ORDER BY FirstName DESC NULLS LAST');
      printAuthors(rows);
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  }
  pgOrderingNulls();
  // [END spanner_postgresql_order_nulls]
}

function printAuthors(rows) {
  rows.forEach(row => {
    const json = row.toJSON();
    console.log(`${json.firstname}`);
  });
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
//  title: Showcase the rules for case-sensitivity and case folding for a Spanner PostgreSQL database.
//  usage: node pg-case-sensitivity.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_case_sensitivity]
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

  async function pgCaseSensitivity() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    // DDL: Spanner PostgreSQL follows the case sensitivity rules of PostgreSQL. This means that:
    // 1. Identifiers that are not double-quoted are folded to lower case.
    // 2. Identifiers that are double-quoted retain their case and are case-sensitive.
    // See https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS
    // for more information.
    const statements = [
      `CREATE TABLE Concerts
       (
           -- ConcertId will be folded to "concertid"
           ConcertId    bigint        NOT NULL PRIMARY KEY,
           -- Location and Time are double-quoted and will therefore retain their
           -- mixed case and are case-sensitive. This means that any statement that
           -- references any of these columns must use double quotes.
           "Location" varchar(1024) NOT NULL,
           "Time"  timestamptz NOT NULL
       )`,
    ];

    // Updates schema by adding new tables.
    const [operation] = await database.updateSchema(statements);
    await operation.promise();
    console.log(
      `Created table with case sensitive names in database ${databaseId} using PostgreSQL dialect.`,
    );

    // Mutations: Column names in mutations are always case-insensitive, regardless whether the
    // columns were double-quoted or not during creation.
    const concertsTable = database.table('concerts');
    const data = [
      {
        concertid: '4',
        location: 'Venue 4',
        time: new Date().toISOString(),
      },
    ];
    try {
      await concertsTable.insert(data);
      console.log('Inserted data using mutations.');
    } catch (err) {
      console.error('ERROR:', err);
    }

    try {
      const [rows] = await database.run({
        sql: 'SELECT * FROM Concerts',
      });

      console.log('Concerts Table Data using Mutations:');
      rows.forEach(row => {
        const json = row.toJSON();
        // Queries: ConcertId is automatically folded to lower case. Accessing the column by its name in
        // a result set must therefore use all lower-case letters. Location and Time were double-quoted
        // during creation, and retain their mixed case when returned in a result set.
        console.log(
          `concertid: ${json.concertid}, Location: ${json.Location}, Time: ${json.Time}`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    }

    // Aliases: Aliases are also identifiers, and specifying an alias in double quotes will make the alias
    // retain its case.
    try {
      const [rows] = await database.run({
        sql:
          'SELECT concertid AS "ConcertId",' +
          '"Location" AS "venue", "Time" FROM Concerts',
      });

      console.log('Concerts Table Data using Aliases:');
      rows.forEach(row => {
        const json = row.toJSON();
        // The aliases are double-quoted and therefore retains their mixed case.
        console.log(
          `concertid: ${json.ConcertId}, Location: ${json.venue}, Time: ${json.Time}`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    }

    // DML: Statements must also follow the PostgreSQL case rules.
    try {
      await database.runTransactionAsync(async transaction => {
        await transaction.runUpdate({
          sql: `INSERT INTO Concerts (ConcertId, "Location", "Time")
                VALUES ($1, $2, $3)`,
          params: {
            p1: 7,
            p2: 'Venue 7',
            p3: new Date().toISOString(),
          },
          types: {
            p1: {type: 'int64'},
            p2: {type: 'string'},
            p3: {type: 'timestamp'},
          },
        });
        console.log('Inserted data using DML.');
        await transaction.commit();
      });
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      // Close the database when finished.
      database.close();
    }
  }
  pgCaseSensitivity();
  // [END spanner_postgresql_case_sensitivity]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

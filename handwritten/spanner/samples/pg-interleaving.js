// Copyright 2024 Google LLC
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
//  title: Created interleaved table hierarchy using PostgreSQL dialect.
//  usage: node pg-interleaving.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_interleaved_table]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function pgInterleaving() {
    const statements = [
      `CREATE TABLE Author 
        (AuthorId   bigint NOT NULL,
        FirstName   varchar(1024),
        LastName    varchar(1024),
        Rating      double precision,
        PRIMARY KEY (AuthorId)
        );
        CREATE TABLE Book 
        (AuthorId    bigint NOT NULL,
        BookId       bigint NOT NULL,
        BookTitle   text,
        PRIMARY KEY (AuthorId, BookId)
        ) INTERLEAVE IN PARENT Author ON DELETE CASCADE;`,
    ];

    // Updates schema by adding new tables.
    const [operation] = await databaseAdminClient.updateDatabaseDdl({
      database: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      statements: statements,
    });

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();

    console.log(
      `Created an interleaved table hierarchy in database ${databaseId} using PostgreSQL dialect.`,
    );
  }
  pgInterleaving();
  // [END spanner_postgresql_interleaved_table]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
//  title: Creates a PostgreSQL Database.
//  usage: node pg-database-create.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_postgresql_create_database]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function createPgDatabase() {
    // Creates a PostgreSQL database. PostgreSQL create requests may not contain any additional
    // DDL statements. We need to execute these separately after the database has been created.
    const [operationCreate] = await databaseAdminClient.createDatabase({
      createStatement: 'CREATE DATABASE "' + databaseId + '"',
      parent: databaseAdminClient.instancePath(projectId, instanceId),
      databaseDialect:
        protos.google.spanner.admin.database.v1.DatabaseDialect.POSTGRESQL,
    });

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operationCreate.promise();
    const [metadata] = await databaseAdminClient.getDatabase({
      name: databaseAdminClient.databasePath(projectId, instanceId, databaseId),
    });
    console.log(
      `Created database ${databaseId} on instance ${instanceId} with dialect ${metadata.databaseDialect}.`,
    );

    // Create a couple of tables using a separate request. We must use PostgreSQL style DDL as the
    // database has been created with the PostgreSQL dialect.
    const statements = [
      `CREATE TABLE Singers 
        (SingerId   bigint NOT NULL,
        FirstName   varchar(1024),
        LastName    varchar(1024),
        SingerInfo  bytea,
        FullName    character varying(2048) GENERATED ALWAYS AS (FirstName || ' ' || LastName) STORED,
        PRIMARY KEY (SingerId)
        );
        CREATE TABLE Albums 
        (AlbumId    bigint NOT NULL,
        SingerId    bigint NOT NULL REFERENCES Singers (SingerId),
        AlbumTitle  text,
        PRIMARY KEY (AlbumId)
        );`,
    ];
    const [operationUpdateDDL] = await databaseAdminClient.updateDatabaseDdl({
      database: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      statements: [statements],
    });
    await operationUpdateDDL.promise();
    console.log('Updated schema');
  }
  createPgDatabase();
  // [END spanner_postgresql_create_database]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

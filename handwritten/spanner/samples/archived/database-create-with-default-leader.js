/**
 * Copyright 2021 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// sample-metadata:
//  title: Creates a new database with a specific default leader
//  usage: node database-create-with-default-leader.js <INSTANCE_ID> <DATABASE_ID> <DEFAULT_LEADER> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, defaultLeader, projectId) {
  // [START spanner_create_database_with_default_leader]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance-id';
  // const databaseId = 'my-database-id';
  // const defaultLeader = 'my-default-leader';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });
  // Gets a reference to a Cloud Spanner instance and a database. The database does not need to exist.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  async function createDatabaseWithDefaultLeader() {
    // Create a new database with an extra statement which will alter the
    // database after creation to set the default leader.
    console.log(`Creating database ${database.formattedName_}.`);
    const createSingersTableStatement = `
      CREATE TABLE Singers (
        SingerId   INT64 NOT NULL,
        FirstName  STRING(1024),
        LastName   STRING(1024),
        SingerInfo BYTES(MAX)
      ) PRIMARY KEY (SingerId)`;
    const createAlbumsStatement = `
      CREATE TABLE Albums (
        SingerId     INT64 NOT NULL,
        AlbumId      INT64 NOT NULL,
        AlbumTitle   STRING(MAX)
      ) PRIMARY KEY (SingerId, AlbumId),
        INTERLEAVE IN PARENT Singers ON DELETE CASCADE`;

    // Default leader is one of the possible values in the leaderOptions field of the
    // instance config of the instance where the database is created.
    const setDefaultLeaderStatement = `
      ALTER DATABASE \`${databaseId}\`
      SET OPTIONS (default_leader = '${defaultLeader}')`;
    const [, operation] = await database.create({
      extraStatements: [
        createSingersTableStatement,
        createAlbumsStatement,
        setDefaultLeaderStatement,
      ],
    });

    console.log(`Waiting for creation of ${database.id} to complete...`);
    await operation.promise();
    console.log(
      `Created database ${databaseId} with default leader ${defaultLeader}.`,
    );
  }
  createDatabaseWithDefaultLeader();
  // [END spanner_create_database_with_default_leader]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

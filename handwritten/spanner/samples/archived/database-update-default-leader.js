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
//  title: Updates the default leader of an existing database
//  usage: node database-update-default-leader.js <INSTANCE_ID> <DATABASE_ID> <DEFAULT_LEADER> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, defaultLeader, projectId) {
  // [START spanner_update_database_with_default_leader]
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
  // Gets a reference to a Cloud Spanner instance and a database.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  async function updateDatabaseWithDefaultLeader() {
    console.log(`Updating database ${database.formattedName_}.`);
    const setDefaultLeaderStatement = `
      ALTER DATABASE \`${databaseId}\`
      SET OPTIONS (default_leader = '${defaultLeader}')`;
    const [operation] = await database.updateSchema(setDefaultLeaderStatement);

    console.log(`Waiting for updating of ${database.id} to complete...`);
    await operation.promise();
    console.log(
      `Updated database ${databaseId} with default leader ${defaultLeader}.`,
    );
  }
  updateDatabaseWithDefaultLeader();
  // [END spanner_update_database_with_default_leader]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

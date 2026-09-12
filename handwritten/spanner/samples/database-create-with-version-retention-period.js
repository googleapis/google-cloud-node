/**
 * Copyright 2024 Google LLC
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

'use strict';

async function createDatabaseWithVersionRetentionPeriod(
  instanceId,
  databaseId,
  projectId,
) {
  // [START spanner_create_database_with_version_retention_period]

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  try {
    // Create a new database with an extra statement which will alter the
    // database after creation to set the version retention period.
    console.log(
      `Creating database ${databaseAdminClient.instancePath(
        projectId,
        instanceId,
      )}.`,
    );
    const versionRetentionStatement = `
      ALTER DATABASE \`${databaseId}\`
      SET OPTIONS (version_retention_period = '1d')`;

    const [operation] = await databaseAdminClient.createDatabase({
      createStatement: 'CREATE DATABASE `' + databaseId + '`',
      extraStatements: [versionRetentionStatement],
      parent: databaseAdminClient.instancePath(projectId, instanceId),
    });

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();
    console.log(`
        Created database ${databaseId} with version retention period.`);

    const [metadata] = await databaseAdminClient.getDatabase({
      name: databaseAdminClient.databasePath(projectId, instanceId, databaseId),
    });

    console.log(`Version retention period: ${metadata.versionRetentionPeriod}`);
    const milliseconds =
      parseInt(metadata.earliestVersionTime.seconds, 10) * 1000 +
      parseInt(metadata.earliestVersionTime.nanos, 10) / 1e6;
    const date = new Date(milliseconds);
    console.log(`Earliest version time: ${date.toString()}`);
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_create_database_with_version_retention_period]
}

module.exports.createDatabaseWithVersionRetentionPeriod =
  createDatabaseWithVersionRetentionPeriod;

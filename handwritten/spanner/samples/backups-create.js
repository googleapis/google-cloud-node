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

async function createBackup(
  instanceId,
  databaseId,
  backupId,
  projectId,
  versionTime,
) {
  // [START spanner_create_backup]

  // Imports the Google Cloud client library and precise date library
  const {Spanner, protos} = require('@google-cloud/spanner');
  const {PreciseDate} = require('@google-cloud/precise-date');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const backupId = 'my-backup';
  // const versionTime = Date.now() - 1000 * 60 * 60 * 24; // One day ago

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  // Creates a new backup of the database
  try {
    console.log(
      `Creating backup of database ${databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      )}.`,
    );

    // Expire backup 14 days in the future
    const expireTime = Date.now() + 1000 * 60 * 60 * 24 * 14;

    // Create a backup of the state of the database at the current time.
    const [operation] = await databaseAdminClient.createBackup({
      parent: databaseAdminClient.instancePath(projectId, instanceId),
      backupId: backupId,
      backup: (protos.google.spanner.admin.database.v1.Backup = {
        database: databaseAdminClient.databasePath(
          projectId,
          instanceId,
          databaseId,
        ),
        expireTime: Spanner.timestamp(expireTime).toStruct(),
        versionTime: Spanner.timestamp(versionTime).toStruct(),
        name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
      }),
    });

    console.log(
      `Waiting for backup ${databaseAdminClient.backupPath(
        projectId,
        instanceId,
        backupId,
      )} to complete...`,
    );
    await operation.promise();

    // Verify backup is ready
    const [backupInfo] = await databaseAdminClient.getBackup({
      name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
    });
    if (backupInfo.state === 'READY') {
      console.log(
        `Backup ${backupInfo.name} of size ` +
          `${backupInfo.sizeBytes} bytes was created at ` +
          `${new PreciseDate(backupInfo.createTime).toISOString()} ` +
          'for version of database at ' +
          `${new PreciseDate(backupInfo.versionTime).toISOString()}`,
      );
    } else {
      console.error('ERROR: Backup is not ready.');
    }
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Close the spanner client when finished.
    // The databaseAdminClient does not require explicit closure. The closure of the Spanner client will automatically close the databaseAdminClient.
    spanner.close();
  }
  // [END spanner_create_backup]
}

module.exports.createBackup = createBackup;

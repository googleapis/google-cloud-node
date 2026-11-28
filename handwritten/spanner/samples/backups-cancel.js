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

async function cancelBackup(instanceId, databaseId, backupId, projectId) {
  // [START spanner_cancel_backup_create]

  // Imports the Google Cloud client library and precise date library
  const {Spanner, protos} = require('@google-cloud/spanner');
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const backupId = 'my-backup';

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

    // Expire backup one day in the future
    const expireTime = Date.now() + 1000 * 60 * 60 * 24;
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
        name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
      }),
    });

    // Cancel the backup
    await operation.cancel();

    console.log('Backup cancelled.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Delete backup in case it got created before the cancel operation
    await databaseAdminClient.deleteBackup({
      name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
    });
    // Close the spanner client when finished.
    // The databaseAdminClient does not require explicit closure. The closure of the Spanner client will automatically close the databaseAdminClient.
    spanner.close();
  }
  // [END spanner_cancel_backup_create]
}

module.exports.cancelBackup = cancelBackup;

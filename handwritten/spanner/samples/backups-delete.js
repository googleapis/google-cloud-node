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

async function deleteBackup(instanceId, backupId, projectId) {
  // [START spanner_delete_backup]

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

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

  // Delete the backup
  console.log(`Deleting backup ${backupId}.`);
  await databaseAdminClient.deleteBackup({
    name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
  });
  console.log('Backup deleted.');

  // Verify backup no longer exists
  try {
    await databaseAdminClient.getBackup({
      name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
    });
    console.error('Error: backup still exists.');
  } catch (err) {
    console.log('Backup deleted.');
  }
  // [END spanner_delete_backup]
}

module.exports.deleteBackup = deleteBackup;

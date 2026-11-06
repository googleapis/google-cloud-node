/**
 * Copyright 2020 Google LLC
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

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  const backup = instance.backup(backupId);

  // Creates a new backup of the database
  try {
    console.log(`Creating backup of database ${database.formattedName_}.`);
    const databasePath = database.formattedName_;
    // Expire backup one day in the future
    const expireTime = Date.now() + 1000 * 60 * 60 * 24;
    const [, operation] = await backup.create({
      databasePath: databasePath,
      expireTime: expireTime,
    });

    // Cancel the backup
    await operation.cancel();

    console.log('Backup cancelled.');
  } catch (err) {
    console.error('ERROR:', err);
  } finally {
    // Delete backup in case it got created before the cancel operation
    await backup.delete();

    // Close the database when finished.
    await database.close();
  }
  // [END spanner_cancel_backup_create]
}

module.exports.cancelBackup = cancelBackup;

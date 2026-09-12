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

'use strict';

async function restoreBackupWithEncryptionKey(
  instanceId,
  databaseId,
  backupId,
  projectId,
  keyName,
) {
  // [START spanner_restore_backup_with_encryption_key]
  // Imports the Google Cloud client library and precise date library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const backupId = 'my-backup';
  // const keyName =
  //   'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  // Restore the database
  console.log(
    `Restoring database ${database.formattedName_} from backup ${backupId}.`,
  );
  const [, restoreOperation] = await database.restore(
    `projects/${projectId}/instances/${instanceId}/backups/${backupId}`,
    {
      encryptionConfig: {
        encryptionType: 'CUSTOMER_MANAGED_ENCRYPTION',
        kmsKeyName: keyName,
      },
    },
  );

  // Wait for restore to complete
  console.log('Waiting for database restore to complete...');
  await restoreOperation.promise();

  console.log('Database restored from backup.');
  const restoreInfo = await database.getRestoreInfo();
  const [data] = await database.get();
  console.log(
    `Database ${restoreInfo.backupInfo.sourceDatabase} was restored ` +
      `to ${databaseId} from backup ${restoreInfo.backupInfo.backup} ` +
      `using encryption key ${data.metadata.encryptionConfig.kmsKeyName}.`,
  );
  // [END spanner_restore_backup_with_encryption_key]
}

module.exports.restoreBackupWithEncryptionKey = restoreBackupWithEncryptionKey;

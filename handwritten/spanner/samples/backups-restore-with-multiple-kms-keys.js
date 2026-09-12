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

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  backupId = 'my-backup',
  projectId = 'my-project',
  kmsKeyNames = 'key1,key2',
) {
  // [START spanner_restore_backup_with_MR_CMEK]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const backupId = 'my-backup';
  // const kmsKeyNames =
  //   'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key1,
  //   projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key2';

  // Imports the Google Cloud client library and precise date library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function restoreBackupWithMultipleKmsKeys() {
    // Restore the database
    console.log(
      `Restoring database ${databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      )} from backup ${backupId}.`,
    );
    const [restoreOperation] = await databaseAdminClient.restoreDatabase({
      parent: databaseAdminClient.instancePath(projectId, instanceId),
      databaseId: databaseId,
      backup: databaseAdminClient.backupPath(projectId, instanceId, backupId),
      encryptionConfig: {
        encryptionType: 'CUSTOMER_MANAGED_ENCRYPTION',
        kmsKeyNames: kmsKeyNames.split(','),
      },
    });

    // Wait for restore to complete
    console.log('Waiting for database restore to complete...');
    await restoreOperation.promise();

    console.log('Database restored from backup.');
    const [metadata] = await databaseAdminClient.getDatabase({
      name: databaseAdminClient.databasePath(projectId, instanceId, databaseId),
    });
    console.log(
      `Database ${metadata.restoreInfo.backupInfo.sourceDatabase} was restored ` +
        `to ${databaseId} from backup ${metadata.restoreInfo.backupInfo.backup} ` +
        `using encryption key ${metadata.encryptionConfig.kmsKeyNames}.`,
    );
  }
  restoreBackupWithMultipleKmsKeys();
  // [END spanner_restore_backup_with_MR_CMEK]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

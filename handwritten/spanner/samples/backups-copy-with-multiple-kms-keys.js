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
//  title: Copies a source backup
//  usage: node spannerCopyBackup <INSTANCE_ID> <COPY_BACKUP_ID> <SOURCE_BACKUP_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  backupId = 'my-backup',
  sourceBackupPath = 'projects/my-project-id/instances/my-source-instance/backups/my-source-backup',
  projectId = 'my-project-id',
  kmsKeyNames = 'key1,key2',
) {
  // [START spanner_copy_backup_with_MR_CMEK]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const backupId = 'my-backup',
  // const sourceBackupPath = 'projects/my-project-id/instances/my-source-instance/backups/my-source-backup',
  // const projectId = 'my-project-id';
  // const kmsKeyNames =
  //   'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key1,
  //   projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key2';

  // Imports the Google Cloud Spanner client library
  const {Spanner} = require('@google-cloud/spanner');
  const {PreciseDate} = require('@google-cloud/precise-date');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function spannerCopyBackupWithMultipleKmsKeys() {
    // Expire copy backup 14 days in the future
    const expireTime = Spanner.timestamp(
      Date.now() + 1000 * 60 * 60 * 24 * 14,
    ).toStruct();

    // Copy the source backup
    try {
      console.log(`Creating copy of the source backup ${sourceBackupPath}.`);
      const [operation] = await databaseAdminClient.copyBackup({
        parent: databaseAdminClient.instancePath(projectId, instanceId),
        sourceBackup: sourceBackupPath,
        backupId: backupId,
        expireTime: expireTime,
        kmsKeyNames: kmsKeyNames.split(','),
      });

      console.log(
        `Waiting for backup copy ${databaseAdminClient.backupPath(
          projectId,
          instanceId,
          backupId,
        )} to complete...`,
      );
      await operation.promise();

      // Verify the copy backup is ready
      const [copyBackup] = await databaseAdminClient.getBackup({
        name: databaseAdminClient.backupPath(projectId, instanceId, backupId),
      });

      if (copyBackup.state === 'READY') {
        console.log(
          `Backup copy ${copyBackup.name} of size ` +
            `${copyBackup.sizeBytes} bytes was created at ` +
            `${new PreciseDate(copyBackup.createTime).toISOString()} ` +
            'with version time ' +
            `${new PreciseDate(copyBackup.versionTime).toISOString()}`,
        );
      } else {
        console.error('ERROR: Copy of backup is not ready.');
      }
    } catch (err) {
      console.error('ERROR:', err);
    }
  }
  spannerCopyBackupWithMultipleKmsKeys();
  // [END spanner_copy_backup_with_MR_CMEK]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

// Copyright 2022 Google LLC
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
) {
  // [START spanner_copy_backup]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const backupId = 'my-backup',
  // const sourceBackupPath = 'projects/my-project-id/instances/my-source-instance/backups/my-source-backup',
  // const projectId = 'my-project-id';

  // Imports the Google Cloud Spanner client library
  const {Spanner} = require('@google-cloud/spanner');
  const {PreciseDate} = require('@google-cloud/precise-date');

  // Instantiates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function spannerCopyBackup() {
    // Gets a reference to a Cloud Spanner instance and backup
    const instance = spanner.instance(instanceId);

    // Expire copy backup 14 days in the future
    const expireTime = Spanner.timestamp(
      Date.now() + 1000 * 60 * 60 * 24 * 14,
    ).toStruct();

    // Copy the source backup
    try {
      console.log(`Creating copy of the source backup ${sourceBackupPath}.`);
      const [, operation] = await instance.copyBackup(
        sourceBackupPath,
        backupId,
        {
          expireTime: expireTime,
        },
      );

      console.log(
        `Waiting for backup copy ${
          instance.backup(backupId).formattedName_
        } to complete...`,
      );
      await operation.promise();

      // Verify the copy backup is ready
      const copyBackup = instance.backup(backupId);
      const [copyBackupInfo] = await copyBackup.getMetadata();
      if (copyBackupInfo.state === 'READY') {
        console.log(
          `Backup copy ${copyBackupInfo.name} of size ` +
            `${copyBackupInfo.sizeBytes} bytes was created at ` +
            `${new PreciseDate(copyBackupInfo.createTime).toISOString()} ` +
            'with version time ' +
            `${new PreciseDate(copyBackupInfo.versionTime).toISOString()}`,
        );
      } else {
        console.error('ERROR: Copy of backup is not ready.');
      }
    } catch (err) {
      console.error('ERROR:', err);
    }
  }
  spannerCopyBackup();
  // [END spanner_copy_backup]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

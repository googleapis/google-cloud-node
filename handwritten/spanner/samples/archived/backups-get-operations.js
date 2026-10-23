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

async function getBackupOperations(
  instanceId,
  databaseId,
  backupId,
  projectId,
) {
  // [START spanner_list_backup_operations]
  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const databaseId = 'my-database';
  // const backupId = 'my-backup';
  // const instanceId = 'my-instance';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance
  const instance = spanner.instance(instanceId);

  // List create backup operations
  try {
    const [backupOperations] = await instance.getBackupOperations({
      filter:
        '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) ' +
        `AND (metadata.database:${databaseId})`,
    });
    console.log('Create Backup Operations:');
    backupOperations.forEach(backupOperation => {
      const metadata =
        protos.google.spanner.admin.database.v1.CreateBackupMetadata.decode(
          backupOperation.metadata.value,
        );
      console.log(
        `Backup ${metadata.name} on database ${metadata.database} is ` +
          `${metadata.progress.progressPercent}% complete.`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  }

  // List copy backup operations
  try {
    console.log(
      '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) ' +
        `AND (metadata.source_backup:${backupId})`,
    );
    const [backupOperations] = await instance.getBackupOperations({
      filter:
        '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.CopyBackupMetadata) ' +
        `AND (metadata.source_backup:${backupId})`,
    });
    console.log('Copy Backup Operations:');
    backupOperations.forEach(backupOperation => {
      const metadata =
        protos.google.spanner.admin.database.v1.CopyBackupMetadata.decode(
          backupOperation.metadata.value,
        );
      console.log(
        `Backup ${metadata.name} copied from source backup ${metadata.sourceBackup} is ` +
          `${metadata.progress.progressPercent}% complete.`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_list_backup_operations]
}

module.exports.getBackupOperations = getBackupOperations;

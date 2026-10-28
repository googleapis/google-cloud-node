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

async function getBackups(instanceId, databaseId, backupId, projectId) {
  // [START spanner_list_backups]

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

  try {
    // Get the parent(instance) of the database
    const parent = databaseAdminClient.instancePath(projectId, instanceId);

    // List all backups
    const [allBackups] = await databaseAdminClient.listBackups({
      parent: parent,
    });

    console.log('All backups:');
    allBackups.forEach(backups => {
      if (backups.name) {
        const backup = backups.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backup.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups filtered by backup name
    const [backupsByName] = await databaseAdminClient.listBackups({
      parent: parent,
      filter: `Name:${backupId}`,
    });
    console.log('Backups matching backup name:');
    backupsByName.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups expiring within 30 days
    const expireTime = new Date();
    expireTime.setDate(expireTime.getDate() + 30);
    const [backupsByExpiry] = await databaseAdminClient.listBackups({
      parent: parent,
      filter: `expire_time < "${expireTime.toISOString()}"`,
    });
    console.log('Backups expiring within 30 days:');
    backupsByExpiry.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups filtered by database name
    const [backupsByDbName] = await databaseAdminClient.listBackups({
      parent: parent,
      filter: `Database:${databaseId}`,
    });
    console.log('Backups matching database name:');
    backupsByDbName.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups filtered by backup size
    const [backupsBySize] = await databaseAdminClient.listBackups({
      parent: parent,
      filter: 'size_bytes > 100',
    });
    console.log('Backups filtered by size:');
    backupsBySize.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups that are ready that were created after a certain time
    const createTime = new Date();
    createTime.setDate(createTime.getDate() - 1);
    const [backupsByCreateTime] = await databaseAdminClient.listBackups({
      parent: parent,
      filter: `(state:READY) AND (create_time >= "${createTime.toISOString()}")`,
    });
    console.log('Ready backups filtered by create time:');
    backupsByCreateTime.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });

    // List backups using pagination
    console.log('Get backups paginated:');
    const [backups] = await databaseAdminClient.listBackups({
      parent: parent,
      pageSize: 3,
    });
    backups.forEach(backup => {
      if (backup.name) {
        const backupName = backup.name;
        const delimiter =
          'projects/' + projectId + '/instances/' + instanceId + '/backups/';
        const result = backupName.substring(delimiter.length);
        console.log(result);
      }
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_list_backups]
}

module.exports.getBackups = getBackups;

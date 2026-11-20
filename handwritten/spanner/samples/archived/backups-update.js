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

async function updateBackup(instanceId, backupId, projectId) {
  // [START spanner_update_backup]
  // Imports the Google Cloud client library and precise date library
  const {Spanner} = require('@google-cloud/spanner');
  const {PreciseDate} = require('@google-cloud/precise-date');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const backupId = 'my-backup';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and backup
  const instance = spanner.instance(instanceId);
  const backup = instance.backup(backupId);

  // Read backup metadata and update expiry time
  try {
    const currentExpireTime = await backup.getExpireTime();
    const maxExpireTime = backup.metadata.maxExpireTime;
    const wantExpireTime = new PreciseDate(currentExpireTime);
    wantExpireTime.setDate(wantExpireTime.getDate() + 1);
    // New expire time should be less than the max expire time
    const min = (currentExpireTime, maxExpireTime) =>
      currentExpireTime < maxExpireTime ? currentExpireTime : maxExpireTime;
    const newExpireTime = new PreciseDate(min(wantExpireTime, maxExpireTime));
    console.log(
      `Backup ${backupId} current expire time: ${currentExpireTime.toISOString()}`,
    );
    console.log(`Updating expire time to ${newExpireTime.toISOString()}`);
    await backup.updateExpireTime(newExpireTime);
    console.log('Expire time updated.');
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_update_backup]
}

module.exports.updateBackup = updateBackup;

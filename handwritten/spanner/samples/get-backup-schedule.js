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

// sample-metadata:
//  title: Gets a backup schedule
//  usage: node get-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>

'use strict';

function main(
  projectId = 'my-project-id',
  instanceId = 'my-instance-id',
  databaseId = 'my-database-id',
  scheduleId = 'my-schedule-id',
) {
  async function getBackupSchedule() {
    // [START spanner_get_backup_schedule]
    // Import the Google Cloud client library for Spanner.
    const {Spanner} = require('@google-cloud/spanner');

    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance-id';
    // const databaseId = 'my-database-id';
    // const scheduleId = 'my-schedule-id';

    // Create a Spanner database admin client.
    const spanner = new Spanner({projectId});
    const client = spanner.getDatabaseAdminClient();

    try {
      // Get the backup schedule.
      const [response] = await client.getBackupSchedule({
        name: client.backupSchedulePath(
          projectId,
          instanceId,
          databaseId,
          scheduleId,
        ),
      });
      console.log('Backup schedule:', response);
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_get_backup_schedule]
  }

  getBackupSchedule();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

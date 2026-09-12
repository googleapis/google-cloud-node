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
//  title: Creates an incremental backup schedule
//  usage: node create-incremental-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>

'use strict';

function main(
  projectId = 'my-project-id',
  instanceId = 'my-instance-id',
  databaseId = 'my-database-id',
  scheduleId = 'my-schedule-id',
) {
  async function createIncrementalBackupSchedule() {
    // [START spanner_create_incremental_backup_schedule]
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
      // Create a schedule to create incremental backups daily at 12:30 AM,
      // using Google-managed encryption, and retained for 24 hours.
      const [response] = await client.createBackupSchedule({
        parent: client.databasePath(projectId, instanceId, databaseId),
        backupScheduleId: scheduleId,
        backupSchedule: {
          spec: {
            cronSpec: {
              text: '30 12 * * *',
            },
          },
          retentionDuration: {
            seconds: 86400,
          },
          encryptionConfig: {
            encryptionType: 'GOOGLE_DEFAULT_ENCRYPTION',
          },
          incrementalBackupSpec: {},
        },
      });
      console.log('Created incremental backup schedule:', response);
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_create_incremental_backup_schedule]
  }

  createIncrementalBackupSchedule();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

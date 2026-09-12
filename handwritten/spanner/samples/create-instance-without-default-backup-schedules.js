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

function main(instanceId, projectId) {
  async function createInstanceWithoutDefaultBackupSchedules() {
    // [START spanner_create_instance_without_default_backup_schedule]
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     **/
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance';

    // Imports the Google Cloud client library
    const {Spanner, protos} = require('@google-cloud/spanner');

    // Creates a client
    const spanner = new Spanner({
      projectId: projectId,
    });

    const instanceAdminClient = await spanner.getInstanceAdminClient();
    // Creates a new instance
    try {
      const [operation] = await instanceAdminClient.createInstance({
        instanceId: instanceId,
        parent: instanceAdminClient.projectPath(projectId),
        instance: {
          config: instanceAdminClient.instanceConfigPath(
            projectId,
            'regional-me-central2',
          ),
          nodeCount: 1,
          displayName: 'Display name for the instance.',
          labels: {
            cloud_spanner_samples: 'true',
            created: Math.round(Date.now() / 1000).toString(), // current time
          },
          defaultBackupScheduleType:
            protos.google.spanner.admin.instance.v1.Instance
              .DefaultBackupScheduleType.NONE,
        },
      });
      await operation.promise();

      console.log(
        `Created instance ${instanceId} without default backup schedules.`,
      );
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_create_instance_without_default_backup_schedule]
  }
  createInstanceWithoutDefaultBackupSchedules();
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

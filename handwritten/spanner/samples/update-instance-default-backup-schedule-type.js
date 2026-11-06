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
//  title: Updates an instance.
//  usage: node instance-update.js <INSTANCE_ID> <PROJECT_ID>

'use strict';

function main(instanceId, projectId) {
  async function updateInstanceDefaultBackupScheduleType() {
    // [START spanner_update_instance_default_backup_schedule_type]
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance';

    // Imports the Google Cloud client library
    const {Spanner, protos} = require('@google-cloud/spanner');

    // Creates a client
    const spanner = new Spanner({
      projectId: projectId,
    });
    const instanceAdminClient = await spanner.getInstanceAdminClient();

    // Updates an instance
    try {
      const [operation] = await instanceAdminClient.updateInstance({
        instance: {
          name: instanceAdminClient.instancePath(projectId, instanceId),
          defaultBackupScheduleType:
            protos.google.spanner.admin.instance.v1.Instance
              .DefaultBackupScheduleType.AUTOMATIC, // optional
        },
        // Field mask specifying fields that should get updated in an Instance
        fieldMask: (protos.google.protobuf.FieldMask = {
          paths: ['default_backup_schedule_type'],
        }),
      });

      await operation.promise();
      const [metadata] = await instanceAdminClient.getInstance({
        name: instanceAdminClient.instancePath(projectId, instanceId),
      });
      console.log(
        `Instance ${instanceId} has been updated with the ${metadata.defaultBackupScheduleType}` +
          ' default backup schedule type.',
      );
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_update_instance_default_backup_schedule_type]
  }
  updateInstanceDefaultBackupScheduleType();
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

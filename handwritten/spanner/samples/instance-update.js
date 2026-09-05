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
  async function updateInstance() {
    // [START spanner_update_instance]

    // Imports the Google Cloud client library
    const {Spanner, protos} = require('@google-cloud/spanner');

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance';

    // Creates a client
    const spanner = new Spanner({
      projectId: projectId,
    });

    const instanceAdminClient = spanner.getInstanceAdminClient();

    // Updates an instance
    try {
      console.log(
        `Updating instance ${instanceAdminClient.instancePath(
          projectId,
          instanceId,
        )}.`,
      );
      const [operation] = await instanceAdminClient.updateInstance({
        instance: {
          name: instanceAdminClient.instancePath(projectId, instanceId),
          labels: {
            updated: 'true',
            created: Math.round(Date.now() / 1000).toString(), // current time
          },
          edition:
            protos.google.spanner.admin.instance.v1.Instance.Edition.ENTERPRISE, //optional
        },
        // Field mask specifying fields that should get updated in an Instance
        fieldMask: (protos.google.protobuf.FieldMask = {
          paths: ['labels', 'edition'],
        }),
      });

      console.log(`Waiting for operation on ${instanceId} to complete...`);
      await operation.promise();
      console.log(`Updated instance ${instanceId}.`);
      const [metadata] = await instanceAdminClient.getInstance({
        name: instanceAdminClient.instancePath(projectId, instanceId),
      });
      console.log(
        `Instance ${instanceId} has been updated with the ${metadata.edition} ` +
          'edition.',
      );
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_update_instance]
  }
  updateInstance();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

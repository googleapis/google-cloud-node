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
//  title: Updates a user-managed instance configuration.
//  usage: node instance-config-update <INSTANCE_CONFIG_ID> <PROJECT_ID>

'use strict';

function main(
  instanceConfigId = 'custom-my-instance-config',
  projectId = 'my-project-id',
) {
  // [START spanner_update_instance_config]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const instanceConfigId = 'custom-my-instance-config-id';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const instanceAdminClient = spanner.getInstanceAdminClient();

  async function updateInstanceConfig() {
    // Updates an instance config
    try {
      console.log(
        `Updating instance config ${instanceAdminClient.instanceConfigPath(
          projectId,
          instanceConfigId,
        )}.`,
      );
      const [operation] = await instanceAdminClient.updateInstanceConfig({
        instanceConfig: {
          name: instanceAdminClient.instanceConfigPath(
            projectId,
            instanceConfigId,
          ),
          displayName: 'updated custom instance config',
          labels: {
            updated: 'true',
            created: Math.round(Date.now() / 1000).toString(), // current time
          },
        },
        // Field mask specifying fields that should get updated in InstanceConfig
        // Only display_name and labels can be updated
        updateMask: (protos.google.protobuf.FieldMask = {
          paths: ['display_name', 'labels'],
        }),
      });
      console.log(
        `Waiting for update operation for ${instanceConfigId} to complete...`,
      );
      await operation.promise();
      console.log(`Updated instance config ${instanceConfigId}.`);
    } catch (err) {
      console.error(
        'ERROR: Updating instance config ',
        instanceConfigId,
        ' failed with error message ',
        err,
      );
    }
  }
  updateInstanceConfig();
  // [END spanner_update_instance_config]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

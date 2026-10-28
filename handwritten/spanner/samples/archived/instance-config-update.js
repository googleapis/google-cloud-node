/**
 * Copyright 2022 Google LLC
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
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });
  async function updateInstanceConfig() {
    // Updates an instance config
    const instanceConfig = spanner.instanceConfig(instanceConfigId);
    try {
      console.log(`Updating instance config ${instanceConfig.formattedName_}.`);
      const [operation] = await instanceConfig.setMetadata({
        instanceConfig: {
          displayName: 'updated custom instance config',
          labels: {
            updated: 'true',
          },
        },
      });
      console.log(
        `Waiting for update operation for ${instanceConfig.id} to complete...`,
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

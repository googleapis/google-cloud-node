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
//  title: Creates a user-managed instance configuration.
//  usage: node instance-config-create <INSTANCE_CONFIG_ID> <BASE_INSTANCE_CONFIG_ID> <PROJECT_ID>

'use strict';

function main(
  instanceConfigId = 'custom-my-instance-config',
  baseInstanceConfigId = 'my-base-instance-config',
  projectId = 'my-project-id',
) {
  // [START spanner_create_instance_config]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const instanceConfigId = 'custom-my-instance-config-id'
  // const baseInstanceConfigId = 'my-base-instance-config-id';
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });
  async function createInstanceConfig() {
    // Creates a new instance config
    const instanceConfig = spanner.instanceConfig(instanceConfigId);
    try {
      const [baseInstanceConfig] =
        await spanner.getInstanceConfig(baseInstanceConfigId);
      console.log(`Creating instance config ${instanceConfig.formattedName_}.`);
      const [, operation] = await instanceConfig.create({
        displayName: instanceConfigId,
        baseConfig: baseInstanceConfig.name,
        replicas: baseInstanceConfig.replicas.concat(
          baseInstanceConfig.optionalReplicas[0],
        ),
      });
      console.log(
        `Waiting for create operation for ${instanceConfig.id} to complete...`,
      );
      await operation.promise();
      console.log(`Created instance config ${instanceConfigId}.`);
    } catch (err) {
      console.error(
        'ERROR: Creating instance config ',
        instanceConfigId,
        ' failed with error message ',
        err,
      );
    }
  }
  createInstanceConfig();
  // [END spanner_create_instance_config]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

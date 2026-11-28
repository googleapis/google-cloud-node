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
//  title: Lists the instance configuration operations.
//  usage: node instance-config-get-operations <PROJECT_ID>

'use strict';

function main(projectId = 'my-project-id') {
  // [START spanner_list_instance_config_operations]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });
  async function getInstanceConfigOperations() {
    // Lists the instance config operations.
    try {
      console.log(
        `Getting list of instance config operations on project ${projectId}...\n`,
      );
      const [instanceConfigOperations] =
        await spanner.getInstanceConfigOperations({
          filter:
            '(metadata.@type=type.googleapis.com/google.spanner.admin.instance.v1.CreateInstanceConfigMetadata)',
        });
      console.log(
        `Available instance config operations for project ${projectId}:`,
      );
      instanceConfigOperations.forEach(instanceConfigOperation => {
        const metadata = instanceConfigOperation.metadata;
        const instanceConfig =
          protos.google.spanner.admin.instance.v1.CreateInstanceConfigMetadata.decode(
            instanceConfigOperation.metadata.value,
          ).instanceConfig;
        console.log(
          `Instance config operation for ${instanceConfig.name} of type` +
            ` ${metadata.type_url} has status ${
              instanceConfigOperation.done ? 'done' : 'running'
            }.`,
        );
      });
    } catch (err) {
      console.error('ERROR:', err);
    }
  }
  getInstanceConfigOperations();
  // [END spanner_list_instance_config_operations]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

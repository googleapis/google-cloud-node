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
//  title: Lists all the available instance configs for the selected project.
//  usage: node list-instance-configs.js <PROJECT_ID>

'use strict';

function main(projectId) {
  // [START spanner_list_instance_configs]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = 'my-project-id';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const instanceAdminClient = spanner.getInstanceAdminClient();

  async function listInstanceConfigs() {
    // Lists all available instance configurations in the project.
    // See https://cloud.google.com/spanner/docs/instance-configurations#configuration for a list of all available
    // configurations.
    const [instanceConfigs] = await instanceAdminClient.listInstanceConfigs({
      parent: instanceAdminClient.projectPath(projectId),
    });
    console.log(`Available instance configs for project ${projectId}:`);
    instanceConfigs.forEach(instanceConfig => {
      console.log(
        `Available leader options for instance config ${
          instanceConfig.name
        } ('${instanceConfig.displayName}'): 
           ${instanceConfig.leaderOptions.join()}`,
      );
    });
  }
  listInstanceConfigs();
  // [END spanner_list_instance_configs]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

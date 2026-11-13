/**
 * Copyright 2021 Google LLC
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
//  title: Gets the instance config metadata for the configuration nam6
//  usage: node get-instance-config.js <PROJECT_ID>

'use strict';

function main(projectId) {
  // [START spanner_get_instance_config]
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

  async function getInstanceConfig() {
    // Get the instance config for the multi-region North America 6 (NAM6).
    // See https://cloud.google.com/spanner/docs/instance-configurations#configuration for a list of all available
    // configurations.
    const [instanceConfig] = await spanner.getInstanceConfig('nam6');
    console.log(
      `Available leader options for instance config ${instanceConfig.name} ('${
        instanceConfig.displayName
      }'): 
           ${instanceConfig.leaderOptions.join()}`,
    );
  }
  getInstanceConfig();
  // [END spanner_get_instance_config]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

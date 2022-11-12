// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function quickstart(
  project = 'my-project' // Project to list deployments for.
) {
  // [START os_config_quickstart]
  // Imports the Google Cloud client library
  const {OsConfigServiceClient} = require('@google-cloud/os-config');

  // Creates a client
  const client = new OsConfigServiceClient();

  // project = 'my-project' // Project to list deployments for.

  async function listPatchDeployments() {
    const [deployments] = await client.listPatchDeployments({
      parent: `projects/${project}`,
    });
    console.info(`found ${deployments.length} deployments:`);
    console.info(deployments);
  }
  const listPatchDeploymentsResponse = listPatchDeployments();
  // [END os_config_quickstart]
  return listPatchDeploymentsResponse;
}

const args = process.argv.slice(2);
quickstart(...args).catch(err => {
  console.error(err);
  process.exitCode = 1;
});

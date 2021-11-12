// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START clouddeploy_v1_generated_CloudDeploy_GetRelease_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the `Release`. Format must be
   *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.
   */
  // const name = 'abc123'

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function callGetRelease() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await deployClient.getRelease(request);
    console.log(response);
  }

  callGetRelease();
  // [END clouddeploy_v1_generated_CloudDeploy_GetRelease_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

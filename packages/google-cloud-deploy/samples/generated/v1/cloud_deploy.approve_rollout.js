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

function main(name, approved) {
  // [START clouddeploy_v1_generated_CloudDeploy_ApproveRollout_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the Rollout. Format is
   *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
   *  releases/{release}/rollouts/{rollout}.
   */
  // const name = 'abc123'
  /**
   *  Required. True = approve; false = reject
   */
  // const approved = true

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function callApproveRollout() {
    // Construct request
    const request = {
      name,
      approved,
    };

    // Run request
    const response = await deployClient.approveRollout(request);
    console.log(response);
  }

  callApproveRollout();
  // [END clouddeploy_v1_generated_CloudDeploy_ApproveRollout_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

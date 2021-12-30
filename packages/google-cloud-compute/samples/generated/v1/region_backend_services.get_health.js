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

function main(backendService, project, region, resourceGroupReferenceResource) {
  // [START compute_v1_generated_RegionBackendServices_GetHealth_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the BackendService resource for which to get health.
   */
  // const backendService = 'abc123'
  /**
   */
  // const project = 'my-project'
  /**
   *  Name of the region scoping this request.
   */
  // const region = 'us-central1'
  /**
   *  The body resource for this request
   */
  // const resourceGroupReferenceResource = {}

  // Imports the Compute library
  const {RegionBackendServicesClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new RegionBackendServicesClient();

  async function callGetHealth() {
    // Construct request
    const request = {
      backendService,
      project,
      region,
      resourceGroupReferenceResource,
    };

    // Run request
    const response = await computeClient.getHealth(request);
    console.log(response);
  }

  callGetHealth();
  // [END compute_v1_generated_RegionBackendServices_GetHealth_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

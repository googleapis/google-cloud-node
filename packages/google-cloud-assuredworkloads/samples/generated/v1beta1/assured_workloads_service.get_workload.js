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
  // [START assuredworkloads_v1beta1_generated_AssuredWorkloadsService_GetWorkload_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Workload to fetch. This is the workloads's
   *  relative path in the API, formatted as
   *  "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}".
   *  For example,
   *  "organizations/123/locations/us-east1/workloads/assured-workload-1".
   */
  // const name = 'abc123'

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} =
    require('@google-cloud/assured-workloads').v1beta1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function getWorkload() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await assuredworkloadsClient.getWorkload(request);
    console.log(response);
  }

  getWorkload();
  // [END assuredworkloads_v1beta1_generated_AssuredWorkloadsService_GetWorkload_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

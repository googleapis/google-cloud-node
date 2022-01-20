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

function main(workload, updateMask) {
  // [START assuredworkloads_v1beta1_generated_AssuredWorkloadsService_UpdateWorkload_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The workload to update.
   *  The workload’s `name` field is used to identify the workload to be updated.
   *  Format:
   *  organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
   */
  // const workload = {}
  /**
   *  Required. The list of fields to be updated.
   */
  // const updateMask = {}

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} = require('@google-cloud/assured-workloads').v1beta1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function callUpdateWorkload() {
    // Construct request
    const request = {
      workload,
      updateMask,
    };

    // Run request
    const response = await assuredworkloadsClient.updateWorkload(request);
    console.log(response);
  }

  callUpdateWorkload();
  // [END assuredworkloads_v1beta1_generated_AssuredWorkloadsService_UpdateWorkload_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

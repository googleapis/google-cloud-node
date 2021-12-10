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

function main(parent, workload) {
  // [START assuredworkloads_v1_generated_AssuredWorkloadsService_CreateWorkload_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the new Workload's parent.
   *  Must be of the form `organizations/{org_id}/locations/{location_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Assured Workload to create
   */
  // const workload = {}
  /**
   *  Optional. A identifier associated with the workload and underlying projects
   *  which allows for the break down of billing costs for a workload. The value
   *  provided for the identifier will add a label to the workload and contained
   *  projects with the identifier as the value.
   */
  // const externalId = 'abc123'

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} =
    require('@google-cloud/assured-workloads').v1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function callCreateWorkload() {
    // Construct request
    const request = {
      parent,
      workload,
    };

    // Run request
    const [operation] = await assuredworkloadsClient.createWorkload(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateWorkload();
  // [END assuredworkloads_v1_generated_AssuredWorkloadsService_CreateWorkload_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

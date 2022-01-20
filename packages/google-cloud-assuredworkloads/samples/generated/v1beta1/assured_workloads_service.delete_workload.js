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
  // [START assuredworkloads_v1beta1_generated_AssuredWorkloadsService_DeleteWorkload_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The `name` field is used to identify the workload.
   *  Format:
   *  organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
   */
  // const name = 'abc123'
  /**
   *  Optional. The etag of the workload.
   *  If this is provided, it must match the server's etag.
   */
  // const etag = 'abc123'

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} = require('@google-cloud/assured-workloads').v1beta1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function callDeleteWorkload() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await assuredworkloadsClient.deleteWorkload(request);
    console.log(response);
  }

  callDeleteWorkload();
  // [END assuredworkloads_v1beta1_generated_AssuredWorkloadsService_DeleteWorkload_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

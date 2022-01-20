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

function main(parent) {
  // [START osconfig_v1_generated_OsConfigService_ListPatchJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. In the form of `projects/*`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of instance status to return.
   */
  // const pageSize = 1234
  /**
   *  A pagination token returned from a previous call
   *  that indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'
  /**
   *  If provided, this field specifies the criteria that must be met by patch
   *  jobs to be included in the response.
   *  Currently, filtering is only available on the patch_deployment field.
   */
  // const filter = 'abc123'

  // Imports the Osconfig library
  const {OsConfigServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigServiceClient();

  async function callListPatchJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await osconfigClient.listPatchJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPatchJobs();
  // [END osconfig_v1_generated_OsConfigService_ListPatchJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

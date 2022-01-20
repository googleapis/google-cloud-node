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
  // [START osconfig_v1_generated_OsConfigService_ListPatchJobInstanceDetails_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent for the instances are in the form of
   *  `projects/* /patchJobs/*`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of instance details records to return.  Default is 100.
   */
  // const pageSize = 1234
  /**
   *  A pagination token returned from a previous call
   *  that indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter expression that filters results listed in the response. This
   *  field supports filtering results by instance zone, name, state, or
   *  `failure_reason`.
   */
  // const filter = 'abc123'

  // Imports the Osconfig library
  const {OsConfigServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigServiceClient();

  async function callListPatchJobInstanceDetails() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await osconfigClient.listPatchJobInstanceDetailsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPatchJobInstanceDetails();
  // [END osconfig_v1_generated_OsConfigService_ListPatchJobInstanceDetails_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

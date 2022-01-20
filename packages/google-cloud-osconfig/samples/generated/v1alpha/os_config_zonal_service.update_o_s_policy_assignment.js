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

function main(osPolicyAssignment) {
  // [START osconfig_v1alpha_generated_OsConfigZonalService_UpdateOSPolicyAssignment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated OS policy assignment.
   */
  // const osPolicyAssignment = {}
  /**
   *  Optional. Field mask that controls which fields of the assignment should be updated.
   */
  // const updateMask = {}

  // Imports the Osconfig library
  const {OsConfigZonalServiceClient} = require('@google-cloud/os-config').v1alpha;

  // Instantiates a client
  const osconfigClient = new OsConfigZonalServiceClient();

  async function callUpdateOSPolicyAssignment() {
    // Construct request
    const request = {
      osPolicyAssignment,
    };

    // Run request
    const [operation] = await osconfigClient.updateOSPolicyAssignment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateOSPolicyAssignment();
  // [END osconfig_v1alpha_generated_OsConfigZonalService_UpdateOSPolicyAssignment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

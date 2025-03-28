// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(workstation, updateMask) {
  // [START workstations_v1_generated_Workstations_UpdateWorkstation_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Workstation to update.
   */
  // const workstation = {}
  /**
   *  Required. Mask specifying which fields in the workstation configuration
   *  should be updated.
   */
  // const updateMask = {}
  /**
   *  Optional. If set, validate the request and preview the review, but do not
   *  actually apply it.
   */
  // const validateOnly = true
  /**
   *  Optional. If set and the workstation configuration is not found, a new
   *  workstation configuration is created. In this situation, update_mask
   *  is ignored.
   */
  // const allowMissing = true

  // Imports the Workstations library
  const {WorkstationsClient} = require('@google-cloud/workstations').v1;

  // Instantiates a client
  const workstationsClient = new WorkstationsClient();

  async function callUpdateWorkstation() {
    // Construct request
    const request = {
      workstation,
      updateMask,
    };

    // Run request
    const [operation] = await workstationsClient.updateWorkstation(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateWorkstation();
  // [END workstations_v1_generated_Workstations_UpdateWorkstation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

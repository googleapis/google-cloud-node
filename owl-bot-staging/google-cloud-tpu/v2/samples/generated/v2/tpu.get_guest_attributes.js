// Copyright 2023 Google LLC
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

function main(name) {
  // [START tpu_v2_generated_Tpu_GetGuestAttributes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name.
   */
  // const name = 'abc123'
  /**
   *  The guest attributes path to be queried.
   */
  // const queryPath = 'abc123'
  /**
   *  The 0-based worker ID. If it is empty, all workers' GuestAttributes will be
   *  returned.
   */
  // const workerIds = ['abc','def']

  // Imports the Tpu library
  const {TpuClient} = require('@google-cloud/tpu').v2;

  // Instantiates a client
  const tpuClient = new TpuClient();

  async function callGetGuestAttributes() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await tpuClient.getGuestAttributes(request);
    console.log(response);
  }

  callGetGuestAttributes();
  // [END tpu_v2_generated_Tpu_GetGuestAttributes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
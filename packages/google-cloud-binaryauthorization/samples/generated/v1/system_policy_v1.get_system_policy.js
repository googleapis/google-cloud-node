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
  // [START binaryauthorization_v1_generated_SystemPolicyV1_GetSystemPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name, in the format `locations/* /policy`.
   *  Note that the system policy is not associated with a project.
   */
  // const name = 'abc123'

  // Imports the Binaryauthorization library
  const {SystemPolicyV1Client} = require('@google-cloud/binary-authorization').v1;

  // Instantiates a client
  const binaryauthorizationClient = new SystemPolicyV1Client();

  async function callGetSystemPolicy() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await binaryauthorizationClient.getSystemPolicy(request);
    console.log(response);
  }

  callGetSystemPolicy();
  // [END binaryauthorization_v1_generated_SystemPolicyV1_GetSystemPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

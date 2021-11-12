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
  // [START binaryauthorization_v1beta1_generated_BinauthzManagementServiceV1Beta1_GetAttestor_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the attestor google.cloud.binaryauthorization.v1beta1.Attestor  to retrieve, in the format
   *  `projects/* /attestors/*`.
   */
  // const name = 'abc123'

  // Imports the Binaryauthorization library
  const {BinauthzManagementServiceV1Beta1Client} =
    require('@google-cloud/binary-authorization').v1beta1;

  // Instantiates a client
  const binaryauthorizationClient =
    new BinauthzManagementServiceV1Beta1Client();

  async function callGetAttestor() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await binaryauthorizationClient.getAttestor(request);
    console.log(response);
  }

  callGetAttestor();
  // [END binaryauthorization_v1beta1_generated_BinauthzManagementServiceV1Beta1_GetAttestor_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

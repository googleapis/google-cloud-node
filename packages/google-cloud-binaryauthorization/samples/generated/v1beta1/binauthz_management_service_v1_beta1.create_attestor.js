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

function main(parent, attestorId, attestor) {
  // [START binaryauthorization_v1beta1_generated_BinauthzManagementServiceV1Beta1_CreateAttestor_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent of this attestor google.cloud.binaryauthorization.v1beta1.Attestor.
   */
  // const parent = 'abc123'
  /**
   *  Required. The attestors google.cloud.binaryauthorization.v1beta1.Attestor  ID.
   */
  // const attestorId = 'abc123'
  /**
   *  Required. The initial attestor google.cloud.binaryauthorization.v1beta1.Attestor  value. The service will
   *  overwrite the attestor name google.cloud.binaryauthorization.v1beta1.Attestor.name  field with the resource name,
   *  in the format `projects/* /attestors/*`.
   */
  // const attestor = {}

  // Imports the Binaryauthorization library
  const {BinauthzManagementServiceV1Beta1Client} =
    require('@google-cloud/binary-authorization').v1beta1;

  // Instantiates a client
  const binaryauthorizationClient =
    new BinauthzManagementServiceV1Beta1Client();

  async function callCreateAttestor() {
    // Construct request
    const request = {
      parent,
      attestorId,
      attestor,
    };

    // Run request
    const response = await binaryauthorizationClient.createAttestor(request);
    console.log(response);
  }

  callCreateAttestor();
  // [END binaryauthorization_v1beta1_generated_BinauthzManagementServiceV1Beta1_CreateAttestor_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

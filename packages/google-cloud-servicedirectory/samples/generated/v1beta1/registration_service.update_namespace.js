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

function main(namespace, updateMask) {
  // [START servicedirectory_v1beta1_generated_RegistrationService_UpdateNamespace_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated namespace.
   */
  // const namespace = {}
  /**
   *  Required. List of fields to be updated in this request.
   */
  // const updateMask = {}

  // Imports the Servicedirectory library
  const {RegistrationServiceClient} =
    require('@google-cloud/service-directory').v1beta1;

  // Instantiates a client
  const servicedirectoryClient = new RegistrationServiceClient();

  async function callUpdateNamespace() {
    // Construct request
    const request = {
      namespace,
      updateMask,
    };

    // Run request
    const response = await servicedirectoryClient.updateNamespace(request);
    console.log(response);
  }

  callUpdateNamespace();
  // [END servicedirectory_v1beta1_generated_RegistrationService_UpdateNamespace_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

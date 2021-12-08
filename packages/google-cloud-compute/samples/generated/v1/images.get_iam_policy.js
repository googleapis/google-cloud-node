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

function main(project, resource) {
  // [START compute_v1_generated_Images_GetIamPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Requested IAM Policy version.
   */
  // const optionsRequestedPolicyVersion = 1234
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  Name or id of the resource for this request.
   */
  // const resource = 'abc123'

  // Imports the Compute library
  const {ImagesClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new ImagesClient();

  async function callGetIamPolicy() {
    // Construct request
    const request = {
      project,
      resource,
    };

    // Run request
    const response = await computeClient.getIamPolicy(request);
    console.log(response);
  }

  callGetIamPolicy();
  // [END compute_v1_generated_Images_GetIamPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

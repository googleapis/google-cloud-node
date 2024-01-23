// Copyright 2024 Google LLC
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
  // [START vmwareengine_v1_generated_VmwareEngine_GetNode_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the node to retrieve.
   *  For example:
   *  `projects/{project}/locations/{location}/privateClouds/{private_cloud}/clusters/{cluster}/nodes/{node}`
   */
  // const name = 'abc123'

  // Imports the Vmwareengine library
  const {VmwareEngineClient} = require('@google-cloud/vmwareengine').v1;

  // Instantiates a client
  const vmwareengineClient = new VmwareEngineClient();

  async function callGetNode() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await vmwareengineClient.getNode(request);
    console.log(response);
  }

  callGetNode();
  // [END vmwareengine_v1_generated_VmwareEngine_GetNode_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
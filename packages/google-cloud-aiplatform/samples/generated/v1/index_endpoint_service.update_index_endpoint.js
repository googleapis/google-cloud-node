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

function main(indexEndpoint, updateMask) {
  // [START aiplatform_v1_generated_IndexEndpointService_UpdateIndexEndpoint_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The IndexEndpoint which replaces the resource on the server.
   */
  // const indexEndpoint = ''
  /**
   *  Required. The update mask applies to the resource. See [google.protobuf.FieldMask][google.protobuf.FieldMask].
   */
  // const updateMask = ''

  // Imports the Aiplatform library
  const {IndexEndpointServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new IndexEndpointServiceClient();

  async function updateIndexEndpoint() {
    // Construct request
    const request = {
      indexEndpoint,
      updateMask,
    };

    // Run request
    const response = await aiplatformClient.updateIndexEndpoint(request);
    console.log(response);
  }

  updateIndexEndpoint();
  // [END aiplatform_v1_generated_IndexEndpointService_UpdateIndexEndpoint_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

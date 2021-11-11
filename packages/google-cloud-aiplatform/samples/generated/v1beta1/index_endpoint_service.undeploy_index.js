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

function main(indexEndpoint, deployedIndexId) {
  // [START aiplatform_v1beta1_generated_IndexEndpointService_UndeployIndex_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the IndexEndpoint resource from which to undeploy an Index.
   *  Format:
   *  `projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}`
   */
  // const indexEndpoint = 'abc123'
  /**
   *  Required. The ID of the DeployedIndex to be undeployed from the IndexEndpoint.
   */
  // const deployedIndexId = 'abc123'

  // Imports the Aiplatform library
  const {IndexEndpointServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new IndexEndpointServiceClient();

  async function callUndeployIndex() {
    // Construct request
    const request = {
      indexEndpoint,
      deployedIndexId,
    };

    // Run request
    const [operation] = await aiplatformClient.undeployIndex(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUndeployIndex();
  // [END aiplatform_v1beta1_generated_IndexEndpointService_UndeployIndex_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

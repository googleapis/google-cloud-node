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

function main(parent, endpoint, endpointId) {
  // [START aiplatform_v1_generated_EndpointService_CreateEndpoint_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to create the Endpoint in.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Endpoint to create.
   */
  // const endpoint = {}
  /**
   *  Immutable. The ID to use for endpoint, which will become the final
   *  component of the endpoint resource name.
   *  If not provided, Vertex AI will generate a value for this ID.
   *  This value should be 1-10 characters, and valid characters are /[0-9]/.
   *  When using HTTP/JSON, this field is populated based on a query string
   *  argument, such as `?endpoint_id=12345`. This is the fallback for fields
   *  that are not included in either the URI or the body.
   */
  // const endpointId = 'abc123'

  // Imports the Aiplatform library
  const {EndpointServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new EndpointServiceClient();

  async function callCreateEndpoint() {
    // Construct request
    const request = {
      parent,
      endpoint,
      endpointId,
    };

    // Run request
    const [operation] = await aiplatformClient.createEndpoint(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateEndpoint();
  // [END aiplatform_v1_generated_EndpointService_CreateEndpoint_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

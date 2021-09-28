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

function main() {
  // [START connectgateway_v1beta1_generated_GatewayService_PutResource_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The HTTP Content-Type header value specifying the content type of the body.
   */
  // const contentType = 'abc123'
  /**
   *  The HTTP request/response body as raw binary.
   */
  // const data = 'Buffer.from('string')'
  /**
   *  Application specific response metadata. Must be set in the first response
   *  for streaming APIs.
   */
  // const extensions = 1234

  // Imports the Gateway library
  const {GatewayServiceClient} =
    require('@google-cloud/gke-connect-gateway').v1beta1;

  // Instantiates a client
  const gatewayClient = new GatewayServiceClient();

  async function putResource() {
    // Construct request
    const request = {};

    // Run request
    const response = await gatewayClient.putResource(request);
    console.log(response);
  }

  putResource();
  // [END connectgateway_v1beta1_generated_GatewayService_PutResource_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

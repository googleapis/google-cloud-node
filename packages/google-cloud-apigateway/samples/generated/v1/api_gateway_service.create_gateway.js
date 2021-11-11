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

function main(parent, gatewayId, gateway) {
  // [START apigateway_v1_generated_ApiGatewayService_CreateGateway_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource of the Gateway, of the form:
   *  `projects/* /locations/*`
   */
  // const parent = 'abc123'
  /**
   *  Required. Identifier to assign to the Gateway. Must be unique within scope of
   *  the parent resource.
   */
  // const gatewayId = 'abc123'
  /**
   *  Required. Gateway resource.
   */
  // const gateway = {}

  // Imports the Apigateway library
  const {ApiGatewayServiceClient} = require('@google-cloud/api-gateway').v1;

  // Instantiates a client
  const apigatewayClient = new ApiGatewayServiceClient();

  async function callCreateGateway() {
    // Construct request
    const request = {
      parent,
      gatewayId,
      gateway,
    };

    // Run request
    const [operation] = await apigatewayClient.createGateway(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateGateway();
  // [END apigateway_v1_generated_ApiGatewayService_CreateGateway_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, apiConfigId, apiConfig) {
  // [START apigateway_v1_generated_ApiGatewayService_CreateApiConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource of the API Config, of the form:
   *  `projects/* /locations/global/apis/*`
   */
  // const parent = 'abc123'
  /**
   *  Required. Identifier to assign to the API Config. Must be unique within scope of
   *  the parent resource.
   */
  // const apiConfigId = 'abc123'
  /**
   *  Required. API resource.
   */
  // const apiConfig = {}

  // Imports the Apigateway library
  const {ApiGatewayServiceClient} = require('@google-cloud/api-gateway').v1;

  // Instantiates a client
  const apigatewayClient = new ApiGatewayServiceClient();

  async function callCreateApiConfig() {
    // Construct request
    const request = {
      parent,
      apiConfigId,
      apiConfig,
    };

    // Run request
    const [operation] = await apigatewayClient.createApiConfig(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateApiConfig();
  // [END apigateway_v1_generated_ApiGatewayService_CreateApiConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

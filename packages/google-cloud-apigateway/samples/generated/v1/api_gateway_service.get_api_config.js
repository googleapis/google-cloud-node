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

function main(name) {
  // [START apigateway_v1_generated_ApiGatewayService_GetApiConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the form:
   *  `projects/* /locations/global/apis/* /configs/*`
   */
  // const name = 'abc123'
  /**
   *  Specifies which fields of the API Config are returned in the response.
   *  Defaults to `BASIC` view.
   */
  // const view = {}

  // Imports the Apigateway library
  const {ApiGatewayServiceClient} = require('@google-cloud/api-gateway').v1;

  // Instantiates a client
  const apigatewayClient = new ApiGatewayServiceClient();

  async function callGetApiConfig() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await apigatewayClient.getApiConfig(request);
    console.log(response);
  }

  callGetApiConfig();
  // [END apigateway_v1_generated_ApiGatewayService_GetApiConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

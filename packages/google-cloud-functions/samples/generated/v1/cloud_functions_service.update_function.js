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

function main(function1) {
  // [START cloudfunctions_v1_generated_CloudFunctionsService_UpdateFunction_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. New version of the function.
   */
  // const function = {}
  /**
   *  Required list of fields to be updated in this request.
   */
  // const updateMask = {}

  // Imports the Functions library
  const {CloudFunctionsServiceClient} = require('@google-cloud/functions').v1;

  // Instantiates a client
  const functionsClient = new CloudFunctionsServiceClient();

  async function callUpdateFunction() {
    // Construct request
    const request = {
      function1,
    };

    // Run request
    const [operation] = await functionsClient.updateFunction(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateFunction();
  // [END cloudfunctions_v1_generated_CloudFunctionsService_UpdateFunction_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

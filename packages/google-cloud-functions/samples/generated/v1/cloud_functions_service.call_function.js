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

function main(name, data) {
  // [START cloudfunctions_v1_generated_CloudFunctionsService_CallFunction_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the function to be called.
   */
  // const name = 'abc123'
  /**
   *  Required. Input to be passed to the function.
   */
  // const data = 'abc123'

  // Imports the Functions library
  const {CloudFunctionsServiceClient} = require('@google-cloud/functions').v1;

  // Instantiates a client
  const functionsClient = new CloudFunctionsServiceClient();

  async function callCallFunction() {
    // Construct request
    const request = {
      name,
      data,
    };

    // Run request
    const response = await functionsClient.callFunction(request);
    console.log(response);
  }

  callCallFunction();
  // [END cloudfunctions_v1_generated_CloudFunctionsService_CallFunction_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, testId, resource) {
  // [START networkmanagement_v1beta1_generated_ReachabilityService_CreateConnectivityTest_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the Connectivity Test to create:
   *      `projects/{project_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Required. The logical name of the Connectivity Test in your project
   *  with the following restrictions:
   *  * Must contain only lowercase letters, numbers, and hyphens.
   *  * Must start with a letter.
   *  * Must be between 1-40 characters.
   *  * Must end with a number or a letter.
   *  * Must be unique within the customer project
   */
  // const testId = 'abc123'
  /**
   *  Required. A `ConnectivityTest` resource
   */
  // const resource = {}

  // Imports the Networkmanagement library
  const {ReachabilityServiceClient} =
    require('@google-cloud/network-management').v1beta1;

  // Instantiates a client
  const networkmanagementClient = new ReachabilityServiceClient();

  async function callCreateConnectivityTest() {
    // Construct request
    const request = {
      parent,
      testId,
      resource,
    };

    // Run request
    const [operation] = await networkmanagementClient.createConnectivityTest(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateConnectivityTest();
  // [END networkmanagement_v1beta1_generated_ReachabilityService_CreateConnectivityTest_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

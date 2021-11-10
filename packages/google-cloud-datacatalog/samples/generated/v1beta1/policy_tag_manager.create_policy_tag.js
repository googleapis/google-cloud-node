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

function main(parent) {
  // [START datacatalog_v1beta1_generated_PolicyTagManager_CreatePolicyTag_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the taxonomy that the policy tag will belong to.
   */
  // const parent = 'abc123'
  /**
   *  The policy tag to be created.
   */
  // const policyTag = {}

  // Imports the Datacatalog library
  const {PolicyTagManagerClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new PolicyTagManagerClient();

  async function callCreatePolicyTag() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await datacatalogClient.createPolicyTag(request);
    console.log(response);
  }

  callCreatePolicyTag();
  // [END datacatalog_v1beta1_generated_PolicyTagManager_CreatePolicyTag_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

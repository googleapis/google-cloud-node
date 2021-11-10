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

function main(parent, policy) {
  // [START orgpolicy_v2_generated_OrgPolicy_CreatePolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Cloud resource that will parent the new Policy. Must be in one of the
   *  following forms:
   *  * `projects/{project_number}`
   *  * `projects/{project_id}`
   *  * `folders/{folder_id}`
   *  * `organizations/{organization_id}`
   */
  // const parent = 'abc123'
  /**
   *  Required. `Policy` to create.
   */
  // const policy = {}

  // Imports the Orgpolicy library
  const {OrgPolicyClient} = require('@google-cloud/org-policy').v2;

  // Instantiates a client
  const orgpolicyClient = new OrgPolicyClient();

  async function callCreatePolicy() {
    // Construct request
    const request = {
      parent,
      policy,
    };

    // Run request
    const response = await orgpolicyClient.createPolicy(request);
    console.log(response);
  }

  callCreatePolicy();
  // [END orgpolicy_v2_generated_OrgPolicy_CreatePolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

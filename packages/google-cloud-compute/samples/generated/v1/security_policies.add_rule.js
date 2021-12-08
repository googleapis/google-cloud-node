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

function main(project, securityPolicy, securityPolicyRuleResource) {
  // [START compute_v1_generated_SecurityPolicies_AddRule_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  Name of the security policy to update.
   */
  // const securityPolicy = 'abc123'
  /**
   *  The body resource for this request
   */
  // const securityPolicyRuleResource = {}

  // Imports the Compute library
  const {SecurityPoliciesClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new SecurityPoliciesClient();

  async function callAddRule() {
    // Construct request
    const request = {
      project,
      securityPolicy,
      securityPolicyRuleResource,
    };

    // Run request
    const response = await computeClient.addRule(request);
    console.log(response);
  }

  callAddRule();
  // [END compute_v1_generated_SecurityPolicies_AddRule_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

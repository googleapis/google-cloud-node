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
  // [START dataproc_v1_generated_AutoscalingPolicyService_GetAutoscalingPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The "resource name" of the autoscaling policy, as described
   *  in https://cloud.google.com/apis/design/resource_names.
   *  * For `projects.regions.autoscalingPolicies.get`, the resource name
   *    of the policy has the following format:
   *    `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
   *  * For `projects.locations.autoscalingPolicies.get`, the resource name
   *    of the policy has the following format:
   *    `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
   */
  // const name = 'abc123'

  // Imports the Dataproc library
  const {AutoscalingPolicyServiceClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new AutoscalingPolicyServiceClient();

  async function getAutoscalingPolicy() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dataprocClient.getAutoscalingPolicy(request);
    console.log(response);
  }

  getAutoscalingPolicy();
  // [END dataproc_v1_generated_AutoscalingPolicyService_GetAutoscalingPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(name, state, startTime) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_SetFindingState_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the finding. See:
   *  https://cloud.google.com/apis/design/resource_names#relative_resource_name
   *  Example:
   *  "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}".
   */
  // const name = 'abc123'
  /**
   *  Required. The desired State of the finding.
   */
  // const state = {}
  /**
   *  Required. The time at which the updated state takes effect.
   */
  // const startTime = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} =
    require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callSetFindingState() {
    // Construct request
    const request = {
      name,
      state,
      startTime,
    };

    // Run request
    const response = await securitycenterClient.setFindingState(request);
    console.log(response);
  }

  callSetFindingState();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_SetFindingState_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(finding) {
  // [START securitycenter_v1beta1_generated_SecurityCenter_UpdateFinding_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The finding resource to update or create if it does not already exist.
   *  parent, security_marks, and update_time will be ignored.
   *  In the case of creation, the finding id portion of the name must
   *  alphanumeric and less than or equal to 32 characters and greater than 0
   *  characters in length.
   */
  // const finding = ''
  /**
   *  The FieldMask to use when updating the finding resource. This field should
   *  not be specified when creating a finding.
   */
  // const updateMask = ''

  // Imports the Securitycenter library
  const {SecurityCenterClient} =
    require('@google-cloud/security-center').v1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function updateFinding() {
    // Construct request
    const request = {
      finding,
    };

    // Run request
    const response = await securitycenterClient.updateFinding(request);
    console.log(response);
  }

  updateFinding();
  // [END securitycenter_v1beta1_generated_SecurityCenter_UpdateFinding_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

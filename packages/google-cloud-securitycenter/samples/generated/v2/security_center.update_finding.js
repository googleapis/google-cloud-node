// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(finding) {
  // [START securitycenter_v2_generated_SecurityCenter_UpdateFinding_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The finding resource to update or create if it does not already
   *  exist. parent, security_marks, and update_time will be ignored.
   *  In the case of creation, the finding id portion of the name must be
   *  alphanumeric and less than or equal to 32 characters and greater than 0
   *  characters in length.
   */
  // const finding = {}
  /**
   *  The FieldMask to use when updating the finding resource. This field should
   *  not be specified when creating a finding.
   *  When updating a finding, an empty mask is treated as updating all mutable
   *  fields and replacing source_properties.  Individual source_properties can
   *  be added/updated by using "source_properties.<property key>" in the field
   *  mask.
   */
  // const updateMask = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/securitycenter').v2;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callUpdateFinding() {
    // Construct request
    const request = {
      finding,
    };

    // Run request
    const response = await securitycenterClient.updateFinding(request);
    console.log(response);
  }

  callUpdateFinding();
  // [END securitycenter_v2_generated_SecurityCenter_UpdateFinding_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

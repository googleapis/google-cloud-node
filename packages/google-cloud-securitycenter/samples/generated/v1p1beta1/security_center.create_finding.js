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

function main(parent, findingId, finding) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_CreateFinding_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the new finding's parent. Its format should be
   *  "organizations/[organization_id]/sources/[source_id]".
   */
  // const parent = 'abc123'
  /**
   *  Required. Unique identifier provided by the client within the parent scope.
   */
  // const findingId = 'abc123'
  /**
   *  Required. The Finding being created. The name and security_marks will be ignored as
   *  they are both output only fields on this resource.
   */
  // const finding = ''

  // Imports the Securitycenter library
  const {SecurityCenterClient} =
    require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function createFinding() {
    // Construct request
    const request = {
      parent,
      findingId,
      finding,
    };

    // Run request
    const response = await securitycenterClient.createFinding(request);
    console.log(response);
  }

  createFinding();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_CreateFinding_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

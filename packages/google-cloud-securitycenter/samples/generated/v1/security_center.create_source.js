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

function main(parent, source) {
  // [START securitycenter_v1_generated_SecurityCenter_CreateSource_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the new source's parent. Its format should be
   *  "organizations/[organization_id]".
   */
  // const parent = 'abc123'
  /**
   *  Required. The Source being created, only the display_name and description will be
   *  used. All other fields will be ignored.
   */
  // const source = ''

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function createSource() {
    // Construct request
    const request = {
      parent,
      source,
    };

    // Run request
    const response = await securitycenterClient.createSource(request);
    console.log(response);
  }

  createSource();
  // [END securitycenter_v1_generated_SecurityCenter_CreateSource_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

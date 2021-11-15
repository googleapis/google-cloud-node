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
  // [START securitycenter_v1_generated_SecurityCenter_ListMuteConfigs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns the collection of mute configs. Its format is
   *  "organizations/[organization_id]", "folders/[folder_id]",
   *  "projects/[project_id]".
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of configs to return. The service may return fewer than
   *  this value.
   *  If unspecified, at most 10 configs will be returned.
   *  The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListMuteConfigs` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListMuteConfigs` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callListMuteConfigs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await securitycenterClient.listMuteConfigsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListMuteConfigs();
  // [END securitycenter_v1_generated_SecurityCenter_ListMuteConfigs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

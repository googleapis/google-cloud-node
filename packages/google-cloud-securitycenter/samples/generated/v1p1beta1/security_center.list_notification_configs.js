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
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_ListNotificationConfigs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the organization to list notification configs.
   *  Its format is "organizations/[organization_id]".
   */
  // const parent = 'abc123'
  /**
   *  The value returned by the last `ListNotificationConfigsResponse`; indicates
   *  that this is a continuation of a prior `ListNotificationConfigs` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callListNotificationConfigs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await securitycenterClient.listNotificationConfigsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListNotificationConfigs();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_ListNotificationConfigs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

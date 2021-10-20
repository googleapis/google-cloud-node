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
  // [START osconfig_v1alpha_generated_OsConfigZonalService_GetInventory_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. API resource name for inventory resource.
   *  Format:
   *  `projects/{project}/locations/{location}/instances/{instance}/inventory`
   *  For `{project}`, either `project-number` or `project-id` can be provided.
   *  For `{instance}`, either Compute Engine  `instance-id` or `instance-name`
   *  can be provided.
   */
  // const name = 'abc123'
  /**
   *  Inventory view indicating what information should be included in the
   *  inventory resource. If unspecified, the default view is BASIC.
   */
  // const view = ''

  // Imports the Osconfig library
  const {OsConfigZonalServiceClient} =
    require('@google-cloud/os-config').v1alpha;

  // Instantiates a client
  const osconfigClient = new OsConfigZonalServiceClient();

  async function getInventory() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await osconfigClient.getInventory(request);
    console.log(response);
  }

  getInventory();
  // [END osconfig_v1alpha_generated_OsConfigZonalService_GetInventory_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

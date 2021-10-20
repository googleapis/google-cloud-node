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

function main(parent, patchDeploymentId, patchDeployment) {
  // [START osconfig_v1_generated_OsConfigService_CreatePatchDeployment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project to apply this patch deployment to in the form
   *  `projects/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. A name for the patch deployment in the project. When creating a
   *  name the following rules apply:
   *  * Must contain only lowercase letters, numbers, and hyphens.
   *  * Must start with a letter.
   *  * Must be between 1-63 characters.
   *  * Must end with a number or a letter.
   *  * Must be unique within the project.
   */
  // const patchDeploymentId = 'abc123'
  /**
   *  Required. The patch deployment to create.
   */
  // const patchDeployment = ''

  // Imports the Osconfig library
  const {OsConfigServiceClient} = require('@google-cloud/os-config').v1;

  // Instantiates a client
  const osconfigClient = new OsConfigServiceClient();

  async function createPatchDeployment() {
    // Construct request
    const request = {
      parent,
      patchDeploymentId,
      patchDeployment,
    };

    // Run request
    const response = await osconfigClient.createPatchDeployment(request);
    console.log(response);
  }

  createPatchDeployment();
  // [END osconfig_v1_generated_OsConfigService_CreatePatchDeployment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

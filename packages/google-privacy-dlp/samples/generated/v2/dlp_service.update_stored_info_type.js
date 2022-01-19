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
  // [START dlp_v2_generated_DlpService_UpdateStoredInfoType_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of organization and storedInfoType to be updated, for
   *  example `organizations/433245324/storedInfoTypes/432452342` or
   *  projects/project-id/storedInfoTypes/432452342.
   */
  // const name = 'abc123'
  /**
   *  Updated configuration for the storedInfoType. If not provided, a new
   *  version of the storedInfoType will be created with the existing
   *  configuration.
   */
  // const config = {}
  /**
   *  Mask to control which fields get updated.
   */
  // const updateMask = {}

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function callUpdateStoredInfoType() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dlpClient.updateStoredInfoType(request);
    console.log(response);
  }

  callUpdateStoredInfoType();
  // [END dlp_v2_generated_DlpService_UpdateStoredInfoType_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START dlp_v2_generated_DlpService_UpdateInspectTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of organization and inspectTemplate to be updated, for
   *  example `organizations/433245324/inspectTemplates/432452342` or
   *  projects/project-id/inspectTemplates/432452342.
   */
  // const name = 'abc123'
  /**
   *  New InspectTemplate value.
   */
  // const inspectTemplate = ''
  /**
   *  Mask to control which fields get updated.
   */
  // const updateMask = ''

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function updateInspectTemplate() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dlpClient.updateInspectTemplate(request);
    console.log(response);
  }

  updateInspectTemplate();
  // [END dlp_v2_generated_DlpService_UpdateInspectTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

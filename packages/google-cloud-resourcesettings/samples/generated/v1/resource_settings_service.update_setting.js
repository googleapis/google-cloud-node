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

function main(setting) {
  // [START resourcesettings_v1_generated_ResourceSettingsService_UpdateSetting_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The setting to update. See Setting google.cloud.resourcesettings.v1.Setting  for field requirements.
   */
  // const setting = {}

  // Imports the Resourcesettings library
  const {ResourceSettingsServiceClient} =
    require('@google-cloud/resource-settings').v1;

  // Instantiates a client
  const resourcesettingsClient = new ResourceSettingsServiceClient();

  async function callUpdateSetting() {
    // Construct request
    const request = {
      setting,
    };

    // Run request
    const response = await resourcesettingsClient.updateSetting(request);
    console.log(response);
  }

  callUpdateSetting();
  // [END resourcesettings_v1_generated_ResourceSettingsService_UpdateSetting_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(name, binaryData) {
  // [START cloudiot_v1_generated_DeviceManager_ModifyCloudToDeviceConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the device. For example,
   *  `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *  `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   */
  // const name = 'abc123'
  /**
   *  The version number to update. If this value is zero, it will not check the
   *  version number of the server and will always update the current version;
   *  otherwise, this update will fail if the version number found on the server
   *  does not match this version number. This is used to support multiple
   *  simultaneous updates without losing data.
   */
  // const versionToUpdate = 1234
  /**
   *  Required. The configuration data for the device.
   */
  // const binaryData = 'Buffer.from('string')'

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function modifyCloudToDeviceConfig() {
    // Construct request
    const request = {
      name,
      binaryData,
    };

    // Run request
    const response = await iotClient.modifyCloudToDeviceConfig(request);
    console.log(response);
  }

  modifyCloudToDeviceConfig();
  // [END cloudiot_v1_generated_DeviceManager_ModifyCloudToDeviceConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

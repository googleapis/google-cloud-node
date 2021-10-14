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
  // [START cloudiot_v1_generated_DeviceManager_SendCommandToDevice_async]
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
   *  Required. The command data to send to the device.
   */
  // const binaryData = 'Buffer.from('string')'
  /**
   *  Optional subfolder for the command. If empty, the command will be delivered
   *  to the /devices/{device-id}/commands topic, otherwise it will be delivered
   *  to the /devices/{device-id}/commands/{subfolder} topic. Multi-level
   *  subfolders are allowed. This field must not have more than 256 characters,
   *  and must not contain any MQTT wildcards ("+" or "#") or null characters.
   */
  // const subfolder = 'abc123'

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function sendCommandToDevice() {
    // Construct request
    const request = {
      name,
      binaryData,
    };

    // Run request
    const response = await iotClient.sendCommandToDevice(request);
    console.log(response);
  }

  sendCommandToDevice();
  // [END cloudiot_v1_generated_DeviceManager_SendCommandToDevice_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

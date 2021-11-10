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

function main(parent, device) {
  // [START cloudiot_v1_generated_DeviceManager_CreateDevice_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the device registry where this device should be created.
   *  For example,
   *  `projects/example-project/locations/us-central1/registries/my-registry`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The device registration details. The field `name` must be empty. The server
   *  generates `name` from the device registry `id` and the
   *  `parent` field.
   */
  // const device = {}

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function callCreateDevice() {
    // Construct request
    const request = {
      parent,
      device,
    };

    // Run request
    const response = await iotClient.createDevice(request);
    console.log(response);
  }

  callCreateDevice();
  // [END cloudiot_v1_generated_DeviceManager_CreateDevice_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

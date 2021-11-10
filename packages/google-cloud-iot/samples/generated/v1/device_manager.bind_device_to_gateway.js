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

function main(parent, gatewayId, deviceId) {
  // [START cloudiot_v1_generated_DeviceManager_BindDeviceToGateway_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the registry. For example,
   *  `projects/example-project/locations/us-central1/registries/my-registry`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The value of `gateway_id` can be either the device numeric ID or the
   *  user-defined device identifier.
   */
  // const gatewayId = 'abc123'
  /**
   *  Required. The device to associate with the specified gateway. The value of
   *  `device_id` can be either the device numeric ID or the user-defined device
   *  identifier.
   */
  // const deviceId = 'abc123'

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function callBindDeviceToGateway() {
    // Construct request
    const request = {
      parent,
      gatewayId,
      deviceId,
    };

    // Run request
    const response = await iotClient.bindDeviceToGateway(request);
    console.log(response);
  }

  callBindDeviceToGateway();
  // [END cloudiot_v1_generated_DeviceManager_BindDeviceToGateway_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

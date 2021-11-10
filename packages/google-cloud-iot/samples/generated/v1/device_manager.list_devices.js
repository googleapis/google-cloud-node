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
  // [START cloudiot_v1_generated_DeviceManager_ListDevices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The device registry path. Required. For example,
   *  `projects/my-project/locations/us-central1/registries/my-registry`.
   */
  // const parent = 'abc123'
  /**
   *  A list of device numeric IDs. If empty, this field is ignored. Maximum
   *  IDs: 10,000.
   */
  // const deviceNumIds = 1234
  /**
   *  A list of device string IDs. For example, `['device0', 'device12']`.
   *  If empty, this field is ignored. Maximum IDs: 10,000
   */
  // const deviceIds = 'abc123'
  /**
   *  The fields of the `Device` resource to be returned in the response. The
   *  fields `id` and `num_id` are always returned, along with any
   *  other fields specified in snake_case format, for example:
   *  `last_heartbeat_time`.
   */
  // const fieldMask = {}
  /**
   *  Options related to gateways.
   */
  // const gatewayListOptions = {}
  /**
   *  The maximum number of devices to return in the response. If this value
   *  is zero, the service will select a default size. A call may return fewer
   *  objects than requested. A non-empty `next_page_token` in the response
   *  indicates that more data is available.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListDevicesResponse`; indicates
   *  that this is a continuation of a prior `ListDevices` call and
   *  the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function callListDevices() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await iotClient.listDevicesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListDevices();
  // [END cloudiot_v1_generated_DeviceManager_ListDevices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

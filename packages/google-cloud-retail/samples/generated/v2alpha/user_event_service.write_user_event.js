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

function main(parent, userEvent) {
  // [START retail_v2alpha_generated_UserEventService_WriteUserEvent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent catalog resource name, such as
   *  `projects/1234/locations/global/catalogs/default_catalog`.
   */
  // const parent = 'abc123'
  /**
   *  Required. User event to write.
   */
  // const userEvent = ''

  // Imports the Retail library
  const {UserEventServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new UserEventServiceClient();

  async function writeUserEvent() {
    // Construct request
    const request = {
      parent,
      userEvent,
    };

    // Run request
    const response = await retailClient.writeUserEvent(request);
    console.log(response);
  }

  writeUserEvent();
  // [END retail_v2alpha_generated_UserEventService_WriteUserEvent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, inputConfig) {
  // [START retail_v2alpha_generated_UserEventService_ImportUserEvents_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. `projects/1234/locations/global/catalogs/default_catalog`
   */
  // const parent = 'abc123'
  /**
   *  Required. The desired input location of the data.
   */
  // const inputConfig = {}
  /**
   *  The desired location of errors incurred during the Import. Cannot be set
   *  for inline user event imports.
   */
  // const errorsConfig = {}

  // Imports the Retail library
  const {UserEventServiceClient} = require('@google-cloud/retail').v2alpha;

  // Instantiates a client
  const retailClient = new UserEventServiceClient();

  async function callImportUserEvents() {
    // Construct request
    const request = {
      parent,
      inputConfig,
    };

    // Run request
    const [operation] = await retailClient.importUserEvents(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportUserEvents();
  // [END retail_v2alpha_generated_UserEventService_ImportUserEvents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

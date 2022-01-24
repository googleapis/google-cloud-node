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

function main() {
  // [START appengine_v1_generated_Services_ListServices_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the parent Application resource. Example: `apps/myapp`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum results to return per page.
   */
  // const pageSize = 1234
  /**
   *  Continuation token for fetching the next page of results.
   */
  // const pageToken = 'abc123'

  // Imports the Appengine library
  const {ServicesClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new ServicesClient();

  async function callListServices() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await appengineClient.listServicesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListServices();
  // [END appengine_v1_generated_Services_ListServices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

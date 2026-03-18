// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(parent) {
  // [START nodejs_run_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location and project to list resources on.
   *  Location must be a valid GCP region, and may not be the "-" wildcard.
   *  Format: projects/{projectnumber}/locations/{location}
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of Services to return in this call.
   */
  // const pageSize = 1234
  /**
   *  A page token received from a previous call to ListServices.
   *  All other parameters must match.
   */
  // const pageToken = 'abc123'

  /**
   *  If true, returns deleted (but unexpired) resources along with active ones.
   */
  // const showDeleted = true
  // Imports the Run library
  const {ServicesClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new ServicesClient();

  async function callListServices() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await runClient.listServicesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListServices();
  // [END nodejs_run_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

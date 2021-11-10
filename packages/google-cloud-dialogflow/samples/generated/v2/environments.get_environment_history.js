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
  // [START dialogflow_v2_generated_Environments_GetEnvironmentHistory_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the environment to retrieve history for.
   *  Supported formats:
   *  - `projects/<Project ID>/agent/environments/<Environment ID>`
   *  - `projects/<Project ID>/locations/<Location
   *    ID>/agent/environments/<Environment ID>`
   *  The environment ID for the default environment is `-`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return in a single page. By default 100 and
   *  at most 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Dialogflow library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EnvironmentsClient();

  async function callGetEnvironmentHistory() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dialogflowClient.getEnvironmentHistoryAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callGetEnvironmentHistory();
  // [END dialogflow_v2_generated_Environments_GetEnvironmentHistory_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

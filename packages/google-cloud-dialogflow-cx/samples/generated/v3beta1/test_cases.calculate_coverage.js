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

function main(agent, type) {
  // [START dialogflow_v3beta1_generated_TestCases_CalculateCoverage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to calculate coverage for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const agent = 'abc123'
  /**
   *  Required. The type of coverage requested.
   */
  // const type = {}

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function callCalculateCoverage() {
    // Construct request
    const request = {
      agent,
      type,
    };

    // Run request
    const response = await cxClient.calculateCoverage(request);
    console.log(response);
  }

  callCalculateCoverage();
  // [END dialogflow_v3beta1_generated_TestCases_CalculateCoverage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

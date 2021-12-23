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

function main(parent, names) {
  // [START dialogflow_v3beta1_generated_TestCases_BatchDeleteTestCases_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to delete test cases from.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Format of test case names: `projects/<Project ID>/locations/
   *  <Location ID>/agents/<AgentID>/testCases/<TestCase ID>`.
   */
  // const names = 'abc123'

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function callBatchDeleteTestCases() {
    // Construct request
    const request = {
      parent,
      names,
    };

    // Run request
    const response = await cxClient.batchDeleteTestCases(request);
    console.log(response);
  }

  callBatchDeleteTestCases();
  // [END dialogflow_v3beta1_generated_TestCases_BatchDeleteTestCases_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

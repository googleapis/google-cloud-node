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
  // [START dialogflow_v3_generated_TestCases_ImportTestCases_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to import test cases to.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The Google Cloud Storage (https://cloud.google.com/storage/docs/) URI
   *  to import test cases from. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`.
   */
  // const gcsUri = 'abc123'
  /**
   *  Uncompressed raw byte content for test cases.
   */
  // const content = 'Buffer.from('string')'

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function callImportTestCases() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await cxClient.importTestCases(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callImportTestCases();
  // [END dialogflow_v3_generated_TestCases_ImportTestCases_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

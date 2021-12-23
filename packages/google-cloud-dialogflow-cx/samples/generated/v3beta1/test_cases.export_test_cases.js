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
  // [START dialogflow_v3beta1_generated_TestCases_ExportTestCases_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent where to export test cases from.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The Google Cloud Storage (https://cloud.google.com/storage/docs/) URI to
   *  export the test cases to. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`. If unspecified, the serialized test
   *  cases is returned inline.
   */
  // const gcsUri = 'abc123'
  /**
   *  The data format of the exported test cases. If not specified, `BLOB` is
   *  assumed.
   */
  // const dataFormat = {}
  /**
   *  The filter expression used to filter exported test cases, see
   *  API Filtering (https://aip.dev/160). The expression is case insensitive
   *  and supports the following syntax:
   *    name = <value> OR name = <value>  ...
   *  For example:
   *  *   "name = t1 OR name = t2" matches the test case with the exact resource
   *      name "t1" or "t2".
   */
  // const filter = 'abc123'

  // Imports the Cx library
  const {TestCasesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new TestCasesClient();

  async function callExportTestCases() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await cxClient.exportTestCases(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callExportTestCases();
  // [END dialogflow_v3beta1_generated_TestCases_ExportTestCases_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

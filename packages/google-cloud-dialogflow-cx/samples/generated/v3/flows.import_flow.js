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
  // [START dialogflow_v3_generated_Flows_ImportFlow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to import the flow into.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI
   *  to import flow from. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`.
   */
  // const flowUri = 'abc123'
  /**
   *  Uncompressed raw byte content for flow.
   */
  // const flowContent = 'Buffer.from('string')'
  /**
   *  Flow import mode. If not specified, `KEEP` is assumed.
   */
  // const importOption = ''

  // Imports the Cx library
  const {FlowsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new FlowsClient();

  async function importFlow() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await cxClient.importFlow(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  importFlow();
  // [END dialogflow_v3_generated_Flows_ImportFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(name) {
  // [START dialogflow_v3_generated_Flows_ExportFlow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the flow to export.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>`.
   */
  // const name = 'abc123'
  /**
   *  Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to
   *  export the flow to. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`.
   *  If left unspecified, the serialized flow is returned inline.
   */
  // const flowUri = 'abc123'
  /**
   *  Optional. Whether to export flows referenced by the specified flow.
   */
  // const includeReferencedFlows = true

  // Imports the Cx library
  const {FlowsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new FlowsClient();

  async function exportFlow() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await cxClient.exportFlow(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  exportFlow();
  // [END dialogflow_v3_generated_Flows_ExportFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START dialogflow_v3_generated_Flows_DeleteFlow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the flow to delete.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field has no effect for flows with no incoming transitions.
   *  For flows with incoming transitions:
   *  *  If `force` is set to false, an error will be returned with message
   *     indicating the incoming transitions.
   *  *  If `force` is set to true, Dialogflow will remove the flow, as well as
   *     any transitions to the flow (i.e. [Target
   *     flow][EventHandler.target_flow] in event handlers or [Target
   *     flow][TransitionRoute.target_flow] in transition routes that point to
   *     this flow will be cleared).
   */
  // const force = true

  // Imports the Cx library
  const {FlowsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new FlowsClient();

  async function deleteFlow() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.deleteFlow(request);
    console.log(response);
  }

  deleteFlow();
  // [END dialogflow_v3_generated_Flows_DeleteFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

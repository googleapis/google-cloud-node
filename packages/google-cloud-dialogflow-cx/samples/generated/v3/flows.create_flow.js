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

function main(parent, flow) {
  // [START dialogflow_v3_generated_Flows_CreateFlow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to create a flow for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The flow to create.
   */
  // const flow = ''
  /**
   *  The language of the following fields in `flow`:
   *  *  `Flow.event_handlers.trigger_fulfillment.messages`
   *  *  `Flow.event_handlers.trigger_fulfillment.conditional_cases`
   *  *  `Flow.transition_routes.trigger_fulfillment.messages`
   *  *  `Flow.transition_routes.trigger_fulfillment.conditional_cases`
   *  If not specified, the agent's default language is used.
   *  [Many
   *  languages](https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {FlowsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new FlowsClient();

  async function createFlow() {
    // Construct request
    const request = {
      parent,
      flow,
    };

    // Run request
    const response = await cxClient.createFlow(request);
    console.log(response);
  }

  createFlow();
  // [END dialogflow_v3_generated_Flows_CreateFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

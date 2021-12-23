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

function main(parent, transitionRouteGroup) {
  // [START dialogflow_v3_generated_TransitionRouteGroups_CreateTransitionRouteGroup_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The flow to create an TransitionRouteGroup google.cloud.dialogflow.cx.v3.TransitionRouteGroup  for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The transition route group to create.
   */
  // const transitionRouteGroup = {}
  /**
   *  The language of the following fields in `TransitionRouteGroup`:
   *  *  `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages`
   *  *
   *  `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases`
   *  If not specified, the agent's default language is used.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {TransitionRouteGroupsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new TransitionRouteGroupsClient();

  async function callCreateTransitionRouteGroup() {
    // Construct request
    const request = {
      parent,
      transitionRouteGroup,
    };

    // Run request
    const response = await cxClient.createTransitionRouteGroup(request);
    console.log(response);
  }

  callCreateTransitionRouteGroup();
  // [END dialogflow_v3_generated_TransitionRouteGroups_CreateTransitionRouteGroup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

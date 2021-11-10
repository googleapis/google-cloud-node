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
  // [START dialogflow_v3beta1_generated_Pages_DeletePage_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the page to delete.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/Flows/<flow ID>/pages/<Page ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field has no effect for pages with no incoming transitions.
   *  For pages with incoming transitions:
   *  *  If `force` is set to false, an error will be returned with message
   *     indicating the incoming transitions.
   *  *  If `force` is set to true, Dialogflow will remove the page, as well as
   *     any transitions to the page (i.e. Target
   *     page EventHandler.target_page  in event handlers or Target
   *     page TransitionRoute.target_page  in transition routes that point to
   *     this page will be cleared).
   */
  // const force = true

  // Imports the Cx library
  const {PagesClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new PagesClient();

  async function callDeletePage() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.deletePage(request);
    console.log(response);
  }

  callDeletePage();
  // [END dialogflow_v3beta1_generated_Pages_DeletePage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

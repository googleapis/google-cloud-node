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
  // [START dialogflow_v3_generated_Pages_ListPages_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The flow to list all pages for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/flows/<Flow ID>`.
   */
  // const parent = 'abc123'
  /**
   *  The language to list pages for. The following fields are language
   *  dependent:
   *  *  `Page.entry_fulfillment.messages`
   *  *  `Page.entry_fulfillment.conditional_cases`
   *  *  `Page.event_handlers.trigger_fulfillment.messages`
   *  *  `Page.event_handlers.trigger_fulfillment.conditional_cases`
   *  *  `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages`
   *  *
   *  `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases`
   *  *  `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages`
   *  *
   *  `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases`
   *  *  `Page.transition_routes.trigger_fulfillment.messages`
   *  *  `Page.transition_routes.trigger_fulfillment.conditional_cases`
   *  If not specified, the agent's default language is used.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'
  /**
   *  The maximum number of items to return in a single page. By default 100 and
   *  at most 1000.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Cx library
  const {PagesClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new PagesClient();

  async function callListPages() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await cxClient.listPagesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPages();
  // [END dialogflow_v3_generated_Pages_ListPages_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

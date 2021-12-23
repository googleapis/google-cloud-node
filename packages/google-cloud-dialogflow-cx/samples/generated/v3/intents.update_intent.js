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

function main(intent) {
  // [START dialogflow_v3_generated_Intents_UpdateIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The intent to update.
   */
  // const intent = {}
  /**
   *  The language of the following fields in `intent`:
   *  *   `Intent.training_phrases.parts.text`
   *  If not specified, the agent's default language is used.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'
  /**
   *  The mask to control which fields get updated. If the mask is not present,
   *  all fields will be updated.
   */
  // const updateMask = {}

  // Imports the Cx library
  const {IntentsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new IntentsClient();

  async function callUpdateIntent() {
    // Construct request
    const request = {
      intent,
    };

    // Run request
    const response = await cxClient.updateIntent(request);
    console.log(response);
  }

  callUpdateIntent();
  // [END dialogflow_v3_generated_Intents_UpdateIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

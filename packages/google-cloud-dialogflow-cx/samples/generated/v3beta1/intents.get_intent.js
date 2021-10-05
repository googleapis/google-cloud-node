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
  // [START dialogflow_v3beta1_generated_Intents_GetIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the intent.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/intents/<Intent ID>`.
   */
  // const name = 'abc123'
  /**
   *  The language to retrieve the intent for. The following fields are language
   *  dependent:
   *  *   `Intent.training_phrases.parts.text`
   *  If not specified, the agent's default language is used.
   *  [Many
   *  languages](https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {IntentsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new IntentsClient();

  async function getIntent() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.getIntent(request);
    console.log(response);
  }

  getIntent();
  // [END dialogflow_v3beta1_generated_Intents_GetIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

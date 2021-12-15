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

function main(parent, intent) {
  // [START dialogflow_v2beta1_generated_Intents_CreateIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to create a intent for.
   *  Supported formats:
   *  - `projects/<Project ID>/agent`
   *  - `projects/<Project ID>/locations/<Location ID>/agent`
   */
  // const parent = 'abc123'
  /**
   *  Required. The intent to create.
   */
  // const intent = {}
  /**
   *  Optional. The language used to access language-specific data.
   *  If not specified, the agent's default language is used.
   *  For more information, see
   *  Multilingual intent and entity
   *  data (https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
   */
  // const languageCode = 'abc123'
  /**
   *  Optional. The resource view to apply to the returned intent.
   */
  // const intentView = {}

  // Imports the Dialogflow library
  const {IntentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new IntentsClient();

  async function callCreateIntent() {
    // Construct request
    const request = {
      parent,
      intent,
    };

    // Run request
    const response = await dialogflowClient.createIntent(request);
    console.log(response);
  }

  callCreateIntent();
  // [END dialogflow_v2beta1_generated_Intents_CreateIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

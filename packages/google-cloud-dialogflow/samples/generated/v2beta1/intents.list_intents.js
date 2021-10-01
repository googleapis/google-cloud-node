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
  // [START dialogflow_v2beta1_generated_Intents_ListIntents_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to list all intents from.
   *  Format: `projects/<Project ID>/agent` or `projects/<Project
   *  ID>/locations/<Location ID>/agent`.
   *  Alternatively, you can specify the environment to list intents for.
   *  Format: `projects/<Project ID>/agent/environments/<Environment ID>`
   *  or `projects/<Project ID>/locations/<Location
   *  ID>/agent/environments/<Environment ID>`.
   *  Note: training phrases of the intents will not be returned for non-draft
   *  environment.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The language used to access language-specific data.
   *  If not specified, the agent's default language is used.
   *  For more information, see
   *  [Multilingual intent and entity
   *  data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
   */
  // const languageCode = 'abc123'
  /**
   *  Optional. The resource view to apply to the returned intent.
   */
  // const intentView = ''
  /**
   *  Optional. The maximum number of items to return in a single page. By
   *  default 100 and at most 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Dialogflow library
  const {IntentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new IntentsClient();

  async function listIntents() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dialogflowClient.listIntentsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listIntents();
  // [END dialogflow_v2beta1_generated_Intents_ListIntents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

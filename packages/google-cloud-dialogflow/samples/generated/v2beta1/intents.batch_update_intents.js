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
  // [START dialogflow_v2beta1_generated_Intents_BatchUpdateIntents_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the agent to update or create intents in.
   *  Supported formats:
   *  - `projects/<Project ID>/agent`
   *  - `projects/<Project ID>/locations/<Location ID>/agent`
   */
  // const parent = 'abc123'
  /**
   *  The URI to a Google Cloud Storage file containing intents to update or
   *  create. The file format can either be a serialized proto (of IntentBatch
   *  type) or JSON object. Note: The URI must start with "gs://".
   */
  // const intentBatchUri = 'abc123'
  /**
   *  The collection of intents to update or create.
   */
  // const intentBatchInline = {}
  /**
   *  Optional. The language used to access language-specific data.
   *  If not specified, the agent's default language is used.
   *  For more information, see
   *  Multilingual intent and entity
   *  data (https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
   */
  // const languageCode = 'abc123'
  /**
   *  Optional. The mask to control which fields get updated.
   */
  // const updateMask = {}
  /**
   *  Optional. The resource view to apply to the returned intent.
   */
  // const intentView = {}

  // Imports the Dialogflow library
  const {IntentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new IntentsClient();

  async function callBatchUpdateIntents() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await dialogflowClient.batchUpdateIntents(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchUpdateIntents();
  // [END dialogflow_v2beta1_generated_Intents_BatchUpdateIntents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START dialogflow_v2beta1_generated_Intents_DeleteIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the intent to delete. If this intent has direct or
   *  indirect followup intents, we also delete them.
   *  Supported formats:
   *  - `projects/<Project ID>/agent/intents/<Intent ID>`
   *  - `projects/<Project ID>/locations/<Location ID>/agent/intents/<Intent ID>`
   */
  // const name = 'abc123'

  // Imports the Dialogflow library
  const {IntentsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new IntentsClient();

  async function callDeleteIntent() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dialogflowClient.deleteIntent(request);
    console.log(response);
  }

  callDeleteIntent();
  // [END dialogflow_v2beta1_generated_Intents_DeleteIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

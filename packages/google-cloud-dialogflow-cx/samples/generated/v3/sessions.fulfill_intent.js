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

function main() {
  // [START dialogflow_v3_generated_Sessions_FulfillIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Must be same as the corresponding MatchIntent request, otherwise the
   *  behavior is undefined.
   */
  // const matchIntentRequest = {}
  /**
   *  The matched intent/event to fulfill.
   */
  // const match = {}
  /**
   *  Instructs the speech synthesizer how to generate output audio.
   */
  // const outputAudioConfig = {}

  // Imports the Cx library
  const {SessionsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new SessionsClient();

  async function callFulfillIntent() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await cxClient.fulfillIntent(request);
    console.log(response);
  }

  callFulfillIntent();
  // [END dialogflow_v3_generated_Sessions_FulfillIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(session, queryInput) {
  // [START dialogflow_v3_generated_Sessions_DetectIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the session this query is sent to.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/sessions/<Session ID>` or `projects/<Project ID>/locations/<Location
   *  ID>/agents/<Agent ID>/environments/<Environment ID>/sessions/<Session ID>`.
   *  If `Environment ID` is not specified, we assume default 'draft'
   *  environment.
   *  It's up to the API caller to choose an appropriate `Session ID`. It can be
   *  a random number or some type of session identifiers (preferably hashed).
   *  The length of the `Session ID` must not exceed 36 characters.
   *  For more information, see the sessions
   *  guide (https://cloud.google.com/dialogflow/cx/docs/concept/session).
   *  Note: Always use agent versions for production traffic.
   *  See Versions and
   *  environments (https://cloud.google.com/dialogflow/cx/docs/concept/version).
   */
  // const session = 'abc123'
  /**
   *  The parameters of this query.
   */
  // const queryParams = {}
  /**
   *  Required. The input specification.
   */
  // const queryInput = {}
  /**
   *  Instructs the speech synthesizer how to generate the output audio.
   */
  // const outputAudioConfig = {}

  // Imports the Cx library
  const {SessionsClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new SessionsClient();

  async function callDetectIntent() {
    // Construct request
    const request = {
      session,
      queryInput,
    };

    // Run request
    const response = await cxClient.detectIntent(request);
    console.log(response);
  }

  callDetectIntent();
  // [END dialogflow_v3_generated_Sessions_DetectIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

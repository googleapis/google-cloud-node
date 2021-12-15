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
  // [START dialogflow_v2beta1_generated_Sessions_DetectIntent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the session this query is sent to. Supported formats:
   *  - `projects/<Project ID>/agent/sessions/<Session ID>,
   *  - `projects/<Project ID>/locations/<Location ID>/agent/sessions/<Session
   *    ID>`,
   *  - `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *    ID>/sessions/<Session ID>`,
   *  - `projects/<Project ID>/locations/<Location
   *    ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
   *    ID>`,
   *  If `Location ID` is not specified we assume default 'us' location. If
   *  `Environment ID` is not specified, we assume default 'draft' environment
   *  (`Environment ID` might be referred to as environment name at some places).
   *  If `User ID` is not specified, we are using "-". It's up to the API caller
   *  to choose an appropriate `Session ID` and `User Id`. They can be a random
   *  number or some type of user and session identifiers (preferably hashed).
   *  The length of the `Session ID` and `User ID` must not exceed 36 characters.
   *  For more information, see the API interactions
   *  guide (https://cloud.google.com/dialogflow/docs/api-overview).
   *  Note: Always use agent versions for production traffic.
   *  See Versions and
   *  environments (https://cloud.google.com/dialogflow/es/docs/agents-versions).
   */
  // const session = 'abc123'
  /**
   *  The parameters of this query.
   */
  // const queryParams = {}
  /**
   *  Required. The input specification. It can be set to:
   *  1.  an audio config
   *      which instructs the speech recognizer how to process the speech audio,
   *  2.  a conversational query in the form of text, or
   *  3.  an event that specifies which intent to trigger.
   */
  // const queryInput = {}
  /**
   *  Instructs the speech synthesizer how to generate the output
   *  audio. If this field is not set and agent-level speech synthesizer is not
   *  configured, no output audio is generated.
   */
  // const outputAudioConfig = {}
  /**
   *  Mask for output_audio_config google.cloud.dialogflow.v2beta1.DetectIntentRequest.output_audio_config  indicating which settings in this
   *  request-level config should override speech synthesizer settings defined at
   *  agent-level.
   *  If unspecified or empty, output_audio_config google.cloud.dialogflow.v2beta1.DetectIntentRequest.output_audio_config  replaces the agent-level
   *  config in its entirety.
   */
  // const outputAudioConfigMask = {}
  /**
   *  The natural language speech audio to be processed. This field
   *  should be populated iff `query_input` is set to an input audio config.
   *  A single request can contain up to 1 minute of speech audio data.
   */
  // const inputAudio = 'Buffer.from('string')'

  // Imports the Dialogflow library
  const {SessionsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new SessionsClient();

  async function callDetectIntent() {
    // Construct request
    const request = {
      session,
      queryInput,
    };

    // Run request
    const response = await dialogflowClient.detectIntent(request);
    console.log(response);
  }

  callDetectIntent();
  // [END dialogflow_v2beta1_generated_Sessions_DetectIntent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

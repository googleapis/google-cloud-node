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

function main(participant) {
  // [START dialogflow_v2beta1_generated_Participants_AnalyzeContent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the participant this text comes from.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>/participants/<Participant ID>`.
   */
  // const participant = 'abc123'
  /**
   *  The natural language text to be processed.
   */
  // const textInput = {}
  /**
   *  An input event to send to Dialogflow.
   */
  // const eventInput = {}
  /**
   *  Speech synthesis configuration.
   *  The speech synthesis settings for a virtual agent that may be configured
   *  for the associated conversation profile are not used when calling
   *  AnalyzeContent. If this configuration is not supplied, speech synthesis
   *  is disabled.
   */
  // const replyAudioConfig = {}
  /**
   *  Parameters for a Dialogflow virtual-agent query.
   */
  // const queryParams = {}
  /**
   *  Optional. The send time of the message from end user or human agent's
   *  perspective. It is used for identifying the same message under one
   *  participant.
   *  Given two messages under the same participant:
   *   - If send time are different regardless of whether the content of the
   *   messages are exactly the same, the conversation will regard them as
   *   two distinct messages sent by the participant.
   *   - If send time is the same regardless of whether the content of the
   *   messages are exactly the same, the conversation will regard them as
   *   same message, and ignore the message received later.
   *  If the value is not provided, a new request will always be regarded as a
   *  new message without any de-duplication.
   */
  // const messageSendTime = {}
  /**
   *  A unique identifier for this request. Restricted to 36 ASCII characters.
   *  A random UUID is recommended.
   *  This request is only idempotent if a `request_id` is provided.
   */
  // const requestId = 'abc123'

  // Imports the Dialogflow library
  const {ParticipantsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new ParticipantsClient();

  async function callAnalyzeContent() {
    // Construct request
    const request = {
      participant,
    };

    // Run request
    const response = await dialogflowClient.analyzeContent(request);
    console.log(response);
  }

  callAnalyzeContent();
  // [END dialogflow_v2beta1_generated_Participants_AnalyzeContent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

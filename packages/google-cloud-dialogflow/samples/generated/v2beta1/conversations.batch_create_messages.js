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

function main(parent, requests) {
  // [START dialogflow_v2beta1_generated_Conversations_BatchCreateMessages_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource identifier of the conversation to create message.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. A maximum of 1000 Messages can be created in a batch.
   *  [CreateMessageRequest.message.send_time][] is required. All created
   *  messages will have identical [Message.create_time][google.cloud.dialogflow.v2beta1.Message.create_time].
   */
  // const requests = 1234

  // Imports the Dialogflow library
  const {ConversationsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new ConversationsClient();

  async function batchCreateMessages() {
    // Construct request
    const request = {
      parent,
      requests,
    };

    // Run request
    const response = await dialogflowClient.batchCreateMessages(request);
    console.log(response);
  }

  batchCreateMessages();
  // [END dialogflow_v2beta1_generated_Conversations_BatchCreateMessages_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

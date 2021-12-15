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
  // [START dialogflow_v2_generated_Conversations_ListMessages_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the conversation to list messages for.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>`
   */
  // const parent = 'abc123'
  /**
   *  Optional. Filter on message fields. Currently predicates on `create_time`
   *  and `create_time_epoch_microseconds` are supported. `create_time` only
   *  support milliseconds accuracy. E.g.,
   *  `create_time_epoch_microseconds > 1551790877964485` or
   *  `create_time > 2017-01-15T01:30:15.01Z`.
   *  For more information about filtering, see
   *  API Filtering (https://aip.dev/160).
   */
  // const filter = 'abc123'
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
  const {ConversationsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new ConversationsClient();

  async function callListMessages() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dialogflowClient.listMessagesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListMessages();
  // [END dialogflow_v2_generated_Conversations_ListMessages_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

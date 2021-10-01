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
  // [START dialogflow_v2beta1_generated_Conversations_ListConversations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project from which to list all conversation.
   *  Format: `projects/<Project ID>/locations/<Location ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return in a single page. By
   *  default 100 and at most 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter expression that filters conversations listed in the response. In
   *  general, the expression must specify the field name, a comparison operator,
   *  and the value to use for filtering:
   *  <ul>
   *    <li>The value must be a string, a number, or a boolean.</li>
   *    <li>The comparison operator must be either `=`,`!=`, `>`, or `<`.</li>
   *    <li>To filter on multiple expressions, separate the
   *        expressions with `AND` or `OR` (omitting both implies `AND`).</li>
   *    <li>For clarity, expressions can be enclosed in parentheses.</li>
   *  </ul>
   *  Only `lifecycle_state` can be filtered on in this way. For example,
   *  the following expression only returns `COMPLETED` conversations:
   *  `lifecycle_state = "COMPLETED"`
   *  For more information about filtering, see
   *  [API Filtering](https://aip.dev/160).
   */
  // const filter = 'abc123'

  // Imports the Dialogflow library
  const {ConversationsClient} = require('@google-cloud/dialogflow').v2beta1;

  // Instantiates a client
  const dialogflowClient = new ConversationsClient();

  async function listConversations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dialogflowClient.listConversationsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listConversations();
  // [END dialogflow_v2beta1_generated_Conversations_ListConversations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

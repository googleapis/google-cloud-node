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

function main(parent, filter) {
  // [START dialogflow_v2_generated_AnswerRecords_ListAnswerRecords_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project to list all answer records for in reverse
   *  chronological order. Format: `projects/<Project ID>/locations/<Location
   *  ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Filters to restrict results to specific answer records.
   *  Filter on answer record type. Currently predicates on `type` is supported,
   *  valid values are `ARTICLE_ANSWER`, `FAQ_ANSWER`.
   *  For more information about filtering, see
   *  API Filtering (https://aip.dev/160).
   */
  // const filter = 'abc123'
  /**
   *  Optional. The maximum number of records to return in a single page.
   *  The server may return fewer records than this. If unspecified, we use 10.
   *  The maximum is 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. The
   *  ListAnswerRecordsResponse.next_page_token google.cloud.dialogflow.v2.ListAnswerRecordsResponse.next_page_token 
   *  value returned from a previous list request used to continue listing on
   *  the next page.
   */
  // const pageToken = 'abc123'

  // Imports the Dialogflow library
  const {AnswerRecordsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new AnswerRecordsClient();

  async function callListAnswerRecords() {
    // Construct request
    const request = {
      parent,
      filter,
    };

    // Run request
    const iterable = await dialogflowClient.listAnswerRecordsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListAnswerRecords();
  // [END dialogflow_v2_generated_AnswerRecords_ListAnswerRecords_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START dataqna_v1alpha_generated_AutoSuggestionService_SuggestQueries_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent of the suggestion query is the resource denoting the project and
   *  location.
   */
  // const parent = 'abc123'
  /**
   *  The scopes to which this search is restricted. The only supported scope
   *  pattern is
   *  `//bigquery.googleapis.com/projects/{GCP-PROJECT-ID}/datasets/{DATASET-ID}/tables/{TABLE-ID}`.
   */
  // const scopes = 'abc123'
  /**
   *  User query for which to generate suggestions. If the query is empty, zero
   *  state suggestions are returned. This allows UIs to display suggestions
   *  right away, helping the user to get a sense of what a query might look
   *  like.
   */
  // const query = 'abc123'
  /**
   *  The requested suggestion type. Multiple suggestion types can be
   *  requested, but there is no guarantee that the service will return
   *  suggestions for each type. Suggestions for a requested type might rank
   *  lower than suggestions for other types and the service may decide to cut
   *  these suggestions off.
   */
  // const suggestionTypes = 1234

  // Imports the Dataqna library
  const {AutoSuggestionServiceClient} = require('@google-cloud/data-qna').v1alpha;

  // Instantiates a client
  const dataqnaClient = new AutoSuggestionServiceClient();

  async function callSuggestQueries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await dataqnaClient.suggestQueries(request);
    console.log(response);
  }

  callSuggestQueries();
  // [END dataqna_v1alpha_generated_AutoSuggestionService_SuggestQueries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

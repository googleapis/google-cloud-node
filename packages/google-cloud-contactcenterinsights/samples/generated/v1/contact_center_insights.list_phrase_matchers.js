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
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_ListPhraseMatchers_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the phrase matcher.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of phrase matchers to return in the response. If this
   *  value is zero, the service will select a default size. A call might return
   *  fewer objects than requested. A non-empty `next_page_token` in the response
   *  indicates that more data is available.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListPhraseMatchersResponse`. This value
   *  indicates that this is a continuation of a prior `ListPhraseMatchers` call
   *  and that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter to reduce results to a specific subset. Useful for querying
   *  phrase matchers with specific properties.
   */
  // const filter = 'abc123'

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} = require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function callListPhraseMatchers() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await contactcenterinsightsClient.listPhraseMatchersAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPhraseMatchers();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_ListPhraseMatchers_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

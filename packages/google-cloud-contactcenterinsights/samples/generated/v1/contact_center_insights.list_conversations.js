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
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_ListConversations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the conversation.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of conversations to return in the response. A valid page
   *  size ranges from 0 to 1,000 inclusive. If the page size is zero or
   *  unspecified, a default page size of 100 will be chosen. Note that a call
   *  might return fewer results than the requested page size.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListConversationsResponse`. This value
   *  indicates that this is a continuation of a prior `ListConversations` call
   *  and that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter to reduce results to a specific subset. Useful for querying
   *  conversations with specific properties.
   */
  // const filter = 'abc123'
  /**
   *  The level of details of the conversation. Default is `BASIC`.
   */
  // const view = {}

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} =
    require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function callListConversations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await contactcenterinsightsClient.listConversationsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListConversations();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_ListConversations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

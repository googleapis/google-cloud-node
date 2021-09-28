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

function main(parent, phraseMatcher) {
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_CreatePhraseMatcher_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the phrase matcher. Required. The location to create
   *  a phrase matcher for.
   *  Format: `projects/<Project ID>/locations/<Location ID>` or
   *  `projects/<Project Number>/locations/<Location ID>`
   */
  // const parent = 'abc123'
  /**
   *  Required. The phrase matcher resource to create.
   */
  // const phraseMatcher = ''

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} =
    require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function createPhraseMatcher() {
    // Construct request
    const request = {
      parent,
      phraseMatcher,
    };

    // Run request
    const response = await contactcenterinsightsClient.createPhraseMatcher(
      request
    );
    console.log(response);
  }

  createPhraseMatcher();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_CreatePhraseMatcher_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

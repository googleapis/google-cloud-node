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

function main(issue) {
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_UpdateIssue_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The new values for the issue.
   */
  // const issue = {}
  /**
   *  The list of fields to be updated.
   */
  // const updateMask = {}

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} =
    require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function callUpdateIssue() {
    // Construct request
    const request = {
      issue,
    };

    // Run request
    const response = await contactcenterinsightsClient.updateIssue(request);
    console.log(response);
  }

  callUpdateIssue();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_UpdateIssue_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

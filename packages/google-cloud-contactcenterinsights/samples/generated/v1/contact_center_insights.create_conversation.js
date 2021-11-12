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

function main(parent, conversation) {
  // [START contactcenterinsights_v1_generated_ContactCenterInsights_CreateConversation_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the conversation.
   */
  // const parent = 'abc123'
  /**
   *  Required. The conversation resource to create.
   */
  // const conversation = {}
  /**
   *  A unique ID for the new conversation. This ID will become the final
   *  component of the conversation's resource name. If no ID is specified, a
   *  server-generated ID will be used.
   *  This value should be 4-32 characters and must match the regular
   *  expression /^[a-z0-9-]{4,32}$/. Valid characters are /[a-z][0-9]-/
   */
  // const conversationId = 'abc123'

  // Imports the Contactcenterinsights library
  const {ContactCenterInsightsClient} =
    require('@google-cloud/contact-center-insights').v1;

  // Instantiates a client
  const contactcenterinsightsClient = new ContactCenterInsightsClient();

  async function callCreateConversation() {
    // Construct request
    const request = {
      parent,
      conversation,
    };

    // Run request
    const response = await contactcenterinsightsClient.createConversation(
      request
    );
    console.log(response);
  }

  callCreateConversation();
  // [END contactcenterinsights_v1_generated_ContactCenterInsights_CreateConversation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

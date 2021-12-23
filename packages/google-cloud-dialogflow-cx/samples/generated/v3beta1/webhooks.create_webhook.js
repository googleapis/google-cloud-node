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

function main(parent, webhook) {
  // [START dialogflow_v3beta1_generated_Webhooks_CreateWebhook_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to create a webhook for.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The webhook to create.
   */
  // const webhook = {}

  // Imports the Cx library
  const {WebhooksClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new WebhooksClient();

  async function callCreateWebhook() {
    // Construct request
    const request = {
      parent,
      webhook,
    };

    // Run request
    const response = await cxClient.createWebhook(request);
    console.log(response);
  }

  callCreateWebhook();
  // [END dialogflow_v3beta1_generated_Webhooks_CreateWebhook_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

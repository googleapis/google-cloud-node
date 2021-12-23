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

function main(name) {
  // [START dialogflow_v3_generated_Webhooks_DeleteWebhook_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the webhook to delete.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/webhooks/<Webhook ID>`.
   */
  // const name = 'abc123'
  /**
   *  This field has no effect for webhook not being used.
   *  For webhooks that are used by pages/flows/transition route groups:
   *  *  If `force` is set to false, an error will be returned with message
   *     indicating the referenced resources.
   *  *  If `force` is set to true, Dialogflow will remove the webhook, as well
   *     as any references to the webhook (i.e. Webhook google.cloud.dialogflow.cx.v3.Fulfillment.webhook 
   *     and tag google.cloud.dialogflow.cx.v3.Fulfillment.tag in fulfillments that point to this webhook
   *     will be removed).
   */
  // const force = true

  // Imports the Cx library
  const {WebhooksClient} = require('@google-cloud/dialogflow-cx').v3;

  // Instantiates a client
  const cxClient = new WebhooksClient();

  async function callDeleteWebhook() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await cxClient.deleteWebhook(request);
    console.log(response);
  }

  callDeleteWebhook();
  // [END dialogflow_v3_generated_Webhooks_DeleteWebhook_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

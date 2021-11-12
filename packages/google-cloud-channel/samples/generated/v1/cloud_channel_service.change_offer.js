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

function main(name, offer) {
  // [START cloudchannel_v1_generated_CloudChannelService_ChangeOffer_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the entitlement to update.
   *  Name uses the format:
   *  accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
   */
  // const name = 'abc123'
  /**
   *  Required. New Offer.
   *  Format: accounts/{account_id}/offers/{offer_id}.
   */
  // const offer = 'abc123'
  /**
   *  Optional. Parameters needed to purchase the Offer. To view the available Parameters
   *  refer to the Offer.parameter_definitions google.cloud.channel.v1.Offer.parameter_definitions  from the desired offer.
   */
  // const parameters = 1234
  /**
   *  Optional. Purchase order id provided by the reseller.
   */
  // const purchaseOrderId = 'abc123'
  /**
   *  Optional. You can specify an optional unique request ID, and if you need to retry
   *  your request, the server will know to ignore the request if it's complete.
   *  For example, you make an initial request and the request times out. If you
   *  make the request again with the same request ID, the server can check if
   *  it received the original operation with the same request ID. If it did, it
   *  will ignore the second request.
   *  The request ID must be a valid UUID (https://tools.ietf.org/html/rfc4122)
   *  with the exception that zero UUID is not supported
   *  (`00000000-0000-0000-0000-000000000000`).
   */
  // const requestId = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callChangeOffer() {
    // Construct request
    const request = {
      name,
      offer,
    };

    // Run request
    const [operation] = await channelClient.changeOffer(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callChangeOffer();
  // [END cloudchannel_v1_generated_CloudChannelService_ChangeOffer_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

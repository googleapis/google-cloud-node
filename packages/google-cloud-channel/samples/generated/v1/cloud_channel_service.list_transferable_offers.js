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

function main(parent, sku) {
  // [START cloudchannel_v1_generated_CloudChannelService_ListTransferableOffers_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Customer's Cloud Identity ID
   */
  // const cloudIdentityId = 'abc123'
  /**
   *  A reseller should create a customer and use the resource name of
   *  that customer here.
   */
  // const customerName = 'abc123'
  /**
   *  Required. The resource name of the reseller's account.
   */
  // const parent = 'abc123'
  /**
   *  Requested page size. Server might return fewer results than requested.
   *  If unspecified, returns at most 100 offers.
   *  The maximum value is 1000; the server will coerce values above 1000.
   */
  // const pageSize = 1234
  /**
   *  A token for a page of results other than the first page.
   *  Obtained using
   *  ListTransferableOffersResponse.next_page_token google.cloud.channel.v1.ListTransferableOffersResponse.next_page_token  of the previous
   *  CloudChannelService.ListTransferableOffers google.cloud.channel.v1.CloudChannelService.ListTransferableOffers  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Required. The SKU to look up Offers for.
   */
  // const sku = 'abc123'
  /**
   *  The BCP-47 language code. For example, "en-US". The
   *  response will localize in the corresponding language code, if specified.
   *  The default value is "en-US".
   */
  // const languageCode = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callListTransferableOffers() {
    // Construct request
    const request = {
      parent,
      sku,
    };

    // Run request
    const iterable = await channelClient.listTransferableOffersAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTransferableOffers();
  // [END cloudchannel_v1_generated_CloudChannelService_ListTransferableOffers_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

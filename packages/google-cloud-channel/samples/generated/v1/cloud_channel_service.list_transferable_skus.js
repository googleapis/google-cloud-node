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
  // [START cloudchannel_v1_generated_CloudChannelService_ListTransferableSkus_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Customer's Cloud Identity ID
   */
  // const cloudIdentityId = 'abc123'
  /**
   *  A reseller is required to create a customer and use the resource name of
   *  the created customer here.
   *  Customer_name uses the format:
   *  accounts/{account_id}/customers/{customer_id}
   */
  // const customerName = 'abc123'
  /**
   *  Required. The reseller account's resource name.
   *  Parent uses the format: accounts/{account_id}
   */
  // const parent = 'abc123'
  /**
   *  The requested page size. Server might return fewer results than requested.
   *  If unspecified, returns at most 100 SKUs.
   *  The maximum value is 1000; the server will coerce values above 1000.
   *  Optional.
   */
  // const pageSize = 1234
  /**
   *  A token for a page of results other than the first page.
   *  Obtained using
   *  ListTransferableSkusResponse.next_page_token google.cloud.channel.v1.ListTransferableSkusResponse.next_page_token  of the previous
   *  CloudChannelService.ListTransferableSkus google.cloud.channel.v1.CloudChannelService.ListTransferableSkus  call.
   *  Optional.
   */
  // const pageToken = 'abc123'
  /**
   *  The super admin of the resold customer generates this token to
   *  authorize a reseller to access their Cloud Identity and purchase
   *  entitlements on their behalf. You can omit this token after authorization.
   *  See https://support.google.com/a/answer/7643790 for more details.
   */
  // const authToken = 'abc123'
  /**
   *  The BCP-47 language code. For example, "en-US". The
   *  response will localize in the corresponding language code, if specified.
   *  The default value is "en-US".
   *  Optional.
   */
  // const languageCode = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callListTransferableSkus() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await channelClient.listTransferableSkusAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListTransferableSkus();
  // [END cloudchannel_v1_generated_CloudChannelService_ListTransferableSkus_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

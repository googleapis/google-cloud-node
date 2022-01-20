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

function main(parent, account) {
  // [START cloudchannel_v1_generated_CloudChannelService_ListSkus_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Product to list SKUs for.
   *  Parent uses the format: products/{product_id}.
   *  Supports products/- to retrieve SKUs for all products.
   */
  // const parent = 'abc123'
  /**
   *  Required. Resource name of the reseller.
   *  Format: accounts/{account_id}.
   */
  // const account = 'abc123'
  /**
   *  Optional. Requested page size. Server might return fewer results than requested.
   *  If unspecified, returns at most 100 SKUs.
   *  The maximum value is 1000; the server will coerce values above 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token for a page of results other than the first page.
   *  Optional.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The BCP-47 language code. For example, "en-US". The
   *  response will localize in the corresponding language code, if specified.
   *  The default value is "en-US".
   */
  // const languageCode = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callListSkus() {
    // Construct request
    const request = {
      parent,
      account,
    };

    // Run request
    const iterable = await channelClient.listSkusAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSkus();
  // [END cloudchannel_v1_generated_CloudChannelService_ListSkus_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

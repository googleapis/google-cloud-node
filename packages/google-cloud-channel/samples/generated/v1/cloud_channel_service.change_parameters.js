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

function main(name, parameters) {
  // [START cloudchannel_v1_generated_CloudChannelService_ChangeParameters_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entitlement to update.
   *  Name uses the format:
   *  accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
   */
  // const name = 'abc123'
  /**
   *  Required. Entitlement parameters to update. You can only change editable parameters.
   */
  // const parameters = 1234
  /**
   *  Optional. You can specify an optional unique request ID, and if you need to retry
   *  your request, the server will know to ignore the request if it's complete.
   *  For example, you make an initial request and the request times out. If you
   *  make the request again with the same request ID, the server can check if
   *  it received the original operation with the same request ID. If it did, it
   *  will ignore the second request.
   *  The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122)
   *  with the exception that zero UUID is not supported
   *  (`00000000-0000-0000-0000-000000000000`).
   */
  // const requestId = 'abc123'
  /**
   *  Optional. Purchase order ID provided by the reseller.
   */
  // const purchaseOrderId = 'abc123'

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function changeParameters() {
    // Construct request
    const request = {
      name,
      parameters,
    };

    // Run request
    const [operation] = await channelClient.changeParameters(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  changeParameters();
  // [END cloudchannel_v1_generated_CloudChannelService_ChangeParameters_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

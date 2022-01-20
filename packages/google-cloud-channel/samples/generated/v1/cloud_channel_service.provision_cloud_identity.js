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

function main(customer) {
  // [START cloudchannel_v1_generated_CloudChannelService_ProvisionCloudIdentity_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the customer.
   *  Format: accounts/{account_id}/customers/{customer_id}
   */
  // const customer = 'abc123'
  /**
   *  CloudIdentity-specific customer information.
   */
  // const cloudIdentityInfo = {}
  /**
   *  Admin user information.
   */
  // const user = {}
  /**
   *  Validate the request and preview the review, but do not post it.
   */
  // const validateOnly = true

  // Imports the Channel library
  const {CloudChannelServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelServiceClient();

  async function callProvisionCloudIdentity() {
    // Construct request
    const request = {
      customer,
    };

    // Run request
    const [operation] = await channelClient.provisionCloudIdentity(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callProvisionCloudIdentity();
  // [END cloudchannel_v1_generated_CloudChannelService_ProvisionCloudIdentity_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START cloudbilling_v1_generated_CloudBilling_GetBillingAccount_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the billing account to retrieve. For example,
   *  `billingAccounts/012345-567890-ABCDEF`.
   */
  // const name = 'abc123'

  // Imports the Billing library
  const {CloudBillingClient} = require('@google-cloud/billing').v1;

  // Instantiates a client
  const billingClient = new CloudBillingClient();

  async function callGetBillingAccount() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await billingClient.getBillingAccount(request);
    console.log(response);
  }

  callGetBillingAccount();
  // [END cloudbilling_v1_generated_CloudBilling_GetBillingAccount_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

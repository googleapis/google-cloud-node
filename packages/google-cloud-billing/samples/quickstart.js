// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function quickstart(
  name = 'my-project' // Project name to list billing accounts for.
) {
  // [START billing_quickstart]
  // Imports the Google Cloud client library
  const {CloudBillingClient} = require('@google-cloud/billing');

  // Creates a client
  const client = new CloudBillingClient();

  // name = 'my-project' // Project name to list billing accounts for.

  async function listBillingAccounts() {
    const [accounts] = await client.listBillingAccounts({
      name,
    });
    console.info(`found ${accounts.length} billing accounts:`);
    for (const account of accounts) {
      console.info(`${account.displayName}:`);
      console.info(`\topen: ${account.open}`);
      console.info(`\tparentBillingAccount: ${account.masterBillingAccount}`);
    }
  }
  listBillingAccounts();
  // [END billing_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);

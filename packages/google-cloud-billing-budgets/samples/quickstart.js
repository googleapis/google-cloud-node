// Copyright 2019 Google LLC
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

async function main(billingAccount = 'billingAccounts/000000-000000-000000') {
  // [START billingbudgets_quickstart]

  // const billingAccount = 'billingAccounts/000000-000000-000000'

  // Imports the Google Cloud client library
  const {BudgetServiceClient} = require('@google-cloud/billing-budgets');

  // Creates a client
  const budget = new BudgetServiceClient();

  async function quickstart() {
    // List budgets for a billing account
    const [result] = await budget.listBudgets({
      parent: billingAccount,
    });
    console.info(result);
  }

  quickstart();
  // [END billingbudgets_quickstart]
}

const args = process.argv.slice(2);
main(...args).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});

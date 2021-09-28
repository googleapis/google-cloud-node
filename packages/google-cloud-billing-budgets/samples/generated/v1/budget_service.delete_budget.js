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
  // [START billingbudgets_v1_generated_BudgetService_DeleteBudget_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the budget to delete. Values are of the form
   *  `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
   */
  // const name = 'abc123'

  // Imports the Budgets library
  const {BudgetServiceClient} = require('@google-cloud/billing-budgets').v1;

  // Instantiates a client
  const budgetsClient = new BudgetServiceClient();

  async function deleteBudget() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await budgetsClient.deleteBudget(request);
    console.log(response);
  }

  deleteBudget();
  // [END billingbudgets_v1_generated_BudgetService_DeleteBudget_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

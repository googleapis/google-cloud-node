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

function main(budget) {
  // [START billingbudgets_v1beta1_generated_BudgetService_UpdateBudget_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated budget object.
   *  The budget to update is specified by the budget name in the budget.
   */
  // const budget = {}
  /**
   *  Optional. Indicates which fields in the provided budget to update.
   *  Read-only fields (such as `name`) cannot be changed. If this is not
   *  provided, then only fields with non-default values from the request are
   *  updated. See
   *  https://developers.google.com/protocol-buffers/docs/proto3#default for more
   *  details about default values.
   */
  // const updateMask = {}

  // Imports the Budgets library
  const {BudgetServiceClient} = require('@google-cloud/billing-budgets').v1beta1;

  // Instantiates a client
  const budgetsClient = new BudgetServiceClient();

  async function callUpdateBudget() {
    // Construct request
    const request = {
      budget,
    };

    // Run request
    const response = await budgetsClient.updateBudget(request);
    console.log(response);
  }

  callUpdateBudget();
  // [END billingbudgets_v1beta1_generated_BudgetService_UpdateBudget_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

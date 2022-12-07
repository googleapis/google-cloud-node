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

const {assert} = require('chai');
const {BudgetServiceClient} = require('../');
const budget = new BudgetServiceClient();

describe('Integration Tests', () => {
  it('should try to list billing account', async () => {
    try {
      await budget.listBudgets({
        parent: 'billingAccounts/000000-000000-000000',
      });
    } catch (err) {
      assert.include(err.message, 'PERMISSION_DENIED');
    }
  });
});

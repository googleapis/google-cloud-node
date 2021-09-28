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

function main(parent, requests) {
  // [START area120tables_v1alpha1_generated_TablesService_BatchUpdateRows_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent table shared by all rows being updated.
   *  Format: tables/{table}
   */
  // const parent = 'abc123'
  /**
   *  Required. The request messages specifying the rows to update.
   *  A maximum of 500 rows can be modified in a single batch.
   */
  // const requests = 1234

  // Imports the Tables library
  const {TablesServiceClient} = require('@google/area120-tables').v1alpha1;

  // Instantiates a client
  const tablesClient = new TablesServiceClient();

  async function batchUpdateRows() {
    // Construct request
    const request = {
      parent,
      requests,
    };

    // Run request
    const response = await tablesClient.batchUpdateRows(request);
    console.log(response);
  }

  batchUpdateRows();
  // [END area120tables_v1alpha1_generated_TablesService_BatchUpdateRows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

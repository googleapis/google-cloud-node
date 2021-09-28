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

function main(parent, row) {
  // [START area120tables_v1alpha1_generated_TablesService_CreateRow_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent table where this row will be created.
   *  Format: tables/{table}
   */
  // const parent = 'abc123'
  /**
   *  Required. The row to create.
   */
  // const row = ''
  /**
   *  Optional. Column key to use for values in the row.
   *  Defaults to user entered name.
   */
  // const view = ''

  // Imports the Tables library
  const {TablesServiceClient} = require('@google/area120-tables').v1alpha1;

  // Instantiates a client
  const tablesClient = new TablesServiceClient();

  async function createRow() {
    // Construct request
    const request = {
      parent,
      row,
    };

    // Run request
    const response = await tablesClient.createRow(request);
    console.log(response);
  }

  createRow();
  // [END area120tables_v1alpha1_generated_TablesService_CreateRow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

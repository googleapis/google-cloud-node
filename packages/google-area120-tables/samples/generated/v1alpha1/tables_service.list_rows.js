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

function main(parent) {
  // [START area120tables_v1alpha1_generated_TablesService_ListRows_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent table.
   *  Format: tables/{table}
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of rows to return. The service may return fewer than
   *  this value.
   *  If unspecified, at most 50 rows are returned. The maximum value is 1,000;
   *  values above 1,000 are coerced to 1,000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListRows` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListRows` must match
   *  the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Column key to use for values in the row.
   *  Defaults to user entered name.
   */
  // const view = ''
  /**
   *  Optional. Raw text query to search for in rows of the table.
   *  Special characters must be escaped. Logical operators and field specific
   *  filtering not supported.
   */
  // const filter = 'abc123'

  // Imports the Tables library
  const {TablesServiceClient} = require('@google/area120-tables').v1alpha1;

  // Instantiates a client
  const tablesClient = new TablesServiceClient();

  async function listRows() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await tablesClient.listRowsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listRows();
  // [END area120tables_v1alpha1_generated_TablesService_ListRows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main() {
  // [START area120tables_v1alpha1_generated_TablesService_ListWorkspaces_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The maximum number of workspaces to return. The service may return fewer
   *  than this value.
   *  If unspecified, at most 10 workspaces are returned. The maximum value is
   *  25; values above 25 are coerced to 25.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListWorkspaces` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListWorkspaces` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Tables library
  const {TablesServiceClient} = require('@google/area120-tables').v1alpha1;

  // Instantiates a client
  const tablesClient = new TablesServiceClient();

  async function callListWorkspaces() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await tablesClient.listWorkspacesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListWorkspaces();
  // [END area120tables_v1alpha1_generated_TablesService_ListWorkspaces_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

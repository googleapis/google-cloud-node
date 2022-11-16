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
  // [START accesscontextmanager_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name for the container to list AccessPolicy instances
   *  from.
   *  Format:
   *  `organizations/{org_id}`
   */
  // const parent = 'abc123'
  /**
   *  Number of AccessPolicy instances to include in the list. Default 100.
   */
  // const pageSize = 1234
  /**
   *  Next page token for the next batch of AccessPolicy instances. Defaults to
   *  the first page of results.
   */
  // const pageToken = 'abc123'

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} =
    require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function listAccessPolicies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await accesscontextmanagerClient.listAccessPoliciesAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listAccessPolicies();
  // [END accesscontextmanager_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

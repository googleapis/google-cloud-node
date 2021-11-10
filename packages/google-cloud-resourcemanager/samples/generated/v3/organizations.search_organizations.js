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
  // [START cloudresourcemanager_v3_generated_Organizations_SearchOrganizations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. The maximum number of organizations to return in the response.
   *  If unspecified, server picks an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A pagination token returned from a previous call to `SearchOrganizations`
   *  that indicates from where listing should continue.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. An optional query string used to filter the Organizations to return in
   *  the response. Query rules are case-insensitive.
   *  ```
   *  | Field            | Description                                |
   *  |------------------|--------------------------------------------|
   *  | directoryCustomerId, owner.directoryCustomerId | Filters by directory
   *  customer id. |
   *  | domain           | Filters by domain.                         |
   *  ```
   *  Organizations may be queried by `directoryCustomerId` or by
   *  `domain`, where the domain is a G Suite domain, for example:
   *  * Query `directorycustomerid:123456789` returns Organization
   *  resources with `owner.directory_customer_id` equal to `123456789`.
   *  * Query `domain:google.com` returns Organization resources corresponding
   *  to the domain `google.com`.
   */
  // const query = 'abc123'

  // Imports the Resourcemanager library
  const {OrganizationsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new OrganizationsClient();

  async function callSearchOrganizations() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await resourcemanagerClient.searchOrganizationsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callSearchOrganizations();
  // [END cloudresourcemanager_v3_generated_Organizations_SearchOrganizations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

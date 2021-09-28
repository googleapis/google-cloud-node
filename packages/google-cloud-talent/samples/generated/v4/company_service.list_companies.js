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
  // [START jobs_v4_generated_CompanyService_ListCompanies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the tenant under which the company is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  The starting indicator from which to return results.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of companies to be returned, at most 100.
   *  Default is 100 if a non-positive number is provided.
   */
  // const pageSize = 1234
  /**
   *  Set to true if the companies requested must have open jobs.
   *  Defaults to false.
   *  If true, at most [page_size][google.cloud.talent.v4.ListCompaniesRequest.page_size] of companies are fetched, among which
   *  only those with open jobs are returned.
   */
  // const requireOpenJobs = true

  // Imports the Talent library
  const {CompanyServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new CompanyServiceClient();

  async function listCompanies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await talentClient.listCompaniesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listCompanies();
  // [END jobs_v4_generated_CompanyService_ListCompanies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

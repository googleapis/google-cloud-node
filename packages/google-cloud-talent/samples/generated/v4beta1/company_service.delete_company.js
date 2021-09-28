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
  // [START jobs_v4beta1_generated_CompanyService_DeleteCompany_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the company to be deleted.
   *  The format is
   *  "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *  example, "projects/foo/tenants/bar/companies/baz".
   *  If tenant id is unspecified, the default tenant is used, for
   *  example, "projects/foo/companies/bar".
   */
  // const name = 'abc123'

  // Imports the Talent library
  const {CompanyServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new CompanyServiceClient();

  async function deleteCompany() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await talentClient.deleteCompany(request);
    console.log(response);
  }

  deleteCompany();
  // [END jobs_v4beta1_generated_CompanyService_DeleteCompany_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

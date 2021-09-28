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

function main(company) {
  // [START jobs_v4beta1_generated_CompanyService_UpdateCompany_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The company resource to replace the current resource in the system.
   */
  // const company = ''
  /**
   *  Strongly recommended for the best service experience.
   *  If [update_mask][google.cloud.talent.v4beta1.UpdateCompanyRequest.update_mask] is provided, only the specified fields in
   *  [company][google.cloud.talent.v4beta1.UpdateCompanyRequest.company] are updated. Otherwise all the fields are updated.
   *  A field mask to specify the company fields to be updated. Only
   *  top level fields of [Company][google.cloud.talent.v4beta1.Company] are supported.
   */
  // const updateMask = ''

  // Imports the Talent library
  const {CompanyServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new CompanyServiceClient();

  async function updateCompany() {
    // Construct request
    const request = {
      company,
    };

    // Run request
    const response = await talentClient.updateCompany(request);
    console.log(response);
  }

  updateCompany();
  // [END jobs_v4beta1_generated_CompanyService_UpdateCompany_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

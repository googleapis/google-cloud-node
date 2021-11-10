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

function main(tenant) {
  // [START jobs_v4_generated_TenantService_UpdateTenant_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The tenant resource to replace the current resource in the system.
   */
  // const tenant = {}
  /**
   *  Strongly recommended for the best service experience.
   *  If update_mask google.cloud.talent.v4.UpdateTenantRequest.update_mask  is provided, only the specified fields in
   *  tenant google.cloud.talent.v4.UpdateTenantRequest.tenant  are updated. Otherwise all the fields are updated.
   *  A field mask to specify the tenant fields to be updated. Only
   *  top level fields of Tenant google.cloud.talent.v4.Tenant  are supported.
   */
  // const updateMask = {}

  // Imports the Talent library
  const {TenantServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new TenantServiceClient();

  async function callUpdateTenant() {
    // Construct request
    const request = {
      tenant,
    };

    // Run request
    const response = await talentClient.updateTenant(request);
    console.log(response);
  }

  callUpdateTenant();
  // [END jobs_v4_generated_TenantService_UpdateTenant_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

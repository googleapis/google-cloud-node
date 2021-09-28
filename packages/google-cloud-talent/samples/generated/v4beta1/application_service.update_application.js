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

function main(application) {
  // [START jobs_v4beta1_generated_ApplicationService_UpdateApplication_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The application resource to replace the current resource in the system.
   */
  // const application = ''
  /**
   *  Strongly recommended for the best service experience.
   *  If [update_mask][google.cloud.talent.v4beta1.UpdateApplicationRequest.update_mask] is provided, only the specified fields in
   *  [application][google.cloud.talent.v4beta1.UpdateApplicationRequest.application] are updated. Otherwise all the fields are updated.
   *  A field mask to specify the application fields to be updated. Only
   *  top level fields of [Application][google.cloud.talent.v4beta1.Application] are supported.
   */
  // const updateMask = ''

  // Imports the Talent library
  const {ApplicationServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new ApplicationServiceClient();

  async function updateApplication() {
    // Construct request
    const request = {
      application,
    };

    // Run request
    const response = await talentClient.updateApplication(request);
    console.log(response);
  }

  updateApplication();
  // [END jobs_v4beta1_generated_ApplicationService_UpdateApplication_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, intendedMembership) {
  // [START gkehub_v1beta1_generated_GkeHubMembershipService_ValidateExclusivity_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent (project and location) where the Memberships will be created.
   *  Specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The YAML of the membership CR in the cluster. Empty if the membership
   *  CR does not exist.
   */
  // const crManifest = 'abc123'
  /**
   *  Required. The intended membership name under the `parent`. This method only does
   *  validation in anticipation of a CreateMembership call with the same name.
   */
  // const intendedMembership = 'abc123'

  // Imports the Gkehub library
  const {GkeHubMembershipServiceClient} =
    require('@google-cloud/gke-hub').v1beta1;

  // Instantiates a client
  const gkehubClient = new GkeHubMembershipServiceClient();

  async function callValidateExclusivity() {
    // Construct request
    const request = {
      parent,
      intendedMembership,
    };

    // Run request
    const response = await gkehubClient.validateExclusivity(request);
    console.log(response);
  }

  callValidateExclusivity();
  // [END gkehub_v1beta1_generated_GkeHubMembershipService_ValidateExclusivity_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
  // [START gkehub_v1beta1_generated_GkeHubMembershipService_GenerateExclusivityManifest_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Membership resource name in the format
   *  `projects/* /locations/* /memberships/*`.
   */
  // const name = 'abc123'
  /**
   *  Optional. The YAML manifest of the membership CRD retrieved by
   *  `kubectl get customresourcedefinitions membership`.
   *  Leave empty if the resource does not exist.
   */
  // const crdManifest = 'abc123'
  /**
   *  Optional. The YAML manifest of the membership CR retrieved by
   *  `kubectl get memberships membership`.
   *  Leave empty if the resource does not exist.
   */
  // const crManifest = 'abc123'

  // Imports the Gkehub library
  const {GkeHubMembershipServiceClient} = require('@google-cloud/gke-hub').v1beta1;

  // Instantiates a client
  const gkehubClient = new GkeHubMembershipServiceClient();

  async function callGenerateExclusivityManifest() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await gkehubClient.generateExclusivityManifest(request);
    console.log(response);
  }

  callGenerateExclusivityManifest();
  // [END gkehub_v1beta1_generated_GkeHubMembershipService_GenerateExclusivityManifest_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

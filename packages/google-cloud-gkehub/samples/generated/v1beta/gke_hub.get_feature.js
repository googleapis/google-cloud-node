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
  // [START gkehub_v1beta_generated_GkeHub_GetFeature_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The Feature resource name in the format
   *  `projects/* /locations/* /features/*`
   */
  // const name = 'abc123'

  // Imports the Gkehub library
  const {GkeHubClient} = require('@google-cloud/gke-hub').v1beta;

  // Instantiates a client
  const gkehubClient = new GkeHubClient();

  async function callGetFeature() {
    // Construct request
    const request = {};

    // Run request
    const response = await gkehubClient.getFeature(request);
    console.log(response);
  }

  callGetFeature();
  // [END gkehub_v1beta_generated_GkeHub_GetFeature_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

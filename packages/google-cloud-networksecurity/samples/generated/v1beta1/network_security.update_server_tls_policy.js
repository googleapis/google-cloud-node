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

function main(serverTlsPolicy) {
  // [START networksecurity_v1beta1_generated_NetworkSecurity_UpdateServerTlsPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. Field mask is used to specify the fields to be overwritten in the
   *  ServerTlsPolicy resource by the update.  The fields
   *  specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the
   *  mask. If the user does not provide a mask then all fields will be
   *  overwritten.
   */
  // const updateMask = {}
  /**
   *  Required. Updated ServerTlsPolicy resource.
   */
  // const serverTlsPolicy = {}

  // Imports the Networksecurity library
  const {NetworkSecurityClient} =
    require('@google-cloud/network-security').v1beta1;

  // Instantiates a client
  const networksecurityClient = new NetworkSecurityClient();

  async function callUpdateServerTlsPolicy() {
    // Construct request
    const request = {
      serverTlsPolicy,
    };

    // Run request
    const [operation] = await networksecurityClient.updateServerTlsPolicy(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateServerTlsPolicy();
  // [END networksecurity_v1beta1_generated_NetworkSecurity_UpdateServerTlsPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

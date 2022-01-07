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
  // [START networksecurity_v1beta1_generated_NetworkSecurity_DeleteServerTlsPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A name of the ServerTlsPolicy to delete. Must be in
   *  the format `projects/* /locations/{location}/serverTlsPolicies/*`.
   */
  // const name = 'abc123'

  // Imports the Networksecurity library
  const {NetworkSecurityClient} = require('@google-cloud/network-security').v1beta1;

  // Instantiates a client
  const networksecurityClient = new NetworkSecurityClient();

  async function callDeleteServerTlsPolicy() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await networksecurityClient.deleteServerTlsPolicy(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteServerTlsPolicy();
  // [END networksecurity_v1beta1_generated_NetworkSecurity_DeleteServerTlsPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

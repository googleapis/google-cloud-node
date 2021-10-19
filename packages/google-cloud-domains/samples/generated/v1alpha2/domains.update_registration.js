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

function main(updateMask) {
  // [START domains_v1alpha2_generated_Domains_UpdateRegistration_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Fields of the `Registration` to update.
   */
  // const registration = ''
  /**
   *  Required. The field mask describing which fields to update as a comma-separated list.
   *  For example, if only the labels are being updated, the `update_mask` is
   *  `"labels"`.
   */
  // const updateMask = ''

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1alpha2;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function updateRegistration() {
    // Construct request
    const request = {
      updateMask,
    };

    // Run request
    const [operation] = await domainsClient.updateRegistration(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateRegistration();
  // [END domains_v1alpha2_generated_Domains_UpdateRegistration_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, registration, yearlyPrice) {
  // [START domains_v1alpha2_generated_Domains_RegisterDomain_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the `Registration`. Must be in the
   *  format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The complete `Registration` resource to be created.
   */
  // const registration = ''
  /**
   *  The list of domain notices that you acknowledge. Call
   *  `RetrieveRegisterParameters` to see the notices that need acknowledgement.
   */
  // const domainNotices = 1234
  /**
   *  The list of contact notices that the caller acknowledges. The notices
   *  needed here depend on the values specified in
   *  `registration.contact_settings`.
   */
  // const contactNotices = 1234
  /**
   *  Required. Yearly price to register or renew the domain.
   *  The value that should be put here can be obtained from
   *  RetrieveRegisterParameters or SearchDomains calls.
   */
  // const yearlyPrice = ''
  /**
   *  When true, only validation is performed, without actually registering
   *  the domain. Follows:
   *  https://cloud.google.com/apis/design/design_patterns#request_validation
   */
  // const validateOnly = true

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1alpha2;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function registerDomain() {
    // Construct request
    const request = {
      parent,
      registration,
      yearlyPrice,
    };

    // Run request
    const [operation] = await domainsClient.registerDomain(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  registerDomain();
  // [END domains_v1alpha2_generated_Domains_RegisterDomain_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

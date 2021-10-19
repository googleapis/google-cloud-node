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

function main(registration, updateMask) {
  // [START domains_v1alpha2_generated_Domains_ConfigureContactSettings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Registration` whose contact settings are being updated,
   *  in the format `projects/* /locations/* /registrations/*`.
   */
  // const registration = 'abc123'
  /**
   *  Fields of the `ContactSettings` to update.
   */
  // const contactSettings = ''
  /**
   *  Required. The field mask describing which fields to update as a comma-separated list.
   *  For example, if only the registrant contact is being updated, the
   *  `update_mask` is `"registrant_contact"`.
   */
  // const updateMask = ''
  /**
   *  The list of contact notices that the caller acknowledges. The notices
   *  needed here depend on the values specified in `contact_settings`.
   */
  // const contactNotices = 1234
  /**
   *  Validate the request without actually updating the contact settings.
   */
  // const validateOnly = true

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1alpha2;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function configureContactSettings() {
    // Construct request
    const request = {
      registration,
      updateMask,
    };

    // Run request
    const [operation] = await domainsClient.configureContactSettings(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  configureContactSettings();
  // [END domains_v1alpha2_generated_Domains_ConfigureContactSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

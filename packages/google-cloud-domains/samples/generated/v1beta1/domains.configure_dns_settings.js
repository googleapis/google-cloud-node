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
  // [START domains_v1beta1_generated_Domains_ConfigureDnsSettings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Registration` whose DNS settings are being updated,
   *  in the format `projects/* /locations/* /registrations/*`.
   */
  // const registration = 'abc123'
  /**
   *  Fields of the `DnsSettings` to update.
   */
  // const dnsSettings = {}
  /**
   *  Required. The field mask describing which fields to update as a comma-separated list.
   *  For example, if only the name servers are being updated for an existing
   *  Custom DNS configuration, the `update_mask` is
   *  `"custom_dns.name_servers"`.
   *  When changing the DNS provider from one type to another, pass the new
   *  provider's field name as part of the field mask. For example, when changing
   *  from a Google Domains DNS configuration to a Custom DNS configuration, the
   *  `update_mask` is `"custom_dns"`. //
   */
  // const updateMask = {}
  /**
   *  Validate the request without actually updating the DNS settings.
   */
  // const validateOnly = true

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1beta1;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function callConfigureDnsSettings() {
    // Construct request
    const request = {
      registration,
      updateMask,
    };

    // Run request
    const [operation] = await domainsClient.configureDnsSettings(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callConfigureDnsSettings();
  // [END domains_v1beta1_generated_Domains_ConfigureDnsSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

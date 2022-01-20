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

function main(parent) {
  // [START domains_v1_generated_Domains_ListRegistrations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location from which to list `Registration`s, specified in
   *  the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of results to return.
   */
  // const pageSize = 1234
  /**
   *  When set to the `next_page_token` from a prior response, provides the next
   *  page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter expression to restrict the `Registration`s returned.
   *  The expression must specify the field name, a comparison operator, and the
   *  value that you want to use for filtering. The value must be a string, a
   *  number, a boolean, or an enum value. The comparison operator should be one
   *  of =, !=, >, <, >=, <=, or : for prefix or wildcard matches.
   *  For example, to filter to a specific domain name, use an expression like
   *  `domainName="example.com"`. You can also check for the existence of a
   *  field; for example, to find domains using custom DNS settings, use an
   *  expression like `dnsSettings.customDns:*`.
   *  You can also create compound filters by combining expressions with the
   *  `AND` and `OR` operators. For example, to find domains that are suspended
   *  or have specific issues flagged, use an expression like
   *  `(state=SUSPENDED) OR (issue:*)`.
   */
  // const filter = 'abc123'

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function callListRegistrations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await domainsClient.listRegistrationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListRegistrations();
  // [END domains_v1_generated_Domains_ListRegistrations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

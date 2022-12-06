// Copyright 2018 Google LLC
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

// sample-metadata:
//  usage: node quickstart.js [organization]

'use strict';

async function main(
  organization = 'YOUR_ORGANIZATION' // Your GCP organization
) {
  // [START securitycenter_quickstart]
  const sc = require('@google-cloud/security-center');

  // Create a client
  const client = new sc.SecurityCenterClient();

  async function quickstart() {
    // TODO(developer): choose the organization to use
    // const organization = 'your-organization';
    const [source] = await client.createSource({
      parent: client.organizationPath(organization),
      source: {},
    });
    // The newly created source.
    console.log('Source created.');
    console.log(source);
  }
  quickstart();
  // [END securitycenter_quickstart]
}

main(...process.argv.slice(2));

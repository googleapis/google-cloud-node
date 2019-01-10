/**
 * Copyright 2018, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START securitycenter_quickstart]
async function quickstart(
  organization = 'YOUR_ORGANIZATION' // Your GCP organization
) {
  const sc = require('@google-cloud/security-center');

  // Create a client
  const client = new sc.SecurityCenterClient();

  const formattedParent = client.organizationPath(organization);
  const reqSource = {};
  const request = {
    parent: formattedParent,
    source: reqSource,
  };

  const [source] = await client.createSource(request);
  // The newly created source.
  console.log('Source created.');
  console.log(source);
}
// [END securitycenter_quickstart]

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);

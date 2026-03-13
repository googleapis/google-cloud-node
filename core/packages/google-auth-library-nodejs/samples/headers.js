// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Import the GoogleAuth library, and create a new GoogleAuth client.
 */
const {GoogleAuth} = require('google-auth-library');
const fetch = require('node-fetch');

/**
 * This example shows obtaining authenticated HTTP request headers, and using
 * those headers to construct your own authenticated request. This example uses
 * node-fetch, but you could use any HTTP client you like.
 */
async function main() {
  // create auth instance with custom scopes.
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  });
  const projectId = await auth.getProjectId();
  const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;

  // obtain an authenticated client
  const client = await auth.getClient();
  // Use the client to get authenticated request headers
  const headers = await client.getRequestHeaders();
  console.log('Headers:');
  console.log(headers);

  // Attach those headers to another request, and use it to call a Google API
  const res = await fetch(url, {headers});
  const data = await res.json();
  console.log('DNS Info:');
  console.log(data);
}

main().catch(console.error);

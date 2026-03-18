// Copyright 2020 Google LLC
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

// sample-metadata:
//   title: ID Tokens for Identity-Aware Proxy (IAP)
//   description: Requests an IAP-protected resource with an ID Token.
//   usage: node idtokens-iap.js <url> <target-audience>

'use strict';

function main(
  url = 'https://some.iap.url',
  targetAudience = 'IAP_CLIENT_ID.apps.googleusercontent.com',
) {
  // [START iap_make_request]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const url = 'https://some.iap.url';
  // const targetAudience = 'IAP_CLIENT_ID.apps.googleusercontent.com';

  const {GoogleAuth} = require('google-auth-library');
  const auth = new GoogleAuth();

  async function request() {
    console.info(`request IAP ${url} with target audience ${targetAudience}`);
    const client = await auth.getIdTokenClient(targetAudience);
    const res = await client.fetch(url);
    console.info(res.data);
  }

  request().catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
  // [END iap_make_request]
}

const args = process.argv.slice(2);
main(...args);

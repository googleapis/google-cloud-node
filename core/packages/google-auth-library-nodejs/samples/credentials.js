// Copyright 2018 Google LLC
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

/**
 * This sample demonstrates passing a `credentials` object directly into the
 * `getClient` method.  This is useful if you're storing the fields required
 * in environment variables.  The original `client_email` and `private_key`
 * values are obtained from a service account credential file.
 */
async function main() {
  const clientEmail = process.env.CLIENT_EMAIL;
  const privateKey = process.env.PRIVATE_KEY;
  if (!clientEmail || !privateKey) {
    throw new Error(`
      The CLIENT_EMAIL and PRIVATE_KEY environment variables are required for
      this sample.
    `);
  }
  const auth = new GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: 'https://www.googleapis.com/auth/cloud-platform',
  });
  const client = await auth.getClient();
  const projectId = await auth.getProjectId();
  const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
  const res = await client.fetch(url);
  console.log('DNS Info:');
  console.log(res.data);
}

main().catch(console.error);

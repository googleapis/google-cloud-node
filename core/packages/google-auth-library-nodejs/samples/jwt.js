// Copyright 2017 Google LLC
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

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent. Usually, you aren't
 * going to directly instantiate a JWT instance.  Typically, this is acquired
 * by using the `auth.getClient()` method.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 **/

const {JWT} = require('google-auth-library');
const fs = require('fs');

async function main(
  // Full path to the service account credential
  keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS,
) {
  const keys = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
  const client = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`;
  const res = await client.fetch(url);
  console.log('DNS Info:');
  console.log(res.data);

  // After acquiring an access_token, you may want to check on the audience, expiration,
  // or original scopes requested.  You can do that with the `getTokenInfo` method.
  const tokenInfo = await client.getTokenInfo(client.credentials.access_token);
  console.log(tokenInfo);
}

const args = process.argv.slice(2);
main(...args).catch(console.error);

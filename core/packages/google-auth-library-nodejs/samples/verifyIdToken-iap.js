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
//   title: Verifying ID Tokens from Identity-Aware Proxy (IAP)
//   description: Verifying the signed token from the header of an IAP-protected resource.
//   usage: node verifyIdToken-iap.js <iap-jwt> [<project-number>] [<project-id>] [<backend-service-id>]

'use strict';

const {OAuth2Client} = require('google-auth-library');

/**
 * Verify the ID token from IAP
 * @see https://cloud.google.com/iap/docs/signed-headers-howto
 */
function main(
  iapJwt,
  projectNumber = '',
  projectId = '',
  backendServiceId = '',
) {
  // [START iap_validate_jwt]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const iapJwt = 'SOME_ID_TOKEN'; // JWT from the "x-goog-iap-jwt-assertion" header

  let expectedAudience = null;
  if (projectNumber && projectId) {
    // Expected Audience for App Engine.
    expectedAudience = `/projects/${projectNumber}/apps/${projectId}`;
  } else if (projectNumber && backendServiceId) {
    // Expected Audience for Compute Engine
    expectedAudience = `/projects/${projectNumber}/global/backendServices/${backendServiceId}`;
  }

  const oAuth2Client = new OAuth2Client();

  async function verify() {
    // Verify the id_token, and access the claims.
    const response = await oAuth2Client.getIapPublicKeys();
    const ticket = await oAuth2Client.verifySignedJwtWithCertsAsync(
      iapJwt,
      response.pubkeys,
      expectedAudience,
      ['https://cloud.google.com/iap'],
    );
    // Print out the info contained in the IAP ID token
    console.log(ticket);
  }

  verify().catch(console.error);

  // [END iap_validate_jwt]
  if (!expectedAudience) {
    console.log(
      'Audience not verified! Supply a projectNumber and projectID to verify',
    );
  }
}

const args = process.argv.slice(2);
main(...args);

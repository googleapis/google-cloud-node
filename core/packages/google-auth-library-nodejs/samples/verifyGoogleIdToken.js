// Copyright 2022 Google LLC
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

/**
 * Verifies the obtained Google id token. This is done at the receiving end of the OIDC endpoint.
 * The most common use case for verifying the ID token is when you are protecting
 * your own APIs with IAP. Google services already verify credentials as a platform,
 * so verifying ID tokens before making Google API calls is usually unnecessary.
 *
 * @param {string} idToken - The Google ID token to verify.
 *   and use IAM to narrow the permissions: https://cloud.google.com/docs/authentication#authorization_for_services
 * @param {string} expectedAudience - The service name for which the id token is requested. Service name refers to the
 *   logical identifier of an API service, such as "iap.googleapis.com".
 */
function main(idToken, expectedAudience) {
  // [START auth_cloud_verify_google_idtoken]
  /**
   * TODO(developer):
   *  1. Uncomment and replace these variables before running the sample.
   */
  // const idToken = 'id-token';
  // const targetAudience = 'pubsub.googleapis.com';

  const {OAuth2Client} = require('google-auth-library');

  async function verifyGoogleIdToken() {
    const oAuth2Client = new OAuth2Client();

    const result = await oAuth2Client.verifyIdToken({
      idToken,
      expectedAudience,
    });

    // Verify that the token contains subject and email claims.
    // Get the User id.
    if (result.payload['sub']) {
      console.log(`User id: ${result.payload['sub']}`);
    }

    // Optionally, if "includeEmail" was set in the token options, check if the
    // email was verified
    if (result.payload['email_verified']) {
      console.log(`Email verified: ${result.payload['email_verified']}`);
    }

    console.log('ID token verified.');
  }

  verifyGoogleIdToken();
  // [END auth_cloud_verify_google_idtoken]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));

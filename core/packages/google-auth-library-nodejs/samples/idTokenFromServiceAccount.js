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
 * Obtains the id token by providing the target audience using service account credentials.
 *
 * @param {string} jsonCredentialsPath - Path to the service account json credential file.
 *   and use IAM to narrow the permissions: https://cloud.google.com/docs/authentication#authorization_for_services
 * @param {string} targetAudience - The url or target audience to obtain the ID token for.
 */
function main(targetAudience, jsonCredentialsPath) {
  // [START auth_cloud_idtoken_service_account]
  /**
   * TODO(developer):
   *  1. Uncomment and replace these variables before running the sample.
   */
  // const jsonCredentialsPath = '/path/example';
  // const targetAudience = 'http://www.example.com';

  // Using service account keys introduces risk; they are long-lived, and can be used by anyone
  // that obtains the key. Proper rotation and storage reduce this risk but do not eliminate it.
  // For these reasons, you should consider an alternative approach that
  // does not use a service account key. Several alternatives to service account keys
  // are described here:
  // https://cloud.google.com/docs/authentication/external/set-up-adc

  const {GoogleAuth} = require('google-auth-library');
  const fs = require('fs');
  const credentials = JSON.parse(fs.readFileSync(jsonCredentialsPath, 'utf8'));

  async function getIdTokenFromServiceAccount() {
    const auth = new GoogleAuth({credentials});

    // Get an ID token client.
    // The client can be used to make authenticated requests or you can use the
    // provider to fetch an id token.
    const client = await auth.getIdTokenClient(targetAudience);
    await client.idTokenProvider.fetchIdToken(targetAudience);

    console.log('Generated ID token.');
  }

  getIdTokenFromServiceAccount();
  // [END auth_cloud_idtoken_service_account]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));

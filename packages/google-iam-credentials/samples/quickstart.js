// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(serviceAccount, scopes) {
  // [START nodejs_iam_credentials_quickstart]
  // Imports the Google Cloud client library

  const {IAMCredentialsClient} = require('@google-cloud/iam-credentials');

  // TODO(developer): replace with your prefered project values.
  // The service account must be granted the roles/iam.serviceAccountTokenCreator role
  // const serviceAccount = 'ACCOUNT_EMAIL_OR_UNIQUEID'
  // const scopes = 'my-scopes', e.g., 'https://www.googleapis.com/auth/iam'

  // Creates a client
  const client = new IAMCredentialsClient();

  async function generateAccessToken() {
    const [token] = await client.generateAccessToken({
      name: `projects/-/serviceAccounts/${serviceAccount}`,
      scope: [scopes],
    });
    console.info(token);
  }
  generateAccessToken();
  // [END nodejs_iam_credentials_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

// Copyright 2021 Google LLC
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

function main(name, payload) {
  // [START iamcredentials_v1_generated_IAMCredentials_SignBlob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the service account for which the credentials
   *  are requested, in the following format:
   *  `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *  character is required; replacing it with a project ID is invalid.
   */
  // const name = 'abc123'
  /**
   *  The sequence of service accounts in a delegation chain. Each service
   *  account must be granted the `roles/iam.serviceAccountTokenCreator` role
   *  on its next service account in the chain. The last service account in the
   *  chain must be granted the `roles/iam.serviceAccountTokenCreator` role
   *  on the service account that is specified in the `name` field of the
   *  request.
   *  The delegates must have the following format:
   *  `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
   *  character is required; replacing it with a project ID is invalid.
   */
  // const delegates = 'abc123'
  /**
   *  Required. The bytes to sign.
   */
  // const payload = 'Buffer.from('string')'

  // Imports the Credentials library
  const {IAMCredentialsClient} = require('@google-cloud/iam-credentials').v1;

  // Instantiates a client
  const credentialsClient = new IAMCredentialsClient();

  async function callSignBlob() {
    // Construct request
    const request = {
      name,
      payload,
    };

    // Run request
    const response = await credentialsClient.signBlob(request);
    console.log(response);
  }

  callSignBlob();
  // [END iamcredentials_v1_generated_IAMCredentials_SignBlob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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
 * Lists storage buckets by authenticating with ADC.
 */
function main() {
  // [START auth_cloud_explicit_adc]
  /**
   * TODO(developer):
   *  1. Set up ADC as described in https://cloud.google.com/docs/authentication/external/set-up-adc
   *  2. Make sure you have the necessary permission to list storage buckets "storage.buckets.list"
   */

  const {GoogleAuth} = require('google-auth-library');
  const {Storage} = require('@google-cloud/storage');

  async function authenticateExplicit() {
    const googleAuth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/cloud-platform',
    });

    // Construct the Google credentials object which obtains the default configuration from your
    // working environment.
    // googleAuth.getApplicationDefault() will give you ComputeEngineCredentials
    // if you are on a GCE (or other metadata server supported environments).
    const {credential, projectId} = await googleAuth.getApplicationDefault();
    // If you are authenticating to a Cloud API, you can let the library include the default scope,
    // https://www.googleapis.com/auth/cloud-platform, because IAM is used to provide fine-grained
    // permissions for Cloud.
    // If you need to provide a scope, specify it as follows:
    // const googleAuth = new GoogleAuth({ scopes: scope });
    // For more information on scopes to use,
    // see: https://developers.google.com/identity/protocols/oauth2/scopes

    const storageOptions = {
      projectId,
      authClient: credential,
    };

    // Construct the Storage client.
    const storage = new Storage(storageOptions);
    const [buckets] = await storage.getBuckets();
    console.log('Buckets:');

    for (const bucket of buckets) {
      console.log(`- ${bucket.name}`);
    }

    console.log('Listed all storage buckets.');
  }

  authenticateExplicit();
  // [END auth_cloud_explicit_adc]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));

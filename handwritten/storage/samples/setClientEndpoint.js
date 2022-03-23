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
 * This application demonstrates set a custom endpoint with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(apiEndpoint = 'https://storage.googleapis.com') {
  // [START storage_set_client_endpoint]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The custom endpoint to which requests should be made
  // const apiEndpoint = 'https://yourcustomendpoint.com';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    apiEndpoint: apiEndpoint,
    useAuthWithCustomEndpoint: true,
  });

  console.log(`Client initiated with endpoint: ${storage.apiEndpoint}.`);

  // [END storage_set_client_endpoint]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

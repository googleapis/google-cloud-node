// Copyright 2025 Google LLC
//
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
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(connection) {
  // [START cloudbuild_v2_generated_RepositoryManager_FetchLinkableRepositories_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Connection.
   *  Format: `projects/* /locations/* /connections/*`.
   */
  // const connection = 'abc123'
  /**
   *  Number of results to return in the list. Default to 20.
   */
  // const pageSize = 1234
  /**
   *  Page start.
   */
  // const pageToken = 'abc123'

  // Imports the Cloudbuild library
  const {RepositoryManagerClient} = require('@google-cloud/cloudbuild').v2;

  // Instantiates a client
  const cloudbuildClient = new RepositoryManagerClient();

  async function callFetchLinkableRepositories() {
    // Construct request
    const request = {
      connection,
    };

    // Run request
    const iterable = cloudbuildClient.fetchLinkableRepositoriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callFetchLinkableRepositories();
  // [END cloudbuild_v2_generated_RepositoryManager_FetchLinkableRepositories_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

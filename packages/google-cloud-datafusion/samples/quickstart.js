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

function main(parent) {
  // [START datafusion_v1_generated_DataFusion_ListAvailableVersions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location for which to retrieve instance
   *  information in the format projects/{project}/locations/{location}.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value to use if there are additional
   *  results to retrieve for this list request.
   */
  // const pageToken = 'abc123'
  /**
   *  Whether or not to return the latest patch of every available minor version.
   *  If true, only the latest patch will be returned. Ex. if allowed versions is
   *  [6.1.1, 6.1.2, 6.2.0] then response will be [6.1.2, 6.2.0]
   */
  // const latestPatchOnly = true

  // Imports the Datafusion library
  // eslint-disable-next-line node/no-missing-require
  const {DataFusionClient} = require('@google-cloud/data-fusion');

  // Instantiates a client
  const datafusionClient = new DataFusionClient();

  async function listAvailableVersions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datafusionClient.listAvailableVersionsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listAvailableVersions();
  // [END datafusion_v1_generated_DataFusion_ListAvailableVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

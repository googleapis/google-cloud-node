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
  // [START networkconnectivity_v1_generated_HubService_ListSpokes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of results per page that should be returned.
   */
  // const pageSize = 1234
  /**
   *  The page token.
   */
  // const pageToken = 'abc123'
  /**
   *  An expression that filters the results listed in the response.
   */
  // const filter = 'abc123'
  /**
   *  Sort the results by a certain order.
   */
  // const orderBy = 'abc123'

  // Imports the Networkconnectivity library
  const {HubServiceClient} = require('@google-cloud/network-connectivity').v1;

  // Instantiates a client
  const networkconnectivityClient = new HubServiceClient();

  async function callListSpokes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await networkconnectivityClient.listSpokesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSpokes();
  // [END networkconnectivity_v1_generated_HubService_ListSpokes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(spoke) {
  // [START networkconnectivity_v1_generated_HubService_UpdateSpoke_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. In the case of an update to an existing spoke, field mask is used to
   *  specify the fields to be overwritten. The fields specified in the
   *  update_mask are relative to the resource, not the full request. A field is
   *  overwritten if it is in the mask. If the user does not provide a mask, then
   *  all fields are overwritten.
   */
  // const updateMask = {}
  /**
   *  Required. The state that the spoke should be in after the update.
   */
  // const spoke = {}
  /**
   *  Optional. A unique request ID (optional). If you specify this ID, you can use it
   *  in cases when you need to retry your request. When you need to retry, this
   *  ID lets the server know that it can ignore the request if it has already
   *  been completed. The server guarantees that for at least 60 minutes after
   *  the first request.
   *  For example, consider a situation where you make an initial request and
   *  the request times out. If you make the request again with the same request
   *  ID, the server can check to see whether the original operation
   *  was received. If it was, the server ignores the second request. This
   *  behavior prevents clients from mistakenly creating duplicate commitments.
   *  The request ID must be a valid UUID, with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'

  // Imports the Networkconnectivity library
  const {HubServiceClient} = require('@google-cloud/network-connectivity').v1;

  // Instantiates a client
  const networkconnectivityClient = new HubServiceClient();

  async function callUpdateSpoke() {
    // Construct request
    const request = {
      spoke,
    };

    // Run request
    const [operation] = await networkconnectivityClient.updateSpoke(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateSpoke();
  // [END networkconnectivity_v1_generated_HubService_UpdateSpoke_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

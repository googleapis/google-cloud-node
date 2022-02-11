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
  // [START livestream_v1_generated_LivestreamService_ListInputs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent location for the resource, in the form of:
   *  `projects/{project}/locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return. If unspecified, server
   *  will pick an appropriate default. Server may return fewer items than
   *  requested. A caller should only rely on response's
   *  next_page_token google.cloud.video.livestream.v1.ListInputsResponse.next_page_token  to
   *  determine if there are more items left to be queried.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous List request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  The filter to apply to list results.
   */
  // const filter = 'abc123'
  /**
   *  Specifies the ordering of results following syntax at Sorting
   *  Order (https://cloud.google.com/apis/design/design_patterns#sorting_order).
   */
  // const orderBy = 'abc123'

  // Imports the Livestream library
  const {LivestreamServiceClient} = require('@google-cloud/livestream').v1;

  // Instantiates a client
  const livestreamClient = new LivestreamServiceClient();

  async function callListInputs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await livestreamClient.listInputsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListInputs();
  // [END livestream_v1_generated_LivestreamService_ListInputs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

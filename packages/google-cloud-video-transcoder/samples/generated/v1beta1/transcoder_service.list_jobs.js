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
  // [START transcoder_v1beta1_generated_TranscoderService_ListJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return.
   */
  // const pageSize = 1234
  /**
   *  The `next_page_token` value returned from a previous List request, if
   *  any.
   */
  // const pageToken = 'abc123'

  // Imports the Transcoder library
  const {TranscoderServiceClient} = require('@google-cloud/video-transcoder').v1beta1;

  // Instantiates a client
  const transcoderClient = new TranscoderServiceClient();

  async function callListJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await transcoderClient.listJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListJobs();
  // [END transcoder_v1beta1_generated_TranscoderService_ListJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

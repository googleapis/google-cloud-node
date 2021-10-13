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

function main(parent, job) {
  // [START transcoder_v1beta1_generated_TranscoderService_CreateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent location to create and process this job.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. Parameters for creating transcoding job.
   */
  // const job = ''

  // Imports the Transcoder library
  const {TranscoderServiceClient} =
    require('@google-cloud/video-transcoder').v1beta1;

  // Instantiates a client
  const transcoderClient = new TranscoderServiceClient();

  async function createJob() {
    // Construct request
    const request = {
      parent,
      job,
    };

    // Run request
    const response = await transcoderClient.createJob(request);
    console.log(response);
  }

  createJob();
  // [END transcoder_v1beta1_generated_TranscoderService_CreateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

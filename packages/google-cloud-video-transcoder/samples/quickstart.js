// Copyright 2020 Google LLC
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

async function main(projectId, location) {
  // [START video_transcoder_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const location = 'us-central1';
  const {TranscoderServiceClient} =
    require('@google-cloud/video-transcoder').v1;
  const client = new TranscoderServiceClient();
  async function listJobs() {
    const [jobs] = await client.listJobs({
      parent: client.locationPath(projectId, location),
    });
    console.info('jobs:');
    for (const job of jobs) {
      console.info(job);
    }
  }
  listJobs();
  // [END video_transcoder_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

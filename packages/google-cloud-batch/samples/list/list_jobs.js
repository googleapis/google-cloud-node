// Copyright 2022 Google LLC
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

'use strict';

/**
 * Get a list of all jobs defined in given region.
 *
 * @param {string} projectId - ID or number of the Google Cloud project you want to use.
 * @param {string} region - The Google Cloud region to use, e.g. 'us-central1'
 */
function main(projectId, region) {
  // [START batch_list_jobs]
  /**
   * TODO(developer): Uncomment and replace these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  /**
   * The region that hosts the job.
   */
  // const region = 'us-central-1';

  // Imports the Batch library
  const batchLib = require('@google-cloud/batch');

  // Instantiates a client
  const batchClient = new batchLib.v1.BatchServiceClient();

  async function callListJobs() {
    // Construct request
    const request = {
      parent: `projects/${projectId}/locations/${region}`,
    };

    // Run request
    const iterable = await batchClient.listJobsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListJobs();
  // [END batch_list_jobs]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

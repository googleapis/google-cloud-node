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
  // [START aiplatform_v1_generated_JobService_ListBatchPredictionJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list the BatchPredictionJobs
   *  from. Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list filter.
   *  Supported fields:
   *    * `display_name` supports = and !=.
   *    * `state` supports = and !=.
   *    * `model_display_name` supports = and !=
   *  Some examples of using the filter are:
   *   * `state="JOB_STATE_SUCCEEDED" AND display_name="my_job"`
   *   * `state="JOB_STATE_RUNNING" OR display_name="my_job"`
   *   * `NOT display_name="my_job"`
   *   * `state="JOB_STATE_FAILED"`
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained via
   *  ListBatchPredictionJobsResponse.next_page_token google.cloud.aiplatform.v1.ListBatchPredictionJobsResponse.next_page_token  of the previous
   *  JobService.ListBatchPredictionJobs google.cloud.aiplatform.v1.JobService.ListBatchPredictionJobs  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {JobServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new JobServiceClient();

  async function callListBatchPredictionJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listBatchPredictionJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListBatchPredictionJobs();
  // [END aiplatform_v1_generated_JobService_ListBatchPredictionJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

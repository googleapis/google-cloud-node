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

function main(projectId, region, jobId, job, updateMask) {
  // [START dataproc_v1_generated_JobController_UpdateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project that the job
   *  belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Required. The job ID.
   */
  // const jobId = 'abc123'
  /**
   *  Required. The changes to the job.
   */
  // const job = {}
  /**
   *  Required. Specifies the path, relative to <code>Job</code>, of
   *  the field to update. For example, to update the labels of a Job the
   *  <code>update_mask</code> parameter would be specified as
   *  <code>labels</code>, and the `PATCH` request body would specify the new
   *  value. <strong>Note:</strong> Currently, <code>labels</code> is the only
   *  field that can be updated.
   */
  // const updateMask = {}

  // Imports the Dataproc library
  const {JobControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new JobControllerClient();

  async function callUpdateJob() {
    // Construct request
    const request = {
      projectId,
      region,
      jobId,
      job,
      updateMask,
    };

    // Run request
    const response = await dataprocClient.updateJob(request);
    console.log(response);
  }

  callUpdateJob();
  // [END dataproc_v1_generated_JobController_UpdateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

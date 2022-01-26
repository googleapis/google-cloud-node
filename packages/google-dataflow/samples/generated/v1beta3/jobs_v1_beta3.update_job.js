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

function main() {
  // [START dataflow_v1beta3_generated_JobsV1Beta3_UpdateJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The ID of the Cloud Platform project that the job belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  The job ID.
   */
  // const jobId = 'abc123'
  /**
   *  The updated job.
   *  Only the job state is updatable; other fields will be ignored.
   */
  // const job = {}
  /**
   *  The regional endpoint 
   *  (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *  contains this job.
   */
  // const location = 'abc123'

  // Imports the Dataflow library
  const {JobsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new JobsV1Beta3Client();

  async function callUpdateJob() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataflowClient.updateJob(request);
    console.log(response);
  }

  callUpdateJob();
  // [END dataflow_v1beta3_generated_JobsV1Beta3_UpdateJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

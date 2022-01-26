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
  // [START dataflow_v1beta3_generated_MetricsV1Beta3_GetJobExecutionDetails_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A project id.
   */
  // const projectId = 'abc123'
  /**
   *  The job to get execution details for.
   */
  // const jobId = 'abc123'
  /**
   *  The regional endpoint 
   *  (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *  contains the job specified by job_id.
   */
  // const location = 'abc123'
  /**
   *  If specified, determines the maximum number of stages to
   *  return.  If unspecified, the service may choose an appropriate
   *  default, or may return an arbitrarily large number of results.
   */
  // const pageSize = 1234
  /**
   *  If supplied, this should be the value of next_page_token returned
   *  by an earlier call. This will cause the next page of results to
   *  be returned.
   */
  // const pageToken = 'abc123'

  // Imports the Dataflow library
  const {MetricsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new MetricsV1Beta3Client();

  async function callGetJobExecutionDetails() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await dataflowClient.getJobExecutionDetailsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callGetJobExecutionDetails();
  // [END dataflow_v1beta3_generated_MetricsV1Beta3_GetJobExecutionDetails_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

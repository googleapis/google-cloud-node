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
  // [START dataflow_v1beta3_generated_MetricsV1Beta3_GetJobMetrics_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A project id.
   */
  // const projectId = 'abc123'
  /**
   *  The job to get metrics for.
   */
  // const jobId = 'abc123'
  /**
   *  Return only metric data that has changed since this time.
   *  Default is to return all information about all metrics for the job.
   */
  // const startTime = {}
  /**
   *  The regional endpoint 
   *  (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *  contains the job specified by job_id.
   */
  // const location = 'abc123'

  // Imports the Dataflow library
  const {MetricsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new MetricsV1Beta3Client();

  async function callGetJobMetrics() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataflowClient.getJobMetrics(request);
    console.log(response);
  }

  callGetJobMetrics();
  // [END dataflow_v1beta3_generated_MetricsV1Beta3_GetJobMetrics_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

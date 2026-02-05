// Copyright 2019 Google LLC
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

function main(jobId = 'existing-job-id') {
  // [START bigquery_get_job]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function getJob() {
    // Get job properties.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const jobId = "existing-job-id";

    // Create a job reference
    const job = bigquery.job(jobId);

    // Retrieve job
    const [jobResult] = await job.get();

    console.log(jobResult.metadata.jobReference);
  }
  // [END bigquery_get_job]
  getJob();
}
main(...process.argv.slice(2));

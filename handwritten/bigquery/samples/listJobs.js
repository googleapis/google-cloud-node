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

function main() {
  // [START bigquery_list_jobs]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listJobs() {
    // Lists all jobs in current GCP project.

    // List the 10 most recent jobs in reverse chronological order.
    //  Omit the max_results parameter to list jobs from the past 6 months.
    const options = {maxResults: 10};
    const [jobs] = await bigquery.getJobs(options);

    console.log('Jobs:');
    jobs.forEach(job => console.log(job.id));
  }
  // [END bigquery_list_jobs]
  listJobs();
}
main(...process.argv.slice(2));

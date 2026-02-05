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

function main() {
  // [START bigquery_create_job]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function createJob() {
    // Run a BigQuery query job.

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job
    const options = {
      // Specify a job configuration to set optional job resource properties.
      configuration: {
        query: {
          query: `SELECT country_name 
                FROM \`bigquery-public-data.utility_us.country_code_iso\` 
                LIMIT 10`,
          useLegacySql: false,
        },
        labels: {'example-label': 'example-value'},
      },
    };

    // Make API request.
    const response = await bigquery.createJob(options);
    const job = response[0];

    // Wait for the query to finish
    const [rows] = await job.getQueryResults(job);

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_create_job]
  createJob();
}
main(...process.argv.slice(2));

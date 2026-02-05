// Copyright 2024 Google LLC
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
  // [START bigquery_query_job_optional]
  // Demonstrates issuing a query that may be run in short query mode.

  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery({
    // default behavior is to create jobs when using the jobs.query API
    defaultJobCreationMode: 'JOB_CREATION_REQUIRED',
  });

  async function queryJobOptional() {
    // SQL query to run.

    const sqlQuery = `
      SELECT name, gender, SUM(number) AS total
      FROM bigquery-public-data.usa_names.usa_1910_2013
      GROUP BY name, gender
      ORDER BY total DESC
      LIMIT 10`;

    // Run the query
    const [rows, , res] = await bigquery.query({
      query: sqlQuery,
      // Skip job creation to enable short mode.
      jobCreationMode: 'JOB_CREATION_OPTIONAL',
    });

    if (!res.jobReference) {
      console.log(`Query was run in short mode. Query ID: ${res.queryId}`);
    } else {
      const jobRef = res.jobReference;
      const qualifiedId = `${jobRef.projectId}.${jobRef.location}.${jobRef.jobId}`;
      console.log(
        `Query was run with job state. Job ID: ${qualifiedId}, Query ID: ${res.queryId}`,
      );
    }
    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_query_job_optional]
  queryJobOptional();
}
main(...process.argv.slice(2));

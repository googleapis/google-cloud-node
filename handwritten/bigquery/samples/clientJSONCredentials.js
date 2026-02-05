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
  // [START bigquery_client_json_credentials]
  // Create a BigQuery client explicitly using service account credentials.
  // by specifying the private key file.
  const {BigQuery} = require('@google-cloud/bigquery');

  const options = {
    keyFilename: 'path/to/service_account.json',
    projectId: 'my_project',
  };

  const bigquery = new BigQuery(options);
  // [END bigquery_client_json_credentials]
  async function query() {
    // Queries the U.S. given names dataset for the state of Texas.

    const query = `SELECT name
      FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
      WHERE state = 'TX'
      LIMIT 100`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  query();
}

main(...process.argv.slice(2));

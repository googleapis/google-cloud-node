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
  // [START bigquery_query_no_cache]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');

  async function queryDisableCache() {
    // Queries the Shakespeare dataset with the cache disabled.

    // Create a client
    const bigquery = new BigQuery();

    const query = `SELECT corpus
      FROM \`bigquery-public-data.samples.shakespeare\`
      GROUP BY corpus`;
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
      useQueryCache: false,
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
  // [END bigquery_query_no_cache]
  queryDisableCache();
}
main(...process.argv.slice(2));

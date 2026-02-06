// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START bigquery_query_pagination]
  // Import the Google Cloud client library using default credentials
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryPagination() {
    // Run a query and get rows using automatic pagination.

    const query = `SELECT name, SUM(number) as total_people
    FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
    GROUP BY name
    ORDER BY total_people DESC
    LIMIT 100`;

    // Run the query as a job.
    const [job] = await bigquery.createQueryJob(query);

    // Wait for job to complete and get rows.
    // The client library automatically handles pagination.
    // See more info on how to configure paging calls at:
    //  * https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#auto-pagination
    //  * https://cloud.google.com/bigquery/docs/paging-results#iterate_through_client_libraries_results
    const [rows] = await job.getQueryResults();

    console.log('Query results:');
    rows.forEach(row => {
      console.log(`name: ${row.name}, ${row.total_people} total people`);
    });
  }
  queryPagination();
  // [END bigquery_query_pagination]
}
main(...process.argv.slice(2));

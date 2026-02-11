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

function main(
  datasetId = 'my_dataset',
  tableId = 'my_table',
  projectId = 'my_project',
) {
  // [START bigquery_query_legacy_large_results]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryLegacyLargeResults() {
    // Query enables large result sets.

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const projectId = "my_project"
    // const datasetId = "my_dataset";
    // const tableId = "my_table";

    const query =
      'SELECT word FROM [bigquery-public-data:samples.shakespeare] LIMIT 10;';

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced
      // in the query and of the destination table.
      useLegacySql: true,
      allowLargeResult: true,
      destinationTable: {
        projectId: projectId,
        datasetId: datasetId,
        tableId: tableId,
      },
    };

    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_query_legacy_large_results]
  queryLegacyLargeResults();
}
main(...process.argv.slice(2));

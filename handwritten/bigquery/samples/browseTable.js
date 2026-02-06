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

function main(
  datasetId = 'my_dataset', // Existing dataset
  tableId = 'my_table', // Table to create
) {
  // [START bigquery_browse_table]
  // Import the Google Cloud client library using default credentials
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function browseTable() {
    // Retrieve a table's rows using manual pagination.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset'; // Existing dataset
    // const tableId = 'my_table'; // Table to create

    const query = `SELECT name, SUM(number) as total_people
      FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
      GROUP BY name 
      ORDER BY total_people 
      DESC LIMIT 100`;

    // Create table reference.
    const dataset = bigquery.dataset(datasetId);
    const destinationTable = dataset.table(tableId);

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery
    const queryOptions = {
      query: query,
      destination: destinationTable,
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(queryOptions);

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/jobs/getQueryResults
    const queryResultsOptions = {
      // Retrieve zero resulting rows.
      maxResults: 0,
    };

    // Wait for the job to finish.
    await job.getQueryResults(queryResultsOptions);

    function manualPaginationCallback(err, rows, nextQuery) {
      rows.forEach(row => {
        console.log(`name: ${row.name}, ${row.total_people} total people`);
      });

      if (nextQuery) {
        // More results exist.
        destinationTable.getRows(nextQuery, manualPaginationCallback);
      }
    }

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tabledata/list
    const getRowsOptions = {
      autoPaginate: false,
      maxResults: 20,
    };

    // Retrieve all rows.
    destinationTable.getRows(getRowsOptions, manualPaginationCallback);
  }
  browseTable();
  // [END bigquery_browse_table]
}
main(...process.argv.slice(2));

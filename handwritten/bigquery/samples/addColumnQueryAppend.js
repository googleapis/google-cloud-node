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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_add_column_query_append]
  // Import the Google Cloud client libraries
  const {BigQuery} = require('@google-cloud/bigquery');

  // Instantiate client
  const bigquery = new BigQuery();

  async function addColumnQueryAppend() {
    // Adds a new column to a BigQuery table while appending rows via a query job.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Retrieve destination table reference
    const [table] = await bigquery.dataset(datasetId).table(tableId).get();
    const destinationTableRef = table.metadata.tableReference;

    // In this example, the existing table contains only the 'name' column.
    // 'REQUIRED' fields cannot  be added to an existing schema,
    // so the additional column must be 'NULLABLE'.
    const query = `SELECT name, year
      FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
      WHERE state = 'TX'
      LIMIT 10`;

    // Set load job options
    const options = {
      query: query,
      schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],
      writeDisposition: 'WRITE_APPEND',
      destinationTable: destinationTableRef,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    console.log(`Job ${job.id} completed.`);

    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));
  }
  // [END bigquery_add_column_query_append]
  addColumnQueryAppend();
}
main(...process.argv.slice(2));

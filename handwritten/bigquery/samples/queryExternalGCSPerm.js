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
  tableId = 'my_new_table', // Table to be created
  schema = [
    {name: 'name', type: 'STRING'},
    {name: 'post_abbr', type: 'STRING'},
  ],
) {
  // [START bigquery_query_external_gcs_perm]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryExternalGCSPerm() {
    // Queries an external data source using a permanent table

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";

    // Configure the external data source
    const dataConfig = {
      sourceFormat: 'CSV',
      sourceUris: ['gs://cloud-samples-data/bigquery/us-states/us-states.csv'],
      // Optionally skip header row
      csvOptions: {skipLeadingRows: 1},
    };

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      schema: schema,
      externalDataConfiguration: dataConfig,
    };

    // Create an external table linked to the GCS file
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);

    console.log(`Table ${table.id} created.`);

    // Example query to find states starting with 'W'
    const query = `SELECT post_abbr
    FROM \`${datasetId}.${tableId}\`
    WHERE name LIKE 'W%'`;

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(query);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    console.log(rows);
  }
  // [END bigquery_query_external_gcs_perm]
  queryExternalGCSPerm();
}
main(...process.argv.slice(2));

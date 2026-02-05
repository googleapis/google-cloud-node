// Copyright 2021 Google LLC
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
  schema = [
    {name: 'name', type: 'STRING'},
    {name: 'post_abbr', type: 'STRING'},
  ],
) {
  // [START bigquery_query_external_gcs_temp]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryExternalGCSTemp() {
    // Queries an external data source using a temporary table.

    const tableId = 'us_states';

    // Configure the external data source
    const externalDataConfig = {
      sourceFormat: 'CSV',
      sourceUris: ['gs://cloud-samples-data/bigquery/us-states/us-states.csv'],
      // Optionally skip header row.
      csvOptions: {skipLeadingRows: 1},
      schema: {fields: schema},
    };

    // Example query to find states starting with 'W'
    const query = `SELECT post_abbr
    FROM \`${tableId}\`
    WHERE name LIKE 'W%'`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      query,
      tableDefinitions: {[tableId]: externalDataConfig},
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();

    // Print the results
    console.log('Rows:');
    console.log(rows);
  }
  // [END bigquery_query_external_gcs_temp]
  queryExternalGCSTemp();
}
main(...process.argv.slice(2));

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
  // [START bigquery_query_destination_table]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function queryDestinationTable() {
    // Queries the U.S. given names dataset for the state of Texas
    // and saves results to permanent table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Create destination table reference
    const dataset = bigquery.dataset(datasetId);
    const destinationTable = dataset.table(tableId);

    const query = `SELECT name
      FROM \`bigquery-public-data.usa_names.usa_1910_2013\`
      WHERE state = 'TX'
      LIMIT 100`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
      destination: destinationTable,
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);

    console.log(`Job ${job.id} started.`);
    console.log(`Query results loaded to table ${destinationTable.id}`);
  }
  // [END bigquery_query_destination_table]
  queryDestinationTable(datasetId, tableId);
}
main(...process.argv.slice(2));

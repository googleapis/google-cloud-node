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
  datasetId = 'my_dataset', // Existing dataset ID
  tableId = 'my_existing_view', // Existing view ID
) {
  // [START bigquery_update_view_query]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function updateViewQuery() {
    // Updates a view named "my_existing_view" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_existing_dataset"
    // const tableId = "my_existing_table"
    const dataset = await bigquery.dataset(datasetId);

    // This example updates a view into the USA names dataset to include state.
    const newViewQuery = `SELECT name, state 
    FROM \`bigquery-public-data.usa_names.usa_1910_current\`
    LIMIT 10`;

    // Retrieve existing view
    const [view] = await dataset.table(tableId).get();

    // Retrieve existing view metadata
    const [metadata] = await view.getMetadata();

    // Update view query
    metadata.view = newViewQuery;

    // Set metadata
    await view.setMetadata(metadata);

    console.log(`View ${tableId} updated.`);
  }
  // [END bigquery_update_view_query]
  updateViewQuery();
}
main(...process.argv.slice(2));

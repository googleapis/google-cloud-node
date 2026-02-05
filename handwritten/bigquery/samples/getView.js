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
  tableId = 'my_view', // Existing table ID
) {
  // [START bigquery_get_view]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function getView() {
    // Retrieves view properties.

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_view";

    // Retrieve view
    const dataset = bigquery.dataset(datasetId);
    const [view] = await dataset.table(tableId).get();

    const fullTableId = view.metadata.id;
    const viewQuery = view.metadata.view.query;

    // Display view properties
    console.log(`View at ${fullTableId}`);
    console.log(`View query: ${viewQuery}`);
  }
  getView();
  // [END bigquery_get_view]
}
main(...process.argv.slice(2));

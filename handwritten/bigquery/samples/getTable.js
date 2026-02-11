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

// sample-metadata:
//   title: BigQuery Get Table
//   description: Retrieves an existing table from a dataset.
//   usage: node getTable.js <DATASET_ID> <TABLE_ID>

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_get_table]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function getTable() {
    // Retrieves table named "my_table" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";

    // Retrieve table reference
    const dataset = bigquery.dataset(datasetId);
    const [table] = await dataset.table(tableId).get();

    console.log('Table:');
    console.log(table.metadata.tableReference);
  }
  getTable();
  // [END bigquery_get_table]
}
main(...process.argv.slice(2));

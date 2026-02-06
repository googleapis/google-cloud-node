// Copyright 2022 Google LLC
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
  // [START bigquery_table_exists]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function tableExists() {
    // Checks whether table named "my_table" in "my_dataset" exists.

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";

    // Retrieve table reference
    const dataset = bigquery.dataset(datasetId);

    try {
      await dataset.table(tableId).get();
      console.log(`Table ${tableId} exists.`);
    } catch (e) {
      console.log(e.message);
    }
  }
  tableExists();
  // [END bigquery_table_exists]
}
main(...process.argv.slice(2));

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
  datasetId = 'my_dataset', // Existing dataset
  sourceTable = 'my_table', // Existing table to copy from
  destinationTable = 'testing', // Existing table to copy to
) {
  // [START bigquery_copy_table_multiple_source]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function copyTableMultipleSource() {
    // Copy multiple source tables to a given destination.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // sourceTable = 'my_table';
    // destinationTable = 'testing';

    // Create a client
    const dataset = bigquery.dataset(datasetId);

    const metadata = {
      createDisposition: 'CREATE_NEVER',
      writeDisposition: 'WRITE_TRUNCATE',
    };

    // Create table references
    const table = dataset.table(sourceTable);
    const yourTable = dataset.table(destinationTable);

    // Copy table
    const [apiResponse] = await table.copy(yourTable, metadata);
    console.log(apiResponse.configuration.copy);
  }
  // [END bigquery_copy_table_multiple_source]
  copyTableMultipleSource();
}

main(...process.argv.slice(2));

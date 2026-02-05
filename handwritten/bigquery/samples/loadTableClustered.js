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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_load_table_clustered]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const {Storage} = require('@google-cloud/storage');

  // Instantiate clients
  const bigquery = new BigQuery();
  const storage = new Storage();

  /**
   * This sample loads the CSV file at
   * https://storage.googleapis.com/cloud-samples-data/sample-transactions/transactions.csv
   *
   * TODO(developer): Replace the following lines with the path to your file.
   */
  const bucketName = 'cloud-samples-data';
  const filename = 'bigquery/sample-transactions/transactions.csv';

  async function loadTableClustered() {
    // Loads a new clustered table named "my_table" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";

    const metadata = {
      sourceFormat: 'CSV',
      skipLeadingRows: 1,
      schema: {
        fields: [
          {name: 'timestamp', type: 'TIMESTAMP'},
          {name: 'origin', type: 'STRING'},
          {name: 'destination', type: 'STRING'},
          {name: 'amount', type: 'NUMERIC'},
        ],
      },
      clustering: {
        fields: ['origin', 'destination'],
      },
    };

    // Load data from a Google Cloud Storage file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(storage.bucket(bucketName).file(filename), metadata);

    // load() waits for the job to finish
    console.log(`Job ${job.id} completed.`);
  }
  // [END bigquery_load_table_clustered]
  loadTableClustered(datasetId, tableId);
}
main(...process.argv.slice(2));

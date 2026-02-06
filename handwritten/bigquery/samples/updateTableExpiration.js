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
  tableId = 'my_table', // Existing table
  expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 5, // 5 days from current time in ms
) {
  // [START bigquery_update_table_expiration]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function updateTableExpiration() {
    // Updates a table's expiration.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset', // Existing dataset
    // const tableId = 'my_table', // Existing table
    // const expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 5 // 5 days from current time in ms

    // Retreive current table metadata
    const table = bigquery.dataset(datasetId).table(tableId);
    const [metadata] = await table.getMetadata();

    // Set new table expiration to 5 days from current time
    metadata.expirationTime = expirationTime.toString();
    const [apiResponse] = await table.setMetadata(metadata);

    const newExpirationTime = apiResponse.expirationTime;
    console.log(`${tableId} expiration: ${newExpirationTime}`);
  }
  // [END bigquery_update_table_expiration]
  updateTableExpiration();
}
main(...process.argv.slice(2));

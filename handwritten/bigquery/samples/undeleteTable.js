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
  datasetId = 'my_dataset', // Dataset
  tableId = 'my_table_to_undelete', // Table to recover
  recoveredTableId = 'my_recovered_table', // Recovered table
) {
  // [START bigquery_undelete_table]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function undeleteTable() {
    // Undeletes "my_table_to_undelete" from "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table_to_undelete";
    // const recoveredTableId = "my_recovered_table";

    /**
     * TODO(developer): Choose an appropriate snapshot point as epoch milliseconds.
     * For this example, we choose the current time as we're about to delete the
     * table immediately afterwards.
     */
    const snapshotEpoch = Date.now();

    // Delete the table
    await bigquery.dataset(datasetId).table(tableId).delete();

    console.log(`Table ${tableId} deleted.`);

    // Construct the restore-from table ID using a snapshot decorator.
    const snapshotTableId = `${tableId}@${snapshotEpoch}`;

    // Construct and run a copy job.
    await bigquery
      .dataset(datasetId)
      .table(snapshotTableId)
      .copy(bigquery.dataset(datasetId).table(recoveredTableId));

    console.log(
      `Copied data from deleted table ${tableId} to ${recoveredTableId}`,
    );
  }
  // [END bigquery_undelete_table]
  undeleteTable();
}

main(...process.argv.slice(2));

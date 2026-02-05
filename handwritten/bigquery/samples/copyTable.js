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
  srcDatasetId = 'my_src_dataset',
  srcTableId = 'my_src_table',
  destDatasetId = 'my_dest_dataset',
  destTableId = 'my_dest_table',
) {
  // [START bigquery_copy_table]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function copyTable() {
    // Copies src_dataset:src_table to dest_dataset:dest_table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const srcDatasetId = "my_src_dataset";
    // const srcTableId = "my_src_table";
    // const destDatasetId = "my_dest_dataset";
    // const destTableId = "my_dest_table";

    // Copy the table contents into another table
    const [job] = await bigquery
      .dataset(srcDatasetId)
      .table(srcTableId)
      .copy(bigquery.dataset(destDatasetId).table(destTableId));

    console.log(`Job ${job.id} completed.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  // [END bigquery_copy_table]
  copyTable();
}
main(...process.argv.slice(2));

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
  datasetId = 'my_dataset',
  tableId = 'my_table',
  filename = '/path/to/file.csv',
) {
  // [START bigquery_load_from_file]
  // Imports the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function loadLocalFile() {
    // Imports a local file into a table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const filename = '/path/to/file.csv';
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Load data from a local file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(filename);

    console.log(`Job ${job.id} completed.`);
  }
  // [END bigquery_load_from_file]
  loadLocalFile();
}

main(...process.argv.slice(2));

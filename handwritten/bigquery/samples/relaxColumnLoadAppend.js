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
  fileName = '/path/to/file.csv',
) {
  // [START bigquery_relax_column_load_append]
  // Import the Google Cloud client libraries
  const {BigQuery} = require('@google-cloud/bigquery');

  // Instantiate client
  const bigquery = new BigQuery();

  async function relaxColumnLoadAppend() {
    // Changes required column to nullable in load append job.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const fileName = '/path/to/file.csv';
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // In this example, the existing table contains the 'Name'
    // column as a 'REQUIRED' field.
    const schema = 'Age:INTEGER, Weight:FLOAT, IsMagic:BOOLEAN';

    // Retrieve destination table reference
    const [table] = await bigquery.dataset(datasetId).table(tableId).get();
    const destinationTableRef = table.metadata.tableReference;

    // Set load job options
    const options = {
      schema: schema,
      schemaUpdateOptions: ['ALLOW_FIELD_RELAXATION'],
      writeDisposition: 'WRITE_APPEND',
      destinationTable: destinationTableRef,
    };

    // Load data from a local file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(fileName, options);

    console.log(`Job ${job.id} completed.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  // [END bigquery_relax_column_load_append]
  relaxColumnLoadAppend();
}
main(...process.argv.slice(2));

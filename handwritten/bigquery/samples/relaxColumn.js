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
  tableId = 'my_new_table', // Table to be created
) {
  // [START bigquery_relax_column]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function relaxColumn() {
    /**
     * Changes columns from required to nullable.
     * Assumes existing table with the following schema:
     * [{name: 'Name', type: 'STRING', mode: 'REQUIRED'},
     * {name: 'Age', type: 'INTEGER'},
     * {name: 'Weight', type: 'FLOAT'},
     * {name: 'IsMagic', type: 'BOOLEAN'}];
     */

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    const newSchema = [
      {name: 'Name', type: 'STRING', mode: 'NULLABLE'},
      {name: 'Age', type: 'INTEGER'},
      {name: 'Weight', type: 'FLOAT'},
      {name: 'IsMagic', type: 'BOOLEAN'},
    ];

    // Retrieve current table metadata
    const table = bigquery.dataset(datasetId).table(tableId);
    const [metadata] = await table.getMetadata();

    // Update schema
    metadata.schema = newSchema;
    const [apiResponse] = await table.setMetadata(metadata);

    console.log(apiResponse.schema.fields);
  }
  // [END bigquery_relax_column]
  relaxColumn();
}
main(...process.argv.slice(2));

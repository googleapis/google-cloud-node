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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_add_empty_column]

  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function addEmptyColumn() {
    // Adds an empty column to the schema.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';
    const column = {name: 'size', type: 'STRING'};

    // Retrieve current table metadata
    const table = bigquery.dataset(datasetId).table(tableId);
    const [metadata] = await table.getMetadata();

    // Update table schema
    const schema = metadata.schema;
    const new_schema = schema;
    new_schema.fields.push(column);
    metadata.schema = new_schema;

    const [result] = await table.setMetadata(metadata);
    console.log(result.schema.fields);
  }
  // [END bigquery_add_empty_column]
  addEmptyColumn();
}

main(...process.argv.slice(2));

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
  schema = [
    {name: 'Name', type: 'STRING', mode: 'REQUIRED'},
    {name: 'Age', type: 'INTEGER'},
    {name: 'Weight', type: 'FLOAT'},
    {name: 'IsMagic', type: 'BOOLEAN'},
  ],
) {
  // [START bigquery_create_table]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function createTable() {
    // Creates a new table named "my_table" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";
    // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean';

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      schema: schema,
      location: 'US',
    };

    // Create a new table in the dataset
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);

    console.log(`Table ${table.id} created.`);
  }
  // [END bigquery_create_table]
  createTable();
}
main(...process.argv.slice(2));

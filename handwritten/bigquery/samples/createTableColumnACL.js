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

function main(
  datasetId = 'my_dataset', // Existing dataset
  tableId = 'my_table', // Table to be created
  policyTagName = 'projects/myProject/location/us/taxonomies/myTaxonomy/policyTags/myPolicyTag', // Existing policy tag
) {
  // [START bigquery_create_table_column_ACL]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function createTableColumnACL() {
    // Creates a new table named "my_table" in "my_dataset" with column-level security.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';
    // const policyTagName = 'projects/myProject/location/us/taxonomies/myTaxonomy/policyTags/myPolicyTag';

    const schema = [
      {
        name: 'Name',
        type: 'STRING',
        mode: 'REQUIRED',
        policyTags: {names: [policyTagName]},
      },
      {name: 'Age', type: 'INTEGER'},
      {name: 'Weight', type: 'FLOAT'},
    ];

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      schema: schema,
    };

    // Create a new table in the dataset
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);

    console.log(`Created table ${tableId} with schema:`);
    console.log(table.metadata.schema.fields[0]);
  }
  // [END bigquery_create_table_column_ACL]
  createTableColumnACL();
}
main(...process.argv.slice(2));

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

function main(datasetId = 'my_dataset') {
  // [START bigquery_list_tables]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listTables() {
    // Lists tables in 'my_dataset'.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';

    // List all tables in the dataset
    const [tables] = await bigquery.dataset(datasetId).getTables();

    console.log('Tables:');
    tables.forEach(table => console.log(table.id));
  }
  // [END bigquery_list_tables]
  listTables();
}

main(...process.argv.slice(2));

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
  myDatasetId = 'my_dataset', // Existing dataset
  myTableId = 'my_shared_view', // View to be created
  projectId = 'bigquery-public-data', // Source GCP project ID
  sourceDatasetId = 'usa_names', // Source dataset ID
  sourceTableId = 'usa_1910_current', //Source table ID
) {
  // [START bigquery_create_view]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function createView() {
    // Creates a new view named "my_shared_view" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const myDatasetId = "my_dataset"
    // const myTableId = "my_shared_view"
    // const projectId = "bigquery-public-data";
    // const sourceDatasetId = "usa_names"
    // const sourceTableId = "usa_1910_current";
    const myDataset = await bigquery.dataset(myDatasetId);

    // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource
    const options = {
      view: `SELECT name 
      FROM \`${projectId}.${sourceDatasetId}.${sourceTableId}\`
      LIMIT 10`,
    };

    // Create a new view in the dataset
    const [view] = await myDataset.createTable(myTableId, options);

    console.log(`View ${view.id} created.`);
  }
  // [END bigquery_create_view]
  createView();
}
main(...process.argv.slice(2));

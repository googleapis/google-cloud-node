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
  datasetId = 'my_dataset', // Existing dataset
) {
  // [START bigquery_list_routines]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listRoutines() {
    // Lists routines in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';

    // List all routines in the dataset
    const [routines] = await bigquery.dataset(datasetId).getRoutines();

    console.log('Routines:');
    routines.forEach(routine => console.log(routine.id));
  }
  listRoutines();
  // [END bigquery_list_routines]
}
main(...process.argv.slice(2));

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
  routineId = 'my_routine', // Existing routine
) {
  // [START bigquery_get_routine]
  // Import the Google Cloud client library and create a client
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function getRoutine() {
    // Gets an existing routine named "my_routine" in "my_dataset".

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const routineId = 'my_routine';

    const dataset = bigquery.dataset(datasetId);

    // Create routine reference and make API call
    const [routine] = await dataset.routine(routineId).get();

    console.log(
      `Routine ${routine.metadata.routineReference.routineId} retrieved.`,
    );
  }
  getRoutine();
  // [END bigquery_get_routine]
}
main(...process.argv.slice(2));

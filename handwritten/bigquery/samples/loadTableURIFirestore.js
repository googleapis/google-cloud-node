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

function main(datasetId = 'my_dataset', tableId = 'my_table') {
  // [START bigquery_load_table_uri_firestore]
  // Import the Google Cloud client libraries
  const {BigQuery} = require('@google-cloud/bigquery');
  const {Storage} = require('@google-cloud/storage');

  // Instantiate clients
  const bigquery = new BigQuery();
  const storage = new Storage();

  /**
   * TODO(developer): Replace the following lines with the path to your file.
   */
  const bucketName = 'cloud-samples-data';
  const filename =
    'bigquery/us-states/2021-07-02T16:04:48_70344/all_namespaces/kind_us-states/all_namespaces_kind_us-states.export_metadata';

  async function loadTableURIFirestore() {
    // Imports a GCS Firestore export file into a table.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table';

    // Load data from a Google Cloud Storage file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(storage.bucket(bucketName).file(filename));

    // load() waits for the job to finish
    console.log(`Job ${job.id} completed.`);
  }
  // [END bigquery_load_table_uri_firestore]
  loadTableURIFirestore();
}
main(...process.argv.slice(2));

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
  // [START bigquery_load_table_gcs_orc]
  // Import the Google Cloud client libraries
  const {BigQuery} = require('@google-cloud/bigquery');
  const {Storage} = require('@google-cloud/storage');

  // Instantiate clients
  const bigquery = new BigQuery();
  const storage = new Storage();

  /**
   * This sample loads the ORC file at
   * https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.orc
   *
   * TODO(developer): Replace the following lines with the path to your file.
   */
  const bucketName = 'cloud-samples-data';
  const filename = 'bigquery/us-states/us-states.orc';

  async function loadTableGCSORC() {
    // Imports a GCS file into a table with ORC source format.

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const datasetId = 'my_dataset';
    // const tableId = 'my_table'

    // Configure the load job. For full list of options, see:
    // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad
    const metadata = {
      sourceFormat: 'ORC',
      location: 'US',
    };

    // Load data from a Google Cloud Storage file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(storage.bucket(bucketName).file(filename), metadata);

    // load() waits for the job to finish
    console.log(`Job ${job.id} completed.`);
  }
  // [END bigquery_load_table_gcs_orc]
  loadTableGCSORC();
}
main(...process.argv.slice(2));

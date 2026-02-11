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
  datasetId = 'my_dataset',
  tableId = 'my_table',
  bucketName = 'my-bucket',
  filename = 'file.json',
) {
  // [START bigquery_extract_table_json]
  // Import the Google Cloud client libraries
  const {BigQuery} = require('@google-cloud/bigquery');
  const {Storage} = require('@google-cloud/storage');

  const bigquery = new BigQuery();
  const storage = new Storage();

  async function extractTableJSON() {
    // Exports my_dataset:my_table to gcs://my-bucket/my-file as JSON.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";
    // const tableId = "my_table";
    // const bucketName = "my-bucket";
    // const filename = "file.json";

    // Location must match that of the source table.
    const options = {
      format: 'json',
      location: 'US',
    };

    // Export data from the table into a Google Cloud Storage file
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .extract(storage.bucket(bucketName).file(filename), options);

    console.log(`Job ${job.id} created.`);

    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }
  // [END bigquery_extract_table_json]
  extractTableJSON();
}
main(...process.argv.slice(2));

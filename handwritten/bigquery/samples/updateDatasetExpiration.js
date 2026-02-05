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
  // [START bigquery_update_dataset_expiration]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function updateDatasetExpiration() {
    // Updates the lifetime of all tables in the dataset, in milliseconds.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";

    // Retreive current dataset metadata
    const dataset = bigquery.dataset(datasetId);
    const [metadata] = await dataset.getMetadata();

    // Set new dataset metadata
    const expirationTime = 24 * 60 * 60 * 1000;
    metadata.defaultTableExpirationMs = expirationTime.toString();

    const [apiResponse] = await dataset.setMetadata(metadata);
    const newExpirationTime = apiResponse.defaultTableExpirationMs;

    console.log(`${datasetId} expiration: ${newExpirationTime}`);
  }
  // [END bigquery_update_dataset_expiration]
  updateDatasetExpiration();
}
main(...process.argv.slice(2));

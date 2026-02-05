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

// sample-metadata:
//   title: Get Dataset Labels
//   description: Gets labels on a dataset.
//   usage: node getDatasetLabels.js <DATASET_ID>

function main(datasetId = 'my_dataset') {
  // [START bigquery_get_dataset_labels]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function getDatasetLabels() {
    // Gets labels on a dataset.

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const datasetId = "my_dataset";

    // Retrieve current dataset metadata.
    const dataset = bigquery.dataset(datasetId);
    const [metadata] = await dataset.getMetadata();
    const labels = metadata.labels;

    console.log(`${datasetId} Labels:`);
    for (const [key, value] of Object.entries(labels)) {
      console.log(`${key}: ${value}`);
    }
  }
  getDatasetLabels();
  // [END bigquery_get_dataset_labels]
}
main(...process.argv.slice(2));

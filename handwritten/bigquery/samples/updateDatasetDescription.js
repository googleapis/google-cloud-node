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
  // [START bigquery_update_dataset_description]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function updateDatasetDescription() {
    // Updates a dataset's description.

    // Retreive current dataset metadata
    const dataset = bigquery.dataset(datasetId);
    const [metadata] = await dataset.getMetadata();

    // Set new dataset description
    const description = 'New dataset description.';
    metadata.description = description;

    const [apiResponse] = await dataset.setMetadata(metadata);
    const newDescription = apiResponse.description;

    console.log(`${datasetId} description: ${newDescription}`);
  }
  // [END bigquery_update_dataset_description]
  updateDatasetDescription();
}
main(...process.argv.slice(2));

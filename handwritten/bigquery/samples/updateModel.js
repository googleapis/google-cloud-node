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
//   title: BigQuery Update Model
//   description: Updates a model's metadata.
//   usage: node updateModel.js <DATASET_ID> <MODEL_ID>

function main(datasetId = 'my_datset', modelId = 'my_model') {
  // [START bigquery_update_model_description]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function updateModel() {
    // Updates a model's metadata.

    /**
     * TODO(developer): Uncomment the following lines before running the sample
     */
    // const datasetId = "my_dataset";
    // const modelId = "my__model";

    const metadata = {
      description: 'A really great model.',
    };

    const dataset = bigquery.dataset(datasetId);
    const [apiResponse] = await dataset.model(modelId).setMetadata(metadata);
    const newDescription = apiResponse.description;

    console.log(`${modelId} description: ${newDescription}`);
  }
  // [END bigquery_update_model_description]
  updateModel();
}
main(...process.argv.slice(2));

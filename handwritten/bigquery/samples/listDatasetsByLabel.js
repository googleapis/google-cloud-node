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

function main() {
  // [START bigquery_list_datasets_by_label]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listDatasetsByLabel() {
    // Lists all datasets in current GCP project, filtering by label color:green.

    const options = {
      filter: 'labels.color:green',
    };
    // Lists all datasets in the specified project
    const [datasets] = await bigquery.getDatasets(options);

    console.log('Datasets:');
    datasets.forEach(dataset => console.log(dataset.id));
  }
  // [END bigquery_list_datasets_by_label]
  listDatasetsByLabel();
}
main(...process.argv.slice(2));

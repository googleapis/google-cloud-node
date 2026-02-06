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

function main(projectId) {
  // [START bigquery_list_datasets]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();

  async function listDatasets() {
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = "my_project_id";

    // Lists all datasets in the specified project.
    // If projectId is not specified, this method will take
    // the projectId from the authenticated BigQuery Client.
    const [datasets] = await bigquery.getDatasets({projectId});
    console.log('Datasets:');
    datasets.forEach(dataset => console.log(dataset.id));
  }
  // [END bigquery_list_datasets]
  listDatasets();
}
main(...process.argv.slice(2));

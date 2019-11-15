// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Get Datasets
//   description: Gets all available Datasets.
//   usage: node quickstart.js

function main() {
  // [START datalabeling_quickstart]
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling');
  const client = new DataLabelingServiceClient();

  async function quickstart() {
    const projectId = await client.getProjectId();
    const parent = client.projectPath(projectId);
    const [result] = await client.listDatasets({parent});
    console.log('Datasets:');
    console.log(result);
  }
  quickstart();
  // [END datalabeling_quickstart]
}
main(...process.argv.slice(2));

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

function main(parent, dataset) {
  // [START aiplatform_create_dataset_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to create the Dataset in.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Dataset to create.
   */
  // const dataset = ''

  // Imports the Aiplatform library
  const {DatasetServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new DatasetServiceClient();

  async function createDataset() {
    // Construct request
    const request = {
      parent,
      dataset,
    };

    // Run request
    const [operation] = await aiplatformClient.createDataset(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createDataset();
  // [END aiplatform_create_dataset_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

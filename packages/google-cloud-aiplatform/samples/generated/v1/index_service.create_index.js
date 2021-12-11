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

function main(parent, index) {
  // [START aiplatform_v1_generated_IndexService_CreateIndex_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to create the Index in.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The Index to create.
   */
  // const index = {}

  // Imports the Aiplatform library
  const {IndexServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new IndexServiceClient();

  async function callCreateIndex() {
    // Construct request
    const request = {
      parent,
      index,
    };

    // Run request
    const [operation] = await aiplatformClient.createIndex(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateIndex();
  // [END aiplatform_v1_generated_IndexService_CreateIndex_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

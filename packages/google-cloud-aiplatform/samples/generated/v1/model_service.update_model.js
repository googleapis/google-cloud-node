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

function main(model, updateMask) {
  // [START aiplatform_v1_generated_ModelService_UpdateModel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Model which replaces the resource on the server.
   */
  // const model = ''
  /**
   *  Required. The update mask applies to the resource.
   *  For the `FieldMask` definition, see [google.protobuf.FieldMask][google.protobuf.FieldMask].
   */
  // const updateMask = ''

  // Imports the Aiplatform library
  const {ModelServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new ModelServiceClient();

  async function updateModel() {
    // Construct request
    const request = {
      model,
      updateMask,
    };

    // Run request
    const response = await aiplatformClient.updateModel(request);
    console.log(response);
  }

  updateModel();
  // [END aiplatform_v1_generated_ModelService_UpdateModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(updateMask, tensorboardRun) {
  // [START aiplatform_v1beta1_generated_TensorboardService_UpdateTensorboardRun_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Field mask is used to specify the fields to be overwritten in the
   *  TensorboardRun resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then all fields will be overwritten if new
   *  values are specified.
   */
  // const updateMask = {}
  /**
   *  Required. The TensorboardRun's `name` field is used to identify the TensorboardRun to
   *  be updated. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
   */
  // const tensorboardRun = {}

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callUpdateTensorboardRun() {
    // Construct request
    const request = {
      updateMask,
      tensorboardRun,
    };

    // Run request
    const response = await aiplatformClient.updateTensorboardRun(request);
    console.log(response);
  }

  callUpdateTensorboardRun();
  // [END aiplatform_v1beta1_generated_TensorboardService_UpdateTensorboardRun_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

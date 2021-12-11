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

function main(parent, tensorboardExperimentId) {
  // [START aiplatform_v1_generated_TensorboardService_CreateTensorboardExperiment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Tensorboard to create the TensorboardExperiment
   *  in. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}`
   */
  // const parent = 'abc123'
  /**
   *  The TensorboardExperiment to create.
   */
  // const tensorboardExperiment = {}
  /**
   *  Required. The ID to use for the Tensorboard experiment, which will become the final
   *  component of the Tensorboard experiment's resource name.
   *  This value should be 1-128 characters, and valid characters
   *  are /[a-z][0-9]-/.
   */
  // const tensorboardExperimentId = 'abc123'

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callCreateTensorboardExperiment() {
    // Construct request
    const request = {
      parent,
      tensorboardExperimentId,
    };

    // Run request
    const response = await aiplatformClient.createTensorboardExperiment(request);
    console.log(response);
  }

  callCreateTensorboardExperiment();
  // [END aiplatform_v1_generated_TensorboardService_CreateTensorboardExperiment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

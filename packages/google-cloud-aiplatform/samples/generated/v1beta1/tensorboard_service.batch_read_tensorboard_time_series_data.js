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

function main(tensorboard, timeSeries) {
  // [START aiplatform_v1beta1_generated_TensorboardService_BatchReadTensorboardTimeSeriesData_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Tensorboard containing TensorboardTimeSeries to
   *  read data from. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}`.
   *  The TensorboardTimeSeries referenced by time_series google.cloud.aiplatform.v1beta1.BatchReadTensorboardTimeSeriesDataRequest.time_series  must be sub
   *  resources of this Tensorboard.
   */
  // const tensorboard = 'abc123'
  /**
   *  Required. The resource names of the TensorboardTimeSeries to read data from. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
   */
  // const timeSeries = 'abc123'

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callBatchReadTensorboardTimeSeriesData() {
    // Construct request
    const request = {
      tensorboard,
      timeSeries,
    };

    // Run request
    const response = await aiplatformClient.batchReadTensorboardTimeSeriesData(request);
    console.log(response);
  }

  callBatchReadTensorboardTimeSeriesData();
  // [END aiplatform_v1beta1_generated_TensorboardService_BatchReadTensorboardTimeSeriesData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

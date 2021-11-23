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

function main(tensorboardRun, timeSeriesData) {
  // [START aiplatform_v1_generated_TensorboardService_WriteTensorboardRunData_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the TensorboardRun to write data to.
   *  Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
   */
  // const tensorboardRun = 'abc123'
  /**
   *  Required. The TensorboardTimeSeries data to write.
   *  Values with in a time series are indexed by their step value.
   *  Repeated writes to the same step will overwrite the existing value for that
   *  step.
   *  The upper limit of data points per write request is 5000.
   */
  // const timeSeriesData = 1234

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callWriteTensorboardRunData() {
    // Construct request
    const request = {
      tensorboardRun,
      timeSeriesData,
    };

    // Run request
    const response = await aiplatformClient.writeTensorboardRunData(request);
    console.log(response);
  }

  callWriteTensorboardRunData();
  // [END aiplatform_v1_generated_TensorboardService_WriteTensorboardRunData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

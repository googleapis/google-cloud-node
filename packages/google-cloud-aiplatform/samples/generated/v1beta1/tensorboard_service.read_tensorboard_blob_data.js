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

function main(timeSeries) {
  // [START aiplatform_read_tensorboard_blob_data_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the TensorboardTimeSeries to list Blobs.
   *  Format:
   *  'projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}'
   */
  // const timeSeries = 'abc123'
  /**
   *  IDs of the blobs to read.
   */
  // const blobIds = 'abc123'

  // Imports the Aiplatform library
  const {TensorboardServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function readTensorboardBlobData() {
    // Construct request
    const request = {
      timeSeries,
    };

    // Run request
    const stream = await aiplatformClient.readTensorboardBlobData(request);
    stream.on('data', response => {
      console.log(response);
    });
    stream.on('error', err => {
      throw err;
    });
    stream.on('end', () => {
      /* API call completed */
    });
  }

  readTensorboardBlobData();
  // [END aiplatform_read_tensorboard_blob_data_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

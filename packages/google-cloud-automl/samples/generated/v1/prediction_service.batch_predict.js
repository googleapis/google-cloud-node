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

function main(name, inputConfig, outputConfig) {
  // [START automl_v1_generated_PredictionService_BatchPredict_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the model requested to serve the batch prediction.
   */
  // const name = 'abc123'
  /**
   *  Required. The input configuration for batch prediction.
   */
  // const inputConfig = {}
  /**
   *  Required. The Configuration specifying where output predictions should
   *  be written.
   */
  // const outputConfig = {}
  /**
   *  Additional domain-specific parameters for the predictions, any string must
   *  be up to 25000 characters long.
   *  AutoML Natural Language Classification
   *  `score_threshold`
   *  : (float) A value from 0.0 to 1.0. When the model
   *    makes predictions for a text snippet, it will only produce results
   *    that have at least this confidence score. The default is 0.5.
   *  AutoML Vision Classification
   *  `score_threshold`
   *  : (float) A value from 0.0 to 1.0. When the model
   *    makes predictions for an image, it will only produce results that
   *    have at least this confidence score. The default is 0.5.
   *  AutoML Vision Object Detection
   *  `score_threshold`
   *  : (float) When Model detects objects on the image,
   *    it will only produce bounding boxes which have at least this
   *    confidence score. Value in 0 to 1 range, default is 0.5.
   *  `max_bounding_box_count`
   *  : (int64) The maximum number of bounding
   *    boxes returned per image. The default is 100, the
   *    number of bounding boxes returned might be limited by the server.
   *  AutoML Video Intelligence Classification
   *  `score_threshold`
   *  : (float) A value from 0.0 to 1.0. When the model
   *    makes predictions for a video, it will only produce results that
   *    have at least this confidence score. The default is 0.5.
   *  `segment_classification`
   *  : (boolean) Set to true to request
   *    segment-level classification. AutoML Video Intelligence returns
   *    labels and their confidence scores for the entire segment of the
   *    video that user specified in the request configuration.
   *    The default is true.
   *  `shot_classification`
   *  : (boolean) Set to true to request shot-level
   *    classification. AutoML Video Intelligence determines the boundaries
   *    for each camera shot in the entire segment of the video that user
   *    specified in the request configuration. AutoML Video Intelligence
   *    then returns labels and their confidence scores for each detected
   *    shot, along with the start and end time of the shot.
   *    The default is false.
   *    WARNING: Model evaluation is not done for this classification type,
   *    the quality of it depends on training data, but there are no metrics
   *    provided to describe that quality.
   *  `1s_interval_classification`
   *  : (boolean) Set to true to request
   *    classification for a video at one-second intervals. AutoML Video
   *    Intelligence returns labels and their confidence scores for each
   *    second of the entire segment of the video that user specified in the
   *    request configuration. The default is false.
   *    WARNING: Model evaluation is not done for this classification
   *    type, the quality of it depends on training data, but there are no
   *    metrics provided to describe that quality.
   *  AutoML Video Intelligence Object Tracking
   *  `score_threshold`
   *  : (float) When Model detects objects on video frames,
   *    it will only produce bounding boxes which have at least this
   *    confidence score. Value in 0 to 1 range, default is 0.5.
   *  `max_bounding_box_count`
   *  : (int64) The maximum number of bounding
   *    boxes returned per image. The default is 100, the
   *    number of bounding boxes returned might be limited by the server.
   *  `min_bounding_box_size`
   *  : (float) Only bounding boxes with shortest edge
   *    at least that long as a relative value of video frame size are
   *    returned. Value in 0 to 1 range. Default is 0.
   */
  // const params = 1234

  // Imports the Automl library
  const {PredictionServiceClient} = require('@google-cloud/automl').v1;

  // Instantiates a client
  const automlClient = new PredictionServiceClient();

  async function callBatchPredict() {
    // Construct request
    const request = {
      name,
      inputConfig,
      outputConfig,
    };

    // Run request
    const [operation] = await automlClient.batchPredict(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchPredict();
  // [END automl_v1_generated_PredictionService_BatchPredict_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

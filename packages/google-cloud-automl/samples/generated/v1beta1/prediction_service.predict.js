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

function main(name, payload) {
  // [START automl_v1beta1_generated_PredictionService_Predict_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the model requested to serve the prediction.
   */
  // const name = 'abc123'
  /**
   *  Required. Payload to perform a prediction on. The payload must match the
   *  problem type that the model was trained to solve.
   */
  // const payload = {}
  /**
   *  Additional domain-specific parameters, any string must be up to 25000
   *  characters long.
   *  *  For Image Classification:
   *     `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *      makes predictions for an image, it will only produce results that have
   *      at least this confidence score. The default is 0.5.
   *   *  For Image Object Detection:
   *     `score_threshold` - (float) When Model detects objects on the image,
   *         it will only produce bounding boxes which have at least this
   *         confidence score. Value in 0 to 1 range, default is 0.5.
   *     `max_bounding_box_count` - (int64) No more than this number of bounding
   *         boxes will be returned in the response. Default is 100, the
   *         requested value may be limited by server.
   *  *  For Tables:
   *     feature_imp<span>ortan</span>ce - (boolean) Whether feature importance
   *         should be populated in the returned TablesAnnotation.
   *         The default is false.
   */
  // const params = 1234

  // Imports the Automl library
  const {PredictionServiceClient} = require('@google-cloud/automl').v1beta1;

  // Instantiates a client
  const automlClient = new PredictionServiceClient();

  async function callPredict() {
    // Construct request
    const request = {
      name,
      payload,
    };

    // Run request
    const response = await automlClient.predict(request);
    console.log(response);
  }

  callPredict();
  // [END automl_v1beta1_generated_PredictionService_Predict_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Request message for
 * PredictionService.Predict.
 *
 * @property {string} name
 *   Name of the model requested to serve the prediction.
 *
 * @property {Object} payload
 *   Required. Payload to perform a prediction on. The payload must match the
 *   problem type that the model was trained to solve.
 *
 *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1.ExamplePayload}
 *
 * @property {Object.<string, string>} params
 *   Additional domain-specific parameters, any string must be up to 25000
 *   characters long.
 *
 * @typedef PredictRequest
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.PredictRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const PredictRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * PredictionService.Predict.
 *
 * @property {Object[]} payload
 *   Prediction result.
 *   Translation and Text Sentiment will return precisely one payload.
 *
 *   This object should have the same structure as [AnnotationPayload]{@link google.cloud.automl.v1.AnnotationPayload}
 *
 * @property {Object.<string, string>} metadata
 *   Additional domain-specific prediction response metadata.
 *
 * @typedef PredictResponse
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.PredictResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const PredictResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
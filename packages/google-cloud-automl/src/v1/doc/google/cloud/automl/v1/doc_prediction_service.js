// Copyright 2020 Google LLC
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
 *   *  For Image Classification:
 *
 *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
 *       makes predictions for an image, it will only produce results that have
 *       at least this confidence score. The default is 0.5.
 *
 *    *  For Image Object Detection:
 *      `score_threshold` - (float) When Model detects objects on the image,
 *          it will only produce bounding boxes which have at least this
 *          confidence score. Value in 0 to 1 range, default is 0.5.
 *      `max_bounding_box_count` - (int64) No more than this number of bounding
 *          boxes will be returned in the response. Default is 100, the
 *          requested value may be limited by server.
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
 * @property {Object} preprocessedInput
 *   The preprocessed example that AutoML actually makes prediction on.
 *   Empty if AutoML does not preprocess the input example.
 *   * For Text Extraction:
 *     If the input is a .pdf file, the OCR'ed text will be provided in
 *     document_text.
 *
 *   * For Text Classification:
 *     If the input is a .pdf file, the OCR'ed trucated text will be provided in
 *     document_text.
 *
 *   * For Text Sentiment:
 *     If the input is a .pdf file, the OCR'ed trucated text will be provided in
 *     document_text.
 *
 *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1.ExamplePayload}
 *
 * @property {Object.<string, string>} metadata
 *   Additional domain-specific prediction response metadata.
 *
 *   * For Image Object Detection:
 *    `max_bounding_box_count` - (int64) At most that many bounding boxes per
 *        image could have been returned.
 *
 *   * For Text Sentiment:
 *    `sentiment_score` - (float, deprecated) A value between -1 and 1,
 *        -1 maps to least positive sentiment, while 1 maps to the most positive
 *        one and the higher the score, the more positive the sentiment in the
 *        document is. Yet these values are relative to the training data, so
 *        e.g. if all data was positive then -1 will be also positive (though
 *        the least).
 *        The sentiment_score shouldn't be confused with "score" or "magnitude"
 *        from the previous Natural Language Sentiment Analysis API.
 *
 * @typedef PredictResponse
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.PredictResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const PredictResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * PredictionService.BatchPredict.
 *
 * @property {string} name
 *   Name of the model requested to serve the batch prediction.
 *
 * @property {Object} inputConfig
 *   Required. The input configuration for batch prediction.
 *
 *   This object should have the same structure as [BatchPredictInputConfig]{@link google.cloud.automl.v1.BatchPredictInputConfig}
 *
 * @property {Object} outputConfig
 *   Required. The Configuration specifying where output predictions should
 *   be written.
 *
 *   This object should have the same structure as [BatchPredictOutputConfig]{@link google.cloud.automl.v1.BatchPredictOutputConfig}
 *
 * @property {Object.<string, string>} params
 *   Additional domain-specific parameters for the predictions, any string must
 *   be up to 25000 characters long.
 *
 *   *  For Text Classification:
 *
 *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
 *           makes predictions for a text snippet, it will only produce results
 *           that have at least this confidence score. The default is 0.5.
 *
 *   *  For Image Classification:
 *
 *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
 *           makes predictions for an image, it will only produce results that
 *           have at least this confidence score. The default is 0.5.
 *
 *   *  For Image Object Detection:
 *
 *      `score_threshold` - (float) When Model detects objects on the image,
 *          it will only produce bounding boxes which have at least this
 *          confidence score. Value in 0 to 1 range, default is 0.5.
 *      `max_bounding_box_count` - (int64) No more than this number of bounding
 *          boxes will be produced per image. Default is 100, the
 *          requested value may be limited by server.
 *
 * @typedef BatchPredictRequest
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.BatchPredictRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const BatchPredictRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Result of the Batch Predict. This message is returned in
 * response of the operation returned
 * by the
 * PredictionService.BatchPredict.
 *
 * @property {Object.<string, string>} metadata
 *   Additional domain-specific prediction response metadata.
 *
 *   *  For Image Object Detection:
 *    `max_bounding_box_count` - (int64) At most that many bounding boxes per
 *        image could have been returned.
 *
 * @typedef BatchPredictResult
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.BatchPredictResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const BatchPredictResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
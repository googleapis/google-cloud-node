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
 * Request message for PredictionService.Predict.
 *
 * @property {string} name
 *   Required. Name of the model requested to serve the prediction.
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
 *   <h4>AutoML Vision Classification</h4>
 *
 *   `score_threshold`
 *   : (float) A value from 0.0 to 1.0. When the model
 *     makes predictions for an image, it will only produce results that have
 *     at least this confidence score. The default is 0.5.
 *
 *   <h4>AutoML Vision Object Detection</h4>
 *
 *   `score_threshold`
 *   : (float) When Model detects objects on the image,
 *     it will only produce bounding boxes which have at least this
 *     confidence score. Value in 0 to 1 range, default is 0.5.
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding
 *     boxes returned. The default is 100. The
 *     number of returned bounding boxes might be limited by the server.
 *
 *   <h4>AutoML Tables</h4>
 *
 *   `feature_importance`
 *   : (boolean) Whether
 *
 *   feature_importance
 *     is populated in the returned list of
 *     TablesAnnotation
 *     objects. The default is false.
 *
 * @typedef PredictRequest
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.PredictRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const PredictRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for PredictionService.Predict.
 *
 * @property {Object[]} payload
 *   Prediction result.
 *   AutoML Translation and AutoML Natural Language Sentiment Analysis
 *   return precisely one payload.
 *
 *   This object should have the same structure as [AnnotationPayload]{@link google.cloud.automl.v1.AnnotationPayload}
 *
 * @property {Object} preprocessedInput
 *   The preprocessed example that AutoML actually makes prediction on.
 *   Empty if AutoML does not preprocess the input example.
 *
 *   For AutoML Natural Language (Classification, Entity Extraction, and
 *   Sentiment Analysis), if the input is a document, the recognized text is
 *   returned in the
 *   document_text
 *   property.
 *
 *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1.ExamplePayload}
 *
 * @property {Object.<string, string>} metadata
 *   Additional domain-specific prediction response metadata.
 *
 *   <h4>AutoML Vision Object Detection</h4>
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding boxes to return per image.
 *
 *   <h4>AutoML Natural Language Sentiment Analysis</h4>
 *
 *   `sentiment_score`
 *   : (float, deprecated) A value between -1 and 1,
 *     -1 maps to least positive sentiment, while 1 maps to the most positive
 *     one and the higher the score, the more positive the sentiment in the
 *     document is. Yet these values are relative to the training data, so
 *     e.g. if all data was positive then -1 is also positive (though
 *     the least).
 *     `sentiment_score` is not the same as "score" and "magnitude"
 *     from Sentiment Analysis in the Natural Language API.
 *
 * @typedef PredictResponse
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.PredictResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const PredictResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for PredictionService.BatchPredict.
 *
 * @property {string} name
 *   Required. Name of the model requested to serve the batch prediction.
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
 *   <h4>AutoML Natural Language Classification</h4>
 *
 *   `score_threshold`
 *   : (float) A value from 0.0 to 1.0. When the model
 *     makes predictions for a text snippet, it will only produce results
 *     that have at least this confidence score. The default is 0.5.
 *
 *
 *   <h4>AutoML Vision Classification</h4>
 *
 *   `score_threshold`
 *   : (float) A value from 0.0 to 1.0. When the model
 *     makes predictions for an image, it will only produce results that
 *     have at least this confidence score. The default is 0.5.
 *
 *   <h4>AutoML Vision Object Detection</h4>
 *
 *   `score_threshold`
 *   : (float) When Model detects objects on the image,
 *     it will only produce bounding boxes which have at least this
 *     confidence score. Value in 0 to 1 range, default is 0.5.
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding
 *     boxes returned per image. The default is 100, the
 *     number of bounding boxes returned might be limited by the server.
 *   <h4>AutoML Video Intelligence Classification</h4>
 *
 *   `score_threshold`
 *   : (float) A value from 0.0 to 1.0. When the model
 *     makes predictions for a video, it will only produce results that
 *     have at least this confidence score. The default is 0.5.
 *
 *   `segment_classification`
 *   : (boolean) Set to true to request
 *     segment-level classification. AutoML Video Intelligence returns
 *     labels and their confidence scores for the entire segment of the
 *     video that user specified in the request configuration.
 *     The default is true.
 *
 *   `shot_classification`
 *   : (boolean) Set to true to request shot-level
 *     classification. AutoML Video Intelligence determines the boundaries
 *     for each camera shot in the entire segment of the video that user
 *     specified in the request configuration. AutoML Video Intelligence
 *     then returns labels and their confidence scores for each detected
 *     shot, along with the start and end time of the shot.
 *     The default is false.
 *
 *     WARNING: Model evaluation is not done for this classification type,
 *     the quality of it depends on training data, but there are no metrics
 *     provided to describe that quality.
 *
 *   `1s_interval_classification`
 *   : (boolean) Set to true to request
 *     classification for a video at one-second intervals. AutoML Video
 *     Intelligence returns labels and their confidence scores for each
 *     second of the entire segment of the video that user specified in the
 *     request configuration. The default is false.
 *
 *     WARNING: Model evaluation is not done for this classification
 *     type, the quality of it depends on training data, but there are no
 *     metrics provided to describe that quality.
 *
 *   <h4>AutoML Video Intelligence Object Tracking</h4>
 *
 *   `score_threshold`
 *   : (float) When Model detects objects on video frames,
 *     it will only produce bounding boxes which have at least this
 *     confidence score. Value in 0 to 1 range, default is 0.5.
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding
 *     boxes returned per image. The default is 100, the
 *     number of bounding boxes returned might be limited by the server.
 *
 *   `min_bounding_box_size`
 *   : (float) Only bounding boxes with shortest edge
 *     at least that long as a relative value of video frame size are
 *     returned. Value in 0 to 1 range. Default is 0.
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
 * by the PredictionService.BatchPredict.
 *
 * @property {Object.<string, string>} metadata
 *   Additional domain-specific prediction response metadata.
 *
 *   <h4>AutoML Vision Object Detection</h4>
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding boxes returned per image.
 *
 *   <h4>AutoML Video Intelligence Object Tracking</h4>
 *
 *   `max_bounding_box_count`
 *   : (int64) The maximum number of bounding boxes returned per frame.
 *
 * @typedef BatchPredictResult
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.BatchPredictResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/prediction_service.proto}
 */
const BatchPredictResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
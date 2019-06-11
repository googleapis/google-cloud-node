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
 * Contains annotation details specific to text sentiment.
 *
 * @property {number} sentiment
 *   Output only. The sentiment with the semantic, as given to the
 *   AutoMl.ImportData when populating the dataset from which the model used
 *   for the prediction had been trained.
 *   The sentiment values are between 0 and
 *   Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive),
 *   with higher value meaning more positive sentiment. They are completely
 *   relative, i.e. 0 means least positive sentiment and sentiment_max means
 *   the most positive from the sentiments present in the train data. Therefore
 *    e.g. if train data had only negative sentiment, then sentiment_max, would
 *   be still negative (although least negative).
 *   The sentiment shouldn't be confused with "score" or "magnitude"
 *   from the previous Natural Language Sentiment Analysis API.
 *
 * @typedef TextSentimentAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSentimentAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_sentiment.proto}
 */
const TextSentimentAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model evaluation metrics for text sentiment problems.
 *
 * @property {number} precision
 *   Output only. Precision.
 *
 * @property {number} recall
 *   Output only. Recall.
 *
 * @property {number} f1Score
 *   Output only. The harmonic mean of recall and precision.
 *
 * @property {number} meanAbsoluteError
 *   Output only. Mean absolute error. Only set for the overall model
 *   evaluation, not for evaluation of a single annotation spec.
 *
 * @property {number} meanSquaredError
 *   Output only. Mean squared error. Only set for the overall model
 *   evaluation, not for evaluation of a single annotation spec.
 *
 * @property {number} linearKappa
 *   Output only. Linear weighted kappa. Only set for the overall model
 *   evaluation, not for evaluation of a single annotation spec.
 *
 * @property {number} quadraticKappa
 *   Output only. Quadratic weighted kappa. Only set for the overall model
 *   evaluation, not for evaluation of a single annotation spec.
 *
 * @property {Object} confusionMatrix
 *   Output only. Confusion matrix of the evaluation.
 *   Only set for the overall model evaluation, not for evaluation of a single
 *   annotation spec.
 *
 *   This object should have the same structure as [ConfusionMatrix]{@link google.cloud.automl.v1beta1.ConfusionMatrix}
 *
 * @property {string[]} annotationSpecId
 *   Output only. The annotation spec ids used for this evaluation.
 *   Deprecated .
 *
 * @typedef TextSentimentEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_sentiment.proto}
 */
const TextSentimentEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
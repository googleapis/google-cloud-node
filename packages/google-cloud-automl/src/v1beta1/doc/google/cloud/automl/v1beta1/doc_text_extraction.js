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
 * Annotation for identifying spans of text.
 *
 * @property {Object} textSegment
 *   An entity annotation will set this, which is the part of the original
 *   text to which the annotation pertains.
 *
 *   This object should have the same structure as [TextSegment]{@link google.cloud.automl.v1beta1.TextSegment}
 *
 * @property {number} score
 *   Output only. A confidence estimate between 0.0 and 1.0. A higher value
 *   means greater confidence in correctness of the annotation.
 *
 * @typedef TextExtractionAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextExtractionAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_extraction.proto}
 */
const TextExtractionAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model evaluation metrics for text extraction problems.
 *
 * @property {number} auPrc
 *   Output only. The Area under precision recall curve metric.
 *
 * @property {Object[]} confidenceMetricsEntries
 *   Output only. Metrics that have confidence thresholds.
 *   Precision-recall curve can be derived from it.
 *
 *   This object should have the same structure as [ConfidenceMetricsEntry]{@link google.cloud.automl.v1beta1.ConfidenceMetricsEntry}
 *
 * @typedef TextExtractionEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextExtractionEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_extraction.proto}
 */
const TextExtractionEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Metrics for a single confidence threshold.
   *
   * @property {number} confidenceThreshold
   *   Output only. The confidence threshold value used to compute the metrics.
   *   Only annotations with score of at least this threshold are considered to
   *   be ones the model would return.
   *
   * @property {number} recall
   *   Output only. Recall under the given confidence threshold.
   *
   * @property {number} precision
   *   Output only. Precision under the given confidence threshold.
   *
   * @property {number} f1Score
   *   Output only. The harmonic mean of recall and precision.
   *
   * @typedef ConfidenceMetricsEntry
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.TextExtractionEvaluationMetrics.ConfidenceMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_extraction.proto}
   */
  ConfidenceMetricsEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};
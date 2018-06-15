// Copyright 2018 Google LLC
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
 * Contains annotation details specific to classification.
 *
 * @property {number} score
 *   Output only. A confidence estimate between 0.0 and 1.0. A higher value
 *   means greater confidence that the annotation is positive. If a user
 *   approves an annotation as negative or positive, the score value remains
 *   unchanged. If a user creates an annotation, the score is 0 for negative or
 *   1 for positive.
 *
 * @typedef ClassificationAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ClassificationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
 */
var ClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model evaluation metrics for classification problems.
 * Visible only to v1beta1
 *
 * @property {number} auPrc
 *   Output only. The Area under precision recall curve metric.
 *
 * @property {number} baseAuPrc
 *   Output only. The Area under precision recall curve metric based on priors.
 *
 * @property {Object[]} confidenceMetricsEntry
 *   Output only. Metrics that have confidence thresholds.
 *   Precision-recall curve can be derived from it.
 *
 *   This object should have the same structure as [ConfidenceMetricsEntry]{@link google.cloud.automl.v1beta1.ConfidenceMetricsEntry}
 *
 * @property {Object} confusionMatrix
 *   Output only. Confusion matrix of the evaluation.
 *   Only set for MULTICLASS classification problems where number
 *   of labels is no more than 10.
 *   Only set for model level evaluation, not for evaluation per label.
 *
 *   This object should have the same structure as [ConfusionMatrix]{@link google.cloud.automl.v1beta1.ConfusionMatrix}
 *
 * @property {string[]} annotationSpecId
 *   Output only. The annotation spec ids used for this evaluation.
 *
 * @typedef ClassificationEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ClassificationEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
 */
var ClassificationEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Metrics for a single confidence threshold.
   *
   * @property {number} confidenceThreshold
   *   Output only. The confidence threshold value used to compute the metrics.
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
   * @property {number} recallAt1
   *   Output only. The recall when only considering the label that has the
   *   highest prediction score and not below the confidence threshold for each
   *   example.
   *
   * @property {number} precisionAt1
   *   Output only. The precision when only considering the label that has the
   *   highest predictionscore and not below the confidence threshold for each
   *   example.
   *
   * @property {number} f1ScoreAt1
   *   Output only. The harmonic mean of recall_at1 and precision_at1.
   *
   * @typedef ConfidenceMetricsEntry
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfidenceMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
   */
  ConfidenceMetricsEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Confusion matrix of the model running the classification.
   *
   * @property {string[]} annotationSpecId
   *   Output only. IDs of the annotation specs used in the confusion matrix.
   *
   * @property {Object[]} row
   *   Output only. Rows in the confusion matrix. The number of rows is equal to
   *   the size of `annotation_spec_id`.
   *   `row[i].value[j]` is the number of examples that have ground truth of the
   *   `annotation_spec_id[i]` and are predicted as `annotation_spec_id[j]` by
   *   the model being evaluated.
   *
   *   This object should have the same structure as [Row]{@link google.cloud.automl.v1beta1.Row}
   *
   * @typedef ConfusionMatrix
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
   */
  ConfusionMatrix: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Output only. A row in the confusion matrix.
     *
     * @property {number[]} exampleCount
     *   Output only. Value of the specific cell in the confusion matrix.
     *   The number of values each row is equal to the size of
     *   annotatin_spec_id.
     *
     * @typedef Row
     * @memberof google.cloud.automl.v1beta1
     * @see [google.cloud.automl.v1beta1.ClassificationEvaluationMetrics.ConfusionMatrix.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
     */
    Row: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  }
};

/**
 * Type of the classification problem.
 *
 * @enum {number}
 * @memberof google.cloud.automl.v1beta1
 */
var ClassificationType = {

  /**
   * Should not be used, an un-set enum has this value by default.
   */
  CLASSIFICATION_TYPE_UNSPECIFIED: 0,

  /**
   * At most one label is allowed per example.
   */
  MULTICLASS: 1,

  /**
   * Multiple labels are allowed for one example.
   */
  MULTILABEL: 2
};
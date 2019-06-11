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
const ClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains annotation details specific to video classification.
 *
 * @property {string} type
 *   Output only. Expresses the type of video classification. Possible values:
 *
 *   *  `segment` - Classification done on a specified by user
 *          time segment of a video. AnnotationSpec is answered to be present
 *          in that time segment, if it is present in any part of it. The video
 *          ML model evaluations are done only for this type of classification.
 *
 *   *  `shot`- Shot-level classification.
 *          AutoML Video Intelligence determines the boundaries
 *          for each camera shot in the entire segment of the video that user
 *          specified in the request configuration. AutoML Video Intelligence
 *          then returns labels and their confidence scores for each detected
 *          shot, along with the start and end time of the shot.
 *          WARNING: Model evaluation is not done for this classification type,
 *          the quality of it depends on training data, but there are no
 *          metrics provided to describe that quality.
 *
 *   *  `1s_interval` - AutoML Video Intelligence returns labels and their
 *          confidence scores for each second of the entire segment of the video
 *          that user specified in the request configuration.
 *          WARNING: Model evaluation is not done for this classification type,
 *          the quality of it depends on training data, but there are no
 *          metrics provided to describe that quality.
 *
 * @property {Object} classificationAnnotation
 *   Output only . The classification details of this annotation.
 *
 *   This object should have the same structure as [ClassificationAnnotation]{@link google.cloud.automl.v1beta1.ClassificationAnnotation}
 *
 * @property {Object} timeSegment
 *   Output only . The time segment of the video to which the
 *   annotation applies.
 *
 *   This object should have the same structure as [TimeSegment]{@link google.cloud.automl.v1beta1.TimeSegment}
 *
 * @typedef VideoClassificationAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.VideoClassificationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/classification.proto}
 */
const VideoClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model evaluation metrics for classification problems.
 * Note: For Video Classification this metrics only describe quality of the
 * Video Classification predictions of "segment_classification" type.
 *
 * @property {number} auPrc
 *   Output only. The Area Under Precision-Recall Curve metric. Micro-averaged
 *   for the overall evaluation.
 *
 * @property {number} baseAuPrc
 *   Output only. The Area Under Precision-Recall Curve metric based on priors.
 *   Micro-averaged for the overall evaluation.
 *   Deprecated.
 *
 * @property {number} auRoc
 *   Output only. The Area Under Receiver Operating Characteristic curve metric.
 *   Micro-averaged for the overall evaluation.
 *
 * @property {number} logLoss
 *   Output only. The Log Loss metric.
 *
 * @property {Object[]} confidenceMetricsEntry
 *   Output only. Metrics for each confidence_threshold in
 *   0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and
 *   position_threshold = INT32_MAX_VALUE.
 *   ROC and precision-recall curves, and other aggregated metrics are derived
 *   from them. The confidence metrics entries may also be supplied for
 *   additional values of position_threshold, but from these no aggregated
 *   metrics are computed.
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
const ClassificationEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Metrics for a single confidence threshold.
   *
   * @property {number} confidenceThreshold
   *   Output only. Metrics are computed with an assumption that the model
   *   never returns predictions with score lower than this value.
   *
   * @property {number} positionThreshold
   *   Output only. Metrics are computed with an assumption that the model
   *   always returns at most this many predictions (ordered by their score,
   *   descendingly), but they all still need to meet the confidence_threshold.
   *
   * @property {number} recall
   *   Output only. Recall (True Positive Rate) for the given confidence
   *   threshold.
   *
   * @property {number} precision
   *   Output only. Precision for the given confidence threshold.
   *
   * @property {number} falsePositiveRate
   *   Output only. False Positive Rate for the given confidence threshold.
   *
   * @property {number} f1Score
   *   Output only. The harmonic mean of recall and precision.
   *
   * @property {number} recallAt1
   *   Output only. The Recall (True Positive Rate) when only considering the
   *   label that has the highest prediction score and not below the confidence
   *   threshold for each example.
   *
   * @property {number} precisionAt1
   *   Output only. The precision when only considering the label that has the
   *   highest prediction score and not below the confidence threshold for each
   *   example.
   *
   * @property {number} falsePositiveRateAt1
   *   Output only. The False Positive Rate when only considering the label that
   *   has the highest prediction score and not below the confidence threshold
   *   for each example.
   *
   * @property {number} f1ScoreAt1
   *   Output only. The harmonic mean of recall_at1 and precision_at1.
   *
   * @property {number} truePositiveCount
   *   Output only. The number of model created labels that match a ground truth
   *   label.
   *
   * @property {number} falsePositiveCount
   *   Output only. The number of model created labels that do not match a
   *   ground truth label.
   *
   * @property {number} falseNegativeCount
   *   Output only. The number of ground truth labels that are not matched
   *   by a model created label.
   *
   * @property {number} trueNegativeCount
   *   Output only. The number of labels that were not created by the model,
   *   but if they would, they would not match a ground truth label.
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
   *   For Tables CLASSIFICATION
   *
   *   prediction_type
   *   only list of annotation_spec_display_name-s is populated.
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
     *   The number of values each row has (i.e. the length of the row) is equal
     *   to the length of the `annotation_spec_id` field or, if that one is not
     *   populated, length of the display_name field.
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
const ClassificationType = {

  /**
   * An un-set value of this enum.
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
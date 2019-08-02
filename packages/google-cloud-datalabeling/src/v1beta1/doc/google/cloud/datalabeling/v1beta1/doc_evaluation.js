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
 * Describes an evaluation between 2 annotated datasets. Created by an
 * evaluation plan.
 *
 * @property {string} name
 *   Resource name of an evaluation.
 *   Format:
 *   'projects/{project_id}/datasets/{dataset_id}/evaluations/{evaluation_id}'
 *
 * @property {Object} config
 *   Options used in evaluation plan for creating the evaluation.
 *
 *   This object should have the same structure as [EvaluationConfig]{@link google.cloud.datalabeling.v1beta1.EvaluationConfig}
 *
 * @property {Object} evaluationJobRunTime
 *   Output only. Timestamp when the evaluation plan triggered this evaluation
 *   flow.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} createTime
 *   Output only. Timestamp when this model evaluation was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} evaluationMetrics
 *   Output only. Metrics of the evaluation.
 *
 *   This object should have the same structure as [EvaluationMetrics]{@link google.cloud.datalabeling.v1beta1.EvaluationMetrics}
 *
 * @property {number} annotationType
 *   Type of the annotation to compute metrics for in the groundtruth and
 *   annotation labeled dataset. Required for creation.
 *
 *   The number should be among the values of [AnnotationType]{@link google.cloud.datalabeling.v1beta1.AnnotationType}
 *
 * @property {number} evaluatedItemCount
 *   Output only. Count of items in groundtruth dataset included in this
 *   evaluation. Will be unset if annotation type is not applicable.
 *
 * @typedef Evaluation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Evaluation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const Evaluation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} boundingBoxEvaluationOptions
 *   This object should have the same structure as [BoundingBoxEvaluationOptions]{@link google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions}
 *
 * @typedef EvaluationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const EvaluationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options regarding evaluation between bounding boxes.
 *
 * @property {number} iouThreshold
 *   Minimize IoU required to consider 2 bounding boxes are matched.
 *
 * @typedef BoundingBoxEvaluationOptions
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.BoundingBoxEvaluationOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const BoundingBoxEvaluationOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} classificationMetrics
 *   This object should have the same structure as [ClassificationMetrics]{@link google.cloud.datalabeling.v1beta1.ClassificationMetrics}
 *
 * @property {Object} objectDetectionMetrics
 *   This object should have the same structure as [ObjectDetectionMetrics]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics}
 *
 * @typedef EvaluationMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const EvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} prCurve
 *   Precision-recall curve.
 *
 *   This object should have the same structure as [PrCurve]{@link google.cloud.datalabeling.v1beta1.PrCurve}
 *
 * @property {Object} confusionMatrix
 *   This object should have the same structure as [ConfusionMatrix]{@link google.cloud.datalabeling.v1beta1.ConfusionMatrix}
 *
 * @typedef ClassificationMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ClassificationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ClassificationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} prCurve
 *   Precision-recall curve.
 *
 *   This object should have the same structure as [PrCurve]{@link google.cloud.datalabeling.v1beta1.PrCurve}
 *
 * @typedef ObjectDetectionMetrics
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ObjectDetectionMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ObjectDetectionMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} annotationSpec
 *   PR curve against which annotation spec. Could be empty.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @property {number} areaUnderCurve
 *   Area under precision recall curve.
 *
 * @property {Object[]} confidenceMetricsEntries
 *   entries to draw PR graph.
 *
 *   This object should have the same structure as [ConfidenceMetricsEntry]{@link google.cloud.datalabeling.v1beta1.ConfidenceMetricsEntry}
 *
 * @property {number} meanAveragePrecision
 *   mean average prcision of this curve.
 *
 * @typedef PrCurve
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.PrCurve definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const PrCurve = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {number} confidenceThreshold
   *   Threshold used for this entry, for example, IoU threshold for bounding
   *   box problem, or detection threshold for classification.
   *
   * @property {number} recall
   *   Recall value.
   *
   * @property {number} precision
   *   Precision value.
   *
   * @property {number} f1Score
   *   Harmonic mean of recall and precision.
   *
   * @property {number} recallAt1
   *   Recall value for entries with label that has highest score.
   *
   * @property {number} precisionAt1
   *   Precision value for entries with label that has highest score.
   *
   * @property {number} f1ScoreAt1
   *   The harmonic mean of
   *   recall_at1
   *   and
   *   precision_at1.
   *
   * @property {number} recallAt5
   *   Recall value for entries with label that has highest 5 scores.
   *
   * @property {number} precisionAt5
   *   Precision value for entries with label that has highest 5 scores.
   *
   * @property {number} f1ScoreAt5
   *   The harmonic mean of
   *   recall_at5
   *   and
   *   precision_at5.
   *
   * @typedef ConfidenceMetricsEntry
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.PrCurve.ConfidenceMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  ConfidenceMetricsEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Confusion matrix of the model running the classification. Not applicable
 * when label filtering is specified in evaluation option.
 *
 * @property {Object[]} row
 *   This object should have the same structure as [Row]{@link google.cloud.datalabeling.v1beta1.Row}
 *
 * @typedef ConfusionMatrix
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
 */
const ConfusionMatrix = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object} annotationSpec
   *   The predicted annotation spec.
   *
   *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
   *
   * @property {number} itemCount
   *   Number of items being predicted as this label.
   *
   * @typedef ConfusionMatrixEntry
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix.ConfusionMatrixEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  ConfusionMatrixEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A row in the confusion matrix.
   *
   * @property {Object} annotationSpec
   *   the original annotation spec of this row.
   *
   *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
   *
   * @property {Object[]} entries
   *   Info describing predicted label distribution.
   *
   *   This object should have the same structure as [ConfusionMatrixEntry]{@link google.cloud.datalabeling.v1beta1.ConfusionMatrixEntry}
   *
   * @typedef Row
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.ConfusionMatrix.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation.proto}
   */
  Row: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};
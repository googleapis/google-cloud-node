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
 * Annotation details for image object detection.
 *
 * @property {Object} boundingBox
 *   Output only.
 *   The rectangle representing the object location.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.automl.v1beta1.BoundingPoly}
 *
 * @property {number} score
 *   Output only.
 *   The confidence that this annotation is positive for the parent example,
 *   value in [0, 1], higher means higher positivity confidence.
 *
 * @typedef ImageObjectDetectionAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageObjectDetectionAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
 */
const ImageObjectDetectionAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation details for video object tracking.
 *
 * @property {string} instanceId
 *   Optional.
 *   The instance of the object, expressed as a positive integer. Used to tell
 *   apart objects of the same type (i.e. AnnotationSpec) when multiple are
 *   present on a single example.
 *   NOTE: Instance ID prediction quality is not a part of model evaluation and
 *   is done as best effort. Especially in cases when an entity goes
 *   off-screen for a longer time (minutes), when it comes back it may be given
 *   a new instance ID.
 *
 * @property {Object} timeOffset
 *   Required. A time (frame) of a video to which this annotation pertains.
 *   Represented as the duration since the video's start.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} boundingBox
 *   Required. The rectangle representing the object location on the frame (i.e.
 *   at the time_offset of the video).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.automl.v1beta1.BoundingPoly}
 *
 * @property {number} score
 *   Output only.
 *   The confidence that this annotation is positive for the video at
 *   the time_offset, value in [0, 1], higher means higher positivity
 *   confidence. For annotations created by the user the score is 1. When
 *   user approves an annotation, the original float score is kept (and not
 *   changed to 1).
 *
 * @typedef VideoObjectTrackingAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.VideoObjectTrackingAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
 */
const VideoObjectTrackingAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Bounding box matching model metrics for a single intersection-over-union
 * threshold and multiple label match confidence thresholds.
 *
 * @property {number} iouThreshold
 *   Output only. The intersection-over-union threshold value used to compute
 *   this metrics entry.
 *
 * @property {number} meanAveragePrecision
 *   Output only. The mean average precision, most often close to au_prc.
 *
 * @property {Object[]} confidenceMetricsEntries
 *   Output only. Metrics for each label-match confidence_threshold from
 *   0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is
 *   derived from them.
 *
 *   This object should have the same structure as [ConfidenceMetricsEntry]{@link google.cloud.automl.v1beta1.ConfidenceMetricsEntry}
 *
 * @typedef BoundingBoxMetricsEntry
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.BoundingBoxMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
 */
const BoundingBoxMetricsEntry = {
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
   * @typedef ConfidenceMetricsEntry
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.BoundingBoxMetricsEntry.ConfidenceMetricsEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
   */
  ConfidenceMetricsEntry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Model evaluation metrics for image object detection problems.
 * Evaluates prediction quality of labeled bounding boxes.
 *
 * @property {number} evaluatedBoundingBoxCount
 *   Output only. The total number of bounding boxes (i.e. summed over all
 *   images) the ground truth used to create this evaluation had.
 *
 * @property {Object[]} boundingBoxMetricsEntries
 *   Output only. The bounding boxes match metrics for each
 *   Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
 *   and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
 *   pair.
 *
 *   This object should have the same structure as [BoundingBoxMetricsEntry]{@link google.cloud.automl.v1beta1.BoundingBoxMetricsEntry}
 *
 * @property {number} boundingBoxMeanAveragePrecision
 *   Output only. The single metric for bounding boxes evaluation:
 *   the mean_average_precision averaged over all bounding_box_metrics_entries.
 *
 * @typedef ImageObjectDetectionEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageObjectDetectionEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
 */
const ImageObjectDetectionEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model evaluation metrics for video object tracking problems.
 * Evaluates prediction quality of both labeled bounding boxes and labeled
 * tracks (i.e. series of bounding boxes sharing same label and instance ID).
 *
 * @property {number} evaluatedFrameCount
 *   Output only. The number of video frames used to create this evaluation.
 *
 * @property {number} evaluatedBoundingBoxCount
 *   Output only. The total number of bounding boxes (i.e. summed over all
 *   frames) the ground truth used to create this evaluation had.
 *
 * @property {Object[]} boundingBoxMetricsEntries
 *   Output only. The bounding boxes match metrics for each
 *   Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
 *   and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99
 *   pair.
 *
 *   This object should have the same structure as [BoundingBoxMetricsEntry]{@link google.cloud.automl.v1beta1.BoundingBoxMetricsEntry}
 *
 * @property {number} boundingBoxMeanAveragePrecision
 *   Output only. The single metric for bounding boxes evaluation:
 *   the mean_average_precision averaged over all bounding_box_metrics_entries.
 *
 * @typedef VideoObjectTrackingEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.VideoObjectTrackingEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/detection.proto}
 */
const VideoObjectTrackingEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
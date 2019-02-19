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
 * Configuration for how human labeling task should be done.
 *
 * @property {string} instruction
 *   Required except for LabelAudio case. Instruction resource name.
 *
 * @property {string} annotatedDatasetDisplayName
 *   Required. A human-readable name for AnnotatedDataset defined by
 *   users. Maximum of 64 characters
 *   .
 *
 * @property {string} annotatedDatasetDescription
 *   Optional. A human-readable description for AnnotatedDataset.
 *   The description can be up to 10000 characters long.
 *
 * @property {string} labelGroup
 *   Optional. A human-readable label used to logically group labeling tasks.
 *   This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.
 *
 * @property {string} languageCode
 *   Optional. The Language of this question, as a
 *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt).
 *   Default value is en-US.
 *   Only need to set this when task is language related. For example, French
 *   text classification or Chinese audio transcription.
 *
 * @property {number} replicaCount
 *   Optional. Replication of questions. Each question will be sent to up to
 *   this number of contributors to label. Aggregated answers will be returned.
 *   Default is set to 1.
 *   For image related labeling, valid values are 1, 3, 5.
 *
 * @property {Object} questionDuration
 *   Optional. Maximum duration for contributors to answer a question. Default
 *   is 1800 seconds.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {string[]} contributorEmails
 *   Optional. If you want your own labeling contributors to manage and work on
 *   this labeling request, you can set these contributors here. We will give
 *   them access to the question types in crowdcompute. Note that these
 *   emails must be registered in crowdcompute worker UI:
 *   https://crowd-compute.appspot.com/
 *
 * @typedef HumanAnnotationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.HumanAnnotationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const HumanAnnotationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for image classification human labeling task.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @property {boolean} allowMultiLabel
 *   Optional. If allow_multi_label is true, contributors are able to choose
 *   multiple labels for one image.
 *
 * @property {number} answerAggregationType
 *   Optional. The type of how to aggregate answers.
 *
 *   The number should be among the values of [StringAggregationType]{@link google.cloud.datalabeling.v1beta1.StringAggregationType}
 *
 * @typedef ImageClassificationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImageClassificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const ImageClassificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for image bounding poly (and bounding box) human labeling task.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @property {string} instructionMessage
 *   Optional. Instruction message showed on contributors UI.
 *
 * @typedef BoundingPolyConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.BoundingPolyConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const BoundingPolyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for image polyline human labeling task.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @property {string} instructionMessage
 *   Optional. Instruction message showed on contributors UI.
 *
 * @typedef PolylineConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.PolylineConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const PolylineConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for image segmentation
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name. format:
 *   projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
 *
 * @property {string} instructionMessage
 *   Instruction message showed on labelers UI.
 *
 * @typedef SegmentationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SegmentationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const SegmentationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for video classification human labeling task.
 * Currently two types of video classification are supported:
 * 1. Assign labels on the entire video.
 * 2. Split the video into multiple video clips based on camera shot, and
 * assign labels on each video clip.
 *
 * @property {Object[]} annotationSpecSetConfigs
 *   Required. The list of annotation spec set configs.
 *   Since watching a video clip takes much longer time than an image, we
 *   support label with multiple AnnotationSpecSet at the same time. Labels
 *   in each AnnotationSpecSet will be shown in a group to contributors.
 *   Contributors can select one or more (depending on whether to allow multi
 *   label) from each group.
 *
 *   This object should have the same structure as [AnnotationSpecSetConfig]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSetConfig}
 *
 * @property {boolean} applyShotDetection
 *   Optional. Option to apply shot detection on the video.
 *
 * @typedef VideoClassificationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoClassificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const VideoClassificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Annotation spec set with the setting of allowing multi labels or not.
   *
   * @property {string} annotationSpecSet
   *   Required. Annotation spec set resource name.
   *
   * @property {boolean} allowMultiLabel
   *   Optional. If allow_multi_label is true, contributors are able to
   *   choose multiple labels from one annotation spec set.
   *
   * @typedef AnnotationSpecSetConfig
   * @memberof google.cloud.datalabeling.v1beta1
   * @see [google.cloud.datalabeling.v1beta1.VideoClassificationConfig.AnnotationSpecSetConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
   */
  AnnotationSpecSetConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Config for video object detection human labeling task.
 * Object detection will be conducted on the images extracted from the video,
 * and those objects will be labeled with bounding boxes.
 * User need to specify the number of images to be extracted per second as the
 * extraction frame rate.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @property {string} instructionMessage
 *   Optional. Instruction message showed on labelers UI.
 *
 * @property {number} extractionFrameRate
 *   Required. Number of frames per second to be extracted from the video.
 *
 * @typedef ObjectDetectionConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ObjectDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const ObjectDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for video object tracking human labeling task.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @typedef ObjectTrackingConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ObjectTrackingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const ObjectTrackingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for video event human labeling task.
 *
 * @property {string[]} annotationSpecSets
 *   Required. The list of annotation spec set resource name. Similar to video
 *   classification, we support selecting event from multiple AnnotationSpecSet
 *   at the same time.
 *
 * @typedef EventConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EventConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const EventConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for text classification human labeling task.
 *
 * @property {boolean} allowMultiLabel
 *   Optional. If allow_multi_label is true, contributors are able to choose
 *   multiple labels for one text segment.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @property {Object} sentimentConfig
 *   Optional. Configs for sentiment selection.
 *
 *   This object should have the same structure as [SentimentConfig]{@link google.cloud.datalabeling.v1beta1.SentimentConfig}
 *
 * @typedef TextClassificationConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TextClassificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const TextClassificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for setting up sentiments.
 *
 * @property {boolean} enableLabelSentimentSelection
 *   If set to true, contributors will have the option to select sentiment of
 *   the label they selected, to mark it as negative or positive label. Default
 *   is false.
 *
 * @typedef SentimentConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.SentimentConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const SentimentConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for text entity extraction human labeling task.
 *
 * @property {string} annotationSpecSet
 *   Required. Annotation spec set resource name.
 *
 * @typedef TextEntityExtractionConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/human_annotation_config.proto}
 */
const TextEntityExtractionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @enum {number}
 * @memberof google.cloud.datalabeling.v1beta1
 */
const StringAggregationType = {
  STRING_AGGREGATION_TYPE_UNSPECIFIED: 0,

  /**
   * Majority vote to aggregate answers.
   */
  MAJORITY_VOTE: 1,

  /**
   * Unanimous answers will be adopted.
   */
  UNANIMOUS_VOTE: 2,

  /**
   * Preserve all answers by crowd compute.
   */
  NO_AGGREGATION: 3
};
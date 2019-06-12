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
 * Annotation for Example. Each example may have one or more annotations. For
 * example in image classification problem, each image might have one or more
 * labels. We call labels binded with this image an Annotation.
 *
 * @property {string} name
 *   Output only. Unique name of this annotation, format is:
 *
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id}
 *
 * @property {number} annotationSource
 *   Output only. The source of the annotation.
 *
 *   The number should be among the values of [AnnotationSource]{@link google.cloud.datalabeling.v1beta1.AnnotationSource}
 *
 * @property {Object} annotationValue
 *   Output only. This is the actual annotation value, e.g classification,
 *   bounding box values are stored here.
 *
 *   This object should have the same structure as [AnnotationValue]{@link google.cloud.datalabeling.v1beta1.AnnotationValue}
 *
 * @property {Object} annotationMetadata
 *   Output only. Annotation metadata, including information like votes
 *   for labels.
 *
 *   This object should have the same structure as [AnnotationMetadata]{@link google.cloud.datalabeling.v1beta1.AnnotationMetadata}
 *
 * @property {number} annotationSentiment
 *   Output only. Sentiment for this annotation.
 *
 *   The number should be among the values of [AnnotationSentiment]{@link google.cloud.datalabeling.v1beta1.AnnotationSentiment}
 *
 * @typedef Annotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Annotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const Annotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation value for an example.
 *
 * @property {Object} imageClassificationAnnotation
 *   Annotation value for image classification case.
 *
 *   This object should have the same structure as [ImageClassificationAnnotation]{@link google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation}
 *
 * @property {Object} imageBoundingPolyAnnotation
 *   Annotation value for image bounding box, oriented bounding box
 *   and polygon cases.
 *
 *   This object should have the same structure as [ImageBoundingPolyAnnotation]{@link google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation}
 *
 * @property {Object} imagePolylineAnnotation
 *   Annotation value for image polyline cases.
 *   Polyline here is different from BoundingPoly. It is formed by
 *   line segments connected to each other but not closed form(Bounding Poly).
 *   The line segments can cross each other.
 *
 *   This object should have the same structure as [ImagePolylineAnnotation]{@link google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation}
 *
 * @property {Object} imageSegmentationAnnotation
 *   Annotation value for image segmentation.
 *
 *   This object should have the same structure as [ImageSegmentationAnnotation]{@link google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation}
 *
 * @property {Object} textClassificationAnnotation
 *   Annotation value for text classification case.
 *
 *   This object should have the same structure as [TextClassificationAnnotation]{@link google.cloud.datalabeling.v1beta1.TextClassificationAnnotation}
 *
 * @property {Object} videoClassificationAnnotation
 *   Annotation value for video classification case.
 *
 *   This object should have the same structure as [VideoClassificationAnnotation]{@link google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation}
 *
 * @property {Object} videoObjectTrackingAnnotation
 *   Annotation value for video object detection and tracking case.
 *
 *   This object should have the same structure as [VideoObjectTrackingAnnotation]{@link google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation}
 *
 * @property {Object} videoEventAnnotation
 *   Annotation value for video event case.
 *
 *   This object should have the same structure as [VideoEventAnnotation]{@link google.cloud.datalabeling.v1beta1.VideoEventAnnotation}
 *
 * @property {Object} audioRecognitionAnnotation
 *   Annotation value for speech audio recognition case.
 *
 *   This object should have the same structure as [AudioRecognitionAnnotation]{@link google.cloud.datalabeling.v1beta1.AudioRecognitionAnnotation}
 *
 * @typedef AnnotationValue
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotationValue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const AnnotationValue = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Image classification annotation definition.
 *
 * @property {Object} annotationSpec
 *   Label of image.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @typedef ImageClassificationAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImageClassificationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const ImageClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A vertex represents a 2D point in the image.
 * NOTE: the vertex coordinates are in the same scale as the original image.
 *
 * @property {number} x
 *   X coordinate.
 *
 * @property {number} y
 *   Y coordinate.
 *
 * @typedef Vertex
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Vertex definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const Vertex = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A vertex represents a 2D point in the image.
 * NOTE: the normalized vertex coordinates are relative to the original image
 * and range from 0 to 1.
 *
 * @property {number} x
 *   X coordinate.
 *
 * @property {number} y
 *   Y coordinate.
 *
 * @typedef NormalizedVertex
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.NormalizedVertex definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const NormalizedVertex = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A bounding polygon in the image.
 *
 * @property {Object[]} vertices
 *   The bounding polygon vertices.
 *
 *   This object should have the same structure as [Vertex]{@link google.cloud.datalabeling.v1beta1.Vertex}
 *
 * @typedef BoundingPoly
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.BoundingPoly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const BoundingPoly = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Normalized bounding polygon.
 *
 * @property {Object[]} normalizedVertices
 *   The bounding polygon normalized vertices.
 *
 *   This object should have the same structure as [NormalizedVertex]{@link google.cloud.datalabeling.v1beta1.NormalizedVertex}
 *
 * @typedef NormalizedBoundingPoly
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const NormalizedBoundingPoly = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Image bounding poly annotation. It represents a polygon including
 * bounding box in the image.
 *
 * @property {Object} boundingPoly
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.datalabeling.v1beta1.BoundingPoly}
 *
 * @property {Object} normalizedBoundingPoly
 *   This object should have the same structure as [NormalizedBoundingPoly]{@link google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly}
 *
 * @property {Object} annotationSpec
 *   Label of object in this bounding polygon.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @typedef ImageBoundingPolyAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImageBoundingPolyAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const ImageBoundingPolyAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A line with multiple line segments.
 *
 * @property {Object[]} vertices
 *   The polyline vertices.
 *
 *   This object should have the same structure as [Vertex]{@link google.cloud.datalabeling.v1beta1.Vertex}
 *
 * @typedef Polyline
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Polyline definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const Polyline = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Normalized polyline.
 *
 * @property {Object[]} normalizedVertices
 *   The normalized polyline vertices.
 *
 *   This object should have the same structure as [NormalizedVertex]{@link google.cloud.datalabeling.v1beta1.NormalizedVertex}
 *
 * @typedef NormalizedPolyline
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.NormalizedPolyline definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const NormalizedPolyline = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A polyline for the image annotation.
 *
 * @property {Object} polyline
 *   This object should have the same structure as [Polyline]{@link google.cloud.datalabeling.v1beta1.Polyline}
 *
 * @property {Object} normalizedPolyline
 *   This object should have the same structure as [NormalizedPolyline]{@link google.cloud.datalabeling.v1beta1.NormalizedPolyline}
 *
 * @property {Object} annotationSpec
 *   Label of this polyline.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @typedef ImagePolylineAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImagePolylineAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const ImagePolylineAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Image segmentation annotation.
 *
 * @property {Object.<string, Object>} annotationColors
 *   The mapping between rgb color and annotation spec. The key is the rgb
 *   color represented in format of rgb(0, 0, 0). The value is the
 *   AnnotationSpec.
 *
 * @property {string} mimeType
 *   Image format.
 *
 * @property {Buffer} imageBytes
 *   A byte string of a full image's color map.
 *
 * @typedef ImageSegmentationAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImageSegmentationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const ImageSegmentationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Text classification annotation.
 *
 * @property {Object} annotationSpec
 *   Label of the text.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @typedef TextClassificationAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TextClassificationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const TextClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A time period inside of an example that has a time dimension (e.g. video).
 *
 * @property {Object} startTimeOffset
 *   Start of the time segment (inclusive), represented as the duration since
 *   the example start.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endTimeOffset
 *   End of the time segment (exclusive), represented as the duration since the
 *   example start.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef TimeSegment
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TimeSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const TimeSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video classification annotation.
 *
 * @property {Object} timeSegment
 *   The time segment of the video to which the annotation applies.
 *
 *   This object should have the same structure as [TimeSegment]{@link google.cloud.datalabeling.v1beta1.TimeSegment}
 *
 * @property {Object} annotationSpec
 *   Label of the segment specified by time_segment.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @typedef VideoClassificationAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoClassificationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const VideoClassificationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation for object detection and tracking.
 *
 * @property {Object} boundingPoly
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.datalabeling.v1beta1.BoundingPoly}
 *
 * @property {Object} normalizedBoundingPoly
 *   This object should have the same structure as [NormalizedBoundingPoly]{@link google.cloud.datalabeling.v1beta1.NormalizedBoundingPoly}
 *
 * @property {Object} timeOffset
 *   The time offset of this frame relative to the beginning of the video.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef ObjectTrackingFrame
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ObjectTrackingFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const ObjectTrackingFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video object tracking annotation.
 *
 * @property {Object} annotationSpec
 *   Label of the object tracked in this annotation.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @property {Object} timeSegment
 *   The time segment of the video to which object tracking applies.
 *
 *   This object should have the same structure as [TimeSegment]{@link google.cloud.datalabeling.v1beta1.TimeSegment}
 *
 * @property {Object[]} objectTrackingFrames
 *   The list of frames where this object track appears.
 *
 *   This object should have the same structure as [ObjectTrackingFrame]{@link google.cloud.datalabeling.v1beta1.ObjectTrackingFrame}
 *
 * @typedef VideoObjectTrackingAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoObjectTrackingAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const VideoObjectTrackingAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video event annotation.
 *
 * @property {Object} annotationSpec
 *   Label of the event in this annotation.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @property {Object} timeSegment
 *   The time segment of the video to which the annotation applies.
 *
 *   This object should have the same structure as [TimeSegment]{@link google.cloud.datalabeling.v1beta1.TimeSegment}
 *
 * @typedef VideoEventAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoEventAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const VideoEventAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Speech audio recognition.
 *
 * @property {string} transcript
 *   Transcript text representing the words spoken.
 *
 * @property {Object} startOffset
 *   Start position in audio file that the transcription corresponds to.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endOffset
 *   End position in audio file that the transcription corresponds to.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef AudioRecognitionAnnotation
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AudioRecognitionAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const AudioRecognitionAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Additional information associated with the annotation.
 *
 * @property {Object} operatorMetadata
 *   Metadata related to human labeling.
 *
 *   This object should have the same structure as [OperatorMetadata]{@link google.cloud.datalabeling.v1beta1.OperatorMetadata}
 *
 * @typedef AnnotationMetadata
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const AnnotationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * General information useful for labels coming from contributors.
 *
 * @property {number} score
 *   Confidence score corresponding to a label. For examle, if 3 contributors
 *   have answered the question and 2 of them agree on the final label, the
 *   confidence score will be 0.67 (2/3).
 *
 * @property {number} totalVotes
 *   The total number of contributors that answer this question.
 *
 * @property {number} labelVotes
 *   The total number of contributors that choose this label.
 *
 * @property {string[]} comments
 *
 * @typedef OperatorMetadata
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.OperatorMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation.proto}
 */
const OperatorMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @enum {number}
 * @memberof google.cloud.datalabeling.v1beta1
 */
const AnnotationSentiment = {
  ANNOTATION_SENTIMENT_UNSPECIFIED: 0,

  /**
   * This annotation describes negatively about the data.
   */
  NEGATIVE: 1,

  /**
   * This label describes positively about the data.
   */
  POSITIVE: 2
};

/**
 * Specifies where is the answer from.
 *
 * @enum {number}
 * @memberof google.cloud.datalabeling.v1beta1
 */
const AnnotationSource = {
  ANNOTATION_SOURCE_UNSPECIFIED: 0,

  /**
   * Answer is provided by a human contributor.
   */
  OPERATOR: 3
};

/**
 * @enum {number}
 * @memberof google.cloud.datalabeling.v1beta1
 */
const AnnotationType = {
  ANNOTATION_TYPE_UNSPECIFIED: 0,

  /**
   * Classification annotations in an image.
   */
  IMAGE_CLASSIFICATION_ANNOTATION: 1,

  /**
   * Bounding box annotations in an image.
   */
  IMAGE_BOUNDING_BOX_ANNOTATION: 2,

  /**
   * Oriented bounding box. The box does not have to be parallel to horizontal
   * line.
   */
  IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION: 13,

  /**
   * Bounding poly annotations in an image.
   */
  IMAGE_BOUNDING_POLY_ANNOTATION: 10,

  /**
   * Polyline annotations in an image.
   */
  IMAGE_POLYLINE_ANNOTATION: 11,

  /**
   * Segmentation annotations in an image.
   */
  IMAGE_SEGMENTATION_ANNOTATION: 12,

  /**
   * Classification annotations in video shots.
   */
  VIDEO_SHOTS_CLASSIFICATION_ANNOTATION: 3,

  /**
   * Video object tracking annotation.
   */
  VIDEO_OBJECT_TRACKING_ANNOTATION: 4,

  /**
   * Video object detection annotation.
   */
  VIDEO_OBJECT_DETECTION_ANNOTATION: 5,

  /**
   * Video event annotation.
   */
  VIDEO_EVENT_ANNOTATION: 6,

  /**
   * Speech to text annotation.
   */
  AUDIO_TRANSCRIPTION_ANNOTATION: 7,

  /**
   * Classification for text.
   */
  TEXT_CLASSIFICATION_ANNOTATION: 8,

  /**
   * Entity extraction for text.
   */
  TEXT_ENTITY_EXTRACTION_ANNOTATION: 9
};
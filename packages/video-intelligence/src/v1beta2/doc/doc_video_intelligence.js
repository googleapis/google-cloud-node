/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * Video annotation request.
 *
 * @property {string} inputUri
 *   Input video location. Currently, only
 *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
 *   supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   {@link google.rpc.Code.INVALID_ARGUMENT}). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *   A video URI may include wildcards in `object-id`, and thus identify
 *   multiple videos. Supported wildcards: '*' to match 0 or more characters;
 *   '?' to match 1 character. If unset, the input video should be embedded
 *   in the request as `input_content`. If set, `input_content` should be unset.
 *
 * @property {string} inputContent
 *   The video data bytes. Encoding: base64. If unset, the input video(s)
 *   should be specified via `input_uri`. If set, `input_uri` should be unset.
 *
 * @property {number[]} features
 *   Requested video annotation features.
 *
 *   The number should be among the values of [Feature]{@link Feature}
 *
 * @property {Object} videoContext
 *   Additional video context and/or feature-specific parameters.
 *
 *   This object should have the same structure as [VideoContext]{@link VideoContext}
 *
 * @property {string} outputUri
 *   Optional location where the output (in JSON format) should be stored.
 *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
 *   URIs are supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   {@link google.rpc.Code.INVALID_ARGUMENT}). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *
 * @property {string} locationId
 *   Optional cloud region where annotation should take place. Supported cloud
 *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
 *   is specified, a region will be determined based on video file location.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.AnnotateVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var AnnotateVideoRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video context and/or feature-specific parameters.
 *
 * @property {Object[]} segments
 *   Video segments to annotate. The segments may overlap and are not required
 *   to be contiguous or span the whole video. If unspecified, each video
 *   is treated as a single segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @property {Object} labelDetectionConfig
 *   Config for LABEL_DETECTION.
 *
 *   This object should have the same structure as [LabelDetectionConfig]{@link LabelDetectionConfig}
 *
 * @property {Object} shotChangeDetectionConfig
 *   Config for SHOT_CHANGE_DETECTION.
 *
 *   This object should have the same structure as [ShotChangeDetectionConfig]{@link ShotChangeDetectionConfig}
 *
 * @property {Object} explicitContentDetectionConfig
 *   Config for EXPLICIT_CONTENT_DETECTION.
 *
 *   This object should have the same structure as [ExplicitContentDetectionConfig]{@link ExplicitContentDetectionConfig}
 *
 * @property {Object} faceDetectionConfig
 *   Config for FACE_DETECTION.
 *
 *   This object should have the same structure as [FaceDetectionConfig]{@link FaceDetectionConfig}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.VideoContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var VideoContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for LABEL_DETECTION.
 *
 * @property {number} labelDetectionMode
 *   What labels should be detected with LABEL_DETECTION, in addition to
 *   video-level labels or segment-level labels.
 *   If unspecified, defaults to `SHOT_MODE`.
 *
 *   The number should be among the values of [LabelDetectionMode]{@link LabelDetectionMode}
 *
 * @property {boolean} stationaryCamera
 *   Whether the video has been shot from a stationary (i.e. non-moving) camera.
 *   When set to true, might improve detection accuracy for moving objects.
 *   Should be used with `SHOT_AND_FRAME_MODE` enabled.
 *
 * @property {string} model
 *   Model to use for label detection.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.LabelDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var LabelDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for SHOT_CHANGE_DETECTION.
 *
 * @property {string} model
 *   Model to use for shot change detection.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.ShotChangeDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var ShotChangeDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for EXPLICIT_CONTENT_DETECTION.
 *
 * @property {string} model
 *   Model to use for explicit content detection.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.ExplicitContentDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var ExplicitContentDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for FACE_DETECTION.
 *
 * @property {string} model
 *   Model to use for face detection.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @property {boolean} includeBoundingBoxes
 *   Whether bounding boxes be included in the face annotation output.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.FaceDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var FaceDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment.
 *
 * @property {Object} startTimeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the start of the segment (inclusive).
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @property {Object} endTimeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the end of the segment (inclusive).
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.VideoSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var VideoSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment level annotation results for label detection.
 *
 * @property {Object} segment
 *   Video segment where a label was detected.
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.LabelSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var LabelSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for label detection.
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video, corresponding to the
 *   video frame for this location.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.LabelFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var LabelFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Detected entity from video analysis.
 *
 * @property {string} entityId
 *   Opaque entity ID. Some IDs may be available in
 *   [Google Knowledge Graph Search
 *   API](https://developers.google.com/knowledge-graph/).
 *
 * @property {string} description
 *   Textual description, e.g. `Fixed-gear bicycle`.
 *
 * @property {string} languageCode
 *   Language code for `description` in BCP-47 format.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var Entity = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Label annotation.
 *
 * @property {Object} entity
 *   Detected entity.
 *
 *   This object should have the same structure as [Entity]{@link Entity}
 *
 * @property {Object[]} categoryEntities
 *   Common categories for the detected entity.
 *   E.g. when the label is `Terrier` the category is likely `dog`. And in some
 *   cases there might be more than one categories e.g. `Terrier` could also be
 *   a `pet`.
 *
 *   This object should have the same structure as [Entity]{@link Entity}
 *
 * @property {Object[]} segments
 *   All video segments where a label was detected.
 *
 *   This object should have the same structure as [LabelSegment]{@link LabelSegment}
 *
 * @property {Object[]} frames
 *   All video frames where a label was detected.
 *
 *   This object should have the same structure as [LabelFrame]{@link LabelFrame}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.LabelAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var LabelAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for explicit content.
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video, corresponding to the
 *   video frame for this location.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @property {number} pornographyLikelihood
 *   Likelihood of the pornography content..
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.ExplicitContentFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var ExplicitContentFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Explicit content annotation (based on per-frame visual signals only).
 * If no explicit content has been detected in a frame, no annotations are
 * present for that frame.
 *
 * @property {Object[]} frames
 *   All video frames where explicit content was detected.
 *
 *   This object should have the same structure as [ExplicitContentFrame]{@link ExplicitContentFrame}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.ExplicitContentAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var ExplicitContentAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Normalized bounding box.
 * The normalized vertex coordinates are relative to the original image.
 * Range: [0, 1].
 *
 * @property {number} left
 *   Left X coordinate.
 *
 * @property {number} top
 *   Top Y coordinate.
 *
 * @property {number} right
 *   Right X coordinate.
 *
 * @property {number} bottom
 *   Bottom Y coordinate.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.NormalizedBoundingBox definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var NormalizedBoundingBox = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment level annotation results for face detection.
 *
 * @property {Object} segment
 *   Video segment where a face was detected.
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.FaceSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var FaceSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for face detection.
 *
 * @property {Object[]} normalizedBoundingBoxes
 *   Normalized Bounding boxes in a frame.
 *   There can be more than one boxes if the same face is detected in multiple
 *   locations within the current frame.
 *
 *   This object should have the same structure as [NormalizedBoundingBox]{@link NormalizedBoundingBox}
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the video frame for this location.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.FaceFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var FaceFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Face annotation.
 *
 * @property {string} thumbnail
 *   Thumbnail of a representative face view (in JPEG format). Encoding: base64.
 *
 * @property {Object[]} segments
 *   All video segments where a face was detected.
 *
 *   This object should have the same structure as [FaceSegment]{@link FaceSegment}
 *
 * @property {Object[]} frames
 *   All video frames where a face was detected.
 *
 *   This object should have the same structure as [FaceFrame]{@link FaceFrame}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.FaceAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var FaceAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation results for a single video.
 *
 * @property {string} inputUri
 *   Video file location in
 *   [Google Cloud Storage](https://cloud.google.com/storage/).
 *
 * @property {Object[]} segmentLabelAnnotations
 *   Label annotations on video level or user specified segment level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link LabelAnnotation}
 *
 * @property {Object[]} shotLabelAnnotations
 *   Label annotations on shot level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link LabelAnnotation}
 *
 * @property {Object[]} frameLabelAnnotations
 *   Label annotations on frame level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link LabelAnnotation}
 *
 * @property {Object[]} faceAnnotations
 *   Face annotations. There is exactly one element for each unique face.
 *
 *   This object should have the same structure as [FaceAnnotation]{@link FaceAnnotation}
 *
 * @property {Object[]} shotAnnotations
 *   Shot annotations. Each shot is represented as a video segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @property {Object} explicitAnnotation
 *   Explicit content annotation.
 *
 *   This object should have the same structure as [ExplicitContentAnnotation]{@link ExplicitContentAnnotation}
 *
 * @property {Object} error
 *   If set, indicates an error. Note that for a single `AnnotateVideoRequest`
 *   some videos may succeed and some may fail.
 *
 *   This object should have the same structure as [google.rpc.Status]{@link external:"google.rpc.Status"}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.VideoAnnotationResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var VideoAnnotationResults = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video annotation response. Included in the `response`
 * field of the `Operation` returned by the `GetOperation`
 * call of the `google::longrunning::Operations` service.
 *
 * @property {Object[]} annotationResults
 *   Annotation results for all videos specified in `AnnotateVideoRequest`.
 *
 *   This object should have the same structure as [VideoAnnotationResults]{@link VideoAnnotationResults}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.AnnotateVideoResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var AnnotateVideoResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation progress for a single video.
 *
 * @property {string} inputUri
 *   Video file location in
 *   [Google Cloud Storage](https://cloud.google.com/storage/).
 *
 * @property {number} progressPercent
 *   Approximate percentage processed thus far.
 *   Guaranteed to be 100 when fully processed.
 *
 * @property {Object} startTime
 *   Time when the request was received.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {Object} updateTime
 *   Time of the most recent update.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.VideoAnnotationProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var VideoAnnotationProgress = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video annotation progress. Included in the `metadata`
 * field of the `Operation` returned by the `GetOperation`
 * call of the `google::longrunning::Operations` service.
 *
 * @property {Object[]} annotationProgress
 *   Progress metadata for all videos specified in `AnnotateVideoRequest`.
 *
 *   This object should have the same structure as [VideoAnnotationProgress]{@link VideoAnnotationProgress}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta2.AnnotateVideoProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto}
 */
var AnnotateVideoProgress = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video annotation feature.
 *
 * @enum {number}
 */
var Feature = {

  /**
   * Unspecified.
   */
  FEATURE_UNSPECIFIED: 0,

  /**
   * Label detection. Detect objects, such as dog or flower.
   */
  LABEL_DETECTION: 1,

  /**
   * Shot change detection.
   */
  SHOT_CHANGE_DETECTION: 2,

  /**
   * Explicit content detection.
   */
  EXPLICIT_CONTENT_DETECTION: 3,

  /**
   * Human face detection and tracking.
   */
  FACE_DETECTION: 4
};

/**
 * Label detection mode.
 *
 * @enum {number}
 */
var LabelDetectionMode = {

  /**
   * Unspecified.
   */
  LABEL_DETECTION_MODE_UNSPECIFIED: 0,

  /**
   * Detect shot-level labels.
   */
  SHOT_MODE: 1,

  /**
   * Detect frame-level labels.
   */
  FRAME_MODE: 2,

  /**
   * Detect both shot-level and frame-level labels.
   */
  SHOT_AND_FRAME_MODE: 3
};

/**
 * Bucketized representation of likelihood.
 *
 * @enum {number}
 */
var Likelihood = {

  /**
   * Unspecified likelihood.
   */
  LIKELIHOOD_UNSPECIFIED: 0,

  /**
   * Very unlikely.
   */
  VERY_UNLIKELY: 1,

  /**
   * Unlikely.
   */
  UNLIKELY: 2,

  /**
   * Possible.
   */
  POSSIBLE: 3,

  /**
   * Likely.
   */
  LIKELY: 4,

  /**
   * Very likely.
   */
  VERY_LIKELY: 5
};
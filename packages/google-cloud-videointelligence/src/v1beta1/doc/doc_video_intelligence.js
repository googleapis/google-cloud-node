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
 * @see [google.cloud.videointelligence.v1beta1.AnnotateVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
 * @property {number} labelDetectionMode
 *   If label detection has been requested, what labels should be detected
 *   in addition to video-level labels or segment-level labels. If unspecified,
 *   defaults to `SHOT_MODE`.
 *
 *   The number should be among the values of [LabelDetectionMode]{@link LabelDetectionMode}
 *
 * @property {boolean} stationaryCamera
 *   Whether the video has been shot from a stationary (i.e. non-moving) camera.
 *   When set to true, might improve detection accuracy for moving objects.
 *
 * @property {string} labelDetectionModel
 *   Model to use for label detection.
 *   Supported values: "latest" and "stable" (the default).
 *
 * @property {string} faceDetectionModel
 *   Model to use for face detection.
 *   Supported values: "latest" and "stable" (the default).
 *
 * @property {string} shotChangeDetectionModel
 *   Model to use for shot change detection.
 *   Supported values: "latest" and "stable" (the default).
 *
 * @property {string} safeSearchDetectionModel
 *   Model to use for safe search detection.
 *   Supported values: "latest" and "stable" (the default).
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.VideoContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var VideoContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment.
 *
 * @property {number} startTimeOffset
 *   Start offset in microseconds (inclusive). Unset means 0.
 *
 * @property {number} endTimeOffset
 *   End offset in microseconds (inclusive). Unset means 0.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.VideoSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var VideoSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Label location.
 *
 * @property {Object} segment
 *   Video segment. Set to [-1, -1] for video-level labels.
 *   Set to [timestamp, timestamp] for frame-level labels.
 *   Otherwise, corresponds to one of `AnnotateSpec.segments`
 *   (if specified) or to shot boundaries (if requested).
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @property {number} level
 *   Label level.
 *
 *   The number should be among the values of [LabelLevel]{@link LabelLevel}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.LabelLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var LabelLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Label annotation.
 *
 * @property {string} description
 *   Textual description, e.g. `Fixed-gear bicycle`.
 *
 * @property {string} languageCode
 *   Language code for `description` in BCP-47 format.
 *
 * @property {Object[]} locations
 *   Where the label was detected and with what confidence.
 *
 *   This object should have the same structure as [LabelLocation]{@link LabelLocation}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.LabelAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var LabelAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Safe search annotation (based on per-frame visual signals only).
 * If no unsafe content has been detected in a frame, no annotations
 * are present for that frame. If only some types of unsafe content
 * have been detected in a frame, the likelihood is set to `UNKNOWN`
 * for all other types of unsafe content.
 *
 * @property {number} adult
 *   Likelihood of adult content.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} spoof
 *   Likelihood that an obvious modification was made to the original
 *   version to make it appear funny or offensive.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} medical
 *   Likelihood of medical content.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} violent
 *   Likelihood of violent content.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} racy
 *   Likelihood of racy content.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} timeOffset
 *   Video time offset in microseconds.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.SafeSearchAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var SafeSearchAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Bounding box.
 *
 * @property {number} left
 *   Left X coordinate.
 *
 * @property {number} right
 *   Right X coordinate.
 *
 * @property {number} bottom
 *   Bottom Y coordinate.
 *
 * @property {number} top
 *   Top Y coordinate.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.BoundingBox definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var BoundingBox = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Face location.
 *
 * @property {Object} boundingBox
 *   Bounding box in a frame.
 *
 *   This object should have the same structure as [BoundingBox]{@link BoundingBox}
 *
 * @property {number} timeOffset
 *   Video time offset in microseconds.
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.FaceLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
 */
var FaceLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Face annotation.
 *
 * @property {string} thumbnail
 *   Thumbnail of a representative face view (in JPEG format). Encoding: base64.
 *
 * @property {Object[]} segments
 *   All locations where a face was detected.
 *   Faces are detected and tracked on a per-video basis
 *   (as opposed to across multiple videos).
 *
 *   This object should have the same structure as [VideoSegment]{@link VideoSegment}
 *
 * @property {Object[]} locations
 *   Face locations at one frame per second.
 *
 *   This object should have the same structure as [FaceLocation]{@link FaceLocation}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.FaceAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
 * @property {Object[]} labelAnnotations
 *   Label annotations. There is exactly one element for each unique label.
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
 * @property {Object[]} safeSearchAnnotations
 *   Safe search annotations.
 *
 *   This object should have the same structure as [SafeSearchAnnotation]{@link SafeSearchAnnotation}
 *
 * @property {Object} error
 *   If set, indicates an error. Note that for a single `AnnotateVideoRequest`
 *   some videos may succeed and some may fail.
 *
 *   This object should have the same structure as [google.rpc.Status]{@link external:"google.rpc.Status"}
 *
 * @class
 * @see [google.cloud.videointelligence.v1beta1.VideoAnnotationResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
 * @see [google.cloud.videointelligence.v1beta1.AnnotateVideoResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
 * @see [google.cloud.videointelligence.v1beta1.VideoAnnotationProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
 * @see [google.cloud.videointelligence.v1beta1.AnnotateVideoProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto}
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
   * Human face detection and tracking.
   */
  FACE_DETECTION: 2,

  /**
   * Shot change detection.
   */
  SHOT_CHANGE_DETECTION: 3,

  /**
   * Safe search detection.
   */
  SAFE_SEARCH_DETECTION: 4
};

/**
 * Label level (scope).
 *
 * @enum {number}
 */
var LabelLevel = {

  /**
   * Unspecified.
   */
  LABEL_LEVEL_UNSPECIFIED: 0,

  /**
   * Video-level. Corresponds to the whole video.
   */
  VIDEO_LEVEL: 1,

  /**
   * Segment-level. Corresponds to one of `AnnotateSpec.segments`.
   */
  SEGMENT_LEVEL: 2,

  /**
   * Shot-level. Corresponds to a single shot (i.e. a series of frames
   * without a major camera position or background change).
   */
  SHOT_LEVEL: 3,

  /**
   * Frame-level. Corresponds to a single video frame.
   */
  FRAME_LEVEL: 4
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
   * Unknown likelihood.
   */
  UNKNOWN: 0,

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
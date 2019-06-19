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
 * Video annotation request.
 *
 * @property {string} inputUri
 *   Input video location. Currently, only
 *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
 *   supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   google.rpc.Code.INVALID_ARGUMENT). For
 *   more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris). A video
 *   URI may include wildcards in `object-id`, and thus identify multiple
 *   videos. Supported wildcards: '*' to match 0 or more characters;
 *   '?' to match 1 character. If unset, the input video should be embedded
 *   in the request as `input_content`. If set, `input_content` should be unset.
 *
 * @property {Buffer} inputContent
 *   The video data bytes.
 *   If unset, the input video(s) should be specified via `input_uri`.
 *   If set, `input_uri` should be unset.
 *
 * @property {number[]} features
 *   Requested video annotation features.
 *
 *   The number should be among the values of [Feature]{@link google.cloud.videointelligence.v1p3beta1.Feature}
 *
 * @property {Object} videoContext
 *   Additional video context and/or feature-specific parameters.
 *
 *   This object should have the same structure as [VideoContext]{@link google.cloud.videointelligence.v1p3beta1.VideoContext}
 *
 * @property {string} outputUri
 *   Optional location where the output (in JSON format) should be stored.
 *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
 *   URIs are supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   google.rpc.Code.INVALID_ARGUMENT). For
 *   more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *
 * @property {string} locationId
 *   Optional cloud region where annotation should take place. Supported cloud
 *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
 *   is specified, a region will be determined based on video file location.
 *
 * @typedef AnnotateVideoRequest
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.AnnotateVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const AnnotateVideoRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video context and/or feature-specific parameters.
 *
 * @property {Object[]} segments
 *   Video segments to annotate. The segments may overlap and are not required
 *   to be contiguous or span the whole video. If unspecified, each video is
 *   treated as a single segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {Object} labelDetectionConfig
 *   Config for LABEL_DETECTION.
 *
 *   This object should have the same structure as [LabelDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig}
 *
 * @property {Object} shotChangeDetectionConfig
 *   Config for SHOT_CHANGE_DETECTION.
 *
 *   This object should have the same structure as [ShotChangeDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig}
 *
 * @property {Object} explicitContentDetectionConfig
 *   Config for EXPLICIT_CONTENT_DETECTION.
 *
 *   This object should have the same structure as [ExplicitContentDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig}
 *
 * @property {Object} speechTranscriptionConfig
 *   Config for SPEECH_TRANSCRIPTION.
 *
 *   This object should have the same structure as [SpeechTranscriptionConfig]{@link google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig}
 *
 * @property {Object} textDetectionConfig
 *   Config for TEXT_DETECTION.
 *
 *   This object should have the same structure as [TextDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.TextDetectionConfig}
 *
 * @property {Object} objectTrackingConfig
 *   Config for OBJECT_TRACKING.
 *
 *   This object should have the same structure as [ObjectTrackingConfig]{@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig}
 *
 * @typedef VideoContext
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.VideoContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const VideoContext = {
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
 *   The number should be among the values of [LabelDetectionMode]{@link google.cloud.videointelligence.v1p3beta1.LabelDetectionMode}
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
 * @property {number} frameConfidenceThreshold
 *   The confidence threshold we perform filtering on the labels from
 *   frame-level detection. If not set, it is set to 0.4 by default. The valid
 *   range for this threshold is [0.1, 0.9]. Any value set outside of this
 *   range will be clipped.
 *   Note: for best results please follow the default threshold. We will update
 *   the default threshold everytime when we release a new model.
 *
 * @property {number} videoConfidenceThreshold
 *   The confidence threshold we perform filtering on the labels from
 *   video-level and shot-level detections. If not set, it is set to 0.3 by
 *   default. The valid range for this threshold is [0.1, 0.9]. Any value set
 *   outside of this range will be clipped.
 *   Note: for best results please follow the default threshold. We will update
 *   the default threshold everytime when we release a new model.
 *
 * @typedef LabelDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.LabelDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const LabelDetectionConfig = {
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
 * @typedef ShotChangeDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ShotChangeDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ShotChangeDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for OBJECT_TRACKING.
 *
 * @property {string} model
 *   Model to use for object tracking.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @typedef ObjectTrackingConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ObjectTrackingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ObjectTrackingConfig = {
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
 * @typedef ExplicitContentDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ExplicitContentDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ExplicitContentDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for TEXT_DETECTION.
 *
 * @property {string[]} languageHints
 *   Language hint can be specified if the language to be detected is known a
 *   priori. It can increase the accuracy of the detection. Language hint must
 *   be language code in BCP-47 format.
 *
 *   Automatic language detection is performed if no hint is provided.
 *
 * @property {string} model
 *   Model to use for text detection.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @typedef TextDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.TextDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const TextDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment.
 *
 * @property {Object} startTimeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the start of the segment (inclusive).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endTimeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the end of the segment (inclusive).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef VideoSegment
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.VideoSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const VideoSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment level annotation results for label detection.
 *
 * @property {Object} segment
 *   Video segment where a label was detected.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @typedef LabelSegment
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.LabelSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const LabelSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for label detection.
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video, corresponding to the
 *   video frame for this location.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @typedef LabelFrame
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.LabelFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const LabelFrame = {
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
 * @typedef Entity
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const Entity = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Label annotation.
 *
 * @property {Object} entity
 *   Detected entity.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p3beta1.Entity}
 *
 * @property {Object[]} categoryEntities
 *   Common categories for the detected entity.
 *   E.g. when the label is `Terrier` the category is likely `dog`. And in some
 *   cases there might be more than one categories e.g. `Terrier` could also be
 *   a `pet`.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p3beta1.Entity}
 *
 * @property {Object[]} segments
 *   All video segments where a label was detected.
 *
 *   This object should have the same structure as [LabelSegment]{@link google.cloud.videointelligence.v1p3beta1.LabelSegment}
 *
 * @property {Object[]} frames
 *   All video frames where a label was detected.
 *
 *   This object should have the same structure as [LabelFrame]{@link google.cloud.videointelligence.v1p3beta1.LabelFrame}
 *
 * @typedef LabelAnnotation
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.LabelAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const LabelAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for explicit content.
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video, corresponding to the
 *   video frame for this location.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} pornographyLikelihood
 *   Likelihood of the pornography content..
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.videointelligence.v1p3beta1.Likelihood}
 *
 * @typedef ExplicitContentFrame
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ExplicitContentFrame = {
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
 *   This object should have the same structure as [ExplicitContentFrame]{@link google.cloud.videointelligence.v1p3beta1.ExplicitContentFrame}
 *
 * @typedef ExplicitContentAnnotation
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ExplicitContentAnnotation = {
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
 * @typedef NormalizedBoundingBox
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const NormalizedBoundingBox = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * For tracking related features, such as LOGO_RECOGNITION, FACE_DETECTION,
 * CELEBRITY_RECOGNITION, PERSON_DETECTION.
 * An object at time_offset with attributes, and located with
 * normalized_bounding_box.
 *
 * @property {Object} normalizedBoundingBox
 *   Normalized Bounding box in a frame, where the object is located.
 *
 *   This object should have the same structure as [NormalizedBoundingBox]{@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 *
 * @property {Object} timeOffset
 *   Time-offset, relative to the beginning of the video,
 *   corresponding to the video frame for this object.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object[]} attributes
 *   Optional. The attributes of the object in the bounding box.
 *
 *   This object should have the same structure as [DetectedAttribute]{@link google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 *
 * @typedef TimestampedObject
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.TimestampedObject definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const TimestampedObject = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A track of an object instance.
 *
 * @property {Object} segment
 *   Video segment of a track.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {Object[]} timestampedObjects
 *   The object with timestamp and attributes per frame in the track.
 *
 *   This object should have the same structure as [TimestampedObject]{@link google.cloud.videointelligence.v1p3beta1.TimestampedObject}
 *
 * @property {Object[]} attributes
 *   Optional. Attributes in the track level.
 *
 *   This object should have the same structure as [DetectedAttribute]{@link google.cloud.videointelligence.v1p3beta1.DetectedAttribute}
 *
 * @property {number} confidence
 *   Optional. The confidence score of the tracked object.
 *
 * @typedef Track
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.Track definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const Track = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A generic detected attribute represented by name in string format.
 *
 * @property {string} name
 *   The name of the attribute, i.e. glasses, dark_glasses, mouth_open etc.
 *   A full list of supported type names will be provided in the document.
 *
 * @property {number} confidence
 *   Detected attribute confidence. Range [0, 1].
 *
 * @property {string} value
 *   Text value of the detection result. For example, the value for "HairColor"
 *   can be "black", "blonde", etc.
 *
 * @typedef DetectedAttribute
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.DetectedAttribute definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const DetectedAttribute = {
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
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 *
 * @property {Object[]} shotLabelAnnotations
 *   Label annotations on shot level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 *
 * @property {Object[]} frameLabelAnnotations
 *   Label annotations on frame level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 *
 * @property {Object[]} shotAnnotations
 *   Shot annotations. Each shot is represented as a video segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {Object} explicitAnnotation
 *   Explicit content annotation.
 *
 *   This object should have the same structure as [ExplicitContentAnnotation]{@link google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 *
 * @property {Object[]} speechTranscriptions
 *   Speech transcription.
 *
 *   This object should have the same structure as [SpeechTranscription]{@link google.cloud.videointelligence.v1p3beta1.SpeechTranscription}
 *
 * @property {Object[]} textAnnotations
 *   OCR text detection and tracking.
 *   Annotations for list of detected text snippets. Each will have list of
 *   frame information associated with it.
 *
 *   This object should have the same structure as [TextAnnotation]{@link google.cloud.videointelligence.v1p3beta1.TextAnnotation}
 *
 * @property {Object[]} objectAnnotations
 *   Annotations for list of objects detected and tracked in video.
 *
 *   This object should have the same structure as [ObjectTrackingAnnotation]{@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 *
 * @property {Object[]} logoRecognitionAnnotations
 *   Annotations for list of logos detected, tracked and recognized in video.
 *
 *   This object should have the same structure as [LogoRecognitionAnnotation]{@link google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation}
 *
 * @property {Object} error
 *   If set, indicates an error. Note that for a single `AnnotateVideoRequest`
 *   some videos may succeed and some may fail.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef VideoAnnotationResults
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const VideoAnnotationResults = {
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
 *   This object should have the same structure as [VideoAnnotationResults]{@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationResults}
 *
 * @typedef AnnotateVideoResponse
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.AnnotateVideoResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const AnnotateVideoResponse = {
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
 *   Approximate percentage processed thus far. Guaranteed to be
 *   100 when fully processed.
 *
 * @property {Object} startTime
 *   Time when the request was received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Time of the most recent update.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef VideoAnnotationProgress
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const VideoAnnotationProgress = {
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
 *   This object should have the same structure as [VideoAnnotationProgress]{@link google.cloud.videointelligence.v1p3beta1.VideoAnnotationProgress}
 *
 * @typedef AnnotateVideoProgress
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.AnnotateVideoProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const AnnotateVideoProgress = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for SPEECH_TRANSCRIPTION.
 *
 * @property {string} languageCode
 *   *Required* The language of the supplied audio as a
 *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
 *   Example: "en-US".
 *   See [Language Support](https://cloud.google.com/speech/docs/languages)
 *   for a list of the currently supported language codes.
 *
 * @property {number} maxAlternatives
 *   *Optional* Maximum number of recognition hypotheses to be returned.
 *   Specifically, the maximum number of `SpeechRecognitionAlternative` messages
 *   within each `SpeechTranscription`. The server may return fewer than
 *   `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will
 *   return a maximum of one. If omitted, will return a maximum of one.
 *
 * @property {boolean} filterProfanity
 *   *Optional* If set to `true`, the server will attempt to filter out
 *   profanities, replacing all but the initial character in each filtered word
 *   with asterisks, e.g. "f***". If set to `false` or omitted, profanities
 *   won't be filtered out.
 *
 * @property {Object[]} speechContexts
 *   *Optional* A means to provide context to assist the speech recognition.
 *
 *   This object should have the same structure as [SpeechContext]{@link google.cloud.videointelligence.v1p3beta1.SpeechContext}
 *
 * @property {boolean} enableAutomaticPunctuation
 *   *Optional* If 'true', adds punctuation to recognition result hypotheses.
 *   This feature is only available in select languages. Setting this for
 *   requests in other languages has no effect at all. The default 'false' value
 *   does not add punctuation to result hypotheses. NOTE: "This is currently
 *   offered as an experimental service, complimentary to all users. In the
 *   future this may be exclusively available as a premium feature."
 *
 * @property {number[]} audioTracks
 *   *Optional* For file formats, such as MXF or MKV, supporting multiple audio
 *   tracks, specify up to two tracks. Default: track 0.
 *
 * @property {boolean} enableSpeakerDiarization
 *   *Optional* If 'true', enables speaker detection for each recognized word in
 *   the top alternative of the recognition result using a speaker_tag provided
 *   in the WordInfo.
 *   Note: When this is true, we send all the words from the beginning of the
 *   audio for the top alternative in every consecutive responses.
 *   This is done in order to improve our speaker tags as our models learn to
 *   identify the speakers in the conversation over time.
 *
 * @property {number} diarizationSpeakerCount
 *   *Optional*
 *   If set, specifies the estimated number of speakers in the conversation.
 *   If not set, defaults to '2'.
 *   Ignored unless enable_speaker_diarization is set to true.
 *
 * @property {boolean} enableWordConfidence
 *   *Optional* If `true`, the top result includes a list of words and the
 *   confidence for those words. If `false`, no word-level confidence
 *   information is returned. The default is `false`.
 *
 * @typedef SpeechTranscriptionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.SpeechTranscriptionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const SpeechTranscriptionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provides "hints" to the speech recognizer to favor specific words and phrases
 * in the results.
 *
 * @property {string[]} phrases
 *   *Optional* A list of strings containing words and phrases "hints" so that
 *   the speech recognition is more likely to recognize them. This can be used
 *   to improve the accuracy for specific words and phrases, for example, if
 *   specific commands are typically spoken by the user. This can also be used
 *   to add additional words to the vocabulary of the recognizer. See
 *   [usage limits](https://cloud.google.com/speech/limits#content).
 *
 * @typedef SpeechContext
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.SpeechContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const SpeechContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A speech recognition result corresponding to a portion of the audio.
 *
 * @property {Object[]} alternatives
 *   May contain one or more recognition hypotheses (up to the maximum specified
 *   in `max_alternatives`).  These alternatives are ordered in terms of
 *   accuracy, with the top (first) alternative being the most probable, as
 *   ranked by the recognizer.
 *
 *   This object should have the same structure as [SpeechRecognitionAlternative]{@link google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative}
 *
 * @property {string} languageCode
 *   Output only. The
 *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the
 *   language in this result. This language code was detected to have the most
 *   likelihood of being spoken in the audio.
 *
 * @typedef SpeechTranscription
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.SpeechTranscription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const SpeechTranscription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Alternative hypotheses (a.k.a. n-best list).
 *
 * @property {string} transcript
 *   Transcript text representing the words that the user spoke.
 *
 * @property {number} confidence
 *   The confidence estimate between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. This field is typically provided only for the top hypothesis, and
 *   only for `is_final=true` results. Clients should not rely on the
 *   `confidence` field as it is not guaranteed to be accurate or consistent.
 *   The default of 0.0 is a sentinel value indicating `confidence` was not set.
 *
 * @property {Object[]} words
 *   A list of word-specific information for each recognized word.
 *
 *   This object should have the same structure as [WordInfo]{@link google.cloud.videointelligence.v1p3beta1.WordInfo}
 *
 * @typedef SpeechRecognitionAlternative
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.SpeechRecognitionAlternative definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const SpeechRecognitionAlternative = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Word-specific information for recognized words. Word information is only
 * included in the response when certain request parameters are set, such
 * as `enable_word_time_offsets`.
 *
 * @property {Object} startTime
 *   Time offset relative to the beginning of the audio, and
 *   corresponding to the start of the spoken word. This field is only set if
 *   `enable_word_time_offsets=true` and only in the top hypothesis. This is an
 *   experimental feature and the accuracy of the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endTime
 *   Time offset relative to the beginning of the audio, and
 *   corresponding to the end of the spoken word. This field is only set if
 *   `enable_word_time_offsets=true` and only in the top hypothesis. This is an
 *   experimental feature and the accuracy of the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {string} word
 *   The word corresponding to this set of information.
 *
 * @property {number} confidence
 *   Output only. The confidence estimate between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. This field is set only for the top alternative.
 *   This field is not guaranteed to be accurate and users should not rely on it
 *   to be always provided.
 *   The default of 0.0 is a sentinel value indicating `confidence` was not set.
 *
 * @property {number} speakerTag
 *   Output only. A distinct integer value is assigned for every speaker within
 *   the audio. This field specifies which one of those speakers was detected to
 *   have spoken this word. Value ranges from 1 up to diarization_speaker_count,
 *   and is only set if speaker diarization is enabled.
 *
 * @typedef WordInfo
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.WordInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const WordInfo = {
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
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.NormalizedVertex definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const NormalizedVertex = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Normalized bounding polygon for text (that might not be aligned with axis).
 * Contains list of the corner points in clockwise order starting from
 * top-left corner. For example, for a rectangular bounding box:
 * When the text is horizontal it might look like:
 *         0----1
 *         |    |
 *         3----2
 *
 * When it's clockwise rotated 180 degrees around the top-left corner it
 * becomes:
 *         2----3
 *         |    |
 *         1----0
 *
 * and the vertex order will still be (0, 1, 2, 3). Note that values can be less
 * than 0, or greater than 1 due to trignometric calculations for location of
 * the box.
 *
 * @property {Object[]} vertices
 *   Normalized vertices of the bounding polygon.
 *
 *   This object should have the same structure as [NormalizedVertex]{@link google.cloud.videointelligence.v1p3beta1.NormalizedVertex}
 *
 * @typedef NormalizedBoundingPoly
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const NormalizedBoundingPoly = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video segment level annotation results for text detection.
 *
 * @property {Object} segment
 *   Video segment where a text snippet was detected.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {number} confidence
 *   Confidence for the track of detected text. It is calculated as the highest
 *   over all frames where OCR detected text appears.
 *
 * @property {Object[]} frames
 *   Information related to the frames where OCR detected text appears.
 *
 *   This object should have the same structure as [TextFrame]{@link google.cloud.videointelligence.v1p3beta1.TextFrame}
 *
 * @typedef TextSegment
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.TextSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const TextSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotation results for text annotation (OCR).
 * Contains information regarding timestamp and bounding box locations for the
 * frames containing detected OCR text snippets.
 *
 * @property {Object} rotatedBoundingBox
 *   Bounding polygon of the detected text for this frame.
 *
 *   This object should have the same structure as [NormalizedBoundingPoly]{@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingPoly}
 *
 * @property {Object} timeOffset
 *   Timestamp of this frame.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef TextFrame
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.TextFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const TextFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotations related to one detected OCR text snippet. This will contain the
 * corresponding text, confidence value, and frame level information for each
 * detection.
 *
 * @property {string} text
 *   The detected text.
 *
 * @property {Object[]} segments
 *   All video segments where OCR detected text appears.
 *
 *   This object should have the same structure as [TextSegment]{@link google.cloud.videointelligence.v1p3beta1.TextSegment}
 *
 * @typedef TextAnnotation
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.TextAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const TextAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video frame level annotations for object detection and tracking. This field
 * stores per frame location, time offset, and confidence.
 *
 * @property {Object} normalizedBoundingBox
 *   The normalized bounding box location of this object track for the frame.
 *
 *   This object should have the same structure as [NormalizedBoundingBox]{@link google.cloud.videointelligence.v1p3beta1.NormalizedBoundingBox}
 *
 * @property {Object} timeOffset
 *   The timestamp of the frame in microseconds.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef ObjectTrackingFrame
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ObjectTrackingFrame = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotations corresponding to one tracked object.
 *
 * @property {Object} entity
 *   Entity to specify the object category that this track is labeled as.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p3beta1.Entity}
 *
 * @property {number} confidence
 *   Object category's labeling confidence of this track.
 *
 * @property {Object[]} frames
 *   Information corresponding to all frames where this object track appears.
 *   Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame
 *   messages in frames.
 *   Streaming mode: it can only be one ObjectTrackingFrame message in frames.
 *
 *   This object should have the same structure as [ObjectTrackingFrame]{@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingFrame}
 *
 * @property {Object} segment
 *   Non-streaming batch mode ONLY.
 *   Each object track corresponds to one video segment where it appears.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {number} trackId
 *   Streaming mode ONLY.
 *   In streaming mode, we do not know the end time of a tracked object
 *   before it is completed. Hence, there is no VideoSegment info returned.
 *   Instead, we provide a unique identifiable integer track_id so that
 *   the customers can correlate the results of the ongoing
 *   ObjectTrackAnnotation of the same track_id over time.
 *
 * @typedef ObjectTrackingAnnotation
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const ObjectTrackingAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation corresponding to one detected, tracked and recognized logo class.
 *
 * @property {Object} entity
 *   Entity category information to specify the logo class that all the logo
 *   tracks within this LogoRecognitionAnnotation are recognized as.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p3beta1.Entity}
 *
 * @property {Object[]} tracks
 *   All logo tracks where the recognized logo appears. Each track corresponds
 *   to one logo instance appearing in consecutive frames.
 *
 *   This object should have the same structure as [Track]{@link google.cloud.videointelligence.v1p3beta1.Track}
 *
 * @property {Object[]} segments
 *   All video segments where the recognized logo appears. There might be
 *   multiple instances of the same logo class appearing in one VideoSegment.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @typedef LogoRecognitionAnnotation
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.LogoRecognitionAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const LogoRecognitionAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The top-level message sent by the client for the `StreamingAnnotateVideo`
 * method. Multiple `StreamingAnnotateVideoRequest` messages are sent.
 * The first message must only contain a `StreamingVideoConfig` message.
 * All subsequent messages must only contain `input_content` data.
 *
 * @property {Object} videoConfig
 *   Provides information to the annotator, specifing how to process the
 *   request. The first `AnnotateStreamingVideoRequest` message must only
 *   contain a `video_config` message.
 *
 *   This object should have the same structure as [StreamingVideoConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig}
 *
 * @property {Buffer} inputContent
 *   The video data to be annotated. Chunks of video data are sequentially
 *   sent in `StreamingAnnotateVideoRequest` messages. Except the initial
 *   `StreamingAnnotateVideoRequest` message containing only
 *   `video_config`, all subsequent `AnnotateStreamingVideoRequest`
 *   messages must only contain `input_content` field.
 *   Note: as with all bytes fields, protobuffers use a pure binary
 *   representation (not base64).
 *
 * @typedef StreamingAnnotateVideoRequest
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingAnnotateVideoRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `StreamingAnnotateVideoResponse` is the only message returned to the client
 * by `StreamingAnnotateVideo`. A series of zero or more
 * `StreamingAnnotateVideoResponse` messages are streamed back to the client.
 *
 * @property {Object} error
 *   If set, returns a google.rpc.Status message that
 *   specifies the error for the operation.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object} annotationResults
 *   Streaming annotation results.
 *
 *   This object should have the same structure as [StreamingVideoAnnotationResults]{@link google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults}
 *
 * @property {string} annotationResultsUri
 *   GCS URI that stores annotation results of one streaming session.
 *   It is a directory that can hold multiple files in JSON format.
 *   Example uri format:
 *   gs://bucket_id/object_id/cloud_project_name-session_id
 *
 * @typedef StreamingAnnotateVideoResponse
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingAnnotateVideoResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for AUTOML_CLASSIFICATION in streaming mode.
 *
 * @property {string} modelName
 *   Resource name of AutoML model.
 *   Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
 *
 * @typedef StreamingAutomlClassificationConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingAutomlClassificationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for AUTOML_OBJECT_TRACKING in streaming mode.
 *
 * @property {string} modelName
 *   Resource name of AutoML model.
 *   Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
 *
 * @typedef StreamingAutomlObjectTrackingConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingAutomlObjectTrackingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for EXPLICIT_CONTENT_DETECTION in streaming mode.
 * No customized config support.
 * @typedef StreamingExplicitContentDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingExplicitContentDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for LABEL_DETECTION in streaming mode.
 *
 * @property {boolean} stationaryCamera
 *   Whether the video has been captured from a stationary (i.e. non-moving)
 *   camera. When set to true, might improve detection accuracy for moving
 *   objects. Default: false.
 *
 * @typedef StreamingLabelDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingLabelDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for STREAMING_OBJECT_TRACKING.
 * No customized config support.
 * @typedef StreamingObjectTrackingConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingObjectTrackingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for SHOT_CHANGE_DETECTION in streaming mode.
 * No customized config support.
 * @typedef StreamingShotChangeDetectionConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingShotChangeDetectionConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Config for streaming storage option.
 *
 * @property {boolean} enableStorageAnnotationResult
 *   Enable streaming storage. Default: false.
 *
 * @property {string} annotationResultStorageDirectory
 *   GCS URI to store all annotation results for one client. Client should
 *   specify this field as the top-level storage directory. Annotation results
 *   of different sessions will be put into different sub-directories denoted
 *   by project_name and session_id. All sub-directories will be auto generated
 *   by program and will be made accessible to client in response proto.
 *   URIs must be specified in the following format: `gs://bucket-id/object-id`
 *   `bucket-id` should be a valid GCS bucket created by client and bucket
 *   permission shall also be configured properly. `object-id` can be arbitrary
 *   string that make sense to client. Other URI formats will return error and
 *   cause GCS write failure.
 *
 * @typedef StreamingStorageConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingStorageConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Streaming annotation results corresponding to a portion of the video
 * that is currently being processed.
 *
 * @property {Object[]} shotAnnotations
 *   Shot annotation results. Each shot is represented as a video segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p3beta1.VideoSegment}
 *
 * @property {Object[]} labelAnnotations
 *   Label annotation results.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p3beta1.LabelAnnotation}
 *
 * @property {Object} explicitAnnotation
 *   Explicit content annotation results.
 *
 *   This object should have the same structure as [ExplicitContentAnnotation]{@link google.cloud.videointelligence.v1p3beta1.ExplicitContentAnnotation}
 *
 * @property {Object[]} objectAnnotations
 *   Object tracking results.
 *
 *   This object should have the same structure as [ObjectTrackingAnnotation]{@link google.cloud.videointelligence.v1p3beta1.ObjectTrackingAnnotation}
 *
 * @typedef StreamingVideoAnnotationResults
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingVideoAnnotationResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingVideoAnnotationResults = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provides information to the annotator that specifies how to process the
 * request.
 *
 * @property {number} feature
 *   Requested annotation feature.
 *
 *   The number should be among the values of [StreamingFeature]{@link google.cloud.videointelligence.v1p3beta1.StreamingFeature}
 *
 * @property {Object} shotChangeDetectionConfig
 *   Config for STREAMING_SHOT_CHANGE_DETECTION.
 *
 *   This object should have the same structure as [StreamingShotChangeDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingShotChangeDetectionConfig}
 *
 * @property {Object} labelDetectionConfig
 *   Config for STREAMING_LABEL_DETECTION.
 *
 *   This object should have the same structure as [StreamingLabelDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingLabelDetectionConfig}
 *
 * @property {Object} explicitContentDetectionConfig
 *   Config for STREAMING_EXPLICIT_CONTENT_DETECTION.
 *
 *   This object should have the same structure as [StreamingExplicitContentDetectionConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingExplicitContentDetectionConfig}
 *
 * @property {Object} objectTrackingConfig
 *   Config for STREAMING_OBJECT_TRACKING.
 *
 *   This object should have the same structure as [StreamingObjectTrackingConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingObjectTrackingConfig}
 *
 * @property {Object} automlClassificationConfig
 *   Config for STREAMING_AUTOML_CLASSIFICATION.
 *
 *   This object should have the same structure as [StreamingAutomlClassificationConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlClassificationConfig}
 *
 * @property {Object} automlObjectTrackingConfig
 *   Config for STREAMING_AUTOML_OBJECT_TRACKING.
 *
 *   This object should have the same structure as [StreamingAutomlObjectTrackingConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingAutomlObjectTrackingConfig}
 *
 * @property {Object} storageConfig
 *   Streaming storage option. By default: storage is disabled.
 *
 *   This object should have the same structure as [StreamingStorageConfig]{@link google.cloud.videointelligence.v1p3beta1.StreamingStorageConfig}
 *
 * @typedef StreamingVideoConfig
 * @memberof google.cloud.videointelligence.v1p3beta1
 * @see [google.cloud.videointelligence.v1p3beta1.StreamingVideoConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p3beta1/video_intelligence.proto}
 */
const StreamingVideoConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video annotation feature.
 *
 * @enum {number}
 * @memberof google.cloud.videointelligence.v1p3beta1
 */
const Feature = {

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
   * Speech transcription.
   */
  SPEECH_TRANSCRIPTION: 6,

  /**
   * OCR text detection and tracking.
   */
  TEXT_DETECTION: 7,

  /**
   * Object detection and tracking.
   */
  OBJECT_TRACKING: 9,

  /**
   * Logo detection, tracking, and recognition.
   */
  LOGO_RECOGNITION: 12
};

/**
 * Label detection mode.
 *
 * @enum {number}
 * @memberof google.cloud.videointelligence.v1p3beta1
 */
const LabelDetectionMode = {

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
 * @memberof google.cloud.videointelligence.v1p3beta1
 */
const Likelihood = {

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

/**
 * Streaming video annotation feature.
 *
 * @enum {number}
 * @memberof google.cloud.videointelligence.v1p3beta1
 */
const StreamingFeature = {

  /**
   * Unspecified.
   */
  STREAMING_FEATURE_UNSPECIFIED: 0,

  /**
   * Label detection. Detect objects, such as dog or flower.
   */
  STREAMING_LABEL_DETECTION: 1,

  /**
   * Shot change detection.
   */
  STREAMING_SHOT_CHANGE_DETECTION: 2,

  /**
   * Explicit content detection.
   */
  STREAMING_EXPLICIT_CONTENT_DETECTION: 3,

  /**
   * Object detection and tracking.
   */
  STREAMING_OBJECT_TRACKING: 4,

  /**
   * Video classification based on AutoML model.
   */
  STREAMING_AUTOML_CLASSIFICATION: 21,

  /**
   * Object detection and tracking based on AutoML model.
   */
  STREAMING_AUTOML_OBJECT_TRACKING: 22
};
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
 * Video annotation request.
 *
 * @property {string} inputUri
 *   Input video location. Currently, only
 *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
 *   supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   google.rpc.Code.INVALID_ARGUMENT). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *   A video URI may include wildcards in `object-id`, and thus identify
 *   multiple videos. Supported wildcards: '*' to match 0 or more characters;
 *   '?' to match 1 character. If unset, the input video should be embedded
 *   in the request as `input_content`. If set, `input_content` should be unset.
 *
 * @property {string} inputContent
 *   The video data bytes.
 *   If unset, the input video(s) should be specified via `input_uri`.
 *   If set, `input_uri` should be unset.
 *
 * @property {number[]} features
 *   Requested video annotation features.
 *
 *   The number should be among the values of [Feature]{@link google.cloud.videointelligence.v1p1beta1.Feature}
 *
 * @property {Object} videoContext
 *   Additional video context and/or feature-specific parameters.
 *
 *   This object should have the same structure as [VideoContext]{@link google.cloud.videointelligence.v1p1beta1.VideoContext}
 *
 * @property {string} outputUri
 *   Optional location where the output (in JSON format) should be stored.
 *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
 *   URIs are supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   google.rpc.Code.INVALID_ARGUMENT). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *
 * @property {string} locationId
 *   Optional cloud region where annotation should take place. Supported cloud
 *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
 *   is specified, a region will be determined based on video file location.
 *
 * @typedef AnnotateVideoRequest
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.AnnotateVideoRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p1beta1.VideoSegment}
 *
 * @property {Object} labelDetectionConfig
 *   Config for LABEL_DETECTION.
 *
 *   This object should have the same structure as [LabelDetectionConfig]{@link google.cloud.videointelligence.v1p1beta1.LabelDetectionConfig}
 *
 * @property {Object} shotChangeDetectionConfig
 *   Config for SHOT_CHANGE_DETECTION.
 *
 *   This object should have the same structure as [ShotChangeDetectionConfig]{@link google.cloud.videointelligence.v1p1beta1.ShotChangeDetectionConfig}
 *
 * @property {Object} explicitContentDetectionConfig
 *   Config for EXPLICIT_CONTENT_DETECTION.
 *
 *   This object should have the same structure as [ExplicitContentDetectionConfig]{@link google.cloud.videointelligence.v1p1beta1.ExplicitContentDetectionConfig}
 *
 * @property {Object} speechTranscriptionConfig
 *   Config for SPEECH_TRANSCRIPTION.
 *
 *   This object should have the same structure as [SpeechTranscriptionConfig]{@link google.cloud.videointelligence.v1p1beta1.SpeechTranscriptionConfig}
 *
 * @typedef VideoContext
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.VideoContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   The number should be among the values of [LabelDetectionMode]{@link google.cloud.videointelligence.v1p1beta1.LabelDetectionMode}
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
 * @typedef LabelDetectionConfig
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.LabelDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 * @typedef ShotChangeDetectionConfig
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.ShotChangeDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 * @typedef ExplicitContentDetectionConfig
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.ExplicitContentDetectionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var ExplicitContentDetectionConfig = {
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
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.VideoSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p1beta1.VideoSegment}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @typedef LabelSegment
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.LabelSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} confidence
 *   Confidence that the label is accurate. Range: [0, 1].
 *
 * @typedef LabelFrame
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.LabelFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 * @typedef Entity
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p1beta1.Entity}
 *
 * @property {Object[]} categoryEntities
 *   Common categories for the detected entity.
 *   E.g. when the label is `Terrier` the category is likely `dog`. And in some
 *   cases there might be more than one categories e.g. `Terrier` could also be
 *   a `pet`.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.videointelligence.v1p1beta1.Entity}
 *
 * @property {Object[]} segments
 *   All video segments where a label was detected.
 *
 *   This object should have the same structure as [LabelSegment]{@link google.cloud.videointelligence.v1p1beta1.LabelSegment}
 *
 * @property {Object[]} frames
 *   All video frames where a label was detected.
 *
 *   This object should have the same structure as [LabelFrame]{@link google.cloud.videointelligence.v1p1beta1.LabelFrame}
 *
 * @typedef LabelAnnotation
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.LabelAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} pornographyLikelihood
 *   Likelihood of the pornography content..
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.videointelligence.v1p1beta1.Likelihood}
 *
 * @typedef ExplicitContentFrame
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.ExplicitContentFrame definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [ExplicitContentFrame]{@link google.cloud.videointelligence.v1p1beta1.ExplicitContentFrame}
 *
 * @typedef ExplicitContentAnnotation
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.ExplicitContentAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 * @typedef NormalizedBoundingBox
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.NormalizedBoundingBox definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var NormalizedBoundingBox = {
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
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p1beta1.LabelAnnotation}
 *
 * @property {Object[]} shotLabelAnnotations
 *   Label annotations on shot level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p1beta1.LabelAnnotation}
 *
 * @property {Object[]} frameLabelAnnotations
 *   Label annotations on frame level.
 *   There is exactly one element for each unique label.
 *
 *   This object should have the same structure as [LabelAnnotation]{@link google.cloud.videointelligence.v1p1beta1.LabelAnnotation}
 *
 * @property {Object[]} shotAnnotations
 *   Shot annotations. Each shot is represented as a video segment.
 *
 *   This object should have the same structure as [VideoSegment]{@link google.cloud.videointelligence.v1p1beta1.VideoSegment}
 *
 * @property {Object} explicitAnnotation
 *   Explicit content annotation.
 *
 *   This object should have the same structure as [ExplicitContentAnnotation]{@link google.cloud.videointelligence.v1p1beta1.ExplicitContentAnnotation}
 *
 * @property {Object[]} speechTranscriptions
 *   Speech transcription.
 *
 *   This object should have the same structure as [SpeechTranscription]{@link google.cloud.videointelligence.v1p1beta1.SpeechTranscription}
 *
 * @property {Object} error
 *   If set, indicates an error. Note that for a single `AnnotateVideoRequest`
 *   some videos may succeed and some may fail.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef VideoAnnotationResults
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.VideoAnnotationResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [VideoAnnotationResults]{@link google.cloud.videointelligence.v1p1beta1.VideoAnnotationResults}
 *
 * @typedef AnnotateVideoResponse
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.AnnotateVideoResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Time of the most recent update.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef VideoAnnotationProgress
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.VideoAnnotationProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
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
 *   This object should have the same structure as [VideoAnnotationProgress]{@link google.cloud.videointelligence.v1p1beta1.VideoAnnotationProgress}
 *
 * @typedef AnnotateVideoProgress
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.AnnotateVideoProgress definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var AnnotateVideoProgress = {
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
 *   within each `SpeechRecognitionResult`. The server may return fewer than
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
 *   This object should have the same structure as [SpeechContext]{@link google.cloud.videointelligence.v1p1beta1.SpeechContext}
 *
 * @property {number[]} audioTracks
 *   *Optional* For file formats, such as MXF or MKV, supporting multiple audio
 *   tracks, specify up to two tracks. Default: track 0.
 *
 * @typedef SpeechTranscriptionConfig
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.SpeechTranscriptionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var SpeechTranscriptionConfig = {
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
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.SpeechContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var SpeechContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A speech recognition result corresponding to a portion of the audio.
 *
 * @property {Object[]} alternatives
 *   Output only. May contain one or more recognition hypotheses (up to the
 *   maximum specified in `max_alternatives`).
 *   These alternatives are ordered in terms of accuracy, with the top (first)
 *   alternative being the most probable, as ranked by the recognizer.
 *
 *   This object should have the same structure as [SpeechRecognitionAlternative]{@link google.cloud.videointelligence.v1p1beta1.SpeechRecognitionAlternative}
 *
 * @typedef SpeechTranscription
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.SpeechTranscription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var SpeechTranscription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Alternative hypotheses (a.k.a. n-best list).
 *
 * @property {string} transcript
 *   Output only. Transcript text representing the words that the user spoke.
 *
 * @property {number} confidence
 *   Output only. The confidence estimate between 0.0 and 1.0. A higher number
 *   indicates an estimated greater likelihood that the recognized words are
 *   correct. This field is typically provided only for the top hypothesis, and
 *   only for `is_final=true` results. Clients should not rely on the
 *   `confidence` field as it is not guaranteed to be accurate or consistent.
 *   The default of 0.0 is a sentinel value indicating `confidence` was not set.
 *
 * @property {Object[]} words
 *   Output only. A list of word-specific information for each recognized word.
 *
 *   This object should have the same structure as [WordInfo]{@link google.cloud.videointelligence.v1p1beta1.WordInfo}
 *
 * @typedef SpeechRecognitionAlternative
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.SpeechRecognitionAlternative definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var SpeechRecognitionAlternative = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Word-specific information for recognized words. Word information is only
 * included in the response when certain request parameters are set, such
 * as `enable_word_time_offsets`.
 *
 * @property {Object} startTime
 *   Output only. Time offset relative to the beginning of the audio, and
 *   corresponding to the start of the spoken word. This field is only set if
 *   `enable_word_time_offsets=true` and only in the top hypothesis. This is an
 *   experimental feature and the accuracy of the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} endTime
 *   Output only. Time offset relative to the beginning of the audio, and
 *   corresponding to the end of the spoken word. This field is only set if
 *   `enable_word_time_offsets=true` and only in the top hypothesis. This is an
 *   experimental feature and the accuracy of the time offset can vary.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {string} word
 *   Output only. The word corresponding to this set of information.
 *
 * @typedef WordInfo
 * @memberof google.cloud.videointelligence.v1p1beta1
 * @see [google.cloud.videointelligence.v1p1beta1.WordInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1p1beta1/video_intelligence.proto}
 */
var WordInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Video annotation feature.
 *
 * @enum {number}
 * @memberof google.cloud.videointelligence.v1p1beta1
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
   * Speech transcription.
   */
  SPEECH_TRANSCRIPTION: 6
};

/**
 * Label detection mode.
 *
 * @enum {number}
 * @memberof google.cloud.videointelligence.v1p1beta1
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
 * @memberof google.cloud.videointelligence.v1p1beta1
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
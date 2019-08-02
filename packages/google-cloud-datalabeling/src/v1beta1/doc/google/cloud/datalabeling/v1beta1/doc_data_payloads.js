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
 * Container of information about an image.
 *
 * @property {string} mimeType
 *   Image format.
 *
 * @property {Buffer} imageThumbnail
 *   A byte string of a thumbnail image.
 *
 * @property {string} imageUri
 *   Image uri from the user bucket.
 *
 * @property {string} signedUri
 *   Signed uri of the image file in the service bucket.
 *
 * @typedef ImagePayload
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ImagePayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_payloads.proto}
 */
const ImagePayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container of information about a piece of text.
 *
 * @property {string} textContent
 *   Text content.
 *
 * @typedef TextPayload
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TextPayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_payloads.proto}
 */
const TextPayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container of information of a video thumbnail.
 *
 * @property {Buffer} thumbnail
 *   A byte string of the video frame.
 *
 * @property {Object} timeOffset
 *   Time offset relative to the beginning of the video, corresponding to the
 *   video frame where the thumbnail has been extracted from.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef VideoThumbnail
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoThumbnail definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_payloads.proto}
 */
const VideoThumbnail = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container of information of a video.
 *
 * @property {string} mimeType
 *   Video format.
 *
 * @property {string} videoUri
 *   Video uri from the user bucket.
 *
 * @property {Object[]} videoThumbnails
 *   The list of video thumbnails.
 *
 *   This object should have the same structure as [VideoThumbnail]{@link google.cloud.datalabeling.v1beta1.VideoThumbnail}
 *
 * @property {number} frameRate
 *   FPS of the video.
 *
 * @property {string} signedUri
 *   Signed uri of the video file in the service bucket.
 *
 * @typedef VideoPayload
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.VideoPayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/data_payloads.proto}
 */
const VideoPayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
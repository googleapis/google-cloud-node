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
 * Parameters for a celebrity recognition request.
 *
 * @property {string[]} celebritySet
 *   The resource names for one or more
 *   CelebritySets. A celebrity
 *   set is preloaded and can be specified as "builtin/default". If this is
 *   specified, the algorithm will try to match the faces detected in the input
 *   image to the Celebrities in the CelebritySets.
 *
 * @typedef FaceRecognitionParams
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.FaceRecognitionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/face.proto}
 */
const FaceRecognitionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Celebrity is a group of Faces with an identity.
 *
 * @property {string} name
 *   The resource name of the preloaded Celebrity. Has the format
 *   `builtin/{mid}`.
 *
 * @property {string} displayName
 *   The Celebrity's display name.
 *
 * @property {string} description
 *   The Celebrity's description.
 *
 * @typedef Celebrity
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.Celebrity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/face.proto}
 */
const Celebrity = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Information about a face's identity.
 *
 * @property {Object} celebrity
 *   The Celebrity that this face was
 *   matched to.
 *
 *   This object should have the same structure as [Celebrity]{@link google.cloud.vision.v1p4beta1.Celebrity}
 *
 * @property {number} confidence
 *   Recognition confidence. Range [0, 1].
 *
 * @typedef FaceRecognitionResult
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.FaceRecognitionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/face.proto}
 */
const FaceRecognitionResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
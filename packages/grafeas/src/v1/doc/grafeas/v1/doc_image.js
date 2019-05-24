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
 * Layer holds metadata specific to a layer of a Docker image.
 *
 * @property {string} directive
 *   Required. The recovered Dockerfile directive used to construct this layer.
 *   See https://docs.docker.com/engine/reference/builder/ for more information.
 *
 * @property {string} arguments
 *   The recovered arguments to the Dockerfile directive.
 *
 * @typedef Layer
 * @memberof grafeas.v1
 * @see [grafeas.v1.Layer definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/image.proto}
 */
const Layer = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A set of properties that uniquely identify a given Docker image.
 *
 * @property {string} v1Name
 *   Required. The layer ID of the final layer in the Docker image's v1
 *   representation.
 *
 * @property {string[]} v2Blob
 *   Required. The ordered list of v2 blobs that represent a given image.
 *
 * @property {string} v2Name
 *   Output only. The name of the image's v2 blobs computed via:
 *     [bottom] := v2_blob[bottom]
 *     [N] := sha256(v2_blob[N] + " " + v2_name[N+1])
 *   Only the name of the final blob is kept.
 *
 * @typedef Fingerprint
 * @memberof grafeas.v1
 * @see [grafeas.v1.Fingerprint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/image.proto}
 */
const Fingerprint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Basis describes the base image portion (Note) of the DockerImage
 * relationship. Linked occurrences are derived from this or an equivalent image
 * via:
 *   FROM <Basis.resource_url>
 * Or an equivalent reference, e.g., a tag of the resource_url.
 *
 * @property {string} resourceUrl
 *   Required. Immutable. The resource_url for the resource representing the
 *   basis of associated occurrence images.
 *
 * @property {Object} fingerprint
 *   Required. Immutable. The fingerprint of the base image.
 *
 *   This object should have the same structure as [Fingerprint]{@link grafeas.v1.Fingerprint}
 *
 * @typedef ImageNote
 * @memberof grafeas.v1
 * @see [grafeas.v1.ImageNote definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/image.proto}
 */
const ImageNote = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of the derived image portion of the DockerImage relationship. This
 * image would be produced from a Dockerfile with FROM <DockerImage.Basis in
 * attached Note>.
 *
 * @property {Object} fingerprint
 *   Required. The fingerprint of the derived image.
 *
 *   This object should have the same structure as [Fingerprint]{@link grafeas.v1.Fingerprint}
 *
 * @property {number} distance
 *   Output only. The number of layers by which this image differs from the
 *   associated image basis.
 *
 * @property {Object[]} layerInfo
 *   This contains layer-specific metadata, if populated it has length
 *   "distance" and is ordered with [distance] being the layer immediately
 *   following the base image and [1] being the final layer.
 *
 *   This object should have the same structure as [Layer]{@link grafeas.v1.Layer}
 *
 * @property {string} baseResourceUrl
 *   Output only. This contains the base image URL for the derived image
 *   occurrence.
 *
 * @typedef ImageOccurrence
 * @memberof grafeas.v1
 * @see [grafeas.v1.ImageOccurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/image.proto}
 */
const ImageOccurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
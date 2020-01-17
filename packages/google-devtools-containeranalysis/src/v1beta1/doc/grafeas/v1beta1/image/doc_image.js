// Copyright 2020 Google LLC
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
 * @property {number} directive
 *   Required. The recovered Dockerfile directive used to construct this layer.
 *
 *   The number should be among the values of [Directive]{@link grafeas.v1beta1.image.Directive}
 *
 * @property {string} arguments
 *   The recovered arguments to the Dockerfile directive.
 *
 * @typedef Layer
 * @memberof grafeas.v1beta1.image
 * @see [grafeas.v1beta1.image.Layer definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/image/image.proto}
 */
const Layer = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Instructions from Dockerfile.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.image
   */
  Directive: {

    /**
     * Default value for unsupported/missing directive.
     */
    DIRECTIVE_UNSPECIFIED: 0,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    MAINTAINER: 1,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    RUN: 2,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    CMD: 3,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    LABEL: 4,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    EXPOSE: 5,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    ENV: 6,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    ADD: 7,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    COPY: 8,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    ENTRYPOINT: 9,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    VOLUME: 10,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    USER: 11,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    WORKDIR: 12,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    ARG: 13,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    ONBUILD: 14,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    STOPSIGNAL: 15,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    HEALTHCHECK: 16,

    /**
     * https://docs.docker.com/engine/reference/builder/
     */
    SHELL: 17
  }
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
 * @memberof grafeas.v1beta1.image
 * @see [grafeas.v1beta1.image.Fingerprint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/image/image.proto}
 */
const Fingerprint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Basis describes the base image portion (Note) of the DockerImage
 * relationship. Linked occurrences are derived from this or an
 * equivalent image via:
 *   FROM <Basis.resource_url>
 * Or an equivalent reference, e.g. a tag of the resource_url.
 *
 * @property {string} resourceUrl
 *   Required. Immutable. The resource_url for the resource representing the
 *   basis of associated occurrence images.
 *
 * @property {Object} fingerprint
 *   Required. Immutable. The fingerprint of the base image.
 *
 *   This object should have the same structure as [Fingerprint]{@link grafeas.v1beta1.image.Fingerprint}
 *
 * @typedef Basis
 * @memberof grafeas.v1beta1.image
 * @see [grafeas.v1beta1.image.Basis definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/image/image.proto}
 */
const Basis = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of an image occurrence.
 *
 * @property {Object} derivedImage
 *   Required. Immutable. The child image derived from the base image.
 *
 *   This object should have the same structure as [Derived]{@link grafeas.v1beta1.image.Derived}
 *
 * @typedef Details
 * @memberof grafeas.v1beta1.image
 * @see [grafeas.v1beta1.image.Details definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/image/image.proto}
 */
const Details = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Derived describes the derived image portion (Occurrence) of the DockerImage
 * relationship. This image would be produced from a Dockerfile with FROM
 * <DockerImage.Basis in attached Note>.
 *
 * @property {Object} fingerprint
 *   Required. The fingerprint of the derived image.
 *
 *   This object should have the same structure as [Fingerprint]{@link grafeas.v1beta1.image.Fingerprint}
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
 *   This object should have the same structure as [Layer]{@link grafeas.v1beta1.image.Layer}
 *
 * @property {string} baseResourceUrl
 *   Output only. This contains the base image URL for the derived image
 *   occurrence.
 *
 * @typedef Derived
 * @memberof grafeas.v1beta1.image
 * @see [grafeas.v1beta1.image.Derived definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/image/image.proto}
 */
const Derived = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
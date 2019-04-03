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
 * A vertex represents a 2D point in the image.
 * The normalized vertex coordinates are between 0 to 1 fractions relative to
 * the original plane (image, video). E.g. if the plane (e.g. whole image) would
 * have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would
 * be at the position (1, 6) on that plane.
 *
 * @property {number} x
 *   Required. Horizontal coordinate.
 *
 * @property {number} y
 *   Required. Vertical coordinate.
 *
 * @typedef NormalizedVertex
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.NormalizedVertex definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/geometry.proto}
 */
const NormalizedVertex = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A bounding polygon of a detected object on a plane.
 * On output both vertices and normalized_vertices are provided.
 * The polygon is formed by connecting vertices in the order they are listed.
 *
 * @property {Object[]} normalizedVertices
 *   Output only . The bounding polygon normalized vertices.
 *
 *   This object should have the same structure as [NormalizedVertex]{@link google.cloud.automl.v1beta1.NormalizedVertex}
 *
 * @typedef BoundingPoly
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.BoundingPoly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/geometry.proto}
 */
const BoundingPoly = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
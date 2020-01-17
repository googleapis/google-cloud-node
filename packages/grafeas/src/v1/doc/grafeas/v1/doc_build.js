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
 * Note holding the version of the provider's builder and the signature of the
 * provenance message in the build details occurrence.
 *
 * @property {string} builderVersion
 *   Required. Immutable. Version of the builder which produced this build.
 *
 * @typedef BuildNote
 * @memberof grafeas.v1
 * @see [grafeas.v1.BuildNote definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/build.proto}
 */
const BuildNote = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of a build occurrence.
 *
 * @property {Object} provenance
 *   Required. The actual provenance for the build.
 *
 *   This object should have the same structure as [BuildProvenance]{@link grafeas.v1.BuildProvenance}
 *
 * @property {string} provenanceBytes
 *   Serialized JSON representation of the provenance, used in generating the
 *   build signature in the corresponding build note. After verifying the
 *   signature, `provenance_bytes` can be unmarshalled and compared to the
 *   provenance to confirm that it is unchanged. A base64-encoded string
 *   representation of the provenance bytes is used for the signature in order
 *   to interoperate with openssl which expects this format for signature
 *   verification.
 *
 *   The serialized form is captured both to avoid ambiguity in how the
 *   provenance is marshalled to json as well to prevent incompatibilities with
 *   future changes.
 *
 * @typedef BuildOccurrence
 * @memberof grafeas.v1
 * @see [grafeas.v1.BuildOccurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/build.proto}
 */
const BuildOccurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
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
 * @property {Object} signature
 *   Signature of the build in occurrences pointing to this build note
 *   containing build details.
 *
 *   This object should have the same structure as [BuildSignature]{@link grafeas.v1beta1.build.BuildSignature}
 *
 * @typedef Build
 * @memberof grafeas.v1beta1.build
 * @see [grafeas.v1beta1.build.Build definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/build/build.proto}
 */
const Build = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message encapsulating the signature of the verified build.
 *
 * @property {string} publicKey
 *   Public key of the builder which can be used to verify that the related
 *   findings are valid and unchanged. If `key_type` is empty, this defaults
 *   to PEM encoded public keys.
 *
 *   This field may be empty if `key_id` references an external key.
 *
 *   For Cloud Build based signatures, this is a PEM encoded public
 *   key. To verify the Cloud Build signature, place the contents of
 *   this field into a file (public.pem). The signature field is base64-decoded
 *   into its binary representation in signature.bin, and the provenance bytes
 *   from `BuildDetails` are base64-decoded into a binary representation in
 *   signed.bin. OpenSSL can then verify the signature:
 *   `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
 *
 * @property {Buffer} signature
 *   Required. Signature of the related `BuildProvenance`. In JSON, this is
 *   base-64 encoded.
 *
 * @property {string} keyId
 *   An ID for the key used to sign. This could be either an ID for the key
 *   stored in `public_key` (such as the ID or fingerprint for a PGP key, or the
 *   CN for a cert), or a reference to an external key (such as a reference to a
 *   key in Cloud Key Management Service).
 *
 * @property {number} keyType
 *   The type of the key, either stored in `public_key` or referenced in
 *   `key_id`.
 *
 *   The number should be among the values of [KeyType]{@link grafeas.v1beta1.build.KeyType}
 *
 * @typedef BuildSignature
 * @memberof grafeas.v1beta1.build
 * @see [grafeas.v1beta1.build.BuildSignature definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/build/build.proto}
 */
const BuildSignature = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Public key formats.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.build
   */
  KeyType: {

    /**
     * `KeyType` is not set.
     */
    KEY_TYPE_UNSPECIFIED: 0,

    /**
     * `PGP ASCII Armored` public key.
     */
    PGP_ASCII_ARMORED: 1,

    /**
     * `PKIX PEM` public key.
     */
    PKIX_PEM: 2
  }
};

/**
 * Details of a build occurrence.
 *
 * @property {Object} provenance
 *   Required. The actual provenance for the build.
 *
 *   This object should have the same structure as [BuildProvenance]{@link grafeas.v1beta1.provenance.BuildProvenance}
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
 * @typedef Details
 * @memberof grafeas.v1beta1.build
 * @see [grafeas.v1beta1.build.Details definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/build/build.proto}
 */
const Details = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
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
 * Metadata for any related URL information.
 *
 * @property {string} url
 *   Specific URL associated with the resource.
 *
 * @property {string} label
 *   Label to describe usage of the URL.
 *
 * @typedef RelatedUrl
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.RelatedUrl definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/common/common.proto}
 */
const RelatedUrl = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Verifiers (e.g. Kritis implementations) MUST verify signatures
 * with respect to the trust anchors defined in policy (e.g. a Kritis policy).
 * Typically this means that the verifier has been configured with a map from
 * `public_key_id` to public key material (and any required parameters, e.g.
 * signing algorithm).
 *
 * In particular, verification implementations MUST NOT treat the signature
 * `public_key_id` as anything more than a key lookup hint. The `public_key_id`
 * DOES NOT validate or authenticate a public key; it only provides a mechanism
 * for quickly selecting a public key ALREADY CONFIGURED on the verifier through
 * a trusted channel. Verification implementations MUST reject signatures in any
 * of the following circumstances:
 *   * The `public_key_id` is not recognized by the verifier.
 *   * The public key that `public_key_id` refers to does not verify the
 *     signature with respect to the payload.
 *
 * The `signature` contents SHOULD NOT be "attached" (where the payload is
 * included with the serialized `signature` bytes). Verifiers MUST ignore any
 * "attached" payload and only verify signatures with respect to explicitly
 * provided payload (e.g. a `payload` field on the proto message that holds
 * this Signature, or the canonical serialization of the proto message that
 * holds this signature).
 *
 * @property {Buffer} signature
 *   The content of the signature, an opaque bytestring.
 *   The payload that this signature verifies MUST be unambiguously provided
 *   with the Signature during verification. A wrapper message might provide
 *   the payload explicitly. Alternatively, a message might have a canonical
 *   serialization that can always be unambiguously computed to derive the
 *   payload.
 *
 * @property {string} publicKeyId
 *   The identifier for the public key that verifies this signature.
 *     * The `public_key_id` is required.
 *     * The `public_key_id` MUST be an RFC3986 conformant URI.
 *     * When possible, the `public_key_id` SHOULD be an immutable reference,
 *       such as a cryptographic digest.
 *
 *   Examples of valid `public_key_id`s:
 *
 *   OpenPGP V4 public key fingerprint:
 *     * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA"
 *   See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more
 *   details on this scheme.
 *
 *   RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER
 *   serialization):
 *     * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"
 *     * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
 *
 * @typedef Signature
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.Signature definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/common/common.proto}
 */
const Signature = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Kind represents the kinds of notes supported.
 *
 * @enum {number}
 * @memberof grafeas.v1beta1
 */
const NoteKind = {

  /**
   * Unknown.
   */
  NOTE_KIND_UNSPECIFIED: 0,

  /**
   * The note and occurrence represent a package vulnerability.
   */
  VULNERABILITY: 1,

  /**
   * The note and occurrence assert build provenance.
   */
  BUILD: 2,

  /**
   * This represents an image basis relationship.
   */
  IMAGE: 3,

  /**
   * This represents a package installed via a package manager.
   */
  PACKAGE: 4,

  /**
   * The note and occurrence track deployment events.
   */
  DEPLOYMENT: 5,

  /**
   * The note and occurrence track the initial discovery status of a resource.
   */
  DISCOVERY: 6,

  /**
   * This represents a logical "role" that can attest to artifacts.
   */
  ATTESTATION: 7
};
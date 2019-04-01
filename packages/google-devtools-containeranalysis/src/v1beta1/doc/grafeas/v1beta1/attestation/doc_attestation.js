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
 * An attestation wrapper with a PGP-compatible signature. This message only
 * supports `ATTACHED` signatures, where the payload that is signed is included
 * alongside the signature itself in the same file.
 *
 * @property {string} signature
 *   The raw content of the signature, as output by GNU Privacy Guard (GPG) or
 *   equivalent.  Since this message only supports attached signatures, the
 *   payload that was signed must be attached. While the signature format
 *   supported is dependent on the verification implementation, currently only
 *   ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than
 *   `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor
 *   --output=signature.gpg payload.json` will create the signature content
 *   expected in this field in `signature.gpg` for the `payload.json`
 *   attestation payload.
 *
 * @property {number} contentType
 *   Type (for example schema) of the attestation payload that was signed.
 *   The verifier must ensure that the provided type is one that the verifier
 *   supports, and that the attestation payload is a valid instantiation of that
 *   type (for example by validating a JSON schema).
 *
 *   The number should be among the values of [ContentType]{@link grafeas.v1beta1.attestation.ContentType}
 *
 * @property {string} pgpKeyId
 *   The cryptographic fingerprint of the key used to generate the signature,
 *   as output by, e.g. `gpg --list-keys`. This should be the version 4, full
 *   160-bit fingerprint, expressed as a 40 character hexidecimal string. See
 *   https://tools.ietf.org/html/rfc4880#section-12.2 for details.
 *   Implementations may choose to acknowledge "LONG", "SHORT", or other
 *   abbreviated key IDs, but only the full fingerprint is guaranteed to work.
 *   In gpg, the full fingerprint can be retrieved from the `fpr` field
 *   returned when calling --list-keys with --with-colons.  For example:
 *   ```
 *   gpg --with-colons --with-fingerprint --force-v4-certs \
 *       --list-keys attester@example.com
 *   tru::1:1513631572:0:3:1:5
 *   pub:...<SNIP>...
 *   fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB:
 *   ```
 *   Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
 *
 * @typedef PgpSignedAttestation
 * @memberof grafeas.v1beta1.attestation
 * @see [grafeas.v1beta1.attestation.PgpSignedAttestation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/attestation/attestation.proto}
 */
const PgpSignedAttestation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type (for example schema) of the attestation payload that was signed.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.attestation
   */
  ContentType: {

    /**
     * `ContentType` is not set.
     */
    CONTENT_TYPE_UNSPECIFIED: 0,

    /**
     * Atomic format attestation signature. See
     * https://github.com/containers/image/blob/8a5d2f82a6e3263290c8e0276c3e0f64e77723e7/docs/atomic-signature.md
     * The payload extracted from `signature` is a JSON blob conforming to the
     * linked schema.
     */
    SIMPLE_SIGNING_JSON: 1
  }
};

/**
 * Note kind that represents a logical attestation "role" or "authority". For
 * example, an organization might have one `Authority` for "QA" and one for
 * "build". This Note is intended to act strictly as a grouping mechanism for
 * the attached Occurrences (Attestations). This grouping mechanism also
 * provides a security boundary, since IAM ACLs gate the ability for a principle
 * to attach an Occurrence to a given Note. It also provides a single point of
 * lookup to find all attached Attestation Occurrences, even if they don't all
 * live in the same project.
 *
 * @property {Object} hint
 *   Hint hints at the purpose of the attestation authority.
 *
 *   This object should have the same structure as [Hint]{@link grafeas.v1beta1.attestation.Hint}
 *
 * @typedef Authority
 * @memberof grafeas.v1beta1.attestation
 * @see [grafeas.v1beta1.attestation.Authority definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/attestation/attestation.proto}
 */
const Authority = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * This submessage provides human-readable hints about the purpose of the
   * Authority. Because the name of a Note acts as its resource reference, it is
   * important to disambiguate the canonical name of the Note (which might be a
   * UUID for security purposes) from "readable" names more suitable for debug
   * output. Note that these hints should NOT be used to look up authorities in
   * security sensitive contexts, such as when looking up Attestations to
   * verify.
   *
   * @property {string} humanReadableName
   *   The human readable name of this Attestation Authority, for example "qa".
   *
   * @typedef Hint
   * @memberof grafeas.v1beta1.attestation
   * @see [grafeas.v1beta1.attestation.Authority.Hint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/attestation/attestation.proto}
   */
  Hint: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Details of an attestation occurrence.
 *
 * @property {Object} attestation
 *   Attestation for the resource.
 *
 *   This object should have the same structure as [Attestation]{@link grafeas.v1beta1.attestation.Attestation}
 *
 * @typedef Details
 * @memberof grafeas.v1beta1.attestation
 * @see [grafeas.v1beta1.attestation.Details definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/attestation/attestation.proto}
 */
const Details = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Occurrence that represents a single "attestation". The authenticity of an
 * Attestation can be verified using the attached signature. If the verifier
 * trusts the public key of the signer, then verifying the signature is
 * sufficient to establish trust. In this circumstance, the Authority to which
 * this Attestation is attached is primarily useful for look-up (how to find
 * this Attestation if you already know the Authority and artifact to be
 * verified) and intent (which authority was this attestation intended to sign
 * for).
 *
 * @property {Object} pgpSignedAttestation
 *   A PGP signed attestation.
 *
 *   This object should have the same structure as [PgpSignedAttestation]{@link grafeas.v1beta1.attestation.PgpSignedAttestation}
 *
 * @typedef Attestation
 * @memberof grafeas.v1beta1.attestation
 * @see [grafeas.v1beta1.attestation.Attestation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/attestation/attestation.proto}
 */
const Attestation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
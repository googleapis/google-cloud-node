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
 * Note kind that represents a logical attestation "role" or "authority". For
 * example, an organization might have one `Authority` for "QA" and one for
 * "build". This note is intended to act strictly as a grouping mechanism for
 * the attached occurrences (Attestations). This grouping mechanism also
 * provides a security boundary, since IAM ACLs gate the ability for a principle
 * to attach an occurrence to a given note. It also provides a single point of
 * lookup to find all attached attestation occurrences, even if they don't all
 * live in the same project.
 *
 * @property {Object} hint
 *   Hint hints at the purpose of the attestation authority.
 *
 *   This object should have the same structure as [Hint]{@link grafeas.v1.Hint}
 *
 * @typedef AttestationNote
 * @memberof grafeas.v1
 * @see [grafeas.v1.AttestationNote definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/attestation.proto}
 */
const AttestationNote = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * This submessage provides human-readable hints about the purpose of the
   * authority. Because the name of a note acts as its resource reference, it is
   * important to disambiguate the canonical name of the Note (which might be a
   * UUID for security purposes) from "readable" names more suitable for debug
   * output. Note that these hints should not be used to look up authorities in
   * security sensitive contexts, such as when looking up attestations to
   * verify.
   *
   * @property {string} humanReadableName
   *   Required. The human readable name of this attestation authority, for
   *   example "qa".
   *
   * @typedef Hint
   * @memberof grafeas.v1
   * @see [grafeas.v1.AttestationNote.Hint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/attestation.proto}
   */
  Hint: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Occurrence that represents a single "attestation". The authenticity of an
 * attestation can be verified using the attached signature. If the verifier
 * trusts the public key of the signer, then verifying the signature is
 * sufficient to establish trust. In this circumstance, the authority to which
 * this attestation is attached is primarily useful for lookup (how to find
 * this attestation if you already know the authority and artifact to be
 * verified) and intent (for which authority this attestation was intended to
 * sign.
 *
 * @property {string} serializedPayload
 *   Required. The serialized payload that is verified by one or more
 *   `signatures`.
 *
 * @property {Object[]} signatures
 *   One or more signatures over `serialized_payload`.  Verifier implementations
 *   should consider this attestation message verified if at least one
 *   `signature` verifies `serialized_payload`.  See `Signature` in common.proto
 *   for more details on signature structure and verification.
 *
 *   This object should have the same structure as [Signature]{@link grafeas.v1.Signature}
 *
 * @typedef AttestationOccurrence
 * @memberof grafeas.v1
 * @see [grafeas.v1.AttestationOccurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/attestation.proto}
 */
const AttestationOccurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
// Copyright 2018 Google LLC
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
 * A KeyRing is a toplevel logical grouping of CryptoKeys.
 *
 * @property {string} name
 *   Output only. The resource name for the KeyRing in the format
 *   `projects/* /locations/* /keyRings/*`.
 *
 * @property {Object} createTime
 *   Output only. The time at which this KeyRing was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef KeyRing
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.KeyRing definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const KeyRing = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A CryptoKey represents a logical key that can be used for cryptographic
 * operations.
 *
 * A CryptoKey is made up of one or more versions, which
 * represent the actual key material used in cryptographic operations.
 *
 * @property {string} name
 *   Output only. The resource name for this CryptoKey in the format
 *   `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
 *
 * @property {Object} primary
 *   Output only. A copy of the "primary" CryptoKeyVersion that will be used
 *   by Encrypt when this CryptoKey is given
 *   in EncryptRequest.name.
 *
 *   The CryptoKey's primary version can be updated via
 *   UpdateCryptoKeyPrimaryVersion.
 *
 *   All keys with purpose
 *   ENCRYPT_DECRYPT have a
 *   primary. For other keys, this field will be omitted.
 *
 *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
 *
 * @property {number} purpose
 *   The immutable purpose of this CryptoKey.
 *
 *   The number should be among the values of [CryptoKeyPurpose]{@link google.cloud.kms.v1.CryptoKeyPurpose}
 *
 * @property {Object} createTime
 *   Output only. The time at which this CryptoKey was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} nextRotationTime
 *   At next_rotation_time, the Key Management Service will automatically:
 *
 *   1. Create a new version of this CryptoKey.
 *   2. Mark the new version as primary.
 *
 *   Key rotations performed manually via
 *   CreateCryptoKeyVersion and
 *   UpdateCryptoKeyPrimaryVersion
 *   do not affect next_rotation_time.
 *
 *   Keys with purpose
 *   ENCRYPT_DECRYPT support
 *   automatic rotation. For other keys, this field must be omitted.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} rotationPeriod
 *   next_rotation_time will be advanced by this period when the service
 *   automatically rotates a key. Must be at least one day.
 *
 *   If rotation_period is set, next_rotation_time must also be set.
 *
 *   Keys with purpose
 *   ENCRYPT_DECRYPT support
 *   automatic rotation. For other keys, this field must be omitted.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} versionTemplate
 *   A template describing settings for new CryptoKeyVersion instances.
 *   The properties of new CryptoKeyVersion instances created by either
 *   CreateCryptoKeyVersion or
 *   auto-rotation are controlled by this template.
 *
 *   This object should have the same structure as [CryptoKeyVersionTemplate]{@link google.cloud.kms.v1.CryptoKeyVersionTemplate}
 *
 * @property {Object.<string, string>} labels
 *   Labels with user-defined metadata. For more information, see
 *   [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
 *
 * @typedef CryptoKey
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const CryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * CryptoKeyPurpose describes the cryptographic capabilities of a
   * CryptoKey. A given key can only be used for the operations allowed by
   * its purpose.
   *
   * @enum {number}
   * @memberof google.cloud.kms.v1
   */
  CryptoKeyPurpose: {

    /**
     * Not specified.
     */
    CRYPTO_KEY_PURPOSE_UNSPECIFIED: 0,

    /**
     * CryptoKeys with this purpose may be used with
     * Encrypt and
     * Decrypt.
     */
    ENCRYPT_DECRYPT: 1,

    /**
     * CryptoKeys with this purpose may be used with
     * AsymmetricSign and
     * GetPublicKey.
     */
    ASYMMETRIC_SIGN: 5,

    /**
     * CryptoKeys with this purpose may be used with
     * AsymmetricDecrypt and
     * GetPublicKey.
     */
    ASYMMETRIC_DECRYPT: 6
  }
};

/**
 * A CryptoKeyVersionTemplate specifies the properties to use when creating
 * a new CryptoKeyVersion, either manually with
 * CreateCryptoKeyVersion or
 * automatically as a result of auto-rotation.
 *
 * @property {number} protectionLevel
 *   ProtectionLevel to use when creating a CryptoKeyVersion based on
 *   this template. Immutable. Defaults to SOFTWARE.
 *
 *   The number should be among the values of [ProtectionLevel]{@link google.cloud.kms.v1.ProtectionLevel}
 *
 * @property {number} algorithm
 *   Required. Algorithm to use
 *   when creating a CryptoKeyVersion based on this template.
 *
 *   For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both
 *   this field is omitted and CryptoKey.purpose is
 *   ENCRYPT_DECRYPT.
 *
 *   The number should be among the values of [CryptoKeyVersionAlgorithm]{@link google.cloud.kms.v1.CryptoKeyVersionAlgorithm}
 *
 * @typedef CryptoKeyVersionTemplate
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CryptoKeyVersionTemplate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const CryptoKeyVersionTemplate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains an HSM-generated attestation about a key operation.
 *
 * @property {number} format
 *   Output only. The format of the attestation data.
 *
 *   The number should be among the values of [AttestationFormat]{@link google.cloud.kms.v1.AttestationFormat}
 *
 * @property {string} content
 *   Output only. The attestation data provided by the HSM when the key
 *   operation was performed.
 *
 * @typedef KeyOperationAttestation
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.KeyOperationAttestation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const KeyOperationAttestation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Attestion formats provided by the HSM.
   *
   * @enum {number}
   * @memberof google.cloud.kms.v1
   */
  AttestationFormat: {
    ATTESTATION_FORMAT_UNSPECIFIED: 0,

    /**
     * Cavium HSM attestation compressed with gzip. Note that this format is
     * defined by Cavium and subject to change at any time.
     */
    CAVIUM_V1_COMPRESSED: 3
  }
};

/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the
 * associated key material.
 *
 * An ENABLED version can be
 * used for cryptographic operations.
 *
 * For security reasons, the raw cryptographic key material represented by a
 * CryptoKeyVersion can never be viewed or exported. It can only be used to
 * encrypt, decrypt, or sign data when an authorized user or application invokes
 * Cloud KMS.
 *
 * @property {string} name
 *   Output only. The resource name for this CryptoKeyVersion in the format
 *   `projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*`.
 *
 * @property {number} state
 *   The current state of the CryptoKeyVersion.
 *
 *   The number should be among the values of [CryptoKeyVersionState]{@link google.cloud.kms.v1.CryptoKeyVersionState}
 *
 * @property {number} protectionLevel
 *   Output only. The ProtectionLevel describing how crypto operations are
 *   performed with this CryptoKeyVersion.
 *
 *   The number should be among the values of [ProtectionLevel]{@link google.cloud.kms.v1.ProtectionLevel}
 *
 * @property {number} algorithm
 *   Output only. The CryptoKeyVersionAlgorithm that this
 *   CryptoKeyVersion supports.
 *
 *   The number should be among the values of [CryptoKeyVersionAlgorithm]{@link google.cloud.kms.v1.CryptoKeyVersionAlgorithm}
 *
 * @property {Object} attestation
 *   Output only. Statement that was generated and signed by the HSM at key
 *   creation time. Use this statement to verify attributes of the key as stored
 *   on the HSM, independently of Google. Only provided for key versions with
 *   protection_level HSM.
 *
 *   This object should have the same structure as [KeyOperationAttestation]{@link google.cloud.kms.v1.KeyOperationAttestation}
 *
 * @property {Object} createTime
 *   Output only. The time at which this CryptoKeyVersion was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} generateTime
 *   Output only. The time this CryptoKeyVersion's key material was
 *   generated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} destroyTime
 *   Output only. The time this CryptoKeyVersion's key material is scheduled
 *   for destruction. Only present if state is
 *   DESTROY_SCHEDULED.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} destroyEventTime
 *   Output only. The time this CryptoKeyVersion's key material was
 *   destroyed. Only present if state is
 *   DESTROYED.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef CryptoKeyVersion
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CryptoKeyVersion definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const CryptoKeyVersion = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The algorithm of the CryptoKeyVersion, indicating what
   * parameters must be used for each cryptographic operation.
   *
   * The
   * GOOGLE_SYMMETRIC_ENCRYPTION
   * algorithm is usable with CryptoKey.purpose
   * ENCRYPT_DECRYPT.
   *
   * Algorithms beginning with "RSA_SIGN_" are usable with CryptoKey.purpose
   * ASYMMETRIC_SIGN.
   *
   * The fields in the name after "RSA_SIGN_" correspond to the following
   * parameters: padding algorithm, modulus bit length, and digest algorithm.
   *
   * For PSS, the salt length used is equal to the length of digest
   * algorithm. For example,
   * RSA_SIGN_PSS_2048_SHA256
   * will use PSS with a salt length of 256 bits or 32 bytes.
   *
   * Algorithms beginning with "RSA_DECRYPT_" are usable with
   * CryptoKey.purpose
   * ASYMMETRIC_DECRYPT.
   *
   * The fields in the name after "RSA_DECRYPT_" correspond to the following
   * parameters: padding algorithm, modulus bit length, and digest algorithm.
   *
   * Algorithms beginning with "EC_SIGN_" are usable with CryptoKey.purpose
   * ASYMMETRIC_SIGN.
   *
   * The fields in the name after "EC_SIGN_" correspond to the following
   * parameters: elliptic curve, digest algorithm.
   *
   * @enum {number}
   * @memberof google.cloud.kms.v1
   */
  CryptoKeyVersionAlgorithm: {

    /**
     * Not specified.
     */
    CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED: 0,

    /**
     * Creates symmetric encryption keys.
     */
    GOOGLE_SYMMETRIC_ENCRYPTION: 1,

    /**
     * RSASSA-PSS 2048 bit key with a SHA256 digest.
     */
    RSA_SIGN_PSS_2048_SHA256: 2,

    /**
     * RSASSA-PSS 3072 bit key with a SHA256 digest.
     */
    RSA_SIGN_PSS_3072_SHA256: 3,

    /**
     * RSASSA-PSS 4096 bit key with a SHA256 digest.
     */
    RSA_SIGN_PSS_4096_SHA256: 4,

    /**
     * RSASSA-PKCS1-v1_5 with a 2048 bit key and a SHA256 digest.
     */
    RSA_SIGN_PKCS1_2048_SHA256: 5,

    /**
     * RSASSA-PKCS1-v1_5 with a 3072 bit key and a SHA256 digest.
     */
    RSA_SIGN_PKCS1_3072_SHA256: 6,

    /**
     * RSASSA-PKCS1-v1_5 with a 4096 bit key and a SHA256 digest.
     */
    RSA_SIGN_PKCS1_4096_SHA256: 7,

    /**
     * RSAES-OAEP 2048 bit key with a SHA256 digest.
     */
    RSA_DECRYPT_OAEP_2048_SHA256: 8,

    /**
     * RSAES-OAEP 3072 bit key with a SHA256 digest.
     */
    RSA_DECRYPT_OAEP_3072_SHA256: 9,

    /**
     * RSAES-OAEP 4096 bit key with a SHA256 digest.
     */
    RSA_DECRYPT_OAEP_4096_SHA256: 10,

    /**
     * ECDSA on the NIST P-256 curve with a SHA256 digest.
     */
    EC_SIGN_P256_SHA256: 12,

    /**
     * ECDSA on the NIST P-384 curve with a SHA384 digest.
     */
    EC_SIGN_P384_SHA384: 13
  },

  /**
   * The state of a CryptoKeyVersion, indicating if it can be used.
   *
   * @enum {number}
   * @memberof google.cloud.kms.v1
   */
  CryptoKeyVersionState: {

    /**
     * Not specified.
     */
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED: 0,

    /**
     * This version is still being generated. It may not be used, enabled,
     * disabled, or destroyed yet. Cloud KMS will automatically mark this
     * version ENABLED as soon as the version is ready.
     */
    PENDING_GENERATION: 5,

    /**
     * This version may be used for cryptographic operations.
     */
    ENABLED: 1,

    /**
     * This version may not be used, but the key material is still available,
     * and the version can be placed back into the ENABLED state.
     */
    DISABLED: 2,

    /**
     * This version is destroyed, and the key material is no longer stored.
     * A version may not leave this state once entered.
     */
    DESTROYED: 3,

    /**
     * This version is scheduled for destruction, and will be destroyed soon.
     * Call
     * RestoreCryptoKeyVersion
     * to put it back into the DISABLED state.
     */
    DESTROY_SCHEDULED: 4
  },

  /**
   * A view for CryptoKeyVersions. Controls the level of detail returned
   * for CryptoKeyVersions in
   * KeyManagementService.ListCryptoKeyVersions and
   * KeyManagementService.ListCryptoKeys.
   *
   * @enum {number}
   * @memberof google.cloud.kms.v1
   */
  CryptoKeyVersionView: {

    /**
     * Default view for each CryptoKeyVersion. Does not include
     * the attestation field.
     */
    CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED: 0,

    /**
     * Provides all fields in each CryptoKeyVersion, including the
     * attestation.
     */
    FULL: 1
  }
};

/**
 * The public key for a given CryptoKeyVersion. Obtained via
 * GetPublicKey.
 *
 * @property {string} pem
 *   The public key, encoded in PEM format. For more information, see the
 *   [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for
 *   [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and
 *   [Textual Encoding of Subject Public Key Info]
 *   (https://tools.ietf.org/html/rfc7468#section-13).
 *
 * @property {number} algorithm
 *   The Algorithm associated
 *   with this key.
 *
 *   The number should be among the values of [CryptoKeyVersionAlgorithm]{@link google.cloud.kms.v1.CryptoKeyVersionAlgorithm}
 *
 * @typedef PublicKey
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.PublicKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
const PublicKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ProtectionLevel specifies how cryptographic operations are performed.
 *
 * @enum {number}
 * @memberof google.cloud.kms.v1
 */
const ProtectionLevel = {

  /**
   * Not specified.
   */
  PROTECTION_LEVEL_UNSPECIFIED: 0,

  /**
   * Crypto operations are performed in software.
   */
  SOFTWARE: 1,

  /**
   * Crypto operations are performed in a Hardware Security Module.
   */
  HSM: 2
};
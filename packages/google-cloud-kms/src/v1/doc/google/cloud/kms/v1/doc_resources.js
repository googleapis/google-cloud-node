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
var KeyRing = {
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
 *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
 *
 * @property {number} purpose
 *   The immutable purpose of this CryptoKey. Currently, the only acceptable
 *   purpose is ENCRYPT_DECRYPT.
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
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} rotationPeriod
 *   next_rotation_time will be advanced by this period when the service
 *   automatically rotates a key. Must be at least one day.
 *
 *   If rotation_period is set, next_rotation_time must also be set.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object.<string, string>} labels
 *   Labels with user-defined metadata. For more information, see
 *   [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
 *
 * @typedef CryptoKey
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/resources.proto}
 */
var CryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * CryptoKeyPurpose describes the capabilities of a CryptoKey. Two
   * keys with the same purpose may use different underlying algorithms, but
   * must support the same set of operations.
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
    ENCRYPT_DECRYPT: 1
  }
};

/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the
 * associated key material.
 *
 * It can be used for cryptographic operations either directly, or via its
 * parent CryptoKey, in which case the server will choose the appropriate
 * version for the operation.
 *
 * For security reasons, the raw cryptographic key material represented by a
 * CryptoKeyVersion can never be viewed or exported. It can only be used to
 * encrypt or decrypt data when an authorized user or application invokes Cloud
 * KMS.
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
 * @property {Object} createTime
 *   Output only. The time at which this CryptoKeyVersion was created.
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
var CryptoKeyVersion = {
  // This is for documentation. Actual contents will be loaded by gRPC.

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
     * This version may be used in Encrypt and
     * Decrypt requests.
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
  }
};
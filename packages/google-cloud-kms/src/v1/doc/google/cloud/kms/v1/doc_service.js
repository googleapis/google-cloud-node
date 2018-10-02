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
 * Request message for KeyManagementService.ListKeyRings.
 *
 * @property {string} parent
 *   Required. The resource name of the location associated with the
 *   KeyRings, in the format `projects/* /locations/*`.
 *
 * @property {number} pageSize
 *   Optional limit on the number of KeyRings to include in the
 *   response.  Further KeyRings can subsequently be obtained by
 *   including the ListKeyRingsResponse.next_page_token in a subsequent
 *   request.  If unspecified, the server will pick an appropriate default.
 *
 * @property {string} pageToken
 *   Optional pagination token, returned earlier via
 *   ListKeyRingsResponse.next_page_token.
 *
 * @typedef ListKeyRingsRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListKeyRingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListKeyRingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.ListCryptoKeys.
 *
 * @property {string} parent
 *   Required. The resource name of the KeyRing to list, in the format
 *   `projects/* /locations/* /keyRings/*`.
 *
 * @property {number} pageSize
 *   Optional limit on the number of CryptoKeys to include in the
 *   response.  Further CryptoKeys can subsequently be obtained by
 *   including the ListCryptoKeysResponse.next_page_token in a subsequent
 *   request.  If unspecified, the server will pick an appropriate default.
 *
 * @property {string} pageToken
 *   Optional pagination token, returned earlier via
 *   ListCryptoKeysResponse.next_page_token.
 *
 * @property {number} versionView
 *   The fields of the primary version to include in the response.
 *
 *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
 *
 * @typedef ListCryptoKeysRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListCryptoKeysRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListCryptoKeysRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.ListCryptoKeyVersions.
 *
 * @property {string} parent
 *   Required. The resource name of the CryptoKey to list, in the format
 *   `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
 *
 * @property {number} pageSize
 *   Optional limit on the number of CryptoKeyVersions to
 *   include in the response. Further CryptoKeyVersions can
 *   subsequently be obtained by including the
 *   ListCryptoKeyVersionsResponse.next_page_token in a subsequent request.
 *   If unspecified, the server will pick an appropriate default.
 *
 * @property {string} pageToken
 *   Optional pagination token, returned earlier via
 *   ListCryptoKeyVersionsResponse.next_page_token.
 *
 * @property {number} view
 *   The fields to include in the response.
 *
 *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
 *
 * @typedef ListCryptoKeyVersionsRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListCryptoKeyVersionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListCryptoKeyVersionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.ListKeyRings.
 *
 * @property {Object[]} keyRings
 *   The list of KeyRings.
 *
 *   This object should have the same structure as [KeyRing]{@link google.cloud.kms.v1.KeyRing}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results. Pass this value in
 *   ListKeyRingsRequest.page_token to retrieve the next page of results.
 *
 * @property {number} totalSize
 *   The total number of KeyRings that matched the query.
 *
 * @typedef ListKeyRingsResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListKeyRingsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListKeyRingsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.ListCryptoKeys.
 *
 * @property {Object[]} cryptoKeys
 *   The list of CryptoKeys.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results. Pass this value in
 *   ListCryptoKeysRequest.page_token to retrieve the next page of results.
 *
 * @property {number} totalSize
 *   The total number of CryptoKeys that matched the query.
 *
 * @typedef ListCryptoKeysResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListCryptoKeysResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListCryptoKeysResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.ListCryptoKeyVersions.
 *
 * @property {Object[]} cryptoKeyVersions
 *   The list of CryptoKeyVersions.
 *
 *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results. Pass this value in
 *   ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
 *   results.
 *
 * @property {number} totalSize
 *   The total number of CryptoKeyVersions that matched the
 *   query.
 *
 * @typedef ListCryptoKeyVersionsResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.ListCryptoKeyVersionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const ListCryptoKeyVersionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.GetKeyRing.
 *
 * @property {string} name
 *   The name of the KeyRing to get.
 *
 * @typedef GetKeyRingRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.GetKeyRingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const GetKeyRingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.GetCryptoKey.
 *
 * @property {string} name
 *   The name of the CryptoKey to get.
 *
 * @typedef GetCryptoKeyRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.GetCryptoKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const GetCryptoKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.GetCryptoKeyVersion.
 *
 * @property {string} name
 *   The name of the CryptoKeyVersion to get.
 *
 * @typedef GetCryptoKeyVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.GetCryptoKeyVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const GetCryptoKeyVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.GetPublicKey.
 *
 * @property {string} name
 *   The name of the CryptoKeyVersion public key to
 *   get.
 *
 * @typedef GetPublicKeyRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.GetPublicKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const GetPublicKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.CreateKeyRing.
 *
 * @property {string} parent
 *   Required. The resource name of the location associated with the
 *   KeyRings, in the format `projects/* /locations/*`.
 *
 * @property {string} keyRingId
 *   Required. It must be unique within a location and match the regular
 *   expression `[a-zA-Z0-9_-]{1,63}`
 *
 * @property {Object} keyRing
 *   A KeyRing with initial field values.
 *
 *   This object should have the same structure as [KeyRing]{@link google.cloud.kms.v1.KeyRing}
 *
 * @typedef CreateKeyRingRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CreateKeyRingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const CreateKeyRingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.CreateCryptoKey.
 *
 * @property {string} parent
 *   Required. The name of the KeyRing associated with the
 *   CryptoKeys.
 *
 * @property {string} cryptoKeyId
 *   Required. It must be unique within a KeyRing and match the regular
 *   expression `[a-zA-Z0-9_-]{1,63}`
 *
 * @property {Object} cryptoKey
 *   A CryptoKey with initial field values.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}
 *
 * @typedef CreateCryptoKeyRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CreateCryptoKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const CreateCryptoKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.CreateCryptoKeyVersion.
 *
 * @property {string} parent
 *   Required. The name of the CryptoKey associated with
 *   the CryptoKeyVersions.
 *
 * @property {Object} cryptoKeyVersion
 *   A CryptoKeyVersion with initial field values.
 *
 *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
 *
 * @typedef CreateCryptoKeyVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.CreateCryptoKeyVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const CreateCryptoKeyVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.UpdateCryptoKey.
 *
 * @property {Object} cryptoKey
 *   CryptoKey with updated values.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}
 *
 * @property {Object} updateMask
 *   Required list of fields to be updated in this request.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateCryptoKeyRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.UpdateCryptoKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const UpdateCryptoKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.UpdateCryptoKeyVersion.
 *
 * @property {Object} cryptoKeyVersion
 *   CryptoKeyVersion with updated values.
 *
 *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
 *
 * @property {Object} updateMask
 *   Required list of fields to be updated in this request.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateCryptoKeyVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.UpdateCryptoKeyVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const UpdateCryptoKeyVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.Encrypt.
 *
 * @property {string} name
 *   Required. The resource name of the CryptoKey or CryptoKeyVersion
 *   to use for encryption.
 *
 *   If a CryptoKey is specified, the server will use its
 *   primary version.
 *
 * @property {string} plaintext
 *   Required. The data to encrypt. Must be no larger than 64KiB.
 *
 *   The maximum size depends on the key version's
 *   protection_level. For
 *   SOFTWARE keys, the plaintext must be no larger
 *   than 64KiB. For HSM keys, the combined length of the
 *   plaintext and additional_authenticated_data fields must be no larger than
 *   8KiB.
 *
 * @property {string} additionalAuthenticatedData
 *   Optional data that, if specified, must also be provided during decryption
 *   through DecryptRequest.additional_authenticated_data.
 *
 *   The maximum size depends on the key version's
 *   protection_level. For
 *   SOFTWARE keys, the AAD must be no larger than
 *   64KiB. For HSM keys, the combined length of the
 *   plaintext and additional_authenticated_data fields must be no larger than
 *   8KiB.
 *
 * @typedef EncryptRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.EncryptRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const EncryptRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.Decrypt.
 *
 * @property {string} name
 *   Required. The resource name of the CryptoKey to use for decryption.
 *   The server will choose the appropriate version.
 *
 * @property {string} ciphertext
 *   Required. The encrypted data originally returned in
 *   EncryptResponse.ciphertext.
 *
 * @property {string} additionalAuthenticatedData
 *   Optional data that must match the data originally supplied in
 *   EncryptRequest.additional_authenticated_data.
 *
 * @typedef DecryptRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.DecryptRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const DecryptRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.AsymmetricSign.
 *
 * @property {string} name
 *   Required. The resource name of the CryptoKeyVersion to use for signing.
 *
 * @property {Object} digest
 *   Required. The digest of the data to sign. The digest must be produced with
 *   the same digest algorithm as specified by the key version's
 *   algorithm.
 *
 *   This object should have the same structure as [Digest]{@link google.cloud.kms.v1.Digest}
 *
 * @typedef AsymmetricSignRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.AsymmetricSignRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const AsymmetricSignRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.AsymmetricDecrypt.
 *
 * @property {string} name
 *   Required. The resource name of the CryptoKeyVersion to use for
 *   decryption.
 *
 * @property {string} ciphertext
 *   Required. The data encrypted with the named CryptoKeyVersion's public
 *   key using OAEP.
 *
 * @typedef AsymmetricDecryptRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.AsymmetricDecryptRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const AsymmetricDecryptRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.Decrypt.
 *
 * @property {string} plaintext
 *   The decrypted data originally supplied in EncryptRequest.plaintext.
 *
 * @typedef DecryptResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.DecryptResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const DecryptResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.Encrypt.
 *
 * @property {string} name
 *   The resource name of the CryptoKeyVersion used in encryption.
 *
 * @property {string} ciphertext
 *   The encrypted data.
 *
 * @typedef EncryptResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.EncryptResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const EncryptResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.AsymmetricSign.
 *
 * @property {string} signature
 *   The created signature.
 *
 * @typedef AsymmetricSignResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.AsymmetricSignResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const AsymmetricSignResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KeyManagementService.AsymmetricDecrypt.
 *
 * @property {string} plaintext
 *   The decrypted data originally encrypted with the matching public key.
 *
 * @typedef AsymmetricDecryptResponse
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.AsymmetricDecryptResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const AsymmetricDecryptResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
 *
 * @property {string} name
 *   The resource name of the CryptoKey to update.
 *
 * @property {string} cryptoKeyVersionId
 *   The id of the child CryptoKeyVersion to use as primary.
 *
 * @typedef UpdateCryptoKeyPrimaryVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const UpdateCryptoKeyPrimaryVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.DestroyCryptoKeyVersion.
 *
 * @property {string} name
 *   The resource name of the CryptoKeyVersion to destroy.
 *
 * @typedef DestroyCryptoKeyVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.DestroyCryptoKeyVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const DestroyCryptoKeyVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KeyManagementService.RestoreCryptoKeyVersion.
 *
 * @property {string} name
 *   The resource name of the CryptoKeyVersion to restore.
 *
 * @typedef RestoreCryptoKeyVersionRequest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.RestoreCryptoKeyVersionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const RestoreCryptoKeyVersionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Digest holds a cryptographic message digest.
 *
 * @property {string} sha256
 *   A message digest produced with the SHA-256 algorithm.
 *
 * @property {string} sha384
 *   A message digest produced with the SHA-384 algorithm.
 *
 * @property {string} sha512
 *   A message digest produced with the SHA-512 algorithm.
 *
 * @typedef Digest
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.Digest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const Digest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud KMS metadata for the given google.cloud.location.Location.
 *
 * @property {boolean} hsmAvailable
 *   Indicates whether CryptoKeys with
 *   protection_level
 *   HSM can be created in this location.
 *
 * @typedef LocationMetadata
 * @memberof google.cloud.kms.v1
 * @see [google.cloud.kms.v1.LocationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/kms/v1/service.proto}
 */
const LocationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
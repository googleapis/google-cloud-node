// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(name, plaintext) {
  // [START cloudkms_v1_generated_KeyManagementService_Encrypt_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the CryptoKey google.cloud.kms.v1.CryptoKey  or CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion 
   *  to use for encryption.
   *  If a CryptoKey google.cloud.kms.v1.CryptoKey  is specified, the server will use its
   *  primary version google.cloud.kms.v1.CryptoKey.primary.
   */
  // const name = 'abc123'
  /**
   *  Required. The data to encrypt. Must be no larger than 64KiB.
   *  The maximum size depends on the key version's
   *  protection_level google.cloud.kms.v1.CryptoKeyVersionTemplate.protection_level. For
   *  SOFTWARE google.cloud.kms.v1.ProtectionLevel.SOFTWARE  keys, the plaintext must be no larger
   *  than 64KiB. For HSM google.cloud.kms.v1.ProtectionLevel.HSM  keys, the combined length of the
   *  plaintext and additional_authenticated_data fields must be no larger than
   *  8KiB.
   */
  // const plaintext = 'Buffer.from('string')'
  /**
   *  Optional. Optional data that, if specified, must also be provided during decryption
   *  through DecryptRequest.additional_authenticated_data google.cloud.kms.v1.DecryptRequest.additional_authenticated_data.
   *  The maximum size depends on the key version's
   *  protection_level google.cloud.kms.v1.CryptoKeyVersionTemplate.protection_level. For
   *  SOFTWARE google.cloud.kms.v1.ProtectionLevel.SOFTWARE  keys, the AAD must be no larger than
   *  64KiB. For HSM google.cloud.kms.v1.ProtectionLevel.HSM  keys, the combined length of the
   *  plaintext and additional_authenticated_data fields must be no larger than
   *  8KiB.
   */
  // const additionalAuthenticatedData = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the EncryptRequest.plaintext google.cloud.kms.v1.EncryptRequest.plaintext. If
   *  specified, KeyManagementService google.cloud.kms.v1.KeyManagementService  will verify the integrity of the
   *  received EncryptRequest.plaintext google.cloud.kms.v1.EncryptRequest.plaintext  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C(EncryptRequest.plaintext google.cloud.kms.v1.EncryptRequest.plaintext) is equal to
   *  EncryptRequest.plaintext_crc32c google.cloud.kms.v1.EncryptRequest.plaintext_crc32c, and if so, perform a limited number of
   *  retries. A persistent mismatch may indicate an issue in your computation of
   *  the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const plaintextCrc32c = {}
  /**
   *  Optional. An optional CRC32C checksum of the
   *  EncryptRequest.additional_authenticated_data google.cloud.kms.v1.EncryptRequest.additional_authenticated_data. If specified,
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will verify the integrity of the received
   *  EncryptRequest.additional_authenticated_data google.cloud.kms.v1.EncryptRequest.additional_authenticated_data  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C(EncryptRequest.additional_authenticated_data google.cloud.kms.v1.EncryptRequest.additional_authenticated_data) is equal to
   *  EncryptRequest.additional_authenticated_data_crc32c google.cloud.kms.v1.EncryptRequest.additional_authenticated_data_crc32c, and if so, perform
   *  a limited number of retries. A persistent mismatch may indicate an issue in
   *  your computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const additionalAuthenticatedDataCrc32c = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callEncrypt() {
    // Construct request
    const request = {
      name,
      plaintext,
    };

    // Run request
    const response = await kmsClient.encrypt(request);
    console.log(response);
  }

  callEncrypt();
  // [END cloudkms_v1_generated_KeyManagementService_Encrypt_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

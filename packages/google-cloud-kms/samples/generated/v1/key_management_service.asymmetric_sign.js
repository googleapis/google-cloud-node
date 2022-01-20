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

function main(name) {
  // [START cloudkms_v1_generated_KeyManagementService_AsymmetricSign_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  to use for signing.
   */
  // const name = 'abc123'
  /**
   *  Optional. The digest of the data to sign. The digest must be produced with
   *  the same digest algorithm as specified by the key version's
   *  algorithm google.cloud.kms.v1.CryptoKeyVersion.algorithm.
   */
  // const digest = {}
  /**
   *  Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest google.cloud.kms.v1.AsymmetricSignRequest.digest. If
   *  specified, KeyManagementService google.cloud.kms.v1.KeyManagementService  will verify the integrity of the
   *  received AsymmetricSignRequest.digest google.cloud.kms.v1.AsymmetricSignRequest.digest  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C(AsymmetricSignRequest.digest google.cloud.kms.v1.AsymmetricSignRequest.digest) is equal to
   *  AsymmetricSignRequest.digest_crc32c google.cloud.kms.v1.AsymmetricSignRequest.digest_crc32c, and if so, perform a limited
   *  number of retries. A persistent mismatch may indicate an issue in your
   *  computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const digestCrc32c = {}
  /**
   *  Optional. This field will only be honored for RAW_PKCS1 keys.
   *  The data to sign. A digest is computed over the data that will be signed,
   *  PKCS #1 padding is applied to the digest directly and then encrypted.
   */
  // const data = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data google.cloud.kms.v1.AsymmetricSignRequest.data. If
   *  specified, KeyManagementService google.cloud.kms.v1.KeyManagementService  will verify the integrity of the
   *  received AsymmetricSignRequest.data google.cloud.kms.v1.AsymmetricSignRequest.data  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C(AsymmetricSignRequest.data google.cloud.kms.v1.AsymmetricSignRequest.data) is equal to
   *  AsymmetricSignRequest.data_crc32c google.cloud.kms.v1.AsymmetricSignRequest.data_crc32c, and if so, perform a limited
   *  number of retries. A persistent mismatch may indicate an issue in your
   *  computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const dataCrc32c = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callAsymmetricSign() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await kmsClient.asymmetricSign(request);
    console.log(response);
  }

  callAsymmetricSign();
  // [END cloudkms_v1_generated_KeyManagementService_AsymmetricSign_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(name, data, mac) {
  // [START cloudkms_v1_generated_KeyManagementService_MacVerify_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] to use for verification.
   */
  // const name = 'abc123'
  /**
   *  Required. The data used previously as a [MacSignRequest.data][google.cloud.kms.v1.MacSignRequest.data] to generate the MAC
   *  tag.
   */
  // const data = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the [MacVerifyRequest.data][google.cloud.kms.v1.MacVerifyRequest.data]. If
   *  specified, [KeyManagementService][google.cloud.kms.v1.KeyManagementService] will verify the integrity of the
   *  received [MacVerifyRequest.data][google.cloud.kms.v1.MacVerifyRequest.data] using this checksum.
   *  [KeyManagementService][google.cloud.kms.v1.KeyManagementService] will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C([MacVerifyRequest.data][google.cloud.kms.v1.MacVerifyRequest.data]) is equal to
   *  [MacVerifyRequest.data_crc32c][google.cloud.kms.v1.MacVerifyRequest.data_crc32c], and if so, perform a limited
   *  number of retries. A persistent mismatch may indicate an issue in your
   *  computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const dataCrc32c = ''
  /**
   *  Required. The signature to verify.
   */
  // const mac = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the [MacVerifyRequest.mac][google.cloud.kms.v1.MacVerifyRequest.mac]. If
   *  specified, [KeyManagementService][google.cloud.kms.v1.KeyManagementService] will verify the integrity of the
   *  received [MacVerifyRequest.mac][google.cloud.kms.v1.MacVerifyRequest.mac] using this checksum.
   *  [KeyManagementService][google.cloud.kms.v1.KeyManagementService] will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C([MacVerifyRequest.tag][]) is equal to
   *  [MacVerifyRequest.mac_crc32c][google.cloud.kms.v1.MacVerifyRequest.mac_crc32c], and if so, perform a limited
   *  number of retries. A persistent mismatch may indicate an issue in your
   *  computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const macCrc32c = ''

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function macVerify() {
    // Construct request
    const request = {
      name,
      data,
      mac,
    };

    // Run request
    const response = await kmsClient.macVerify(request);
    console.log(response);
  }

  macVerify();
  // [END cloudkms_v1_generated_KeyManagementService_MacVerify_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

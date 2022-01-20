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

function main(name, data) {
  // [START cloudkms_v1_generated_KeyManagementService_MacSign_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  to use for signing.
   */
  // const name = 'abc123'
  /**
   *  Required. The data to sign. The MAC tag is computed over this data field based on
   *  the specific algorithm.
   */
  // const data = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the MacSignRequest.data google.cloud.kms.v1.MacSignRequest.data. If
   *  specified, KeyManagementService google.cloud.kms.v1.KeyManagementService  will verify the integrity of the
   *  received MacSignRequest.data google.cloud.kms.v1.MacSignRequest.data  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will report an error if the checksum verification
   *  fails. If you receive a checksum error, your client should verify that
   *  CRC32C(MacSignRequest.data google.cloud.kms.v1.MacSignRequest.data) is equal to
   *  MacSignRequest.data_crc32c google.cloud.kms.v1.MacSignRequest.data_crc32c, and if so, perform a limited
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

  async function callMacSign() {
    // Construct request
    const request = {
      name,
      data,
    };

    // Run request
    const response = await kmsClient.macSign(request);
    console.log(response);
  }

  callMacSign();
  // [END cloudkms_v1_generated_KeyManagementService_MacSign_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

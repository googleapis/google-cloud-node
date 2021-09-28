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

function main(parent, cryptoKeyVersion) {
  // [START cloudkms_v1_generated_KeyManagementService_CreateCryptoKeyVersion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The [name][google.cloud.kms.v1.CryptoKey.name] of the [CryptoKey][google.cloud.kms.v1.CryptoKey] associated with
   *  the [CryptoKeyVersions][google.cloud.kms.v1.CryptoKeyVersion].
   */
  // const parent = 'abc123'
  /**
   *  Required. A [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] with initial field values.
   */
  // const cryptoKeyVersion = ''

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function createCryptoKeyVersion() {
    // Construct request
    const request = {
      parent,
      cryptoKeyVersion,
    };

    // Run request
    const response = await kmsClient.createCryptoKeyVersion(request);
    console.log(response);
  }

  createCryptoKeyVersion();
  // [END cloudkms_v1_generated_KeyManagementService_CreateCryptoKeyVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(parent, cryptoKeyId, cryptoKey) {
  // [START cloudkms_v1_generated_KeyManagementService_CreateCryptoKey_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name google.cloud.kms.v1.KeyRing.name  of the KeyRing associated with the
   *  CryptoKeys google.cloud.kms.v1.CryptoKey.
   */
  // const parent = 'abc123'
  /**
   *  Required. It must be unique within a KeyRing and match the regular
   *  expression `[a-zA-Z0-9_-]{1,63}`
   */
  // const cryptoKeyId = 'abc123'
  /**
   *  Required. A CryptoKey google.cloud.kms.v1.CryptoKey  with initial field values.
   */
  // const cryptoKey = {}
  /**
   *  If set to true, the request will create a CryptoKey google.cloud.kms.v1.CryptoKey  without any
   *  CryptoKeyVersions google.cloud.kms.v1.CryptoKeyVersion. You must manually call
   *  CreateCryptoKeyVersion google.cloud.kms.v1.KeyManagementService.CreateCryptoKeyVersion  or
   *  ImportCryptoKeyVersion google.cloud.kms.v1.KeyManagementService.ImportCryptoKeyVersion
   *  before you can use this CryptoKey google.cloud.kms.v1.CryptoKey.
   */
  // const skipInitialVersionCreation = true

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callCreateCryptoKey() {
    // Construct request
    const request = {
      parent,
      cryptoKeyId,
      cryptoKey,
    };

    // Run request
    const response = await kmsClient.createCryptoKey(request);
    console.log(response);
  }

  callCreateCryptoKey();
  // [END cloudkms_v1_generated_KeyManagementService_CreateCryptoKey_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

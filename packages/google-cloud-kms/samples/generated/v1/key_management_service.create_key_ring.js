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

function main(parent, keyRingId, keyRing) {
  // [START cloudkms_v1_generated_KeyManagementService_CreateKeyRing_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the location associated with the
   *  KeyRings google.cloud.kms.v1.KeyRing, in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. It must be unique within a location and match the regular
   *  expression `[a-zA-Z0-9_-]{1,63}`
   */
  // const keyRingId = 'abc123'
  /**
   *  Required. A KeyRing google.cloud.kms.v1.KeyRing  with initial field values.
   */
  // const keyRing = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callCreateKeyRing() {
    // Construct request
    const request = {
      parent,
      keyRingId,
      keyRing,
    };

    // Run request
    const response = await kmsClient.createKeyRing(request);
    console.log(response);
  }

  callCreateKeyRing();
  // [END cloudkms_v1_generated_KeyManagementService_CreateKeyRing_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

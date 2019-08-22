/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: Activate HMAC SA Key.
//   description: Activate HMAC SA Key.
//   usage: node hmacKeyActivate.js <hmacKeyAccessId> [projectId]

function main(
  hmacKeyAccessId = 'GOOG0234230X00',
  projectId = 'serviceAccountProjectId'
) {
  // [START storage_activate_hmac_key]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Activate HMAC SA Key
  async function activateHmacKey() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const hmacKeyAccessId = 'HMAC Access Key Id to update, e.g. GOOG0234230X00';
    // const projectId = 'The project Id this service account belongs to, e.g. serviceAccountProjectId';

    const hmacKey = storage.hmacKey(hmacKeyAccessId, {projectId});
    const [hmacKeyMetadata] = await hmacKey.setMetadata({state: 'ACTIVE'});

    console.log(`The HMAC key is now active.`);
    console.log(`The HMAC key metadata is:`);
    for (const [key, value] of Object.entries(hmacKeyMetadata)) {
      console.log(`${key}: ${value}`);
    }
  }
  // [END storage_activate_hmac_key]
  activateHmacKey();
}

main(...process.argv.slice(2));

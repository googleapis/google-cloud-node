/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: List HMAC SA Keys Metadata.
//   description: List HMAC SA Keys Metadata.
//   usage: node hmacKeyList.js [projectId]

function main(projectId = 'serviceAccountProjectId') {
  // [START storage_list_hmac_keys]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // List HMAC SA Keys' Metadata
  async function listHmacKeys() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const projectId = 'The project Id this service account belongs to, e.g. serviceAccountProjectId';
    const [hmacKeys] = await storage.getHmacKeys({projectId});

    // hmacKeys is an array of HmacKey objects.
    for (const hmacKey of hmacKeys) {
      console.log(
        `Service Account Email: ${hmacKey.metadata.serviceAccountEmail}`
      );
      console.log(`Access Id: ${hmacKey.metadata.accessId}`);
    }
  }
  // [END storage_list_hmac_keys]
  listHmacKeys();
}

main(...process.argv.slice(2));

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
//   title: Create HMAC SA Key.
//   description: Create HMAC SA Key.
//   usage: node hmacKeyCreate.js <serviceAccountEmail> [projectId]

function main(
  serviceAccountEmail = 'service-account@example.com',
  projectId = 'serviceAccountProjectId'
) {
  // [START storage_create_hmac_key]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Create HMAC SA Key
  async function createHmacKey() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const serviceAccountEmail = 'Service Account Email to associate HMAC Key';
    // const projectId = 'The project Id this service account to be created in, e.g. serviceAccountProjectId';

    const [hmacKey, secret] = await storage.createHmacKey(serviceAccountEmail, {
      projectId,
    });

    console.log(`The base64 encoded secret is: ${secret}`);
    console.log(`Do not miss that secret, there is no API to recover it.`);
    console.log(`The HMAC key metadata is:`);
    for (const [key, value] of Object.entries(hmacKey.metadata)) {
      console.log(`${key}: ${value}`);
    }
  }
  // [END storage_create_hmac_key]
  createHmacKey();
}

main(...process.argv.slice(2));

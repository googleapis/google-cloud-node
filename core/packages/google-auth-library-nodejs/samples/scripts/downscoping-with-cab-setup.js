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

// This script is used to generate the project configurations needed to
// end-to-end test Downscoping with Credential Access Boundaries in the Auth
// library.

// In order to run this script, the GOOGLE_APPLICATION_CREDENTIALS environment
// variable needs to be set to point to a service account key file.
//
// GCP project changes:
// --------------------
// The following IAM role need to be set on the service account:
// 1. Storage Admin (needed to create bucket and object).

// This script needs to be run once. It will do the following:
// 1. Generates a random ID for bucketName and objectName.
// 2. Creates a GCS bucket in the specified project defined in GOOGLE_APPLICATION_CREDENTIALS.
// 3. Creates two object in the bucket created in the last step.
// 4. Prints out the identifiers (bucketName, first objectName, second objectName)
//    to be used in the accompanying tests.
//
// The same service account used for this setup script should be used for
// the integration tests.
//
// It is safe to run the setup script again. A new bucket is created along with
// new objects. If run multiple times, it is advisable to delete
// unused buckets.

const {Storage} = require('@google-cloud/storage');
const fs = require('fs');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);
const CONTENT = 'first';

/**
 * Generates a random string of the specified length, optionally using the
 * specified alphabet.
 *
 * @param {number} length The length of the string to generate.
 * @return {string} A random string of the provided length.
 */
function generateRandomString(length) {
  const chars = [];
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    chars.push(
      allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)),
    );
  }
  return chars.join('');
}

async function main() {
  const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error('No GOOGLE_APPLICATION_CREDENTIALS env var is available');
  }
  const keys = JSON.parse(await readFile(keyFile, 'utf8'));

  const suffix = generateRandomString(10);
  const bucketName = `cab-int-bucket-${suffix}`;
  const objectName = `cab-first-${suffix}.txt`;
  const projectId = keys.project_id;
  const storage = new Storage(projectId);

  try {
    await storage.createBucket(bucketName);
    await storage.bucket(bucketName).file(objectName).save(CONTENT);
  } catch (error) {
    console.log(error.message);
  }

  console.log('bucket name: ' + bucketName);
  console.log('object name: ' + objectName);
}

main().catch(console.error);

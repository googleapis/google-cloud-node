// Copyright 2020 Google LLC
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

/**
 * This application demonstrates how to perform basic operations on encrypted
 * files with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(
  bucketName = 'my-bucket',
  fileName = 'test.txt',
  oldKey = process.env.GOOGLE_CLOUD_KMS_KEY_US,
  newKey = process.env.GOOGLE_CLOUD_KMS_KEY_ASIA
) {
  // [START storage_rotate_encryption_key]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const fileName = 'Nome of a file in the bucket, e.g. my-file';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function rotateEncryptionKey() {
    // See the "Generating your own encryption key" section above.
    // const oldKey = 'The current base64 encoded customer-supplied encryption key';
    // const newKey = 'A new base64 encoded customer-supplied encryption key';
    await storage
      .bucket(bucketName)
      .file(fileName, {
        encryptionKey: Buffer.from(oldKey, 'base64'),
      })
      .rotateEncryptionKey({
        encryptionKey: Buffer.from(newKey, 'base64'),
      });

    console.log(`Encryption key rotated successfully.`);
  }

  rotateEncryptionKey().catch(console.error);
  // [END storage_rotate_encryption_key]
}
main(...process.argv.slice(2));

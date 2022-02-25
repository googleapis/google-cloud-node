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

const path = require('path');

function main(
  bucketName = 'my-bucket',
  srcFileName = path.join(__dirname, '../resources', 'test.txt'),
  destFileName = 'test.txt',
  encryptionKey = process.env.GOOGLE_CLOUD_KMS_KEY_US
) {
  // [START storage_download_encrypted_file]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of your GCS file
  // const srcFileName = 'your-file-name';

  // The path to which the file should be downloaded
  // const destFileName = '/local/path/to/file.txt';

  // The Base64 encoded decryption key, which should be the same key originally
  // used to encrypt the file
  // const encryptionKey = 'TIbv/fjexq+VmtXzAlc63J4z5kFmWJ6NdAPQulQBT7g=';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function downloadEncryptedFile() {
    const options = {
      destination: destFileName,
    };

    // Decrypts and downloads the file. This can only be done with the key used
    // to encrypt and upload the file.
    await storage
      .bucket(bucketName)
      .file(srcFileName)
      .setEncryptionKey(Buffer.from(encryptionKey, 'base64'))
      .download(options);

    console.log(`File ${srcFileName} downloaded to ${destFileName}`);
  }

  downloadEncryptedFile().catch(console.error);
  // [END storage_download_encrypted_file]
}
main(...process.argv.slice(2));

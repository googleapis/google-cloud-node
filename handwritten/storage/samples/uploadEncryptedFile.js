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
const path = require('path');

function main(
  bucketName = 'my-bucket',
  srcFilename = path.join(__dirname, `../resources`, 'test.txt'),
  destFilename = `test.txt`,
  key = process.env.GOOGLE_CLOUD_KMS_KEY_US
) {
  // [START storage_upload_encrypted_file]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'Local file to upload, e.g. ./local/path/to/file.txt';
  // const destFilename = 'Remote destination for file, e.g. file_encrypted.txt';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function uploadEncryptedFile() {
    const options = {
      // The path to which the file should be uploaded, e.g. "file_encrypted.txt"
      destination: destFilename,
      // Encrypt the file with a customer-supplied key.
      // See the "Generating your own encryption key" section above.
      encryptionKey: Buffer.from(key, 'base64'),
    };

    // Encrypts and uploads a local file, e.g. "./local/path/to/file.txt".
    // The file will only be retrievable using the key used to upload it.
    await storage.bucket(bucketName).upload(srcFilename, options);

    console.log(
      `File ${srcFilename} uploaded to gs://${bucketName}/${destFilename}.`
    );
  }

  uploadEncryptedFile().catch(console.error);
  // [END storage_upload_encrypted_file]
}
main(...process.argv.slice(2));

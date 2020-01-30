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
 * This application demonstrates how to perform basic operations on files with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(
  bucketName = 'my-bucket',
  filename = 'test.txt',
  kmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_US
) {
  // [START storage_upload_with_kms_key]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';
  // const kmsKeyName = 'KMS key resource id, e.g. my-key';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function uploadFileWithKmsKey() {
    // Uploads a local file to the bucket with the kms key
    await storage.bucket(bucketName).upload(filename, {
      kmsKeyName,
    });

    console.log(`${filename} uploaded to ${bucketName} using ${kmsKeyName}.`);
  }

  uploadFileWithKmsKey().catch(console.error);
  // [END storage_upload_with_kms_key]
}
main(...process.argv.slice(2));

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
  srcBucketName = 'my-bucket',
  srcFilename = 'test2.txt',
  destBucketName = 'my-bucket',
  destFilename = 'test3.txt'
) {
  // [START storage_copy_file]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const srcBucketName = 'Name of the source bucket, e.g. my-bucket';
  // const srcFilename = 'Name of the source file, e.g. file.txt';
  // const destBucketName = 'Name of the destination bucket, e.g. my-other-bucket';
  // const destFilename = 'Destination name of file, e.g. file.txt';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function copyFile() {
    // Copies the file to the other bucket
    await storage
      .bucket(srcBucketName)
      .file(srcFilename)
      .copy(storage.bucket(destBucketName).file(destFilename));

    console.log(
      `gs://${srcBucketName}/${srcFilename} copied to gs://${destBucketName}/${destFilename}.`
    );
  }

  copyFile().catch(console.error);
  // [END storage_copy_file]
}
main(...process.argv.slice(2));

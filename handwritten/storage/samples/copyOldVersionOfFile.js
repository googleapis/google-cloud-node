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

'use strict';

// sample-metadata:
//   title: Copy Old Version Of File.
//   description: Copy Old Version Of File.
//   usage: node copyOldVersionOfFile.js <SRC_BUCKET_NAME> <SRC_FILE_NAME> <DEST_BUCKET_NAME> <DEST_FILE_NAME> <GENERATION>

function main(
  srcBucketName = 'my-bucket',
  srcFilename = 'test2.txt',
  destBucketName = 'my-bucket',
  destFilename = 'test3.txt',
  generation = 1
) {
  // [START storage_copy_file_archived_generation]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const srcBucketName = 'Name of the source bucket, e.g. my-bucket';
  // const srcFilename = 'Name of the source file, e.g. file.txt';
  // const destBucketName = 'Name of the destination bucket, e.g. my-other-bucket';
  // const destFilename = 'Destination name of file, e.g. file.txt';
  // const generation = 'The generation of file to copy, e.g. 1'

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function copyOldVersionOfFile() {
    // Copies the file to the other bucket
    await storage
      .bucket(srcBucketName)
      .file(srcFilename, {
        generation,
      })
      .copy(storage.bucket(destBucketName).file(destFilename));

    console.log(
      `Generation ${generation} of file ${srcFilename} in bucket ${srcBucketName} was copied to ${destFilename} in bucket ${destBucketName}.`
    );
  }

  copyOldVersionOfFile().catch(console.error);
  // [END storage_copy_file_archived_generation]
}
main(...process.argv.slice(2));

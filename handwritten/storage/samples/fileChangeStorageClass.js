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
//   title: Change File's Storage Class.
//   description: Change File's Storage Class.
//   usage: node fileChangeStorageClass.js <BUCKET_NAME> <FILE_NAME> <CLASS_NAME>

function main(
  bucketName = 'my-bucket',
  fileName = 'file.txt',
  storageClass = 'standard'
) {
  // [START storage_change_file_storage_class]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const fileName = 'File to access, e.g. file.txt';
  // const storageClass = 'Name of a storage class, e.g. standard';
  async function fileChangeStorageClass() {
    await storage
      .bucket(bucketName)
      .file(fileName)
      .setStorageClass(storageClass);

    console.log(`${fileName} has been set to ${storageClass}.`);
  }

  fileChangeStorageClass();
  // [END storage_change_file_storage_class]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

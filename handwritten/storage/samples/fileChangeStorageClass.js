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
  storageClass = 'standard',
  generationMatchPrecondition = 0
) {
  // [START storage_change_file_storage_class]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of your GCS file
  // const fileName = 'your-file-name';

  // The name of a storage class
  // See the StorageClass documentation for other valid storage classes:
  // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html
  // const storageClass = 'coldline';

  async function fileChangeStorageClass() {
    // Optional:
    // Set a generation-match precondition to avoid potential race conditions
    // and data corruptions. The request to upload is aborted if the object's
    // generation number does not match your precondition. For a destination
    // object that does not yet exist, set the ifGenerationMatch precondition to 0
    // If the destination object already exists in your bucket, set instead a
    // generation-match precondition using its generation number.
    const setStorageClassOptions = {
      ifGenerationMatch: generationMatchPrecondition,
    };

    await storage
      .bucket(bucketName)
      .file(fileName)
      .setStorageClass(storageClass, setStorageClassOptions);

    console.log(`${fileName} has been set to ${storageClass}`);
  }

  fileChangeStorageClass().catch(console.error);
  // [END storage_change_file_storage_class]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

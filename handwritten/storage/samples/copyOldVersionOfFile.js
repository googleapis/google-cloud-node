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
  destFileName = 'test3.txt',
  generation = 1,
  destinationGenerationMatchPrecondition = 0
) {
  // [START storage_copy_file_archived_generation]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const srcBucketName = "your-unique-bucket-name";

  // The ID of the GCS file to copy an old version of
  // const srcFilename = "your-file-name";

  // The generation of fileToCopy to copy
  // const generation = 1579287380533984;

  // The ID of the bucket to copy the file to
  // const destBucketName = 'target-file-bucket';

  // What to name the new file with the old data from srcFilename
  // const destFileName = "your-new-file";

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function copyOldVersionOfFile() {
    // Copies the file to the other bucket

    // Optional:
    // Set a generation-match precondition to avoid potential race conditions
    // and data corruptions. The request to upload is aborted if the object's
    // generation number does not match your precondition. For a destination
    // object that does not yet exist, set the ifGenerationMatch precondition to 0
    // If the destination object already exists in your bucket, set instead a
    // generation-match precondition using its generation number.
    const copyOptions = {
      preconditionOpts: {
        ifGenerationMatch: destinationGenerationMatchPrecondition,
      },
    };

    await storage
      .bucket(srcBucketName)
      .file(srcFilename, {
        generation,
      })
      .copy(storage.bucket(destBucketName).file(destFileName), copyOptions);

    console.log(
      `Generation ${generation} of file ${srcFilename} in bucket ${srcBucketName} was copied to ${destFileName} in bucket ${destBucketName}`
    );
  }

  copyOldVersionOfFile().catch(console.error);
  // [END storage_copy_file_archived_generation]
}
main(...process.argv.slice(2));

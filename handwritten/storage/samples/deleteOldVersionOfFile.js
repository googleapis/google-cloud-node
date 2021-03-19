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
//   title: Delete Old Version Of File.
//   description: Delete Old Version Of File.
//   usage: node deleteOldVersionOfFile.js <BUCKET_NAME> <FILE_NAME> <GENERATION>

function main(bucketName = 'my-bucket', fileName = 'test.txt', generation = 1) {
  // [START storage_delete_file_archived_generation]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of your GCS file
  // const fileName = 'your-file-name';

  // The generation of fileName to delete
  // const generation = 1579287380533984;

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function deleteOldVersionOfFile() {
    // Deletes the file from the bucket with given version
    await storage
      .bucket(bucketName)
      .file(fileName, {
        generation,
      })
      .delete();

    console.log(
      `Generation ${generation} of file ${fileName} was deleted from ${bucketName}`
    );
  }

  deleteOldVersionOfFile().catch(console.error);
  // [END storage_delete_file_archived_generation]
}
main(...process.argv.slice(2));

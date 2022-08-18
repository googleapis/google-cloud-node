// Copyright 2019 Google LLC
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
//   title: Storage Set File Metadata.
//   description: Set file metadata.
//   usage: node fileSetMetadata.js <BUCKET_NAME> <FILE_NAME>

function main(
  bucketName = 'my-bucket',
  fileName = 'file.txt',
  generationMatchPrecondition = 0
) {
  // [START storage_set_metadata]
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

  async function setFileMetadata() {
    // Optional: set a generation-match precondition to avoid potential race
    // conditions and data corruptions. The request to upload is aborted if the
    // object's generation number does not match your precondition.
    const options = {
      ifGenerationMatch: generationMatchPrecondition,
    };

    // Set file metadata.
    const [metadata] = await storage
      .bucket(bucketName)
      .file(fileName)
      .setMetadata(
        {
          // Predefined metadata for server e.g. 'cacheControl', 'contentDisposition',
          // 'contentEncoding', 'contentLanguage', 'contentType'
          contentDisposition:
            'attachment; filename*=utf-8\'\'"anotherImage.jpg"',
          contentType: 'image/jpeg',

          // A note or actionable items for user e.g. uniqueId, object description,
          // or other useful information.
          metadata: {
            description: 'file description...',
            modified: '1900-01-01',
          },
        },
        options
      );

    console.log(
      'Updated metadata for object',
      fileName,
      'in bucket ',
      bucketName
    );
    console.log(metadata);
  }

  setFileMetadata().catch(console.error);
  // [END storage_set_metadata]
}

main(...process.argv.slice(2));

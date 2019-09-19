/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// sample-metadata:
//   title: Storage Set File Metadata.
//   description: Set file metadata.
//   usage: node fileSetMetadata.js <BUCKET_NAME> <FILE_NAME>

function main(bucketName = 'my-bucket', filename = 'file.txt') {
  // [START storage_set_metadata]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';
  async function setFileMetadata() {
    // Set file metadata.
    const [metadata] = await storage
      .bucket(bucketName)
      .file(filename)
      .setMetadata({
        // Predefinded metadata for server e.g. 'cacheControl', 'contentDisposition',
        // 'contentEncoding', 'contentEncoding', 'contentLanguage', 'contentType'
        contentDisposition: 'attachment; filename*=utf-8\'\'"anotherImage.jpg"',
        contentType: 'image/jpeg',

        // Note or actionable items for user e.g. uniqueId,
        // object description or other useful information.
        metadata: {
          description: 'file description...',
          modified: '1900-01-01',
        },
      });

    console.log(metadata);
  }

  setFileMetadata();
  // [END storage_set_metadata]
}

main(...process.argv.slice(2));

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
//   title: Upload a directory to a bucket.
//   description: Uploads full hierarchy of a local directory to a bucket.
//   usage: node files.js upload-directory <bucketName> <directoryPath>

function main(
  bucketName = 'your-unique-bucket-name',
  directoryPath = './local/path/to/directory'
) {
  // [START upload_directory]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The local directory to upload
  // const directoryPath = './local/path/to/directory';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  const {promisify} = require('util');
  const fs = require('fs');
  const path = require('path');

  const readdir = promisify(fs.readdir);
  const stat = promisify(fs.stat);

  async function* getFiles(directory = '.') {
    for (const file of await readdir(directory)) {
      const fullPath = path.join(directory, file);
      const stats = await stat(fullPath);

      if (stats.isDirectory()) {
        yield* getFiles(fullPath);
      }

      if (stats.isFile()) {
        yield fullPath;
      }
    }
  }

  async function uploadDirectory() {
    const bucket = storage.bucket(bucketName);
    let successfulUploads = 0;

    for await (const filePath of getFiles(directoryPath)) {
      try {
        const dirname = path.dirname(directoryPath);
        const destination = path.relative(dirname, filePath);

        await bucket.upload(filePath, {destination});

        console.log(`Successfully uploaded: ${filePath}`);
        successfulUploads++;
      } catch (e) {
        console.error(`Error uploading ${filePath}:`, e);
      }
    }

    console.log(
      `${successfulUploads} files uploaded to ${bucketName} successfully.`
    );
  }

  uploadDirectory().catch(console.error);
  // [END upload_directory]
}

main(...process.argv.slice(2));

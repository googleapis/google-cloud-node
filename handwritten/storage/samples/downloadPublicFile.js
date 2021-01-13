// Copyright 2021 Google LLC
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
//   title: Storage Download Public File.
//   description: Download Public File.
//   usage: node downloadPublicFile.js <BUCKET_NAME> <SRC_FILE_NAME> <DEST_FILE_NAME>

const path = require('path');
const cwd = path.join(__dirname, '..');

function main(
  bucketName = 'my-bucket',
  srcFileName = 'test.txt',
  destFileName = path.join(cwd, 'downloaded.txt')
) {
  // [START storage_download_public_file]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFileName = 'Remote public file to download, e.g. file.txt';
  // const destFileName = 'Local destination for file, e.g. ./local/path/to/file.txt';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function downloadPublicFile() {
    const options = {
      // The path to which the file should be downloaded, e.g. "./file.txt"
      destination: destFileName,
    };

    // Download public file.
    await storage.bucket(bucketName).file(srcFileName).download(options);

    console.log(
      `Downloaded public file ${srcFileName} from bucket name ${bucketName} to ${destFileName}.`
    );
  }

  downloadPublicFile().catch(console.error);
  // [END storage_download_public_file]
}
main(...process.argv.slice(2));

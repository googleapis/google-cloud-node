/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @experimental
 */

const path = require('path');
const cwd = path.join(__dirname, '..');

// sample-metadata:
//   title: Download a File in Chunks Utilzing Transfer Manager
//   description: Downloads a single file in in chunks in parallel utilizing transfer manager.
//   usage: node downloadFileInChunksWithTransferManager.js <BUCKET_NAME> <FILE_NAME> <DESTINATION_FILE_NAME> <CHUNK_SIZE>

function main(
  bucketName = 'my-bucket',
  fileName = 'file1.txt',
  destFileName = path.join(cwd, fileName),
  chunkSize = 1024
) {
  // [START storage_transfer_manager_download_chunks_concurrently]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of the GCS file to download
  // const fileName = 'your-file-name';

  // The path to which the file should be downloaded
  // const destFileName = '/local/path/to/file.txt';

  // The size of each chunk to be downloaded
  // const chunkSize = 1024;

  // Imports the Google Cloud client library
  const {Storage, TransferManager} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Creates a transfer manager client
  const transferManager = new TransferManager(storage.bucket(bucketName));

  async function downloadFileInChunksWithTransferManager() {
    // Downloads the files
    await transferManager.downloadFileInChunks(fileName, {
      destination: destFileName,
      chunkSizeBytes: chunkSize,
    });

    console.log(
      `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`
    );
  }

  downloadFileInChunksWithTransferManager().catch(console.error);
  // [END storage_transfer_manager_download_chunks_concurrently]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

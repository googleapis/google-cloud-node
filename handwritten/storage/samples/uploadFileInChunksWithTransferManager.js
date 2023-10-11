/**
 * Copyright 2023 Google LLC
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
 *
 */

// sample-metadata:
//   title: Upload a File in Chunks With Transfer Manager
//   description: Uploads a single file in in chunks in parallel utilizing transfer manager.
//   usage: node uploadFileInChunksWithTransferManager.js <BUCKET_NAME> <FILE_NAME> <CHUNK_SIZE>

function main(
  bucketName = 'my-bucket',
  filePath = './local/path/to/file.txt',
  chunkSize = 32 * 1024 * 1024
) {
  // [START storage_transfer_manager_upload_chunks_concurrently]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The path of file to upload
  // const fileName = 'path/to/your/file';

  // The size of each chunk to be uploaded
  // const chunkSize = 32 * 1024 * 1024;

  // Imports the Google Cloud client library
  const {Storage, TransferManager} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Creates a transfer manager client
  const transferManager = new TransferManager(storage.bucket(bucketName));

  async function uploadFileInChunksWithTransferManager() {
    // Uploads the files
    await transferManager.uploadFileInChunks(filePath, {
      chunkSizeBytes: chunkSize,
    });

    console.log(`${filePath} uploaded to ${bucketName}.`);
  }

  uploadFileInChunksWithTransferManager().catch(console.error);
  // [END storage_transfer_manager_upload_chunks_concurrently]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

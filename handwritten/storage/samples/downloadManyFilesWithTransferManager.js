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
 *
 */

// sample-metadata:
//   title: Download Many Files With Transfer Manager
//   description: Downloads many files in parallel utilizing transfer manager.
//   usage: node downloadManyFilesWithTransferManager.js <BUCKET_NAME> <FIRST_FILE_NAME> <SECOND_FILE_NAME>

function main(
  bucketName = 'my-bucket',
  firstFileName = 'file1.txt',
  secondFileName = 'file2.txt',
) {
  // [START storage_transfer_manager_download_many]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of the first GCS file to download
  // const firstFileName = 'your-first-file-name';

  // The ID of the second GCS file to download
  // const secondFileName = 'your-second-file-name;

  // Imports the Google Cloud client library
  const {Storage, TransferManager} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  // Creates a transfer manager client
  const transferManager = new TransferManager(storage.bucket(bucketName));

  async function downloadManyFilesWithTransferManager() {
    // Downloads the files
    await transferManager.downloadManyFiles([firstFileName, secondFileName]);

    for (const fileName of [firstFileName, secondFileName]) {
      console.log(`gs://${bucketName}/${fileName} downloaded to ${fileName}.`);
    }
  }

  downloadManyFilesWithTransferManager().catch(console.error);
  // [END storage_transfer_manager_download_many]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

function main(bucketName, sourceFolderName, destinationFolderName) {
  // [START storage_control_rename_folder]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */

  // The name of your GCS bucket
  // const bucketName = 'bucketName';

  // The source folder name
  // const sourceFolderName = 'currentFolderName';

  // The destination folder ID
  // const destinationFolderName = 'destinationFolderName';

  // Imports the Control library
  const {StorageControlClient} = require('@google-cloud/storage-control').v2;

  // Instantiates a client
  const controlClient = new StorageControlClient();

  async function callRenameFolder() {
    const folderPath = `projects/_/buckets/${bucketName}/folders/${sourceFolderName}`;

    // Create the request
    const request = {
      name: folderPath,
      destinationFolderId: destinationFolderName,
    };

    // Run request
    const response = await controlClient.renameFolder(request);
    console.log(
      `Renamed folder ${sourceFolderName} to ${destinationFolderName}.`
    );
  }

  callRenameFolder();
  // [END storage_control_rename_folder]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

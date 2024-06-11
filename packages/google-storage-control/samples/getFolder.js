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

'use strict';

function main(bucketName, folderName) {
  // [START storage_control_get_folder]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */

  // The name of your GCS bucket
  // const bucketName = 'bucketName';

  // The name of the folder to get
  // const folderName = 'folderName';

  // Imports the Control library
  const {StorageControlClient} = require('@google-cloud/storage-control').v2;

  // Instantiates a client
  const controlClient = new StorageControlClient();

  async function callGetFolder() {
    const folderPath = `projects/_/buckets/${bucketName}/folders/${folderName}`;

    // Create the request
    const request = {
      name: folderPath,
    };

    // Run request
    const response = await controlClient.getFolder(request);
    console.log(`Got folder: ${response.name}.`);
  }

  callGetFolder();
  // [END storage_control_get_folder]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

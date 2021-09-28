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

function main(folder) {
  // [START cloudresourcemanager_v3_generated_Folders_CreateFolder_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The folder being created, only the display name and parent will be
   *  consulted. All other fields will be ignored.
   */
  // const folder = ''

  // Imports the Resourcemanager library
  const {FoldersClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new FoldersClient();

  async function createFolder() {
    // Construct request
    const request = {
      folder,
    };

    // Run request
    const [operation] = await resourcemanagerClient.createFolder(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createFolder();
  // [END cloudresourcemanager_v3_generated_Folders_CreateFolder_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

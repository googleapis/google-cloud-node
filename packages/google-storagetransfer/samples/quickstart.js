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

async function main(projectId = 'my-project') {
  // [START nodejs_storage_transfer_quickstart]
  // Imports the Google Cloud client library

  // remove this line after package is released
  const {
    StorageTransferServiceClient,
  } = require('@google-cloud/storage-transfer');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  const client = new StorageTransferServiceClient();

  async function listTransferJobs() {
    const iterable = client.listTransferJobsAsync({
      filter: JSON.stringify({
        projectId,
        jobNames: ['transferJobs/*'],
      }),
    });
    for await (const response of iterable) {
      // process response
      console.info(response);
    }
  }
  listTransferJobs();
  // [END nodejs_storage_transfer_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

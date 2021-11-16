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

async function main(projectId = 'my-project', gcsSourceBucket, gcsSinkBucket) {
  // [START storagetransfer_quickstart]

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // Your project id
  // const projectId = 'my-project'

  // The ID of the GCS bucket to transfer data from
  // const gcsSourceBucket = 'my-source-bucket'

  // The ID of the GCS bucket to transfer data to
  // const gcsSinkBucket = 'my-sink-bucket'

  // Imports the Google Cloud client library
  const {
    StorageTransferServiceClient,
  } = require('@google-cloud/storage-transfer');

  // Creates a client
  const client = new StorageTransferServiceClient();

  async function quickstart() {
    // Creates a request to transfer from the source bucket to
    // the sink bucket
    const createRequest = {
      transferJob: {
        projectId: projectId,
        transferSpec: {
          gcsDataSource: {bucketName: gcsSourceBucket},
          gcsDataSink: {bucketName: gcsSinkBucket},
        },
        status: 'ENABLED',
      },
    };

    // Runs the request and creates the job
    const response = await client.createTransferJob(createRequest);

    const jobName = response[0].name;

    const runRequest = {
      jobName: jobName,
      projectId: projectId,
    };
    await client.runTransferJob(runRequest);

    console.log(
      `Created and ran a transfer job from ${gcsSourceBucket} to ${gcsSinkBucket} with name ${jobName}`
    );
  }

  quickstart();
  // [END storagetransfer_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

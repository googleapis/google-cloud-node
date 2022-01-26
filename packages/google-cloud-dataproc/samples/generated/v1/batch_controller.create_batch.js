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

function main(parent, batch) {
  // [START dataproc_v1_generated_BatchController_CreateBatch_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource where this batch will be created.
   */
  // const parent = 'abc123'
  /**
   *  Required. The batch to create.
   */
  // const batch = {}
  /**
   *  Optional. The ID to use for the batch, which will become the final component of
   *  the batch's resource name.
   *  This value must be 4-63 characters. Valid characters are `/[a-z][0-9]-/`.
   */
  // const batchId = 'abc123'
  /**
   *  Optional. A unique ID used to identify the request. If the service
   *  receives two
   *  CreateBatchRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateBatchRequest)s
   *  with the same request_id, the second request is ignored and the
   *  Operation that corresponds to the first Batch created and stored
   *  in the backend is returned.
   *  Recommendation: Set this value to a
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *  The value must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Dataproc library
  const {BatchControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new BatchControllerClient();

  async function callCreateBatch() {
    // Construct request
    const request = {
      parent,
      batch,
    };

    // Run request
    const [operation] = await dataprocClient.createBatch(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateBatch();
  // [END dataproc_v1_generated_BatchController_CreateBatch_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

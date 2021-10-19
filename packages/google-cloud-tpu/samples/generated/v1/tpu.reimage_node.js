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

function main() {
  // [START tpu_v1_generated_Tpu_ReimageNode_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name.
   */
  // const name = 'abc123'
  /**
   *  The version for reimage to create.
   */
  // const tensorflowVersion = 'abc123'

  // Imports the Tpu library
  const {TpuClient} = require('@google-cloud/tpu').v1;

  // Instantiates a client
  const tpuClient = new TpuClient();

  async function reimageNode() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await tpuClient.reimageNode(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  reimageNode();
  // [END tpu_v1_generated_Tpu_ReimageNode_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

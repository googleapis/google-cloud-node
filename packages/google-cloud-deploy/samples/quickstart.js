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

function main(parent) {
  // [START clouddeploy_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of pipelines. Format must be
   *  projects/{project_id}/locations/{location_name}.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of pipelines to return. The service may return
   *  fewer than this value. If unspecified, at most 50 pipelines will
   *  be returned. The maximum value is 1000; values above 1000 will be set
   *  to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListDeliveryPipelines` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other provided parameters match
   *  the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter builds to be returned. See https://google.aip.dev/160 for more
   *  details.
   */
  // const filter = 'abc123'
  /**
   *  Field to sort by. See https://google.aip.dev/132#ordering for more details.
   */
  // const orderBy = 'abc123'

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function listDeliveryPipelines() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await deployClient.listDeliveryPipelinesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listDeliveryPipelines();
  // [END clouddeploy_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

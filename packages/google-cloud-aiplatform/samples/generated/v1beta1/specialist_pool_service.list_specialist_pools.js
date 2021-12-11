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
  // [START aiplatform_v1beta1_generated_SpecialistPoolService_ListSpecialistPools_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the SpecialistPool's parent resource.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained by ListSpecialistPoolsResponse.next_page_token google.cloud.aiplatform.v1beta1.ListSpecialistPoolsResponse.next_page_token  of
   *  the previous SpecialistPoolService.ListSpecialistPools google.cloud.aiplatform.v1beta1.SpecialistPoolService.ListSpecialistPools  call. Return
   *  first page if empty.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read. FieldMask represents a set of
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {SpecialistPoolServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new SpecialistPoolServiceClient();

  async function callListSpecialistPools() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listSpecialistPoolsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSpecialistPools();
  // [END aiplatform_v1beta1_generated_SpecialistPoolService_ListSpecialistPools_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

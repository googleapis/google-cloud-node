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

function main(name) {
  // [START datacatalog_v1_generated_DataCatalog_GetEntryGroup_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entry group to get.
   */
  // const name = 'abc123'
  /**
   *  The fields to return. If empty or omitted, all fields are returned.
   */
  // const readMask = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callGetEntryGroup() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await datacatalogClient.getEntryGroup(request);
    console.log(response);
  }

  callGetEntryGroup();
  // [END datacatalog_v1_generated_DataCatalog_GetEntryGroup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

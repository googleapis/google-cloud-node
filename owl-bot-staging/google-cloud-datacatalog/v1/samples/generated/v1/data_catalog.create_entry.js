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
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, entryId, entry) {
  // [START datacatalog_v1_generated_DataCatalog_CreateEntry_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entry group this entry belongs to.
   *  Note: The entry itself and its child resources might not be stored in
   *  the location specified in its name.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the entry to create.
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9),
   *  and underscores (_).
   *  The maximum size is 64 bytes when encoded in UTF-8.
   */
  // const entryId = 'abc123'
  /**
   *  Required. The entry to create.
   */
  // const entry = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callCreateEntry() {
    // Construct request
    const request = {
      parent,
      entryId,
      entry,
    };

    // Run request
    const response = await datacatalogClient.createEntry(request);
    console.log(response);
  }

  callCreateEntry();
  // [END datacatalog_v1_generated_DataCatalog_CreateEntry_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
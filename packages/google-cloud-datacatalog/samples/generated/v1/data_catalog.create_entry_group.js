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

function main(parent, entryGroupId) {
  // [START datacatalog_v1_generated_DataCatalog_CreateEntryGroup_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The names of the project and location that the new entry group belongs to.
   *  Note: The entry group itself and its child resources might not be
   *  stored in the location specified in its name.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the entry group to create.
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and must start with a letter or underscore.
   *  The maximum size is 64 bytes when encoded in UTF-8.
   */
  // const entryGroupId = 'abc123'
  /**
   *  The entry group to create. Defaults to empty.
   */
  // const entryGroup = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callCreateEntryGroup() {
    // Construct request
    const request = {
      parent,
      entryGroupId,
    };

    // Run request
    const response = await datacatalogClient.createEntryGroup(request);
    console.log(response);
  }

  callCreateEntryGroup();
  // [END datacatalog_v1_generated_DataCatalog_CreateEntryGroup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

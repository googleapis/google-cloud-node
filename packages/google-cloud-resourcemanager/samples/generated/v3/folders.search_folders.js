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
  // [START cloudresourcemanager_v3_generated_Folders_SearchFolders_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. The maximum number of folders to return in the response.
   *  If unspecified, server picks an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. A pagination token returned from a previous call to `SearchFolders`
   *  that indicates from where search should continue.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Search criteria used to select the folders to return.
   *  If no search criteria is specified then all accessible folders will be
   *  returned.
   *  Query expressions can be used to restrict results based upon displayName,
   *  state and parent, where the operators `=` (`:`) `NOT`, `AND` and `OR`
   *  can be used along with the suffix wildcard symbol `*`.
   *  The `displayName` field in a query expression should use escaped quotes
   *  for values that include whitespace to prevent unexpected behavior.
   *  | Field                   | Description                            |
   *  |-------------------------|----------------------------------------|
   *  | displayName             | Filters by displayName.                |
   *  | parent                  | Filters by parent (for example: folders/123). |
   *  | state, lifecycleState   | Filters by state.                      |
   *  Some example queries are:
   *  * Query `displayName=Test*` returns Folder resources whose display name
   *  starts with "Test".
   *  * Query `state=ACTIVE` returns Folder resources with
   *  `state` set to `ACTIVE`.
   *  * Query `parent=folders/123` returns Folder resources that have
   *  `folders/123` as a parent resource.
   *  * Query `parent=folders/123 AND state=ACTIVE` returns active
   *  Folder resources that have `folders/123` as a parent resource.
   *  * Query `displayName=\\"Test String\\"` returns Folder resources with
   *  display names that include both "Test" and "String".
   */
  // const query = 'abc123'

  // Imports the Resourcemanager library
  const {FoldersClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new FoldersClient();

  async function searchFolders() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await resourcemanagerClient.searchFoldersAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchFolders();
  // [END cloudresourcemanager_v3_generated_Folders_SearchFolders_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

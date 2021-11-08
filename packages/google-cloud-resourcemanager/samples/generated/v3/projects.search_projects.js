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
  // [START cloudresourcemanager_v3_generated_Projects_SearchProjects_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. A query string for searching for projects that the caller has
   *  `resourcemanager.projects.get` permission to. If multiple fields are
   *  included in the query, the it will return results that match any of the
   *  fields. Some eligible fields are:
   *  ```
   *  | Field                   | Description                                  |
   *  |-------------------------|----------------------------------------------|
   *  | displayName, name       | Filters by displayName.                      |
   *  | parent                  | Project's parent. (for example: folders/123,
   *  organizations/*) Prefer parent field over parent.type and parent.id. |
   *  | parent.type             | Parent's type: `folder` or `organization`.   |
   *  | parent.id               | Parent's id number (for example: 123)        |
   *  | id, projectId           | Filters by projectId.                        |
   *  | state, lifecycleState   | Filters by state.                            |
   *  | labels                  | Filters by label name or value.              |
   *  | labels.<key> (where *key* is the name of a label) | Filters by label
   *  name. |
   *  ```
   *  Search expressions are case insensitive.
   *  Some examples queries:
   *  | Query            | Description                                         |
   *  |------------------|-----------------------------------------------------|
   *  | name:how*        | The project's name starts with "how".               |
   *  | name:Howl        | The project's name is `Howl` or `howl`.             |
   *  | name:HOWL        | Equivalent to above.                                |
   *  | NAME:howl        | Equivalent to above.                                |
   *  | labels.color:*   | The project has the label `color`.                  |
   *  | labels.color:red | The project's label `color` has the value `red`.    |
   *  | labels.color:red&nbsp;labels.size:big | The project's label `color` has
   *  the value `red` and its label `size` has the value `big`.                |
   *  If no query is specified, the call will return projects for which the user
   *  has the `resourcemanager.projects.get` permission.
   */
  // const query = 'abc123'
  /**
   *  Optional. A pagination token returned from a previous call to [ListProjects]
   *  [google.cloud.resourcemanager.v3.Projects.ListProjects]
   *  that indicates from where listing should continue.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The maximum number of projects to return in the response.
   *  The server can return fewer projects than requested.
   *  If unspecified, server picks an appropriate default.
   */
  // const pageSize = 1234

  // Imports the Resourcemanager library
  const {ProjectsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new ProjectsClient();

  async function searchProjects() {
    // Construct request
    const request = {};

    // Run request
    const iterable = await resourcemanagerClient.searchProjectsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchProjects();
  // [END cloudresourcemanager_v3_generated_Projects_SearchProjects_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

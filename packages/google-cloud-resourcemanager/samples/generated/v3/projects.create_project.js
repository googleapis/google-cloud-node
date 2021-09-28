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

function main(project) {
  // [START cloudresourcemanager_v3_generated_Projects_CreateProject_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Project to create.
   *  Project ID is required. If the requested ID is unavailable, the request
   *  fails.
   *  If the `parent` field is set, the `resourcemanager.projects.create`
   *  permission is checked on the parent resource. If no parent is set and
   *  the authorization credentials belong to an Organziation, the parent
   *  will be set to that Organization.
   */
  // const project = 'my-project'

  // Imports the Resourcemanager library
  const {ProjectsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new ProjectsClient();

  async function createProject() {
    // Construct request
    const request = {
      project,
    };

    // Run request
    const [operation] = await resourcemanagerClient.createProject(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createProject();
  // [END cloudresourcemanager_v3_generated_Projects_CreateProject_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

// Copyright 2017 Google LLC
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

async function main() {
  // [START resource_quickstart]
  // Imports the Google Cloud client library
  const {ProjectsClient} = require('@google-cloud/resource-manager');

  // Creates a client
  const client = new ProjectsClient();

  async function quickstart() {
    // Lists current projects
    const projects = client.searchProjectsAsync();
    console.log('Projects:');
    for await (const project of projects) {
      console.info(project);
    }
  }
  quickstart();
  // [END resource_quickstart]
}

main().catch(console.error);
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

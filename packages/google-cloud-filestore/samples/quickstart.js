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

async function main(projectId, location) {
  // [START filestore_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const location = 'us-central1-a';

  // Imports the Google Cloud Some API library
  const {CloudFilestoreManagerClient} = require('@google-cloud/filestore');
  const client = new CloudFilestoreManagerClient();
  async function listInstances() {
    for await (const instance of client.listInstancesAsync({
      parent: `projects/${projectId}/locations/${location}`,
    })) {
      console.info(instance);
    }
  }
  listInstances();
  // [END filestore_quickstart]
}

main(...process.argv.slice(2));
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

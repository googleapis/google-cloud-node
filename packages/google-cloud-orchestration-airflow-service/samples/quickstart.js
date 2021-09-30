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

'use strict';

async function main(projectId = 'my-project-id', location = 'us-central1') {
  // [START composer_list_image_versions]
  // Imports the Google Cloud client library

  // remove this line after package is released
  // eslint-disable-next-line node/no-missing-require
  const {ImageVersionsClient} = require('@google-cloud/orchestration-airflow');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  // eslint-disable-next-line no-unused-vars
  const client = new ImageVersionsClient();

  async function listImageVersions() {
    const [versions] = await client.listImageVersions({
      parent: `projects/${projectId}/locations/${location}`,
    });
    console.info(versions);
  }
  listImageVersions();
  // [END composer_list_image_versions]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

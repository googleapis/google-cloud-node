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

// sample-metadata:
//   title: Storage Get Service Account.
//   description: Get Service Account.
//   usage: node getServiceAccount.js <PROJECT_ID>

function main(projectId = 'serviceAccountProjectId') {
  // [START storage_get_service_account]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCP project
  // const projectId = 'your-project-id';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    projectId,
  });

  async function getServiceAccount() {
    const [serviceAccount] = await storage.getServiceAccount();
    console.log(
      `The GCS service account for project ${projectId} is: ${serviceAccount.emailAddress}`
    );
  }

  getServiceAccount().catch(console.error);
  // [END storage_get_service_account]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

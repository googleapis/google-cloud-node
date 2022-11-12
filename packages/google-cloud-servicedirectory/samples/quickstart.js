// Copyright 2020 Google LLC
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

'use strict';

async function quickstart(
  projectId = 'my-project',
  locationId = 'us-central1'
) {
  // [START servicedirectory_quickstart]
  //
  // TODO(developer): Uncomment these variables before running the sample.
  //
  // const projectId = 'my-project';
  // const locationId = 'us-central1';

  // Imports the Google Cloud client library
  const {
    RegistrationServiceClient,
  } = require('@google-cloud/service-directory');

  // Creates a client
  const registrationServiceClient = new RegistrationServiceClient();

  // Build the location name
  const locationName = registrationServiceClient.locationPath(
    projectId,
    locationId
  );

  async function listNamespaces() {
    const [namespaces] = await registrationServiceClient.listNamespaces({
      parent: locationName,
    });

    console.log('Namespaces: ');
    for (const n of namespaces) {
      console.log(`${n.name}`);
    }
    return namespaces;
  }

  return listNamespaces();
  // [END servicedirectory_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);

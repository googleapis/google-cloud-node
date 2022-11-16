// Copyright 2021 Google LLC
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

async function main(
  parent = 'projects/my-project', // Project to list service usage for.
  filter = 'state:ENABLED' // Service to filter on.
) {
  // [START serviceusage_quickstart]
  // Imports the Google Cloud client library
  const {ServiceUsageClient} = require('@google-cloud/service-usage');

  // const parent = 'projects/my-project', // Project to list service usage for.
  // filter = 'state:ENABLED' // Filter when listing services.

  // Creates a client
  const client = new ServiceUsageClient();
  async function listServices() {
    for await (const service of client.listServicesAsync({
      parent,
      filter,
    })) {
      console.info(service.name);
    }
  }
  listServices();
  // [END serviceusage_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

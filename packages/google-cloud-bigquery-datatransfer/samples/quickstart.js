// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
const client = new bigqueryDataTransfer.v1.DataTransferServiceClient();

async function quickstart() {
  const projectId = await client.getProjectId();

  // Iterate over all elements.
  const formattedParent = client.projectPath(projectId, 'us-central1');
  let nextRequest = {parent: formattedParent};
  const options = {autoPaginate: false};
  console.log('Data sources:');
  do {
    // Fetch the next page.
    const responses = await client.listDataSources(nextRequest, options);
    // The actual resources in a response.
    const resources = responses[0];
    // The next request if the response shows that there are more responses.
    nextRequest = responses[1];
    // The actual response object, if necessary.
    // const rawResponse = responses[2];
    resources.forEach(resource => {
      console.log(`  ${resource.name}`);
    });
  } while (nextRequest);

  console.log('\n\n');
  console.log('Sources via stream:');

  client
    .listDataSourcesStream({parent: formattedParent})
    .on('data', element => {
      console.log(`  ${element.name}`);
    });
}
quickstart();

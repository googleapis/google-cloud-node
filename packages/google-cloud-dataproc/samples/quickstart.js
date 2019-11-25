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

// [START dataproc_quickstart]
const dataproc = require('@google-cloud/dataproc');
const client = new dataproc.v1.ClusterControllerClient();

async function quickstart() {
  const projectId = await client.getProjectId();
  const request = {
    region: 'global',
    projectId,
  };
  const [resources] = await client.listClusters(request);
  console.log('Total resources:', resources.length);
  for (const resource of resources) {
    console.log(resource);
  }

  let nextRequest = request;
  // Or obtain the paged response.
  const options = {autoPaginate: false};
  do {
    const responses = await client.listClusters(nextRequest, options);
    // The actual resources in a response.
    const resources = responses[0];
    // The next request if the response shows that there are more responses.
    nextRequest = responses[1];
    // The actual response object, if necessary.
    // const rawResponse = responses[2];
    for (const resource of resources) {
      console.log(resource);
    }
  } while (nextRequest);

  client.listClustersStream(request).on('data', element => {
    console.log(element);
  });
}

quickstart();
// [END dataproc_quickstart]

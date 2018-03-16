// Copyright 2017, Google LLC All rights reserved.
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

// [START bigquerydatatransfer_quickstart]

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to key json file> node #{$0}'
  );
}

const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');

const client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
  // optional auth parameters.
});
const projectId = process.env.GCLOUD_PROJECT;

// Iterate over all elements.
const formattedParent = client.locationPath(projectId, 'us-central1');

client.listDataSources({parent: formattedParent}).then(responses => {
  const resources = responses[0];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
});

const options = {autoPaginate: false};
const callback = responses => {
  // The actual resources in a response.
  const resources = responses[0];
  // The next request if the response shows that there are more responses.
  const nextRequest = responses[1];
  // The actual response object, if necessary.
  // const rawResponse = responses[2];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
  if (nextRequest) {
    // Fetch the next page.
    return client.listDataSources(nextRequest, options).then(callback);
  }
};
client.listDataSources({parent: formattedParent}, options).then(callback);

client.listDataSourcesStream({parent: formattedParent}).on('data', element => {
  console.log(element);
});
// [END bigquerydatatransfer_quickstart]

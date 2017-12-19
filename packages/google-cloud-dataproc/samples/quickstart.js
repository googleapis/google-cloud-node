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

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to json key> node #{$0}'
  );
}
var projectId = process.env.GCLOUD_PROJECT;

const dataproc = require('../src');

var client = new dataproc.v1.ClusterControllerClient({
  // optional auth parameters.
});

// Iterate over all elements.
var projectId2 = projectId;
var region = 'global';
var request = {
  projectId: projectId2,
  region: region,
};

client.listClusters(request).then(responses => {
  var resources = responses[0];
  console.log('Total resources:', resources.length);
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
});

// Or obtain the paged response.
var options = {autoPaginate: false};
var callback = responses => {
  // The actual resources in a response.
  var resources = responses[0];
  // The next request if the response shows that there are more responses.
  var nextRequest = responses[1];
  // The actual response object, if necessary.
  // var rawResponse = responses[2];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
  if (nextRequest) {
    // Fetch the next page.
    return client.listClusters(nextRequest, options).then(callback);
  }
};
client.listClusters(request, options).then(callback);

client.listClustersStream(request).on('data', element => {
  console.log(element);
});

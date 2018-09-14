// Copyright 2018 Google LLC
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

'use strict';

describe('DataTransferServiceSmokeTest', () => {
  if (!process.env.GCLOUD_PROJECT) {
    throw new Error('Usage: GCLOUD_PROJECT=<project_id> node #{$0}');
  }
  const projectId = process.env.GCLOUD_PROJECT;

  it('successfully makes a call to the service using promises', done => {
    const bigqueryDataTransfer = require('../src');

    const client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
      // optional auth parameters.
    });

    // Iterate over all elements.
    const formattedParent = client.projectPath(projectId);

    client
      .listDataSources({parent: formattedParent})
      .then(responses => {
        const resources = responses[0];
        for (let i = 0; i < resources.length; i += 1) {
          console.log(resources[i]);
        }
      })
      .then(done)
      .catch(done);
  });

  it('successfully makes a call to the service using callbacks', done => {
    const bigqueryDataTransfer = require('../src');

    const client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
      // optional auth parameters.
    });

    // Or obtain the paged response.
    const formattedParent = client.projectPath(projectId);

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
    client
      .listDataSources({parent: formattedParent}, options)
      .then(callback)
      .then(done)
      .catch(done);
  });

  it('successfully makes a call to the service using streaming', done => {
    const bigqueryDataTransfer = require('../src');

    const client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
      // optional auth parameters.
    });

    const formattedParent = client.projectPath(projectId);
    client
      .listDataSourcesStream({parent: formattedParent})
      .on('data', element => {
        console.log(element);
      })
      .on('error', done)
      .on('end', done);
  });
});

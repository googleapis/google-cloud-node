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

describe('ClusterManagerSmokeTest', () => {
  if (!process.env.GCLOUD_PROJECT) {
    throw new Error('Usage: GCLOUD_PROJECT=<project_id> node #{$0}');
  }
  var projectId = process.env.GCLOUD_PROJECT;

  it('successfully makes a call to the service', done => {
    const container = require('../src');

    var client = new container.v1.ClusterManagerClient({
      // optional auth parameters.
    });

    var projectId2 = projectId;
    var zone = 'us-central1-a';
    var request = {
      projectId: projectId2,
      zone: zone,
    };
    client
      .listClusters(request)
      .then(responses => {
        var response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});

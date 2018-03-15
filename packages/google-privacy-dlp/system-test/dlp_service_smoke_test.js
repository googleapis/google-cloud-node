// Copyright 2017 Google LLC
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

describe('DlpServiceSmokeTest', () => {
  it('successfully makes a call to the service', done => {
    const dlp = require('../src');

    var projectId = process.env['GCLOUD_PROJECT'];
    var client = new dlp.v2.DlpServiceClient({});

    var inspectConfig = {
      infoTypes: [{name: 'PHONE_NUMBER'}],
      minLikelihood: 'POSSIBLE',
    };
    var type = 'text/plain';
    var value = 'my phone number is 215-512-1212';
    var item = {
      type: type,
      value: value,
    };
    var request = {
      inspectConfig: inspectConfig,
      item: item,
      parent: client.projectPath(projectId),
    };
    client
      .inspectContent(request)
      .then(responses => {
        var response = responses[0];
        console.log(response);
      })
      .then(done)
      .catch(done);
  });
});

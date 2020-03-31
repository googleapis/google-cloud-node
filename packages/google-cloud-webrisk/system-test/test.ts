// Copyright 2019 Google LLC
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

import {assert} from 'chai';
import {describe, it} from 'mocha';

describe('WebRiskSmokeTest', () => {
  it('searches threat database for URI', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {WebRiskServiceV1Beta1Client} = require('../src/v1beta1');
    const client = new WebRiskServiceV1Beta1Client();
    const request = {
      uri: 'http://testsafebrowsing.appspot.com/s/malware.html',
      threatTypes: ['MALWARE'],
    };
    const {threat} = (await client.searchUris(request))[0];
    assert.include(threat.threatTypes, 'MALWARE');
  });
});

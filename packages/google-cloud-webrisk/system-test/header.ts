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

import * as protoTypes from '../protos/protos';
import {assert} from 'chai';
import {describe, it} from 'mocha';
import {WebRiskServiceClient} from '../src/index';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http2spy = require('http2spy');
const gax = http2spy.require('google-gax');
describe('header', () => {
  it('populates x-goog-api-client header', async () => {
    const client = new WebRiskServiceClient({}, gax);
    const request = {
      uri: 'http://testsafebrowsing.appspot.com/s/malware.html',
      threatTypes: ['MALWARE'],
    };
    await client.searchUris(
      request as unknown as protoTypes.google.cloud.webrisk.v1.SearchUrisRequest
    );
    assert.ok(
      /^gax\/[\w.-]+ gapic\/[\w.-]+ gl-node\/[0-9]+\.[\w.-]+ grpc\/[\w.-]+$/.test(
        http2spy.requests[0]['x-goog-api-client'][0]
      )
    );
  });
});

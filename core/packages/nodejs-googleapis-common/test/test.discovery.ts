// Copyright 2020 Google LLC
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

import * as assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import {Discovery} from '../src/discovery';
import * as nock from 'nock';

nock.disableNetConnect();

describe(__filename, () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should discover an API', async () => {
    const discoUrl = 'http://test.local';
    const scope = nock(discoUrl)
      .get('/')
      .replyWithFile(200, './test/fixtures/compute-v1.json', {
        'Content-Type': 'application/json',
      });
    const disco = new Discovery({});
    const makeEndpoint = await disco.discoverAPI(discoUrl);
    const endpoint = makeEndpoint({}, {});
    assert.ok(endpoint.zones);
    scope.done();
  });
  it('should discover an API through second weird path', async () => {
    const discoUrl = 'http://test.local';
    const scope = nock(discoUrl)
      .get('/')
      .replyWithFile(200, './test/fixtures/compute-v1.json', {
        'Content-Type': 'application/json',
      });
    const disco = new Discovery({});
    const makeEndpoint = await disco.discoverAPI({url: discoUrl});
    const endpoint = makeEndpoint({}, {});
    assert.ok(endpoint.zones);
    scope.done();
  });
  it('should discover all APIs', async () => {
    const discoUrl = 'http://test.local';
    const scopes = [
      nock(discoUrl)
        .get('/')
        .reply(200, {
          items: [
            {
              name: 'compute',
              version: 'v1',
              discoveryRestUrl: `${discoUrl}/compute-v1`,
            },
          ],
        }),
      nock(discoUrl)
        .get('/compute-v1')
        .replyWithFile(200, './test/fixtures/compute-v1.json', {
          'Content-Type': 'application/json',
        }),
    ];
    const disco = new Discovery({});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await disco.discoverAllAPIs(discoUrl);
    const compute = res['compute'];
    const endpoint = compute('v1');
    assert.ok(endpoint.zones);
    scopes.forEach(x => x.done());
  });
});

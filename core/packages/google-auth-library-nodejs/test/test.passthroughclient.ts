// Copyright 2024 Google LLC
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

import {strict as assert} from 'assert';

import * as nock from 'nock';

import {PassThroughClient} from '../src';

describe('AuthClient', () => {
  before(async () => {
    nock.disableNetConnect();
  });

  afterEach(async () => {
    nock.cleanAll();
  });

  describe('#getAccessToken', () => {
    it('should return an empty object', async () => {
      const client = new PassThroughClient();
      const token = await client.getAccessToken();

      assert.deepEqual(token, {});
    });
  });

  describe('#getRequestHeaders', () => {
    it('should return an empty `Headers` object', async () => {
      const client = new PassThroughClient();
      const token = await client.getRequestHeaders();

      assert.deepEqual(token, new Headers());
    });
  });

  describe('#request', () => {
    it('should return the expected response', async () => {
      const url = 'https://google.com';
      const example = {test: 'payload'};
      const scope = nock(url).get('/').reply(200, example);

      const client = new PassThroughClient();
      const response = await client.request({url});

      assert.deepEqual(response.data, example);

      scope.done();
    });
  });
});

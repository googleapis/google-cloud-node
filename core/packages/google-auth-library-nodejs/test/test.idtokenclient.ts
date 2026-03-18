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
import * as fs from 'fs';
import * as nock from 'nock';

import {IdTokenClient, JWT} from '../src';
import {CredentialRequest} from '../src/auth/credentials';

describe('idtokenclient', () => {
  const PEM_PATH = './test/fixtures/private.pem';
  const PEM_CONTENTS = fs.readFileSync(PEM_PATH, 'utf8');
  nock.disableNetConnect();

  function createGTokenMock(body: CredentialRequest) {
    return nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, body);
  }

  afterEach(() => {
    nock.cleanAll();
  });

  it('should determine expiry_date from JWT', async () => {
    const idToken = 'header.eyJleHAiOiAxNTc4NzAyOTU2fQo.signature';
    const jwt = new JWT({
      email: 'foo@serviceaccount.com',
      key: PEM_CONTENTS,
      subject: 'ignored@subjectaccount.com',
    });

    const scope = createGTokenMock({id_token: idToken});
    const targetAudience = 'a-target-audience';
    const client = new IdTokenClient({idTokenProvider: jwt, targetAudience});
    await client.getRequestHeaders();
    scope.done();
    assert.strictEqual(client.credentials.expiry_date, 1578702956000);
  });

  it('should refresh ID token if expired', async () => {
    const jwt = new JWT({
      email: 'foo@serviceaccount.com',
      key: PEM_CONTENTS,
      subject: 'ignored@subjectaccount.com',
    });

    const scope = createGTokenMock({id_token: 'abc123'});
    const targetAudience = 'a-target-audience';
    const client = new IdTokenClient({idTokenProvider: jwt, targetAudience});
    client.credentials = {
      id_token: 'an-identity-token',
      expiry_date: new Date().getTime() - 1000,
    };
    const headers = await client.getRequestHeaders();
    scope.done();
    assert.strictEqual(client.credentials.id_token, 'abc123');
    assert.deepStrictEqual(
      headers,
      new Headers({authorization: 'Bearer abc123'}),
    );
  });

  it('should refresh ID token if expiry_date not set', async () => {
    const jwt = new JWT({
      email: 'foo@serviceaccount.com',
      key: PEM_CONTENTS,
      subject: 'ignored@subjectaccount.com',
    });

    const scope = createGTokenMock({id_token: 'abc123'});
    const targetAudience = 'a-target-audience';
    const client = new IdTokenClient({idTokenProvider: jwt, targetAudience});
    client.credentials = {
      id_token: 'an-identity-token',
    };
    const headers = await client.getRequestHeaders();
    scope.done();
    assert.strictEqual(client.credentials.id_token, 'abc123');
    assert.deepStrictEqual(
      headers,
      new Headers({authorization: 'Bearer abc123'}),
    );
  });
});

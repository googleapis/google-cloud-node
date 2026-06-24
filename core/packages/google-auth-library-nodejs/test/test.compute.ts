// Copyright 2013 Google LLC
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
import {describe, it, beforeEach, afterEach} from 'mocha';
import {BASE_PATH, HEADERS, HOST_ADDRESS} from 'gcp-metadata';
import * as nock from 'nock';
import * as sinon from 'sinon';
import {Compute} from '../src';

nock.disableNetConnect();

describe('compute', () => {
  const url = 'http://example.com';
  const tokenPath = `${BASE_PATH}/instance/service-accounts/default/token`;
  const identityPath = `${BASE_PATH}/instance/service-accounts/default/identity`;
  function mockToken(statusCode = 200, scopes?: string[]) {
    let path = tokenPath;
    if (scopes && scopes.length > 0) {
      path += `?scopes=${encodeURIComponent(scopes.join(','))}`;
    }
    return nock(HOST_ADDRESS)
      .get(path, undefined, {reqheaders: HEADERS})
      .reply(statusCode, {access_token: 'abc123', expires_in: 10000}, HEADERS);
  }

  function mockExample() {
    return nock(url).get('/').reply(200);
  }

  // set up compute client.
  const sandbox = sinon.createSandbox();
  let compute: Compute;
  beforeEach(() => {
    compute = new Compute();
  });

  afterEach(() => {
    nock.cleanAll();
    sandbox.restore();
  });

  it('should create a dummy refresh token string', () => {
    // It is important that the compute client is created with a refresh token
    // value filled in, or else the rest of the logic will not work.
    const compute = new Compute();
    assert.strictEqual(
      'compute-placeholder',
      compute.credentials.refresh_token,
    );
  });

  it('should get an access token for the first request', async () => {
    const scopes = [mockToken(), mockExample()];
    await compute.request({url});
    scopes.forEach(s => s.done());
    assert.strictEqual(compute.credentials.access_token, 'abc123');
  });

  it('should URI-encode and comma-separate scopes when fetching the token', async () => {
    const scopes = [
      'https://www.googleapis.com/reader',
      'https://www.googleapis.com/auth/plus',
    ];

    const path = `${tokenPath}?scopes=${encodeURIComponent(scopes.join(','))}`;

    const tokenFetchNock = nock(HOST_ADDRESS)
      .get(path, undefined, {reqheaders: HEADERS})
      .reply(200, {access_token: 'abc123', expires_in: 10000}, HEADERS);
    const apiRequestNock = mockExample();

    const compute = new Compute({scopes});
    await compute.request({url});

    tokenFetchNock.done();
    apiRequestNock.done();

    assert.strictEqual(compute.credentials.access_token, 'abc123');
  });

  it('should refresh if access token has expired', async () => {
    const scopes = [mockToken(), mockExample()];
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = new Date().getTime() - 10000;
    await compute.request({url});
    assert.strictEqual(compute.credentials.access_token, 'abc123');
    scopes.forEach(s => s.done());
  });

  it('should emit an event for a new access token', async () => {
    const scopes = [mockToken(), mockExample()];
    let raisedEvent = false;
    compute.on('tokens', tokens => {
      assert.strictEqual(tokens.access_token, 'abc123');
      raisedEvent = true;
    });
    await compute.request({url});
    assert.strictEqual(compute.credentials.access_token, 'abc123');
    scopes.forEach(s => s.done());
    assert(raisedEvent);
  });

  it('should refresh if access token will expired soon and time to refresh before expiration is set', async () => {
    const scopes = [mockToken(), mockExample()];
    compute = new Compute({eagerRefreshThresholdMillis: 10000});
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = new Date().getTime() + 5000;
    await compute.request({url});
    assert.strictEqual(compute.credentials.access_token, 'abc123');
    scopes.forEach(s => s.done());
  });

  it('should not refresh if access token will not expire soon and time to refresh before expiration is set', async () => {
    const scope = mockExample();
    compute = new Compute({eagerRefreshThresholdMillis: 1000});
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = new Date().getTime() + 12000;
    await compute.request({url});
    assert.strictEqual(
      compute.credentials.access_token,
      'initial-access-token',
    );
    scope.done();
  });

  it('should not refresh if access token has not expired', async () => {
    const scope = mockExample();
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = new Date().getTime() + 10 * 60 * 1000;
    await compute.request({url});
    assert.strictEqual(
      compute.credentials.access_token,
      'initial-access-token',
    );
    scope.done();
  });

  it('should return a helpful message on request response.statusCode 403', async () => {
    const scope = mockToken(403);
    const expected = new RegExp(
      'A Forbidden error was returned while attempting to retrieve an access ' +
        'token for the Compute Engine built-in service account. This may be because the ' +
        'Compute Engine instance does not have the correct permission scopes specified. ' +
        'Could not refresh access token.',
    );
    await assert.rejects(compute.request({url}), expected);
    scope.done();
  });

  it('should return a helpful message on request response.statusCode 404', async () => {
    const scope = mockToken(404);
    const expected = new RegExp(
      'A Not Found error was returned while attempting to retrieve an access' +
        'token for the Compute Engine built-in service account. This may be because the ' +
        'Compute Engine instance does not have any permission scopes specified.',
    );
    await assert.rejects(compute.request({url}), expected);
    scope.done();
  });

  it('should return a helpful message on token refresh response.statusCode 403', async () => {
    const scope = mockToken(403);
    // Mock the credentials object with a null access token, to force a
    // refresh.
    compute.credentials = {
      refresh_token: 'hello',
      access_token: undefined,
      expiry_date: 1,
    };
    const expected = new RegExp(
      'A Forbidden error was returned while attempting to retrieve an access ' +
        'token for the Compute Engine built-in service account. This may be because the ' +
        'Compute Engine instance does not have the correct permission scopes specified. ' +
        'Could not refresh access token.',
    );
    await assert.rejects(compute.request({}), expected);
    scope.done();
  });

  it('should return a helpful message on token refresh response.statusCode 404', async () => {
    const scope = mockToken(404);

    // Mock the credentials object with a null access token, to force a
    // refresh.
    compute.credentials = {
      refresh_token: 'hello',
      access_token: undefined,
      expiry_date: 1,
    };

    const expected = new RegExp(
      'A Not Found error was returned while attempting to retrieve an access' +
        'token for the Compute Engine built-in service account. This may be because the ' +
        'Compute Engine instance does not have any permission scopes specified. Could not ' +
        'refresh access token.',
    );

    await assert.rejects(compute.request({}), expected);
    scope.done();
  });

  it('should accept a custom service account', async () => {
    const serviceAccountEmail = 'service-account@example.com';
    const compute = new Compute({serviceAccountEmail});
    const scopes = [
      mockExample(),
      nock(HOST_ADDRESS)
        .get(
          `${BASE_PATH}/instance/service-accounts/${serviceAccountEmail}/token`,
        )
        .reply(200, {access_token: 'abc123', expires_in: 10000}, HEADERS),
    ];
    await compute.request({url});
    scopes.forEach(s => s.done());
    assert.strictEqual(compute.credentials.access_token, 'abc123');
  });

  it('should request the identity endpoint for fetchIdToken', async () => {
    const targetAudience = 'a-target-audience';
    const path = `${identityPath}?format=full&audience=${targetAudience}`;

    const tokenFetchNock = nock(HOST_ADDRESS)
      .get(path, undefined, {reqheaders: HEADERS})
      .reply(200, 'abc123', HEADERS);

    const compute = new Compute();
    const idToken = await compute.fetchIdToken(targetAudience);

    tokenFetchNock.done();

    assert.strictEqual(idToken, 'abc123');
  });

  it('should throw an error if metadata server is unavailable', async () => {
    const targetAudience = 'a-target-audience';
    const path = `${identityPath}?format=full&audience=${targetAudience}`;

    const tokenFetchNock = nock(HOST_ADDRESS)
      .get(path, undefined, {reqheaders: HEADERS})
      .reply(500, 'a server error!', HEADERS);

    const compute = new Compute();
    try {
      await compute.fetchIdToken(targetAudience);
    } catch {
      tokenFetchNock.done();
      return;
    }

    assert.fail('failed to throw');
  });
});

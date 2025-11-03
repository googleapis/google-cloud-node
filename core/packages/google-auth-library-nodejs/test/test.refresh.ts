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
import {describe, it} from 'mocha';
import * as fs from 'fs';
import * as nock from 'nock';
import {UserRefreshClient} from '../src';

describe('refresh', () => {
  // Creates a standard JSON credentials object for testing.
  function createJSON() {
    return {
      client_secret: 'privatekey',
      client_id: 'client123',
      refresh_token: 'refreshtoken',
      type: 'authorized_user',
    };
  }

  it('populates credentials.refresh_token if provided', () => {
    const refresh = new UserRefreshClient({
      refreshToken: 'abc123',
    });
    assert.strictEqual(refresh.credentials.refresh_token, 'abc123');
  });

  it('fromJSON should error on null json', () => {
    const refresh = new UserRefreshClient();
    assert.throws(() => {
      // Test verifies invalid parameter tests, which requires cast to any.
      (refresh as ReturnType<JSON['parse']>).fromJSON(null);
    });
  });

  it('fromJSON should error on empty json', () => {
    const refresh = new UserRefreshClient();
    assert.throws(() => {
      // Test verifies invalid parameter tests, which requires cast to any.
      refresh.fromJSON({});
    });
  });

  it('fromJSON should error on missing client_id', () => {
    const json = createJSON();
    delete (json as Partial<typeof json>).client_id;
    const refresh = new UserRefreshClient();
    assert.throws(() => {
      refresh.fromJSON(json);
    });
  });

  it('fromJSON should error on missing client_secret', () => {
    const json = createJSON();
    delete (json as Partial<typeof json>).client_secret;
    const refresh = new UserRefreshClient();
    assert.throws(() => {
      refresh.fromJSON(json);
    });
  });

  it('fromJSON should error on missing refresh_token', () => {
    const json = createJSON();
    delete (json as Partial<typeof json>).refresh_token;
    const refresh = new UserRefreshClient();
    assert.throws(() => {
      refresh.fromJSON(json);
    });
  });

  it('fromJSON should create UserRefreshClient with clientId_', () => {
    const json = createJSON();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(json);
    assert.strictEqual(json.client_id, refresh._clientId);
  });

  it('fromJSON should create UserRefreshClient with clientSecret_', () => {
    const json = createJSON();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(json);
    assert.strictEqual(json.client_secret, refresh._clientSecret);
  });

  it('fromJSON should create UserRefreshClient with _refreshToken', () => {
    const json = createJSON();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(json);
    assert.strictEqual(json.refresh_token, refresh._refreshToken);
  });

  it('fromStream should error on null stream', done => {
    const refresh = new UserRefreshClient();
    // Test verifies invalid parameter tests, which requires cast to any.
    (refresh as ReturnType<JSON['parse']>).fromStream(null, (err: Error) => {
      assert.strictEqual(true, err instanceof Error);
      done();
    });
  });

  it('fromStream should read the stream and create a UserRefreshClient', done => {
    // Read the contents of the file into a json object.
    const fileContents = fs.readFileSync(
      './test/fixtures/refresh.json',
      'utf-8',
    );
    const json = JSON.parse(fileContents);

    // Now open a stream on the same file.
    const stream = fs.createReadStream('./test/fixtures/refresh.json');

    // And pass it into the fromStream method.
    const refresh = new UserRefreshClient();
    refresh.fromStream(stream, err => {
      assert.ifError(err);
      // Ensure that the correct bits were pulled from the stream.
      assert.strictEqual(json.client_id, refresh._clientId);
      assert.strictEqual(json.client_secret, refresh._clientSecret);
      assert.strictEqual(json.refresh_token, refresh._refreshToken);
      done();
    });
  });

  it('getRequestHeaders should populate x-goog-user-project header if quota_project_id present', async () => {
    // The first time auth.getRequestHeaders() is called /token endpoint is used to
    // fetch a JWT.
    const req = nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, {});

    // Fake loading default credentials with quota project set:
    const stream = fs.createReadStream(
      './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
    );
    const refresh = new UserRefreshClient();
    await refresh.fromStream(stream);

    const headers = await refresh.getRequestHeaders();
    assert.strictEqual(headers.get('x-goog-user-project'), 'my-quota-project');
    req.done();
  });

  it('getRequestHeaders should populate x-goog-user-project header if quota_project_id present and token has not expired', async () => {
    const stream = fs.createReadStream(
      './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
    );
    const eagerRefreshThresholdMillis = 10;
    const refresh = new UserRefreshClient({
      eagerRefreshThresholdMillis,
    });
    await refresh.fromStream(stream);
    refresh.credentials = {
      access_token: 'woot',
      refresh_token: 'jwt-placeholder',
      expiry_date: new Date().getTime() + eagerRefreshThresholdMillis + 1000,
    };
    const headers = await refresh.getRequestHeaders();
    assert.strictEqual(headers.get('x-goog-user-project'), 'my-quota-project');
  });

  it('getRequestHeaders should populate x-goog-user-project header if quota_project_id present and token has expired', async () => {
    const req = nock('https://oauth2.googleapis.com')
      .post('/token')
      .reply(200, {});
    const stream = fs.createReadStream(
      './test/fixtures/config-with-quota/.config/gcloud/application_default_credentials.json',
    );
    const refresh = new UserRefreshClient();
    await refresh.fromStream(stream);
    refresh.credentials = {
      access_token: 'woot',
      refresh_token: 'jwt-placeholder',
      expiry_date: new Date().getTime() - 1,
    };
    const headers = await refresh.getRequestHeaders();
    assert.strictEqual(headers.get('x-goog-user-project'), 'my-quota-project');
    req.done();
  });
});

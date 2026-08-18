// Copyright 2026 Google LLC
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

import * as assert from 'assert';
import { describe, it } from 'mocha';
const { v3 } = require('../../../../../../packages/google-cloud-dialogflow-cx');

const sinon = require('sinon');

describe('Dialogflow CX Fallback Transcoding and Path Traversal Prevention', () => {
  let client: any;
  let fetchStub: any;

  beforeEach(() => {
    client = new v3.SessionsClient({
      fallback: true,
      credentials: { client_email: 'bogus@example.com', private_key: 'bogus' },
      projectId: 'bogus',
    });
    fetchStub = sinon.stub().resolves({
      ok: true,
      status: 200,
      arrayBuffer: () => Promise.resolve(Buffer.from('{}')),
    });
    client.auth.fetch = fetchStub;
  });

  // Test 1: Single Asterisk Dot Validation on client call
  it.skip('1. should throw an error for single-asterisk segment traversal using exactly "." as session ID', async () => {
    // TODO: Re-enable this test when the gax version with the new encoding is released.
    await client.initialize();
    await assert.rejects(
      client.detectIntent({
        session: 'projects/p/locations/l/agents/a/sessions/.',
        queryInput: { text: { text: 'hello' }, languageCode: 'en' },
      }),
      /Invalid value \. for session/
    );
  });

  // Test 2: Single Asterisk Dot-Dot Validation on client call
  it.skip('2. should throw an error for single-asterisk segment traversal using exactly ".." as session ID', async () => {
    // TODO: Re-enable this test when the gax version with the new encoding is released.
    await client.initialize();
    await assert.rejects(
      client.detectIntent({
        session: 'projects/p/locations/l/agents/a/sessions/..',
        queryInput: { text: { text: 'hello' }, languageCode: 'en' },
      }),
      /Invalid value \.\. for session/
    );
  });



  // Test 5: Standard Valid Path fallback REST call
  it('5. should pass transcoding validation with a valid session path and construct the correct REST URL', async () => {
    await client.initialize();
    await client.detectIntent({
      session: 'projects/p/locations/l/agents/a/sessions/valid-session-id',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    assert.ok(requestUrl.includes('/v3/projects/p/locations/l/agents/a/sessions/valid-session-id:detectIntent'));
  });

  // Test 6: Query Parameter Injection Prevention via percent-encoding
  it('6. should protect against query parameter injection by percent-encoding "?" and "$" in the session ID', async () => {
    await client.initialize();
    await client.detectIntent({
      session: 'projects/p/locations/l/agents/a/sessions/my-session?$foo=BAR#',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    // "?" -> %3F, "$" -> %24, "=" -> %3D, "#" -> %23
    assert.ok(requestUrl.includes('my-session%3F%24foo%3DBAR%23'));
  });

  // Test 7: Combined Path Traversal and Query Parameter Injection
  it('7. should protect against path traversal and query injection by percent-encoding combined patterns', async () => {
    // This request is permitted because the template uses * instead of **
    // * is supposed to match against exactly . or ..
    // This is okay because we still percent encode the ? parameter.
    // example: POST https://<location>-dialogflow.googleapis.com/v3/{session=projects/*/locations/*/agents/*/sessions/*}:detectIntent
    await client.initialize();
    await client.detectIntent({
      session: 'projects/p/locations/l/agents/a/sessions/..?$foo=BAR#',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    assert.ok(requestUrl.includes('/v3/projects/p/locations/l/agents/a/sessions/..%3F%24foo%3DBAR%23:detectIntent'));
  });

  // Test 8: Combined Path Traversal (.) and Query Parameter Injection
  it('8. should protect against path traversal and query injection by percent-encoding combined patterns using dot', async () => {
    await client.initialize();
    await client.detectIntent({
      session: 'projects/p/locations/l/agents/a/sessions/.?$foo=BAR#',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    assert.ok(requestUrl.includes('/v3/projects/p/locations/l/agents/a/sessions/.%3F%24foo%3DBAR%23:detectIntent'));
  });

  // Test 9: Percent-encoding all other characters
  it.skip('9. should percent-encode all other characters except unreserved ones', async () => {
    // TODO: Re-enable this test when the gax version with the new encoding is released.
    await client.initialize();
    await client.detectIntent({
      session: 'projects/p/locations/l/agents/a/sessions/ !@$&\'()*+,;=:%',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    assert.ok(requestUrl.includes('/v3/projects/p/locations/l/agents/a/sessions/%20%21%40%24%26%27%28%29%2A%2B%2C%3B%3D%3A%25:detectIntent'));
  });
});

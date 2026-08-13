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
import { v3 } from '../src';
import * as path from 'path';

// Load transcoding module using absolute path to bypass package.json exports restriction
const transcodingPath = path.resolve(__dirname, '../../node_modules/google-gax/build/src/transcoding.js');
const transcoding = require(transcodingPath);
const sinon = require('sinon');

describe('Dialogflow CX Fallback Transcoding and Path Traversal Prevention', () => {
  let client: v3.SessionsClient;
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
  it('1. should throw an error for single-asterisk segment traversal using exactly "." as session ID', async () => {
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
  it('2. should throw an error for single-asterisk segment traversal using exactly ".." as session ID', async () => {
    await client.initialize();
    await assert.rejects(
      client.detectIntent({
        session: 'projects/p/locations/l/agents/a/sessions/..',
        queryInput: { text: { text: 'hello' }, languageCode: 'en' },
      }),
      /Invalid value \.\. for session/
    );
  });

  // Test 3: Double Asterisk Dot-Dot Validation on custom template
  it('3. should throw an error for double-asterisk segment traversal containing segments that are exactly ".."', () => {
    assert.throws(() => {
      transcoding.applyPattern(
        'projects/*/locations/*/agents/*/sessions/**',
        'projects/p/locations/l/agents/a/sessions/agents/../subagent',
        'session'
      );
    }, /Value for session must not contain segments that are exactly \. or \.\./);
  });

  // Test 4: Double Asterisk Dot Validation on custom template
  it('4. should throw an error for double-asterisk segment traversal containing segments that are exactly "."', () => {
    assert.throws(() => {
      transcoding.applyPattern(
        'projects/*/locations/*/agents/*/sessions/**',
        'projects/p/locations/l/agents/a/sessions/agents/./subagent',
        'session'
      );
    }, /Value for session must not contain segments that are exactly \. or \.\./);
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
      session: 'projects/p/locations/l/agents/a/sessions/my-session?$httpMethod=DELETE#',
      queryInput: { text: { text: 'hello' }, languageCode: 'en' },
    });
    assert.strictEqual(fetchStub.callCount, 1);
    const requestUrl = fetchStub.firstCall.args[0];
    // "?" -> %3F, "$" -> %24, "=" -> %3D, "#" -> %23
    assert.ok(requestUrl.includes('my-session%3F%24httpMethod%3DDELETE%23'));
  });

  // Test 7: BuildQueryStringComponents stability with null values
  it('7. should build query string safely and skip null elements in arrays without throwing a TypeError', () => {
    const components = transcoding.buildQueryStringComponents({
      query: 'test',
      repeatedValues: [null, 'value1'],
    });
    assert.deepStrictEqual(components, [
      'query=test',
      'repeatedValues=value1',
    ]);
  });

  // Test 8: BuildQueryStringComponents stability with undefined values
  it('8. should build query string safely and skip undefined elements in arrays without throwing a TypeError', () => {
    const components = transcoding.buildQueryStringComponents({
      query: 'test',
      repeatedValues: [undefined, 'value1'],
    });
    assert.deepStrictEqual(components, [
      'query=test',
      'repeatedValues=value1',
    ]);
  });

  // Test 9: ApplyPattern stability with unmatched optional capture groups
  it('9. should handle optional unmatched groups gracefully without throwing TypeErrors', () => {
    const res = transcoding.applyPattern('projects/*', 'projects/p', 'session');
    assert.strictEqual(res, 'projects/p');
  });

  // Test 10: Percent-encode RFC 3986 unreserved characters preservation
  it('10. should preserve unreserved characters while strictly percent-encoding all other characters', () => {
    // Standard RFC unreserved characters: [-_.~0-9a-zA-Z]
    const unreserved = 'abc-123_.~';
    assert.strictEqual(transcoding.encodeWithSlashes(unreserved), unreserved);

    // Reserved and special characters: should be percent encoded, including !'()*
    const specialChars = "!'()*";
    const encoded = transcoding.encodeWithSlashes(specialChars);
    // ! -> %21, ' -> %27, ( -> %28, ) -> %29, * -> %2A
    assert.strictEqual(encoded, '%21%27%28%29%2A');
  });
});

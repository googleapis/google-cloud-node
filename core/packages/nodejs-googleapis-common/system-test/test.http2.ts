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
import {describe, it, before} from 'mocha';
import {APIRequestContext, GoogleAuth, createAPIRequest} from '../src';
import * as stream from 'stream';
import {OAuth2Client} from 'google-auth-library';
import {randomUUID} from 'crypto';

interface FakeParams {
  foo: string;
  bar: string;
}
describe('http2', () => {
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  let context = {
    _options: {
      auth,
    },
  } as APIRequestContext;

  before(async () => {
    const client = await auth.getClient();
    context = {
      _options: {
        auth: client as OAuth2Client,
      },
    };
  });

  it('should create a valid HTTP/2 API request', async () => {
    const url = 'https://storage.googleapis.com/storage/v1/b';
    const projectId = await auth.getProjectId();
    const result = await createAPIRequest<FakeParams>({
      options: {url, http2: true},
      params: {
        project: projectId,
      },
      requiredParams: [],
      pathParams: [],
      context,
    });
    assert(result.data);
  });

  it('it should send data in a POST', async () => {
    const url = 'https://translation.googleapis.com/language/translate/v2';
    const result = await createAPIRequest<{}>({
      options: {
        url,
        method: 'POST',
        http2: true,
      },
      params: {
        requestBody: {
          q: 'hello there',
          target: 'es',
        },
      },
      requiredParams: [],
      pathParams: [],
      context,
    });
    assert(result.data);
  });

  it('should return a stream if asked nicely', async () => {
    const url = 'https://storage.googleapis.com/storage/v1/b';
    const projectId = await auth.getProjectId();
    const result = await createAPIRequest<FakeParams>({
      options: {
        url,
        http2: true,
        responseType: 'stream',
      },
      params: {
        project: projectId,
      },
      requiredParams: [],
      pathParams: [],
      context,
    });
    assert.ok(result.data);
    assert(result.data instanceof stream.Readable);
  });

  it('should handle multi-part uploads', async () => {
    const projectId = await auth.getProjectId();
    const name = randomUUID();
    const url = `https://storage.googleapis.com/storage/v1/b/${projectId}/o`;
    const result = await createAPIRequest<FakeParams>({
      options: {
        url,
        http2: true,
        method: 'POST',
      },
      params: {
        requestBody: {
          name,
          mimeType: 'text/plain',
        },
        media: {
          mimeType: 'text/plain',
          body: 'Hello World',
        },
      },
      mediaUrl: `https://storage.googleapis.com/upload/storage/v1/b/${projectId}/o`,
      requiredParams: [],
      pathParams: [],
      context,
    });
    assert.ok(result.data);
    assert.strictEqual(result.status, 200);
    await createAPIRequest<FakeParams>({
      options: {
        url: `${url}/${name}`,
        http2: true,
        method: 'DELETE',
      },
      params: {},
      requiredParams: [],
      pathParams: [],
      context,
    });
  });
});

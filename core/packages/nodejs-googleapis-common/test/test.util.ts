// Copyright 2025 Google LLC
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
import {describe, it} from 'mocha';
import {headersToClassicHeaders, marshallGaxiosResponse} from '../src/util';
import {GaxiosResponse} from 'gaxios';

describe('headersToClassicHeaders', () => {
  it('should convert Headers to a plain object', () => {
    const plain = {a: 'b'};
    const headers = new Headers(plain);
    const classicHeaders = headersToClassicHeaders(headers);

    assert.deepEqual(classicHeaders, plain);
  });
});

describe('marshallGaxiosResponse', () => {
  it('should return a valid Response with plain headers', () => {
    const headers = {a: 'b'};
    const status = 204;
    const res = new Response(null, {
      headers,
      status,
    });
    const gRes: GaxiosResponse = Object.assign(res, {
      config: {
        headers: res.headers,
        url: new URL('https://example.com'),
      },
      data: {},
    });

    const newRes = marshallGaxiosResponse(gRes);

    // headers should be writable
    assert.deepEqual(newRes.headers, headers);

    // status and other props should exist
    assert.equal(newRes.status, status);
  });
});

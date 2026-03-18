/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import {describe, it} from 'mocha';
import {rpcCodeFromHttpStatusCode, Status} from '../../src/status';

describe('status.ts', () => {
  it('rpcCodeFromHttpStatusCode', () => {
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(200), Status.OK);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(206), Status.OK);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(300), Status.UNKNOWN);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(307), Status.UNKNOWN);
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(400),
      Status.INVALID_ARGUMENT,
    );
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(401),
      Status.UNAUTHENTICATED,
    );
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(403),
      Status.PERMISSION_DENIED,
    );
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(404), Status.NOT_FOUND);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(409), Status.ABORTED);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(416), Status.OUT_OF_RANGE);
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(429),
      Status.RESOURCE_EXHAUSTED,
    );
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(499), Status.CANCELLED);
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(451),
      Status.FAILED_PRECONDITION,
    );
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(411),
      Status.FAILED_PRECONDITION,
    );
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(501),
      Status.UNIMPLEMENTED,
    );
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(503), Status.UNAVAILABLE);
    assert.deepStrictEqual(
      rpcCodeFromHttpStatusCode(504),
      Status.DEADLINE_EXCEEDED,
    );
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(505), Status.INTERNAL);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(510), Status.INTERNAL);
    assert.deepStrictEqual(rpcCodeFromHttpStatusCode(100), Status.UNKNOWN);
  });
});

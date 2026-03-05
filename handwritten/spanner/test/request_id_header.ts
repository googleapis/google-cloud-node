/**
 * Copyright 2025 Google LLC. All Rights Reserved.
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

/* eslint-disable prefer-rest-params */
import * as assert from 'assert';
import {
  RequestIDError,
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  craftRequestId,
  injectRequestIDIntoError,
  injectRequestIDIntoHeaders,
  newAtomicCounter,
  nextNthRequest,
  randIdForProcess,
} from '../src/request_id_header';

describe('RequestId', () => {
  describe('AtomicCounter', () => {
    it('Constructor with initialValue', done => {
      const ac0 = newAtomicCounter();
      assert.deepStrictEqual(ac0.value(), 0);
      assert.deepStrictEqual(
        ac0.increment(2),
        2,
        'increment should return the added value',
      );
      assert.deepStrictEqual(
        ac0.value(),
        2,
        'increment should have modified the value',
      );

      const ac1 = newAtomicCounter(1);
      assert.deepStrictEqual(ac1.value(), 1);
      assert.deepStrictEqual(
        ac1.increment(1 << 27),
        (1 << 27) + 1,
        'increment should return the added value',
      );
      assert.deepStrictEqual(
        ac1.value(),
        (1 << 27) + 1,
        'increment should have modified the value',
      );
      done();
    });

    it('reset', done => {
      const ac0 = newAtomicCounter(1);
      ac0.increment();
      assert.strictEqual(ac0.value(), 2);
      ac0.reset();
      assert.strictEqual(ac0.value(), 0);
      done();
    });

    it('toString', done => {
      const ac0 = newAtomicCounter(1);
      ac0.increment();
      assert.strictEqual(ac0.value(), 2);
      assert.strictEqual(ac0.toString(), '2');
      assert.strictEqual(`${ac0}`, '2');
      done();
    });
  });

  describe('craftRequestId', () => {
    it('has a 32-bit hex-formatted process-id', done => {
      assert.match(
        randIdForProcess,
        /^[0-9A-Fa-f]{8}$/,
        `process-id should be a 32-bit hexadecimal number, but was ${randIdForProcess}`,
      );
      done();
    });

    it('with attempts', done => {
      assert.strictEqual(
        craftRequestId(1, 2, 3, 4),
        `1.${randIdForProcess}.1.2.3.4`,
      );
      done();
    });
  });

  describe('injectRequestIDIntoError', () => {
    it('with non-null error', done => {
      const err: Error = new Error('this one');
      const config = {headers: {}};
      config.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER] = '1.2.3.4.5.6';
      injectRequestIDIntoError(config, err);
      assert.strictEqual((err as RequestIDError).requestID, '1.2.3.4.5.6');
      done();
    });
  });

  describe('injectRequestIDIntoHeaders', () => {
    it('with null session', done => {
      const hdrs = {};
      injectRequestIDIntoHeaders(hdrs, null, 2, 1);
      done();
    });

    it('with nthRequest explicitly passed in', done => {
      const session = {
        parent: {
          _nextNthRequest: () => {
            return 5;
          },
        },
      };
      const got = injectRequestIDIntoHeaders({}, session, 2, 5);
      const want = {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.2.5`,
      };
      assert.deepStrictEqual(got, want);
      done();
    });

    it('infer nthRequest from session', done => {
      const session = {
        parent: {
          _nextNthRequest: () => {
            return 5;
          },
        },
      };

      const inputHeaders: {[k: string]: string} = {};
      const got = injectRequestIDIntoHeaders(inputHeaders, session);
      const want = {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.5.1`,
      };
      assert.deepStrictEqual(got, want);
      done();
    });
  });

  describe('nextNthRequest', () => {
    const fauxDatabase = {};
    assert.deepStrictEqual(
      nextNthRequest(fauxDatabase),
      1,
      'Without override, should default to 1',
    );

    Object.assign(fauxDatabase, {
      _nextNthRequest: () => {
        return 4;
      },
    });
    assert.deepStrictEqual(
      nextNthRequest(fauxDatabase),
      4,
      'With override should infer value',
    );
  });
});

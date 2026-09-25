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
  createRequestIdInterceptor,
  getProcessId,
  injectRequestIDIntoError,
  injectRequestIDIntoHeaders,
  newAtomicCounter,
  nextNthRequest,
  randIdForProcess,
} from '../src/request_id_header';
import * as grpc from '@grpc/grpc-js';

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
    it('has a 64-bit hex-formatted process-id', done => {
      assert.match(
        randIdForProcess,
        /^[0-9A-Fa-f]{16}$/,
        `process-id should be a 64-bit hexadecimal number, but was ${randIdForProcess}`,
      );
      assert.strictEqual(randIdForProcess.length, 16);
      done();
    });

    it('with attempts', done => {
      assert.strictEqual(
        craftRequestId(1, 2, 3, 4),
        `1.${randIdForProcess}.1.2.3.4`,
      );
      done();
    });

    it('respects SPANNER_PROCESS_ID environment variable override', done => {
      process.env.SPANNER_PROCESS_ID = 'customproc123';
      try {
        assert.strictEqual(getProcessId(), 'customproc123');
        assert.strictEqual(
          craftRequestId(1, 0, 1, 1),
          '1.customproc123.1.0.1.1',
        );
      } finally {
        delete process.env.SPANNER_PROCESS_ID;
      }
      assert.strictEqual(getProcessId(), randIdForProcess);
      done();
    });

    it('respects GOOGLE_CLOUD_SPANNER_PROCESS_ID environment variable override', done => {
      process.env.GOOGLE_CLOUD_SPANNER_PROCESS_ID = 'proc9876';
      try {
        assert.strictEqual(getProcessId(), 'proc9876');
        assert.strictEqual(craftRequestId(2, 0, 3, 1), '1.proc9876.2.0.3.1');
      } finally {
        delete process.env.GOOGLE_CLOUD_SPANNER_PROCESS_ID;
      }
      assert.strictEqual(getProcessId(), randIdForProcess);
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
      assert.strictEqual(
        err.message,
        'this one (x-goog-spanner-request-id: 1.2.3.4.5.6)',
      );
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
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.0.2.5`,
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
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.0.5.1`,
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

  describe('createRequestIdInterceptor', () => {
    it('increments attempt number on each call attempt', done => {
      const config = {
        headers: {
          [X_GOOG_SPANNER_REQUEST_ID_HEADER]: '1.abcde123.1.1.5.1',
        },
      };
      const interceptor = createRequestIdInterceptor(config);

      let lastReceivedMetadata: grpc.Metadata | null = null;
      const fakeNextCall = (options: any) => {
        return {
          start: (metadata: grpc.Metadata, listener: any) => {
            lastReceivedMetadata = metadata;
          },
        };
      };

      // 1st attempt
      const call1 = interceptor({}, fakeNextCall);
      const metadata1 = new grpc.Metadata();
      metadata1.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, '1.abcde123.1.1.5.1');
      call1.start(metadata1, {});
      assert.strictEqual(
        lastReceivedMetadata!.get(X_GOOG_SPANNER_REQUEST_ID_HEADER)[0],
        '1.abcde123.1.1.5.1',
      );
      assert.strictEqual(
        config.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        '1.abcde123.1.1.5.1',
      );

      // 2nd attempt (retry)
      const call2 = interceptor({}, fakeNextCall);
      const metadata2 = new grpc.Metadata();
      metadata2.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, '1.abcde123.1.1.5.1');
      call2.start(metadata2, {});
      assert.strictEqual(
        lastReceivedMetadata!.get(X_GOOG_SPANNER_REQUEST_ID_HEADER)[0],
        '1.abcde123.1.1.5.2',
      );
      assert.strictEqual(
        config.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        '1.abcde123.1.1.5.2',
      );

      // 3rd attempt (retry)
      const call3 = interceptor({}, fakeNextCall);
      const metadata3 = new grpc.Metadata();
      metadata3.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, '1.abcde123.1.1.5.1');
      call3.start(metadata3, {});
      assert.strictEqual(
        lastReceivedMetadata!.get(X_GOOG_SPANNER_REQUEST_ID_HEADER)[0],
        '1.abcde123.1.1.5.3',
      );
      assert.strictEqual(
        config.headers[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        '1.abcde123.1.1.5.3',
      );
      done();
    });
  });
});

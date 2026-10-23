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
import * as sinon from 'sinon';
import {grpc} from 'google-gax';
import {Spanner} from '../src';
import {Database} from '../src/database';
import {MultiplexedSession} from '../src/multiplexed-session';
import {getActiveOrNoopSpan} from '../src/instrument';
import {
  RequestIDError,
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  X_GOOG_SPANNER_REQUEST_ID_SPAN_ATTR,
  attributeXGoogSpannerRequestIdToActiveSpan,
  craftRequestId,
  getRequestIdPrefix,
  injectRequestIDIntoError,
  injectRequestIDIntoHeaders,
  newAtomicCounter,
  nextNthRequest,
  randIdForProcess,
  resetNthClientId,
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

    it('Constructor without initialValue defaults to 0 and increment defaults to 1', done => {
      const counter = newAtomicCounter();
      assert.strictEqual(counter.value(), 0);
      assert.strictEqual(counter.increment(), 1);
      assert.strictEqual(counter.value(), 1);
      done();
    });

    it('wraps around 32-bit unsigned integers', done => {
      const counter = newAtomicCounter(0xffffffff);
      assert.strictEqual(counter.value(), 0xffffffff);
      assert.strictEqual(counter.increment(1), 0);
      assert.strictEqual(counter.value(), 0);
      done();
    });

    it('increment with 0 does not increment the value', done => {
      const counter = newAtomicCounter(5);
      assert.strictEqual(counter.increment(0), 5);
      assert.strictEqual(counter.value(), 5);
      done();
    });
  });

  describe('getRequestIdPrefix', () => {
    it('with default arguments', done => {
      assert.strictEqual(getRequestIdPrefix(), `1.${randIdForProcess}.1.1.`);
      done();
    });

    it('with custom client and channel ids', done => {
      assert.strictEqual(
        getRequestIdPrefix(3, 4),
        `1.${randIdForProcess}.3.4.`,
      );
      done();
    });

    it('with 0 as client and channel ids', done => {
      assert.strictEqual(
        getRequestIdPrefix(0, 0),
        `1.${randIdForProcess}.0.0.`,
      );
      done();
    });

    it('with null as client and channel ids', done => {
      assert.strictEqual(
        getRequestIdPrefix(null as any, null as any),
        `1.${randIdForProcess}.1.1.`,
      );
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

    it('with 0 values', done => {
      assert.strictEqual(
        craftRequestId(0, 0, 0, 0),
        `1.${randIdForProcess}.0.0.0.0`,
      );
      done();
    });

    it('with null values', done => {
      assert.strictEqual(
        craftRequestId(null as any, null as any, null as any, null as any),
        `1.${randIdForProcess}.1.1.1.1`,
      );
      done();
    });
  });

  describe('injectRequestIDIntoError', () => {
    it('with null error', done => {
      injectRequestIDIntoError({}, null as any);
      done();
    });

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
      const headers = {foo: 'bar'};
      const got = injectRequestIDIntoHeaders(headers, null, 2, 1);
      assert.strictEqual(got, headers);
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

    it('uses cached _requestIdPrefix from database when available', done => {
      const session = {
        parent: {
          _requestIdPrefix: `1.${randIdForProcess}.9.8.`,
          _nextNthRequest: () => {
            return 7;
          },
        },
      };

      const got = injectRequestIDIntoHeaders({}, session, 7, 3);
      const want = {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.9.8.7.3`,
      };
      assert.deepStrictEqual(got, want);
      done();
    });

    it('returns headers unchanged if database has no _nextNthRequest', done => {
      const session = {parent: {}};
      const headers = {foo: 'bar'};
      const got = injectRequestIDIntoHeaders(headers, session);
      assert.strictEqual(got, headers);
      done();
    });

    it('infers _clientId on fallback when present', done => {
      const session = {
        parent: {
          _clientId: 42,
          _nextNthRequest: () => {
            return 3;
          },
        },
      };

      const got = injectRequestIDIntoHeaders({}, session, 3, 1);
      const want = {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.42.1.3.1`,
      };
      assert.deepStrictEqual(got, want);
      done();
    });

    it('infers _nthClientId on fallback when present', done => {
      const session = {
        parent: {
          _nthClientId: 42,
          _nextNthRequest: () => {
            return 3;
          },
        },
      };

      const got = injectRequestIDIntoHeaders({}, session, 3, 1);
      const want = {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.42.1.3.1`,
      };
      assert.deepStrictEqual(got, want);
      done();
    });

    it('handles nthRequest = 0 and attempt = 0 without defaulting to 1', done => {
      const session = {
        parent: {
          _requestIdPrefix: `1.${randIdForProcess}.1.1.`,
          _nextNthRequest: () => 0,
        },
      };
      const gotExplicitZero = injectRequestIDIntoHeaders({}, session, 0, 0);
      assert.deepStrictEqual(gotExplicitZero, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.0.0`,
      });

      const gotInferredZero = injectRequestIDIntoHeaders(
        {},
        session,
        undefined,
        1,
      );
      assert.deepStrictEqual(gotInferredZero, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.0.1`,
      });
      done();
    });

    it('infers fallback defaults when session has no parent', done => {
      const session = {};
      const got = injectRequestIDIntoHeaders({}, session, 1, 1);
      assert.deepStrictEqual(got, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.1.1`,
      });
      done();
    });

    it('infers _channelId on fallback when present', done => {
      const session = {
        parent: {
          _clientId: 5,
          _channelId: 8,
          _nextNthRequest: () => 1,
        },
      };
      const got = injectRequestIDIntoHeaders({}, session, 1, 3);
      assert.deepStrictEqual(got, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.5.8.1.3`,
      });
      done();
    });

    it('infers _clientId = 0 and _channelId = 0 on fallback when present', done => {
      const session = {
        parent: {
          _clientId: 0,
          _channelId: 0,
          _nextNthRequest: () => 1,
        },
      };
      const got = injectRequestIDIntoHeaders({}, session, 1, 3);
      assert.deepStrictEqual(got, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.0.0.1.3`,
      });
      done();
    });

    it('returns headers unchanged when nthRequest is null and database has no _nextNthRequest', done => {
      const session = {
        parent: {
          _requestIdPrefix: `1.${randIdForProcess}.1.1.`,
        },
      };
      const headers = {foo: 'bar'};
      const got = injectRequestIDIntoHeaders(headers, session, null as any, 1);
      assert.strictEqual(got, headers);
      done();
    });

    it('infers nthRequest from database when nthRequest is null', done => {
      const session = {
        parent: {
          _requestIdPrefix: `1.${randIdForProcess}.1.1.`,
          _nextNthRequest: () => 7,
        },
      };
      const got = injectRequestIDIntoHeaders({}, session, null as any, 1);
      assert.deepStrictEqual(got, {
        'x-goog-spanner-request-id': `1.${randIdForProcess}.1.1.7.1`,
      });
      done();
    });
  });

  describe('attributeXGoogSpannerRequestIdToActiveSpan', () => {
    it('handles falsy or empty config', done => {
      attributeXGoogSpannerRequestIdToActiveSpan(null);
      attributeXGoogSpannerRequestIdToActiveSpan({});
      attributeXGoogSpannerRequestIdToActiveSpan({headers: {}});
      done();
    });

    it('sets span attribute when request ID header is present', done => {
      const activeSpan = getActiveOrNoopSpan();
      const stub = sinon.stub(activeSpan, 'setAttribute');
      try {
        attributeXGoogSpannerRequestIdToActiveSpan({
          headers: {
            [X_GOOG_SPANNER_REQUEST_ID_HEADER]: '1.2.3.4.5.6',
          },
        });
        assert.strictEqual(stub.calledOnce, true);
        assert.strictEqual(
          stub.firstCall.args[0],
          X_GOOG_SPANNER_REQUEST_ID_SPAN_ATTR,
        );
        assert.strictEqual(stub.firstCall.args[1], '1.2.3.4.5.6');
      } finally {
        stub.restore();
      }
      done();
    });
  });

  describe('nextNthRequest', () => {
    it('defaults to 1 without override', done => {
      const fauxDatabase = {};
      assert.deepStrictEqual(
        nextNthRequest(fauxDatabase),
        1,
        'Without override, should default to 1',
      );
      done();
    });

    it('infers value when _nextNthRequest is present', done => {
      const fauxDatabase = {
        _nextNthRequest: () => 4,
      };
      assert.deepStrictEqual(
        nextNthRequest(fauxDatabase),
        4,
        'With override should infer value',
      );
      done();
    });
  });

  describe('Database integration', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      resetNthClientId();
      sandbox.stub(MultiplexedSession.prototype, 'createSession');
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('propagates sequential client IDs across multiple Spanner and Database instances', async () => {
      const spanner1 = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
      });
      const spanner2 = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
      });
      assert.strictEqual(spanner1._nthClientId, 1);
      assert.strictEqual(spanner2._nthClientId, 2);

      const database1 = spanner1.instance('inst').database('db1');
      const database2 = spanner2.instance('inst').database('db2');
      assert.strictEqual(database1._clientId, 1);
      assert.strictEqual(database2._clientId, 2);
      assert.strictEqual(
        database1._requestIdPrefix,
        `1.${randIdForProcess}.1.1.`,
      );
      assert.strictEqual(
        database2._requestIdPrefix,
        `1.${randIdForProcess}.2.1.`,
      );

      const metadata = database2._metadataWithRequestId(5, 2);
      assert.strictEqual(
        metadata[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.2.1.5.2`,
      );

      const session = {parent: database2};
      const headers = injectRequestIDIntoHeaders({}, session, 5, 2);
      assert.strictEqual(
        headers[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.2.1.5.2`,
      );

      // Verify that mutating _clientId updates the prefix
      database2._clientId = 7;
      assert.strictEqual(
        database2._requestIdPrefix,
        `1.${randIdForProcess}.7.1.`,
      );
      const updated = injectRequestIDIntoHeaders({}, session, 1, 1);
      assert.strictEqual(
        updated[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.7.1.1.1`,
      );

      // Verify that mutating _channelId updates the prefix
      database2._channelId = 4;
      assert.strictEqual(database2._channelId, 4);
      assert.strictEqual(
        database2._requestIdPrefix,
        `1.${randIdForProcess}.7.4.`,
      );
      const updatedChannel = injectRequestIDIntoHeaders({}, session, 1, 1);
      assert.strictEqual(
        updatedChannel[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.7.4.1.1`,
      );
      const metadataUpdated = database2._metadataWithRequestId(3, 1);
      assert.strictEqual(
        metadataUpdated[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.7.4.3.1`,
      );

      // Verify that mutating _clientId and _channelId to 0 preserves 0
      database2._clientId = 0;
      database2._channelId = 0;
      assert.strictEqual(database2._clientId, 0);
      assert.strictEqual(database2._channelId, 0);
      assert.strictEqual(
        database2._requestIdPrefix,
        `1.${randIdForProcess}.0.0.`,
      );
      const metadataZero = database2._metadataWithRequestId(0, 0);
      assert.strictEqual(
        metadataZero[X_GOOG_SPANNER_REQUEST_ID_HEADER],
        `1.${randIdForProcess}.0.0.0.0`,
      );

      // Verify that setting _clientId or _channelId to null defaults back to 1
      database2._clientId = null as any;
      database2._channelId = null as any;
      assert.strictEqual(database2._clientId, 1);
      assert.strictEqual(database2._channelId, 1);
      assert.strictEqual(
        database2._requestIdPrefix,
        `1.${randIdForProcess}.1.1.`,
      );

      await Promise.all([spanner1.close(), spanner2.close()]);
    });

    it('initializes _clientId from instance._nthClientId when parent has no _nthClientId', () => {
      const mockInstance = {
        parent: {},
        _nthClientId: 99,
        request: () => {},
        commonHeaders_: {},
        requestStream: () => {},
        _observabilityOptions: {},
      };
      const database = new Database(mockInstance as any, 'test-db');
      assert.strictEqual(database._clientId, 99);
      assert.strictEqual(
        database._requestIdPrefix,
        `1.${randIdForProcess}.99.1.`,
      );
    });

    it('defaults _clientId to 1 when neither parent nor instance defines _nthClientId', () => {
      const mockInstance = {
        parent: {},
        request: () => {},
        commonHeaders_: {},
        requestStream: () => {},
        _observabilityOptions: {},
      };
      const database = new Database(mockInstance as any, 'test-db');
      assert.strictEqual(database._clientId, 1);
      assert.strictEqual(
        database._requestIdPrefix,
        `1.${randIdForProcess}.1.1.`,
      );
    });
  });
});

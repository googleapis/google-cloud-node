/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {PreciseDate} from '@google-cloud/precise-date';
import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {EventEmitter} from 'events';
import {common as p} from 'protobufjs';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';

import {protos} from '../src';
import {codec} from '../src/codec';
import {google} from '../protos/protos';
import {
  CLOUD_RESOURCE_HEADER,
  LEADER_AWARE_ROUTING_HEADER,
  AFE_SERVER_TIMING_HEADER,
} from '../src/common';
import {
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  craftRequestId,
} from '../src/request_id_header';
import RequestOptions = google.spanner.v1.RequestOptions;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import {
  BatchUpdateOptions,
  ExecuteSqlRequest,
  ReadRequest,
} from '../src/transaction';
import {grpc} from 'google-gax';

describe('Transaction', () => {
  const sandbox = sinon.createSandbox();

  const REQUEST = sandbox.stub();
  const REQUEST_STREAM = sandbox.stub();
  const SESSION_NAME = 'session-123';

  const SPANNER = {
    routeToLeaderEnabled: true,
    directedReadOptions: {},
    defaultTransactionOptions: {
      isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
      readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
    },
  };

  const INSTANCE = {
    parent: SPANNER,
  };

  const DATABASE = {
    formattedName_: 'formatted-database-name',
    parent: INSTANCE,
  };

  const SESSION = {
    parent: DATABASE,
    formattedName_: SESSION_NAME,
    request: REQUEST,
    requestStream: REQUEST_STREAM,
  };

  const PARTIAL_RESULT_STREAM = sandbox.stub();
  const PROMISIFY_ALL = sandbox.stub();

  const fakeDirectedReadOptions = {
    includeReplicas: {
      replicaSelections: [
        {
          location: 'us-west1',
          type: protos.google.spanner.v1.DirectedReadOptions.ReplicaSelection
            .Type.READ_ONLY,
        },
      ],
      autoFailoverDisabled: true,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Snapshot;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Dml;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Transaction;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let PartitionedDml;

  before(() => {
    const txns = proxyquire('../src/transaction', {
      '@google-cloud/promisify': {promisifyAll: PROMISIFY_ALL},
      './codec': {codec},
      './partial-result-stream': {partialResultStream: PARTIAL_RESULT_STREAM},
    });

    Snapshot = txns.Snapshot;
    Dml = txns.Dml;
    Transaction = txns.Transaction;
    PartitionedDml = txns.PartitionedDml;
  });

  afterEach(() => sandbox.restore());

  describe('Snapshot', () => {
    const OPTIONS = {a: 'b', c: 'd'};

    let snapshot;

    beforeEach(() => {
      sandbox.stub(Snapshot, 'encodeTimestampBounds').returns(OPTIONS);
      snapshot = new Snapshot(SESSION);
    });

    describe('initialization', () => {
      it('should promisify all the things', () => {
        const expectedOptions = sinon.match({
          exclude: ['configureTagOptions', 'end'],
        });

        const stub = PROMISIFY_ALL.withArgs(Snapshot, expectedOptions);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should extend EventEmitter', () => {
        assert(snapshot instanceof EventEmitter);
      });

      it('should default `ended` to false', () => {
        assert.strictEqual(snapshot.ended, false);
      });

      it('should localize the session', () => {
        assert.strictEqual(snapshot.session, SESSION);
      });

      it('should localize `Session#request`', () => {
        snapshot.request();
        assert.strictEqual(REQUEST.callCount, 1);
      });

      it('should localize `Session#requestStream`', () => {
        snapshot.requestStream();
        assert.strictEqual(REQUEST_STREAM.callCount, 1);
      });

      it('should set the commonHeaders_', () => {
        assert.deepStrictEqual(snapshot.commonHeaders_, {
          [CLOUD_RESOURCE_HEADER]: snapshot.session.parent.formattedName_,
          [AFE_SERVER_TIMING_HEADER]: 'true',
        });
      });
    });

    describe('begin', () => {
      const BEGIN_RESPONSE = {
        id: Buffer.from('transaction-id-123'),
      };

      it('should send the correct request', () => {
        snapshot.begin();

        const {client, method, reqOpts, gaxOpts, headers} =
          REQUEST.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.strictEqual(reqOpts.session, SESSION_NAME);
        assert.deepStrictEqual(gaxOpts, {});
        assert.deepStrictEqual(headers, snapshot.commonHeaders_);
      });

      it('should accept gaxOptions', done => {
        const gaxOptions = {
          timeout: 1000,
        };

        snapshot.request = config => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };

        snapshot.begin(gaxOptions);
      });

      it('should send the formatted options', () => {
        const fakeOptions = {a: 'b'};
        const fakeEncodedOptions = {c: 'd'};
        const expectedOptions = {readOnly: fakeEncodedOptions};

        Snapshot.encodeTimestampBounds
          .withArgs(fakeOptions)
          .returns(fakeEncodedOptions);

        new Snapshot(SESSION, fakeOptions).begin();

        const {reqOpts} = REQUEST.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.options, expectedOptions);
      });

      it('should return any request errors', done => {
        const fakeError = new Error('err');

        REQUEST.callsFake((_, callback) => callback(fakeError));

        snapshot.begin(err => {
          assert.strictEqual(err, fakeError);
          done();
        });
      });

      it('should localize `id`', done => {
        REQUEST.callsFake((_, callback) => callback(null, BEGIN_RESPONSE));

        snapshot.begin(err => {
          assert.ifError(err);
          assert.strictEqual(snapshot.id, BEGIN_RESPONSE.id);
          done();
        });
      });

      it('should localize the response as `metadata`', done => {
        REQUEST.callsFake((_, callback) => callback(null, BEGIN_RESPONSE));

        snapshot.begin(err => {
          assert.ifError(err);
          assert.strictEqual(snapshot.metadata, BEGIN_RESPONSE);
          done();
        });
      });

      it('should localize `readTimestamp` if present', done => {
        const expectedTimestamp = new PreciseDate(0);
        const readTimestamp = {seconds: 0, nanos: 0};
        const response = Object.assign({readTimestamp}, BEGIN_RESPONSE);

        REQUEST.callsFake((_, callback) => callback(null, response));

        snapshot.begin(err => {
          assert.ifError(err);
          assert.deepStrictEqual(snapshot.readTimestamp, expectedTimestamp);
          assert.strictEqual(snapshot.readTimestampProto, readTimestamp);
          done();
        });
      });

      it('should localize precommitToken if present', done => {
        const precommitToken = {
          precommitToken: Buffer.from('precommit-token-begin'),
          seqNum: 1,
        };
        const response = Object.assign({precommitToken}, BEGIN_RESPONSE);

        REQUEST.callsFake((_, callback) => callback(null, response));

        snapshot.begin(err => {
          assert.ifError(err);
          assert.strictEqual(snapshot._latestPreCommitToken, precommitToken);
          done();
        });
      });

      it('should return the response', done => {
        REQUEST.callsFake((_, callback) => callback(null, BEGIN_RESPONSE));

        snapshot.begin((err, resp) => {
          assert.ifError(err);
          assert.strictEqual(resp, BEGIN_RESPONSE);
          done();
        });
      });
    });

    describe('createReadStream', () => {
      const TABLE = 'my-table-123';

      beforeEach(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('should send the correct request', () => {
        snapshot.createReadStream(TABLE);

        const {client, method, headers} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'streamingRead');
        assert.deepStrictEqual(headers, {
          ...snapshot.commonHeaders_,
          [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
        });
      });

      it('should use the transaction id if present', () => {
        const id = 'transaction-id-123';
        const expectedTransaction = {id};

        snapshot.id = id;
        snapshot.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.transaction, expectedTransaction);
      });

      it('should configure `singleUse` if id is absent', () => {
        const expectedTransaction = {
          singleUse: {readOnly: OPTIONS},
        };

        snapshot.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.transaction, expectedTransaction);
      });

      it('should set request tag', () => {
        const requestTag = 'foo';
        const request: ReadRequest = {requestOptions: {requestTag}};

        snapshot.createReadStream(TABLE, request);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.requestOptions, {requestTag});
      });

      it('should send the correct `reqOpts`', () => {
        const id = 'transaction-id-123';
        const fakeKeySet = {all: true};

        const fakeRequest = {
          keys: ['a', 'b', 'c'],
          ranges: [{}, {}],
          columns: ['name'],
          directedReadOptions: fakeDirectedReadOptions,
        };

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          table: TABLE,
          keySet: fakeKeySet,
          resumeToken: undefined,
          columns: ['name'],
          directedReadOptions: fakeDirectedReadOptions,
        };

        sandbox
          .stub(Snapshot, 'encodeKeySet')
          .withArgs(fakeRequest)
          .returns(fakeKeySet);

        snapshot.id = id;
        snapshot.createReadStream(TABLE, fakeRequest);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });

      it('should pass along `gaxOpts`', () => {
        const fakeOptions = {};

        snapshot.createReadStream(TABLE, {gaxOptions: fakeOptions});

        const {gaxOpts, reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(gaxOpts, fakeOptions);
        assert.strictEqual(reqOpts.gaxOptions, undefined);
      });

      it('should pass a stream to `PartialResultStream`', () => {
        const fakeStream = new EventEmitter();

        REQUEST_STREAM.returns(fakeStream);
        snapshot.createReadStream(TABLE);

        const makeRequest = PARTIAL_RESULT_STREAM.lastCall.args[0];
        const stream = makeRequest();

        assert.strictEqual(stream, fakeStream);
      });

      it('should update the `resumeToken` for subsequent requests', () => {
        const fakeToken = 'fake-token-123';

        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest(fakeToken));
        snapshot.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.resumeToken, fakeToken);
      });

      it('should return a `PartialResultStream`', () => {
        const fakeStream = new EventEmitter();

        PARTIAL_RESULT_STREAM.returns(fakeStream);

        const stream = snapshot.createReadStream(TABLE);

        assert.strictEqual(stream, fakeStream);
      });

      it('should pass along row options', () => {
        const gaxOptions = {
          timeout: 60,
        };
        const fakeOptions = {
          json: true,
          jsonOptions: {a: 'b'},
          maxResumeRetries: 10,
          columnsMetadata: {column1: {test: 'ss'}, column2: Function},
          gaxOptions: gaxOptions,
        };

        snapshot.createReadStream(TABLE, fakeOptions);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.json, undefined);
        assert.strictEqual(reqOpts.jsonOptions, undefined);
        assert.strictEqual(reqOpts.maxResumeRetries, undefined);

        const options = PARTIAL_RESULT_STREAM.lastCall.args[1];

        assert.deepStrictEqual(options, fakeOptions);
      });

      it('should accept directedReadOptions set for client', () => {
        const id = 'transaction-id-123';
        SESSION.parent.parent.parent = {
          routeToLeaderEnabled: true,
          directedReadOptions: fakeDirectedReadOptions,
          defaultTransactionOptions: {
            isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
            readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
          },
        };

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          table: TABLE,
          keySet: {all: true},
          resumeToken: undefined,
          directedReadOptions: fakeDirectedReadOptions,
        };

        snapshot.id = id;
        snapshot.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });

      it('should override directedReadOptions set at client level when passed at request level', () => {
        const id = 'transaction-id-123';
        const fakeDirectedReadOptionsForRequest = {
          includeReplicas: {
            replicaSelections: [
              {
                location: 'us-east1',
              },
            ],
          },
        };

        const fakeRequest = {
          directedReadOptions: fakeDirectedReadOptionsForRequest,
        };

        SESSION.parent.parent.parent = {
          routeToLeaderEnabled: true,
          directedReadOptions: fakeDirectedReadOptions,
          defaultTransactionOptions: {
            isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
            readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
          },
        };

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          table: TABLE,
          keySet: {all: true},
          resumeToken: undefined,
          directedReadOptions: fakeDirectedReadOptionsForRequest,
        };

        snapshot.id = id;
        snapshot.createReadStream(TABLE, fakeRequest);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });
    });

    describe('end', () => {
      it('should set `ended` to true', () => {
        snapshot.end();

        assert.strictEqual(snapshot.ended, true);
      });

      it('should emit an "end" event', done => {
        snapshot.on('end', done);
        snapshot.end();
      });

      it('should noop if already ended', done => {
        snapshot.on('end', done);
        snapshot.end();
        snapshot.end();
      });
    });

    describe('read', () => {
      const TABLE = 'my-table-123';

      let fakeStream;
      let stub;

      beforeEach(() => {
        fakeStream = new EventEmitter();
        stub = sandbox.stub(snapshot, 'createReadStream').returns(fakeStream);
      });

      it('should call through to `createReadStream`', () => {
        const fakeRequest = {};

        snapshot.read(TABLE, fakeRequest, () => {});

        const [table, request] = stub.lastCall.args;

        assert.strictEqual(table, TABLE);
        assert.strictEqual(request, fakeRequest);
      });

      it('should return any request errors', done => {
        const fakeError = new Error('err');

        snapshot.read(TABLE, {}, err => {
          assert.strictEqual(err, fakeError);
          done();
        });

        fakeStream.emit('error', fakeError);
      });

      it('should concatenate rows and return them on "end" event', done => {
        const fakeRows = [{a: 'b'}, {c: 'd'}, {e: 'f'}];

        snapshot.read(TABLE, {}, (err, rows) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);
          done();
        });

        fakeRows.forEach(row => fakeStream.emit('data', row));
        fakeStream.emit('end');
      });

      it('should optionally accept a request object', done => {
        snapshot.read(TABLE, done);
        fakeStream.emit('end');
      });
    });

    describe('run', () => {
      const QUERY = 'SELET * FROM `MyTable`';

      let fakeStream;
      let stub;

      beforeEach(() => {
        fakeStream = new EventEmitter();
        stub = sandbox.stub(snapshot, 'runStream').returns(fakeStream);
      });

      it('should call through to `runStream`', () => {
        snapshot.run(QUERY, () => {});

        const query = stub.lastCall.args[0];

        assert.strictEqual(query, QUERY);
      });

      it('should return any request errors', done => {
        const fakeError = new Error('err');

        snapshot.run(QUERY, err => {
          assert.strictEqual(err, fakeError);
          done();
        });

        fakeStream.emit('error', fakeError);
      });

      it('should concatenate rows and return them on "end" event', done => {
        const fakeRows = [{a: 'b'}, {c: 'd'}, {e: 'f'}];

        snapshot.run(QUERY, (err, rows) => {
          assert.ifError(err);
          assert.deepStrictEqual(rows, fakeRows);
          done();
        });

        fakeRows.forEach(row => fakeStream.emit('data', row));
        fakeStream.emit('end');
      });

      it('should pass back `stats` if available', done => {
        const fakeStats = {};

        snapshot.run(QUERY, (err, rows, stats) => {
          assert.ifError(err);
          assert.strictEqual(stats, fakeStats);
          done();
        });

        fakeStream.emit('stats', fakeStats);
        fakeStream.emit('end');
      });
    });

    describe('runStream', () => {
      const QUERY = {
        sql: 'SELECT * FROM `MyTable`',
      };

      beforeEach(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('should send the correct request', () => {
        snapshot.runStream(QUERY);

        const {client, method, headers} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'executeStreamingSql');
        assert.deepStrictEqual(headers, {
          ...snapshot.commonHeaders_,
          [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
        });
      });

      it('should use the transaction id if present', () => {
        const id = 'transaction-id-123';
        const expectedTransaction = {id};

        snapshot.id = id;
        snapshot.runStream(QUERY);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.transaction, expectedTransaction);
      });

      it('should configure `singleUse` if id is absent', () => {
        const expectedTransaction = {
          singleUse: {readOnly: OPTIONS},
        };

        snapshot.runStream(QUERY);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.transaction, expectedTransaction);
      });

      it('should set request tag', () => {
        const requestTag = 'foo';
        const query = Object.assign({}, QUERY, {
          requestOptions: {requestTag},
        });

        snapshot.runStream(query);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.requestOptions, {requestTag});
      });

      it('should send the correct `reqOpts`', () => {
        const id = 'transaction-id-123';
        const fakeParams = {b: 'a'};
        const fakeParamTypes = {b: 'number'};

        const fakeQuery = Object.assign({}, QUERY, {
          params: {a: 'b'},
          types: {a: 'string'},
          seqno: 1,
          queryOptions: {},
          directedReadOptions: fakeDirectedReadOptions,
        });

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          sql: QUERY.sql,
          params: fakeParams,
          paramTypes: fakeParamTypes,
          seqno: 1,
          queryOptions: {},
          resumeToken: undefined,
          directedReadOptions: fakeDirectedReadOptions,
        };

        sandbox.stub(Snapshot, 'encodeParams').withArgs(fakeQuery).returns({
          params: fakeParams,
          paramTypes: fakeParamTypes,
        });

        snapshot.id = id;
        snapshot.runStream(fakeQuery);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });

      it('should accept just a sql string', () => {
        snapshot.runStream(QUERY.sql);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.sql, QUERY.sql);
      });

      it('should pass along `gaxOpts`', () => {
        const fakeQuery = Object.assign({gaxOptions: {}}, QUERY);

        snapshot.runStream(fakeQuery);

        const {gaxOpts, reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.gaxOptions, undefined);
        assert.strictEqual(gaxOpts, fakeQuery.gaxOptions);
      });

      it('should update the `seqno` for each call', () => {
        snapshot.runStream(QUERY);
        const call1 = REQUEST_STREAM.lastCall.args[0];

        snapshot.runStream(QUERY);
        const call2 = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(call1.reqOpts.seqno, 1);
        assert.strictEqual(call2.reqOpts.seqno, 2);
      });

      it('should pass a stream to `PartialResultStream`', () => {
        const fakeStream = new EventEmitter();

        REQUEST_STREAM.returns(fakeStream);
        snapshot.runStream(QUERY);

        const makeRequest = PARTIAL_RESULT_STREAM.lastCall.args[0];
        const stream = makeRequest();

        assert.strictEqual(stream, fakeStream);
      });

      it('should return a `PartialResultStream`', () => {
        const fakeStream = new EventEmitter();

        PARTIAL_RESULT_STREAM.returns(fakeStream);

        const stream = snapshot.runStream(QUERY);

        assert.strictEqual(stream, fakeStream);
      });

      it('should update the `resumeToken` for subsequent requests', () => {
        const fakeToken = 'fake-token-123';

        snapshot.runStream(QUERY);

        const makeRequest = PARTIAL_RESULT_STREAM.lastCall.args[0];

        makeRequest(fakeToken);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.resumeToken, fakeToken);
      });

      it('should pass along row options', () => {
        const gaxOptions = {
          timeout: 60,
        };
        const expectedOptions = {
          json: true,
          jsonOptions: {a: 'b'},
          maxResumeRetries: 10,
          columnsMetadata: {column1: {test: 'ss'}, column2: Function},
          gaxOptions: gaxOptions,
        };

        const fakeQuery = Object.assign({}, QUERY, expectedOptions);

        snapshot.runStream(fakeQuery);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(reqOpts.json, undefined);
        assert.strictEqual(reqOpts.jsonOptions, undefined);
        assert.strictEqual(reqOpts.maxResumeRetries, undefined);

        const options = PARTIAL_RESULT_STREAM.lastCall.args[1];

        assert.deepStrictEqual(options, expectedOptions);
      });

      it('should use valid parameters', () => {
        const fakeQuery = Object.assign({}, QUERY, {
          params: {
            a: 'a',
            b: 3.14,
            c: true,
          },
        });
        const expectedParams = {
          fields: {
            a: {stringValue: 'a'},
            b: {numberValue: 3.14},
            c: {boolValue: true},
          },
        };

        snapshot.runStream(fakeQuery);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];
        assert.deepStrictEqual(reqOpts.params, expectedParams);
      });

      it('should return an error stream for invalid parameters', done => {
        REQUEST_STREAM.resetHistory();

        const fakeQuery = Object.assign({}, QUERY, {
          params: {a: undefined},
        });

        const stream = snapshot.runStream(fakeQuery);
        stream.on('error', error => {
          assert.strictEqual(
            error.message,
            'Value of type undefined not recognized.',
          );
          done();
        });
        assert.ok(!REQUEST_STREAM.called, 'No request should be made');
      });

      it('should accept directedReadOptions set for client', () => {
        const id = 'transaction-id-123';
        const fakeParams = {b: 'a'};
        const fakeParamTypes = {b: 'number'};
        SESSION.parent.parent.parent = {
          routeToLeaderEnabled: true,
          directedReadOptions: fakeDirectedReadOptions,
          defaultTransactionOptions: {
            isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
            readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
          },
        };

        const fakeQuery = Object.assign({}, QUERY, {
          params: {a: 'b'},
          types: {a: 'string'},
          seqno: 1,
          queryOptions: {},
        });

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          sql: QUERY.sql,
          params: fakeParams,
          paramTypes: fakeParamTypes,
          seqno: 1,
          queryOptions: {},
          resumeToken: undefined,
          directedReadOptions: fakeDirectedReadOptions,
        };

        sandbox.stub(Snapshot, 'encodeParams').withArgs(fakeQuery).returns({
          params: fakeParams,
          paramTypes: fakeParamTypes,
        });

        snapshot.id = id;
        snapshot.runStream(fakeQuery);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });

      it('should override directedReadOptions set at client level when passed for request level', () => {
        const id = 'transaction-id-123';
        const fakeParams = {b: 'a'};
        const fakeParamTypes = {b: 'number'};

        SESSION.parent.parent.parent = {
          routeToLeaderEnabled: true,
          directedReadOptions: fakeDirectedReadOptions,
          defaultTransactionOptions: {
            isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
            readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
          },
        };

        const fakeDirectedReadOptionsForRequest = {
          includeReplicas: {
            replicaSelections: [
              {
                location: 'us-east1',
              },
            ],
          },
        };

        const fakeQuery = Object.assign({}, QUERY, {
          params: {a: 'b'},
          types: {a: 'string'},
          seqno: 1,
          queryOptions: {},
          directedReadOptions: fakeDirectedReadOptionsForRequest,
        });

        const expectedRequest = {
          session: SESSION_NAME,
          requestOptions: {},
          transaction: {id},
          sql: QUERY.sql,
          params: fakeParams,
          paramTypes: fakeParamTypes,
          seqno: 1,
          queryOptions: {},
          resumeToken: undefined,
          directedReadOptions: fakeDirectedReadOptionsForRequest,
        };

        sandbox.stub(Snapshot, 'encodeParams').withArgs(fakeQuery).returns({
          params: fakeParams,
          paramTypes: fakeParamTypes,
        });

        snapshot.id = id;
        snapshot.runStream(fakeQuery);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts, expectedRequest);
      });
    });

    describe('encodeKeySet', () => {
      function toListValue(thing): p.IListValue {
        return {
          values: [{stringValue: thing}],
        };
      }

      it('should encode an array of `keys`', () => {
        const fakeKeys = ['a', 'b', 'c'];
        const encodedKeys = fakeKeys.map(toListValue);

        const stub = sandbox.stub(codec, 'convertToListValue');

        fakeKeys.forEach((key, i) => {
          stub.withArgs(key).returns(encodedKeys[i]);
        });

        const expectedKeySet = {keys: encodedKeys};
        const keySet = Snapshot.encodeKeySet({keys: fakeKeys});

        assert.deepStrictEqual(keySet, expectedKeySet);
      });

      it('should encode an array of `ranges`', () => {
        const fakeRanges = [
          {startClosed: 'a', endOpen: 'b'},
          {startOpen: 'c', endClosed: 'd'},
        ];

        const encodedRanges = [
          {startClosed: toListValue('a'), endOpen: toListValue('b')},
          {startOpen: toListValue('c'), endClosed: toListValue('d')},
        ];

        sandbox.stub(codec, 'convertToListValue').callsFake(toListValue);

        const expectedKeySet = {ranges: encodedRanges};
        const keySet = Snapshot.encodeKeySet({ranges: fakeRanges});

        assert.deepStrictEqual(keySet, expectedKeySet);
      });

      it('should return all keys by default', () => {
        const keySet = Snapshot.encodeKeySet({});

        assert.deepStrictEqual(keySet, {all: true});
      });

      it('should preserve passed in keySet', () => {
        const fakeKeySet = {all: false};
        const keySet = Snapshot.encodeKeySet({keySet: fakeKeySet});

        assert.deepStrictEqual(keySet, fakeKeySet);
      });
    });

    describe('encodeTimestampBounds', () => {
      const PROTO_TIMESTAMP = {
        nanos: 123123,
        seconds: 453452234,
      };

      beforeEach(() => {
        Snapshot.encodeTimestampBounds.restore();
      });

      it('should accept `strong` user value', () => {
        const options = Snapshot.encodeTimestampBounds({strong: false});

        assert.strictEqual(options.strong, false);
      });

      it('should default `returnReadTimestamp` to true', () => {
        const options = Snapshot.encodeTimestampBounds({});

        assert.strictEqual(options.returnReadTimestamp, true);
      });

      it('should accept `returnReadTimestamp` user value', () => {
        const options = Snapshot.encodeTimestampBounds({
          returnReadTimestamp: false,
        });

        assert.strictEqual(options.returnReadTimestamp, false);
      });

      it('should convert `minReadTimestamp` Date to proto', () => {
        const fakeTimestamp = new PreciseDate();

        sandbox.stub(fakeTimestamp, 'toStruct').returns(PROTO_TIMESTAMP);

        const options = Snapshot.encodeTimestampBounds({
          minReadTimestamp: fakeTimestamp,
        });

        assert.strictEqual(options.minReadTimestamp, PROTO_TIMESTAMP);
      });

      it('should convert `readTimestamp` Date to proto', () => {
        const fakeTimestamp = new PreciseDate();

        sandbox.stub(fakeTimestamp, 'toStruct').returns(PROTO_TIMESTAMP);

        const options = Snapshot.encodeTimestampBounds({
          readTimestamp: fakeTimestamp,
        });

        assert.strictEqual(options.readTimestamp, PROTO_TIMESTAMP);
      });

      it('should convert `maxStaleness` ms to proto', () => {
        const fakeTimestamp = Date.now();

        sandbox
          .stub(codec, 'convertMsToProtoTimestamp')
          .withArgs(fakeTimestamp)
          .returns(PROTO_TIMESTAMP);

        const options = Snapshot.encodeTimestampBounds({
          maxStaleness: fakeTimestamp,
        });

        assert.strictEqual(options.maxStaleness, PROTO_TIMESTAMP);
      });

      it('should convert `exactStaleness` ms to proto', () => {
        const fakeTimestamp = Date.now();

        sandbox
          .stub(codec, 'convertMsToProtoTimestamp')
          .withArgs(fakeTimestamp)
          .returns(PROTO_TIMESTAMP);

        const options = Snapshot.encodeTimestampBounds({
          exactStaleness: fakeTimestamp,
        });

        assert.strictEqual(options.exactStaleness, PROTO_TIMESTAMP);
      });

      it('should accept proto timestamp', () => {
        const fakeOptions = {
          exactStaleness: {
            seconds: 23423424,
            nanos: 23234234,
          },
          returnReadTimestamp: false,
        };

        const options = Snapshot.encodeTimestampBounds(fakeOptions);

        assert.deepStrictEqual(options, fakeOptions);
        assert.notStrictEqual(options, fakeOptions);
      });
    });

    describe('encodeParams', () => {
      it('should encode param values', () => {
        const fakeParams = {a: 'foo', b: 3};
        const encodedParams = {
          a: {stringValue: 'bar'},
          b: {numberValue: 4},
        };

        const stub = sandbox.stub(codec, 'encode');

        stub.withArgs(fakeParams.a).returns(encodedParams.a);
        stub.withArgs(fakeParams.b).returns(encodedParams.b);

        const expectedParams = {fields: encodedParams};
        const {params} = Snapshot.encodeParams({params: fakeParams});

        assert.deepStrictEqual(params, expectedParams);
      });

      it('should encode param types', () => {
        const fakeTypes = {a: 'string', b: 'number'};
        const expectedTypes = {
          a: {code: google.spanner.v1.TypeCode.STRING},
          b: {code: google.spanner.v1.TypeCode.INT64},
        };

        const stub = sandbox.stub(codec, 'createTypeObject') as sinon.SinonStub;

        stub
          .withArgs(fakeTypes.a)
          .returns(expectedTypes.a as google.spanner.v1.Type);
        stub
          .withArgs(fakeTypes.b)
          .returns(expectedTypes.b as google.spanner.v1.Type);

        const {paramTypes} = Snapshot.encodeParams({types: fakeTypes});

        assert.deepStrictEqual(paramTypes, expectedTypes);
      });

      it('should guess missing param types', () => {
        const fakeParams = {a: 'foo', b: 3};
        const fakeTypes = {b: 'number'};
        const fakeMissingType = {type: 'string'};
        const expectedTypes = {
          a: {code: google.spanner.v1.TypeCode.STRING},
          b: {code: google.spanner.v1.TypeCode.INT64},
        };

        sandbox
          .stub(codec, 'createTypeObject')
          .withArgs(fakeTypes.b)
          .returns(expectedTypes.b as google.spanner.v1.Type)
          .withArgs(fakeMissingType)
          .returns(expectedTypes.a as google.spanner.v1.Type);

        const {paramTypes} = Snapshot.encodeParams({
          params: fakeParams,
          types: fakeTypes,
        });

        assert.strictEqual(paramTypes.a, expectedTypes.a);
      });
    });
  });

  describe('Dml', () => {
    let dml;

    beforeEach(() => {
      dml = new Dml(SESSION);
    });

    describe('initialization', () => {
      it('should promisify all the things', () => {
        const stub = PROMISIFY_ALL.withArgs(Dml);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should inherit from Snapshot', () => {
        assert(dml instanceof Snapshot);
      });
    });

    describe('runUpdate', () => {
      const SQL = 'SELECT * FROM `MyTable`';

      it('should call through to `run`', () => {
        const fakeQuery = {sql: SQL};

        const stub = sandbox.stub(dml, 'run').withArgs(fakeQuery);

        dml.runUpdate(fakeQuery);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should accept a sql string', () => {
        const expectedQuery = {sql: SQL};

        const stub = sandbox
          .stub(dml, 'run')
          .withArgs(sinon.match(expectedQuery));

        dml.runUpdate(SQL);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should return any request errors', () => {
        const fakeError = new Error('err');
        const stub = sandbox.stub(dml, 'run');
        const callback = sandbox.stub().withArgs(fakeError, 0);

        dml.runUpdate(SQL, callback);

        const runCallback = stub.lastCall.args[1];
        runCallback(fakeError);

        assert.strictEqual(callback.callCount, 1);
      });

      it('should return 0 for `rowCount`', () => {
        const stub = sandbox.stub(dml, 'run');
        const callback = sandbox.stub().withArgs(null, 0);

        dml.runUpdate(SQL, callback);

        const runCallback = stub.lastCall.args[1];
        runCallback(null);

        assert.strictEqual(callback.callCount, 1);
        assert.strictEqual(callback.args[0][1], 0);
      });

      it('should return the `rowCountExact`', () => {
        const fakeRowCount = 5.5;
        const fakeStats = {
          rowCount: 'rowCountExact',
          rowCountExact: fakeRowCount,
        };

        const stub = sandbox.stub(dml, 'run');
        const callback = sandbox.stub().withArgs(null, fakeRowCount);

        dml.runUpdate(SQL, callback);

        const runCallback = stub.lastCall.args[1];
        runCallback(null, undefined, fakeStats);

        assert.strictEqual(callback.callCount, 1);
        assert.strictEqual(callback.args[0][1], Math.floor(fakeRowCount));
      });
    });
  });

  describe('Transaction', () => {
    let transaction;

    beforeEach(() => {
      transaction = new Transaction(SESSION);
    });

    describe('initialization', () => {
      it('should promisify all the things', () => {
        const expectedOptions = sinon.match({
          exclude: ['deleteRows', 'insert', 'replace', 'update', 'upsert'],
        });

        const stub = PROMISIFY_ALL.withArgs(Transaction, expectedOptions);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should inherit from Dml', () => {
        assert(transaction instanceof Dml);
      });
    });

    describe('batchUpdate', () => {
      const STRING_STATEMENTS = [
        "INSERT INTO Table (Key, Str) VALUES('a', 'b')",
        "UPDATE Table t SET t.Str = 'c' WHERE t.Key = 'a'",
      ];

      const OBJ_STATEMENTS = [
        {
          sql: 'INSERT INTO TxnTable (Key, StringValue) VALUES(@key, @str)',
          params: {
            key: 'k999',
            str: 'abc',
          },
        },
        {
          sql: 'UPDATE TxnTable t SET t.StringValue = @str WHERE t.Key = @key',
          params: {
            key: 'k999',
            str: 'abcd',
          },
        },
      ];

      const FORMATTED_STATEMENTS = [
        {
          sql: OBJ_STATEMENTS[0].sql,
          params: {
            fields: {
              key: {stringValue: OBJ_STATEMENTS[0].params.key},
              str: {stringValue: OBJ_STATEMENTS[0].params.str},
            },
          },
          paramTypes: {
            key: {code: 'STRING'},
            str: {code: 'STRING'},
          },
        },
        {
          sql: OBJ_STATEMENTS[1].sql,
          params: {
            fields: {
              key: {stringValue: OBJ_STATEMENTS[1].params.key},
              str: {stringValue: OBJ_STATEMENTS[1].params.str},
            },
          },
          paramTypes: {
            key: {code: 'STRING'},
            str: {code: 'STRING'},
          },
        },
      ];

      it('should accept gaxOptions', done => {
        const gaxOptions = {};
        transaction.request = config => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.batchUpdate(STRING_STATEMENTS, gaxOptions, assert.ifError);
      });

      it('should set transactionTag', done => {
        const transactionTag = 'bar';
        transaction.requestOptions = {transactionTag};
        transaction.request = config => {
          assert.deepStrictEqual(config.reqOpts.requestOptions, {
            transactionTag,
          });
          done();
        };
        transaction.batchUpdate(STRING_STATEMENTS, assert.ifError);
      });

      it('should set requestTag', done => {
        const requestTag = 'foo';
        const options: BatchUpdateOptions = {requestOptions: {requestTag}};
        transaction.request = config => {
          assert.deepStrictEqual(config.reqOpts.requestOptions, {
            requestTag,
          });
          done();
        };
        transaction.batchUpdate(STRING_STATEMENTS, options, assert.ifError);
      });

      it('should set both tags and accept gaxOptions', done => {
        const transactionTag = 'bar';
        transaction.requestOptions = {transactionTag};

        const requestTag = 'foo';
        const gaxOptions = {timeout: 1000};
        const options: BatchUpdateOptions = {
          requestOptions: {requestTag},
          gaxOptions,
        };
        transaction.request = config => {
          assert.deepStrictEqual(config.reqOpts.requestOptions, {
            transactionTag,
            requestTag,
          });
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.batchUpdate(STRING_STATEMENTS, options, assert.ifError);
      });

      it('should return an error if statements are missing', done => {
        transaction.batchUpdate(null, err => {
          assert.strictEqual(
            err.message,
            'batchUpdate requires at least 1 DML statement.',
          );
          assert.strictEqual(err.code, 3);
          assert.deepStrictEqual(err.rowCounts, []);
          done();
        });
      });

      it('should return an error if statements are empty', done => {
        transaction.batchUpdate([], err => {
          assert.strictEqual(
            err.message,
            'batchUpdate requires at least 1 DML statement.',
          );
          assert.strictEqual(err.code, 3);
          assert.deepStrictEqual(err.rowCounts, []);
          done();
        });
      });

      it('should make the correct request', () => {
        const stub = sandbox.stub(transaction, 'request');
        const fakeId = 'transaction-id-123';

        transaction.id = fakeId;
        transaction.batchUpdate(STRING_STATEMENTS, assert.ifError);

        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'executeBatchDml');
        assert.strictEqual(reqOpts.session, SESSION_NAME);
        assert.deepStrictEqual(reqOpts.transaction, {id: fakeId});
        assert.strictEqual(reqOpts.seqno, 1);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {
              [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
              [LEADER_AWARE_ROUTING_HEADER]: 'true',
            },
            transaction.commonHeaders_,
          ),
        );
      });

      it('should encode sql string statements', () => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedStatements = STRING_STATEMENTS.map(sql => ({sql}));

        transaction.batchUpdate(STRING_STATEMENTS, assert.ifError);

        const {reqOpts} = stub.lastCall.args[0];
        assert.deepStrictEqual(reqOpts.statements, expectedStatements);
      });

      it('should encode DML object statements', () => {
        const stub = sandbox.stub(transaction, 'request');
        transaction.batchUpdate(OBJ_STATEMENTS, assert.ifError);

        const {reqOpts} = stub.lastCall.args[0];
        assert.deepStrictEqual(reqOpts.statements, FORMATTED_STATEMENTS);
      });

      it('should wrap and return any request errors', done => {
        const stub = sandbox.stub(transaction, 'request');
        const fakeError = new Error('err');
        const fakeResponse = {};

        transaction.batchUpdate(
          OBJ_STATEMENTS,
          (err, rowCounts, apiResponse) => {
            assert.strictEqual(err, fakeError);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.deepStrictEqual((err as any).rowCounts, []);
            assert.deepStrictEqual(rowCounts, []);
            assert.strictEqual(apiResponse, fakeResponse);
            done();
          },
        );

        const requestCallback = stub.lastCall.args[1];
        setImmediate(requestCallback, fakeError, fakeResponse);
      });

      it('should return a list of row counts upon success', done => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedRowCounts = [5, 7];
        const fakeResponse = {
          resultSets: [
            {stats: {rowCount: 'a', a: '5'}},
            {stats: {rowCount: 'b', b: '7'}},
          ],
        };

        transaction.batchUpdate(
          OBJ_STATEMENTS,
          (err, rowCounts, apiResponse) => {
            assert.ifError(err);
            assert.deepStrictEqual(rowCounts, expectedRowCounts);
            assert.strictEqual(apiResponse, fakeResponse);
            done();
          },
        );

        const requestCallback = stub.lastCall.args[1];
        setImmediate(requestCallback, null, fakeResponse);
      });

      it('should return list of 0s for row counts when stats or rowCount value is empty', done => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedRowCounts = [0, 0];
        const fakeResponse = {
          resultSets: [{stats: {rowCount: 'a'}}, {stats: undefined}],
        };

        transaction.batchUpdate(
          OBJ_STATEMENTS,
          (err, rowCounts, apiResponse) => {
            assert.ifError(err);
            assert.deepStrictEqual(rowCounts, expectedRowCounts);
            assert.strictEqual(apiResponse, fakeResponse);
            done();
          },
        );

        const requestCallback = stub.lastCall.args[1];
        setImmediate(requestCallback, null, fakeResponse);
      });

      it('should return both error and row counts for partial failures', done => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedRowCounts = [6, 8];
        const fakeResponse = {
          resultSets: [
            {stats: {rowCount: 'a', a: '6'}},
            {stats: {rowCount: 'b', b: '8'}},
          ],
          status: {code: 3, message: 'Err'},
        };

        transaction.batchUpdate(
          OBJ_STATEMENTS,
          (err, rowCounts, apiResponse) => {
            assert(err instanceof Error);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((err as any).code, fakeResponse.status.code);
            assert.strictEqual(err.message, fakeResponse.status.message);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.deepStrictEqual((err as any).rowCounts, expectedRowCounts);
            assert.deepStrictEqual(rowCounts, expectedRowCounts);
            assert.deepStrictEqual(apiResponse, fakeResponse);
            done();
          },
        );

        const requestCallback = stub.lastCall.args[1];
        setImmediate(requestCallback, null, fakeResponse);
      });

      it('should return precommitToken in the api response', done => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedRowCounts = [5, 7];
        const fakeResponse = {
          resultSets: [
            {stats: {rowCount: 'a', a: '5'}},
            {stats: {rowCount: 'b', b: '7'}},
          ],
          precommitToken: {
            precommitToken: Buffer.from('precommit-token-batch-update'),
            seqNum: 1,
          },
        };

        transaction.batchUpdate(
          OBJ_STATEMENTS,
          (err, rowCounts, apiResponse) => {
            assert.ifError(err);
            assert.deepStrictEqual(rowCounts, expectedRowCounts);
            assert.strictEqual(apiResponse, fakeResponse);
            done();
          },
        );

        const requestCallback = stub.lastCall.args[1];
        setImmediate(requestCallback, null, fakeResponse);
      });
    });

    describe('begin', () => {
      it('should send the correct options', () => {
        const stub = sandbox.stub(transaction, 'request');

        transaction.begin();

        const expectedOptions = {isolationLevel: 0, readWrite: {}};
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should accept gaxOptions', done => {
        const gaxOptions = {};
        transaction.request = config => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.begin(gaxOptions, assert.ifError);
      });

      it('should set transaction tag', done => {
        const transactionTag = 'bar';
        transaction.requestOptions = {transactionTag};
        transaction.request = config => {
          assert.deepStrictEqual(config.reqOpts.requestOptions, {
            transactionTag,
          });
          done();
        };
        transaction.begin(assert.ifError);
      });

      it('should set optimistic lock using setReadWriteTransactionOptions', () => {
        const rw = {
          readLockMode: ReadLockMode.OPTIMISTIC,
        };
        transaction = new Transaction(SESSION);
        transaction.setReadWriteTransactionOptions({
          readLockMode: ReadLockMode.OPTIMISTIC,
        });
        const stub = sandbox.stub(transaction, 'request');
        transaction.begin();

        const expectedOptions = {isolationLevel: 0, readWrite: rw};
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should set repeatable read using setReadWriteTransactionOptions', () => {
        const rw = {
          readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
        };
        transaction = new Transaction(SESSION);
        transaction.setReadWriteTransactionOptions({
          isolationLevel: IsolationLevel.REPEATABLE_READ,
        });
        const stub = sandbox.stub(transaction, 'request');
        transaction.begin();

        const expectedOptions = {isolationLevel: 2, readWrite: rw};
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should set repeatable read isolation and pessimistic lock using setReadWriteTransactionOptions', () => {
        const rw = {
          readLockMode: ReadLockMode.PESSIMISTIC,
        };
        transaction = new Transaction(SESSION);
        transaction.setReadWriteTransactionOptions({
          isolationLevel: IsolationLevel.REPEATABLE_READ,
          readLockMode: ReadLockMode.PESSIMISTIC,
        });
        const stub = sandbox.stub(transaction, 'request');
        transaction.begin();

        const expectedOptions = {isolationLevel: 2, readWrite: rw};
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should pass multiplexedSessionPreviousTransactionId in the BeginTransactionRequest upon retrying an aborted transaction', () => {
        const fakePreviousTransactionId = 'fake-previous-transaction-id';
        const database = {
          formattedName_: 'formatted-database-name',
          isMuxEnabledForRW_: true,
          parent: INSTANCE,
        };
        const SESSION = {
          parent: database,
          formattedName_: SESSION_NAME,
          request: REQUEST,
          requestStream: REQUEST_STREAM,
        };
        // multiplexed session
        const multiplexedSession = Object.assign({multiplexed: true}, SESSION);
        const transaction = new Transaction(multiplexedSession);
        // transaction option must contain the previous transaction id for multiplexed session
        transaction.multiplexedSessionPreviousTransactionId =
          fakePreviousTransactionId;
        const stub = sandbox.stub(transaction, 'request');
        transaction.begin();

        const expectedOptions = {
          isolationLevel: 0,
          readWrite: {
            multiplexedSessionPreviousTransactionId: fakePreviousTransactionId,
          },
        };
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        // request options should contain the multiplexedSessionPreviousTransactionId
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should send the correct options if _mutationKey is set in the transaction object', () => {
        // session with multiplexed enabled
        const multiplexedSession = Object.assign({multiplexed: true}, SESSION);

        // fake mutation key
        const fakeMutationKey = {
          insertOrUpdate: {
            table: 'my-table-123',
            columns: ['Id', 'Name'],
            values: [
              {
                values: [{stringValue: 'Id3'}, {stringValue: 'Name3'}],
              },
            ],
          },
        } as google.spanner.v1.Mutation;

        const transaction = new Transaction(multiplexedSession);

        // stub the transaction request
        const stub = sandbox.stub(transaction, 'request');

        // set the _mutationKey in the transaction object
        transaction._mutationKey = fakeMutationKey;

        // make a call to begin
        transaction.begin();

        const expectedOptions = {isolationLevel: 0, readWrite: {}};
        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        // assert on the begin transaction call
        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'beginTransaction');
        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        // assert that if the _mutationKey is set in the transaction object
        // it is getting pass in the request as well along with request options
        assert.deepStrictEqual(reqOpts.mutationKey, fakeMutationKey);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });
    });

    describe('commit', () => {
      const DEADLINE_EXCEEDED_STATUS_CODE = 4;

      it('should make the correct request', () => {
        const stub = sandbox.stub(transaction, 'request');

        transaction.commit();

        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'commit');
        assert.strictEqual(reqOpts.session, SESSION_NAME);
        assert.deepStrictEqual(reqOpts.mutations, []);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {
              [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
              [LEADER_AWARE_ROUTING_HEADER]: true,
            },
            transaction.commonHeaders_,
          ),
        );
      });

      it('should accept gaxOptions as CallOptions', done => {
        const gaxOptions = {
          retry: {
            retryCodes: [DEADLINE_EXCEEDED_STATUS_CODE],
          },
        };
        transaction.request = config => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.commit(gaxOptions, assert.ifError);
      });

      it('should accept commit options', done => {
        const maxCommitDelay = new google.protobuf.Duration({
          seconds: 0, // 0 seconds
          nanos: 100000000, // 100,000,000 nanoseconds = 100 milliseconds
        });
        const options = {
          returnCommitStats: true,
          maxCommitDelay: maxCommitDelay,
        };
        transaction.request = config => {
          assert.strictEqual(config.reqOpts.returnCommitStats, true);
          done();
        };
        transaction.commit(options, assert.ifError);
      });

      it('should accept commit and gaxOptions', done => {
        const gaxOptions = {
          retry: {
            retryCodes: [DEADLINE_EXCEEDED_STATUS_CODE],
          },
        };
        const options = {
          returnCommitStats: true,
          gaxOptions,
        };
        transaction.request = config => {
          assert.strictEqual(config.reqOpts.returnCommitStats, true);
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.commit(options, assert.ifError);
      });

      it('should accept gaxOptions in CommitOptions', done => {
        const options = {gaxOptions: {}};
        transaction.request = config => {
          assert.strictEqual(config.gaxOpts, options.gaxOptions);
          done();
        };
        transaction.commit(options, assert.ifError);
      });

      it('should accept requestOptions', done => {
        const options = {
          requestOptions: {priority: RequestOptions.Priority.PRIORITY_MEDIUM},
        };
        transaction.request = config => {
          assert.strictEqual(
            config.reqOpts.requestOptions,
            options.requestOptions,
          );
          done();
        };
        transaction.commit(options, assert.ifError);
      });

      it('should accept precommitToken', done => {
        const precommitToken = {
          precommitToken: Buffer.from('precommit-token-commit'),
          seqNum: 1,
        };
        transaction._latestPreCommitToken = precommitToken;
        transaction.request = config => {
          assert.strictEqual(config.reqOpts.precommitToken, precommitToken);
          done();
        };
        transaction.commit(assert.ifError);
      });

      it('should use the transaction `id` when set', () => {
        const id = 'transaction-id-123';
        const stub = sandbox.stub(transaction, 'request');

        transaction.id = id;
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];

        assert.strictEqual(reqOpts.transactionId, id);
      });

      it('should set transactionTag when not single use transaction', done => {
        const id = 'transaction-id-123';
        const transactionTag = 'bar';
        transaction.id = id;
        transaction.requestOptions = {transactionTag};

        transaction.request = config => {
          assert.strictEqual(
            config.reqOpts.requestOptions.transactionTag,
            transactionTag,
          );
          done();
        };
        transaction.commit(assert.ifError);
      });

      it('should set `singleUseTransaction` when `id` is not set', () => {
        const expectedOptions = {isolationLevel: 0, readWrite: {}};
        const stub = sandbox.stub(transaction, 'request');

        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.singleUseTransaction, expectedOptions);
      });

      it('should call _setMutationKey when neither `id` is set nor `singleUseTransaction` is used', async () => {
        // fake mutation key
        const fakeMutations = [
          {
            insertOrUpdate: {
              table: 'my-table-123',
              columns: ['Id', 'Name'],
              values: [
                {
                  values: [{stringValue: 'Id1'}, {stringValue: 'Name1'}],
                },
              ],
            },
          } as google.spanner.v1.Mutation,
        ];

        // fake transaction id
        const fakeTransactionId = 'fake-tx-id-12345';

        const database = {
          formattedName_: 'formatted-database-name',
          isMuxEnabledForRW_: true,
          parent: INSTANCE,
        };
        const SESSION = {
          parent: database,
          formattedName_: SESSION_NAME,
          request: REQUEST,
          requestStream: REQUEST_STREAM,
        };
        // multiplexed session
        const multiplexedSession = Object.assign({multiplexed: true}, SESSION);

        // transaction object
        const transaction = new Transaction(multiplexedSession);

        // ensure transaction is not single use transaction
        transaction._useInRunner = true;

        // ensure transaction ID is not set
        transaction.id = undefined;

        // set the _queuedMutations with the fakeMutations list
        transaction._queuedMutations = fakeMutations;

        // spy on _setMutationKey
        const setMutationKeySpy = sandbox.spy(transaction, '_setMutationKey');

        // stub the begin method
        const beginStub = sandbox.stub(transaction, 'begin').callsFake(() => {
          transaction.id = fakeTransactionId;
          return Promise.resolve();
        });

        // stub transaction request
        sandbox.stub(transaction, 'request');

        // make a call to commit
        transaction.commit();

        // ensure that _setMutationKey was got called once
        sinon.assert.calledOnce(setMutationKeySpy);

        // ensure that _setMutationKey got called with correct arguments
        sinon.assert.calledWith(setMutationKeySpy, fakeMutations);

        // ensure begin was called
        sinon.assert.calledOnce(beginStub);

        // ensure begin set the transaction id
        assert.strictEqual(transaction.id, fakeTransactionId);

        // ensure _mutationKey is set
        assert.strictEqual(transaction._mutationKey, fakeMutations[0]);
      });

      it('should call `end` once complete', () => {
        const endStub = sandbox.stub(transaction, 'end');
        const requestStub = sandbox.stub(transaction, 'request');

        transaction.commit(() => {});

        const requestCallback = requestStub.lastCall.args[1];
        requestCallback();

        assert.strictEqual(endStub.callCount, 1);
      });

      it('should set the `commitTimestamp` if in response', () => {
        const requestStub = sandbox.stub(transaction, 'request');

        const expectedTimestamp = new PreciseDate(0);
        const fakeTimestamp = {seconds: 0, nanos: 0};

        transaction.commit(() => {});

        const requestCallback = requestStub.lastCall.args[1];
        requestCallback(null, {commitTimestamp: fakeTimestamp});

        assert.deepStrictEqual(transaction.commitTimestamp, expectedTimestamp);
        assert.strictEqual(transaction.commitTimestampProto, fakeTimestamp);
      });

      it('should retry commit only once upon sending precommitToken to read-only participants', () => {
        const requestStub = sandbox.stub(transaction, 'request');

        const expectedTimestamp = new PreciseDate(0);
        const fakeTimestamp = {seconds: 0, nanos: 0};

        const fakeResponse = {commitTimestamp: fakeTimestamp};
        const fakePrecommitToken = {
          precommitToken: Buffer.from('precommit-token-commit'),
          seqNum: 1,
        };

        transaction._latestPreCommitToken = fakePrecommitToken;

        // retry response on commit retry
        const fakeCommitRetryResponse = {
          commitTimestamp: null,
          MultiplexedSessionRetry: 'precommitToken',
          precommitToken: {
            precommitToken: Buffer.from('precommit-token-commit-retry'),
            seqNum: 2,
          },
        };

        requestStub.onFirstCall().callsFake((_, callback) => {
          // assert that the transaction contains the precommit token
          assert.deepStrictEqual(
            transaction._latestPreCommitToken,
            fakePrecommitToken,
          );
          // retry commit response
          callback(null, fakeCommitRetryResponse);
        });

        requestStub.onSecondCall().callsFake((_, callback) => {
          // assert that before second commit retry the _latestPreCommitToken
          // containing the commit retry reponse in the transaction object
          assert.deepStrictEqual(
            transaction._latestPreCommitToken,
            fakeCommitRetryResponse.precommitToken,
          );
          callback(null, fakeResponse);
        });

        transaction.commit((err, resp) => {
          // assert there is no error
          assert.ifError(err);
          // make sure that retry happens only once
          assert.strictEqual(requestStub.callCount, 2);
          assert.deepStrictEqual(
            transaction.commitTimestamp,
            expectedTimestamp,
          );
          assert.strictEqual(transaction.commitTimestampProto, fakeTimestamp);
          // assert on the successfull commit response
          assert.deepStrictEqual(resp, fakeResponse);
        });
      });

      it('should return any errors and the response', () => {
        const requestStub = sandbox.stub(transaction, 'request');

        const fakeError = new Error('err');
        const fakeResponse = {};
        const callback = sandbox.stub().withArgs(fakeError, fakeResponse);

        transaction.commit(callback);

        const requestCallback = requestStub.lastCall.args[1];
        requestCallback(fakeError, fakeResponse);

        assert.strictEqual(callback.callCount, 1);
      });

      it('should not decorate non-gRPC error', () => {
        const fakeError = new Error('err');
        const decoratedError = Transaction.decorateCommitError(fakeError, []);
        assert.strictEqual(decoratedError, fakeError);
      });

      it('should not decorate generic gRPC error', () => {
        const tableNotFoundErr = Object.assign(
          new Error('Table TestTable not found'),
          {
            code: grpc.status.NOT_FOUND,
          },
        );
        const decoratedError = Transaction.decorateCommitError(
          tableNotFoundErr,
          [],
        );
        assert.strictEqual(decoratedError, tableNotFoundErr);
      });

      it('should not decorate FAILED_PRECONDITION error without specific JSON error', () => {
        const failedPreconditionErr = Object.assign(
          new Error('Invalid value for column TestColumn'),
          {
            code: grpc.status.FAILED_PRECONDITION,
          },
        );
        const decoratedError = Transaction.decorateCommitError(
          failedPreconditionErr,
          [],
        );
        assert.strictEqual(decoratedError, failedPreconditionErr);
      });

      it('should not decorate FAILED_PRECONDITION error with specific JSON error if mutations are empty', () => {
        const failedPreconditionErr = Object.assign(
          new Error(
            'Invalid value for column TestCol2 in table TestTable: Expected JSON.',
          ),
          {
            code: grpc.status.FAILED_PRECONDITION,
          },
        );
        const decoratedError = Transaction.decorateCommitError(
          failedPreconditionErr,
          [],
        );
        assert.strictEqual(decoratedError, failedPreconditionErr);
      });

      it('should not decorate FAILED_PRECONDITION error with specific JSON error if mutations do not contain a JSON array value', () => {
        transaction._mutate('insert', 'TestTable', {
          TestCol1: 1,
          TestCol2: 'value',
        });
        const mutations = transaction._queuedMutations;

        const failedPreconditionErr = Object.assign(
          new Error(
            'Invalid value for column TestCol2 in table TestTable: Expected JSON.',
          ),
          {
            code: grpc.status.FAILED_PRECONDITION,
          },
        );
        const decoratedError = Transaction.decorateCommitError(
          failedPreconditionErr,
          mutations,
        );
        assert.strictEqual(decoratedError, failedPreconditionErr);
      });

      it('should decorate FAILED_PRECONDITION error with specific JSON error if mutations contain a JSON array value', () => {
        transaction._mutate('insert', 'TestTable', {
          TestCol1: 1,
          TestCol2: [{key1: 'value'}],
        });
        const mutations = transaction._queuedMutations;

        const failedPreconditionErr = Object.assign(
          new Error(
            'Invalid value for column TestCol2 in table TestTable: Expected JSON.',
          ),
          {
            code: grpc.status.FAILED_PRECONDITION,
          },
        );
        const decoratedError = Transaction.decorateCommitError(
          failedPreconditionErr,
          mutations,
        );
        assert.notStrictEqual(decoratedError, failedPreconditionErr);
        assert.ok(
          decoratedError.message.includes(
            'The value is an array. Convert the value to a JSON string containing an array instead in order to insert it into a JSON column. Example: `[{"key": "value 1"}, {"key": "value 2"}]` instead of [{key: "value 1"}, {key: "value 2"}]',
          ),
        );
      });
    });

    describe('deleteRows', () => {
      it('should queue a "delete" mutation', () => {
        const fakeTable = 'my-table-123';
        const fakeKeys = ['a', 'b'];

        const expectedKeySet = {
          keys: fakeKeys.map(key => {
            return {
              values: [{stringValue: key}],
            };
          }),
        };

        const stub = sandbox.stub(transaction, 'request');

        transaction.deleteRows(fakeTable, fakeKeys);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {table, keySet} = reqOpts.mutations[0].delete;

        assert.strictEqual(table, fakeTable);
        assert.deepStrictEqual(keySet, expectedKeySet);
      });
    });

    describe('insert', () => {
      it('should queue an "insert" mutation', () => {
        const fakeTable = 'my-table-123';
        const fakeKeyVals = {
          name: 'Joe West',
          id: 'Id3b',
        };

        const expectedColumns = Object.keys(fakeKeyVals).sort();
        const expectedValues = [
          {
            values: expectedColumns.map(column => {
              return {stringValue: fakeKeyVals[column]};
            }),
          },
        ];

        const stub = sandbox.stub(transaction, 'request');

        transaction.insert(fakeTable, fakeKeyVals);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {table, columns, values} = reqOpts.mutations[0].insert;

        assert.strictEqual(table, fakeTable);
        assert.deepStrictEqual(columns, expectedColumns);
        assert.deepStrictEqual(values, expectedValues);
      });
    });

    describe('replace', () => {
      it('should queue a "replace" mutation', () => {
        const fakeTable = 'my-table-123';
        const fakeKeyVals = {
          name: 'Joe West',
          id: 'Id3b',
        };

        const expectedColumns = Object.keys(fakeKeyVals).sort();
        const expectedValues = [
          {
            values: expectedColumns.map(column => {
              return {stringValue: fakeKeyVals[column]};
            }),
          },
        ];

        const stub = sandbox.stub(transaction, 'request');

        transaction.replace(fakeTable, fakeKeyVals);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {table, columns, values} = reqOpts.mutations[0].replace;

        assert.strictEqual(table, fakeTable);
        assert.deepStrictEqual(columns, expectedColumns);
        assert.deepStrictEqual(values, expectedValues);
      });
    });

    describe('rollback', () => {
      const ID = 'transaction-id-123';

      beforeEach(() => {
        transaction.id = ID;
      });

      it('should not return an error if the `id` is not set', done => {
        delete transaction.id;
        transaction.rollback(err => {
          assert.deepStrictEqual(err, null);
          done();
        });
      });

      it('should make the correct request', () => {
        const stub = sandbox.stub(transaction, 'request');
        const expectedReqOpts = {
          session: SESSION_NAME,
          transactionId: ID,
        };

        transaction.rollback();

        const {client, method, reqOpts, headers} = stub.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'rollback');
        assert.deepStrictEqual(reqOpts, expectedReqOpts);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            transaction.commonHeaders_,
          ),
        );
      });

      it('should accept gaxOptions', done => {
        const gaxOptions = {};
        transaction.request = config => {
          assert.strictEqual(config.gaxOpts, gaxOptions);
          done();
        };
        transaction.rollback(gaxOptions, assert.ifError);
      });

      it('should call through to `end`', () => {
        const endStub = sandbox.stub(transaction, 'end');
        const requestStub = sandbox.stub(transaction, 'request');

        transaction.rollback(() => {});

        const requestCallback = requestStub.lastCall.args[1];
        requestCallback(null);

        assert.strictEqual(endStub.callCount, 1);
      });

      it('should return any request errors', () => {
        const fakeError = new Error('err');
        const callback = sandbox.stub().withArgs(fakeError);
        const requestStub = sandbox.stub(transaction, 'request');

        transaction.rollback(callback);

        const requestCallback = requestStub.lastCall.args[1];
        requestCallback(fakeError);

        assert.strictEqual(callback.callCount, 1);
      });
    });

    describe('update', () => {
      it('should queue an "update" mutation', () => {
        const fakeTable = 'my-table-123';
        const fakeKeyVals = {
          name: 'Joe West',
          id: 'Id3b',
        };

        const expectedColumns = Object.keys(fakeKeyVals).sort();
        const expectedValues = [
          {
            values: expectedColumns.map(column => {
              return {stringValue: fakeKeyVals[column]};
            }),
          },
        ];

        const stub = sandbox.stub(transaction, 'request');

        transaction.update(fakeTable, fakeKeyVals);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {table, columns, values} = reqOpts.mutations[0].update;

        assert.strictEqual(table, fakeTable);
        assert.deepStrictEqual(columns, expectedColumns);
        assert.deepStrictEqual(values, expectedValues);
      });
    });

    describe('upsert', () => {
      it('should queue an "insertOrUpdate" mutation', () => {
        const fakeTable = 'my-table-123';
        const fakeKeyVals = {
          name: 'Joe West',
          id: 'Id3b',
        };

        const expectedColumns = Object.keys(fakeKeyVals).sort();
        const expectedValues = [
          {
            values: expectedColumns.map(column => {
              return {stringValue: fakeKeyVals[column]};
            }),
          },
        ];

        const stub = sandbox.stub(transaction, 'request');

        transaction.upsert(fakeTable, fakeKeyVals);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {table, columns, values} = reqOpts.mutations[0].insertOrUpdate;

        assert.strictEqual(table, fakeTable);
        assert.deepStrictEqual(columns, expectedColumns);
        assert.deepStrictEqual(values, expectedValues);
      });
    });

    describe('mutations', () => {
      it('should accept an array of rows', () => {
        const stub = sandbox.stub(transaction, 'request');

        const fakeTable = 'my-table-123';
        const rows = [
          {name: 'dave', id: '1'},
          {name: 'stephen', id: '2'},
        ];

        const expectedColumns = Object.keys(rows[0]).sort();
        const expectedValues = rows.map(row => {
          return {
            values: expectedColumns.map(column => {
              return {stringValue: row[column]};
            }),
          };
        });

        transaction.insert(fakeTable, rows);
        transaction.commit();

        const {reqOpts} = stub.lastCall.args[0];
        const {columns, values} = reqOpts.mutations[0].insert;

        assert.deepStrictEqual(columns, expectedColumns);
        assert.deepStrictEqual(values, expectedValues);
      });

      it('should throw an error if missing columns', () => {
        const table = 'my-table-123';
        const rows = [{name: 'dave', id: '1'}, {name: 'stephen'}];

        const errorRegExp =
          /Row at index 1 does not contain the correct number of columns\.\n\nMissing columns: \["id"\]/;

        assert.throws(() => transaction.insert(table, rows), errorRegExp);
      });
    });

    describe('_setMutationKey', () => {
      let transaction;
      before(() => {
        transaction = new Transaction(SESSION);
      });

      it('should have _mutationKey set to null, if mutations list is empty', () => {
        // empty mutations list
        const mutations: google.spanner.v1.Mutation[] = [];
        // make a call to _setMutationKey
        transaction._setMutationKey(mutations);
        // ensure that the transaction's _mutationKey is null
        assert.strictEqual(transaction._mutationKey, null);
      });

      it('should select a high-priority mutation when both types are present', () => {
        // expected mutation objects
        const insertMutation = {
          insert: {
            table: 'my-table-123',
            columns: ['Id', 'Name'],
            values: [
              {
                values: [
                  {
                    stringValue: 'Id1',
                  },
                  {
                    stringValue: 'Name1',
                  },
                ],
              },
            ],
          },
        } as google.spanner.v1.Mutation;

        const updateMutation = {
          update: {
            table: 'my-table-123',
            columns: ['Id', 'Name'],
            values: [
              {
                values: [
                  {
                    stringValue: 'Id2',
                  },
                  {
                    stringValue: 'Name2',
                  },
                ],
              },
            ],
          },
        } as google.spanner.v1.Mutation;

        const deleteMutation = {
          delete: {
            table: 'my-table-123',
            keySet: {
              keys: [
                {
                  values: [
                    {
                      stringValue: 'Id1',
                    },
                  ],
                },
              ],
            },
          },
        } as google.spanner.v1.Mutation;

        const mutations = [insertMutation, updateMutation, deleteMutation];

        transaction._setMutationKey(mutations);

        // assert that _mutationKeys is not null
        assert.notEqual(transaction._mutationKey, null);

        // get the selected mutation key
        const selectedKey = Object.keys(transaction._mutationKey!)[0];

        // assert that chosen key is not insert
        assert.notStrictEqual(
          selectedKey,
          'insert',
          'The selected mutation should not be an insert',
        );

        // assert that chosen key is either insertOrUpdate or delete
        assert.ok(
          ['update', 'delete'].includes(selectedKey),
          'The selected mutation should be a high-priority type',
        );
      });

      it('should select a mutation with maximum number of rows when only insert keys are present', () => {
        // insert mutation objects
        const insertMutation1 = {
          insert: {
            table: 'my-table-123',
            columns: ['Id', 'Name'],
            values: [
              // Row 1
              {
                values: [{stringValue: 'Id1'}, {stringValue: 'Name1'}],
              },
              // Row 2
              {
                values: [{stringValue: 'Id2'}, {stringValue: 'Name2'}],
              },
              // Row 3
              {
                values: [{stringValue: 'Id3'}, {stringValue: 'Name3'}],
              },
            ],
          },
        } as google.spanner.v1.Mutation;

        const insertMutation2 = {
          insert: {
            table: 'my-table-123',
            columns: ['Id', 'Name'],
            values: [
              // Row 1
              {
                values: [{stringValue: 'Id1'}, {stringValue: 'Name1'}],
              },
              // Row 2
              {
                values: [{stringValue: 'Id2'}, {stringValue: 'Name2'}],
              },
              // Row 3
              {
                values: [{stringValue: 'Id3'}, {stringValue: 'Name3'}],
              },
              // Row 4
              {
                values: [{stringValue: 'Id4'}, {stringValue: 'Name4'}],
              },
            ],
          },
        } as google.spanner.v1.Mutation;

        const mutations = [insertMutation1, insertMutation2];

        transaction._setMutationKey(mutations);

        // assert that _mutationKeys is not null
        assert.notEqual(transaction._mutationKey, null);

        // get the selected mutation key
        const selectedKey = Object.keys(transaction._mutationKey!)[0];

        // assert that chosen key is insert
        assert.strictEqual(
          selectedKey,
          'insert',
          'The selected mutation should be an insert',
        );
        // assert that key with maximum of rows is selected
        assert.strictEqual(
          transaction._mutationKey,
          insertMutation2,
          'The mutation with the most rows should have been selected',
        );
      });
    });

    describe('getUniqueKeys', () => {
      it('should create a list of unique keys', () => {
        const rows = [
          {name: 'dave', id: '1'},
          {name: 'stephen', age: 102},
          {big: 'monies', no: 'whammies', id: '2'},
        ];

        const expectedKeys = ['age', 'big', 'id', 'name', 'no'];
        const keys = Transaction.getUniqueKeys(rows);

        assert.deepStrictEqual(keys, expectedKeys);
      });
    });

    describe('runStream', () => {
      before(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('should send the correct options', done => {
        const QUERY: ExecuteSqlRequest = {
          sql: 'SELET * FROM `MyTable`',
        };

        transaction.requestStream = config => {
          assert.strictEqual(config.client, 'SpannerClient');
          assert.strictEqual(config.method, 'executeStreamingSql');
          assert.deepStrictEqual(
            config.headers,
            Object.assign(
              {
                [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
                [LEADER_AWARE_ROUTING_HEADER]: true,
              },
              transaction.commonHeaders_,
            ),
          );
          done();
        };

        transaction.runStream(QUERY);
      });

      it('should set transaction tag when not `singleUse`', done => {
        const QUERY: ExecuteSqlRequest = {
          sql: 'SELET * FROM `MyTable`',
        };

        const transactionTag = 'bar';
        transaction.requestOptions = {transactionTag};

        const id = 'transaction-id-123';
        transaction.id = id;

        transaction.requestStream = config => {
          assert.deepStrictEqual(config.reqOpts.requestOptions, {
            transactionTag,
          });
          done();
        };

        transaction.runStream(QUERY);
      });

      it('should return a precommitToken in response', done => {
        const QUERY: ExecuteSqlRequest = {
          sql: 'SELET * FROM `MyTable`',
        };
        const fakeStream = new EventEmitter();
        const fakePrecommitToken = {
          precommitToken: Buffer.from('precommit-token-runStream'),
          seqNum: 1,
        };

        PARTIAL_RESULT_STREAM.returns(fakeStream);

        const stream = transaction.runStream(QUERY);
        assert.strictEqual(stream, fakeStream);

        stream.on('response', resp => {
          assert.deepStrictEqual(resp.precommitToken, fakePrecommitToken);
          done();
        });

        fakeStream.emit('response', {
          precommitToken: fakePrecommitToken,
        });
      });
    });

    describe('createReadStream', () => {
      before(() => {
        PARTIAL_RESULT_STREAM.callsFake(makeRequest => makeRequest());
      });

      it('should send the correct options', () => {
        const TABLE = 'my-table-123';
        transaction.createReadStream(TABLE);

        const {client, method, headers} = REQUEST_STREAM.lastCall.args[0];

        assert.strictEqual(client, 'SpannerClient');
        assert.strictEqual(method, 'streamingRead');
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {
              [X_GOOG_SPANNER_REQUEST_ID_HEADER]: craftRequestId(1, 1, 1, 1),
              [LEADER_AWARE_ROUTING_HEADER]: true,
            },
            transaction.commonHeaders_,
          ),
        );
      });

      it('should set transaction tag if not `singleUse`', () => {
        const TABLE = 'my-table-123';
        const transactionTag = 'bar';
        transaction.id = 'transaction-id-123';
        transaction.requestOptions = {transactionTag};

        transaction.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.requestOptions, {
          transactionTag,
        });
      });

      it('should set transaction tag if `begin`', () => {
        const TABLE = 'my-table-123';
        const transactionTag = 'bar';
        transaction.requestOptions = {transactionTag};

        transaction.createReadStream(TABLE);

        const {reqOpts} = REQUEST_STREAM.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.requestOptions, {
          transactionTag,
        });
      });

      it('should return a precommitToken in response', done => {
        const TABLE = 'my-table-123';
        const fakeStream = new EventEmitter();
        const fakePrecommitToken = {
          precommitToken: Buffer.from('precommit-token-createReadStream'),
          seqNum: 1,
        };

        PARTIAL_RESULT_STREAM.returns(fakeStream);

        const stream = transaction.createReadStream(TABLE);
        assert.strictEqual(stream, fakeStream);

        stream.on('response', resp => {
          assert.deepStrictEqual(resp.precommitToken, fakePrecommitToken);
          done();
        });

        fakeStream.emit('response', {
          precommitToken: fakePrecommitToken,
        });
      });

      it('should override the precommitToken with the value that has higher seqNum received in response', done => {
        const TABLE = 'my-table-123';
        const fakeStream = new EventEmitter();
        const fakePrecommitToken1 = {
          precommitToken: Buffer.from('precommit-token1-createReadStream'),
          seqNum: 1,
        };

        const fakePrecommitToken2 = {
          precommitToken: Buffer.from('precommit-token2-createReadStream'),
          seqNum: 2,
        };

        const fakePrecommitToken3 = {
          precommitToken: Buffer.from('precommit-token3-createReadStream'),
          seqNum: 0,
        };

        PARTIAL_RESULT_STREAM.returns(fakeStream);

        const stream = transaction.createReadStream(TABLE);
        assert.strictEqual(stream, fakeStream);

        assert.strictEqual(transaction._latestPreCommitToken, null);

        let responseCount = 0;

        stream.on('response', resp => {
          responseCount++;
          if (responseCount === 1) {
            assert.deepStrictEqual(resp.precommitToken, fakePrecommitToken1);
            assert.deepStrictEqual(
              transaction._latestPreCommitToken,
              fakePrecommitToken1,
            );
          } else if (responseCount === 2) {
            assert.deepStrictEqual(resp.precommitToken, fakePrecommitToken2);
            assert.deepStrictEqual(
              transaction._latestPreCommitToken,
              fakePrecommitToken2,
            );
          } else if (responseCount === 3) {
            // fakePrecommitToken3 should get ignored
            assert.deepStrictEqual(resp.precommitToken, fakePrecommitToken3);
            assert.deepStrictEqual(
              transaction._latestPreCommitToken,
              fakePrecommitToken2,
            );
            done();
          }
        });

        fakeStream.emit('response', {
          precommitToken: fakePrecommitToken1,
        });

        fakeStream.emit('response', {
          precommitToken: fakePrecommitToken2,
        });

        fakeStream.emit('response', {
          precommitToken: fakePrecommitToken3,
        });
      });
    });
  });

  describe('PartitionedDml', () => {
    let pdml;

    beforeEach(() => {
      pdml = new PartitionedDml(SESSION);
    });

    describe('initialization', () => {
      it('should promisify all the things', () => {
        const stub = PROMISIFY_ALL.withArgs(PartitionedDml);

        assert.strictEqual(stub.callCount, 1);
      });

      it('should inherit from Dml', () => {
        assert(pdml instanceof Dml);
      });
    });

    describe('begin', () => {
      it('should send the correct options', () => {
        const stub = sandbox.stub(pdml, 'request');

        pdml.begin();

        const expectedOptions = {partitionedDml: {}};
        const {reqOpts, headers} = stub.lastCall.args[0];

        assert.deepStrictEqual(reqOpts.options, expectedOptions);
        assert.deepStrictEqual(
          headers,
          Object.assign(
            {[LEADER_AWARE_ROUTING_HEADER]: true},
            pdml.commonHeaders_,
          ),
        );
      });
    });

    describe('runUpdate', () => {
      const SQL = 'SELECT * FROM `MyTable`';

      it('should call through to `super.runUpdate`', () => {
        const stub = sandbox.stub(Dml.prototype, 'runUpdate');

        pdml.runUpdate(SQL);

        const query = stub.lastCall.args[0];

        assert.strictEqual(query, SQL);
      });

      it('should end the transaction after a request', () => {
        const endStub = sandbox.stub(pdml, 'end');
        const superStub = sandbox.stub(Dml.prototype, 'runUpdate');

        pdml.runUpdate(SQL, () => {});

        const superCallback = superStub.lastCall.args[1];
        superCallback();

        assert.strictEqual(endStub.callCount, 1);
      });

      it('should return any errors and the row count', () => {
        const fakeErr = new Error('err');
        const fakeRowCount = 5;

        const superStub = sandbox.stub(Dml.prototype, 'runUpdate');
        const callback = sandbox.stub().withArgs(fakeErr, fakeRowCount);

        pdml.runUpdate(SQL, callback);

        const superCallback = superStub.lastCall.args[1];
        superCallback(fakeErr, fakeRowCount);

        assert.strictEqual(callback.callCount, 1);
      });
    });
  });
});

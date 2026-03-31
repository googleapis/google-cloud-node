/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
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

import * as through from 'through2';
import {EventEmitter} from 'events';
import * as assert from 'assert';
import * as extend from 'extend';
import {google} from '../protos/protos';
import {
  BatchWriteOptions,
  CommitCallback,
  CommitOptions,
  MutationSet,
} from '../src/transaction';
import {util} from '@google-cloud/common';
import {Transform} from 'stream';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
const {SpanStatusCode} = require('@opentelemetry/api');
const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
// eslint-disable-next-line n/no-extraneous-require
const {
  ReadableSpan,
  SimpleSpanProcessor,
} = require('@opentelemetry/sdk-trace-base');
import * as db from '../src/database';
import {Instance, MutationGroup, Spanner} from '../src';
import * as pfy from '@google-cloud/promisify';
import {grpc} from 'google-gax';
import {MockError} from '../test/mockserver/mockspanner';
import {FakeSessionFactory} from '../test/database';
import {RunTransactionOptions} from '../src/transaction-runner';
const {generateWithAllSpansHaveDBName} = require('./helper');

const fakePfy = extend({}, pfy, {
  promisifyAll(klass, options) {
    if (klass.name !== 'Database') {
      return;
    }
    assert.deepStrictEqual(options.exclude, [
      'batchTransaction',
      'batchWriteAtLeastOnce',
      'getRestoreInfo',
      'getState',
      'getDatabaseDialect',
      'getOperations',
      'runTransaction',
      'runTransactionAsync',
      'table',
      'session',
    ]);
  },
});

class FakeBatchTransaction {
  calledWith_: IArguments;
  id?: string;
  readTimestamp?: {seconds: number; nanos: number};
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeGrpcServiceObject extends EventEmitter {
  calledWith_: IArguments;
  constructor() {
    super();
    this.calledWith_ = arguments;
  }
}

function fakePartialResultStream(this: Function & {calledWith_: IArguments}) {
  this.calledWith_ = arguments;
  return this;
}

class FakeSession {
  calledWith_: IArguments;
  formattedName_: any;
  constructor() {
    this.calledWith_ = arguments;
  }
  partitionedDml(): FakeTransaction {
    return new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.PartitionedDml,
    );
  }
  snapshot(): FakeTransaction {
    return new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.ReadOnly,
    );
  }
}

class FakeSessionPool extends EventEmitter {
  calledWith_: IArguments;
  constructor() {
    super();
    this.calledWith_ = arguments;
  }
  open() {}
  getSession() {}
  release() {}
}

class FakeTable {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeTransaction extends EventEmitter {
  calledWith_: IArguments;
  _options!: google.spanner.v1.ITransactionOptions;
  private _queuedMutations: google.spanner.v1.Mutation[];
  constructor(options) {
    super();
    this._options = options;
    this.calledWith_ = arguments;
    this._queuedMutations = [];
  }
  begin() {}
  end() {}
  runStream(): Transform {
    return through.obj();
  }
  runUpdate() {}
  setQueuedMutations(mutation) {
    this._queuedMutations = mutation;
  }
  setReadWriteTransactionOptions(options: RunTransactionOptions) {}
  commit(
    options?: CommitOptions,
    callback?: CommitCallback,
  ): void | Promise<google.spanner.v1.ICommitResponse> {
    if (callback) {
      callback(null, {commitTimestamp: {seconds: 1, nanos: 0}});
    }
    return Promise.resolve({commitTimestamp: {seconds: 1, nanos: 0}});
  }
}

class FakeTransactionRunner {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
  }
  async run(): Promise<void> {}
}

class FakeAsyncTransactionRunner<T extends {}> {
  calledWith_: IArguments;
  constructor() {
    this.calledWith_ = arguments;
  }
  async run(): Promise<T> {
    return {} as T;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakeCodec: any = {
  encode: util.noop,
  Int() {},
  Float() {},
  SpannerDate() {},
};

class FakeAbortError {
  error;
  constructor(err) {
    this.error = err;
  }
}

const fakeRetry = fn => {
  return fn();
};

fakeRetry.AbortError = FakeAbortError;

describe('Database', () => {
  const sandbox = sinon.createSandbox();

  // tslint:disable-next-line variable-name
  let Database: typeof db.Database;
  // tslint:disable-next-line variable-name
  let DatabaseCached: typeof db.Database;

  const SPANNER = {
    routeToLeaderEnabled: true,
  } as {} as Spanner;

  const INSTANCE = {
    request: util.noop,
    requestStream: util.noop,
    formattedName_: 'instance-name',
    databases_: new Map(),
    parent: SPANNER,
  } as {} as Instance;

  const NAME = 'table-name';

  const POOL_OPTIONS = {};

  let database;

  before(() => {
    Database = proxyquire('../src/database.js', {
      './common-grpc/service-object': {
        GrpcServiceObject: FakeGrpcServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
      'p-retry': fakeRetry,
      './batch-transaction': {BatchTransaction: FakeBatchTransaction},
      './codec': {codec: fakeCodec},
      './partial-result-stream': {partialResultStream: fakePartialResultStream},
      './session-pool': {SessionPool: FakeSessionPool},
      './session-factory': {SessionFactory: FakeSessionFactory},
      './session': {Session: FakeSession},
      './table': {Table: FakeTable},
      './transaction-runner': {
        TransactionRunner: FakeTransactionRunner,
        AsyncTransactionRunner: FakeAsyncTransactionRunner,
      },
    }).Database;
    DatabaseCached = Object.assign({}, Database);
  });

  const withAllSpansHaveDBName = generateWithAllSpansHaveDBName(
    INSTANCE.formattedName_ + '/databases/' + NAME,
  );

  beforeEach(() => {
    fakeCodec.encode = util.noop;
    extend(Database, DatabaseCached);
    INSTANCE._observabilityOptions = {
      tracerProvider: provider,
      enableExtendedTracing: false,
    };
    database = new Database(INSTANCE, NAME, POOL_OPTIONS);
    database.parent = INSTANCE;
    database.databaseRole = 'parent_role';
    const gaxOpts = {};
    const options: {
      a: string;
      gaxOptions?: {};
    } = {a: 'a', gaxOptions: gaxOpts};

    const expectedReqOpts = extend({}, options, {
      database: database.formattedName_,
    });
    delete expectedReqOpts.gaxOptions;
  });

  const traceExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();

  const provider = new NodeTracerProvider({
    sampler: sampler,
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  afterEach(() => {
    sandbox.restore();
    traceExporter.forceFlush();
    traceExporter.reset();
  });

  it('getSessions without error', done => {
    const ARGS = [null, [], {}];
    database.request = (config, callback) => {
      callback(...ARGS);
    };

    database.getSessions((err, sessions) => {
      assert.ifError(err);
      assert.ok(sessions);
      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');

      withAllSpansHaveDBName(spans);

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.Database.getSessions'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      // Ensure that the span's status code is UNSET.
      const firstSpan = spans[0];
      assert.strictEqual(
        SpanStatusCode.UNSET,
        firstSpan.status.code,
        'Expected an OK span status',
      );

      // We don't expect events.
      const expectedEventNames = [];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );

      done();
    });
  });

  it('getSessions with error', done => {
    const ARGS = [new Error('our error'), null, {}];
    database.request = (config, callback) => {
      callback(...ARGS);
    };

    database.getSessions((err, sessions) => {
      assert.ok(err);
      assert.ok(!sessions);
      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
      withAllSpansHaveDBName(spans);

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.Database.getSessions'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      // Ensure that the span actually produced an error that was recorded.
      const firstSpan = spans[0];
      assert.strictEqual(
        SpanStatusCode.ERROR,
        firstSpan.status.code,
        'Expected an ERROR span status',
      );
      assert.strictEqual(
        'our error',
        firstSpan.status.message,
        'Mismatched span status message',
      );

      // We don't expect events.
      const expectedEventNames = [];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );

      done();
    });
  });

  describe('batchCreateSessions', () => {
    it('without error', done => {
      const ARGS = [null, [{}]];
      database.request = (config, callback) => {
        callback(...ARGS);
      };

      database.batchCreateSessions(10, (err, sessions) => {
        assert.ifError(err);
        assert.ok(sessions);

        traceExporter.forceFlush();
        const spans = traceExporter.getFinishedSpans();

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.batchCreateSessions'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span didn't encounter an error.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          'Unexpected span status code',
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });

    it('with error', done => {
      const ARGS = [new Error('batchCreateSessions.error'), null];
      database.request = (config, callback) => {
        callback(...ARGS);
      };

      database.batchCreateSessions(10, (err, sessions) => {
        assert.ok(err);
        assert.ok(!sessions);
        traceExporter.forceFlush();
        const spans = traceExporter.getFinishedSpans();

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.batchCreateSessions'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'batchCreateSessions.error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });
  });

  describe('getSnapshot', () => {
    let fakeSessionFactory: FakeSessionFactory;
    let fakeSession: FakeSession;
    let fakeSnapshot: FakeTransaction;

    let beginSnapshotStub: sinon.SinonStub;
    let getSessionStub: sinon.SinonStub;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      fakeSession = new FakeSession();
      fakeSnapshot = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.ReadOnly,
      );

      beginSnapshotStub = (
        sandbox.stub(fakeSnapshot, 'begin') as sinon.SinonStub
      ).callsFake(callback => callback(null));

      getSessionStub = (
        sandbox.stub(fakeSessionFactory, 'getSession') as sinon.SinonStub
      ).callsFake(callback => callback(null, fakeSession));

      sandbox.stub(fakeSession, 'snapshot').returns(fakeSnapshot);

      sandbox.stub(fakeSessionFactory, 'isMultiplexedEnabled').returns(false);
    });

    it('with error', done => {
      const fakeError = new Error('our snapshot error');

      getSessionStub.callsFake(callback => callback(fakeError, null));

      database.getSnapshot(err => {
        assert.strictEqual(err, fakeError);
        traceExporter.forceFlush();
        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.getSnapshot'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'our snapshot error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });

    it('with retries on `begin` errors with `Session not found`', done => {
      const fakeError = {
        code: grpc.status.NOT_FOUND,
        message: 'Session not found',
      } as MockError;

      const fakeSession2 = new FakeSession();
      const fakeSnapshot2 = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.ReadOnly,
      );
      (sandbox.stub(fakeSnapshot2, 'begin') as sinon.SinonStub).callsFake(
        callback => callback(null),
      );
      sandbox.stub(fakeSession2, 'snapshot').returns(fakeSnapshot2);

      getSessionStub
        .onFirstCall()
        .callsFake(callback => callback(null, fakeSession))
        .onSecondCall()
        .callsFake(callback => callback(null, fakeSession2));
      beginSnapshotStub.callsFake(callback => callback(fakeError));

      // The first session that was not found should be released back into the
      // pool, so that the pool can remove it from its inventory.
      const releaseStub = sandbox.stub(fakeSessionFactory, 'release');

      database.getSnapshot(async (err, snapshot) => {
        assert.ifError(err);
        assert.strictEqual(snapshot, fakeSnapshot2);
        // The first session that error should already have been released back
        // to the pool.
        assert.strictEqual(releaseStub.callCount, 1);
        // Ending the valid snapshot will release its session back into the
        // pool.
        snapshot.emit('end');
        assert.strictEqual(releaseStub.callCount, 2);

        await provider.forceFlush();
        await traceExporter.forceFlush();
        const spans = traceExporter.getFinishedSpans();
        withAllSpansHaveDBName(spans);

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = [
          'CloudSpanner.Database.getSnapshot',
          'CloudSpanner.Database.getSnapshot',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the first span actually produced an error that was recorded.
        const parentSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          parentSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'Session not found',
          parentSpan.status.message.toString(),
          'Mismatched span status message',
        );

        // Ensure that the second span is a child of the first span.
        const secondRetrySpan = spans[1];
        assert.ok(
          parentSpan.spanContext().traceId,
          'Expected that the initial parent span has a defined traceId',
        );
        assert.ok(
          secondRetrySpan.spanContext().traceId,
          'Expected that the second retry span has a defined traceId',
        );
        assert.deepStrictEqual(
          parentSpan.spanContext().traceId,
          secondRetrySpan.spanContext().traceId,
          'Expected that both spans share a traceId',
        );
        assert.ok(
          parentSpan.spanContext().spanId,
          'Expected that the initial parent span has a defined spanId',
        );
        assert.ok(
          secondRetrySpan.spanContext().spanId,
          'Expected that the second retry span has a defined spanId',
        );
        assert.deepStrictEqual(
          secondRetrySpan.parentSpanContext.spanId,
          parentSpan.spanContext().spanId,
          'Expected that secondRetrySpan is the child to parentSpan',
        );

        const expectedEventNames = ['No session available'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });
  });

  describe('createBatchTransaction', () => {
    const SESSION = {};
    const RESPONSE = {a: 'b'};

    beforeEach(() => {
      database.sessionFactory_ = {
        getSession(callback) {
          callback(null, SESSION);
        },
      };
    });

    it('with session error', done => {
      const error = new Error('with session error');

      database.sessionFactory_ = {
        getSession(callback) {
          callback(error);
        },
      };

      database.createBatchTransaction((err, transaction, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(transaction, null);
        assert.strictEqual(resp, undefined);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = [
          'CloudSpanner.Database.createBatchTransaction',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'with session error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });

    it('with no error', done => {
      const opts = {a: 'b'};

      const fakeTransaction = {
        begin(callback) {
          callback(null, RESPONSE);
        },
        once() {},
        end() {},
      };

      database.batchTransaction = (identifier, options) => {
        assert.deepStrictEqual(identifier, {session: SESSION});
        assert.strictEqual(options, opts);
        return fakeTransaction;
      };

      database.createBatchTransaction(opts, async (err, transaction, resp) => {
        assert.strictEqual(err, null);
        assert.strictEqual(transaction, fakeTransaction);
        assert.strictEqual(resp, RESPONSE);
        transaction!.end();

        await provider.forceFlush();
        traceExporter.forceFlush();
        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = [
          'CloudSpanner.Database.createBatchTransaction',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          'Unexpected span status',
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          `No span status message expected\n\tGot:  undefined\n\tWant: ${firstSpan.status.message}`,
        );

        const expectedEventNames = ['Using Session'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });

    it('with begin transaction error', done => {
      const error = new Error('our createBatchTransaction error');

      const fakeTransaction = {
        begin(callback) {
          callback(error, RESPONSE);
        },
        once() {},
        end() {},
      };

      database.batchTransaction = () => {
        return fakeTransaction;
      };

      database.createBatchTransaction((err, transaction, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(transaction, null);
        assert.strictEqual(resp, RESPONSE);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = [
          'CloudSpanner.Database.createBatchTransaction',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'our createBatchTransaction error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });
  });

  describe('getTransaction', () => {
    let fakeSessionFactory: FakeSessionFactory;
    let fakeSession: FakeSession;
    let fakeTransaction: FakeTransaction;

    let getSessionStub: sinon.SinonStub;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      fakeSession = new FakeSession();
      fakeTransaction = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.ReadWrite,
      );

      getSessionStub = (
        sandbox.stub(
          fakeSessionFactory,
          'getSessionForReadWrite',
        ) as sinon.SinonStub
      ).callsFake(callback => {
        callback(null, fakeSession, fakeTransaction);
      });
    });

    it('with pool errors', done => {
      const fakeError = new Error('pool error');

      getSessionStub.callsFake(callback => callback(fakeError));

      database.getTransaction(
        {requestOptions: {transactionTag: 'transaction-tag'}},
        async err => {
          assert.strictEqual(err, fakeError);

          await provider.forceFlush();
          traceExporter.forceFlush();
          const spans = traceExporter.getFinishedSpans();
          assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
          withAllSpansHaveDBName(spans);

          const actualEventNames: string[] = [];
          const actualSpanNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });
          const expectedSpanNames = ['CloudSpanner.Database.getTransaction'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // In the event of a sessionPool error, we should not have events.
          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `event names mismatch:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Expected an ERROR span status',
          );
          assert.strictEqual(
            'pool error',
            firstSpan.status.message,
            'Mismatched span status message',
          );
          assert.strictEqual(
            spans[0].attributes['transaction.tag'],
            'transaction-tag',
          );
          done();
        },
      );
    });

    it('with no errors', done => {
      database.getTransaction((err, transaction) => {
        assert.ifError(err);
        assert.strictEqual(transaction, fakeTransaction);
        transaction!.end();

        const spans = traceExporter.getFinishedSpans();
        withAllSpansHaveDBName(spans);

        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.getTransaction'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that we have specific events.
        const expectedEventNames = ['Using Session'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `event names mismatch:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.UNSET,
          firstSpan.status.code,
          `Unexpected span status code: ${firstSpan.status.code}`,
        );
        assert.strictEqual(
          undefined,
          firstSpan.status.message,
          `Unexpected status message: ${firstSpan.status.message}`,
        );

        done();
      });
    });
  });

  describe('writeAtLeastOnce', () => {
    const mutations = new MutationSet();
    mutations.insert('MyTable', {
      Key: 'k3',
      Thing: 'xyz',
    });

    const SESSION = new FakeSession();
    const RESPONSE = {commitTimestamp: {seconds: 1, nanos: 0}};
    const TRANSACTION = new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.ReadWrite,
    );

    let sessionFactory: FakeSessionFactory;

    beforeEach(() => {
      sessionFactory = database.sessionFactory_;
      (sandbox.stub(sessionFactory, 'getSession') as sinon.SinonStub).callsFake(
        callback => {
          callback(null, SESSION, TRANSACTION);
        },
      );
      sandbox.stub(sessionFactory, 'isMultiplexedEnabled').returns(false);
    });

    it('should return any errors getting a session', done => {
      const fakeErr = new Error('getting session error');

      (sessionFactory.getSession as sinon.SinonStub).callsFake(callback =>
        callback(fakeErr, null, null),
      );

      database.writeAtLeastOnce(mutations, err => {
        assert.deepStrictEqual(err, fakeErr);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.writeAtLeastOnce'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'getting session error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });

    it('with empty mutation should return successful CommitResponse', done => {
      const fakeMutations = new MutationSet();
      try {
        database.writeAtLeastOnce(fakeMutations, (err, response) => {
          assert.ifError(err);
          assert.deepStrictEqual(
            response.commitTimestamp,
            RESPONSE.commitTimestamp,
          );

          const spans = traceExporter.getFinishedSpans();
          assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
          withAllSpansHaveDBName(spans);

          const actualEventNames: string[] = [];
          const actualSpanNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = ['CloudSpanner.Database.writeAtLeastOnce'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.UNSET,
            firstSpan.status.code,
            'Unexpected span status code',
          );
          assert.strictEqual(
            undefined,
            firstSpan.status.message,
            'Unexpected span status message',
          );

          const expectedEventNames = ['Using Session'];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          done();
        });
      } catch (error) {
        assert(error instanceof Error);
      }
    });

    it('with error on null mutation should catch thrown error', done => {
      try {
        database.writeAtLeastOnce(null, () => {});
      } catch (err) {
        // Performing a substring search on the error because
        // depending on the version of Node.js, the error might be either of:
        //  * Cannot read properties of null (reading 'proto')
        //  * Cannot read property 'proto' of null
        (err as grpc.ServiceError).message.includes('Cannot read propert');
        (err as grpc.ServiceError).message.includes('of null');

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.writeAtLeastOnce'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );

        const errorMessage = firstSpan.status.message;
        assert.ok(
          errorMessage.includes(
            "Cannot read properties of null (reading 'proto')",
          ) || errorMessage.includes("Cannot read property 'proto' of null"),
        );

        // We expect an exception to have been caught as well as a Session event.
        const expectedEventNames = ['Using Session', 'exception'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      }
    });
  });

  describe('batchWriteAtLeastOnce', () => {
    const mutationGroup1 = new MutationGroup();
    mutationGroup1.insert('MyTable', {
      Key: 'ks1',
      Thing: 'abc',
    });
    const mutationGroup2 = new MutationGroup();
    mutationGroup2.insert('MyTable', {
      Key: 'ks2',
      Thing: 'xyz',
    });

    const mutationGroups = [mutationGroup1, mutationGroup2];

    let fakeSessionFactory: FakeSessionFactory;
    let fakeSession: FakeSession;
    let fakeDataStream: Transform;
    let getSessionStub: sinon.SinonStub;

    const options = {
      requestOptions: {
        transactionTag: 'batch-write-tag',
      },
      excludeTxnFromChangeStream: true,
      gaxOptions: {autoPaginate: false},
    } as BatchWriteOptions;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      fakeSession = new FakeSession();
      fakeDataStream = through.obj();

      getSessionStub = (
        sandbox.stub(
          fakeSessionFactory,
          'getSessionForReadWrite',
        ) as sinon.SinonStub
      ).callsFake(callback => callback(null, fakeSession));

      sandbox.stub(database, 'requestStream').returns(fakeDataStream);
    });

    it('on retry with "Session not found" error', done => {
      const sessionNotFoundError = {
        code: grpc.status.NOT_FOUND,
        message: 'Session not found',
      } as grpc.ServiceError;
      let retryCount = 0;

      database
        .batchWriteAtLeastOnce(mutationGroups, options)
        .on('data', () => {})
        .on('error', err => {
          assert.fail(err);
        })
        .on('end', () => {
          assert.strictEqual(retryCount, 1);

          const spans = traceExporter.getFinishedSpans();
          withAllSpansHaveDBName(spans);

          const actualSpanNames: string[] = [];
          const actualEventNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = [
            'CloudSpanner.Database.batchWriteAtLeastOnce',
            'CloudSpanner.Database.batchWriteAtLeastOnce',
          ];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Expected an ERROR span status',
          );

          assert.deepStrictEqual(
            firstSpan.status.message,
            sessionNotFoundError.message,
          );

          // The last span should not have an error status.
          const lastSpan = spans[spans.length - 1];
          assert.strictEqual(
            SpanStatusCode.UNSET,
            lastSpan.status.code,
            'Unexpected span status',
          );

          assert.deepStrictEqual(lastSpan.status.message, undefined);

          const expectedEventNames = [
            'Using Session',
            'No session available',
            'Using Session',
          ];
          assert.deepStrictEqual(actualEventNames, expectedEventNames);
          assert.strictEqual(
            spans[0].attributes['transaction.tag'],
            'batch-write-tag',
          );
          done();
        });

      fakeDataStream.emit('error', sessionNotFoundError);
      retryCount++;
    });

    it('on getSession errors', done => {
      const fakeError = new Error('err');

      getSessionStub.callsFake(callback => callback(fakeError));
      database
        .batchWriteAtLeastOnce(mutationGroups, options)
        .on('error', err => {
          assert.strictEqual(err, fakeError);

          const spans = traceExporter.getFinishedSpans();
          withAllSpansHaveDBName(spans);

          const actualSpanNames: string[] = [];
          const actualEventNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = [
            'CloudSpanner.Database.batchWriteAtLeastOnce',
          ];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Expected an ERROR span status',
          );

          assert.deepStrictEqual(firstSpan.status.message, fakeError.message);

          const expectedEventNames = [];
          assert.deepStrictEqual(expectedEventNames, actualEventNames);

          done();
        });
    });

    it('with no errors', done => {
      getSessionStub.callsFake(callback => callback(null, {}));
      database
        .batchWriteAtLeastOnce(mutationGroups, options)
        .on('data', () => {})
        .on('error', assert.ifError)
        .on('end', () => {
          const spans = traceExporter.getFinishedSpans();
          withAllSpansHaveDBName(spans);

          const actualSpanNames: string[] = [];
          const actualEventNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = [
            'CloudSpanner.Database.batchWriteAtLeastOnce',
          ];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.UNSET,
            firstSpan.status.code,
            'Unexpected span status code',
          );

          assert.strictEqual(
            undefined,
            firstSpan.status.message,
            'Unexpected span status message',
          );

          const expectedEventNames = ['Using Session'];
          assert.deepStrictEqual(actualEventNames, expectedEventNames);

          done();
        });

      fakeDataStream.emit('data', 'response');
      fakeDataStream.end('end');
    });
  });

  describe('runTransaction', () => {
    const SESSION = new FakeSession();
    const TRANSACTION = new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.ReadWrite,
    );

    let fakeSessionFactory: FakeSessionFactory;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;

      (
        sandbox.stub(
          fakeSessionFactory,
          'getSessionForReadWrite',
        ) as sinon.SinonStub
      ).callsFake(callback => {
        callback(null, SESSION, TRANSACTION);
      });
    });

    it('with error getting session', done => {
      const fakeErr = new Error('getting a session');

      (fakeSessionFactory.getSessionForReadWrite as sinon.SinonStub).callsFake(
        callback => callback(fakeErr),
      );

      database.runTransaction(
        {requestOptions: {transactionTag: 'transaction-tag'}},
        err => {
          assert.strictEqual(err, fakeErr);

          const spans = traceExporter.getFinishedSpans();
          assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
          withAllSpansHaveDBName(spans);

          const actualSpanNames: string[] = [];
          const actualEventNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = ['CloudSpanner.Database.runTransaction'];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const firstSpan = spans[0];
          assert.strictEqual(
            SpanStatusCode.ERROR,
            firstSpan.status.code,
            'Expected an ERROR span status',
          );
          assert.strictEqual(
            'getting a session',
            firstSpan.status.message,
            'Mismatched span status message',
          );

          // We don't expect events.
          const expectedEventNames = [];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          assert.strictEqual(
            spans[0].attributes['transaction.tag'],
            'transaction-tag',
          );
          done();
        },
      );
    });

    it('with other errors when running the transaction', done => {
      const fakeError = new Error('internal rejects err');

      sandbox.stub(FakeTransactionRunner.prototype, 'run').rejects(fakeError);

      database.runTransaction(err => {
        assert.strictEqual(err, fakeError);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualSpanNames: string[] = [];
        const actualEventNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.runTransaction'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'internal rejects err',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });
    });
  });

  describe('runTransactionAsync', () => {
    const SESSION = new FakeSession();
    const TRANSACTION = new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.ReadWrite,
    );

    let fakeSessionFactory: FakeSessionFactory;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      (
        sandbox.stub(
          fakeSessionFactory,
          'getSessionForReadWrite',
        ) as sinon.SinonStub
      ).callsFake(callback => {
        callback(null, SESSION, TRANSACTION);
      });
    });

    it('with no error', async () => {
      const fakeValue = {};

      sandbox
        .stub(FakeAsyncTransactionRunner.prototype, 'run')
        .resolves(fakeValue);

      const value = await database.runTransactionAsync(
        {requestOptions: {transactionTag: 'transaction-tag'}},
        async txn => {
          const result = await txn.run('SELECT 1');
          await txn.commit();
          return result;
        },
      );

      assert.strictEqual(value, fakeValue);

      await provider.forceFlush();
      await traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      withAllSpansHaveDBName(spans);

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.Database.runTransactionAsync'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      // Ensure that the span actually produced an error that was recorded.
      const firstSpan = spans[0];
      assert.strictEqual(
        SpanStatusCode.UNSET,
        firstSpan.status.code,
        'Unexpected span status',
      );
      assert.strictEqual(
        undefined,
        firstSpan.status.message,
        'Unexpected span status message',
      );

      const expectedEventNames = ['Using Session'];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );
      assert.strictEqual(
        spans[0].attributes['transaction.tag'],
        'transaction-tag',
      );
    });

    it('with error', async () => {
      const ourException = new Error('our thrown error');
      sandbox
        .stub(FakeAsyncTransactionRunner.prototype, 'run')
        .throws(ourException);

      await assert.rejects(async () => {
        await database.runTransactionAsync(async txn => {
          const result = await txn.run('SELECT 1');
          await txn.commit();
          return result;
        });
      }, ourException);

      await provider.forceFlush();
      await traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      withAllSpansHaveDBName(spans);

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.Database.runTransactionAsync'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      // Ensure that the span actually produced an error that was recorded.
      const firstSpan = spans[0];
      assert.strictEqual(
        firstSpan.status.code,
        SpanStatusCode.ERROR,
        'Unexpected span status',
      );
      assert.strictEqual(
        firstSpan.status.message,
        ourException.message,
        'Unexpected span status message',
      );

      const expectedEventNames = ['Using Session', 'exception'];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );
    });
  });

  describe('runStream', () => {
    const QUERY = {
      sql: 'SELECT * FROM table',
      a: 'b',
      c: 'd',
      requestOptions: {requestTag: 'request-tag'},
    };
    let fakeSessionFactory: FakeSessionFactory;
    let fakeSession: FakeSession;
    let fakeSession2: FakeSession;
    let fakeSnapshot: FakeTransaction;
    let fakeSnapshot2: FakeTransaction;
    let fakeStream: Transform;
    let fakeStream2: Transform;

    let getSessionStub: sinon.SinonStub;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      fakeSession = new FakeSession();
      fakeSession2 = new FakeSession();
      fakeSnapshot = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.ReadOnly,
      );
      fakeSnapshot2 = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.ReadOnly,
      );
      fakeStream = through.obj();
      fakeStream2 = through.obj();

      getSessionStub = (
        sandbox.stub(fakeSessionFactory, 'getSession') as sinon.SinonStub
      )
        .onFirstCall()
        .callsFake(callback => callback(null, fakeSession))
        .onSecondCall()
        .callsFake(callback => callback(null, fakeSession2));

      sandbox.stub(fakeSession, 'snapshot').returns(fakeSnapshot);

      sandbox.stub(fakeSession2, 'snapshot').returns(fakeSnapshot2);

      sandbox.stub(fakeSnapshot, 'runStream').returns(fakeStream);

      sandbox.stub(fakeSnapshot2, 'runStream').returns(fakeStream2);

      sandbox.stub(fakeSessionFactory, 'isMultiplexedEnabled').returns(false);
    });

    it('with error on `getSession`', done => {
      const fakeError = new Error('getSession error');

      getSessionStub.onFirstCall().callsFake(callback => callback(fakeError));

      database.runStream(QUERY).on('error', err => {
        assert.strictEqual(err, fakeError);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.runStream'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'getSession error',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        // We don't expect events.
        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        assert.strictEqual(spans[0].attributes['request.tag'], 'request-tag');
        done();
      });
    });

    it('propagation on stream/transaction errors', done => {
      const fakeError = new Error('propagation err');
      const endStub = sandbox.stub(fakeSnapshot, 'end');

      database.runStream(QUERY).on('error', err => {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(endStub.callCount, 1);

        const spans = traceExporter.getFinishedSpans();
        assert.strictEqual(spans.length, 1, 'Exactly 1 span expected');
        withAllSpansHaveDBName(spans);

        const actualEventNames: string[] = [];
        const actualSpanNames: string[] = [];
        spans.forEach(span => {
          actualSpanNames.push(span.name);
          span.events.forEach(event => {
            actualEventNames.push(event.name);
          });
        });

        const expectedSpanNames = ['CloudSpanner.Database.runStream'];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the span actually produced an error that was recorded.
        const firstSpan = spans[0];
        assert.strictEqual(
          SpanStatusCode.ERROR,
          firstSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.strictEqual(
          'propagation err',
          firstSpan.status.message,
          'Mismatched span status message',
        );

        const expectedEventNames = ['Using Session'];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        done();
      });

      fakeStream.destroy(fakeError);
    });

    it('retries with "Session not found" error', done => {
      const sessionNotFoundError = {
        code: grpc.status.NOT_FOUND,
        message: 'Session not found',
      } as grpc.ServiceError;
      const endStub = sandbox.stub(fakeSnapshot, 'end');
      const endStub2 = sandbox.stub(fakeSnapshot2, 'end');
      let rows = 0;

      database
        .runStream(QUERY)
        .on('data', () => rows++)
        .on('error', err => {
          assert.fail(err);
        })
        .on('end', async () => {
          assert.strictEqual(endStub.callCount, 1);
          assert.strictEqual(endStub2.callCount, 1);
          assert.strictEqual(rows, 1);

          await provider.forceFlush();
          await traceExporter.forceFlush();

          const spans = traceExporter.getFinishedSpans();
          assert.strictEqual(spans.length, 2, 'Exactly 2 spans expected');
          withAllSpansHaveDBName(spans);

          const actualSpanNames: string[] = [];
          const actualEventNames: string[] = [];
          spans.forEach(span => {
            actualSpanNames.push(span.name);
            span.events.forEach(event => {
              actualEventNames.push(event.name);
            });
          });

          const expectedSpanNames = [
            'CloudSpanner.Database.runStream',
            'CloudSpanner.Database.runStream',
          ];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          // Ensure that the span actually produced an error that was recorded.
          const lastSpan = spans[0];
          assert.deepStrictEqual(
            SpanStatusCode.ERROR,
            lastSpan.status.code,
            'Expected an ERROR span status',
          );
          assert.deepStrictEqual(
            'Session not found',
            lastSpan.status.message,
            'Mismatched span status message',
          );

          // Ensure that the final span that got retries did not error.
          const firstSpan = spans[1];
          assert.deepStrictEqual(
            SpanStatusCode.UNSET,
            firstSpan.status.code,
            'Unexpected span status code',
          );
          assert.deepStrictEqual(
            undefined,
            firstSpan.status.message,
            'Unexpected span status message',
          );

          const expectedEventNames = [
            'Using Session',
            'No session available',
            'Using Session',
          ];
          assert.deepStrictEqual(
            actualEventNames,
            expectedEventNames,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          done();
        });

      fakeStream.emit('error', sessionNotFoundError);
      fakeStream2.push('row1');
      fakeStream2.push(null);
    });
  });

  describe('runPartitionedUpdate', () => {
    const QUERY = {
      sql: 'INSERT INTO `MyTable` (Key, Thing) VALUES(@key, @thing)',
      params: {
        key: 'k999',
        thing: 'abc',
      },
      requestOptions: {requestTag: 'request-tag'},
    };

    let fakeSessionFactory: FakeSessionFactory;
    let fakeSession: FakeSession;
    let fakePartitionedDml = new FakeTransaction(
      {} as google.spanner.v1.TransactionOptions.PartitionedDml,
    );

    let getSessionStub;
    let beginStub;

    beforeEach(() => {
      fakeSessionFactory = database.sessionFactory_;
      fakeSession = new FakeSession();
      fakePartitionedDml = new FakeTransaction(
        {} as google.spanner.v1.TransactionOptions.PartitionedDml,
      );

      getSessionStub = (
        sandbox.stub(
          fakeSessionFactory,
          'getSessionForPartitionedOps',
        ) as sinon.SinonStub
      ).callsFake(callback => {
        callback(null, fakeSession);
      });

      sandbox.stub(fakeSession, 'partitionedDml').returns(fakePartitionedDml);

      beginStub = (
        sandbox.stub(fakePartitionedDml, 'begin') as sinon.SinonStub
      ).callsFake(callback => callback(null));

      (
        sandbox.stub(fakePartitionedDml, 'runUpdate') as sinon.SinonStub
      ).callsFake((_, callback) => callback(null));
    });

    interface traceExportResults {
      spanNames: string[];
      spans: (typeof ReadableSpan)[];
      eventNames: string[];
    }

    async function getTraceExportResults(): Promise<traceExportResults> {
      await provider.forceFlush();
      await traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();
      withAllSpansHaveDBName(spans);

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      return Promise.resolve({
        spanNames: actualSpanNames,
        spans: spans,
        eventNames: actualEventNames,
      });
    }

    it('with pool errors', done => {
      const fakeError = new Error('err');

      getSessionStub.callsFake(callback => callback(fakeError));
      database.runPartitionedUpdate(QUERY, async (err, rowCount) => {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(rowCount, 0);

        const exportResults = await getTraceExportResults();
        const actualSpanNames = exportResults.spanNames;
        const spans = exportResults.spans;
        const actualEventNames = exportResults.eventNames;

        const expectedSpanNames = [
          'CloudSpanner.Database.runPartitionedUpdate',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the first span actually produced an error that was recorded.
        const parentSpan = spans[0];
        assert.deepStrictEqual(
          SpanStatusCode.ERROR,
          parentSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.deepStrictEqual(
          fakeError.message,
          parentSpan.status.message.toString(),
          'Mismatched span status message',
        );

        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );

        assert.strictEqual(spans[0].attributes['request.tag'], 'request-tag');
        done();
      });
    });

    it('with begin errors', done => {
      const fakeError = new Error('err');

      beginStub.callsFake(callback => callback(fakeError));

      const releaseStub = (
        sandbox.stub(fakeSessionFactory, 'release') as sinon.SinonStub
      ).withArgs(fakeSession);

      database.runPartitionedUpdate(QUERY, async (err, rowCount) => {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(rowCount, 0);
        assert.strictEqual(releaseStub.callCount, 1);

        const exportResults = await getTraceExportResults();
        const actualSpanNames = exportResults.spanNames;
        const spans = exportResults.spans;
        const actualEventNames = exportResults.eventNames;

        const expectedSpanNames = [
          'CloudSpanner.Database.runPartitionedUpdate',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the first span actually produced an error that was recorded.
        const parentSpan = spans[0];
        assert.deepStrictEqual(
          SpanStatusCode.ERROR,
          parentSpan.status.code,
          'Expected an ERROR span status',
        );
        assert.deepStrictEqual(
          fakeError.message,
          parentSpan.status.message.toString(),
          'Mismatched span status message',
        );

        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );
        done();
      });
    });

    it('session released on transaction end', done => {
      const releaseStub = (
        sandbox.stub(fakeSessionFactory, 'release') as sinon.SinonStub
      ).withArgs(fakeSession);

      database.runPartitionedUpdate(QUERY, async () => {
        const exportResults = await getTraceExportResults();
        const actualSpanNames = exportResults.spanNames;
        const spans = exportResults.spans;
        const actualEventNames = exportResults.eventNames;

        const expectedSpanNames = [
          'CloudSpanner.Database.runPartitionedUpdate',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        // Ensure that the first span actually produced an error that was recorded.
        const parentSpan = spans[0];
        assert.deepStrictEqual(
          SpanStatusCode.UNSET,
          parentSpan.status.code,
          'Unexpected span status',
        );
        assert.deepStrictEqual(
          undefined,
          parentSpan.status.message,
          'Mismatched span status message',
        );

        const expectedEventNames = [];
        assert.deepStrictEqual(
          actualEventNames,
          expectedEventNames,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );
        done();
      });

      fakePartitionedDml.emit('end');
      assert.strictEqual(releaseStub.callCount, 1);
    });
  });
});

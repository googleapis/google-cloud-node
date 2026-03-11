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

import * as assert from 'assert';
import {grpc} from 'google-gax';
import {google} from '../protos/protos';
import {Database, Instance, Spanner} from '../src';
import {MutationSet} from '../src/transaction';
import protobuf = google.spanner.v1;
import v1 = google.spanner.v1;
import * as mock from '../test/mockserver/mockspanner';
import * as mockInstanceAdmin from '../test/mockserver/mockinstanceadmin';
import * as mockDatabaseAdmin from '../test/mockserver/mockdatabaseadmin';
import * as sinon from 'sinon';
import {Row} from '../src/partial-result-stream';
import {END_TO_END_TRACING_HEADER} from '../src/common';
import {MetricsTracerFactory} from '../src/metrics/metrics-tracer-factory';
const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
// eslint-disable-next-line n/no-extraneous-require
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');
const {SpanStatusCode} = require('@opentelemetry/api');
const {
  disableContextAndManager,
  generateWithAllSpansHaveDBName,
  setGlobalContextManager,
  verifySpansAndEvents,
  createSessionEvents,
  waitingSessionsEvents,
  cacheSessionEvents,
} = require('./helper');
const {
  AsyncHooksContextManager,
} = require('@opentelemetry/context-async-hooks');

const {ObservabilityOptions} = require('../src/instrument');
const selectSql = 'SELECT 1';
const updateSql = 'UPDATE FOO SET BAR=1 WHERE BAZ=2';

async function disableMetrics(sandbox?: sinon.SinonSandbox) {
  if (sandbox) {
    if (
      Object.prototype.hasOwnProperty.call(
        process.env,
        'SPANNER_DISABLE_BUILTIN_METRICS',
      )
    ) {
      sandbox.replace(process.env, 'SPANNER_DISABLE_BUILTIN_METRICS', 'true');
    } else {
      sandbox.define(process.env, 'SPANNER_DISABLE_BUILTIN_METRICS', 'true');
    }
  }
  await MetricsTracerFactory.resetInstance();
  MetricsTracerFactory.enabled = false;
}

/** A simple result set for SELECT 1. */
function createSelect1ResultSet(): protobuf.ResultSet {
  const fields = [
    protobuf.StructType.Field.create({
      name: 'NUM',
      type: protobuf.Type.create({code: protobuf.TypeCode.INT64}),
    }),
  ];
  const metadata = new protobuf.ResultSetMetadata({
    rowType: new protobuf.StructType({
      fields,
    }),
  });
  return protobuf.ResultSet.create({
    metadata,
    rows: [{values: [{stringValue: '1'}]}],
  });
}

interface setupResults {
  server: grpc.Server;
  spanner: Spanner;
  spannerMock: mock.MockSpanner;
}

async function setup(
  observabilityOptions?: typeof ObservabilityOptions,
  sandbox?: sinon.SinonSandbox,
): Promise<setupResults> {
  const server = new grpc.Server();
  const spannerMock = mock.createMockSpanner(server);
  mockInstanceAdmin.createMockInstanceAdmin(server);
  mockDatabaseAdmin.createMockDatabaseAdmin(server);

  const port: number = await new Promise((resolve, reject) => {
    server.bindAsync(
      '0.0.0.0:0',
      grpc.ServerCredentials.createInsecure(),
      (err, assignedPort) => {
        if (err) {
          reject(err);
        } else {
          resolve(assignedPort);
        }
      },
    );
  });

  spannerMock.putStatementResult(
    selectSql,
    mock.StatementResult.resultSet(createSelect1ResultSet()),
  );
  spannerMock.putStatementResult(
    updateSql,
    mock.StatementResult.updateCount(1),
  );

  await disableMetrics(sandbox);
  const spanner = new Spanner({
    projectId: 'observability-project-id',
    servicePath: 'localhost',
    port,
    sslCreds: grpc.credentials.createInsecure(),
    observabilityOptions: observabilityOptions,
  });

  return Promise.resolve({
    spanner: spanner,
    server: server,
    spannerMock: spannerMock,
  });
}

describe('EndToEnd', async () => {
  const sandbox = sinon.createSandbox();
  const contextManager = new AsyncHooksContextManager();
  setGlobalContextManager(contextManager);
  afterEach(() => {
    disableContextAndManager(contextManager);
  });

  const traceExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();
  const tracerProvider = new NodeTracerProvider({
    sampler: sampler,
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  const setupResult = await setup(
    {
      tracerProvider: tracerProvider,
      enableExtendedTracing: false,
    },
    sandbox,
  );

  const server = setupResult.server;
  const spannerMock = setupResult.spannerMock;
  const spanner = setupResult.spanner;
  const instance = spanner.instance('instance');

  after(async () => {
    spanner.close();
    await server.tryShutdown(() => {});
    sandbox.restore();
  });

  afterEach(async () => {
    await tracerProvider.forceFlush();
    await traceExporter.reset();
    spannerMock.resetRequests();
  });

  const database = instance.database('database');

  beforeEach(async () => {
    // To deflake expectations of session creation, let's
    // issue out a warm-up request request that'll ensure
    // that the MultiplexedSession is created deterministically.
    await database.run('SELECT 1');
    // Clear out any present traces to make a clean slate for testing.
    traceExporter.forceFlush();
    traceExporter.reset();
  });

  describe('Database', () => {
    it('getSessions', async () => {
      await database.getSessions();
      const expectedSpanNames = ['CloudSpanner.Database.getSessions'];
      const expectedEventNames = [];

      await verifySpansAndEvents(
        traceExporter,
        expectedSpanNames,
        expectedEventNames,
      );
    });

    it('getSnapshot', done => {
      database.getSnapshot((err, transaction) => {
        assert.ifError(err);

        transaction!.run('SELECT 1', async err => {
          assert.ifError(err);
          transaction!.end();
          const expectedSpanNames = [
            'CloudSpanner.Snapshot.begin',
            'CloudSpanner.Database.getSnapshot',
            'CloudSpanner.Snapshot.runStream',
            'CloudSpanner.Snapshot.run',
          ];
          const expectedEventNames = [
            'Begin Transaction',
            'Transaction Creation Done',
            ...cacheSessionEvents,
            'Starting stream',
          ];
          await verifySpansAndEvents(
            traceExporter,
            expectedSpanNames,
            expectedEventNames,
          );
          done();
        });
      });
    });

    it('getTransaction', done => {
      database.getTransaction(async (err, transaction) => {
        assert.ifError(err);
        assert.ok(transaction);
        transaction!.end();
        void transaction!.commit();

        const expectedSpanNames = ['CloudSpanner.Database.getTransaction'];
        const expectedEventNames = [...cacheSessionEvents, 'Using Session'];
        await verifySpansAndEvents(
          traceExporter,
          expectedSpanNames,
          expectedEventNames,
        );
        done();
      });
    });

    it('runStream', done => {
      database
        .runStream('SELECT 1')
        .on('data', () => {})
        .once('error', assert.ifError)
        .on('end', async () => {
          const expectedSpanNames = [
            'CloudSpanner.Snapshot.runStream',
            'CloudSpanner.Database.runStream',
          ];
          const expectedEventNames = [
            'Starting stream',
            ...cacheSessionEvents,
            'Using Session',
          ];
          await verifySpansAndEvents(
            traceExporter,
            expectedSpanNames,
            expectedEventNames,
          );

          done();
        });
    });

    it('run', async () => {
      await database.run('SELECT 1');
      const expectedSpanNames = [
        'CloudSpanner.Snapshot.runStream',
        'CloudSpanner.Database.runStream',
        'CloudSpanner.Database.run',
      ];
      const expectedEventNames = [
        'Starting stream',
        ...cacheSessionEvents,
        'Using Session',
      ];
      await verifySpansAndEvents(
        traceExporter,
        expectedSpanNames,
        expectedEventNames,
      );
    });

    it('runTransaction', done => {
      database.runTransaction(async (err, transaction) => {
        assert.ifError(err);
        await transaction!.run('SELECT 1');
        await transaction!.commit();
        await transaction!.end();
        const expectedSpanNames = [
          'CloudSpanner.Snapshot.runStream',
          'CloudSpanner.Snapshot.run',
          'CloudSpanner.Transaction.commit',
          'CloudSpanner.Database.runTransaction',
        ];
        const expectedEventNames = [
          'Starting stream',
          'Transaction Creation Done',
          'Starting Commit',
          'Commit Done',
          ...cacheSessionEvents,
        ];

        await verifySpansAndEvents(
          traceExporter,
          expectedSpanNames,
          expectedEventNames,
        );
        done();
      });
    });

    it('runTransactionAsync', async () => {
      await database.runTransactionAsync(async transaction => {
        await transaction!.run('SELECT 1');
      });

      const expectedSpanNames = [
        'CloudSpanner.Snapshot.runStream',
        'CloudSpanner.Snapshot.run',
        'CloudSpanner.Database.runTransactionAsync',
      ];
      const expectedEventNames = [
        'Starting stream',
        'Transaction Creation Done',
        ...cacheSessionEvents,
        'Using Session',
      ];
      await verifySpansAndEvents(
        traceExporter,
        expectedSpanNames,
        expectedEventNames,
      );
    });

    it('writeAtLeastOnce', done => {
      const blankMutations = new MutationSet();
      database.writeAtLeastOnce(blankMutations, async (err, response) => {
        assert.ifError(err);
        assert.ok(response);
        const expectedSpanNames = [
          'CloudSpanner.Transaction.commit',
          'CloudSpanner.Database.writeAtLeastOnce',
        ];
        const expectedEventNames = [
          'Starting Commit',
          'Commit Done',
          ...cacheSessionEvents,
          'Using Session',
        ];
        await verifySpansAndEvents(
          traceExporter,
          expectedSpanNames,
          expectedEventNames,
        );
        done();
      });
    });

    it('batchCreateSessions', done => {
      database.batchCreateSessions(5, async err => {
        assert.ifError(err);
        const expectedSpanNames = ['CloudSpanner.Database.batchCreateSessions'];
        const expectedEventNames = [];
        await verifySpansAndEvents(
          traceExporter,
          expectedSpanNames,
          expectedEventNames,
        );
        done();

        it('runPartitionedUpdate', async () => {
          await database.runPartitionedUpdate({
            sql: updateSql,
          });

          const expectedSpanNames = [
            'CloudSpanner.Snapshot.begin',
            'CloudSpanner.Snapshot.runStream',
            'CloudSpanner.Snapshot.run',
            'CloudSpanner.Dml.runUpdate',
            'CloudSpanner.PartitionedDml.runUpdate',
            'CloudSpanner.Database.runPartitionedUpdate',
          ];
          const expectedEventNames = [
            'Begin Transaction',
            'Transaction Creation Done',
            'Starting stream',
            'Acquiring session',
            'Cache hit: has usable session',
            'Acquired session',
          ];
          verifySpansAndEvents(
            traceExporter,
            expectedSpanNames,
            expectedEventNames,
          );
        });
      });
    });
  });
});

describe('ObservabilityOptions injection and propagation', async () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Passed into Spanner, Instance and Database', async () => {
    const traceExporter = new InMemorySpanExporter();
    const tracerProvider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: traceExporter,
      spanProcessors: [new SimpleSpanProcessor(traceExporter)],
    });

    const observabilityOptions: typeof ObservabilityOptions = {
      tracerProvider: tracerProvider,
      enableExtendedTracing: true,
    };

    const setupResult = await setup(observabilityOptions, sandbox);
    const spanner = setupResult.spanner;
    const server = setupResult.server;
    const spannerMock = setupResult.spannerMock;

    after(async () => {
      traceExporter.reset();
      await tracerProvider.shutdown();
      spannerMock.resetRequests();
      spanner.close();
      server.tryShutdown(() => {});
      sandbox.restore();
    });

    // Ensure that the same observability configuration is set on the Spanner client.
    assert.deepStrictEqual(spanner._observabilityOptions, observabilityOptions);

    // Acquire a handle to the Instance through spanner.instance.
    const instanceByHandle = spanner.instance('instance');
    assert.deepStrictEqual(
      instanceByHandle._observabilityOptions,
      observabilityOptions,
    );

    // Create the Instance by means of a constructor directly.
    const instanceByConstructor = new Instance(spanner, 'myInstance');
    assert.deepStrictEqual(
      instanceByConstructor._observabilityOptions,
      observabilityOptions,
    );

    // Acquire a handle to the Database through instance.database.
    const databaseByHandle = instanceByHandle.database('database');
    assert.deepStrictEqual(
      databaseByHandle._observabilityOptions,
      observabilityOptions,
    );

    // Create the Database by means of a constructor directly.
    const databaseByConstructor = new Database(
      instanceByConstructor,
      'myDatabase',
    );
    assert.deepStrictEqual(
      databaseByConstructor._observabilityOptions,
      observabilityOptions,
    );
  });

  describe('Transaction', async () => {
    const traceExporter = new InMemorySpanExporter();
    const tracerProvider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: traceExporter,
      spanProcessors: [new SimpleSpanProcessor(traceExporter)],
    });

    const observabilityOptions: typeof ObservabilityOptions = {
      tracerProvider: tracerProvider,
      enableExtendedTracing: true,
    };
    const setupResult = await setup(observabilityOptions, sandbox);
    const spanner = setupResult.spanner;
    const server = setupResult.server;
    const spannerMock = setupResult.spannerMock;

    after(async () => {
      traceExporter.reset();
      await tracerProvider.shutdown();
      spannerMock.resetRequests();
      spanner.close();
      server.tryShutdown(() => {});
    });

    let database: Database;
    beforeEach(async () => {
      const instance = spanner.instance('instance');
      database = instance.database('database');

      // To deflake expectations of session creation, let's
      // issue out a warm-up request request that'll ensure
      // that the MultiplexedSession is created deterministically.
      await database.run('SELECT 1');
      // Clear out any present traces to make a clean slate for testing.
      traceExporter.forceFlush();
      traceExporter.reset();
    });

    afterEach(() => {
      spannerMock.resetRequests();
    });

    const db = spanner.instance('instance').database('database');
    const withAllSpansHaveDBName = generateWithAllSpansHaveDBName(
      db.formattedName_,
    );

    it('run', async () => {
      let txn;
      try {
        [txn] = await database.getTransaction();
        await txn.run('SELECT 1');
        await tracerProvider.forceFlush();
        traceExporter.forceFlush();

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
          'CloudSpanner.Database.getTransaction',
          'CloudSpanner.Snapshot.runStream',
          'CloudSpanner.Snapshot.run',
        ];
        assert.deepStrictEqual(
          actualSpanNames,
          expectedSpanNames,
          `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
        );

        const expectedEventNames = [
          ...cacheSessionEvents,
          'Using Session',
          'Starting stream',
          'Transaction Creation Done',
        ];
        assert.strictEqual(
          actualEventNames.every(value => expectedEventNames.includes(value)),
          true,
          `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
        );
      } catch (err) {
        assert.ifError(err);
      } finally {
        txn.end();
      }
    });

    it('Transaction.begin+Dml.runUpdate', done => {
      database.getTransaction(async (err, tx) => {
        assert.ifError(err);

        // Firstly erase the prior spans so that we can have only Transaction spans.
        traceExporter.reset();

        await tx!.begin();
        tx!.runUpdate(updateSql, async err => {
          assert.ifError(err);
          tx!.end();

          await tracerProvider.forceFlush();
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
            'CloudSpanner.Snapshot.begin',
            'CloudSpanner.Snapshot.runStream',
            'CloudSpanner.Snapshot.run',
            'CloudSpanner.Dml.runUpdate',
          ];
          assert.deepStrictEqual(
            actualSpanNames,
            expectedSpanNames,
            `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
          );

          const expectedEventNames = [
            'Begin Transaction',
            'Transaction Creation Done',
            'Starting stream',
          ];
          assert.deepStrictEqual(
            actualEventNames.every(value => expectedEventNames.includes(value)),
            true,
            `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
          );

          done();
        });
      });
    });

    it('runStream', done => {
      let rowCount = 0;
      database.getTransaction((err, tx) => {
        assert.ifError(err);
        tx!
          .runStream(selectSql)
          .on('data', () => rowCount++)
          .on('error', assert.ifError)
          .on('stats', () => {})
          .on('end', async () => {
            tx!.end();

            await tracerProvider.forceFlush();
            traceExporter.forceFlush();

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
              'CloudSpanner.Database.getTransaction',
              'CloudSpanner.Snapshot.runStream',
            ];
            assert.deepStrictEqual(
              actualSpanNames,
              expectedSpanNames,
              `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
            );

            const expectedEventNames = [
              ...cacheSessionEvents,
              'Using Session',
              'Starting stream',
              'Transaction Creation Done',
            ];
            assert.deepStrictEqual(
              actualEventNames,
              expectedEventNames,
              `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
            );

            done();
          });
      });
    });

    it('rollback', done => {
      database.getTransaction(async (err, tx) => {
        assert.ifError(err);

        // Firstly erase the prior spans so that we can have only Transaction spans.
        traceExporter.reset();

        await tx!.begin();

        tx!.runUpdate(updateSql, async err => {
          assert.ifError(err);
          tx!.rollback(async () => {
            tx!.end();
            await tracerProvider.forceFlush();
            traceExporter.forceFlush();

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
              'CloudSpanner.Snapshot.begin',
              'CloudSpanner.Snapshot.runStream',
              'CloudSpanner.Snapshot.run',
              'CloudSpanner.Dml.runUpdate',
              'CloudSpanner.Transaction.rollback',
            ];
            assert.deepStrictEqual(
              actualSpanNames,
              expectedSpanNames,
              `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
            );

            const expectedEventNames = [
              'Begin Transaction',
              'Transaction Creation Done',
              'Starting stream',
            ];
            assert.strictEqual(
              actualEventNames.every(value =>
                expectedEventNames.includes(value),
              ),
              true,
              `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
            );

            done();
          });
        });
      });
    });
  });

  it('Propagates spans to the injected not global TracerProvider', async () => {
    const globalTraceExporter = new InMemorySpanExporter();
    const globalTracerProvider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: globalTraceExporter,
      spanProcessors: [new SimpleSpanProcessor(globalTraceExporter)],
    });
    globalTracerProvider.register();

    const injectedTraceExporter = new InMemorySpanExporter();
    const injectedTracerProvider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: injectedTraceExporter,
      spanProcessors: [new SimpleSpanProcessor(injectedTraceExporter)],
    });

    const observabilityOptions: typeof ObservabilityOptions = {
      tracerProvider: injectedTracerProvider,
      enableExtendedTracing: true,
    };
    const setupResult = await setup(observabilityOptions, sandbox);
    const spanner = setupResult.spanner;
    const server = setupResult.server;
    const spannerMock = setupResult.spannerMock;

    const instance = spanner.instance('instance');
    const database = instance.database('database');

    const withAllSpansHaveDBName = generateWithAllSpansHaveDBName(
      database.formattedName_,
    );

    try {
      await database.run('SELECT 1');
      injectedTraceExporter.forceFlush();
      globalTraceExporter.forceFlush();
      const spansFromInjected = injectedTraceExporter.getFinishedSpans();
      const spansFromGlobal = globalTraceExporter.getFinishedSpans();
      assert.strictEqual(
        spansFromGlobal.length,
        0,
        'Expecting no spans from the global exporter',
      );
      assert.strictEqual(
        spansFromInjected.length > 0,
        true,
        'Expecting spans from the injected exporter',
      );

      spansFromInjected.sort((spanA, spanB) => {
        spanA.startTime < spanB.startTime;
      });
      withAllSpansHaveDBName(spansFromInjected);
      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spansFromInjected.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });
      const expectedSpanNames = [
        'CloudSpanner.Database.createSession',
        'CloudSpanner.MultiplexedSession.createSession',
        'CloudSpanner.Snapshot.runStream',
        'CloudSpanner.Database.runStream',
        'CloudSpanner.Database.run',
      ];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );
      const expectedEventNames = [
        ...createSessionEvents,
        'Starting stream',
        ...waitingSessionsEvents,
      ];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );
    } catch (err) {
      assert.ifError(err);
    } finally {
      injectedTraceExporter.reset();
      await injectedTracerProvider.shutdown();
      spannerMock.resetRequests();
      spanner.close();
      server.tryShutdown(() => {});
    }
  });
});

describe('E2E traces with async/await', async () => {
  let server: grpc.Server;
  let spanner: Spanner;
  let spannerMock: mock.MockSpanner;
  let traceExporter: typeof InMemorySpanExporter;
  let provider: typeof NodeTracerProvider;
  let observabilityOptions: typeof ObservabilityOptions;
  let sandbox;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    traceExporter = new InMemorySpanExporter();
    provider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: traceExporter,
      spanProcessors: [new SimpleSpanProcessor(traceExporter)],
    });

    observabilityOptions = {
      tracerProvider: provider,
      enableExtendedTracing: true,
    };
    const setupResult = await setup(observabilityOptions, sandbox);
    spanner = setupResult.spanner;
    server = setupResult.server;
    spannerMock = setupResult.spannerMock;
  });

  afterEach(async () => {
    traceExporter.reset();
    provider.shutdown();
    spannerMock.resetRequests();
    spanner.close();
    server.tryShutdown(() => {});
    sandbox.restore();
  });

  function assertAsyncAwaitExpectations() {
    // See https://github.com/googleapis/nodejs-spanner/issues/2146.
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

    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Snapshot.runStream',
      'CloudSpanner.Database.runStream',
      'CloudSpanner.Database.run',
    ];
    assert.deepStrictEqual(
      actualSpanNames,
      expectedSpanNames,
      `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
    );

    // We need to ensure a strict relationship between the spans.
    // runSpan -------------------|
    //     |-runStream ----------|
    const runStreamSpan = spans[spans.length - 2];
    const runSpan = spans[spans.length - 1];
    assert.ok(
      runSpan.spanContext().traceId,
      'Expected that runSpan has a defined traceId',
    );
    assert.ok(
      runStreamSpan.spanContext().traceId,
      'Expected that runStreamSpan has a defined traceId',
    );
    assert.deepStrictEqual(
      runStreamSpan.parentSpanContext.spanId,
      runSpan.spanContext().spanId,
      `Expected that runSpan(spanId=${runSpan.spanContext().spanId}) is the parent to runStreamSpan(parentSpanId=${runStreamSpan.parentSpanContext.spanId})`,
    );
    assert.deepStrictEqual(
      runSpan.spanContext().traceId,
      runStreamSpan.spanContext().traceId,
      'Expected that both spans share a traceId',
    );
    assert.ok(
      runStreamSpan.spanContext().spanId,
      'Expected that runStreamSpan has a defined spanId',
    );
    assert.ok(
      runSpan.spanContext().spanId,
      'Expected that runSpan has a defined spanId',
    );

    const databaseCreateSessionSpan = spans[0];
    assert.strictEqual(
      databaseCreateSessionSpan.name,
      'CloudSpanner.Database.createSession',
    );
    const multiplexedSessionCreateSessionSpan = spans[1];
    assert.strictEqual(
      multiplexedSessionCreateSessionSpan.name,
      'CloudSpanner.MultiplexedSession.createSession',
    );
    assert.ok(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      'Expecting a defined multiplexedSessionCreateSession traceId',
    );
    assert.deepStrictEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      databaseCreateSessionSpan.spanContext().traceId,
      'Expected the same traceId',
    );
    assert.deepStrictEqual(
      databaseCreateSessionSpan.parentSpanContext.spanId,
      multiplexedSessionCreateSessionSpan.spanContext().spanId,
      'Expected that multiplexedSession.createSession is the parent to db.creassionSession',
    );

    // Assert that despite all being exported, MultiplexedSession.createSession
    // is not in the same trace as runStream, createSessions is invoked at
    // Spanner Client instantiation, thus before database.run is invoked.
    assert.notEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      runSpan.spanContext().traceId,
      'Did not expect the same traceId',
    );

    // Finally check for the collective expected event names.
    const expectedEventNames = [
      ...createSessionEvents,
      'Starting stream',
      ...waitingSessionsEvents,
    ];
    assert.deepStrictEqual(
      actualEventNames,
      expectedEventNames,
      `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
    );
  }

  it('async/await correctly parents trace spans', async () => {
    // See https://github.com/googleapis/nodejs-spanner/issues/2146.
    async function main() {
      const instance = spanner.instance('testing');
      const database = instance.database('db-1');

      const query = {
        sql: selectSql,
      };

      const [rows] = await database.run(query);

      rows.forEach(row => {
        row.toJSON();
      });

      provider.forceFlush();
    }

    await main();
    assertAsyncAwaitExpectations();
  });

  it('callback correctly parents trace spans', done => {
    function main(onComplete) {
      const instance = spanner.instance('testing');
      const database = instance.database('db-1');

      const query = {
        sql: selectSql,
      };

      database.run(query, (err, rows) => {
        rows.forEach(row => {
          row.toJSON();
        });

        provider.forceFlush();
        onComplete();
      });
    }

    main(() => {
      assertAsyncAwaitExpectations();
      done();
    });
  });
});

describe('Negative cases', async () => {
  let server: grpc.Server;
  let spanner: Spanner;
  let spannerMock: mock.MockSpanner;
  let traceExporter: typeof InMemorySpanExporter;
  let provider: typeof NodeTracerProvider;
  let observabilityOptions: typeof ObservabilityOptions;
  let sandbox;

  const selectSql1p = 'SELECT 1p';
  const messageBadSelect1p = `Missing whitespace between literal and alias [at 1:9]
SELECT 1p
        ^`;
  const insertAlreadyExistentDataSql =
    "INSERT INTO Singers(firstName, SingerId) VALUES('Foo', 1)";
  const messageBadInsertAlreadyExistent =
    'Failed to insert row with primary key ({pk#SingerId:1}) due to previously existing row';

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    traceExporter = new InMemorySpanExporter();
    provider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      exporter: traceExporter,
      spanProcessors: [new SimpleSpanProcessor(traceExporter)],
    });

    observabilityOptions = {
      tracerProvider: provider,
      enableExtendedTracing: true,
    };
    const setupResult = await setup(observabilityOptions, sandbox);
    spanner = setupResult.spanner;
    server = setupResult.server;
    spannerMock = setupResult.spannerMock;

    const serverErr = {
      message: messageBadSelect1p,
      code: grpc.status.INVALID_ARGUMENT,
    } as mock.MockError;
    spannerMock.putStatementResult(
      selectSql1p,
      mock.StatementResult.error(serverErr),
    );

    const insertAlreadyExistentErr = {
      message: messageBadInsertAlreadyExistent,
      code: grpc.status.ALREADY_EXISTS,
    } as mock.MockError;
    spannerMock.putStatementResult(
      insertAlreadyExistentDataSql,
      mock.StatementResult.error(insertAlreadyExistentErr),
    );
  });

  afterEach(async () => {
    traceExporter.reset();
    provider.shutdown();
    spannerMock.resetRequests();
    spanner.close();
    server.tryShutdown(() => {});
    sandbox.restore();
  });

  function assertRunBadSyntaxExpectations() {
    traceExporter.forceFlush();
    const spans = traceExporter.getFinishedSpans();
    spans.sort((spanA, spanB) => {
      return spanA.startTime < spanB.startTime;
    });

    const actualSpanNames: string[] = [];
    const actualEventNames: string[] = [];
    spans.forEach(span => {
      actualSpanNames.push(span.name);
      span.events.forEach(event => {
        actualEventNames.push(event.name);
      });
    });

    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Snapshot.runStream',
      'CloudSpanner.Database.runStream',
      'CloudSpanner.Database.run',
    ];
    assert.deepStrictEqual(
      actualSpanNames,
      expectedSpanNames,
      `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
    );

    // We need to ensure a strict relationship between the spans.
    // runSpan -------------------|
    //     |-runStream ----------|
    const runStreamSpan = spans[spans.length - 2];
    const runSpan = spans[spans.length - 1];
    assert.ok(
      runSpan.spanContext().traceId,
      'Expected that runSpan has a defined traceId',
    );
    assert.ok(
      runStreamSpan.spanContext().traceId,
      'Expected that runStreamSpan has a defined traceId',
    );
    assert.deepStrictEqual(
      runStreamSpan.parentSpanContext.spanId,
      runSpan.spanContext().spanId,
      `Expected that runSpan(spanId=${runSpan.spanContext().spanId}) is the parent to runStreamSpan(parentSpanId=${runStreamSpan.parentSpanId})`,
    );
    assert.deepStrictEqual(
      runSpan.spanContext().traceId,
      runStreamSpan.spanContext().traceId,
      'Expected that both spans share a traceId',
    );
    assert.ok(
      runStreamSpan.spanContext().spanId,
      'Expected that runStreamSpan has a defined spanId',
    );
    assert.ok(
      runSpan.spanContext().spanId,
      'Expected that runSpan has a defined spanId',
    );

    const databaseCreateSessionSpan = spans[0];
    assert.strictEqual(
      databaseCreateSessionSpan.name,
      'CloudSpanner.Database.createSession',
    );
    const multiplexedSessionCreateSessionSpan = spans[1];
    assert.strictEqual(
      multiplexedSessionCreateSessionSpan.name,
      'CloudSpanner.MultiplexedSession.createSession',
    );
    assert.ok(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      'Expecting a defined multiplexedSessionCreateSession traceId',
    );
    assert.deepStrictEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      databaseCreateSessionSpan.spanContext().traceId,
      'Expected the same traceId',
    );
    assert.deepStrictEqual(
      databaseCreateSessionSpan.parentSpanContext.spanId,
      multiplexedSessionCreateSessionSpan.spanContext().spanId,
      'Expected that multiplexedSession.createSession is the parent to db.creassionSession',
    );

    // Assert that despite all being exported, MultiplexedSession.createSession
    // is not in the same trace as runStream, createSessions is invoked at
    // Spanner Client instantiation, thus before database.run is invoked.
    assert.notEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      runSpan.spanContext().traceId,
      'Did not expect the same traceId',
    );

    // Ensure that the last span has an error.
    assert.deepStrictEqual(
      runStreamSpan.status.code,
      SpanStatusCode.ERROR,
      'Expected an error status',
    );

    const want = '3 INVALID_ARGUMENT: ' + messageBadSelect1p;
    assert.deepStrictEqual(
      runStreamSpan.status.message,
      want,
      `Mismatched status message:\n\n\tGot:  '${runStreamSpan.status.message}'\n\tWant: '${want}'`,
    );

    // Finally check for the collective expected event names.
    const expectedEventNames = [
      ...createSessionEvents,
      'Starting stream',
      ...waitingSessionsEvents,
    ];
    assert.deepStrictEqual(
      actualEventNames,
      expectedEventNames,
      `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
    );
  }

  it('database.run with bad syntax: async/await', async () => {
    const instance = spanner.instance('instance');
    const database = instance.database('database');

    try {
      await database.run(selectSql1p);
    } catch (e) {
      // This catch is meant to ensure that we
      // can assert on the generated spans.
    } finally {
      provider.forceFlush();
    }

    assertRunBadSyntaxExpectations();
  });

  it('database.run with bad syntax: callback', done => {
    const instance = spanner.instance('instance');
    const database = instance.database('database');

    database.run(selectSql1p, err => {
      assert.ok(err);
      provider.forceFlush();
      assertRunBadSyntaxExpectations();
      done();
    });
  });

  function assertDatabaseRunPlusAwaitTransactionForAlreadyExistentData() {
    traceExporter.forceFlush();
    const spans = traceExporter.getFinishedSpans();
    spans.sort((spanA, spanB) => {
      return spanA.startTime < spanB.startTime;
    });

    const actualSpanNames: string[] = [];
    const actualEventNames: string[] = [];
    spans.forEach(span => {
      actualSpanNames.push(span.name);
      span.events.forEach(event => {
        actualEventNames.push(event.name);
      });
    });

    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Snapshot.runStream',
      'CloudSpanner.Snapshot.run',
      'CloudSpanner.Snapshot.begin',
      'CloudSpanner.Snapshot.begin',
      'CloudSpanner.Transaction.commit',
      'CloudSpanner.Transaction.commit',
      'CloudSpanner.Database.runTransactionAsync',
    ];
    assert.deepStrictEqual(
      actualSpanNames,
      expectedSpanNames,
      `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
    );
    const spanSnapshotRun = spans[3];
    assert.strictEqual(spanSnapshotRun.name, 'CloudSpanner.Snapshot.run');
    const wantSpanErr = '6 ALREADY_EXISTS: ' + messageBadInsertAlreadyExistent;
    assert.deepStrictEqual(
      spanSnapshotRun.status.code,
      SpanStatusCode.ERROR,
      'Unexpected status code',
    );
    assert.deepStrictEqual(
      spanSnapshotRun.status.message,
      wantSpanErr,
      'Unexpexcted error message',
    );

    const databaseCreateSessionSpan = spans[0];
    assert.strictEqual(
      databaseCreateSessionSpan.name,
      'CloudSpanner.Database.createSession',
    );
    const multiplexedSessionCreateSessionSpan = spans[1];
    assert.strictEqual(
      multiplexedSessionCreateSessionSpan.name,
      'CloudSpanner.MultiplexedSession.createSession',
    );
    assert.ok(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      'Expecting a defined multiplexedSessionCreateSession traceId',
    );
    assert.deepStrictEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      databaseCreateSessionSpan.spanContext().traceId,
      'Expected the same traceId',
    );
    assert.deepStrictEqual(
      databaseCreateSessionSpan.parentSpanContext.spanId,
      multiplexedSessionCreateSessionSpan.spanContext().spanId,
      'Expected that multiplexedSession.createSession is the parent to db.creassionSession',
    );

    // We need to ensure a strict relationship between the spans.
    // |-Database.runTransactionAsync |-------------------------------------|
    //   |-Snapshot.run                |------------------------|
    //      |-Snapshot.runStream           |---------------------|
    //   |-Transaction.commit                                 |--------|
    //      |-Snapshot.begin                                   |------|
    //       |-Snapshot.commit                                  |-----|
    const spanDatabaseRunTransactionAsync = spans[spans.length - 1];
    assert.deepStrictEqual(
      spanDatabaseRunTransactionAsync.name,
      'CloudSpanner.Database.runTransactionAsync',
      `${actualSpanNames}`,
    );
    const spanTransactionCommit0 = spans[spans.length - 2];
    assert.strictEqual(
      spanTransactionCommit0.name,
      'CloudSpanner.Transaction.commit',
    );
    assert.deepStrictEqual(
      spanTransactionCommit0.parentSpanContext.spanId,
      spanDatabaseRunTransactionAsync.spanContext().spanId,
      'Expected that Database.runTransaction is the parent to Transaction.commmit',
    );

    assert.deepStrictEqual(
      spanSnapshotRun.parentSpanContext.spanId,
      spanDatabaseRunTransactionAsync.spanContext().spanId,
      'Expected that Database.runTransaction is the parent to Snapshot.run',
    );

    // Assert that despite all being exported, MultiplexedSession.createSessions
    // is not in the same trace as runStream, createSessions is invoked at
    // Spanner Client instantiation, thus before database.run is invoked.
    assert.notEqual(
      multiplexedSessionCreateSessionSpan.spanContext().traceId,
      spanDatabaseRunTransactionAsync.spanContext().traceId,
      'Did not expect the same traceId',
    );

    // Finally check for the collective expected event names.
    const expectedEventNames = [
      ...createSessionEvents,
      'Starting stream',
      'Stream broken. Safe to retry',
      'Begin Transaction',
      'Transaction Creation Done',
      'Begin Transaction',
      'Transaction Creation Done',
      'Starting Commit',
      'Commit Done',
      ...waitingSessionsEvents,
      'exception',
    ];
    assert.deepStrictEqual(
      actualEventNames,
      expectedEventNames,
      `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
    );
  }

  it('database.runTransaction with async/await for INSERT with existent data + transaction.commit', async () => {
    const instance = spanner.instance('instance');
    const database = instance.database('database');

    const update = {
      sql: insertAlreadyExistentDataSql,
    };

    try {
      await database.runTransactionAsync(async transaction => {
        try {
          await transaction!.run(update);
        } finally {
          await transaction!.commit();
        }
      });
    } catch (e) {
      assert.strictEqual(
        (e as grpc.ServiceError).code,
        grpc.status.ALREADY_EXISTS,
      );
    }

    provider.forceFlush();
    assertDatabaseRunPlusAwaitTransactionForAlreadyExistentData();
  });
});

describe('Traces for ExecuteStream broken stream retries', () => {
  let sandbox: sinon.SinonSandbox;
  const selectSql = 'SELECT NUM, NAME FROM NUMBERS';
  const select1 = 'SELECT 1';
  const invalidSql = 'SELECT * FROM FOO';
  const insertSql = "INSERT INTO NUMBER (NUM, NAME) VALUES (4, 'Four')";
  const selectAllTypes = 'SELECT * FROM TABLE_WITH_ALL_TYPES';
  const insertSqlForAllTypes = `INSERT INTO TABLE_WITH_ALL_TYPES(
        COLBOOL, COLINT64, COLFLOAT64, COLNUMERIC, COLSTRING, COLBYTES, COLJSON, COLDATE, COLTIMESTAMP
  ) VALUES (
        @bool, @int64, @float64, @numeric, @string, @bytes, @json, @date, @timestamp
  )`;
  const updateSql = "UPDATE NUMBER SET NAME='Unknown' WHERE NUM IN (5, 6)";
  const fooNotFoundErr = Object.assign(new Error('Table FOO not found'), {
    code: grpc.status.NOT_FOUND,
  });
  const server = new grpc.Server();
  const spannerMock = mock.createMockSpanner(server);
  mockInstanceAdmin.createMockInstanceAdmin(server);
  mockDatabaseAdmin.createMockDatabaseAdmin(server);
  let port: number;
  let spanner: Spanner;
  let instance: Instance;
  let dbCounter = 1;

  const traceExporter = new InMemorySpanExporter();
  const tracerProvider = new NodeTracerProvider({
    sampler: new AlwaysOnSampler(),
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  function newTestDatabase(): Database {
    return instance.database(`database-${dbCounter++}`);
  }

  before(async () => {
    sandbox = sinon.createSandbox();
    port = await new Promise((resolve, reject) => {
      server.bindAsync(
        '0.0.0.0:0',
        grpc.ServerCredentials.createInsecure(),
        (err, assignedPort) => {
          if (err) {
            reject(err);
          } else {
            resolve(assignedPort);
          }
        },
      );
    });
    spannerMock.putStatementResult(
      selectSql,
      mock.StatementResult.resultSet(mock.createSimpleResultSet()),
    );
    spannerMock.putStatementResult(
      select1,
      mock.StatementResult.resultSet(mock.createSelect1ResultSet()),
    );
    spannerMock.putStatementResult(
      selectAllTypes,
      mock.StatementResult.resultSet(mock.createResultSetWithAllDataTypes()),
    );
    spannerMock.putStatementResult(
      invalidSql,
      mock.StatementResult.error(fooNotFoundErr),
    );
    spannerMock.putStatementResult(
      insertSql,
      mock.StatementResult.updateCount(1),
    );
    spannerMock.putStatementResult(
      insertSqlForAllTypes,
      mock.StatementResult.updateCount(1),
    );
    spannerMock.putStatementResult(
      updateSql,
      mock.StatementResult.updateCount(2),
    );

    const observabilityOptions: typeof ObservabilityOptions = {
      tracerProvider: tracerProvider,
      enableExtendedTracing: true,
    };
    spanner = new Spanner({
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      observabilityOptions: observabilityOptions,
    });
    // Gets a reference to a Cloud Spanner instance and database
    instance = spanner.instance('instance');
  });

  after(() => {
    spanner.close();
    server.tryShutdown(() => {});
    sandbox.restore();
  });

  beforeEach(async () => {
    spannerMock.resetRequests();
    spannerMock.removeExecutionTimes();
    await tracerProvider.forceFlush();
    await traceExporter.forceFlush();
    await traceExporter.reset();
  });

  describe('PartialResultStream', () => {
    beforeEach(() => {
      traceExporter.reset();
    });
    const streamIndexes = [1, 2];
    streamIndexes.forEach(index => {
      it('should retry UNAVAILABLE during streaming', async () => {
        const database = newTestDatabase();
        const err = {
          message: 'Temporary unavailable',
          code: grpc.status.UNAVAILABLE,
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        const [rows] = await database.run(selectSql);
        assert.strictEqual(rows.length, 3);
        await database.close();
      });

      it('should retry UNAVAILABLE during streaming with txn ID from inline begin response', async () => {
        const err = {
          message: 'Temporary unavailable',
          code: grpc.status.UNAVAILABLE,
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        const database = newTestDatabase();

        await database.runTransactionAsync(async tx => {
          await tx.run(selectSql);
          await tx.commit();
        });
        await database.close();

        const requests = spannerMock
          .getRequests()
          .filter(val => (val as v1.ExecuteSqlRequest).sql)
          .map(req => req as v1.ExecuteSqlRequest);
        assert.strictEqual(requests.length, 2);
        assert.ok(
          requests[0].transaction?.begin!.readWrite,
          'inline txn is not set.',
        );
        assert.ok(
          requests[1].transaction!.id,
          'Transaction ID is not used for retries.',
        );
        assert.ok(
          requests[1].resumeToken,
          'Resume token is not set for the retried',
        );
      });

      it('should retry UNAVAILABLE during streaming with txn ID from inline begin response with parallel queries', async () => {
        const err = {
          message: 'Temporary unavailable',
          code: grpc.status.UNAVAILABLE,
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        const database = newTestDatabase();

        await database.runTransactionAsync(async tx => {
          const [rows1, rows2] = await Promise.all([
            tx!.run(selectSql),
            tx!.run(selectSql),
          ]);
          assert.equal(rows1.length, 3);
          assert.equal(rows2.length, 3);
          await tx.commit();
        });
        await database.close();

        const requests = spannerMock
          .getRequests()
          .filter(val => (val as v1.ExecuteSqlRequest).sql)
          .map(req => req as v1.ExecuteSqlRequest);
        assert.strictEqual(requests.length, 3);
        assert.ok(
          requests[0].transaction?.begin!.readWrite,
          'inline txn is not set.',
        );
        assert.ok(
          requests[1].transaction!.id,
          'Transaction ID is not used for retries.',
        );
        assert.ok(
          requests[1].resumeToken,
          'Resume token is not set for the retried',
        );
        const commitRequests = spannerMock
          .getRequests()
          .filter(val => (val as v1.CommitRequest).mutations)
          .map(req => req as v1.CommitRequest);
        assert.strictEqual(commitRequests.length, 1);
        assert.deepStrictEqual(
          requests[1].transaction!.id,
          requests[2].transaction!.id,
        );
        assert.deepStrictEqual(
          requests[1].transaction!.id,
          commitRequests[0].transactionId,
        );
        const beginTxnRequests = spannerMock
          .getRequests()
          .filter(val => (val as v1.BeginTransactionRequest).options?.readWrite)
          .map(req => req as v1.BeginTransactionRequest);
        assert.deepStrictEqual(beginTxnRequests.length, 0);
      });

      it('should not retry non-retryable error during streaming', async () => {
        const database = newTestDatabase();
        const err = {
          message: 'Test error',
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        try {
          await database.run(selectSql);
          assert.fail('missing expected error');
        } catch (e) {
          assert.strictEqual(
            (e as grpc.ServiceError).message,
            '2 UNKNOWN: Test error',
          );
        }
        await database.close();
      });

      it('should retry UNAVAILABLE during streaming with a callback', done => {
        const database = newTestDatabase();
        const err = {
          message: 'Temporary unavailable',
          code: grpc.status.UNAVAILABLE,
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        database.run(selectSql, (err, rows) => {
          assert.ifError(err);
          assert.strictEqual(rows!.length, 3);
          database
            .close()
            .then(() => done())
            .catch(err => done(err));
        });
      });

      it('should not retry non-retryable error during streaming with a callback', done => {
        const database = newTestDatabase();
        const err = {
          message: 'Non-retryable error',
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        database.run(selectSql, err => {
          assert.ok(err, 'Missing expected error');
          assert.strictEqual(err!.message, '2 UNKNOWN: Non-retryable error');
          database
            .close()
            .then(() => done())
            .catch(err => done(err));
        });
      });

      it('should emit non-retryable error during streaming to stream', done => {
        const database = newTestDatabase();

        const err = {
          message: 'Non-retryable error',
          streamIndex: index,
        } as mock.MockError;
        spannerMock.setExecutionTime(
          spannerMock.executeStreamingSql,
          mock.SimulatedExecutionTime.ofError(err),
        );
        const receivedRows: Row[] = [];
        database
          .runStream(selectSql)
          // We will receive data for the partial result sets that are
          // returned before the error occurs.
          .on('data', row => {
            receivedRows.push(row);
          })
          .on('end', () => {
            assert.fail('Missing expected error');
          })
          .on('error', err => {
            assert.strictEqual(err.message, '2 UNKNOWN: Non-retryable error');
            database
              .close()
              .then(() => {
                traceExporter.forceFlush();
                const spans = traceExporter.getFinishedSpans();
                spans.sort((spanA, spanB) => {
                  return spanA.startTime < spanB.startTime;
                });

                const actualSpanNames: string[] = [];
                const actualEventNames: string[] = [];
                spans.forEach(span => {
                  actualSpanNames.push(span.name);
                  span.events.forEach(event => {
                    actualEventNames.push(event.name);
                  });
                });

                const expectedSpanNames = [
                  'CloudSpanner.Database.createSession',
                  'CloudSpanner.MultiplexedSession.createSession',
                  'CloudSpanner.Snapshot.runStream',
                  'CloudSpanner.Database.runStream',
                ];
                assert.deepStrictEqual(
                  actualSpanNames,
                  expectedSpanNames,
                  `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
                );

                // Finally check for the collective expected event names.
                const expectedEventNames = [
                  ...createSessionEvents,
                  'Starting stream',
                  'Transaction Creation Done',
                  ...waitingSessionsEvents,
                ];
                assert.deepStrictEqual(
                  actualEventNames,
                  expectedEventNames,
                  `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
                );

                done();
              })
              .catch(err => done(err));
          });
      });
    });
  });

  it('should retry UNAVAILABLE from executeStreamingSql with multiple errors during streaming', async () => {
    const database = newTestDatabase();
    const errors: mock.MockError[] = [];
    for (const index of [0, 1, 1, 2, 2]) {
      errors.push({
        message: 'Temporary unavailable',
        code: grpc.status.UNAVAILABLE,
        streamIndex: index,
      } as mock.MockError);
    }
    spannerMock.setExecutionTime(
      spannerMock.executeStreamingSql,
      mock.SimulatedExecutionTime.ofErrors(errors),
    );
    const [rows] = await database.run(selectSql);
    assert.strictEqual(rows.length, 3);
    await database.close();

    traceExporter.forceFlush();
    const spans = traceExporter.getFinishedSpans();
    spans.sort((spanA, spanB) => {
      return spanA.startTime < spanB.startTime;
    });

    const actualSpanNames: string[] = [];
    const actualEventNames: string[] = [];
    spans.forEach(span => {
      actualSpanNames.push(span.name);
      span.events.forEach(event => {
        actualEventNames.push(event.name);
      });
    });

    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Snapshot.runStream',
      'CloudSpanner.Database.runStream',
      'CloudSpanner.Database.run',
    ];
    assert.deepStrictEqual(
      actualSpanNames,
      expectedSpanNames,
      `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
    );

    // Finally check for the collective expected event names.
    const expectedEventNames = [
      ...createSessionEvents,
      'Starting stream',
      'Re-attempting start stream',
      'Resuming stream',
      'Resuming stream',
      'Resuming stream',
      'Resuming stream',
      ...waitingSessionsEvents,
    ];
    assert.deepStrictEqual(
      actualEventNames,
      expectedEventNames,
      `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
    );
  });

  it('should retry UNAVAILABLE on update', async () => {
    const database = newTestDatabase();
    const err = {
      message: 'Temporary unavailable',
      code: grpc.status.UNAVAILABLE,
    } as mock.MockError;
    spannerMock.setExecutionTime(
      spannerMock.executeStreamingSql,
      mock.SimulatedExecutionTime.ofError(err),
    );

    await database.runTransactionAsync(async tx => {
      const [updateCount] = await tx!.runUpdate(insertSql);
      assert.strictEqual(updateCount, 1);
      await tx!.commit();
    });
    await database.close();

    // The span for a successful invocation of database.runTransaction
    // can only be ended after the calling function is completed.
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

    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Snapshot.runStream',
      'CloudSpanner.Snapshot.run',
      'CloudSpanner.Dml.runUpdate',
      'CloudSpanner.Snapshot.begin',
      'CloudSpanner.Transaction.commit',
      'CloudSpanner.Transaction.commit',
      'CloudSpanner.Database.runTransactionAsync',
    ];
    assert.deepStrictEqual(
      actualSpanNames,
      expectedSpanNames,
      `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
    );

    // Finally check for the collective expected event names.
    const expectedEventNames = [
      ...createSessionEvents,
      'Starting stream',
      'Re-attempting start stream',
      'Begin Transaction',
      'Transaction Creation Done',
      'Starting Commit',
      'Commit Done',
      ...waitingSessionsEvents,
    ];
    assert.deepStrictEqual(
      actualEventNames,
      expectedEventNames,
      `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
    );
  });

  it('should not retry non-retryable error on update', async () => {
    const database = newTestDatabase();
    const err = {
      message: 'Permanent error',
      // We need to specify a non-retryable error code to prevent the entire
      // transaction to retry. Not specifying an error code, will result in
      // an error with code UNKNOWN, which again will retry the transaction.
      code: grpc.status.INVALID_ARGUMENT,
    } as mock.MockError;
    spannerMock.setExecutionTime(
      spannerMock.executeStreamingSql,
      mock.SimulatedExecutionTime.ofError(err),
    );
    let attempts = 0;

    await database.runTransactionAsync(async tx => {
      attempts++;
      await tx!.runUpdate(insertSql, err => {
        assert.ok(err, 'Missing expected error');
        assert.strictEqual(err!.code, grpc.status.INVALID_ARGUMENT);
        assert.strictEqual(attempts, 1);
        tx!
          .commit()
          .then(() => {
            database.close().catch(assert.ifError);
          })
          .catch(assert.ifError);
      });
    });
    assert.deepStrictEqual(
      attempts,
      1,
      'runTransactionAsync.attempt must be 1',
    );
    const expectedSpanNames = [
      'CloudSpanner.Database.createSession',
      'CloudSpanner.MultiplexedSession.createSession',
      'CloudSpanner.Database.runTransactionAsync',
    ];

    const expectedEventNames = [
      ...createSessionEvents,
      ...waitingSessionsEvents,
    ];
    await verifySpansAndEvents(
      traceExporter,
      expectedSpanNames,
      expectedEventNames,
    );
  });
});

describe('End to end tracing headers', () => {
  let sandbox;
  let server: grpc.Server;
  let spanner: Spanner;
  let spannerMock: mock.MockSpanner;
  let observabilityOptions: typeof ObservabilityOptions;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    observabilityOptions = {
      enableEndToEndTracing: true,
    };

    const setupResult = await setup(observabilityOptions, sandbox);
    spanner = setupResult.spanner;
    server = setupResult.server;
    spannerMock = setupResult.spannerMock;
  });

  afterEach(async () => {
    spannerMock.resetRequests();
    spanner.close();
    server.tryShutdown(() => {});
    sandbox.restore();
  });

  it('run', async () => {
    const instance = spanner.instance('instance');
    const database = instance.database('database');
    let txn;
    try {
      [txn] = await database.getTransaction();
      await txn.run('SELECT 1');
      let metadataCountWithE2EHeader = 0;
      let metadataCountWithTraceParent = 0;
      spannerMock.getMetadata().forEach(metadata => {
        if (metadata.get(END_TO_END_TRACING_HEADER)[0] !== undefined) {
          metadataCountWithE2EHeader++;
          assert.strictEqual(
            metadata.get(END_TO_END_TRACING_HEADER)[0],
            'true',
          );
        }
        if (metadata.get('traceparent')[0] !== undefined) {
          metadataCountWithTraceParent++;
        }
      });

      // Create Session for multiplexed session(default) and Select 1 request.
      assert.strictEqual(spannerMock.getRequests().length, 2);
      assert.strictEqual(metadataCountWithE2EHeader, 2);
      assert.strictEqual(metadataCountWithTraceParent, 2);
    } catch (err) {
      assert.ifError(err);
    } finally {
      txn.end();
    }
  });
});

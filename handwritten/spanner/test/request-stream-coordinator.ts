// Copyright 2026 Google LLC
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

import * as sinon from 'sinon';
import * as assert from 'assert';
import {EventEmitter} from 'events';
import * as through from 'through2';
import * as streamEvents from 'stream-events';
import {CancellableStream, grpc} from 'google-gax';
import {status as Status} from '@grpc/grpc-js';
import * as mock from './mockserver/mockspanner';
import {Database, Instance, Spanner} from '../src';
import {RequestStreamCoordinator} from '../src/request-stream-coordinator';
import {MetricsTracer} from '../src/metrics/metrics-tracer';
import {MetricsTracerFactory} from '../src/metrics/metrics-tracer-factory';
import {MetricReader} from '@opentelemetry/sdk-metrics';
import {
  METRIC_NAME_OPERATION_COUNT,
  METRIC_NAME_ATTEMPT_COUNT,
} from '../src/metrics/constants';

describe('RequestStreamCoordinator', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  function createMockTracer(): MetricsTracer {
    return {
      recordOperationStart: sandbox.spy(),
      recordOperationCompletion: sandbox.spy(),
      recordAttemptStart: sandbox.spy(),
      recordAttemptCompletion: sandbox.spy(),
    } as unknown as MetricsTracer;
  }

  function createMockCallStream(): CancellableStream {
    const emitter = new EventEmitter();
    const callStream = Object.assign(emitter, {
      cancel: sandbox.spy(),
      destroy: sandbox.spy(),
      pipe: sandbox.spy((destination: unknown) => destination),
      destroyed: false,
    });
    return callStream as unknown as CancellableStream;
  }

  it('should initialize and register destroy, finish, and close listeners on setup', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);

    coordinator.setup();

    assert.strictEqual(stream.listenerCount('finish'), 1);
    assert.strictEqual(stream.listenerCount('close'), 1);
  });

  it('should cancel active callStream when stream is destroyed early', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    stream.destroy();

    assert.strictEqual(
      (callStream.cancel as sinon.SinonSpy).calledOnce,
      true,
      'callStream.cancel should be called once on early destroy',
    );
    assert.strictEqual(
      (callStream.destroy as sinon.SinonSpy).calledOnce,
      true,
      'callStream.destroy should be called once on early destroy',
    );
  });

  it('should NOT cancel callStream if streamFinished is true (normal completion)', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    // Simulate normal stream finish (all data written to stream)
    coordinator.handleStreamFinish();

    assert.strictEqual(
      (callStream.cancel as sinon.SinonSpy).called,
      false,
      'callStream.cancel should NOT be called after normal finish',
    );
  });

  it('should NOT cancel callStream if status was already received (e.g. background draining)', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    // Status arrives from Spanner (OK)
    callStream.emit('status', {code: Status.OK, details: 'OK'});

    // Subsequent stream destruction (e.g. GC or caller teardown)
    stream.destroy();

    assert.strictEqual(
      (callStream.cancel as sinon.SinonSpy).called,
      false,
      'callStream.cancel must NOT be called when status is already received',
    );
  });

  it('should pipe callStream to stream and forward errors', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    assert.strictEqual(
      (callStream.pipe as sinon.SinonSpy).calledWith(stream),
      true,
    );

    const testError = new Error('test-stream-error');
    stream.on('error', error => {
      assert.strictEqual(error, testError);
      done();
    });

    callStream.emit('error', testError);
  });

  it('should not call requestFn if stream is destroyed before preparation finishes', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    stream.destroy();

    const requestFn = sandbox.spy(() => createMockCallStream());
    coordinator.attachRequestFn(requestFn);

    assert.strictEqual(requestFn.called, false);
    assert.strictEqual(
      (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
      true,
    );
  });

  it('should invoke requestFn and attach callStream if stream is active', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    const requestFn = sandbox.spy(() => callStream);
    coordinator.attachRequestFn(requestFn);

    assert.strictEqual(requestFn.calledOnce, true);
    assert.strictEqual(
      (callStream.pipe as sinon.SinonSpy).calledWith(stream),
      true,
    );
  });

  it('should handle requestFn errors by destroying stream and completing operation', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const preparationError = new Error('failed-preparation');
    const requestFn = () => {
      throw preparationError;
    };

    stream.on('error', error => {
      assert.strictEqual(error, preparationError);
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
      );
      done();
    });

    coordinator.attachRequestFn(requestFn);
  });

  it('should handle requestFn returning null by destroying stream and completing operation', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestFn = () => null as any;

    stream.on('error', error => {
      assert.strictEqual(error.message, 'Failed to initialize request stream.');
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
      );
      done();
    });

    coordinator.attachRequestFn(requestFn);
  });

  it('should handle preparation error directly via handleRequestError', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const preparationError = new Error('gapic-prep-error');

    stream.on('error', error => {
      assert.strictEqual(error, preparationError);
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
      );
      done();
    });

    coordinator.handleRequestError(preparationError);
  });

  it('should defer operation completion on close until status is received when callStream is in flight', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    // Close the user-facing stream early
    coordinator.handleStreamClose();

    // Because callStream is still in-flight without status, operation completion should NOT have run yet
    assert.strictEqual(
      (tracer.recordOperationCompletion as sinon.SinonSpy).called,
      false,
      'Operation completion should be deferred while gRPC call is in flight',
    );

    // Once status arrives on callStream:
    callStream.emit('status', {code: Status.CANCELLED, details: 'Cancelled'});

    assert.strictEqual(
      (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
      true,
      'Operation completion should be called after status is received',
    );
    done();
  });

  it('should be idempotent and not call recordOperationCompletion multiple times', () => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);

    coordinator.completeOperation();
    coordinator.completeOperation();
    coordinator.completeOperation();

    assert.strictEqual(
      (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
      true,
      'recordOperationCompletion must only be called once',
    );
  });

  it('should not emit unhandled error if callStream emits error after stream is destroyed', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    // Caller destroys the stream (e.g. break from for-await)
    stream.destroy();

    // Later gRPC emits a cancellation error
    assert.doesNotThrow(() => {
      callStream.emit('error', new Error('1 CANCELLED: Cancelled on client'));
    });

    setImmediate(done);
  });

  it('should complete operation when callStream emits close without status', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    coordinator.handleStreamClose();

    callStream.emit('close');

    setImmediate(() => {
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
        'Operation completion should be called on close',
      );
      done();
    });
  });

  it('should complete operation when callStream emits error without status', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    coordinator.handleStreamClose();

    callStream.emit('error', new Error('Connection reset'));

    setImmediate(() => {
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
        'Operation completion should be called on error',
      );
      done();
    });
  });

  it('should complete operation metric even if removeAllListeners was called before destroy', done => {
    const stream = streamEvents(through.obj());
    const tracer = createMockTracer();
    const coordinator = new RequestStreamCoordinator(stream, tracer);
    coordinator.setup();

    const callStream = createMockCallStream();
    coordinator.attachCallStream(callStream);

    // Emulate transaction.ts retry/error cleanup:
    stream.removeAllListeners();
    stream.on('error', () => {});
    stream.destroy();

    assert.strictEqual(
      (callStream.cancel as sinon.SinonSpy).calledOnce,
      true,
      'callStream.cancel should be called on stream destroy',
    );

    // Status arrives on gRPC stream
    callStream.emit('status', {code: Status.CANCELLED, details: 'Cancelled'});

    setImmediate(() => {
      assert.strictEqual(
        (tracer.recordOperationCompletion as sinon.SinonSpy).calledOnce,
        true,
        'Operation completion must still be recorded after removeAllListeners',
      );
      done();
    });
  });
});

describe('RequestStreamCoordinator with in-memory mock Spanner server', () => {
  let mockSandbox: sinon.SinonSandbox;
  const server = new grpc.Server();
  const spannerMock = mock.createMockSpanner(server);
  const PROJECT_ID = 'test-project';
  const SELECT_LARGE_SQL = 'SELECT * FROM NUMBERS';
  const SELECT_SINGLE_ROW_SQL = 'SELECT 1';
  let port: number;
  let spanner: Spanner;
  let instance: Instance;
  let database: Database;
  let databaseCounter = 0;
  let reader: InMemoryMetricReader;
  let factory: MetricsTracerFactory | null;

  class InMemoryMetricReader extends MetricReader {
    protected async onForceFlush(): Promise<void> {}
    protected async onShutdown(): Promise<void> {}
  }

  function getMetricDataPoints(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resourceMetrics: any,
    metricName: string,
  ): Array<{attributes: Record<string, string>; value: number}> {
    const matchingMetrics = resourceMetrics.scopeMetrics.flatMap(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (scopeMetric: any) =>
        scopeMetric.metrics.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (metric: any) => metric.descriptor.name === metricName,
        ),
    );
    if (matchingMetrics.length === 0) {
      return [];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return matchingMetrics[0].dataPoints.map((dataPoint: any) => ({
      attributes: dataPoint.attributes,
      value:
        typeof dataPoint.value === 'number'
          ? dataPoint.value
          : (dataPoint.value?.count ?? 0),
    }));
  }

  function findDataPoint(
    dataPoints: Array<{attributes: Record<string, string>; value: number}>,
    method: string,
    status: string,
  ) {
    return dataPoints.find(
      dataPoint =>
        dataPoint.attributes.method === method &&
        dataPoint.attributes.status === status,
    );
  }

  before(async () => {
    mockSandbox = sinon.createSandbox();
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
      SELECT_LARGE_SQL,
      mock.StatementResult.resultSet(mock.createLargeResultSet()),
    );
    spannerMock.putStatementResult(
      SELECT_SINGLE_ROW_SQL,
      mock.StatementResult.resultSet(mock.createSelect1ResultSet()),
    );

    mockSandbox
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('test-location');

    await MetricsTracerFactory.resetInstance();
    MetricsTracerFactory.enabled = true;

    spanner = new Spanner({
      projectId: PROJECT_ID,
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (spanner as any)._metricsEnabled = true;
    instance = spanner.instance('instance');
  });

  after(async () => {
    await spanner.close();
    server.forceShutdown();
    mockSandbox.restore();
    await MetricsTracerFactory.resetInstance();
    MetricsTracerFactory.enabled = false;
  });

  beforeEach(async function () {
    this.timeout(50000);
    spannerMock.resetRequests();
    spannerMock.removeExecutionTimes();
    database = instance.database(`mock-db-${++databaseCounter}`);

    MetricsTracerFactory.enabled = true;
    factory = MetricsTracerFactory.getInstance(PROJECT_ID);
    await factory!.resetMeterProvider();
    reader = new InMemoryMetricReader();
    factory!.getMeterProvider([reader]);
  });

  afterEach(async () => {
    await factory?.resetMeterProvider();
    await MetricsTracerFactory.resetInstance();
  });

  async function waitForMetrics(
    metricReader: MetricReader,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    predicate: (resourceMetrics: any) => boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    for (let iteration = 0; iteration < 30; iteration++) {
      const {resourceMetrics} = await metricReader.collect();
      if (predicate(resourceMetrics)) {
        return resourceMetrics;
      }
      await new Promise(resolve => setImmediate(resolve));
    }
    const {resourceMetrics} = await metricReader.collect();
    return resourceMetrics;
  }

  it('should record CANCELLED for attempt and operation when stream is cancelled early', async () => {
    const config = {
      client: 'SpannerClient',
      method: 'executeStreamingSql',
      reqOpts: {
        session: `projects/${PROJECT_ID}/instances/instance/databases/mock-db-${databaseCounter}/sessions/session-1`,
        sql: SELECT_LARGE_SQL,
      },
    };
    const stream = spanner.requestStream(config);

    await new Promise<void>((resolve, reject) => {
      stream.on('data', () => {
        stream.destroy();
      });
      stream.on('close', () => {
        setImmediate(resolve);
      });
      stream.on('error', reject);
    });

    const resourceMetrics = await waitForMetrics(reader, resMetrics => {
      const attemptPoints = getMetricDataPoints(
        resMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      return attemptPoints.some(
        dataPoint =>
          dataPoint.attributes.method === 'executeStreamingSql' &&
          dataPoint.attributes.status === 'CANCELLED',
      );
    });

    const attemptPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_ATTEMPT_COUNT,
    );
    const operationPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_OPERATION_COUNT,
    );

    const attemptCancelled = findDataPoint(
      attemptPoints,
      'executeStreamingSql',
      'CANCELLED',
    );
    const operationCancelled = findDataPoint(
      operationPoints,
      'executeStreamingSql',
      'CANCELLED',
    );

    assert.ok(
      attemptCancelled,
      'Expected executeStreamingSql attempt with status CANCELLED',
    );
    assert.strictEqual(attemptCancelled?.value, 1);

    assert.ok(
      operationCancelled,
      'Expected executeStreamingSql operation with status CANCELLED',
    );
    assert.strictEqual(operationCancelled?.value, 1);

    const operationUnknown = findDataPoint(
      operationPoints,
      'executeStreamingSql',
      'UNKNOWN',
    );
    assert.strictEqual(
      operationUnknown,
      undefined,
      'Must NOT record UNKNOWN status for cancelled operation',
    );
  });

  it('should record OK for attempt and operation when stream drains to completion', async () => {
    const stream = database.runStream(SELECT_LARGE_SQL);
    let rowCount = 0;

    await new Promise<void>((resolve, reject) => {
      stream.on('data', () => {
        rowCount++;
      });
      stream.on('end', () => {
        setImmediate(resolve);
      });
      stream.on('error', reject);
    });

    assert.ok(rowCount > 0, 'Expected to receive rows from stream');

    const {resourceMetrics} = await reader.collect();
    const attemptPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_ATTEMPT_COUNT,
    );
    const operationPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_OPERATION_COUNT,
    );

    const attemptOk = findDataPoint(attemptPoints, 'executeStreamingSql', 'OK');
    const operationOk = findDataPoint(
      operationPoints,
      'executeStreamingSql',
      'OK',
    );

    assert.ok(attemptOk, 'Expected executeStreamingSql attempt with status OK');
    assert.strictEqual(attemptOk?.value, 1);

    assert.ok(
      operationOk,
      'Expected executeStreamingSql operation with status OK',
    );
    assert.strictEqual(operationOk?.value, 1);

    const attemptCancelled = findDataPoint(
      attemptPoints,
      'executeStreamingSql',
      'CANCELLED',
    );
    assert.strictEqual(
      attemptCancelled,
      undefined,
      'Must NOT record CANCELLED status when stream drains normally',
    );
  });

  it('should record OK when query completes via single-chunk fast-path', async () => {
    const [rows] = await database.run(SELECT_SINGLE_ROW_SQL);
    assert.strictEqual(rows.length, 1);

    // Yield to let background trailer draining complete
    await new Promise(resolve => setImmediate(resolve));

    const {resourceMetrics} = await reader.collect();
    const attemptPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_ATTEMPT_COUNT,
    );
    const operationPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_OPERATION_COUNT,
    );

    const attemptOk = findDataPoint(attemptPoints, 'executeStreamingSql', 'OK');
    const operationOk = findDataPoint(
      operationPoints,
      'executeStreamingSql',
      'OK',
    );

    assert.ok(
      attemptOk,
      'Expected executeStreamingSql attempt with status OK on fast path',
    );
    assert.strictEqual(attemptOk?.value, 1);

    assert.ok(
      operationOk,
      'Expected executeStreamingSql operation with status OK on fast path',
    );
    assert.strictEqual(operationOk?.value, 1);

    const attemptCancelled = findDataPoint(
      attemptPoints,
      'executeStreamingSql',
      'CANCELLED',
    );
    assert.strictEqual(
      attemptCancelled,
      undefined,
      'Fast path must not record CANCELLED',
    );
  });

  it('should not cancel or overwrite status if stream is destroyed after completion', async () => {
    const stream = database.runStream(SELECT_LARGE_SQL);

    await new Promise<void>((resolve, reject) => {
      stream.on('data', () => {});
      stream.on('end', () => resolve());
      stream.on('error', reject);
    });

    // Stream has ended normally. Calling destroy now (e.g. GC or caller teardown)
    stream.destroy();

    await new Promise(resolve => setImmediate(resolve));

    const {resourceMetrics} = await reader.collect();
    const attemptPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_ATTEMPT_COUNT,
    );

    const attemptCancelled = findDataPoint(
      attemptPoints,
      'executeStreamingSql',
      'CANCELLED',
    );
    assert.strictEqual(
      attemptCancelled,
      undefined,
      'Post-completion destroy must NOT mark call as CANCELLED',
    );

    const attemptOk = findDataPoint(attemptPoints, 'executeStreamingSql', 'OK');
    assert.ok(attemptOk, 'Attempt status should remain OK');
  });

  it('should handle immediate destruction before stream begins reading', async () => {
    const config = {
      client: 'SpannerClient',
      method: 'executeStreamingSql',
      reqOpts: {
        session: `projects/${PROJECT_ID}/instances/instance/databases/mock-db-${databaseCounter}/sessions/session-1`,
        sql: SELECT_LARGE_SQL,
      },
    };
    const stream = spanner.requestStream(config);

    // Destroy immediately before any 'reading' event occurs
    stream.destroy();

    await new Promise(resolve => setImmediate(resolve));

    const {resourceMetrics} = await reader.collect();
    const attemptPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_ATTEMPT_COUNT,
    );
    const operationPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_OPERATION_COUNT,
    );

    // Operation completed on close, but zero attempts were made
    assert.strictEqual(
      attemptPoints.length,
      0,
      'No attempts should have been made',
    );
    assert.strictEqual(
      operationPoints.length,
      1,
      'Operation should be finalized',
    );
  });

  it('should cleanly cancel without unhandled error when consumer breaks out of loop', async () => {
    const config = {
      client: 'SpannerClient',
      method: 'executeStreamingSql',
      reqOpts: {
        session: `projects/${PROJECT_ID}/instances/instance/databases/mock-db-${databaseCounter}/sessions/session-1`,
        sql: SELECT_LARGE_SQL,
      },
    };
    const stream = spanner.requestStream(config);

    // Consume first chunk and break immediately without attaching an error listener
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _ of stream) {
      break;
    }

    const resourceMetrics = await waitForMetrics(reader, resMetrics => {
      const attemptPoints = getMetricDataPoints(
        resMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      return attemptPoints.some(
        dataPoint =>
          dataPoint.attributes.method === 'executeStreamingSql' &&
          dataPoint.attributes.status === 'CANCELLED',
      );
    });

    const operationPoints = getMetricDataPoints(
      resourceMetrics,
      METRIC_NAME_OPERATION_COUNT,
    );
    const operationCancelled = findDataPoint(
      operationPoints,
      'executeStreamingSql',
      'CANCELLED',
    );
    assert.ok(
      operationCancelled,
      'Expected executeStreamingSql operation with status CANCELLED on loop break',
    );
    assert.strictEqual(operationCancelled?.value, 1);
  });
});

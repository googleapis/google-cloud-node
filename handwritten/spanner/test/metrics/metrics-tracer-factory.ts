// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  MeterProvider,
  MetricReader,
  PeriodicExportingMetricReader,
  ResourceMetrics,
} from '@opentelemetry/sdk-metrics';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {gcpDetector} from '@opentelemetry/resource-detector-gcp';
import * as Constants from '../../src/metrics/constants';
import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
import {transformResourceMetricToTimeSeriesArray} from '../../src/metrics/transform';
import {CloudMonitoringMetricsExporter} from '../../src/metrics/spanner-metrics-exporter';
import {Spanner} from '../../src';

describe('MetricsTracerFactory', () => {
  let sandbox: sinon.SinonSandbox;
  let mockExporter: CloudMonitoringMetricsExporter;
  let recordAttemptLatencyStub: sinon.SinonStub;
  let addAttemptCounterStub: sinon.SinonStub;
  let recordOperationLatencyStub: sinon.SinonStub;
  let addOperationCounterStub: sinon.SinonStub;
  let recordGfeLatencyStub: sinon.SinonStub;
  let addGfeConnectivityErrorCountStub: sinon.SinonStub;

  before(() => {
    sandbox = sinon.createSandbox();

    recordAttemptLatencyStub = sandbox.stub();
    addAttemptCounterStub = sandbox.stub();
    recordOperationLatencyStub = sandbox.stub();
    addOperationCounterStub = sandbox.stub();
    recordGfeLatencyStub = sandbox.stub();
    addGfeConnectivityErrorCountStub = sandbox.stub();

    const meterStub = {
      createHistogram: sandbox.stub(),
      createCounter: sandbox.stub(),
    };

    // Stub the methods called by _createMetricInstruments
    meterStub.createHistogram
      .onFirstCall()
      .returns({record: recordAttemptLatencyStub})
      .onSecondCall()
      .returns({record: recordOperationLatencyStub})
      .onThirdCall()
      .returns({record: recordGfeLatencyStub});

    meterStub.createCounter
      .onFirstCall()
      .returns({add: addAttemptCounterStub})
      .onSecondCall()
      .returns({add: addOperationCounterStub})
      .onThirdCall()
      .returns({add: addGfeConnectivityErrorCountStub});

    sandbox.stub(MeterProvider.prototype, 'getMeter').returns(meterStub as any);
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('global');

    // metrics provider and related objects
    mockExporter = sandbox.createStubInstance(CloudMonitoringMetricsExporter);
  });

  after(async () => {
    sandbox.restore();
    await MetricsTracerFactory.resetInstance();
  });

  beforeEach(async () => {
    MetricsTracerFactory.enabled = true;
    sandbox.resetHistory();
    await MetricsTracerFactory.resetInstance();
    const reader = new PeriodicExportingMetricReader({
      exporter: mockExporter,
      exportIntervalMillis: 60000,
    });
    MetricsTracerFactory.getInstance('project-id')!.getMeterProvider([reader]);
  });

  afterEach(async () => {
    await MetricsTracerFactory.resetInstance();
  });

  it('should use the set meter provider', async () => {
    const factory = MetricsTracerFactory.getInstance('project-id');
    const tracer = factory!.createMetricsTracer(
      'some-method',
      'projects/project/instances/instance/databases/database',
      '1.1a2bc3d4.1.1.1.1',
    );

    const operations = 3;
    const attempts = 5;
    for (let i = 0; i < operations; i++) {
      tracer!.recordOperationStart();
      for (let j = 0; j < attempts; j++) {
        tracer!.recordAttemptStart();
        // Simulate processing time during attempt
        await new Promise(resolve => {
          setTimeout(resolve, 50);
        });
        tracer!.recordAttemptCompletion();
      }
      tracer!.recordOperationCompletion();
    }

    assert.ok(recordOperationLatencyStub.calledWith(sinon.match.number));
    assert.strictEqual(recordOperationLatencyStub.callCount, operations);

    assert.ok(recordAttemptLatencyStub.calledWith(sinon.match.number));
    assert.strictEqual(
      recordAttemptLatencyStub.callCount,
      operations * attempts,
    );
  });

  it('should initialize metric instruments when enabled', () => {
    const factory = MetricsTracerFactory.getInstance('project-id');

    assert.deepStrictEqual(factory!.instrumentAttemptLatency, {
      record: recordAttemptLatencyStub,
    });
    assert.deepStrictEqual(factory!.instrumentAttemptCounter, {
      add: addAttemptCounterStub,
    });
    assert.deepStrictEqual(factory!.instrumentOperationLatency, {
      record: recordOperationLatencyStub,
    });
    assert.deepStrictEqual(factory!.instrumentOperationCounter, {
      add: addOperationCounterStub,
    });
    assert.deepStrictEqual(factory!.instrumentGfeLatency, {
      record: recordGfeLatencyStub,
    });
    assert.deepStrictEqual(factory!.instrumentGfeConnectivityErrorCount, {
      add: addGfeConnectivityErrorCountStub,
    });
  });

  it('should create a MetricsTracer instance', () => {
    const factory = MetricsTracerFactory.getInstance('project-id');
    const tracer = factory!.createMetricsTracer(
      'some-method',
      'method-name',
      '1.1a2bc3d4.1.1.1.1',
    );
    assert.ok(tracer);
  });

  it('should clear a MetricsTracer using an extracted operation request id', () => {
    const factory = MetricsTracerFactory.getInstance('project-id');
    factory!.createMetricsTracer(
      'some-method',
      'method-name',
      '1.1a2bc3d4.1.1.1.1',
    );

    assert.strictEqual((factory as any)._currentOperationTracers.size, 1);

    factory!.clearCurrentTracer('1.1a2bc3d4.1.1.1');

    assert.strictEqual((factory as any)._currentOperationTracers.size, 0);
    assert.strictEqual((factory as any)._currentOperationLastUpdatedMs.size, 0);
  });

  it('should correctly set default attributes', () => {
    const factory = MetricsTracerFactory.getInstance('project-id');
    const tracer = factory!.createMetricsTracer(
      'test-method',
      'projects/project/instances/instance/databases/database',
      '1.1a2bc3d4.1.1.1.1',
    );
    assert.strictEqual(
      tracer!.clientAttributes[Constants.METRIC_LABEL_KEY_DATABASE],
      'database',
    );
    assert.strictEqual(
      tracer!.clientAttributes[Constants.METRIC_LABEL_KEY_METHOD],
      'test-method',
    );
    assert.strictEqual(
      tracer!.clientAttributes[Constants.MONITORED_RES_LABEL_KEY_INSTANCE],
      'instance',
    );
  });
});

describe('getInstanceAttributes', () => {
  let factory: MetricsTracerFactory;
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('global');
    factory = new (MetricsTracerFactory as any)();
  });

  afterEach(async () => {
    await factory.resetMeterProvider();
    clearInterval(factory['_intervalTracerCleanup']);
    sandbox.restore();
  });

  it('should extract project, instance, and database from full resource path', () => {
    const formattedName = 'projects/proj1/instances/inst1/databases/db1';
    const attrs = factory.getInstanceAttributes(formattedName);
    assert.deepStrictEqual(attrs, {
      project: 'proj1',
      instance: 'inst1',
      database: 'db1',
    });
  });

  it('should extract project and instance, and unknown database if database is missing', () => {
    const formattedName = 'projects/proj2/instances/inst2';
    const attrs = factory.getInstanceAttributes(formattedName);
    assert.deepStrictEqual(attrs, {
      project: 'proj2',
      instance: 'inst2',
      database: 'unknown',
    });
  });

  it('should return unknown strings for all if input is empty', () => {
    const attrs = factory.getInstanceAttributes('');
    assert.deepStrictEqual(attrs, {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });

  it('should return unknown strings for all if input is malformed', () => {
    const attrs = factory.getInstanceAttributes('foo/bar/baz');
    assert.deepStrictEqual(attrs, {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });
});

describe('MetricsTracerFactory with set clock', () => {
  let clock: sinon.SinonFakeTimers;
  let sandbox: sinon.SinonSandbox;

  beforeEach(async () => {
    MetricsTracerFactory.enabled = true;
    sandbox = sinon.createSandbox();
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('global');
    await MetricsTracerFactory.resetInstance();
    // Use fake timers to control the clock
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    // Restore the real timers
    clock.restore();
    sandbox.restore();
  });

  describe('_cleanMetricTracers', () => {
    it('should prune stale tracers', () => {
      const factory = MetricsTracerFactory.getInstance('test-project');
      assert(factory);

      factory.createMetricsTracer(
        'method1',
        'projects/p/instances/i/databases/d',
        '1.1a2b3c.1.1.1.1',
      );

      // Advance the clock to make the tracer stale
      clock.tick(Constants.TRACER_CLEANUP_THRESHOLD_MS);

      // Add another tracer to trigger pruning
      factory.createMetricsTracer(
        'method2',
        'projects/p/instances/i/databases/d',
        '2.1a2b3c.1.1.1.1',
      );
      // Only most recent tracer should remain
      assert.strictEqual(factory['_currentOperationTracers'].size, 1);
      assert.ok(factory['_currentOperationTracers'].has('2.1a2b3c.1.1.1'));
    });

    it('should not prune recent tracers', () => {
      const factory = MetricsTracerFactory.getInstance('test-project');
      assert(factory);

      factory.createMetricsTracer(
        'method1',
        'projects/p/instances/i/databases/d',
        '1.1a2b3c.1.1.1.1',
      );

      // Advance the clock, but not enough to hit the threshold
      clock.tick(Constants.TRACER_CLEANUP_INTERVAL_MS);

      // Add another tracer to trigger pruning
      factory.createMetricsTracer(
        'method2',
        'projects/p/instances/i/databases/d',
        '2.1a2b3c.1.1.1.1',
      );

      // Both tracers should be available
      assert.strictEqual(factory['_currentOperationTracers'].size, 2);
      assert.ok(factory['_currentOperationTracers'].has('1.1a2b3c.1.1.1'));
      assert.ok(factory['_currentOperationTracers'].has('2.1a2b3c.1.1.1'));
    });
  });
});

describe('MetricsTracerFactory location detection failures', () => {
  let sandbox: sinon.SinonSandbox;
  let warnStub: sinon.SinonStub;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    warnStub = sandbox.stub(console, 'warn');
    MetricsTracerFactory.enabled = true;
    await MetricsTracerFactory.resetInstance();
  });

  afterEach(async () => {
    sandbox.restore();
    await MetricsTracerFactory.resetInstance();
  });

  it('should not trigger an UnhandledPromiseRejection if _detectClientLocation rejects', async () => {
    let rejectLocation!: (err: Error) => void;
    const locationPromise = new Promise<string>((_resolve, reject) => {
      rejectLocation = reject;
    });

    let unhandledError: Error | null = null;
    const onUnhandledRejection = (err: Error) => {
      unhandledError = err;
    };
    process.once('unhandledRejection', onUnhandledRejection);

    try {
      sandbox
        .stub(MetricsTracerFactory as any, '_detectClientLocation')
        .returns(locationPromise);

      const factory = MetricsTracerFactory.getInstance('test-project');

      rejectLocation(new Error('Unexpected detector failure'));
      await locationPromise.catch(() => {});
      await new Promise<void>(resolve => setImmediate(resolve));

      assert.strictEqual(unhandledError, null);
      assert.ok(warnStub.calledWith('Unable to detect location.'));
      assert.strictEqual(factory!['_location'], 'global');
    } finally {
      process.removeListener('unhandledRejection', onUnhandledRejection);
    }
  });
});

describe('MetricsTracerFactory._detectClientLocation', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const stubDetectedAttributes = (attributes: Record<string, string>) => {
    sandbox.stub(gcpDetector, 'detect').returns({
      attributes: Object.fromEntries(
        Object.entries(attributes).map(([key, value]) => [
          key,
          Promise.resolve(value),
        ]),
      ),
    } as any);
  };

  it('should detect client location on a zonal GKE cluster where cloud.availability_zone is set', async () => {
    stubDetectedAttributes({
      'cloud.platform': 'gcp_kubernetes_engine',
      'cloud.availability_zone': 'us-central1-a',
    });

    const detectedLocation = await (
      MetricsTracerFactory as any
    )._detectClientLocation();

    assert.strictEqual(detectedLocation, 'us-central1-a');
  });

  it('should detect client location on a regional GKE cluster where cloud.region is set', async () => {
    stubDetectedAttributes({
      'cloud.platform': 'gcp_kubernetes_engine',
      'cloud.region': 'us-central1',
    });

    const detectedLocation = await (
      MetricsTracerFactory as any
    )._detectClientLocation();

    assert.strictEqual(detectedLocation, 'us-central1');
  });

  it('should prefer cloud.region over cloud.availability_zone when both are set', async () => {
    stubDetectedAttributes({
      'cloud.platform': 'gcp_compute_engine',
      'cloud.availability_zone': 'us-central1-a',
      'cloud.region': 'us-central1',
    });

    const detectedLocation = await (
      MetricsTracerFactory as any
    )._detectClientLocation();

    assert.strictEqual(detectedLocation, 'us-central1');
  });

  it('should fall back to global when neither attribute is set', async () => {
    stubDetectedAttributes({});

    const detectedLocation = await (
      MetricsTracerFactory as any
    )._detectClientLocation();

    assert.strictEqual(detectedLocation, 'global');
  });
});

describe('MetricsTracerFactory exported location', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    MetricsTracerFactory.enabled = true;
    await MetricsTracerFactory.resetInstance();
  });

  afterEach(async () => {
    sandbox.restore();
    await MetricsTracerFactory.resetInstance();
  });

  it('should export the detected GCP location rather than global when _detectClientLocation resolves asynchronously', async () => {
    let resolveLocation!: (location: string) => void;
    const locationPromise = new Promise<string>(resolve => {
      resolveLocation = resolve;
    });
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .returns(locationPromise);

    const exported: ResourceMetrics[] = [];
    const capturingExporter = {
      export: (
        resourceMetrics: ResourceMetrics,
        resultCallback: (result: {code: number}) => void,
      ) => {
        exported.push(resourceMetrics);
        resultCallback({code: 0});
      },
      forceFlush: async () => {},
      shutdown: async () => {},
    };
    const reader = new PeriodicExportingMetricReader({
      exporter: capturingExporter as any,
      exportIntervalMillis: 60000,
    });

    const factory = MetricsTracerFactory.getInstance('test-project')!;
    factory.getMeterProvider([reader]);
    assert.strictEqual(factory['_location'], 'global');

    const tracer = factory.createMetricsTracer(
      'some-method',
      'projects/test-project/instances/inst/databases/db',
      '1.1a2bc3d4.1.1.1.1',
    );
    tracer!.recordOperationStart();
    tracer!.recordOperationCompletion();

    resolveLocation('us-central1');
    await locationPromise;

    await reader.forceFlush();

    assert.strictEqual(exported.length, 1);
    const timeSeries = transformResourceMetricToTimeSeriesArray(
      exported[0],
      'test-project',
    );
    assert.ok(timeSeries.length > 0);
    assert.strictEqual(timeSeries[0].resource!.labels!.location, 'us-central1');

    await reader.shutdown();
  });

  it('should export the detected GCP location via reader.collect() without requiring waitForAsyncAttributes', async () => {
    let resolveLocation!: (location: string) => void;
    const locationPromise = new Promise<string>(resolve => {
      resolveLocation = resolve;
    });
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .returns(locationPromise);

    class DirectCollectReader extends MetricReader {
      protected async onForceFlush(): Promise<void> {}
      protected async onShutdown(): Promise<void> {}
    }

    const reader = new DirectCollectReader();
    const factory = MetricsTracerFactory.getInstance('test-project')!;
    factory.getMeterProvider([reader]);
    assert.strictEqual(factory.location, 'global');

    const tracer = factory.createMetricsTracer(
      'some-method',
      'projects/test-project/instances/inst/databases/db',
      '1.1a2bc3d4.1.1.1.1',
    );
    tracer!.recordOperationStart();
    tracer!.recordOperationCompletion();

    resolveLocation('us-central1');
    await locationPromise;
    await Promise.resolve();
    await Promise.resolve();
    assert.strictEqual(factory.location, 'us-central1');
    assert.strictEqual(factory['_locationPromise'], null);

    // Collect directly via MetricReader.collect() (which does NOT invoke waitForAsyncAttributes)
    const {resourceMetrics} = await reader.collect();
    assert.strictEqual(resourceMetrics.resource.asyncAttributesPending, false);
    assert.strictEqual(
      resourceMetrics.resource.attributes[
        Constants.MONITORED_RES_LABEL_KEY_LOCATION
      ],
      'us-central1',
    );
    const timeSeries = transformResourceMetricToTimeSeriesArray(
      resourceMetrics,
      'test-project',
    );
    assert.ok(timeSeries.length > 0);
    assert.strictEqual(timeSeries[0].resource!.labels!.location, 'us-central1');

    await reader.shutdown();
  });
});

describe('MetricsTracerFactory getMeterProvider readers', () => {
  let sandbox: sinon.SinonSandbox;
  let warnStub: sinon.SinonStub;

  class InMemoryMetricReader extends MetricReader {
    protected async onForceFlush(): Promise<void> {}
    protected async onShutdown(): Promise<void> {}
  }

  const recordOperation = (factory: MetricsTracerFactory) => {
    const tracer = factory.createMetricsTracer(
      'some-method',
      'projects/test-project/instances/inst/databases/db',
      '1.1a2bc3d4.1.1.1.1',
    );
    tracer!.recordOperationStart();
    tracer!.recordOperationCompletion();
  };

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    warnStub = sandbox.stub(console, 'warn');
    MetricsTracerFactory.enabled = true;
    if (
      Object.prototype.hasOwnProperty.call(
        process.env,
        'SPANNER_DISABLE_BUILTIN_METRICS',
      )
    ) {
      sandbox.replace(process.env, 'SPANNER_DISABLE_BUILTIN_METRICS', 'false');
    } else {
      sandbox.define(process.env, 'SPANNER_DISABLE_BUILTIN_METRICS', 'false');
    }
    await MetricsTracerFactory.resetInstance();
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('us-central1');
  });

  afterEach(async () => {
    sandbox.restore();
    await MetricsTracerFactory.resetInstance();
  });

  it('should bind MetricReader passed to getMeterProvider([reader]) even if getMeterProvider() was called earlier', async () => {
    const factory = MetricsTracerFactory.getInstance('test-project')!;

    assert.strictEqual(factory.hasMetricReaders(), false);
    const initialMeterProvider = factory.getMeterProvider();
    assert.strictEqual(factory.hasMetricReaders(), false);

    const reader = new InMemoryMetricReader();
    const rebuiltMeterProvider = factory.getMeterProvider([reader]);
    assert.strictEqual(factory.hasMetricReaders(), true);

    assert.notStrictEqual(rebuiltMeterProvider, initialMeterProvider);

    recordOperation(factory);

    const {resourceMetrics} = await reader.collect();
    assert.ok(resourceMetrics.scopeMetrics.length > 0);

    await reader.shutdown();
  });

  it('should keep returning the same MeterProvider for calls without readers', () => {
    const factory = MetricsTracerFactory.getInstance('test-project')!;
    const reader = new InMemoryMetricReader();

    const meterProvider = factory.getMeterProvider([reader]);

    assert.strictEqual(factory.getMeterProvider(), meterProvider);
    assert.ok(warnStub.notCalled);
  });

  it('should warn instead of silently ignoring readers once readers are bound', async () => {
    const factory = MetricsTracerFactory.getInstance('test-project')!;
    const boundReader = new InMemoryMetricReader();
    const meterProvider = factory.getMeterProvider([boundReader]);

    const ignoredReader = new InMemoryMetricReader();
    const sameMeterProvider = factory.getMeterProvider([ignoredReader]);

    assert.strictEqual(sameMeterProvider, meterProvider);
    assert.ok(
      warnStub.calledWithMatch(
        'MeterProvider is already initialized with metric readers.',
      ),
    );

    recordOperation(factory);
    const {resourceMetrics} = await boundReader.collect();
    assert.ok(resourceMetrics.scopeMetrics.length > 0);

    await boundReader.shutdown();
  });

  it('should initialize metrics synchronously when projectId is known and avoid duplicate warnings for multiple instances', () => {
    const spanner1 = new Spanner({
      projectId: 'test-project',
    });
    assert.ok(spanner1);

    const factory = MetricsTracerFactory.getInstance('test-project')!;
    assert.ok(factory);
    assert.strictEqual(factory.hasMetricReaders(), true);

    const spanner2 = new Spanner({
      projectId: 'test-project',
    });
    assert.ok(spanner2);

    // Must not log a warning because hasMetricReaders() prevented re-registering
    assert.ok(warnStub.notCalled);
  });
});

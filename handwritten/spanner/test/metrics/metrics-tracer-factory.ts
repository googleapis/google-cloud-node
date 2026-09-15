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
  PeriodicExportingMetricReader,
} from '@opentelemetry/sdk-metrics';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as Constants from '../../src/metrics/constants';
import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
import {CloudMonitoringMetricsExporter} from '../../src/metrics/spanner-metrics-exporter';

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
    const provider =
      MetricsTracerFactory.getInstance('project-id')!.getMeterProvider();
    const reader = new PeriodicExportingMetricReader({
      exporter: mockExporter,
      exportIntervalMillis: 60000,
    });
    provider.addMetricReader(reader);
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
  beforeEach(() => {
    factory = new (MetricsTracerFactory as any)();
  });

  afterEach(async () => {
    await factory.resetMeterProvider();
    clearInterval(factory['_intervalTracerCleanup']);
  });

  it('should extract project, instance, and database from full resource path', () => {
    const formattedName = 'projects/proj1/instances/inst1/databases/db1';
    const attributes = factory.getInstanceAttributes(formattedName);
    assert.deepStrictEqual(attributes, {
      project: 'proj1',
      instance: 'inst1',
      database: 'db1',
    });
  });

  it('should extract project and instance, and unknown database if database is missing', () => {
    const formattedName = 'projects/proj2/instances/inst2';
    const attributes = factory.getInstanceAttributes(formattedName);
    assert.deepStrictEqual(attributes, {
      project: 'proj2',
      instance: 'inst2',
      database: 'unknown',
    });
  });

  it('should return unknown strings for all if input is empty', () => {
    const attributes = factory.getInstanceAttributes('');
    assert.deepStrictEqual(attributes, {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });

  it('should return unknown strings for all if input is malformed', () => {
    const attributes = factory.getInstanceAttributes('foo/bar/baz');
    assert.deepStrictEqual(attributes, {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });

  it('should extract attributes from path with leading slash', () => {
    const attributes = factory.getInstanceAttributes(
      '/projects/proj1/instances/inst1/databases/db1',
    );
    assert.deepStrictEqual(attributes, {
      project: 'proj1',
      instance: 'inst1',
      database: 'db1',
    });
  });

  it('should extract attributes from path with extra sub-resources', () => {
    const attributes = factory.getInstanceAttributes(
      'projects/proj1/instances/inst1/databases/db1/sessions/session-xyz',
    );
    assert.deepStrictEqual(attributes, {
      project: 'proj1',
      instance: 'inst1',
      database: 'db1',
    });
  });

  it('should return unknown strings for non-string input', () => {
    assert.deepStrictEqual(factory.getInstanceAttributes(null as any), {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
    assert.deepStrictEqual(factory.getInstanceAttributes(undefined as any), {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
    assert.deepStrictEqual(factory.getInstanceAttributes(123 as any), {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });

  it('should return unknown strings if second segment is not instances', () => {
    const attributes = factory.getInstanceAttributes(
      'projects/proj1/locations/us-central1',
    );
    assert.deepStrictEqual(attributes, {
      project: 'unknown',
      instance: 'unknown',
      database: 'unknown',
    });
  });

  it('should return unknown strings if project or instance segment is empty', () => {
    assert.deepStrictEqual(
      factory.getInstanceAttributes('projects//instances/inst1'),
      {
        project: 'unknown',
        instance: 'unknown',
        database: 'unknown',
      },
    );
    assert.deepStrictEqual(
      factory.getInstanceAttributes('projects/proj1/instances/'),
      {
        project: 'unknown',
        instance: 'unknown',
        database: 'unknown',
      },
    );
  });

  it('should return unknown database if segment after instance is not databases or database ID is empty', () => {
    assert.deepStrictEqual(
      factory.getInstanceAttributes(
        'projects/proj1/instances/inst1/operations/op1',
      ),
      {
        project: 'proj1',
        instance: 'inst1',
        database: 'unknown',
      },
    );
    assert.deepStrictEqual(
      factory.getInstanceAttributes(
        'projects/proj1/instances/inst1/databases/',
      ),
      {
        project: 'proj1',
        instance: 'inst1',
        database: 'unknown',
      },
    );
  });
});

describe('_extractOperationRequest', () => {
  let factory: MetricsTracerFactory;
  beforeEach(() => {
    factory = new (MetricsTracerFactory as any)();
  });

  it('should extract the operation prefix from a valid request ID', () => {
    const operationRequest =
      factory['_extractOperationRequest']('1.1a2bc3d4.1.1.1.1');
    assert.strictEqual(operationRequest, '1.1a2bc3d4.1.1.1');
  });

  it('should handle multi-digit attempt numbers', () => {
    const operationRequest = factory['_extractOperationRequest'](
      '1.1a2bc3d4.1.1.1.42',
    );
    assert.strictEqual(operationRequest, '1.1a2bc3d4.1.1.1');
  });

  it('should return empty string when attempt is not numeric', () => {
    assert.strictEqual(
      factory['_extractOperationRequest']('1.1a2bc3d4.1.1.1.attempt'),
      '',
    );
  });

  it('should return empty string when input has fewer than 5 dots', () => {
    assert.strictEqual(
      factory['_extractOperationRequest']('1.1a2bc3d4.1.1.1'),
      '',
    );
    assert.strictEqual(factory['_extractOperationRequest']('foo.bar'), '');
  });

  it('should return empty string when input has more than 5 dots', () => {
    assert.strictEqual(
      factory['_extractOperationRequest']('1.1.1.1.1.1.1'),
      '',
    );
  });

  it('should return empty string for trailing dot or invalid input', () => {
    assert.strictEqual(
      factory['_extractOperationRequest']('1.1a2bc3d4.1.1.1.'),
      '',
    );
    assert.strictEqual(factory['_extractOperationRequest'](''), '');
    assert.strictEqual(
      factory['_extractOperationRequest'](undefined as any),
      '',
    );
    assert.strictEqual(factory['_extractOperationRequest'](123 as any), '');
  });
});

describe('MetricsTracerFactory with set clock', () => {
  let clock: sinon.SinonFakeTimers;

  beforeEach(async () => {
    MetricsTracerFactory.enabled = true;
    await MetricsTracerFactory.resetInstance();
    // Use fake timers to control the clock
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    // Restore the real timers
    clock.restore();
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

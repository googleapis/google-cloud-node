// Copyright 2025 Google LLC
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
import {grpc} from 'google-gax';
import * as mock from '../mockserver/mockspanner';
import {MockError, SimulatedExecutionTime} from '../mockserver/mockspanner';
import {Database, Instance, Spanner} from '../../src';
import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';
import {MetricsTracer} from '../../src/metrics/metrics-tracer';
import {MetricReader} from '@opentelemetry/sdk-metrics';
import {CloudMonitoringMetricsExporter} from '../../src/metrics/spanner-metrics-exporter';
import {
  METRIC_NAME_OPERATION_LATENCIES,
  METRIC_NAME_ATTEMPT_LATENCIES,
  METRIC_NAME_OPERATION_COUNT,
  METRIC_NAME_ATTEMPT_COUNT,
  METRIC_NAME_GFE_LATENCIES,
  METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
  METRIC_NAME_AFE_LATENCIES,
  METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT,
} from '../../src/metrics/constants';

describe('Test metrics with mock server', () => {
  let sandbox: sinon.SinonSandbox;
  let instance: Instance;
  let spanner: Spanner;
  let port: number;
  let dbCounter = 0;
  const selectSql = 'SELECT NUM, NAME FROM NUMBERS';
  const server = new grpc.Server();
  const spannerMock = mock.createMockSpanner(server);
  const PROJECT_ID = 'test-project';

  class InMemoryMetricReader extends MetricReader {
    protected async onForceFlush(): Promise<void> {}
    protected async onShutdown(): Promise<void> {}
  }

  function newTestDatabase(): Database {
    return instance.database(`database-${++dbCounter}`, undefined);
  }

  function assertApprox(expected: number, actual: number, delta: number) {
    assert.ok(
      Math.abs(expected - actual) <= delta,
      `Expected value of ${expected} and actual value of ${actual} is greater than the approximation delta (${delta})`,
    );
  }

  function compareAttributes(expected: object, actual: object): boolean {
    // Check that all expected keys match in actual
    for (const key of Object.keys(expected)) {
      if ((actual as any)[key] !== (expected as any)[key]) {
        return false;
      }
    }
    // Check that actual does not contain extra keys
    for (const key of Object.keys(actual)) {
      // Check if the key in 'actual' is not present in 'expected'
      if (!Object.prototype.hasOwnProperty.call(expected, key)) {
        return false;
      }
    }
    return true;
  }

  function getMetricData(resourceMetrics, metricName: string) {
    const filteredMetrics = resourceMetrics.scopeMetrics.flatMap(scopeMetric =>
      scopeMetric.metrics.filter(
        metric => metric.descriptor.name === metricName,
      ),
    );
    assert.ok(
      filteredMetrics.length > 0,
      `No metric entry found with name: ${metricName}`,
    );
    assert.strictEqual(
      filteredMetrics.length,
      1,
      `Found multiple metrics with name: ${metricName}`,
    );
    return filteredMetrics[0];
  }

  function hasMetricData(resourceMetrics, metricName: string): boolean {
    const filteredMetrics = resourceMetrics.scopeMetrics.flatMap(scopeMetric =>
      scopeMetric.metrics.filter(
        metric => metric.descriptor.name === metricName,
      ),
    );
    return filteredMetrics.length > 0;
  }

  function getAggregatedValue(metricsData: any, attributes: any) {
    const dataPoint = metricsData.dataPoints.filter(dp =>
      compareAttributes(dp.attributes, attributes),
    );
    assert.strictEqual(
      dataPoint.length,
      1,
      'Failed to filter for attribute values.',
    );
    switch (metricsData.descriptor.type) {
      case 'HISTOGRAM':
        return dataPoint[0].value.sum / dataPoint[0].value.count;
      case 'COUNTER':
        return dataPoint[0].value;
      default:
        return 0;
    }
  }

  async function setupMockSpanner() {
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
    sandbox
      .stub(MetricsTracerFactory as any, '_detectClientLocation')
      .resolves('test-location');
    await MetricsTracerFactory.resetInstance();
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
    MetricsTracerFactory.enabled = true;
    spanner = new Spanner({
      projectId: PROJECT_ID,
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
    });
    instance = spanner.instance('instance');
  }

  before(async () => {
    await MetricsTracerFactory.resetInstance();
    await setupMockSpanner();
  });

  after(async () => {
    spanner.close();
    server.tryShutdown(() => {});
    sandbox.restore();
    await MetricsTracerFactory.resetInstance();
    MetricsTracerFactory.enabled = false;
  });

  describe('With InMemMetricReader', async () => {
    let reader: InMemoryMetricReader;
    let factory: MetricsTracerFactory | null;
    let gfeStub;
    let afeStub;
    let exporterStub;
    const MIN_LATENCY = 0;
    const commonAttributes = {
      instance_id: 'instance',
      status: 'OK',
    };

    before(() => {
      exporterStub = sinon.stub(
        CloudMonitoringMetricsExporter.prototype,
        'export',
      );
    });

    after(() => {
      exporterStub.restore();
    });

    beforeEach(async function () {
      // Increase the timeout because the MeterProvider shutdown exceed
      // the default 10s timeout.
      this.timeout(50000);
      spannerMock.resetRequests();
      spannerMock.removeExecutionTimes();
      // Reset the MetricsFactoryReader to an in-memory reader for the tests
      MetricsTracerFactory.enabled = true;
      factory = MetricsTracerFactory.getInstance(PROJECT_ID);
      await factory!.resetMeterProvider();
      reader = new InMemoryMetricReader();
      factory!.getMeterProvider([reader]);
    });

    afterEach(async () => {
      gfeStub?.restore();
      afeStub?.restore();
      await factory?.resetMeterProvider();
      await MetricsTracerFactory.resetInstance();
    });

    it('should have correct latency values in metrics', async () => {
      gfeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractGfeLatency')
        .callsFake(() => 123);
      afeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractAfeLatency')
        .callsFake(() => 30);
      const database = newTestDatabase();
      const startTime = new Date();
      await database.run(selectSql);
      const endTime = new Date();

      const elapsedTime = endTime.valueOf() - startTime.valueOf();

      const methods = ['createSession', 'executeStreamingSql'];

      const {resourceMetrics} = await reader.collect();
      const operationCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_COUNT,
      );
      const gfeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_LATENCIES,
      );
      const afeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_LATENCIES,
      );
      const attemptCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      const operationLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_LATENCIES,
      );
      const attemptLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_LATENCIES,
      );

      let totalOperationLatency = 0;
      methods.forEach(method => {
        const attributes = {
          ...commonAttributes,
          database: `database-${dbCounter}`,
          method: method,
        };
        const operationCount = getAggregatedValue(
          operationCountData,
          attributes,
        );
        assert.strictEqual(operationCount, 1);

        const attemptCount = getAggregatedValue(attemptCountData, attributes);
        assert.strictEqual(attemptCount, 1);

        const operationLatency = getAggregatedValue(
          operationLatenciesData,
          attributes,
        );
        totalOperationLatency += operationLatency;

        const attemptLatency = getAggregatedValue(
          attemptLatenciesData,
          attributes,
        );
        // Since we only have one attempt, the attempt latency should be fairly close to the operation latency
        assertApprox(operationLatency, attemptLatency, 30);

        const gfeLatency = getAggregatedValue(gfeLatenciesData, attributes);
        assert.strictEqual(gfeLatency, 123);

        const afeLatency = getAggregatedValue(afeLatenciesData, attributes);
        assert.strictEqual(afeLatency, 30);
      });

      // check that the latency matches up with the measured elapsed time within 10ms
      assertApprox(elapsedTime, totalOperationLatency, 10);

      // Make sure no GFE/AFE connectivity errors ar emitted since we got GFE latencies
      const gfeMissingData = hasMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
      );
      const afeMissingData = hasMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT,
      );

      assert.ok(!gfeMissingData);
      assert.ok(!afeMissingData);

      await database.close();
    });

    it('should increase attempts on retries', async () => {
      gfeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractGfeLatency')
        .callsFake(() => 123);
      afeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractAfeLatency')
        .callsFake(() => 30);
      const database = newTestDatabase();
      const err = {
        message: 'Temporary unavailable',
        code: grpc.status.UNAVAILABLE,
      } as MockError;
      spannerMock.setExecutionTime(
        spannerMock.executeStreamingSql,
        SimulatedExecutionTime.ofError(err),
      );

      await database.run(selectSql);
      const {resourceMetrics} = await reader.collect();

      const operationCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_COUNT,
      );
      const attemptCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      const operationLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_LATENCIES,
      );
      const attemptLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_LATENCIES,
      );
      const gfeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_LATENCIES,
      );
      const afeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_LATENCIES,
      );

      const sessionAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'createSession',
      };
      // Verify batchCreateSession metrics are unaffected
      assert.strictEqual(
        getAggregatedValue(operationCountData, sessionAttributes),
        1,
      );
      getAggregatedValue(operationLatenciesData, sessionAttributes);
      assert.strictEqual(
        getAggregatedValue(attemptCountData, sessionAttributes),
        1,
      );
      getAggregatedValue(attemptLatenciesData, sessionAttributes);
      assert.strictEqual(
        getAggregatedValue(gfeLatenciesData, sessionAttributes),
        123,
      );
      assert.strictEqual(
        getAggregatedValue(afeLatenciesData, sessionAttributes),
        30,
      );

      const executeAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'executeStreamingSql',
      };
      const executeUnavailableAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'executeStreamingSql',
        status: 'UNAVAILABLE',
      };
      // Verify executeStreamingSql has 2 attempts and 1 operation
      assert.strictEqual(
        1,
        getAggregatedValue(operationCountData, executeAttributes),
      );
      getAggregatedValue(operationLatenciesData, executeAttributes);
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, executeAttributes),
      );
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, executeUnavailableAttributes),
      );
      getAggregatedValue(attemptLatenciesData, executeAttributes);
      assert.strictEqual(
        123,
        getAggregatedValue(gfeLatenciesData, executeAttributes),
      );
      assert.strictEqual(
        30,
        getAggregatedValue(afeLatenciesData, executeAttributes),
      );
    });

    it('should create connectivity error count metric if GFE/AFE latency is not in header', async () => {
      gfeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractGfeLatency')
        .callsFake(() => null);
      afeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractAfeLatency')
        .callsFake(() => null);
      const database = newTestDatabase();
      await database.run(selectSql);
      const {resourceMetrics} = await reader.collect();

      const operationCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_COUNT,
      );
      const attemptCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      const operationLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_LATENCIES,
      );
      const attemptLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_LATENCIES,
      );
      const connectivityErrorCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
      );

      // Verify GFE AFE latency doesn't exist
      assert.ok(!hasMetricData(resourceMetrics, METRIC_NAME_GFE_LATENCIES));
      assert.ok(!hasMetricData(resourceMetrics, METRIC_NAME_AFE_LATENCIES));
      const methods = ['createSession', 'executeStreamingSql'];
      methods.forEach(method => {
        const attributes = {
          ...commonAttributes,
          database: `database-${dbCounter}`,
          method: method,
        };
        // Verify attempt and operational metrics are unaffected
        assert.strictEqual(
          getAggregatedValue(operationCountData, attributes),
          1,
        );
        getAggregatedValue(operationLatenciesData, attributes);
        assert.strictEqual(getAggregatedValue(attemptCountData, attributes), 1);
        getAggregatedValue(attemptLatenciesData, attributes);

        // Verify that GFE AFE connectivity error count increased
        assert.strictEqual(
          getAggregatedValue(connectivityErrorCountData, attributes),
          1,
        );
      });
    });

    it('should increase attempts on retries for non streaming calls with gax options', async () => {
      gfeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractGfeLatency')
        .callsFake(() => 123);
      afeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractAfeLatency')
        .callsFake(() => 30);
      const database = newTestDatabase();
      const err = {
        message: 'Temporary unavailable',
        code: grpc.status.UNAVAILABLE,
      } as MockError;
      spannerMock.setExecutionTime(
        spannerMock.commit,
        SimulatedExecutionTime.ofError(err),
      );

      const GAX_OPTIONS = {
        retry: {
          retryCodes: [4, 8, 14],
          backoffSettings: {
            initialRetryDelayMillis: 1000,
            retryDelayMultiplier: 1.3,
            maxRetryDelayMillis: 32000,
            initialRpcTimeoutMillis: 60000,
            rpcTimeoutMultiplier: 1,
            maxRpcTimeoutMillis: 60000,
            totalTimeoutMillis: 600000,
          },
        },
      };
      await database.runTransactionAsync(async tx => {
        await tx.run(selectSql);
        // Commit RPC will be retried by GAX
        await tx.commit({gaxOptions: GAX_OPTIONS});
      });

      const {resourceMetrics} = await reader.collect();

      const operationCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_COUNT,
      );
      // Attempt count is correct here but status of attempts are not correct
      const attemptCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      const operationLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_LATENCIES,
      );
      const attemptLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_LATENCIES,
      );
      const gfeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_LATENCIES,
      );
      const afeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_LATENCIES,
      );

      const sessionAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'createSession',
      };
      // Verify createSession metrics are unaffected
      assert.strictEqual(
        1,
        getAggregatedValue(operationCountData, sessionAttributes),
      );
      assert.ok(getAggregatedValue(operationLatenciesData, sessionAttributes));
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, sessionAttributes),
      );
      assert.ok(getAggregatedValue(attemptLatenciesData, sessionAttributes));
      assert.strictEqual(
        123,
        getAggregatedValue(gfeLatenciesData, sessionAttributes),
      );
      assert.strictEqual(
        30,
        getAggregatedValue(afeLatenciesData, sessionAttributes),
      );

      const executeAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'executeStreamingSql',
      };

      // Verify executeStreamingSql metrics are unaffected
      assert.strictEqual(
        1,
        getAggregatedValue(operationCountData, executeAttributes),
      );
      assert.ok(getAggregatedValue(operationLatenciesData, executeAttributes));
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, executeAttributes),
      );
      assert.ok(getAggregatedValue(attemptLatenciesData, executeAttributes));
      assert.strictEqual(
        123,
        getAggregatedValue(gfeLatenciesData, executeAttributes),
      );
      assert.strictEqual(
        30,
        getAggregatedValue(afeLatenciesData, executeAttributes),
      );

      // Verify that commit metrics have 2 attempts and 1 operation
      const commitOkAttributes = {
        ...commonAttributes,
        database: `database-${dbCounter}`,
        method: 'commit',
      };
      const commitUnavailableAttributes = {
        ...commitOkAttributes,
        status: 'UNAVAILABLE',
      };

      assert.strictEqual(
        getAggregatedValue(operationCountData, commitOkAttributes),
        1,
      );

      assert.ok(getAggregatedValue(operationLatenciesData, commitOkAttributes));
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, commitOkAttributes),
        '1 of 2 attempts for Commit should have status: OK.',
      );
      assert.strictEqual(
        1,
        getAggregatedValue(attemptCountData, commitUnavailableAttributes),
        '1 of 2 attempts for Commit should have status: Unavailable.',
      );
      assert.ok(getAggregatedValue(attemptLatenciesData, commitOkAttributes));
      assert.ok(
        getAggregatedValue(attemptLatenciesData, commitUnavailableAttributes),
      );
      assert.strictEqual(
        123,
        getAggregatedValue(gfeLatenciesData, commitOkAttributes),
      );
      assert.strictEqual(
        30,
        getAggregatedValue(afeLatenciesData, commitOkAttributes),
      );
    });

    it('should have correct latency values in metrics except AFE when AFE Server timing is disabled', async () => {
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'true';
      gfeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractGfeLatency')
        .callsFake(() => 123);
      afeStub = sandbox
        .stub(MetricsTracer.prototype, 'extractAfeLatency')
        .callsFake(() => 30);
      const database = newTestDatabase();
      const startTime = new Date();
      await database.run(selectSql);
      const endTime = new Date();

      const elapsedTime = endTime.valueOf() - startTime.valueOf();

      const methods = ['createSession', 'executeStreamingSql'];

      const {resourceMetrics} = await reader.collect();
      const operationCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_COUNT,
      );
      const gfeLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_LATENCIES,
      );
      const attemptCountData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_COUNT,
      );
      const operationLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_OPERATION_LATENCIES,
      );
      const attemptLatenciesData = getMetricData(
        resourceMetrics,
        METRIC_NAME_ATTEMPT_LATENCIES,
      );

      let totalOperationLatency = 0;
      methods.forEach(method => {
        const attributes = {
          ...commonAttributes,
          database: `database-${dbCounter}`,
          method: method,
        };
        const operationCount = getAggregatedValue(
          operationCountData,
          attributes,
        );
        assert.strictEqual(operationCount, 1);

        const attemptCount = getAggregatedValue(attemptCountData, attributes);
        assert.strictEqual(attemptCount, 1);

        const operationLatency = getAggregatedValue(
          operationLatenciesData,
          attributes,
        );
        totalOperationLatency += operationLatency;

        const attemptLatency = getAggregatedValue(
          attemptLatenciesData,
          attributes,
        );
        // Since we only have one attempt, the attempt latency should be fairly close to the operation latency
        assertApprox(operationLatency, attemptLatency, 30);

        const gfeLatency = getAggregatedValue(gfeLatenciesData, attributes);
        assert.strictEqual(gfeLatency, 123);
      });

      // check that the latency matches up with the measured elapsed time within 10ms
      assertApprox(elapsedTime, totalOperationLatency, 10);

      // Make sure no GFE connectivity errors are not emitted since we got GFE latencies
      const gfeMissingData = hasMetricData(
        resourceMetrics,
        METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
      );
      assert.ok(!gfeMissingData);

      // Make sure no AFE metrics are not emitted since AFE is disabled.
      const afeMissingData = hasMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT,
      );
      const afeLatencyMissingData = hasMetricData(
        resourceMetrics,
        METRIC_NAME_AFE_LATENCIES,
      );
      assert.ok(!afeMissingData);
      assert.ok(!afeLatencyMissingData);

      await database.close();
      Spanner._resetAFEServerTimingForTest();
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] = 'false';
    });
  });
});

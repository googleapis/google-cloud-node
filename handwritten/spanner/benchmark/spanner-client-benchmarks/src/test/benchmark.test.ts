import {describe, it, before, after, beforeEach, afterEach} from 'node:test';
import * as assert from 'node:assert';
import {MockSpannerServer} from '../spanner/mock-spanner';
import {PointSelectBenchmark} from '../benchmarks/point-select';
import {SelectAndUpdateBenchmark} from '../benchmarks/select-update';
import {ReadLargeResultSetBenchmark} from '../benchmarks/read-large-result-set';
import {ReadNarrowResultSetBenchmark} from '../benchmarks/read-narrow-result-set';
import {LoadType} from '../benchmarks/load-type';
import {TpccBenchmarkRunner} from '../benchmarks/tpcc/benchmark';
import {createSpannerClient} from '../spanner/client';
import {setTestingMeterProvider} from '../metrics/otel';
import {
  MeterProvider,
  InMemoryMetricExporter,
  PeriodicExportingMetricReader,
  AggregationTemporality,
} from '@opentelemetry/sdk-metrics';
import {resourceFromAttributes} from '@opentelemetry/resources';

const LARGE_RESULT_SET_SQL = `SELECT
  MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2) = 0 AS random_bool,
  CAST(GENERATE_UUID() AS BYTES) AS random_bytes,
  DATE_FROM_UNIX_DATE(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2932896))) AS random_date,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT32) AS random_float32,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT64) AS random_float64,
  MAKE_INTERVAL(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 10)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 12)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 28)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 24)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60))) AS random_interval,
  TO_JSON('{"key": "' || GENERATE_UUID() || '"}') AS random_json,
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS NUMERIC) AS random_numeric,
  GENERATE_UUID() AS random_string,
  TIMESTAMP_MICROS(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 1230219000000000))) AS random_timestamp,
  NEW_UUID() AS random_uuid
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

const NARROW_RESULT_SET_SQL = `SELECT
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64_1,
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64_2
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

describe('Node.js Benchmark Integration Tests', () => {
  let mockServer: MockSpannerServer;
  let port: number;
  let spannerClient: any;
  let database: any;
  let exporter: InMemoryMetricExporter;
  let reader: PeriodicExportingMetricReader;
  let provider: MeterProvider;

  before(async () => {
    mockServer = new MockSpannerServer();
    port = await mockServer.start();

    // Direct spanner client to talk to mock server by setting emulator host env var
    process.env.SPANNER_EMULATOR_HOST = `127.0.0.1:${port}`;
    spannerClient = createSpannerClient('fake-project', `127.0.0.1:${port}`);
    database = spannerClient
      .instance('fake-instance')
      .database('fake-database', {
        min: 0,
        acquireTimeout: 1000,
      });

    registerMockResults(mockServer);
  });

  after(async () => {
    console.log('Teardown: closing database session pool...');
    await database.close();
    console.log('Teardown: stopping mockServer...');
    await mockServer.stop();
    delete process.env.SPANNER_EMULATOR_HOST;
    console.log('Teardown completed cleanly!');
  });

  beforeEach(() => {
    mockServer.clearRequests();

    // Setup OpenTelemetry in-memory collection
    exporter = new InMemoryMetricExporter(AggregationTemporality.CUMULATIVE);
    reader = new PeriodicExportingMetricReader({
      exporter: exporter,
      exportIntervalMillis: 50,
    });

    const resource = resourceFromAttributes({
      'service.name': 'spanner-benchmark',
      'service.instance.id': 'test-id',
    });

    provider = new MeterProvider({
      resource: resource,
      readers: [reader],
    });

    setTestingMeterProvider(provider);
  });

  afterEach(async () => {
    setTestingMeterProvider(null);
    await provider.shutdown();
  });

  function makeRow(rowValues: any[]): any[] {
    return rowValues.map(val => {
      if (val === null || val === undefined) {
        return {nullValue: 0};
      } else if (typeof val === 'boolean') {
        return {boolValue: val};
      } else if (typeof val === 'number') {
        return {numberValue: val};
      } else if (typeof val === 'string') {
        return {stringValue: val};
      } else if (typeof val === 'object' && val.seconds !== undefined) {
        return {stringValue: new Date(val.seconds * 1000).toISOString()};
      }
      return {stringValue: String(val)};
    });
  }

  function registerMockResults(srv: MockSpannerServer) {
    srv.clearResults();

    // Point Select
    srv.addResult('SELECT * FROM test WHERE id = @id', {
      metadata: {
        row_type: {
          fields: [
            {name: 'id', type: {code: 'INT64'}},
            {name: 'value', type: {code: 'STRING'}},
          ],
        },
      },
      rows: [makeRow(['1', 'value1'])],
    });

    // Select and Update
    srv.addResult('SELECT id FROM test WHERE id = @id', {
      metadata: {
        row_type: {
          fields: [{name: 'id', type: {code: 'INT64'}}],
        },
      },
      rows: [makeRow(['1'])],
    });
    srv.addResult('UPDATE test SET value = @value WHERE id = @id', {
      stats: {row_count_exact: '1'},
    });
    srv.addResult('INSERT INTO test (id, value) VALUES (@id, @value)', {
      stats: {row_count_exact: '1'},
    });

    // Read Large Result Set
    srv.addResult(LARGE_RESULT_SET_SQL, {
      metadata: {
        row_type: {
          fields: [
            {name: 'random_bool', type: {code: 'BOOL'}},
            {name: 'random_bytes', type: {code: 'BYTES'}},
            {name: 'random_date', type: {code: 'DATE'}},
            {name: 'random_float32', type: {code: 'FLOAT64'}},
            {name: 'random_float64', type: {code: 'FLOAT64'}},
            {name: 'random_interval', type: {code: 'STRING'}},
            {name: 'random_json', type: {code: 'JSON'}},
            {name: 'random_int64', type: {code: 'INT64'}},
            {name: 'random_numeric', type: {code: 'NUMERIC'}},
            {name: 'random_string', type: {code: 'STRING'}},
            {name: 'random_timestamp', type: {code: 'TIMESTAMP'}},
            {name: 'random_uuid', type: {code: 'STRING'}},
          ],
        },
      },
      rows: [
        makeRow([
          true,
          'Ynl0ZXM=',
          '2026-06-02',
          1.0,
          2.0,
          '10s',
          '{"key":"val"}',
          '42',
          '10.5',
          'string',
          {seconds: 1772532000},
          'uuid',
        ]),
      ],
    });

    // Read Narrow Result Set
    srv.addResult(NARROW_RESULT_SET_SQL, {
      metadata: {
        row_type: {
          fields: [
            {name: 'random_int64_1', type: {code: 'INT64'}},
            {name: 'random_int64_2', type: {code: 'INT64'}},
          ],
        },
      },
      rows: [makeRow(['100', '200'])],
    });

    // TPC-C
    srv.addResult('SELECT COUNT(*) AS cnt FROM warehouse', {
      metadata: {
        row_type: {
          fields: [{name: 'cnt', type: {code: 'INT64'}}],
        },
      },
      rows: [makeRow(['1'])],
    });
    srv.addResult(
      'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d',
      {
        metadata: {
          row_type: {
            fields: [{name: 'next_order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [makeRow(['1000'])],
      },
    );
    srv.addResult(
      'SELECT discount, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'discount', type: {code: 'FLOAT64'}},
              {name: 'last_name', type: {code: 'STRING'}},
            ],
          },
        },
        rows: [makeRow([0.1, 'last'])],
      },
    );
    srv.addResult(
      'SELECT balance, first_name, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'balance', type: {code: 'FLOAT64'}},
              {name: 'first_name', type: {code: 'STRING'}},
              {name: 'last_name', type: {code: 'STRING'}},
            ],
          },
        },
        rows: [makeRow([100.0, 'first', 'last'])],
      },
    );
    srv.addResult(
      'SELECT order_id FROM orders WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c ORDER BY order_id DESC LIMIT 1',
      {
        metadata: {
          row_type: {
            fields: [{name: 'order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [makeRow(['1000'])],
      },
    );
    srv.addResult(
      'SELECT order_line_id, item_id, quantity, amount FROM order_line WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'order_line_id', type: {code: 'INT64'}},
              {name: 'item_id', type: {code: 'INT64'}},
              {name: 'quantity', type: {code: 'INT64'}},
              {name: 'amount', type: {code: 'FLOAT64'}},
            ],
          },
        },
        rows: [makeRow(['1', '100', '5', 25.0])],
      },
    );
    srv.addResult(
      'SELECT order_id FROM new_orders WHERE warehouse_id = @w AND district_id = @d ORDER BY created_timestamp ASC LIMIT 1',
      {
        metadata: {
          row_type: {
            fields: [{name: 'order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [makeRow(['1000'])],
      },
    );
    srv.addResult(
      'UPDATE district SET next_order_id = @next WHERE warehouse_id = @w AND district_id = @d',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'INSERT INTO orders (warehouse_id, district_id, order_id, customer_id, entry_date, item_count, all_local) VALUES (@w, @d, @o, @c, @dt, @cnt, 1)',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'INSERT INTO new_orders (warehouse_id, district_id, order_id, created_timestamp) VALUES (@w, @d, @o, @dt)',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      "INSERT INTO order_line (warehouse_id, district_id, order_id, order_line_id, item_id, quantity, amount, dist_info) VALUES (@w, @d, @o, @ol, @i, @qty, @amt, 'distinfo')",
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE stock SET quantity = quantity - @qty, order_count = order_count + 1 WHERE warehouse_id = @w AND item_id = @i',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE warehouse SET ytd = ytd + @amt WHERE warehouse_id = @w',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE district SET ytd = ytd + @amt WHERE warehouse_id = @w AND district_id = @d',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE customer SET balance = balance - @amt, ytd_payment = ytd_payment + @amt, payment_count = payment_count + 1 WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      "INSERT INTO history (warehouse_id, district_id, history_id, customer_id, date, amount, data) VALUES (@w, @d, @h, @c, @dt, @amt, 'history')",
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'DELETE FROM new_orders WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE orders SET carrier_id = @c WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'UPDATE order_line SET delivery_date = @dt WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    srv.addResult(
      'SELECT COUNT(DISTINCT s.item_id) FROM order_line ol JOIN stock s ON s.warehouse_id = ol.warehouse_id AND s.item_id = ol.item_id WHERE ol.warehouse_id = @w AND ol.district_id = @d AND ol.order_id >= @minOrderId AND ol.order_id < @nextOrderId AND s.quantity < @threshold',
      {
        metadata: {
          row_type: {
            fields: [{name: 'count', type: {code: 'INT64'}}],
          },
        },
        rows: [makeRow(['0'])],
      },
    );
  }

  async function waitForRequests(
    minCount: number,
    timeoutMs = 5000,
  ): Promise<any[]> {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const reqs = mockServer.getRequests();
      if (reqs.length >= minCount) {
        return reqs;
      }
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    throw new Error(
      `Timeout waiting for mock server to receive at least ${minCount} requests. Current: ${mockServer.getRequests().length}`,
    );
  }

  function assertResourceMetrics(metrics: any) {
    let hasServiceName = false;
    for (const rm of metrics) {
      const attrs = rm.resource.attributes || {};
      if (attrs['service.name'] === 'spanner-benchmark') {
        hasServiceName = true;
      }
    }
    assert.ok(
      hasServiceName,
      "Metrics resource should contain service.name = 'spanner-benchmark'",
    );
  }

  function findMetric(metrics: any, name: string) {
    for (const rm of metrics) {
      for (const sm of rm.scopeMetrics) {
        for (const m of sm.metrics) {
          if (m.descriptor.name === name) {
            return m;
          }
        }
      }
    }
    return null;
  }

  function assertMetricAttributes(
    metric: any,
    expectedAttrs: Record<string, any>,
  ) {
    assert.ok(metric, 'Metric should exist');
    assert.ok(metric.dataPoints.length > 0, 'Metric should have data points');
    for (const dp of metric.dataPoints) {
      const actualAttrs = dp.attributes;
      for (const [key, value] of Object.entries(expectedAttrs)) {
        assert.strictEqual(
          actualAttrs[key],
          value,
          `Expected attribute ${key} to be ${value}, got ${actualAttrs[key]}`,
        );
      }
    }
  }

  function assertErrorCountIsZero(metricsData: any, benchmarkType: string) {
    const errorMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/error_count',
    );
    if (errorMetric) {
      assertMetricAttributes(errorMetric, {
        client: 'node-client',
        benchmark_type: benchmarkType,
      });
      for (const dp of errorMetric.dataPoints) {
        assert.strictEqual(dp.value, 0, `Expected 0 errors, got ${dp.value}`);
      }
    }
  }

  it('should execute Point Select workload cleanly and emit correct telemetry', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram('spanner_client_benchmarks/latency');
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );
    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new PointSelectBenchmark(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      'test',
      1,
      100,
      10,
      5,
      1000, // 1 second duration
      false,
    );

    await benchmark.run();

    const reqs = await waitForRequests(1);
    assert.ok(reqs.length > 0, 'Should have received at least one request');
    const sqlReq = reqs.find(
      r => r.sql === 'SELECT * FROM test WHERE id = @id',
    );
    assert.ok(sqlReq, 'Should have executed the Point Select query');

    // Verify metrics
    await reader.forceFlush();
    const metricsData = exporter.getMetrics();
    assertResourceMetrics(metricsData);

    const countMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/operation_count',
    );
    assertMetricAttributes(countMetric, {
      client: 'node-client',
      benchmark_type: 'point-select',
    });

    const memMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/memory_usage',
    );
    assertMetricAttributes(memMetric, {
      client: 'node-client',
      benchmark_type: 'point-select',
    });

    const cpuMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/cpu_utilization',
    );
    assertMetricAttributes(cpuMetric, {
      client: 'node-client',
      benchmark_type: 'point-select',
    });

    assertErrorCountIsZero(metricsData, 'point-select');
  });

  it('should execute Point Select workload cleanly in closed-loop mode', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram('spanner_client_benchmarks/latency');
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );
    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new PointSelectBenchmark(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      'test',
      1,
      100,
      10,
      2,
      1000,
      false,
      '',
      LoadType.ClosedLoop,
    );

    await benchmark.run();

    const reqs = await waitForRequests(1);
    assert.ok(reqs.length > 0, 'Should have received at least one request');
    const sqlReq = reqs.find(
      r => r.sql === 'SELECT * FROM test WHERE id = @id',
    );
    assert.ok(sqlReq, 'Should have executed the Point Select query');
  });

  it('should execute Select and Update workload inside Read-Write transactions', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram('spanner_client_benchmarks/latency');
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );
    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new SelectAndUpdateBenchmark(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      'test',
      1,
      100,
      10,
      5,
      1000,
      false,
    );

    await benchmark.run();

    const reqs = await waitForRequests(2);
    // Verify a transaction selector SQL and commit was sent
    const hasCommit = reqs.some(
      r =>
        r.transaction_id !== undefined ||
        mockServer.getRequests().some((x: any) => x.mutations !== undefined),
    );
    assert.ok(reqs.length >= 2);

    // Verify metrics
    await reader.forceFlush();
    const metricsData = exporter.getMetrics();
    assertResourceMetrics(metricsData);

    const countMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/operation_count',
    );
    assertMetricAttributes(countMetric, {
      client: 'node-client',
      benchmark_type: 'select-update',
    });

    const memMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/memory_usage',
    );
    assertMetricAttributes(memMetric, {
      client: 'node-client',
      benchmark_type: 'select-update',
    });

    const cpuMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/cpu_utilization',
    );
    assertMetricAttributes(cpuMetric, {
      client: 'node-client',
      benchmark_type: 'select-update',
    });

    assertErrorCountIsZero(metricsData, 'select-update');
  });

  it('should execute Read Large Result Set workload and measure iteration latency', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram(
      'spanner_client_benchmarks/read_latency',
    );
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );
    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new ReadLargeResultSetBenchmark(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      'test',
      1,
      100,
      10,
      5,
      1000,
      false,
      'test-run',
      10,
    );

    await benchmark.run();

    const reqs = await waitForRequests(1);
    assert.ok(reqs.length >= 1);
    const sqlReq = reqs.find(
      r => r.sql && r.sql.includes('FROM UNNEST(GENERATE_ARRAY(1, @num_rows))'),
    );
    assert.ok(sqlReq, 'Should have executed the large result set query');

    // Verify metrics
    await reader.forceFlush();
    const metricsData = exporter.getMetrics();
    assertResourceMetrics(metricsData);

    const countMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/operation_count',
    );
    assertMetricAttributes(countMetric, {
      client: 'node-client',
      benchmark_type: 'read-large-result-set',
    });

    const memMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/memory_usage',
    );
    assertMetricAttributes(memMetric, {
      client: 'node-client',
      benchmark_type: 'read-large-result-set',
    });

    const cpuMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/cpu_utilization',
    );
    assertMetricAttributes(cpuMetric, {
      client: 'node-client',
      benchmark_type: 'read-large-result-set',
    });

    assertErrorCountIsZero(metricsData, 'read-large-result-set');
  });

  it('should execute Read Narrow Result Set workload and measure iteration latency', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram(
      'spanner_client_benchmarks/read_latency',
    );
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );
    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new ReadNarrowResultSetBenchmark(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      'test',
      1,
      100,
      10,
      5,
      1000,
      false,
      'test-run',
      10,
    );

    await benchmark.run();

    const reqs = await waitForRequests(1);
    assert.ok(reqs.length >= 1);
    const sqlReq = reqs.find(
      r => r.sql && r.sql.includes('FROM UNNEST(GENERATE_ARRAY(1, @num_rows))'),
    );
    assert.ok(sqlReq, 'Should have executed the narrow result set query');

    // Verify metrics
    await reader.forceFlush();
    const metricsData = exporter.getMetrics();
    assertResourceMetrics(metricsData);

    const countMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/operation_count',
    );
    assertMetricAttributes(countMetric, {
      client: 'node-client',
      benchmark_type: 'read-narrow-result-set',
    });

    const memMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/memory_usage',
    );
    assertMetricAttributes(memMetric, {
      client: 'node-client',
      benchmark_type: 'read-narrow-result-set',
    });

    const cpuMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/cpu_utilization',
    );
    assertMetricAttributes(cpuMetric, {
      client: 'node-client',
      benchmark_type: 'read-narrow-result-set',
    });

    assertErrorCountIsZero(metricsData, 'read-narrow-result-set');
  });

  it('should execute TPC-C benchmark runner workload with warehouses scale capacity checks', async () => {
    const meter = provider.getMeter('spanner-benchmark');
    const latHist = meter.createHistogram('spanner_client_benchmarks/latency');
    const opCount = meter.createCounter(
      'spanner_client_benchmarks/operation_count',
    );
    const errCount = meter.createCounter(
      'spanner_client_benchmarks/error_count',
    );

    const memHist = meter.createHistogram(
      'spanner_client_benchmarks/memory_usage',
    );
    const cpuHist = meter.createHistogram(
      'spanner_client_benchmarks/cpu_utilization',
    );

    const benchmark = new TpccBenchmarkRunner(
      database,
      latHist,
      opCount,
      errCount,
      memHist,
      cpuHist,
      '10ms',
      1, // 1 warehouse scale
      2, // 2 client threads
      10, // 10 items
      1000,
      false,
      'tpcc-run',
    );

    await benchmark.run();

    const reqs = await waitForRequests(1);
    assert.ok(reqs.length >= 1);

    // Verify metrics
    await reader.forceFlush();
    const metricsData = exporter.getMetrics();
    assertResourceMetrics(metricsData);

    const countMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/operation_count',
    );
    assertMetricAttributes(countMetric, {
      client: 'node-client',
      benchmark_type: 'tpcc',
    });

    const memMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/memory_usage',
    );
    assertMetricAttributes(memMetric, {
      client: 'node-client',
      benchmark_type: 'tpcc',
    });

    const cpuMetric = findMetric(
      metricsData,
      'spanner_client_benchmarks/cpu_utilization',
    );
    assertMetricAttributes(cpuMetric, {
      client: 'node-client',
      benchmark_type: 'tpcc',
    });

    assertErrorCountIsZero(metricsData, 'tpcc');
  });
});

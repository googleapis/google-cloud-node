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

import * as assert from 'assert';
import * as sinon from 'sinon';
import {MeterProvider, MetricReader} from '@opentelemetry/sdk-metrics';
import {GoogleAuth} from 'google-auth-library';
import {
  CloudMonitoringMetricsExporter,
  MAX_BATCH_EXPORT_SIZE,
} from '../../src/metrics/spanner-metrics-exporter';
import {
  SPANNER_METER_NAME,
  METRIC_NAME_ATTEMPT_COUNT,
  METRIC_NAME_ATTEMPT_LATENCIES,
  METRIC_NAME_OPERATION_COUNT,
  METRIC_NAME_OPERATION_LATENCIES,
  METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
  METRIC_NAME_GFE_LATENCIES,
} from '../../src/metrics/constants';
import {Counter, Meter, Histogram} from '@opentelemetry/api';
import {ExportResult, ExportResultCode} from '@opentelemetry/core';
import {Resource} from '@opentelemetry/resources';

const PROJECT_ID = 'test-project';
const INSTANCE_ID = 'test-instance';
const CLIENT_HASH = 'test-hash';
const INSTANCE_CONFIG = 'test-config';
const DATABASE_ID = 'test-db';
const LOCATION = 'test-location';

const auth = new GoogleAuth();

// Ensure custom exporter is valid
describe('CustomExporter', () => {
  it('should construct an exporter', () => {
    const exporter = new CloudMonitoringMetricsExporter({auth}, PROJECT_ID);
    assert.ok(typeof exporter.export === 'function');
    assert.ok(typeof exporter.shutdown === 'function');
  });

  it('should construct an exporter with credentials', () => {
    const auth = new GoogleAuth({
      credentials: {
        client_email: 'fake',
        private_key: '',
      },
    });
    auth.getProjectId = sinon.stub().resolves(PROJECT_ID);
    const exporter = new CloudMonitoringMetricsExporter({auth}, PROJECT_ID);

    assert(exporter);
  });

  it('should be able to shutdown', async () => {
    const exporter = new CloudMonitoringMetricsExporter({auth}, PROJECT_ID);
    await assert.doesNotReject(exporter.shutdown());
  });

  it('should be able to force flush', async () => {
    const exporter = new CloudMonitoringMetricsExporter({auth}, PROJECT_ID);
    await assert.doesNotReject(exporter.forceFlush());
  });
});

// Verify that the export call will convert and send the requests out.
describe('Export', () => {
  class InMemoryMetricReader extends MetricReader {
    protected async onForceFlush(): Promise<void> {}
    protected async onShutdown(): Promise<void> {}
  }
  let reader: MetricReader;
  let meterProvider: MeterProvider;
  let meter: Meter;
  let attempt_counter: Counter;
  let operation_counter: Counter;
  let gfe_connectivity_error_count: Counter;
  let attempt_latency: Histogram;
  let operation_latency: Histogram;
  let gfe_latency: Histogram;
  let metricAttributes: {[key: string]: string};
  let exporter: CloudMonitoringMetricsExporter;

  beforeEach(() => {
    exporter = new CloudMonitoringMetricsExporter({auth}, PROJECT_ID);
    reader = new InMemoryMetricReader();
    const resource = new Resource({
      ['project_id']: PROJECT_ID,
      ['client_hash']: CLIENT_HASH,
      ['location']: LOCATION,
      ['instance_id']: INSTANCE_ID,
      ['instance_config']: INSTANCE_CONFIG,
    });
    meterProvider = new MeterProvider({
      resource: resource,
      readers: [reader],
    });
    meter = meterProvider.getMeter(SPANNER_METER_NAME);
    metricAttributes = {
      client_uid: 'test_uid',
      client_name: 'test_name',
      database: DATABASE_ID,
      method: 'test_method',
      status: 'test_status',
      other: 'ignored',
    };

    attempt_counter = meter.createCounter(METRIC_NAME_ATTEMPT_COUNT, {
      description: 'Count of attempts',
      unit: '1',
    });

    operation_counter = meter.createCounter(METRIC_NAME_OPERATION_COUNT, {
      description: 'Count of operations',
      unit: '1',
    });

    gfe_connectivity_error_count = meter.createCounter(
      METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
      {
        description: 'Count of missing headers',
        unit: '1',
      },
    );

    attempt_latency = meter.createHistogram(METRIC_NAME_ATTEMPT_LATENCIES, {
      description: 'Test attempt latencies in ms',
      unit: 'ms',
    });

    operation_latency = meter.createHistogram(METRIC_NAME_OPERATION_LATENCIES, {
      description: 'Test operation latencies in ms',
      unit: 'ms',
    });

    gfe_latency = meter.createHistogram(METRIC_NAME_GFE_LATENCIES, {
      description: 'Test GFE latencies in ms',
      unit: 'ms',
    });
  });

  it('should export GCM metrics', async () => {
    attempt_counter.add(10, metricAttributes);
    operation_counter.add(25, metricAttributes);
    gfe_connectivity_error_count.add(12, metricAttributes);
    attempt_latency.record(30, metricAttributes);
    operation_latency.record(45, metricAttributes);
    gfe_latency.record(22, metricAttributes);

    const {errors, resourceMetrics} = await reader.collect();
    if (errors.length !== 0) {
      throw errors;
    }

    const sendTimeSeriesStub = sinon
      .stub(exporter as any, '_sendTimeSeries')
      .resolves();

    await new Promise<ExportResult>(resolve => {
      exporter.export(resourceMetrics, result => {
        if (result.error) {
          console.error(result.error);
        }
        resolve(result);
      });
    });

    assert(sendTimeSeriesStub.calledOnce);

    const [timeseries] = sendTimeSeriesStub.getCall(0).args;

    assert.strictEqual(timeseries.length, 6);
  });

  it('should exit early if resource metrics are empty', async () => {
    const {errors, resourceMetrics} = await reader.collect();

    if (errors.length !== 0) {
      throw errors;
    }
    const sendTimeSeriesStub = sinon
      .stub(exporter as any, '_sendTimeSeries')
      .resolves();

    await new Promise<ExportResult>(resolve => {
      exporter.export(resourceMetrics, result => {
        if (result.error) {
          console.error(result.error);
        }
        resolve(result);
      });
    });

    assert(sendTimeSeriesStub.notCalled);
  });

  it('should handle failed send during time series export with callback', async () => {
    const sendTimeSeriesStub = sinon
      .stub(exporter as any, '_sendTimeSeries')
      .rejects(new Error('Network error'));

    attempt_counter.add(10, metricAttributes);

    const {resourceMetrics} = await reader.collect();

    const resultCallbackSpy = sinon.spy();

    exporter.export(resourceMetrics, resultCallbackSpy);

    await new Promise(resolve => setImmediate(resolve));

    const callbackResult = resultCallbackSpy.getCall(0).args[0];
    assert.strictEqual(callbackResult.code, ExportResultCode.FAILED);
    assert.strictEqual(callbackResult.error.message, 'Network error');

    assert(sendTimeSeriesStub.calledOnce);
  });

  it('should batch exports into multiple calls', async () => {
    // Create metircs larger than the batch size
    const numberOfDistinctMetrics = MAX_BATCH_EXPORT_SIZE * 2 + 1;
    for (let i = 0; i < numberOfDistinctMetrics; i++) {
      attempt_counter.add(1, {...metricAttributes, testId: `batch-test-${i}`});
    }

    const {resourceMetrics} = await reader.collect();

    const sendTimeSeriesStub = sinon
      .stub(exporter as any, '_sendTimeSeries')
      .resolves();
    const resultCallbackSpy = sinon.spy();

    exporter.export(resourceMetrics, resultCallbackSpy);

    await new Promise(resolve => setImmediate(resolve));

    // Confirm number of metrics for each batch
    const expectedNumberOfCalls = Math.ceil(
      numberOfDistinctMetrics / MAX_BATCH_EXPORT_SIZE,
    );
    assert.strictEqual(sendTimeSeriesStub.callCount, expectedNumberOfCalls);
    assert.strictEqual(
      sendTimeSeriesStub.getCall(0).args[0].length,
      MAX_BATCH_EXPORT_SIZE,
    );
    assert.strictEqual(
      sendTimeSeriesStub.getCall(1).args[0].length,
      MAX_BATCH_EXPORT_SIZE,
    );
    assert.strictEqual(
      sendTimeSeriesStub.getCall(2).args[0].length,
      numberOfDistinctMetrics % MAX_BATCH_EXPORT_SIZE,
    );

    const callbackResult = resultCallbackSpy.getCall(0).args[0];
    assert.strictEqual(callbackResult.code, ExportResultCode.SUCCESS);
  });
});

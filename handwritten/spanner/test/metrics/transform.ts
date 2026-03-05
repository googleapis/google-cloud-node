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
import {_TEST_ONLY} from '../../src/metrics/transform';
import {
  AggregationTemporality,
  DataPoint,
  DataPointType,
  ExponentialHistogramMetricData,
  GaugeMetricData,
  HistogramMetricData,
  SumMetricData,
  Histogram,
  ExponentialHistogram,
  MeterProvider,
  MetricReader,
} from '@opentelemetry/sdk-metrics';
import {Resource} from '@opentelemetry/resources';
import {
  Attributes,
  Counter,
  Meter,
  ValueType as OTValueType,
} from '@opentelemetry/api';
import {
  SPANNER_RESOURCE_TYPE,
  SPANNER_METER_NAME,
  METRIC_NAME_ATTEMPT_COUNT,
} from '../../src/metrics/constants';
import {MetricKind, ValueType} from '../../src/metrics/external-types';
import {MetricsTracerFactory} from '../../src/metrics/metrics-tracer-factory';

const {
  _normalizeLabelKey,
  _transformMetricKind,
  _extractLabels,
  _formatHrTimeToGcmTime,
  _transformResource,
  _transformValueType,
  _transformPoint,
  transformResourceMetricToTimeSeriesArray,
} = _TEST_ONLY;

describe('transform', () => {
  let reader: MetricReader;
  let meterProvider: MeterProvider;
  let attributes: Attributes;
  let resource: Resource;
  let metricSum: SumMetricData;
  let metricGauge: GaugeMetricData;
  let metricHistogram: HistogramMetricData;
  let metricExponentialHistogram: ExponentialHistogramMetricData;
  let metricUnknown;
  let sumDataPoint: DataPoint<number>;
  let gaugeDataPoint: DataPoint<number>;
  let histogramDataPoint: DataPoint<Histogram>;
  let exponentialHistogramDataPoint: DataPoint<ExponentialHistogram>;
  let sandbox;
  let mockFactory;

  class InMemoryMetricReader extends MetricReader {
    protected async onShutdown(): Promise<void> {}
    protected async onForceFlush(): Promise<void> {}
  }

  before(() => {
    sandbox = sinon.createSandbox();
    mockFactory = sandbox.createStubInstance(MetricsTracerFactory);
    sandbox.stub(mockFactory, 'clientUid').get(() => 'test_uid');
    sandbox.stub(mockFactory, 'clientName').get(() => 'test_name');
    sandbox.stub(MetricsTracerFactory, 'getInstance').returns(mockFactory);

    reader = new InMemoryMetricReader();
    resource = new Resource({
      ['project_id']: 'project_id',
      ['client_hash']: 'test_hash',
      ['location']: 'test_location',
      ['instance_id']: 'instance_id',
      ['instance_config']: 'test_config',
    });
    meterProvider = new MeterProvider({
      resource: resource,
      readers: [reader],
    });
    attributes = {
      client_uid: 'test_uid',
      client_name: 'test_name',
      database: 'database_id',
      method: 'test_method',
      status: 'test_status',
      other: 'ignored',
    } as Attributes;

    metricSum = {
      dataPoints: [],
      aggregationTemporality: AggregationTemporality.DELTA,
      isMonotonic: true,
      dataPointType: DataPointType.SUM,
      descriptor: {valueType: OTValueType.INT, name: 'some_count'} as any,
    };

    metricGauge = {
      dataPoints: [],
      aggregationTemporality: '' as any,
      dataPointType: DataPointType.GAUGE,
      descriptor: {valueType: OTValueType.DOUBLE, name: 'a_count'} as any,
    };

    metricHistogram = {
      dataPoints: [],
      aggregationTemporality: '' as any,
      dataPointType: DataPointType.HISTOGRAM,
      descriptor: {} as any,
    };

    metricExponentialHistogram = {
      dataPoints: [],
      aggregationTemporality: '' as any,
      dataPointType: DataPointType.EXPONENTIAL_HISTOGRAM,
      descriptor: {} as any,
    };

    metricUnknown = {
      dataPoints: [],
      aggregationTemporality: '' as any,
      dataPointType: 'UNKNOWN_TYPE' as any,
      descriptor: {name: ''} as any,
    };

    sumDataPoint = {
      attributes,
      value: 0,
      startTime: process.hrtime(),
      endTime: process.hrtime(),
    };

    gaugeDataPoint = {
      attributes,
      value: 0.0,
      startTime: process.hrtime(),
      endTime: process.hrtime(),
    };

    histogramDataPoint = {
      attributes,
      startTime: process.hrtime(),
      endTime: process.hrtime(),
      value: {
        count: 1,
        buckets: {
          boundaries: [
            0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500,
            10000,
          ],
          counts: [0, 0, 0, 0, 1, 0],
        },
      },
    };

    exponentialHistogramDataPoint = {
      attributes: {},
      startTime: [1687103020, 679000000],
      endTime: [1687103020, 680000000],
      value: {
        count: 7,
        sum: 12.5,
        scale: -1,
        zeroCount: 1,
        positive: {
          offset: -1,
          bucketCounts: [1, 3, 1],
        },
        negative: {
          bucketCounts: [1],
          offset: 0,
        },
      },
    };
  });

  after(() => {
    sandbox.restore();
  });

  it('normalizes label keys', () => {
    [
      ['valid_key_1', 'valid_key_1'],
      ['hellø', 'hellø'],
      ['123', 'key_123'],
      ['key!321', 'key_321'],
      ['hyphens-dots.slashes/', 'hyphens_dots_slashes_'],
      ['non_letters_:£¢$∞', 'non_letters______'],
    ].map(([key, expected]) => {
      assert.strictEqual(_normalizeLabelKey(key), expected);
    });
  });

  it('should convert metric types to GCM metric kinds', () => {
    assert.strictEqual(_transformMetricKind(metricSum), MetricKind.CUMULATIVE);

    const nonMonotonicMetricSum = {
      dataPoints: [],
      aggregationTemporality: '' as any,
      isMonotonic: false,
      dataPointType: DataPointType.SUM,
      descriptor: {} as any,
    } as SumMetricData;

    assert.strictEqual(
      _transformMetricKind(nonMonotonicMetricSum),
      MetricKind.GAUGE,
    );

    assert.strictEqual(_transformMetricKind(metricGauge), MetricKind.GAUGE);

    assert.strictEqual(
      _transformMetricKind(metricHistogram),
      MetricKind.CUMULATIVE,
    );

    assert.strictEqual(
      _transformMetricKind(metricExponentialHistogram),
      MetricKind.CUMULATIVE,
    );

    assert.strictEqual(
      _transformMetricKind(metricUnknown),
      MetricKind.UNSPECIFIED,
    );
  });

  it('should extract metric and resource labels', () => {
    const dataLabels = _extractLabels(sumDataPoint, 'project_id');
    const resourceLabels = _extractLabels(resource, 'project_id');

    // Metric Labels
    assert.strictEqual(dataLabels.metricLabels['client_uid'], 'test_uid');
    assert.strictEqual(dataLabels.metricLabels['client_name'], 'test_name');
    assert.strictEqual(dataLabels.metricLabels['database'], 'database_id');
    assert.strictEqual(dataLabels.metricLabels['method'], 'test_method');
    assert.strictEqual(dataLabels.metricLabels['status'], 'test_status');

    // Resource Labels
    assert.strictEqual(
      resourceLabels.monitoredResourceLabels['project_id'],
      'project_id',
    );
    assert.strictEqual(
      resourceLabels.monitoredResourceLabels['instance_id'],
      'instance_id',
    );
    assert.strictEqual(
      resourceLabels.monitoredResourceLabels['instance_config'],
      'test_config',
    );
    assert.strictEqual(
      resourceLabels.monitoredResourceLabels['location'],
      'test_location',
    );
    assert.strictEqual(
      resourceLabels.monitoredResourceLabels['client_hash'],
      'test_hash',
    );

    // Other Labels
    assert(!('other' in dataLabels.metricLabels));
    assert(!('other' in resourceLabels.metricLabels));
    assert(!('other' in dataLabels.monitoredResourceLabels));
    assert(!('other' in resourceLabels.monitoredResourceLabels));
  });

  it('should transform otel value types to GCM value types', () => {
    assert.strictEqual(_transformValueType(metricSum), ValueType.INT64);

    assert.strictEqual(_transformValueType(metricGauge), ValueType.DOUBLE);

    assert.strictEqual(
      _transformValueType(metricHistogram),
      ValueType.DISTRIBUTION,
    );

    assert.strictEqual(
      _transformValueType(metricExponentialHistogram),
      ValueType.DISTRIBUTION,
    );

    assert.strictEqual(
      _transformValueType(metricUnknown),
      ValueType.VALUE_TYPE_UNSPECIFIED,
    );
  });

  it('should tranform the datapoint to a GCM point type', () => {
    const sumExpectation = {
      value: {
        int64Value: '0',
      },
      interval: {
        startTime: _formatHrTimeToGcmTime(sumDataPoint.startTime),
        endTime: _formatHrTimeToGcmTime(sumDataPoint.endTime),
      },
    };
    assert.deepStrictEqual(
      _transformPoint(metricSum, sumDataPoint),
      sumExpectation,
    );

    const gaugeExpectation = {
      value: {
        doubleValue: '0.0',
      },
      interval: {
        endTime: _formatHrTimeToGcmTime(gaugeDataPoint.endTime),
      },
    };

    assert.deepStrictEqual(
      _transformPoint(metricGauge, gaugeDataPoint),
      gaugeExpectation,
    );

    const histogramExpectation = {
      value: {
        distributionValue: {
          count: '1',
          mean: 0,
          bucketOptions: {
            explicitBuckets: {
              bounds: [
                0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000,
                7500, 10000,
              ],
            },
          },
          bucketCounts: ['0', '0', '0', '0', '1', '0'],
        },
      },
      interval: {
        startTime: _formatHrTimeToGcmTime(histogramDataPoint.startTime),
        endTime: _formatHrTimeToGcmTime(histogramDataPoint.endTime),
      },
    };

    assert.deepStrictEqual(
      _transformPoint(metricHistogram, histogramDataPoint),
      histogramExpectation,
    );

    const exponentialHistogramExpectation = {
      interval: {
        startTime: _formatHrTimeToGcmTime(
          exponentialHistogramDataPoint.startTime,
        ),
        endTime: _formatHrTimeToGcmTime(exponentialHistogramDataPoint.endTime),
      },
      value: {
        distributionValue: {
          bucketCounts: ['2', '1', '3', '1', '0'],
          bucketOptions: {
            exponentialBuckets: {
              growthFactor: 4,
              numFiniteBuckets: 3,
              scale: 0.25,
            },
          },
          count: '7',
          mean: 1.7857142857142858,
        },
      },
    };

    assert.deepStrictEqual(
      _transformPoint(
        metricExponentialHistogram,
        exponentialHistogramDataPoint,
      ),
      exponentialHistogramExpectation,
    );
  });

  it('should create a MonitoredResource with spanner type', () => {
    const labels = {};
    const resource = _transformResource(labels);
    assert(resource);
    assert.strictEqual(resource.type, SPANNER_RESOURCE_TYPE);
  });

  it('should convert otel metrics to GCM TimeSeries', async () => {
    const meter: Meter = meterProvider.getMeter(SPANNER_METER_NAME);

    const attemptCounter: Counter = meter.createCounter(
      METRIC_NAME_ATTEMPT_COUNT,
      {
        description: 'Count of attempts',
        unit: 'count',
      },
    );

    attemptCounter.add(1, {});
    attemptCounter.add(2, {});

    const {errors, resourceMetrics} = await reader.collect();
    if (errors.length !== 0) {
      throw errors;
    }
    const timeseries = transformResourceMetricToTimeSeriesArray(
      resourceMetrics,
      'project_id',
    );
    assert.strictEqual(timeseries.length, 1);

    // Verify the contents of the TimeSeries
    const ts = timeseries[0];

    assert.strictEqual(ts.valueType, 'INT64');

    assert.strictEqual(ts.points?.length, 1);

    assert.strictEqual(
      (ts.points[0].value as {int64Value: string})?.int64Value,
      '3',
    );
  });

  it('should filter out metrics without spanner-nodejs scope', async () => {
    reader = new InMemoryMetricReader();
    meterProvider = new MeterProvider({
      readers: [reader],
    });

    const meter: Meter = meterProvider.getMeter('wrong_scope');

    const attemptCounter: Counter = meter.createCounter(
      METRIC_NAME_ATTEMPT_COUNT,
      {
        description: 'Count of attempts',
        unit: 'count',
      },
    );

    attemptCounter.add(1, {});
    attemptCounter.add(2, {});

    const {errors, resourceMetrics} = await reader.collect();

    if (errors.length !== 0) {
      throw errors;
    }
    const timeseries = transformResourceMetricToTimeSeriesArray(
      resourceMetrics,
      'project_id',
    );

    assert.strictEqual(timeseries.length, 0);
  });
});

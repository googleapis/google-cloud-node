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

export const RETRY_COUNT_NAME =
  'bigtable.googleapis.com/internal/client/retry_count';
export const CONNECTIIVTY_ERROR_COUNT =
  'bigtable.googleapis.com/internal/client/connectivity_error_count';

/**
 * An example of the expected output format after converting
 * `expectedOtelExportInput` using the `metricsToRequest` function.
 *
 * This object represents the data structure that is ready to be sent to the
 * Google Cloud Monitoring API's `createTimeSeries` method. It demonstrates
 * how OpenTelemetry metrics are transformed into the Cloud Monitoring format,
 * including the structure of time series data, metric types, resource labels,
 * and data point values.
 *
 */
export const expectedOtelExportConvertedValue = {
  name: 'projects/my-project',
  timeSeries: [
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/operation_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
          streaming: 'true',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 6000,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/attempt_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'DEADLINE_EXCEEDED',
          streaming: 'true',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 2000,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/attempt_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
          streaming: 'true',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 1000,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/retry_count',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      valueType: 'INT64',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            int64Value: 1,
          },
        },
      ],
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/retry_count',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      valueType: 'INT64',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            int64Value: 1,
          },
        },
      ],
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/application_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 1256,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/first_response_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 2000,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/server_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'DEADLINE_EXCEEDED',
          streaming: 'true',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 101,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/server_latencies',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
          streaming: 'true',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      metricKind: 'CUMULATIVE',
      valueType: 'DISTRIBUTION',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            distributionValue: {
              count: '1',
              mean: 103,
              bucketOptions: {
                explicitBuckets: {
                  bounds: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                },
              },
              bucketCounts: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '1',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
              ],
            },
          },
        },
      ],
      unit: 'ms',
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/connectivity_error_count',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'DEADLINE_EXCEEDED',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      valueType: 'INT64',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            int64Value: 0,
          },
        },
      ],
    },
    {
      metric: {
        type: 'bigtable.googleapis.com/internal/client/connectivity_error_count',
        labels: {
          method: 'Bigtable.ReadRows',
          client_uid: 'fake-uuid',
          client_name: 'nodejs-bigtable',
          status: 'OK',
        },
      },
      resource: {
        type: 'bigtable_client_raw',
        labels: {
          cluster: 'fake-cluster3',
          instance: 'fakeInstanceId',
          project_id: 'my-project',
          table: 'fakeTableId',
          zone: 'us-west1-c',
        },
      },
      valueType: 'INT64',
      points: [
        {
          interval: {
            endTime: {
              seconds: 456,
              nanos: 789,
            },
            startTime: {
              seconds: 123,
              nanos: 789,
            },
          },
          value: {
            int64Value: 0,
          },
        },
      ],
    },
  ],
};

/**
 * An example of an `ExportInput` object, representing OpenTelemetry metrics
 * data in the format expected by the `metricsToRequest` function.
 *
 * This object demonstrates the structure of the input data, including
 * resource attributes, scope information, and a collection of metrics
 * (both counter and distribution types) with their associated data points.
 *
 * @remarks
 *   This structure is designed to be converted into a Google Cloud Monitoring
 *   `CreateTimeSeriesRequest` using the `metricsToRequest` function. It
 *   includes various types of metrics that are sent by the Bigtable client
 *   library, such as operation latencies, attempt latencies, retry counts,
 *   and server latencies.
 *
 */
export const expectedOtelExportInput = {
  resource: {
    _attributes: {
      'service.name': 'Cloud Bigtable Table',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.30.1',
    },
    asyncAttributesPending: false,
    _syncAttributes: {
      'service.name': 'Cloud Bigtable Table',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.30.1',
    },
    _asyncAttributesPromise: {},
  },
  scopeMetrics: [
    {
      scope: {
        name: 'bigtable.googleapis.com',
        version: '',
      },
      metrics: [
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/operation_latencies',
            type: 'HISTOGRAM',
            description:
              "The total end-to-end latency across all RPC attempts associated with a Bigtable operation. This metric measures an operation's round trip from the client to Bigtable and back to the client and includes all retries.",
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                projectId: 'my-project',
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 6000,
                max: 6000,
                sum: 6000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/attempt_latencies',
            type: 'HISTOGRAM',
            description:
              'The latencies of a client RPC attempt. Under normal circumstances, this value is identical to operation_latencies. If the client receives transient errors, however, then operation_latencies is the sum of all attempt_latencies and the exponential delays.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                projectId: 'my-project',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 2000,
                max: 2000,
                sum: 2000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                projectId: 'my-project',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 1000,
                max: 1000,
                sum: 1000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/retry_count',
            type: 'COUNTER',
            description:
              'A counter that records the number of attempts that an operation required to complete. Under normal circumstances, this value is empty.',
            unit: '',
            valueType: 1,
            advice: {},
          },
          aggregationTemporality: 1,
          dataPointType: 3,
          dataPoints: [
            {
              attributes: {
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 1,
            },
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 1,
            },
          ],
          isMonotonic: true,
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/application_latencies',
            type: 'HISTOGRAM',
            description:
              'The time from when the client receives the response to a request until the application reads the response. This metric is most relevant for ReadRows requests. The start and stop times for this metric depend on the way that you send the read request; see Application blocking latencies timer examples for details.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 1256,
                max: 1256,
                sum: 1256,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/first_response_latencies',
            type: 'HISTOGRAM',
            description:
              'Latencies from when a client sends a request and receives the first row of the response.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 2000,
                max: 2000,
                sum: 2000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/server_latencies',
            type: 'HISTOGRAM',
            description:
              'Latencies between the time when the Google frontend receives an RPC and when it sends the first byte of the response.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 101,
                max: 101,
                sum: 101,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 103,
                max: 103,
                sum: 103,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0,
                  ],
                },
                count: 1,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/connectivity_error_count',
            type: 'COUNTER',
            description:
              "The number of requests that failed to reach Google's network. In normal cases, this number is 0. When the number is not 0, it can indicate connectivity issues between the application and the Google network.",
            unit: '',
            valueType: 1,
            advice: {},
          },
          aggregationTemporality: 1,
          dataPointType: 3,
          dataPoints: [
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 0,
            },
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
                projectId: 'my-project',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 0,
            },
          ],
          isMonotonic: true,
        },
      ],
    },
  ],
};

export const expectedOtelHundredExportInputs = {
  resource: {
    _attributes: {
      'service.name': 'Cloud Bigtable Table',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.30.1',
      'monitored_resource.project_id': 'cloud-native-db-dpes-shared',
    },
    asyncAttributesPending: false,
    _syncAttributes: {
      'service.name': 'Cloud Bigtable Table',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.30.1',
      'monitored_resource.project_id': 'cloud-native-db-dpes-shared',
    },
    _asyncAttributesPromise: {},
  },
  scopeMetrics: [
    {
      scope: {
        name: 'bigtable.googleapis.com',
        version: '',
      },
      metrics: [
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/operation_latencies',
            type: 'HISTOGRAM',
            description:
              "The total end-to-end latency across all RPC attempts associated with a Bigtable operation. This metric measures an operation's round trip from the client to Bigtable and back to the client and includes all retries.",
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 10000,
                max: 10000,
                sum: 1000000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                  ],
                },
                count: 100,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/attempt_latencies',
            type: 'HISTOGRAM',
            description:
              'The latencies of a client RPC attempt. Under normal circumstances, this value is identical to operation_latencies. If the client receives transient errors, however, then operation_latencies is the sum of all attempt_latencies and the exponential delays.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 4000,
                max: 4000,
                sum: 400000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                  ],
                },
                count: 100,
              },
            },
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 3000,
                max: 3000,
                sum: 300000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                  ],
                },
                count: 100,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/retry_count',
            type: 'COUNTER',
            description:
              'A counter that records the number of attempts that an operation required to complete. Under normal circumstances, this value is empty.',
            unit: '',
            valueType: 1,
            advice: {},
          },
          aggregationTemporality: 1,
          dataPointType: 3,
          dataPoints: [
            {
              attributes: {
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 100,
            },
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 100,
            },
          ],
          isMonotonic: true,
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/application_latencies',
            type: 'HISTOGRAM',
            description:
              'The time from when the client receives the response to a request until the application reads the response. This metric is most relevant for ReadRows requests. The start and stop times for this metric depend on the way that you send the read request; see Application blocking latencies timer examples for details.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 1000,
                max: 1000,
                sum: 200000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                  ],
                },
                count: 200,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/first_response_latencies',
            type: 'HISTOGRAM',
            description:
              'Latencies from when a client sends a request and receives the first row of the response.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                status: 'OK',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 2000,
                max: 2000,
                sum: 200000,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0,
                  ],
                },
                count: 100,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/server_latencies',
            type: 'HISTOGRAM',
            description:
              'Latencies between the time when the Google frontend receives an RPC and when it sends the first byte of the response.',
            unit: 'ms',
            valueType: 1,
            advice: {
              explicitBucketBoundaries: [
                0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65, 80,
                100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000, 2000,
                5000, 10000, 20000, 50000, 100000, 200000, 400000, 800000,
                1600000, 3200000,
              ],
            },
          },
          aggregationTemporality: 1,
          dataPointType: 0,
          dataPoints: [
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 101,
                max: 101,
                sum: 10100,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0,
                  ],
                },
                count: 100,
              },
            },
            {
              attributes: {
                streaming: 'true',
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: {
                min: 103,
                max: 103,
                sum: 10300,
                buckets: {
                  boundaries: [
                    0, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 25, 30, 40, 50, 65,
                    80, 100, 130, 160, 200, 250, 300, 400, 500, 650, 800, 1000,
                    2000, 5000, 10000, 20000, 50000, 100000, 200000, 400000,
                    800000, 1600000, 3200000,
                  ],
                  counts: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0,
                  ],
                },
                count: 100,
              },
            },
          ],
        },
        {
          descriptor: {
            name: 'bigtable.googleapis.com/internal/client/connectivity_error_count',
            type: 'COUNTER',
            description:
              "The number of requests that failed to reach Google's network. In normal cases, this number is 0. When the number is not 0, it can indicate connectivity issues between the application and the Google network.",
            unit: '',
            valueType: 1,
            advice: {},
          },
          aggregationTemporality: 1,
          dataPointType: 3,
          dataPoints: [
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'DEADLINE_EXCEEDED',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 0,
            },
            {
              attributes: {
                method: 'Bigtable.ReadRows',
                client_uid: 'fake-uuid',
                status: 'OK',
                client_name: 'nodejs-bigtable',
                instanceId: 'fakeInstanceId',
                table: 'fakeTableId',
                cluster: 'fake-cluster3',
                zone: 'us-west1-c',
              },
              startTime: [123, 789],
              endTime: [456, 789],
              value: 0,
            },
          ],
          isMonotonic: true,
        },
      ],
    },
  ],
};

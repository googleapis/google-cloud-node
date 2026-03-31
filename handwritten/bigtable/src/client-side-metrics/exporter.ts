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

import {MetricExporter} from '@google-cloud/opentelemetry-cloud-monitoring-exporter';
import {
  DataPoint,
  ExponentialHistogram,
  Histogram,
  ResourceMetrics,
} from '@opentelemetry/sdk-metrics';
import {ClientOptions, ServiceError} from 'google-gax';
import {MetricServiceClient} from '@google-cloud/monitoring';
import {google} from '@google-cloud/monitoring/build/protos/protos';
import ICreateTimeSeriesRequest = google.monitoring.v3.ICreateTimeSeriesRequest;

export interface ExportResult {
  code: number;
}

/**
 * Type guard function to determine if a given value is a counter value (a number).
 *
 * This function checks if a value, which could be either a `DistributionValue`
 * object or a `number`, is specifically a `number`. This is used to differentiate
 * between counter metrics (which have numeric values) and distribution metrics
 * (which have more complex, object-based values).
 *
 */
function isCounterValue(
  dataPoint:
    | DataPoint<number>
    | DataPoint<Histogram>
    | DataPoint<ExponentialHistogram>,
): dataPoint is DataPoint<number> {
  return typeof dataPoint.value === 'number';
}

function getInterval(
  dataPoint:
    | DataPoint<number>
    | DataPoint<Histogram>
    | DataPoint<ExponentialHistogram>,
) {
  return {
    endTime: {
      seconds: dataPoint.endTime[0],
      nanos: dataPoint.endTime[1],
    },
    startTime: {
      seconds: dataPoint.startTime[0],
      nanos: dataPoint.startTime[1],
    },
  };
}

/**
 * This function gets the timeseries data points for metrics that are
 * represented as distributions on the backend. These data points are part of a
 * timeseries object that is recorded to Google Cloud Monitoring.
 *
 * @param {DataPoint} dataPoint The datapoint containing the data we wish to
 * send to the Google Cloud Monitoring dashboard
 */
function getDistributionPoints(
  dataPoint: DataPoint<Histogram> | DataPoint<ExponentialHistogram>,
) {
  const value = dataPoint.value;
  return [
    {
      interval: getInterval(dataPoint),
      value: {
        distributionValue: {
          count: String(value.count),
          mean: value.count && value.sum ? value.sum / value.count : 0,
          bucketOptions: {
            explicitBuckets: {
              bounds: (value as Histogram).buckets.boundaries,
            },
          },
          bucketCounts: (value as Histogram).buckets.counts.map(String),
        },
      },
    },
  ];
}

/**
 * This function gets the timeseries data points for metrics that are
 * represented as integers on the backend. These data points are part of a
 * timeseries object that is recorded to Google Cloud Monitoring.
 *
 * @param {DataPoint} dataPoint The datapoint containing the data we wish to
 * send to the Google Cloud Monitoring dashboard
 */
function getIntegerPoints(dataPoint: DataPoint<number>) {
  return [
    {
      interval: getInterval(dataPoint),
      value: {
        int64Value: dataPoint.value,
      },
    },
  ];
}

/**
 * getResource gets the resource object which is used for building the timeseries
 * object that will be sent to Google Cloud Monitoring dashboard
 *
 * @param {string} projectId The name of the project
 * @param {DataPoint} dataPoint The datapoint containing the data we wish to
 * send to the Google Cloud Monitoring dashboard
 */
function getResource(
  dataPoint:
    | DataPoint<number>
    | DataPoint<Histogram>
    | DataPoint<ExponentialHistogram>,
) {
  const resourceLabels = {
    cluster: dataPoint.attributes.cluster,
    instance: dataPoint.attributes.instanceId,
    project_id: dataPoint.attributes.projectId,
    table: dataPoint.attributes.table,
    zone: dataPoint.attributes.zone,
  };
  return {
    type: 'bigtable_client_raw',
    labels: resourceLabels,
  };
}

/**
 * getMetric gets the metric object which is used for building the timeseries
 * object that will be sent to Google Cloud Monitoring dashboard
 *
 * @param {string} metricName The backend name of the metric that we want to record
 * @param {DataPoint} dataPoint The datapoint containing the data we wish to
 * send to the Google Cloud Monitoring dashboard
 */
function getMetric(
  metricName: string,
  dataPoint:
    | DataPoint<number>
    | DataPoint<Histogram>
    | DataPoint<ExponentialHistogram>,
) {
  const streaming = dataPoint.attributes.streaming;
  const app_profile = dataPoint.attributes.app_profile;
  const status = dataPoint.attributes.status;
  return {
    type: metricName,
    labels: Object.assign(
      {
        method: dataPoint.attributes.method,
        client_uid: dataPoint.attributes.client_uid,
        client_name: dataPoint.attributes.client_name,
      },
      status ? {status} : null,
      streaming ? {streaming} : null,
      app_profile ? {app_profile} : null,
    ),
  };
}

/**
 * Converts OpenTelemetry metrics data into a format suitable for the Google Cloud
 * Monitoring API's `createTimeSeries` method.
 *
 * This function transforms the structured metrics data, including resource and
 * metric attributes, data points, and aggregation information, into an object
 * that conforms to the expected request format of the Cloud Monitoring API.
 *
 * @param {ResourceMetrics} exportArgs - The OpenTelemetry metrics data to be converted. This
 *   object contains resource attributes, scope information, and a list of
 *   metrics with their associated data points.
 *
 * @returns An object representing a `CreateTimeSeriesRequest`, ready for sending
 *   to the Google Cloud Monitoring API. This object contains the project name
 *   and an array of time series data points, formatted for ingestion by
 *   Cloud Monitoring.
 *
 * @throws Will throw an error if there are issues converting the data.
 *
 * @remarks
 *   The output format is specific to the Cloud Monitoring API and involves
 *   mapping OpenTelemetry concepts to Cloud Monitoring's data model, including:
 *   - Mapping resource attributes to resource labels.
 *   - Mapping metric attributes to metric labels.
 *   - Handling different metric types (counter, distribution).
 *   - Converting data points to the correct structure, including start and end
 *     times, values, and bucket information for distributions.
 *
 * @example
 *   const exportInput: ExportInput = { ... }; // Example ExportInput object
 *   const monitoringRequest = metricsToRequest(exportInput);
 *   // monitoringRequest can now be used in monitoringClient.createTimeSeries(monitoringRequest)
 *
 *
 */
export function metricsToRequest(exportArgs: ResourceMetrics) {
  const timeSeriesArray = [];
  let projectId;
  for (const scopeMetrics of exportArgs.scopeMetrics) {
    for (const scopeMetric of scopeMetrics.metrics) {
      for (const dataPoint of scopeMetric.dataPoints) {
        if (!projectId) {
          projectId = dataPoint.attributes.projectId;
        }
        const metric = getMetric(scopeMetric.descriptor.name, dataPoint);
        const resource = getResource(dataPoint);
        if (isCounterValue(dataPoint)) {
          timeSeriesArray.push({
            metric,
            resource,
            valueType: 'INT64',
            points: getIntegerPoints(dataPoint),
          });
        } else {
          timeSeriesArray.push({
            metric,
            resource,
            metricKind: 'CUMULATIVE',
            valueType: 'DISTRIBUTION',
            points: getDistributionPoints(dataPoint),
            unit: scopeMetric.descriptor.unit || 'ms', // Default to 'ms' if no unit is specified
          });
        }
      }
    }
  }
  return {
    name: `projects/${projectId}`,
    timeSeries: timeSeriesArray,
  };
}

/**
 * A custom OpenTelemetry `MetricExporter` that sends metrics data to Google Cloud
 * Monitoring.
 *
 * This class extends the base `MetricExporter` from `@google-cloud/opentelemetry-cloud-monitoring-exporter`
 * and handles the process of converting OpenTelemetry metrics data into the
 * format required by the Google Cloud Monitoring API. It uses the
 * `MetricServiceClient` to send the data to Google Cloud Monitoring's
 * `createTimeSeries` method.
 *
 * @remarks
 *   This exporter relies on the `metricsToRequest` function to perform the
 *   necessary transformation of OpenTelemetry metrics into Cloud Monitoring
 *   `TimeSeries` data.
 *
 *   The exporter is asynchronous and will not block the calling thread while
 *   sending metrics. It manages the Google Cloud Monitoring client and handles
 *   potential errors during the export process.
 *
 *   The class expects the `ResourceMetrics` to have been correctly configured
 *   and populated with the required resource attributes to correctly identify
 *   the monitored resource in Cloud Monitoring.
 *
 * @example
 *   // Create an instance of the CloudMonitoringExporter
 *   const exporter = new CloudMonitoringExporter();
 *
 *   // Use the exporter with a MeterProvider
 *   const meterProvider = new MeterProvider({
 *     resource: new Resource({
 *       'service.name': 'my-service',
 *       // ... other resource attributes
 *     }),
 *     readers: [new PeriodicExportingMetricReader({
 *         exporter: exporter,
 *         exportIntervalMillis: 10000 // Export every 10 seconds
 *     })]
 *   });
 *
 *   // Now start instrumenting your application using the meter
 *   const meter = meterProvider.getMeter('my-meter');
 *   // ... create counters, histograms, etc.
 *
 * @beta
 */
export class CloudMonitoringExporter extends MetricExporter {
  private client: MetricServiceClient;

  constructor(options: ClientOptions) {
    super();
    if (options && options.apiEndpoint) {
      // We want the MetricServiceClient to always hit its default endpoint.
      delete options.apiEndpoint;
    }
    this.client = new MetricServiceClient(options);
  }

  async export(
    metrics: ResourceMetrics,
    resultCallback: (result: ExportResult) => void,
  ): Promise<void> {
    (async () => {
      try {
        const request = metricsToRequest(metrics);
        await this.client.createServiceTimeSeries(
          request as ICreateTimeSeriesRequest,
        );
        // The resultCallback typically accepts a value equal to {code: x}
        // for some value x along with other info. When the code is equal to 0
        // then the operation completed successfully. When the code is not equal
        // to 0 then the operation failed. The resultCallback will not log
        // anything to the console whether the error code was 0 or not.
        resultCallback({code: 0});
      } catch (error) {
        resultCallback(error as ServiceError);
      }
    })().catch(err => {
      throw err;
    });
  }
}

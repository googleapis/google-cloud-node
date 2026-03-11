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

import {PushMetricExporter, ResourceMetrics} from '@opentelemetry/sdk-metrics';
import {ExportResult, ExportResultCode} from '@opentelemetry/core';
import {ExporterOptions} from './external-types';
import {MetricServiceClient} from '@google-cloud/monitoring';
import {transformResourceMetricToTimeSeriesArray} from './transform';
import {status} from '@grpc/grpc-js';
import {MIN_EXPORT_FREQUENCY_MS} from './constants';

// Stackdriver Monitoring v3 only accepts up to 200 TimeSeries per
// CreateTimeSeries call.
export const MAX_BATCH_EXPORT_SIZE = 200;

/**
 * Format and sends metrics information to Google Cloud Monitoring.
 */
export class CloudMonitoringMetricsExporter implements PushMetricExporter {
  private _projectId: string;
  private _lastExported: Date = new Date(0);
  private readonly _client: MetricServiceClient;
  private _metricsExportFailureLogged = false;

  constructor({auth}: ExporterOptions, projectId: string) {
    this._client = new MetricServiceClient({auth: auth});

    this._projectId = projectId;
  }

  /**
   * Implementation for {@link PushMetricExporter.export}.
   * Calls the async wrapper method {@link _exportAsync} and
   * assures no rejected promises bubble up to the caller.
   *
   * @param metrics Metrics to be sent to the Google Cloud 3Monitoring backend
   * @param resultCallback result callback to be called on finish
   */
  export(
    metrics: ResourceMetrics,
    resultCallback: (result: ExportResult) => void,
  ): void {
    // Do not export metrics if we've already exported within the last 30s
    const now = new Date();
    if (
      now.getTime() - this._lastExported.getTime() <=
      MIN_EXPORT_FREQUENCY_MS
    ) {
      return;
    }

    this._lastExported = now;
    this._exportAsync(metrics).then(resultCallback, err => {
      resultCallback({code: ExportResultCode.FAILED, error: err});
    });
  }

  async shutdown(): Promise<void> {}
  async forceFlush(): Promise<void> {}

  /**
   * Asnyc wrapper for the {@link export} implementation.
   * Writes the current values of all exported {@link MetricRecord}s
   * to the Google Cloud Monitoring backend.
   *
   * @param resourceMetrics Metrics to be sent to the Google Cloud Monitoring backend
   */
  private async _exportAsync(
    resourceMetrics: ResourceMetrics,
  ): Promise<ExportResult> {
    const timeSeriesList = transformResourceMetricToTimeSeriesArray(
      resourceMetrics,
      this._projectId,
    );

    let failure: {sendFailed: false} | {sendFailed: true; error: Error} = {
      sendFailed: false,
    };
    await Promise.all(
      this._partitionList(timeSeriesList, MAX_BATCH_EXPORT_SIZE).map(
        async batchedTimeSeries => this._sendTimeSeries(batchedTimeSeries),
      ),
    ).catch(e => {
      if (!this._metricsExportFailureLogged) {
        const error = e as {code: number};
        let msg = 'Send TimeSeries failed:';
        if (error.code === status.PERMISSION_DENIED) {
          msg += ` Need monitoring metric writer permission on project ${this._projectId}. Follow https://cloud.google.com/spanner/docs/view-manage-client-side-metrics#access-client-side-metrics to set up permissions`;
        }
        console.warn(msg);
        this._metricsExportFailureLogged = true;
      }
      failure = {sendFailed: true, error: asError(e)};
    });

    if (!failure.sendFailed && this._metricsExportFailureLogged) {
      this._metricsExportFailureLogged = false;
    }

    return failure.sendFailed
      ? {
          code: ExportResultCode.FAILED,
          error: (failure as {sendFailed: boolean; error: Error}).error,
        }
      : {code: ExportResultCode.SUCCESS};
  }

  private async _sendTimeSeries(timeSeries) {
    if (timeSeries.length === 0) {
      return Promise.resolve();
    }

    // TODO: Use createServiceTimeSeries when it is available
    await this._client.createTimeSeries({
      name: `projects/${this._projectId}`,
      timeSeries: timeSeries,
    });
  }

  /** Returns the minimum number of arrays of max size chunkSize, partitioned from the given array. */
  private _partitionList(list, chunkSize: number) {
    return Array.from({length: Math.ceil(list.length / chunkSize)}, (_, i) =>
      list.slice(i * chunkSize, (i + 1) * chunkSize),
    );
  }
}

function asError(error: unknown): Error {
  return error instanceof Error ? error : new Error(String(error));
}

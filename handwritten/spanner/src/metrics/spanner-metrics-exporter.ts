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
 * Validates that a port number is an integer within the TCP/UDP range 1–65535.
 *
 * @param port The numeric port value to validate.
 * @returns The validated port number.
 */
function validatePort(port: number): number {
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid monitoring endpoint port: ${port}`);
  }
  return port;
}

/**
 * Parses and validates a decimal port string within the TCP/UDP range 1–65535.
 *
 * @param portStr The port string extracted from a monitoring endpoint.
 * @returns The validated numeric port.
 */
function parsePortString(portStr: string): number {
  if (!/^\d+$/.test(portStr)) {
    throw new Error(`Invalid monitoring endpoint port: ${portStr}`);
  }
  return validatePort(Number(portStr));
}

/**
 * Trims and validates a configured universe domain string.
 *
 * @param universeDomain The universe domain string to normalize.
 * @returns The trimmed non-empty universe domain.
 */
export function normalizeUniverseDomain(universeDomain: string): string {
  if (typeof universeDomain !== 'string' || universeDomain.trim() === '') {
    throw new Error('universeDomain cannot be empty.');
  }
  return universeDomain.trim();
}

/**
 * Formats a parsed monitoring endpoint into a canonical `host` or `host:port` key.
 *
 * @param parsed Parsed endpoint containing `apiEndpoint` and optional `port`.
 * @returns Canonical monitoring target key string.
 */
export function formatMonitoringTargetKey(parsed: {
  apiEndpoint: string;
  port?: number;
}): string {
  return parsed.port !== undefined
    ? `${parsed.apiEndpoint}:${parsed.port}`
    : parsed.apiEndpoint;
}

export interface ResolvedExporterConfig {
  clientOptions: Record<string, unknown>;
  universeDomain?: string;
  monitoringEndpoint?: string;
}

/**
 * Parses and validates a Cloud Monitoring endpoint string (`host`, `host:port`,
 * `[ipv6]`, or `[ipv6]:port`) into separate `apiEndpoint` and optional `port`
 * fields suitable for `MetricServiceClient` / `google-gax`.
 *
 * Brackets around IPv6 addresses are preserved on `apiEndpoint` because
 * `google-gax` builds the gRPC target as `${servicePath}:${port}`.
 *
 * @param endpoint The monitoring endpoint string to parse.
 * @returns Parsed `{apiEndpoint, port}` object.
 */
export function parseMonitoringEndpoint(endpoint: string): {
  apiEndpoint: string;
  port?: number;
} {
  if (typeof endpoint !== 'string' || endpoint.trim() === '') {
    throw new Error('Monitoring endpoint cannot be empty.');
  }
  if (endpoint !== endpoint.trim() || /\s/.test(endpoint)) {
    throw new Error('Monitoring endpoint must not contain whitespace.');
  }
  if (
    /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(endpoint) ||
    endpoint.startsWith('http:') ||
    endpoint.startsWith('https:')
  ) {
    throw new Error(
      'Monitoring endpoint must not include a protocol scheme (http/https).',
    );
  }
  if (
    endpoint.includes('/') ||
    endpoint.includes('?') ||
    endpoint.includes('#')
  ) {
    throw new Error(
      'Monitoring endpoint must not contain path, query, or fragment components.',
    );
  }

  let host: string;
  let embeddedPort: number | undefined;

  if (endpoint.startsWith('[')) {
    const closeIdx = endpoint.indexOf(']');
    if (closeIdx === -1) {
      throw new Error('Monitoring endpoint has an unclosed IPv6 bracket.');
    }
    const innerHost = endpoint.slice(1, closeIdx);
    if (
      innerHost.length === 0 ||
      innerHost.includes('[') ||
      innerHost.includes(']')
    ) {
      throw new Error('Monitoring endpoint has an invalid IPv6 host.');
    }
    // Preserve brackets so google-gax builds `[ipv6]:port`.
    host = endpoint.slice(0, closeIdx + 1);
    const remainder = endpoint.slice(closeIdx + 1);
    if (remainder.length > 0) {
      if (!remainder.startsWith(':')) {
        throw new Error(
          'Monitoring endpoint has unexpected characters after IPv6 bracket.',
        );
      }
      const portStr = remainder.slice(1);
      embeddedPort = parsePortString(portStr);
    }
  } else {
    if (endpoint.includes('[') || endpoint.includes(']')) {
      throw new Error('Monitoring endpoint has malformed IPv6 brackets.');
    }
    const firstColon = endpoint.indexOf(':');
    const lastColon = endpoint.lastIndexOf(':');
    if (firstColon !== lastColon) {
      throw new Error(
        'IPv6 monitoring endpoints must be enclosed in brackets, e.g. [::1] or [::1]:443.',
      );
    }
    if (firstColon !== -1) {
      host = endpoint.slice(0, firstColon);
      const portStr = endpoint.slice(firstColon + 1);
      if (host.length === 0) {
        throw new Error('Monitoring endpoint host cannot be empty.');
      }
      embeddedPort = parsePortString(portStr);
    } else {
      host = endpoint;
    }
  }

  return embeddedPort !== undefined
    ? {apiEndpoint: host, port: embeddedPort}
    : {apiEndpoint: host};
}

/**
 * Resolves and validates Cloud Monitoring exporter options into
 * `MetricServiceClient` options plus canonical `universeDomain` and
 * `monitoringEndpoint` keys.
 *
 * @param options Exporter options passed by the caller or `Spanner`.
 * @returns Resolved client options and normalized scope identifiers.
 */
export function resolveExporterConfig(
  options: ExporterOptions,
): ResolvedExporterConfig {
  const {auth, universeDomain, apiEndpoint} = options;
  let resolvedUniverseDomain: string | undefined;
  if (universeDomain !== undefined) {
    resolvedUniverseDomain = normalizeUniverseDomain(universeDomain);
  } else {
    const authUniverseDomain = (
      auth as unknown as {clientOptions?: {universeDomain?: string}}
    )?.clientOptions?.universeDomain;
    if (
      typeof authUniverseDomain === 'string' &&
      authUniverseDomain.trim() !== ''
    ) {
      resolvedUniverseDomain = authUniverseDomain.trim();
    }
  }

  const clientOptions: Record<string, unknown> = {auth};

  // Only fall back to SPANNER_MONITORING_HOST when apiEndpoint was omitted;
  // explicit `apiEndpoint: undefined` keeps the caller's synchronous snapshot.
  const hasApiEndpointOption = Object.prototype.hasOwnProperty.call(
    options,
    'apiEndpoint',
  );
  const rawEndpoint = hasApiEndpointOption
    ? apiEndpoint
    : typeof process === 'object'
      ? process.env?.SPANNER_MONITORING_HOST?.trim() || undefined
      : undefined;

  let monitoringEndpoint: string | undefined;
  if (rawEndpoint !== undefined) {
    const parsed = parseMonitoringEndpoint(rawEndpoint);
    clientOptions.apiEndpoint = parsed.apiEndpoint;
    if (parsed.port !== undefined) {
      clientOptions.port = parsed.port;
    }
    monitoringEndpoint = formatMonitoringTargetKey(parsed);
  }

  const effectiveUniverseDomain =
    resolvedUniverseDomain ??
    (typeof process === 'object'
      ? process.env?.GOOGLE_CLOUD_UNIVERSE_DOMAIN?.trim() || undefined
      : undefined) ??
    'googleapis.com';
  clientOptions.universeDomain = effectiveUniverseDomain;

  return {
    clientOptions,
    universeDomain: effectiveUniverseDomain,
    monitoringEndpoint,
  };
}

/**
 * Format and sends metrics information to Google Cloud Monitoring.
 */
export class CloudMonitoringMetricsExporter implements PushMetricExporter {
  private _projectId: string;
  private _lastExported: Date = new Date(0);
  private readonly _client: MetricServiceClient;
  private readonly _universeDomain?: string;
  private readonly _monitoringEndpoint?: string;
  private _metricsExportFailureLogged = false;

  constructor(
    options: ExporterOptions,
    projectId: string,
    resolvedConfig?: ResolvedExporterConfig,
  ) {
    const resolved = resolvedConfig ?? resolveExporterConfig(options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this._client = new MetricServiceClient(resolved.clientOptions as any);
    this._universeDomain = resolved.universeDomain;
    this._monitoringEndpoint = resolved.monitoringEndpoint;
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
      resultCallback({code: ExportResultCode.SUCCESS});
      return;
    }

    this._lastExported = now;
    this._exportAsync(metrics)
      .then(resultCallback)
      .catch(err => {
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
    if (resourceMetrics?.resource?.asyncAttributesPending) {
      await resourceMetrics.resource.waitForAsyncAttributes?.();
    }
    const timeSeriesList = transformResourceMetricToTimeSeriesArray(
      resourceMetrics,
      this._projectId,
      this._universeDomain,
      this._monitoringEndpoint,
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
        const error = e as {code?: number};
        let msg = 'Send TimeSeries failed:';
        if (error?.code === status.PERMISSION_DENIED) {
          msg += ` Need monitoring metric writer permission on project ${this._projectId}. Follow https://cloud.google.com/spanner/docs/view-manage-client-side-metrics#access-client-side-metrics to set up permissions`;
        } else {
          const errorMessage = sanitizeLogMessage(asError(e).message);
          if (errorMessage) {
            msg += ` ${errorMessage}`;
          }
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

/**
 * Collapses ASCII control characters (including CR/LF/tabs) into single spaces
 * so untrusted error messages cannot inject multi-line log entries.
 *
 * @param message Raw error message string.
 * @returns Sanitized single-line message.
 */
function sanitizeLogMessage(message: string): string {
  // eslint-disable-next-line no-control-regex
  return message.replace(/[\x00-\x1f\x7f]+/g, ' ').trim();
}

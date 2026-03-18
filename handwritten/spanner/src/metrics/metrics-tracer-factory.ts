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

import * as crypto from 'crypto';
import * as os from 'os';
import * as process from 'process';
import {v4 as uuidv4} from 'uuid';
import {MeterProvider, MetricReader} from '@opentelemetry/sdk-metrics';
import {Counter, Histogram} from '@opentelemetry/api';
import {detectResources, Resource} from '@opentelemetry/resources';
import {GcpDetectorSync} from '@google-cloud/opentelemetry-resource-util';
import * as Constants from './constants';
import {MetricsTracer} from './metrics-tracer';
const version = require('../../../package.json').version;

/**
 * Factory class for creating and managing MetricsTracer instances and OTEL metric instruments.
 *
 * The MetricsTracerFactory is responsible for:
 * - Creating and managing a singleton instance for metrics collection.
 * - Initializing and providing OTEL MeterProvider.
 * - Generating and storing client-specific metadata (UID, hash, name, location, projectId).
 * - Creating and tracking MetricsTracer instances for individual gRPC Spanner operations.
 * - Providing utility methods for extracting resource attributes and managing tracers.
 *
 * This class is designed to be used as a singleton. Metrics collection can be enabled or disabled
 * globally via the static `enabled` property, that is set from the SpannerClient.
 */
export class MetricsTracerFactory {
  private static _instance: MetricsTracerFactory | null = null;
  private _meterProvider: MeterProvider | null = null;
  private _instrumentAttemptCounter!: Counter;
  private _instrumentAttemptLatency!: Histogram;
  private _instrumentOperationCounter!: Counter;
  private _instrumentOperationLatency!: Histogram;
  private _instrumentGfeConnectivityErrorCount!: Counter;
  private _instrumentGfeLatency!: Histogram;
  private _instrumentAfeConnectivityErrorCount!: Counter;
  private _instrumentAfeLatency!: Histogram;
  private _clientHash: string;
  private _clientName: string;
  private _clientUid: string;
  private _location = 'global';
  private _projectId: string;
  private _currentOperationTracers = new Map();
  private _currentOperationLastUpdatedMs = new Map();
  private _intervalTracerCleanup: NodeJS.Timeout;
  public static enabled = true;

  /**
   * Private constructor to enforce singleton pattern.
   * Initializes client metadata and detects client location if metrics are enabled.
   * Location will default to global if host machine is not a GCE or GKE instance.
   * @param projectId The GCP project ID used by the Spanner Client.
   */
  private constructor(projectId: string) {
    this._projectId = projectId;
    this._clientUid = MetricsTracerFactory._generateClientUId();
    this._clientName = `${Constants.SPANNER_METER_NAME}/${version}`;

    // Only perform async call to retrieve location is metrics are enabled.
    if (MetricsTracerFactory.enabled) {
      (async () => {
        const location = await MetricsTracerFactory._detectClientLocation();
        this._location = location.length > 0 ? location : 'global';
      })().catch(error => {
        throw error;
      });
    }

    this._clientHash = MetricsTracerFactory._generateClientHash(
      this._clientUid,
    );

    // Start the Tracer cleanup task at an interval
    this._intervalTracerCleanup = setInterval(
      this._cleanMetricsTracers.bind(this),
      Constants.TRACER_CLEANUP_INTERVAL_MS,
    );
    // unref the interval to prevent it from blocking app termination
    // in the event loop
    this._intervalTracerCleanup.unref();
  }

  /**
   * Returns the singleton instance of MetricsTracerFactory.
   * If metrics are disabled, returns null.
   * The instance is created only once, and enabling/disabling metrics can only be done on the initial call.
   * @param projectId Optional GCP project ID for the factory instantiation. Does nothing for subsequent calls.
   * @returns The singleton MetricsTracerFactory instance or null if disabled.
   */
  public static getInstance(projectId: string): MetricsTracerFactory | null {
    if (!MetricsTracerFactory.enabled) {
      return null;
    }

    // Create a singleton instance, enabling/disabling metrics can only be done on the initial call
    if (MetricsTracerFactory._instance === null) {
      MetricsTracerFactory._instance = new MetricsTracerFactory(projectId);
    }

    return MetricsTracerFactory!._instance;
  }

  /**
   * Returns the MeterProvider, creating it and metric instruments if not already initialized.
   * Client-wide attributes that are known at this time are cached to be provided to all MetricsTracers.
   * @param readers Optional array of MetricReader instances to attach to the MeterProvider.
   * @returns The OTEL MeterProvider instance.
   */
  public getMeterProvider(readers: MetricReader[] = []): MeterProvider {
    if (this._meterProvider === null) {
      const resource = new Resource({
        [Constants.MONITORED_RES_LABEL_KEY_PROJECT]: this._projectId,
        [Constants.MONITORED_RES_LABEL_KEY_CLIENT_HASH]: this._clientHash,
        [Constants.MONITORED_RES_LABEL_KEY_LOCATION]: this._location,
        [Constants.MONITORED_RES_LABEL_KEY_INSTANCE]: 'unknown',
        [Constants.MONITORED_RES_LABEL_KEY_INSTANCE_CONFIG]: 'unknown',
      });
      this._meterProvider = new MeterProvider({
        resource: resource,
        readers: readers,
        views: Constants.METRIC_VIEWS,
      });
      this._createMetricInstruments();
    }
    return this._meterProvider;
  }

  /**
   * Resets the singleton instance of the MetricsTracerFactory.
   */
  public static async resetInstance(projectId?: string) {
    clearInterval(MetricsTracerFactory._instance?._intervalTracerCleanup);
    await MetricsTracerFactory._instance?.resetMeterProvider();
    MetricsTracerFactory._instance = null;
  }

  /**
   * Resets the MeterProvider.
   */
  public async resetMeterProvider() {
    if (this._meterProvider !== null) {
      await this._meterProvider!.shutdown();
    }
    this._meterProvider = null;
    this._currentOperationTracers = new Map();
    this._currentOperationLastUpdatedMs = new Map();
  }

  /**
   * Returns the attempt latency histogram instrument.
   */
  get instrumentAttemptLatency(): Histogram {
    return this._instrumentAttemptLatency;
  }

  /**
   * Returns the attempt counter instrument.
   */
  get instrumentAttemptCounter(): Counter {
    return this._instrumentAttemptCounter;
  }

  /**
   * Returns the operation latency histogram instrument.
   */
  get instrumentOperationLatency(): Histogram {
    return this._instrumentOperationLatency;
  }

  /**
   * Returns the operation counter instrument.
   */
  get instrumentOperationCounter(): Counter {
    return this._instrumentOperationCounter;
  }

  /**
   * Returns the GFE connectivity error count counter instrument.
   */
  get instrumentGfeConnectivityErrorCount(): Counter {
    return this._instrumentGfeConnectivityErrorCount;
  }

  /**
   * Returns the GFE latency histogram instrument.
   */
  get instrumentGfeLatency(): Histogram {
    return this._instrumentGfeLatency;
  }

  /**
   * Returns the Client UID.
   */
  get clientUid(): string {
    return this._clientUid;
  }

  /**
   * Returns the Client Name.
   */
  get clientName(): string {
    return this._clientName;
  }

  /**
   * Creates a new MetricsTracer for a given resource name and method, and stores it for later retrieval.
   * Returns null if metrics are disabled.
   * @param formattedName The formatted resource name (e.g., full database path).
   * @param method The gRPC method name.
   * @returns A new MetricsTracer instance or null if metrics are disabled.
   */
  public createMetricsTracer(
    method: string,
    formattedName: string,
    requestId: string,
  ): MetricsTracer | null {
    if (!MetricsTracerFactory.enabled) {
      return null;
    }
    const operationRequest = this._extractOperationRequest(requestId);

    if (this._currentOperationTracers.has(operationRequest)) {
      return this._currentOperationTracers.get(operationRequest);
    }

    const {instance, database} = this.getInstanceAttributes(formattedName);
    const tracer = new MetricsTracer(
      this._instrumentAttemptCounter,
      this._instrumentAttemptLatency,
      this._instrumentOperationCounter,
      this._instrumentOperationLatency,
      this._instrumentGfeConnectivityErrorCount,
      this._instrumentGfeLatency,
      this._instrumentAfeConnectivityErrorCount,
      this._instrumentAfeLatency,
      MetricsTracerFactory.enabled,
      database,
      instance,
      this._projectId,
      method,
      operationRequest,
    );
    this._currentOperationTracers.set(operationRequest, tracer);
    this._currentOperationLastUpdatedMs.set(operationRequest, Date.now());
    return tracer;
  }

  /**
   * Takes a formatted name and parses the project, instance, and database.
   * @param formattedName The formatted resource name (e.g., full database path).
   * @returns An object containing project, instance, and database strings.
   */
  public getInstanceAttributes(formattedName: string) {
    if (typeof formattedName !== 'string' || formattedName === '') {
      return {
        project: Constants.UNKNOWN_ATTRIBUTE,
        instance: Constants.UNKNOWN_ATTRIBUTE,
        database: Constants.UNKNOWN_ATTRIBUTE,
      };
    }
    const regex =
      /projects\/(?<projectId>[^/]+)\/instances\/(?<instanceId>[^/]+)(?:\/databases\/(?<databaseId>[^/]+))?/;
    const match = formattedName.match(regex);
    const project = match?.groups?.projectId || Constants.UNKNOWN_ATTRIBUTE;
    const instance = match?.groups?.instanceId || Constants.UNKNOWN_ATTRIBUTE;
    const database = match?.groups?.databaseId || Constants.UNKNOWN_ATTRIBUTE;
    return {project: project, instance: instance, database: database};
  }

  /**
   * Retrieves the current MetricsTracer for a given request id.
   * Returns null if no tracer exists for the request.
   * Does not implicitly create MetricsTracers as that should be done
   * explicitly using the createMetricsTracer function.
   * request id is expected to be as set in the gRPC metadata.
   * @param requestId The request id of the gRPC call set under 'x-goog-spanner-request-id'.
   * @returns The MetricsTracer instance or null if not found.
   */
  public getCurrentTracer(requestId: string): MetricsTracer | null {
    const operationRequest: string = this._extractOperationRequest(requestId);
    if (!this._currentOperationTracers.has(operationRequest)) {
      // Attempting to retrieve tracer that doesn't exist.
      return null;
    }
    this._currentOperationLastUpdatedMs.set(operationRequest, Date.now());

    return this._currentOperationTracers.get(operationRequest) ?? null;
  }

  /**
   * Removes the MetricsTracer associated with the given request id.
   * @param requestId The request id of the gRPC call set under 'x-goog-spanner-request-id'.
   */
  public clearCurrentTracer(requestId: string) {
    const operationRequest = this._extractOperationRequest(requestId);
    if (!this._currentOperationTracers.has(operationRequest)) {
      return;
    }
    this._currentOperationTracers.delete(operationRequest);
    this._currentOperationLastUpdatedMs.delete(operationRequest);
  }

  private _extractOperationRequest(requestId: string): string {
    if (!requestId) {
      return '';
    }

    const regex = /^(\d+\.[a-z0-9]+\.\d+\.\d+\.\d+)\.\d+$/i;
    const match = requestId.match(regex);

    if (!match) {
      return '';
    }

    const request = match[1];
    return request;
  }

  /**
   * Creates and initializes all metric instruments (counters and histograms) for the MeterProvider.
   * Instruments are only created if metrics are enabled.
   */
  private _createMetricInstruments() {
    if (!MetricsTracerFactory.enabled) {
      return;
    }

    const meter = this.getMeterProvider().getMeter(
      Constants.SPANNER_METER_NAME,
      version,
    );

    this._instrumentAttemptLatency = meter.createHistogram(
      Constants.METRIC_NAME_ATTEMPT_LATENCIES,
      {unit: 'ms', description: 'Time an individual attempt took.'},
    );

    this._instrumentAttemptCounter = meter.createCounter(
      Constants.METRIC_NAME_ATTEMPT_COUNT,
      {unit: '1', description: 'Number of attempts.'},
    );

    this._instrumentOperationLatency = meter.createHistogram(
      Constants.METRIC_NAME_OPERATION_LATENCIES,
      {
        unit: 'ms',
        description:
          'Total time until final operation success or failure, including retries and backoff.',
      },
    );

    this._instrumentOperationCounter = meter.createCounter(
      Constants.METRIC_NAME_OPERATION_COUNT,
      {unit: '1', description: 'Number of operations.'},
    );

    this._instrumentGfeLatency = meter.createHistogram(
      Constants.METRIC_NAME_GFE_LATENCIES,
      {
        unit: 'ms',
        description:
          "Latency between Google's network receiving an RPC and reading back the first byte of the response",
      },
    );

    this._instrumentGfeConnectivityErrorCount = meter.createCounter(
      Constants.METRIC_NAME_GFE_CONNECTIVITY_ERROR_COUNT,
      {
        unit: '1',
        description:
          'Number of requests that failed to reach the Google network.',
      },
    );

    this._instrumentAfeLatency = meter.createHistogram(
      Constants.METRIC_NAME_AFE_LATENCIES,
      {
        unit: 'ms',
        description:
          'Latency between Spanner API Frontend receiving an RPC and starting to write back the response',
      },
    );

    this._instrumentAfeConnectivityErrorCount = meter.createCounter(
      Constants.METRIC_NAME_AFE_CONNECTIVITY_ERROR_COUNT,
      {
        unit: '1',
        description:
          'Number of requests that failed to reach the Spanner API Frontend.',
      },
    );
  }

  /**
   * Generates a unique identifier for the client_uid metric field. The identifier is composed of a
   * UUID, the process ID (PID), and the hostname.
   * @returns A unique string identifier for the client.
   */
  private static _generateClientUId(): string {
    const identifier = uuidv4();
    const pid = process.pid.toString();
    let hostname = 'localhost';

    try {
      hostname = os.hostname();
    } catch (err) {
      console.warn('Unable to get the hostname.', err);
    }

    return `${identifier}@${pid}@${hostname}`;
  }

  /**
   * Generates a 6-digit zero-padded lowercase hexadecimal hash using the 10 most significant bits
   * of a 64-bit hash value.
   *
   * The primary purpose of this function is to generate a hash value for the `client_hash`
   * resource label using `client_uid` metric field. The range of values is chosen to be small
   * enough to keep the cardinality of the Resource targets under control. Note: If at later time
   * the range needs to be increased, it can be done by increasing the value of `kPrefixLength` to
   * up to 24 bits without changing the format of the returned value.
   * @param clientUid The client UID string to hash.
   * @returns A 6-digit hexadecimal hash string.
   */
  private static _generateClientHash(clientUid: string): string {
    if (clientUid === null || clientUid === undefined) {
      return '000000';
    }

    const hash = crypto.createHash('sha256');
    hash.update(clientUid);
    const digest = hash.digest('hex');
    const hashPart = digest.substring(0, 16);
    const longHash = BigInt('0x' + hashPart);
    const kPrefixLength = 10;
    const shiftedValue = longHash >> BigInt(64 - kPrefixLength);
    return shiftedValue.toString(16).padStart(6, '0');
  }

  /**
   * Gets the location (region) of the client, otherwise returns to the "global" region.
   * Uses GcpDetectorSync to detect the region from the environment.
   * @returns The detected region string, or "global" if not found.
   */
  private static async _detectClientLocation(): Promise<string> {
    const defaultRegion = 'global';
    try {
      const resource = await detectResources({
        detectors: [new GcpDetectorSync()],
      });

      await resource?.waitForAsyncAttributes?.();

      const region = resource.attributes[Constants.ATTR_CLOUD_REGION];
      if (typeof region === 'string' && region) {
        return region;
      }
    } catch (err) {
      console.warn('Unable to detect location.', err);
    }
    return defaultRegion;
  }

  private _cleanMetricsTracers() {
    if (this._currentOperationLastUpdatedMs.size === 0) {
      return;
    }

    for (const [
      operationTracer,
      lastUpdated,
    ] of this._currentOperationLastUpdatedMs.entries()) {
      if (Date.now() - lastUpdated >= Constants.TRACER_CLEANUP_THRESHOLD_MS) {
        this._currentOperationTracers.delete(operationTracer);
        this._currentOperationLastUpdatedMs.delete(operationTracer);
      }
    }
  }
}

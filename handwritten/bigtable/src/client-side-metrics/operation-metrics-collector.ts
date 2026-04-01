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

const {status} = require('@grpc/grpc-js');
import * as fs from 'fs';
import {MethodName, StreamingState} from './client-side-metrics-attributes';
import {grpc, ServiceError} from 'google-gax';
import * as gax from 'google-gax';
import {AbortableDuplex, BigtableOptions} from '../index';
import * as path from 'path';
import {IMetricsHandler} from './metrics-handler';
import {TimedStream} from '../timed-stream';

// When this environment variable is set then print any errors associated
// with failures in the metrics collector.
const METRICS_DEBUG = process.env.METRICS_DEBUG;

const protoPath = path.join(
  __dirname,
  '../../protos/google/bigtable/v2/response_params.proto',
);
const root = gax.protobuf.loadSync(protoPath);
const ResponseParams = root.lookupType('ResponseParams');
const {hrtime} = require('node:process');

/**
 * An interface representing a tabular API surface, such as a Bigtable table.
 */
export interface ITabularApiSurface {
  instance: {
    id: string;
  };
  id: string;
  bigtable: {
    metricsEnabled?: boolean;
    projectId?: string;
    appProfileId?: string;
    options: BigtableOptions;
  };
}

const {version} = require('../../../package.json');

// MetricsCollectorState is a list of states that the metrics collector can be in.
// Tracking the OperationMetricsCollector state is done so that the
// OperationMetricsCollector methods are not called in the wrong order. If the
// methods are called in the wrong order they will not execute and they will
// throw warnings.
//
// The following state transitions are allowed:
// OPERATION_NOT_STARTED -> OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS
// OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS -> OPERATION_STARTED_ATTEMPT_IN_PROGRESS
// OPERATION_STARTED_ATTEMPT_IN_PROGRESS -> OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS
// OPERATION_STARTED_ATTEMPT_IN_PROGRESS -> OPERATION_COMPLETE
enum MetricsCollectorState {
  OPERATION_NOT_STARTED,
  OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS,
  OPERATION_STARTED_ATTEMPT_IN_PROGRESS_NO_ROWS_YET,
  OPERATION_STARTED_ATTEMPT_IN_PROGRESS_SOME_ROWS_RECEIVED,
  OPERATION_COMPLETE,
}

// This method displays warnings if METRICS_DEBUG is enabled.
function withMetricsDebug<T>(fn: () => T): T | undefined {
  try {
    return fn();
  } catch (e) {
    if (METRICS_DEBUG) {
      console.warn('METRICS_DEBUG warning');
      console.warn((e as ServiceError).message);
    }
  }
  return;
}

// Checks that the state transition is valid and if not it throws a warning.
function checkState<T>(
  currentState: MetricsCollectorState,
  allowedStates: MetricsCollectorState[],
): T | undefined {
  if (allowedStates.includes(currentState)) {
    return;
  } else {
    throw Error('Invalid state transition');
  }
}

/**
 * A class for tracing and recording client-side metrics related to Bigtable operations.
 */
export class OperationMetricsCollector {
  // The following key corresponds to the key the instance information is
  // stored in for the metadata that gets returned from the server.
  private readonly INSTANCE_INFORMATION_KEY = 'x-goog-ext-425905942-bin';
  private state: MetricsCollectorState;
  private operationStartTime: bigint | null;
  private attemptStartTime: bigint | null;
  private zone: string | undefined;
  private cluster: string | undefined;
  private tabularApiSurface: ITabularApiSurface;
  private methodName: MethodName;
  private attemptCount = 0;
  private firstResponseLatency: number | null;
  private serverTimeRead: boolean;
  private serverTime: number | null;
  private connectivityErrorCount: number;
  private streamingOperation: StreamingState;
  private handlers: IMetricsHandler[];
  public userStream?: TimedStream;

  /**
   * @param {ITabularApiSurface} tabularApiSurface Information about the Bigtable table being accessed.
   * @param {MethodName} methodName The name of the method being traced.
   * @param {StreamingState} streamingOperation Whether or not the call is a streaming operation.
   * @param {IMetricsHandler[]} handlers The metrics handlers used to store the record the metrics.
   */
  constructor(
    tabularApiSurface: ITabularApiSurface,
    methodName: MethodName,
    streamingOperation: StreamingState,
    handlers: IMetricsHandler[],
  ) {
    this.state = MetricsCollectorState.OPERATION_NOT_STARTED;
    this.zone = undefined;
    this.cluster = undefined;
    this.tabularApiSurface = tabularApiSurface;
    this.methodName = methodName;
    this.operationStartTime = null;
    this.attemptStartTime = null;
    this.firstResponseLatency = null;
    this.serverTimeRead = false;
    this.serverTime = null;
    this.connectivityErrorCount = 0;
    this.streamingOperation = streamingOperation;
    this.handlers = handlers;
  }

  private getMetricsCollectorData() {
    const appProfileId = this.tabularApiSurface.bigtable.appProfileId;
    return Object.assign(
      {
        instanceId: this.tabularApiSurface.instance.id,
        table: this.tabularApiSurface.id,
        cluster: this.cluster || '<unspecified>',
        zone: this.zone || 'global',
        method: this.methodName,
        projectId: this.tabularApiSurface.bigtable.projectId as string,
      },
      appProfileId ? {app_profile: appProfileId} : {},
    );
  }

  /**
   * Called to add handlers to the stream so that we can observe
   * header and trailer data for client side metrics.
   *
   * @param stream
   */
  wrapRequest(stream: AbortableDuplex) {
    stream
      .on(
        'metadata',
        (metadata: {internalRepr: Map<string, string[]>; options: {}}) => {
          this.onMetadataReceived(metadata);
        },
      )
      .on(
        'status',
        (status: {
          metadata: {internalRepr: Map<string, Uint8Array[]>; options: {}};
        }) => {
          this.onStatusMetadataReceived(status);
        },
      );
  }

  /**
   * Called when the operation starts. Records the start time.
   */
  onOperationStart() {
    withMetricsDebug(() => {
      checkState(this.state, [MetricsCollectorState.OPERATION_NOT_STARTED]);
      this.operationStartTime = hrtime.bigint();
      this.firstResponseLatency = null;
      this.state =
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS;
    });
  }

  /**
   * Called when an attempt (e.g., an RPC attempt) completes. Records attempt latencies.
   * @param {grpc.status} attemptStatus The grpc status for the attempt.
   */
  onAttemptComplete(attemptStatus: grpc.status) {
    withMetricsDebug(() => {
      checkState(this.state, [
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_NO_ROWS_YET,
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_SOME_ROWS_RECEIVED,
      ]);
      this.state =
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS;
      this.attemptCount++;
      const endTime = hrtime.bigint();
      if (this.attemptStartTime) {
        const totalMilliseconds = Number(
          (endTime - this.attemptStartTime) / BigInt(1000000),
        );
        this.handlers.forEach(metricsHandler => {
          if (metricsHandler.onAttemptComplete) {
            metricsHandler.onAttemptComplete({
              attemptLatency: totalMilliseconds,
              serverLatency: this.serverTime ?? undefined,
              connectivityErrorCount: this.connectivityErrorCount,
              streaming: this.streamingOperation,
              status: status[attemptStatus],
              client_name: `nodejs-bigtable/${version}`,
              metricsCollectorData: this.getMetricsCollectorData(),
            });
          }
        });
      } else {
        console.warn('Start time should always be provided');
      }
    });
  }

  /**
   * Called when a new attempt starts. Records the start time of the attempt.
   */
  onAttemptStart() {
    withMetricsDebug(() => {
      checkState(this.state, [
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS,
      ]);
      this.state =
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_NO_ROWS_YET;
      this.attemptStartTime = hrtime.bigint();
      this.serverTime = null;
      this.serverTimeRead = false;
      this.connectivityErrorCount = 0;
    });
  }

  /**
   * Called when the first response is received. Records first response latencies.
   */
  onResponse() {
    withMetricsDebug(() => {
      if (!this.firstResponseLatency) {
        checkState(this.state, [
          MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_NO_ROWS_YET,
        ]);
        this.state =
          MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_SOME_ROWS_RECEIVED;
        const endTime = hrtime.bigint();
        if (this.operationStartTime) {
          this.firstResponseLatency = Number(
            (endTime - this.operationStartTime) / BigInt(1000000),
          );
        } else {
          console.warn(
            'ProjectId and operationStartTime should always be provided',
          );
        }
      }
    });
  }

  /**
   * Called when an operation completes (successfully or unsuccessfully).
   * Records operation latencies, retry counts, and connectivity error counts.
   * @param {grpc.status} finalOperationStatus Information about the completed operation.
   * @param {number} applicationLatency The application latency measurement.
   */
  onOperationComplete(
    finalOperationStatus: grpc.status,
    applicationLatency?: number,
  ) {
    withMetricsDebug(() => {
      if (
        this.state ===
          MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_NO_ROWS_YET ||
        this.state ===
          MetricsCollectorState.OPERATION_STARTED_ATTEMPT_IN_PROGRESS_SOME_ROWS_RECEIVED
      ) {
        this.onAttemptComplete(finalOperationStatus);
      }
      checkState(this.state, [
        MetricsCollectorState.OPERATION_STARTED_ATTEMPT_NOT_IN_PROGRESS,
      ]);
      this.state = MetricsCollectorState.OPERATION_COMPLETE;
      const endTime = hrtime.bigint();
      if (this.operationStartTime) {
        const totalMilliseconds = Number(
          (endTime - this.operationStartTime) / BigInt(1000000),
        );
        {
          this.handlers.forEach(metricsHandler => {
            if (metricsHandler.onOperationComplete) {
              metricsHandler.onOperationComplete({
                status: status[finalOperationStatus],
                streaming: this.streamingOperation,
                metricsCollectorData: this.getMetricsCollectorData(),
                client_name: `nodejs-bigtable/${version}`,
                operationLatency: totalMilliseconds,
                retryCount: this.attemptCount - 1,
                firstResponseLatency: this.firstResponseLatency ?? 0,
                applicationLatency: applicationLatency ?? 0,
              });
            }
          });
        }
      } else {
        console.warn('operation start time should always be available here');
      }
    });
  }

  /**
   * Called when metadata is received. Extracts server timing information if available.
   * @param {object} metadata The received metadata.
   */
  onMetadataReceived(metadata: {
    internalRepr: Map<string, string[]>;
    options: {};
  }) {
    if (!this.serverTimeRead && this.connectivityErrorCount < 1) {
      // Check serverTimeRead, connectivityErrorCount here to reduce latency.
      const mappedEntries = new Map(
        Array.from(metadata.internalRepr.entries(), ([key, value]) => [
          key,
          value.toString(),
        ]),
      );
      const SERVER_TIMING_REGEX = /.*gfet4t7;\s*dur=(\d+\.?\d*).*/;
      const SERVER_TIMING_KEY = 'server-timing';
      const durationValues = mappedEntries.get(SERVER_TIMING_KEY);
      const matchedDuration = durationValues?.match(SERVER_TIMING_REGEX);
      if (matchedDuration && matchedDuration[1]) {
        if (!this.serverTimeRead) {
          this.serverTimeRead = true;
          this.serverTime = isNaN(parseInt(matchedDuration[1]))
            ? null
            : parseInt(matchedDuration[1]);
        }
      } else {
        this.connectivityErrorCount = 1;
      }
    }
  }

  /**
   * Called when status information is received. Extracts zone and cluster information.
   * @param {object} status The received status information.
   */
  onStatusMetadataReceived(status: {
    metadata: {internalRepr: Map<string, Uint8Array[]>; options: {}};
  }) {
    withMetricsDebug(() => {
      if (!this.zone || !this.cluster) {
        const mappedValue = status.metadata.internalRepr.get(
          this.INSTANCE_INFORMATION_KEY,
        ) as Buffer[];
        if (mappedValue && mappedValue[0] && ResponseParams) {
          const decodedValue = ResponseParams.decode(
            mappedValue[0],
            mappedValue[0].length,
          );
          if (
            decodedValue &&
            (decodedValue as unknown as {zoneId: string}).zoneId
          ) {
            this.zone = (decodedValue as unknown as {zoneId: string}).zoneId;
          }
          if (
            decodedValue &&
            (decodedValue as unknown as {clusterId: string}).clusterId
          ) {
            this.cluster = (
              decodedValue as unknown as {clusterId: string}
            ).clusterId;
          }
        }
      }
    });
  }
}

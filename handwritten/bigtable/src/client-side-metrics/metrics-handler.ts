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

import {MethodName, StreamingState} from './client-side-metrics-attributes';

/**
 * The interfaces below use undefined instead of null to indicate a metric is
 * not available yet. The benefit of this is that new metrics can be added
 * without requiring users to change the methods in their metrics handler.
 */

type IMetricsCollectorData = {
  projectId: string;
  instanceId: string;
  table: string;
  cluster?: string;
  zone?: string;
  app_profile?: string;
  method: MethodName;
};

interface StandardData {
  metricsCollectorData: IMetricsCollectorData;
  client_name: string;
  streaming: StreamingState;
  status: string;
}

export interface OnOperationCompleteData extends StandardData {
  firstResponseLatency?: number;
  operationLatency: number;
  applicationLatency?: number;
  retryCount?: number;
}

export interface OnAttemptCompleteData extends StandardData {
  attemptLatency: number;
  serverLatency?: number;
  connectivityErrorCount: number;
}

/**
 * An interface for handling client-side metrics related to Bigtable operations.
 * Implementations of this interface can define how metrics are recorded and processed.
 */
export interface IMetricsHandler {
  /**
   * Called when an operation completes (successfully or unsuccessfully).
   * @param {OnOperationCompleteData} data Metrics and attributes related to the completed operation.
   */
  onOperationComplete?(data: OnOperationCompleteData): void;

  /**
   * Called when an attempt (e.g., an RPC attempt) completes.
   * @param {OnAttemptCompleteData} data Metrics and attributes related to the completed attempt.
   */
  onAttemptComplete?(data: OnAttemptCompleteData): void;
}

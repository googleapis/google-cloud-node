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

import {IMetricsHandler} from './metrics-handler';
import {
  ITabularApiSurface,
  OperationMetricsCollector,
} from './operation-metrics-collector';
import {MethodName, StreamingState} from './client-side-metrics-attributes';

/**
 * A class for tracing and recording client-side metrics related to Bigtable operations.
 */
export class ClientSideMetricsConfigManager {
  private metricsHandlers: IMetricsHandler[];

  constructor(handlers: IMetricsHandler[]) {
    this.metricsHandlers = handlers;
  }

  createOperation(
    methodName: MethodName,
    streaming: StreamingState,
    table: ITabularApiSurface,
  ): OperationMetricsCollector {
    return new OperationMetricsCollector(
      table,
      methodName,
      streaming,
      this.metricsHandlers,
    );
  }
}

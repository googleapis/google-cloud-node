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

import {CallOptions} from 'google-gax';
import {OperationMetricsCollector} from './operation-metrics-collector';

// Mock Server Implementation
import * as grpcJs from '@grpc/grpc-js';
import {status as GrpcStatus} from '@grpc/grpc-js';

export type ServerStatus = {
  metadata: {internalRepr: Map<string, Uint8Array[]>; options: {}};
  code: number;
  details: string;
};

// Helper to create interceptor provider for OperationMetricsCollector
function createMetricsInterceptorProvider(
  collector: OperationMetricsCollector,
) {
  return (options: grpcJs.InterceptorOptions, nextCall: grpcJs.NextCall) => {
    // savedReceiveMetadata and savedReceiveStatus are not strictly needed here anymore for the interceptor's own state
    // OperationStart and AttemptStart will be called by the calling code (`fakeReadModifyWriteRow`)
    return new grpcJs.InterceptingCall(nextCall(options), {
      start: (metadata, listener, next) => {
        // AttemptStart is called by the orchestrating code
        const newListener: grpcJs.Listener = {
          onReceiveMetadata: (metadata, nextMd) => {
            collector.onMetadataReceived(
              metadata as unknown as {
                internalRepr: Map<string, string[]>;
                options: {};
              },
            );
            nextMd(metadata);
          },
          onReceiveStatus: (status, nextStat) => {
            collector.onStatusMetadataReceived(
              status as unknown as ServerStatus,
            );
            collector.onAttemptComplete(status.code);
            nextStat(status);
          },
        };
        next(metadata, newListener);
      },
      sendMessage: function (message, next) {
        collector.onAttemptStart();
        next(message);
      },
    });
  };
}

/**
 * Attaches a metrics interceptor to unary calls for collecting client-side metrics.
 *
 * This method modifies the given `gaxOptions` to include an interceptor that
 * will be triggered during the execution of a unary gRPC call. The interceptor
 * uses the provided `OperationMetricsCollector` to record various metrics
 * related to the call, such as latency, retries, and errors.
 *
 * @param {CallOptions} gaxOptions The existing GAX call options to modify.
 * @param {OperationMetricsCollector} metricsCollector The metrics collector
 *   for the operation.
 * @returns {CallOptions} The modified `gaxOptions` with the interceptor attached.
 */
export function createMetricsUnaryInterceptorProvider(
  gaxOptions: CallOptions,
  metricsCollector?: OperationMetricsCollector,
) {
  if (metricsCollector) {
    const interceptor = createMetricsInterceptorProvider(metricsCollector);
    if (!gaxOptions.otherArgs) {
      gaxOptions.otherArgs = {};
    }
    if (!gaxOptions.otherArgs.options) {
      gaxOptions.otherArgs.options = {};
    }
    if (!gaxOptions.otherArgs.options.interceptors) {
      gaxOptions.otherArgs.options.interceptors = [interceptor];
    } else {
      if (Array.isArray(gaxOptions.otherArgs.options.interceptors)) {
        // We check that interceptors is an array so that the code has no
        // chance of throwing an error.
        // Then, if the interceptors is an array, make sure it also includes the
        // client side metrics interceptor.
        gaxOptions.otherArgs.options.interceptors.push(interceptor);
      }
    }
  }
  return gaxOptions;
}

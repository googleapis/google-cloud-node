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

import {grpc} from 'google-gax';
import {MetricsTracerFactory} from './metrics-tracer-factory';

/**
 * Interceptor for recording metrics on gRPC calls.
 *
 * This interceptor records attempt metrics at the start and completion of each gRPC call,
 * and also records Google Front End (GFE), AFE metrics such as latency and connectivity errors
 * based on the presence and value of the 'server-timing' header in the response metadata.
 *
 * @param {object} options - The gRPC call options, including method definition.
 * @param {function} nextCall - The next function to call in the gRPC request chain.
 * @returns {grpc.InterceptingCall} - The intercepting call with added metrics recording.
 */
export const MetricInterceptor = (options, nextCall) => {
  return new grpc.InterceptingCall(nextCall(options), {
    start: function (metadata, listener, next) {
      // Record attempt metric on request start
      const resourcePrefix = metadata.get(
        'google-cloud-resource-prefix',
      )[0] as string;
      const match = resourcePrefix?.match(/^projects\/([^/]+)\//);
      const projectId = match ? match[1] : undefined;
      let factory;
      if (projectId) {
        factory = MetricsTracerFactory.getInstance(projectId);
      }
      const requestId = metadata.get('x-goog-spanner-request-id')[0] as string;
      const metricsTracer = factory?.getCurrentTracer(requestId);
      metricsTracer?.recordAttemptStart();
      const newListener = {
        onReceiveMetadata: function (metadata, next) {
          // Record GFE/AFE Metrics
          // GFE/AFE latency if available,
          // or else increase the GFE/AFE connectivity error count
          if (metricsTracer) {
            const serverTimingHeader = metadata.getMap()['server-timing'];
            const gfeTiming =
              metricsTracer?.extractGfeLatency(serverTimingHeader);
            metricsTracer.gfeLatency = gfeTiming ?? null;
            const afeTiming =
              metricsTracer?.extractAfeLatency(serverTimingHeader);
            metricsTracer.afeLatency = afeTiming ?? null;
          }

          next(metadata);
        },
        onReceiveMessage: function (message, next) {
          next(message);
        },
        onReceiveStatus: function (status, next) {
          next(status);

          // Record attempt metric completion
          metricsTracer?.recordAttemptCompletion(status.code);
          if (metricsTracer?.gfeLatency) {
            metricsTracer?.recordGfeLatency(status.code);
          } else {
            metricsTracer?.recordGfeConnectivityErrorCount(status.code);
          }
          if (metricsTracer?.afeLatency) {
            metricsTracer?.recordAfeLatency(status.code);
          } else {
            // Disable afe_connectivity_error_count metric as AFE header is disabled in backend
            // currently.
            // metricsTracer?.recordAfeConnectivityErrorCount(status.code);
          }
        },
      };
      next(metadata, newListener);
    },
    sendMessage: function (message, next) {
      next(message);
    },

    halfClose: function (next) {
      next();
    },

    cancel: function (next) {
      next();
    },
  });
};

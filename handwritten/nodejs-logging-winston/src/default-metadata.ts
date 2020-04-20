// Copyright 2019 Google LLC
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

import {LOGGING_TRACE_KEY} from './common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: {[index: string]: any};

/**
 * Returns an object that can be passed to Winston.createLogger as defaultMeta
 * to allow log-trace correlation with Winston 3. Log-trace correlation with
 * Winston 3 is broken because the trace ID to be correlated with a log isn't
 * evaluated when the log function is called, but rather when the log is
 * written, which happens at some future point where the trace ID may no longer
 * be accurate. To circumvent this, we take advantage of the fact that
 * defaultMeta is copied when a log function is called, and use a dynamic
 * property getter to evaluate the trace ID upon that copy.
 *
 * We apply the same principle for timestamps, which is not strictly necessary
 * for tracing but allows for more accurate timestamps in general.
 *
 * If there are other default metadata fields with which the return value of
 * this function must be merged, this object MUST be the base object. In other
 * words, do not use the return value of this function as the non-first argument
 * to Object.assign, or it will not work.
 *
 * See https://github.com/googleapis/nodejs-logging-winston/issues/287 for
 * more information.
 */
export function getDefaultMetadataForTracing() {
  const agent = global._google_trace_agent;
  // Enable log-trace correlation if the Trace Agent API is compatible.
  const enableThunkAgent = !!(
    agent &&
    agent.getCurrentContextId &&
    agent.getWriterProjectId
  );

  const defaultMeta = {};
  // Make defaultMeta.timestamp return the current timestamp any time it's
  // accessed.
  Object.defineProperty(defaultMeta, 'timestamp', {
    enumerable: true,
    get: () => new Date(),
  });
  if (enableThunkAgent) {
    // Make defaultMeta[LOGGING_TRACE_KEY] return the current trace ID any time
    // it's accessed.
    const loggingTraceKey = LOGGING_TRACE_KEY;
    Object.defineProperty(defaultMeta, loggingTraceKey, {
      enumerable: true,
      get: () => {
        const traceId = agent.getCurrentContextId();
        if (!traceId) {
          return null;
        }
        const traceProjectId = agent.getWriterProjectId();
        if (!traceProjectId) {
          return null;
        }
        return `projects/${traceProjectId}/traces/${traceId}`;
      },
    });
  }
  return defaultMeta;
}

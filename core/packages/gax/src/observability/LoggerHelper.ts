/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {EventEmitter} from 'events';
import {context} from '@opentelemetry/api';
import * as loggingUtils from 'google-logging-utils';
import {APICallback, GaxCallResult} from '../apitypes';
import {rpcCodeFromHttpStatusCode, Status} from '../status';
import {
  AttemptTraceContext,
  buildInitialAttributes,
  getActiveTraceContext,
  resolveEndpointAndDomain,
  resolveRpcMethod,
  StaticTraceContext,
} from './contextUtil';
import {
  resolveErrorInfoDomain,
  resolveErrorInfoMetadataAttributes,
  resolveErrorType,
  resolveExceptionMessage,
  resolveExceptionStacktrace,
  resolveExceptionType,
  resolveResponseStatusCode,
  resolveRpcStatusName,
} from './errorUtil';
import {getPromiseTarget, handlePromise, handleStream} from './TracerHelper';

export interface LogPayload {
  'rpc.system.name'?: 'grpc' | 'http';
  'rpc.method'?: string;
  'rpc.response.status_code'?: string;
  'http.response.status_code'?: number;
  'error.type'?: string;
  'gcp.errors.domain'?: string;
  [key: `gcp.errors.metadata.${string}`]: string | undefined;
  'gcp.client.repo'?: string;
  'gcp.client.artifact'?: string;
  'gcp.client.version'?: string;
  'gcp.client.language'?: 'node';
  'gcp.client.service'?: string;
  'url.domain'?: string;
  'response.payload'?: string;
  'exception.type'?: string;
  'exception.message'?: string;
  'exception.stacktrace'?: string;
}

/**
 * Returns the `google-logging-utils` logger for the given GCP client service,
 * defaulting to the `'google-gax'` namespace when no service name is provided.
 *
 * @param {string} [serviceName] - The GCP client service name (e.g. 'storage').
 * @returns {loggingUtils.AdhocDebugLogFunction} The logger function.
 */
export function getGaxLogger(
  serviceName?: string,
): loggingUtils.AdhocDebugLogFunction {
  return loggingUtils.log(serviceName || 'google-gax');
}

/**
 * Builds the structured `LogPayload` attributes for a failed RPC call or attempt.
 *
 * @param {unknown} err - The error thrown or reported for the call.
 * @param {AttemptTraceContext} dynamicArgs - Dynamic context for the RPC call or attempt.
 * @param {StaticTraceContext} [staticArgs={}] - Static context for the client library.
 * @returns {LogPayload} The populated log payload attributes with undefined fields omitted.
 */
export function buildLogAttributes(
  err: unknown,
  dynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext = {},
): LogPayload {
  const {urlDomain} = resolveEndpointAndDomain(dynamicArgs, staticArgs);
  const initialAttributes = buildInitialAttributes(
    dynamicArgs,
    staticArgs,
    urlDomain,
  );
  const attributes: LogPayload = {};
  for (const [key, value] of Object.entries(initialAttributes)) {
    if (value !== undefined) {
      (attributes as Record<string, unknown>)[key] = value;
    }
  }
  attributes['gcp.client.language'] = 'node';

  const rpcMethod = resolveRpcMethod(dynamicArgs);
  if (rpcMethod) {
    attributes['rpc.method'] = rpcMethod;
  }

  const {rpcStatusName, httpStatusCode} = resolveResponseStatusCode(
    dynamicArgs.rpcType,
    true,
    err,
  );
  const normalizedRpcStatusName =
    dynamicArgs.rpcType === 'http'
      ? (resolveRpcStatusName(err) ??
        (httpStatusCode !== undefined
          ? Status[rpcCodeFromHttpStatusCode(httpStatusCode)]
          : undefined))
      : rpcStatusName;
  if (normalizedRpcStatusName !== undefined) {
    attributes['rpc.response.status_code'] = normalizedRpcStatusName;
  }
  if (httpStatusCode !== undefined) {
    attributes['http.response.status_code'] = httpStatusCode;
  }

  attributes['error.type'] = resolveErrorType(err, dynamicArgs.rpcType);

  const errorDomain = resolveErrorInfoDomain(err);
  if (errorDomain !== undefined) {
    attributes['gcp.errors.domain'] = errorDomain;
  }
  Object.assign(attributes, resolveErrorInfoMetadataAttributes(err));

  return attributes;
}

/**
 * Executes an API call and emits a single `WARNING` log entry if the logical
 * request fails across promise, callback, stream, or synchronous execution boundaries.
 *
 * @template T
 * @param {AttemptTraceContext} dynamicArgs - Dynamic context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static context for the client library.
 * @param {function} fn - The operation to execute. Receives the wrapped callback
 *   when `userCallback` is supplied, otherwise `undefined`.
 * @param {boolean} [isStreamCall=false] - Whether the operation returns a stream (`EventEmitter`).
 * @param {APICallback} [userCallback] - Optional user callback for callback-style invocations.
 * @returns {T} The return value of `fn`.
 */
export function logCall<T = GaxCallResult>(
  dynamicArgs: AttemptTraceContext,
  staticArgs: StaticTraceContext,
  fn: (loggedCallback?: APICallback) => T,
  isStreamCall = false,
  userCallback?: APICallback,
): T {
  // Latch to emit at most one warning log per logical request.
  let hasLoggedL3 = false;
  // Snapshot initial context in case async rejection loses active context.
  const initialContext = context.active();

  const emitL3WarnLog = (err: unknown) => {
    // Suppress duplicate emissions for the same call.
    if (hasLoggedL3) {
      return;
    }
    hasLoggedL3 = true;

    // Resolve logger and active T3 client request span (or outer OpenTelemetry span when GAX tracing is disabled).
    const logger = getGaxLogger(staticArgs?.gcpClientService);
    const activeTrace = getActiveTraceContext();
    const initialTrace = getActiveTraceContext(initialContext);
    const activeSpan =
      activeTrace?.clientRequestSpan ??
      initialTrace?.clientRequestSpan ??
      activeTrace?.span ??
      initialTrace?.span;
    const spanContext = activeSpan?.spanContext();
    const traceId = spanContext?.traceId;
    const spanId = spanContext?.spanId;

    // Build structured log attributes with exception details.
    const exceptionMessage = resolveExceptionMessage(err, dynamicArgs.rpcType);
    const stacktrace = resolveExceptionStacktrace(err);
    const attributes: LogPayload = {
      ...buildLogAttributes(err, dynamicArgs, staticArgs),
      'exception.type': resolveExceptionType(err),
      'exception.message': exceptionMessage,
      ...(stacktrace !== undefined ? {'exception.stacktrace': stacktrace} : {}),
    };

    const warningSeverity =
      (
        loggingUtils as {
          LogSeverity?: {WARNING: loggingUtils.LogSeverity};
        }
      ).LogSeverity?.WARNING ?? ('WARNING' as loggingUtils.LogSeverity);

    // Emit structured WARNING log.
    logger(
      {
        severity: warningSeverity,
        ...(traceId ? {telemetryTraceId: traceId} : {}),
        ...(spanId ? {telemetrySpanId: spanId} : {}),
        other: attributes,
      },
      'Client API call failed: %s',
      exceptionMessage || err,
    );
  };

  // Wrap user callback to log RPC errors before forwarding.
  let callbackInvoked = false;
  const loggedCallback: APICallback | undefined = userCallback
    ? function (this: unknown, ...args: Parameters<APICallback>) {
        callbackInvoked = true;
        const err = args[0];
        if (err) {
          emitL3WarnLog(err);
        }
        userCallback.apply(this, args);
      }
    : undefined;

  // Execute call and attach error handlers for streams, promises, or sync throws.
  try {
    const result = fn(loggedCallback);
    const promiseTarget = !isStreamCall ? getPromiseTarget(result) : null;
    if (isStreamCall && result instanceof EventEmitter) {
      handleStream(result, emitL3WarnLog, () => {}, Boolean(loggedCallback));
    } else if (promiseTarget) {
      handlePromise(promiseTarget, emitL3WarnLog, () => {});
    }
    return result;
  } catch (syncErr) {
    // Avoid logging errors thrown inside userCallback after RPC completion.
    if (!callbackInvoked) {
      emitL3WarnLog(syncErr);
    }
    throw syncErr;
  }
}

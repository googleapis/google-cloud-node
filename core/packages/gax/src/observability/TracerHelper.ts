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
import {Span, trace, Tracer} from '@opentelemetry/api';
import { CancellableStream } from '../apitypes';
import { CancellablePromise } from '../call';

/**
 * Static metadata about the Google Cloud client library used to populate
 * telemetry span attributes.
 */
export interface StaticTraceContext {
  /**
   * The target GCP service endpoint or domain (e.g. 'storage.googleapis.com').
   */
  gcpClientService?: string;
  /**
   * The version of the client library (e.g. '1.2.3').
   */
  gcpVersion?: string;
  /**
   * The GitHub repository name hosting the client library (e.g. 'googleapis/google-cloud-node').
   */
  gcpRepo?: string;
  /**
   * The NPM package name of the client library (e.g. '@google-cloud/storage').
   */
  gcpArtifact?: string;
}

/**
 * Dynamic metadata specific to the individual RPC invocation used to populate
 * telemetry span attributes.
 */
export interface DynamicTraceContext {
  /**
   * The name of the client class making the call (e.g. 'StorageClient').
   */
  clientName: string;
  /**
   * The name of the API method or RPC being invoked (e.g. 'GetObject').
   */
  methodName: string;
  /**
   * The transport protocol used for the RPC ('grpc' or 'http').
   */
  rpcType: 'grpc' | 'http';
}

/**
 * Returns the OpenTelemetry Tracer instance for google-gax.
 *
 * @returns {Tracer} The OpenTelemetry Tracer.
 */
export function getGaxTracer(): Tracer {
  return trace.getTracer('google-gax');
}

/**
 * Manages span lifecycle for Promise-based operations.
 *
 * @param {T} promise - The promise returned from the traced operation.
 * @param {(err: unknown) => void} recordError - Callback to record errors on the span.
 * @param {() => void} endSpan - Callback to end the span idempotently.
 */
export function handlePromise<T>(
  promise: T,
  recordError: (err: unknown) => void,
  endSpan: () => void,
): void {
  Promise.resolve(promise)
    .then(() => {
      endSpan();
      return null;
    })
    .catch(err => {
      recordError(err);
      endSpan();
    });
}

/**
 * Manages span lifecycle for Stream-based operations.
 *
 * @param {EventEmitter} stream - The stream returned from the traced operation.
 * @param {(err: unknown) => void} recordError - Callback to record errors on the span.
 * @param {() => void} endSpan - Callback to end the span idempotently.
 */
export function handleStream(
  stream: EventEmitter,
  recordError: (err: unknown) => void,
  endSpan: () => void,
): void {
  const cleanup = () => {
    stream.removeListener('error', onError);
    stream.removeListener('end', onEnd);
    stream.removeListener('close', onClose);
  };

  const onError = (err: unknown) => {
    cleanup();
    recordError(err);
    endSpan();
  };

  const onEnd = () => {
    cleanup();
    endSpan();
  };

  const onClose = () => {
    cleanup();
    endSpan();
  };

  stream.on('error', onError);
  stream.on('end', onEnd);
  stream.on('close', onClose);
}

/**
 * Executes a function within an active OpenTelemetry span, populating standard
 * GCP telemetry attributes and recording errors/exceptions if thrown.
 *
 * @template T
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the RPC call.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {() => T} fn - The operation to trace.
 * @param {boolean} [isStreamCall=false] - Whether the operation is a stream or a promise.
 * @returns {T} The result of the traced operation.
 */
export function traceAttempt<T extends EventEmitter>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: () => CancellableStream,
  isStreamCall: true,
): T;
export function traceAttempt<T>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: () => CancellablePromise<T>,
  isStreamCall?: false,
): T;
export function traceAttempt(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: () => unknown,
  isStreamCall: boolean = false,
): unknown {
  const spanName = `${dynamicArgs.clientName}.${dynamicArgs.methodName}`;
  return getGaxTracer().startActiveSpan(spanName, {}, (span: Span) => {
    span.setAttributes({
      'gcp.client.service': staticArgs.gcpClientService,
      'gcp.client.version': staticArgs.gcpVersion,
      'gcp.repo': staticArgs.gcpRepo,
      'gcp.artifact': staticArgs.gcpArtifact,
      'gcp.method.name': dynamicArgs.methodName,
      'gcp.method.type': dynamicArgs.rpcType,
    });

    let spanEnded = false;
    const endSpan = () => {
      if (!spanEnded) {
        spanEnded = true;
        span.end();
      }
    };

    const recordError = (e: unknown) => {
      if (e instanceof Error) {
        span.setAttributes({
          'error.message': e.message,
          'error.type': e.constructor?.name ?? e.name,
        });
        span.recordException(e);
        if (e.name) {
          span.setAttribute('exception.type', e.name);
        }
      } else {
        const message = String(e);
        span.setAttributes({
          'error.message': message,
        });
        span.recordException(message);
      }
    };

    try {
      const result = fn();
      if (isStreamCall && result instanceof EventEmitter) {
        handleStream(result, recordError, endSpan);
      } else if (!isStreamCall && result instanceof Promise) {
        handlePromise(result, recordError, endSpan);
      }
      return result;
    } catch (e) {
      recordError(e);
      endSpan();
      throw e;
    }
  });
}

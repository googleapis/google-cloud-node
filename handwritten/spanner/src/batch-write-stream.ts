/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import {CallOptions, grpc} from 'google-gax';
import {Readable, Transform} from 'stream';
import * as through from 'through2';
import {protos} from '@google-cloud/spanner-api';
import {DeadlineError, isRetryableInternalError} from './transaction-runner';
import {getRetryInfo} from './protos';

const RETRY_INFO_BIN = 'google.rpc.retryinfo-bin';
const RetryInfo = getRetryInfo();

type IMutationGroup =
  protos.google.spanner.v1.BatchWriteRequest.IMutationGroup;
type IBatchWriteResponse = protos.google.spanner.v1.IBatchWriteResponse;

export interface BatchWriteStreamOptions {
  gaxOptions?: CallOptions;
  onTerminate?: (finalStatus: grpc.status) => void;
}

// Default BatchWrite retry/backoff parameters from spanner_client_config.json
const DEFAULT_INITIAL_RETRY_DELAY_MS = 100;
const DEFAULT_MAX_RETRY_DELAY_MS = 60000;
const DEFAULT_RETRY_DELAY_MULTIPLIER = 1.3;
const DEFAULT_TOTAL_TIMEOUT_MS = 3600000; // 1 hour

/**
 * Extracts server-supplied retry delay (in ms) from `google.rpc.retryinfo-bin`
 * trailing metadata if present, otherwise computes jittered exponential backoff.
 */
export function getNextRetryDelayMs(
  err: grpc.ServiceError,
  retryAttempt: number,
  backoffSettings?: Partial<
    NonNullable<NonNullable<CallOptions['retry']>['backoffSettings']>
  >,
): number {
  const retryInfoValues = err?.metadata && err.metadata.get(RETRY_INFO_BIN);
  if (retryInfoValues && retryInfoValues.length > 0) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const {retryDelay} = (RetryInfo as any).decode(retryInfoValues[0]);
      if (retryDelay) {
        let {seconds} = retryDelay;
        if (
          seconds &&
          typeof seconds !== 'number' &&
          typeof seconds.toNumber === 'function'
        ) {
          seconds = seconds.toNumber();
        }
        const secondsInMs = Math.floor(Number(seconds || 0)) * 1000;
        const nanosInMs = Math.floor(Number(retryDelay.nanos || 0)) / 1e6;
        const delayMs = secondsInMs + nanosInMs;
        if (delayMs >= 0) {
          return delayMs;
        }
      }
    } catch {
      // Fall back to exponential backoff if RetryInfo decoding fails.
    }
  }

  const initialDelay =
    backoffSettings?.initialRetryDelayMillis ?? DEFAULT_INITIAL_RETRY_DELAY_MS;
  const maxDelay =
    backoffSettings?.maxRetryDelayMillis ?? DEFAULT_MAX_RETRY_DELAY_MS;
  const multiplier =
    backoffSettings?.retryDelayMultiplier ?? DEFAULT_RETRY_DELAY_MULTIPLIER;

  const unclampedDelay =
    initialDelay * Math.pow(multiplier, Math.max(0, retryAttempt - 1));
  const cappedDelay = Math.min(maxDelay, unclampedDelay);

  // Jitter in [0.8 * cappedDelay, 1.2 * cappedDelay]
  const jitterFactor = 0.8 + Math.random() * 0.4;
  return Math.floor(cappedDelay * jitterFactor);
}

/**
 * Creates a readable object stream that executes `BatchWrite` and transparently
 * retries and resumes on transient stream failures (`UNAVAILABLE`, retryable `INTERNAL`,
 * and premature stream `end`) for only the unresolved mutation groups.
 */
export function batchWriteStream(
  mutationGroups: IMutationGroup[],
  makeRequest: (
    currentMutationGroups: IMutationGroup[],
    remainingTimeoutMs: number,
  ) => Readable,
  options: BatchWriteStreamOptions = {},
): Transform {
  const gaxOptions = options.gaxOptions;
  const backoffSettings = gaxOptions?.retry?.backoffSettings;
  const retryableCodes = gaxOptions?.retry?.retryCodes ?? [
    grpc.status.UNAVAILABLE,
  ];
  const timeout =
    gaxOptions?.timeout ??
    backoffSettings?.totalTimeoutMillis ??
    DEFAULT_TOTAL_TIMEOUT_MS;
  const maxRetries = backoffSettings?.maxRetries ?? Infinity;

  // Track pending mutation groups by their original caller index [0..N-1].
  // Resolved entries are set to `null` so large mutation payloads can be GC'd.
  const totalGroups = mutationGroups.length;
  const pending: Array<IMutationGroup | null> = [...mutationGroups];
  let remaining = totalGroups;
  let sawNonObjectChunk = false;

  // Maps current RPC request index -> original caller index.
  let streamIndexes: number[] = [];

  let activeRequestStream: Readable | null = null;
  let retryTimer: NodeJS.Timeout | null = null;
  let retryCount = 0;
  const startTime = Date.now();
  let terminated = false;

  const userStream: Transform = through.obj(
    (chunk: IBatchWriteResponse, _enc, next) => {
      next(null, chunk);
    },
  );

  const finalize = (status: grpc.status) => {
    if (terminated) {
      return;
    }
    terminated = true;
    if (retryTimer) {
      clearTimeout(retryTimer);
      retryTimer = null;
    }
    options.onTerminate?.(status);
  };

  const cleanupActiveRequestStream = () => {
    if (!activeRequestStream) {
      return;
    }
    const streamToClean = activeRequestStream;
    activeRequestStream = null;
    streamToClean.removeAllListeners('data');
    streamToClean.removeAllListeners('end');
    streamToClean.removeAllListeners('error');
    streamToClean.on('error', () => {});
    if (!streamToClean.destroyed) {
      streamToClean.destroy();
    }
  };

  // Intercept stream destruction and close so early cancellation by the caller
  // immediately clears any pending retry timer and aborts the active RPC stream.
  const originalDestroy = userStream._destroy;
  userStream._destroy = function (
    error: Error | null,
    callback: (error?: Error | null) => void,
  ) {
    if (!terminated) {
      cleanupActiveRequestStream();
      finalize(
        (error as grpc.ServiceError | null)?.code ?? grpc.status.CANCELLED,
      );
    }
    if (typeof originalDestroy === 'function') {
      originalDestroy.call(this, error, callback);
    } else {
      callback(error);
    }
  };

  userStream.once('close', () => {
    if (!terminated) {
      cleanupActiveRequestStream();
      finalize(grpc.status.CANCELLED);
    }
  });

  const isRetryableError = (err: grpc.ServiceError): boolean => {
    if (!err || typeof err.code !== 'number') {
      return false;
    }
    return (
      retryableCodes.includes(err.code) ||
      (retryableCodes.includes(grpc.status.UNAVAILABLE) &&
        isRetryableInternalError(err))
    );
  };

  const handleRetryOrFail = (err: grpc.ServiceError) => {
    cleanupActiveRequestStream();
    if (terminated || userStream.destroyed) {
      return;
    }

    const elapsed = Date.now() - startTime;
    if (
      remaining > 0 &&
      retryCount < maxRetries &&
      elapsed < timeout &&
      isRetryableError(err)
    ) {
      retryCount++;
      const delayMs = getNextRetryDelayMs(err, retryCount, backoffSettings);
      if (elapsed + delayMs >= timeout) {
        const deadlineErr = new DeadlineError(err);
        finalize(grpc.status.DEADLINE_EXCEEDED);
        userStream.destroy(deadlineErr);
        return;
      }
      retryTimer = setTimeout(() => {
        retryTimer = null;
        if (!terminated && !userStream.destroyed) {
          startAttempt();
        }
      }, delayMs);
      return;
    }

    const finalError =
      elapsed >= timeout && isRetryableError(err)
        ? new DeadlineError(err)
        : err;
    finalize(finalError.code ?? grpc.status.UNKNOWN);
    userStream.destroy(finalError);
  };

  const startAttempt = () => {
    if (terminated || userStream.destroyed) {
      return;
    }

    if (retryCount > 0 && remaining === 0) {
      finalize(grpc.status.OK);
      userStream.end();
      return;
    }

    // Build the subset of unacknowledged MutationGroups and their index map.
    const currentGroups: IMutationGroup[] = [];
    streamIndexes = [];
    for (let origIdx = 0; origIdx < totalGroups; origIdx++) {
      const group = pending[origIdx];
      if (group !== null) {
        currentGroups.push(group);
        streamIndexes.push(origIdx);
      }
    }

    const elapsed = Date.now() - startTime;
    const remainingTimeoutMs = Number.isFinite(timeout)
      ? Math.max(0, timeout - elapsed)
      : timeout;
    const currentStream = makeRequest(currentGroups, remainingTimeoutMs);
    activeRequestStream = currentStream;

    const onData = (response: IBatchWriteResponse) => {
      if (terminated || userStream.destroyed) {
        return;
      }

      if (typeof response !== 'object' || response === null) {
        sawNonObjectChunk = true;
        if (!userStream.write(response)) {
          currentStream.pause();
        }
        return;
      }

      const respIndexes = response.indexes;
      if (Array.isArray(respIndexes)) {
        // Validate all response indexes before mutating state.
        for (let i = 0; i < respIndexes.length; i++) {
          const idx = Number(respIndexes[i]);
          if (
            !Number.isInteger(idx) ||
            idx < 0 ||
            idx >= streamIndexes.length
          ) {
            cleanupActiveRequestStream();
            const msg = `BatchWrite index ${idx} out of bounds for current request size ${streamIndexes.length}`;
            const internalErr = Object.assign(new Error(msg), {
              code: grpc.status.INTERNAL,
              details: msg,
              metadata: new grpc.Metadata(),
            } as grpc.ServiceError);
            finalize(grpc.status.INTERNAL);
            userStream.destroy(internalErr);
            return;
          }
        }

        // Translate retry-local indexes back to original caller indexes in-place
        // and mark each acknowledged group as resolved (nulling reference for GC).
        for (let i = 0; i < respIndexes.length; i++) {
          const retryIdx = Number(respIndexes[i]);
          const origIdx = streamIndexes[retryIdx];
          respIndexes[i] = origIdx;
          if (pending[origIdx] !== null) {
            pending[origIdx] = null;
            remaining--;
          }
        }
      }

      // Forward the response with translated indexes and respect downstream backpressure.
      if (!userStream.write(response)) {
        currentStream.pause();
      }
    };

    const onError = (err: grpc.ServiceError) => {
      currentStream.removeListener('data', onData);
      currentStream.removeListener('end', onEnd);
      if (terminated || userStream.destroyed) {
        return;
      }
      if (totalGroups > 0 && remaining === 0 && !sawNonObjectChunk) {
        cleanupActiveRequestStream();
        finalize(grpc.status.OK);
        userStream.end();
        return;
      }
      handleRetryOrFail(err);
    };

    const onEnd = () => {
      currentStream.removeListener('data', onData);
      currentStream.removeListener('error', onError);
      activeRequestStream = null;
      if (terminated || userStream.destroyed) {
        return;
      }

      // Premature stream end (EOF while remaining > 0) is treated as a
      // retryable UNAVAILABLE error so remaining groups are retried.
      if (remaining > 0 && !sawNonObjectChunk) {
        const msg = `BatchWrite stream ended prematurely with ${remaining} unacknowledged mutation group(s)`;
        const prematureEofErr = Object.assign(new Error(msg), {
          code: grpc.status.UNAVAILABLE,
          details: msg,
          metadata: new grpc.Metadata(),
        } as grpc.ServiceError);
        handleRetryOrFail(prematureEofErr);
        return;
      }

      finalize(grpc.status.OK);
      userStream.end();
    };

    currentStream.on('data', onData);
    currentStream.once('error', onError);
    currentStream.once('end', onEnd);
  };

  // Propagate downstream drain to resume the active gRPC stream.
  userStream.on('drain', () => {
    activeRequestStream?.resume();
  });

  startAttempt();

  return userStream;
}

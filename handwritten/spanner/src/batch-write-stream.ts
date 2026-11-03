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
import {getNextRetryDelayMs} from './common';

export {getNextRetryDelayMs};

type IMutationGroup = protos.google.spanner.v1.BatchWriteRequest.IMutationGroup;
type IBatchWriteResponse = protos.google.spanner.v1.IBatchWriteResponse;

export interface BatchWriteStreamOptions {
  gaxOptions?: CallOptions;
  onTerminate?: (finalStatus: grpc.status) => void;
}

const DEFAULT_TOTAL_TIMEOUT_MS = 3600000; // 1 hour

/**
 * Checks whether an error is eligible for retry.
 */
function isRetryableError(
  err: grpc.ServiceError,
  retryableCodes: grpc.status[],
): boolean {
  if (!err || typeof err.code !== 'number') {
    return false;
  }
  const allowsNetworkRetries = retryableCodes.includes(grpc.status.UNAVAILABLE);
  return (
    retryableCodes.includes(err.code) ||
    (allowsNetworkRetries && isRetryableInternalError(err))
  );
}

/**
 * Validates response indexes against current request bounds, translates
 * retry-local indexes back to original caller positions in-place, and marks
 * acknowledged mutation groups as resolved.
 */
function processResponseIndexes(
  response: IBatchWriteResponse,
  streamIndexes: number[],
  pending: Array<IMutationGroup | null>,
): {error?: grpc.ServiceError; acknowledgedCount: number} {
  const respIndexes = response.indexes;
  if (!Array.isArray(respIndexes)) {
    return {acknowledgedCount: 0};
  }

  // Validate all response indexes before mutating state.
  for (let i = 0; i < respIndexes.length; i++) {
    const idx = Number(respIndexes[i]);
    if (!Number.isInteger(idx) || idx < 0 || idx >= streamIndexes.length) {
      const msg = `BatchWrite index ${idx} out of bounds for current request size ${streamIndexes.length}`;
      return {
        error: Object.assign(new Error(msg), {
          code: grpc.status.INTERNAL,
          details: msg,
          metadata: new grpc.Metadata(),
        } as grpc.ServiceError),
        acknowledgedCount: 0,
      };
    }
  }

  // Translate retry-local indexes back to original caller indexes in-place
  // and mark each acknowledged group as resolved (nulling reference for GC).
  let acknowledgedCount = 0;
  for (let i = 0; i < respIndexes.length; i++) {
    const retryIdx = Number(respIndexes[i]);
    const origIdx = streamIndexes[retryIdx];
    respIndexes[i] = origIdx;
    if (pending[origIdx] !== null) {
      pending[origIdx] = null;
      acknowledgedCount++;
    }
  }

  return {acknowledgedCount};
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
  const totalGroups = mutationGroups ? mutationGroups.length : 0;
  const pending: Array<IMutationGroup | null> = mutationGroups
    ? [...mutationGroups]
    : [];
  let remaining = totalGroups;
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

  function finalize(status: grpc.status): void {
    if (terminated) {
      return;
    }
    terminated = true;
    if (retryTimer) {
      clearTimeout(retryTimer);
      retryTimer = null;
    }
    options.onTerminate?.(status);
  }

  function cleanupActiveStream(): void {
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
  }

  // Hook caller cancellation and cleanup
  const originalDestroy = userStream._destroy;
  userStream._destroy = (
    error: Error | null,
    callback: (error?: Error | null) => void,
  ) => {
    if (!terminated) {
      cleanupActiveStream();
      finalize(
        (error as grpc.ServiceError | null)?.code ?? grpc.status.CANCELLED,
      );
    }
    if (typeof originalDestroy === 'function') {
      originalDestroy.call(userStream, error, callback);
    } else {
      callback(error);
    }
  };

  userStream.once('close', () => {
    if (!terminated) {
      cleanupActiveStream();
      finalize(grpc.status.CANCELLED);
    }
  });

  userStream.on('drain', () => {
    activeRequestStream?.resume();
  });

  if (totalGroups === 0) {
    finalize(grpc.status.OK);
    setImmediate(() => {
      userStream.end();
    });
    return userStream;
  }

  function handleRetryOrFail(err: grpc.ServiceError): void {
    cleanupActiveStream();
    if (terminated || userStream.destroyed) {
      return;
    }

    const elapsed = Date.now() - startTime;
    if (
      remaining > 0 &&
      retryCount < maxRetries &&
      elapsed < timeout &&
      isRetryableError(err, retryableCodes)
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
      elapsed >= timeout && isRetryableError(err, retryableCodes)
        ? new DeadlineError(err)
        : err;
    finalize(finalError.code ?? grpc.status.UNKNOWN);
    userStream.destroy(finalError);
  }

  function startAttempt(): void {
    if (terminated || userStream.destroyed) {
      return;
    }

    if (remaining === 0) {
      finalize(grpc.status.OK);
      userStream.end();
      return;
    }

    // Filter unacknowledged mutation groups and record index mapping
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

    currentStream.on('data', (response: IBatchWriteResponse) => {
      if (terminated || userStream.destroyed) {
        return;
      }

      const {error, acknowledgedCount} = processResponseIndexes(
        response,
        streamIndexes,
        pending,
      );

      if (error) {
        cleanupActiveStream();
        finalize(grpc.status.INTERNAL);
        userStream.destroy(error);
        return;
      }

      remaining -= acknowledgedCount;

      // Forward response and handle downstream backpressure
      if (!userStream.write(response)) {
        currentStream.pause();
      }
    });

    currentStream.once('error', (err: grpc.ServiceError) => {
      if (terminated || userStream.destroyed) {
        return;
      }
      if (totalGroups > 0 && remaining === 0) {
        cleanupActiveStream();
        finalize(grpc.status.OK);
        userStream.end();
        return;
      }
      handleRetryOrFail(err);
    });

    currentStream.once('end', () => {
      activeRequestStream = null;
      if (terminated || userStream.destroyed) {
        return;
      }

      // Premature stream end (EOF while remaining > 0) is treated as a
      // retryable UNAVAILABLE error so remaining groups are retried.
      if (remaining > 0) {
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
    });
  }

  startAttempt();
  return userStream;
}

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

type IMutationGroup = protos.google.spanner.v1.BatchWriteRequest.IMutationGroup;
type IBatchWriteResponse = protos.google.spanner.v1.IBatchWriteResponse;

type MakeBatchWriteRequest = (
  currentMutationGroups: IMutationGroup[],
  remainingTimeoutMs: number,
) => Readable;

export interface BatchWriteStreamOptions {
  gaxOptions?: CallOptions;
  onTerminate?: (finalStatus: grpc.status) => void;
}

interface BatchWriteState {
  makeRequest: MakeBatchWriteRequest;
  options: BatchWriteStreamOptions;
  userStream: Transform;
  pending: Array<IMutationGroup | null>;
  remaining: number;
  activeRequestStream: Readable | null;
  retryTimer: NodeJS.Timeout | null;
  retryCount: number;
  startTime: number;
  terminated: boolean;
}

const DEFAULT_TOTAL_TIMEOUT_MS = 3600000; // 1 hour

/**
 * Checks whether an error is eligible for retry.
 */
function isRetryableError(
  err: grpc.ServiceError,
  retry?: CallOptions['retry'],
): boolean {
  if (retry === null || !err || typeof err.code !== 'number') {
    return false;
  }
  const retryableCodes = retry?.retryCodes ?? [grpc.status.UNAVAILABLE];
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
    const idx = respIndexes[i];
    if (
      typeof idx !== 'number' ||
      !Number.isInteger(idx) ||
      idx < 0 ||
      idx >= streamIndexes.length
    ) {
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
    const retryIdx = respIndexes[i];
    const origIdx = streamIndexes[retryIdx];
    respIndexes[i] = origIdx;
    if (pending[origIdx] !== null) {
      pending[origIdx] = null;
      acknowledgedCount++;
    }
  }

  return {acknowledgedCount};
}

function finalize(state: BatchWriteState, status: grpc.status): void {
  if (state.terminated) {
    return;
  }
  state.terminated = true;
  if (state.retryTimer) {
    clearTimeout(state.retryTimer);
    state.retryTimer = null;
  }
  state.options.onTerminate?.(status);
}

function cleanupActiveStream(state: BatchWriteState): void {
  if (!state.activeRequestStream) {
    return;
  }
  const streamToClean = state.activeRequestStream;
  state.activeRequestStream = null;
  streamToClean.removeAllListeners('data');
  streamToClean.removeAllListeners('end');
  streamToClean.removeAllListeners('error');
  streamToClean.on('error', () => {});
  if (!streamToClean.destroyed) {
    streamToClean.destroy();
  }
}

function handleRetryOrFail(
  state: BatchWriteState,
  err: grpc.ServiceError,
): void {
  cleanupActiveStream(state);
  if (state.terminated || state.userStream.destroyed) {
    return;
  }

  const gaxOptions = state.options.gaxOptions;
  const backoffSettings = gaxOptions?.retry?.backoffSettings;
  const timeout =
    gaxOptions?.timeout ??
    backoffSettings?.totalTimeoutMillis ??
    DEFAULT_TOTAL_TIMEOUT_MS;
  const maxRetries =
    gaxOptions?.maxRetries ?? backoffSettings?.maxRetries ?? Infinity;
  const retryable = isRetryableError(err, gaxOptions?.retry);
  const elapsed = Date.now() - state.startTime;

  if (
    state.remaining > 0 &&
    state.retryCount < maxRetries &&
    elapsed < timeout &&
    retryable
  ) {
    state.retryCount++;
    const delayMs = getNextRetryDelayMs(err, state.retryCount, backoffSettings);
    if (elapsed + delayMs >= timeout) {
      const deadlineErr = new DeadlineError(err);
      finalize(state, grpc.status.DEADLINE_EXCEEDED);
      state.userStream.destroy(deadlineErr);
      return;
    }
    state.retryTimer = setTimeout(() => {
      state.retryTimer = null;
      if (!state.terminated && !state.userStream.destroyed) {
        startAttempt(state);
      }
    }, delayMs);
    return;
  }

  const finalError =
    elapsed >= timeout && retryable ? new DeadlineError(err) : err;
  finalize(state, finalError.code ?? grpc.status.UNKNOWN);
  state.userStream.destroy(finalError);
}

function startAttempt(state: BatchWriteState): void {
  if (state.terminated || state.userStream.destroyed) {
    return;
  }

  if (state.remaining === 0) {
    finalize(state, grpc.status.OK);
    state.userStream.end();
    return;
  }

  // Filter unacknowledged mutation groups and record index mapping
  const currentGroups: IMutationGroup[] = [];
  const streamIndexes: number[] = [];
  for (let origIdx = 0; origIdx < state.pending.length; origIdx++) {
    const group = state.pending[origIdx];
    if (group !== null) {
      currentGroups.push(group);
      streamIndexes.push(origIdx);
    }
  }

  const gaxOptions = state.options.gaxOptions;
  const timeout =
    gaxOptions?.timeout ??
    gaxOptions?.retry?.backoffSettings?.totalTimeoutMillis ??
    DEFAULT_TOTAL_TIMEOUT_MS;
  const elapsed = Date.now() - state.startTime;
  const remainingTimeoutMs = Number.isFinite(timeout)
    ? Math.max(0, timeout - elapsed)
    : timeout;

  const currentStream = state.makeRequest(currentGroups, remainingTimeoutMs);
  state.activeRequestStream = currentStream;

  currentStream.on('data', (response: IBatchWriteResponse) => {
    if (state.terminated || state.userStream.destroyed) {
      return;
    }

    const {error, acknowledgedCount} = processResponseIndexes(
      response,
      streamIndexes,
      state.pending,
    );

    if (error) {
      cleanupActiveStream(state);
      finalize(state, grpc.status.INTERNAL);
      state.userStream.destroy(error);
      return;
    }

    state.remaining -= acknowledgedCount;

    // Forward response and handle downstream backpressure
    if (!state.userStream.write(response)) {
      currentStream.pause();
    }
  });

  currentStream.once('error', (err: grpc.ServiceError) => {
    if (state.terminated || state.userStream.destroyed) {
      return;
    }
    if (state.pending.length > 0 && state.remaining === 0) {
      cleanupActiveStream(state);
      finalize(state, grpc.status.OK);
      state.userStream.end();
      return;
    }
    handleRetryOrFail(state, err);
  });

  currentStream.once('end', () => {
    cleanupActiveStream(state);
    if (state.terminated || state.userStream.destroyed) {
      return;
    }

    // Premature stream end (EOF while remaining > 0) is treated as a
    // retryable UNAVAILABLE error so remaining groups are retried.
    if (state.remaining > 0) {
      const msg = `BatchWrite stream ended prematurely with ${state.remaining} unacknowledged mutation group(s)`;
      const prematureEofErr = Object.assign(new Error(msg), {
        code: grpc.status.UNAVAILABLE,
        details: msg,
        metadata: new grpc.Metadata(),
      } as grpc.ServiceError);
      handleRetryOrFail(state, prematureEofErr);
      return;
    }

    finalize(state, grpc.status.OK);
    state.userStream.end();
  });
}

/**
 * Creates a readable object stream that executes `BatchWrite` and transparently
 * retries and resumes on transient stream failures (`UNAVAILABLE`, retryable `INTERNAL`,
 * and premature stream `end`) for only the unresolved mutation groups.
 */
export function batchWriteStream(
  mutationGroups: IMutationGroup[],
  makeRequest: MakeBatchWriteRequest,
  options: BatchWriteStreamOptions = {},
): Transform {
  // Track pending mutation groups by their original caller index [0..N-1].
  // Resolved entries are set to `null` so large mutation payloads can be GC'd.
  const pending: Array<IMutationGroup | null> = mutationGroups
    ? [...mutationGroups]
    : [];

  const userStream: Transform = through.obj(
    (chunk: IBatchWriteResponse, _enc, next) => {
      next(null, chunk);
    },
  );

  const state: BatchWriteState = {
    makeRequest,
    options,
    userStream,
    pending,
    remaining: pending.length,
    activeRequestStream: null,
    retryTimer: null,
    retryCount: 0,
    startTime: Date.now(),
    terminated: false,
  };

  // Hook caller cancellation and cleanup
  const originalDestroy = userStream._destroy;
  userStream._destroy = (
    error: Error | null,
    callback: (error?: Error | null) => void,
  ) => {
    if (!state.terminated) {
      cleanupActiveStream(state);
      finalize(
        state,
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
    if (!state.terminated) {
      cleanupActiveStream(state);
      finalize(state, grpc.status.CANCELLED);
    }
  });

  userStream.on('drain', () => {
    state.activeRequestStream?.resume();
  });

  if (pending.length === 0) {
    finalize(state, grpc.status.OK);
    setImmediate(() => {
      userStream.end();
    });
    return userStream;
  }

  startAttempt(state);
  return userStream;
}

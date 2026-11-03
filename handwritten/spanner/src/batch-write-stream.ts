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
 * Coordinates multi-attempt streaming RPC execution for `BatchWrite`, transparently
 * retrying and resuming on transient failures for unacknowledged mutation groups while
 * translating response indexes back to original caller positions.
 */
export class BatchWriteRetryCoordinator {
  private readonly makeRequest: (
    currentMutationGroups: IMutationGroup[],
    remainingTimeoutMs: number,
  ) => Readable;
  private readonly options: BatchWriteStreamOptions;
  private readonly userStream: Transform;
  private readonly backoffSettings?: Partial<
    NonNullable<NonNullable<CallOptions['retry']>['backoffSettings']>
  >;
  private readonly retryableCodes: grpc.status[];
  private readonly timeout: number;
  private readonly maxRetries: number;
  private readonly totalGroups: number;
  private readonly pending: Array<IMutationGroup | null>;
  private remaining: number;
  private streamIndexes: number[] = [];
  private activeRequestStream: Readable | null = null;
  private retryTimer: NodeJS.Timeout | null = null;
  private retryCount = 0;
  private readonly startTime = Date.now();
  private terminated = false;

  constructor(
    mutationGroups: IMutationGroup[],
    makeRequest: (
      currentMutationGroups: IMutationGroup[],
      remainingTimeoutMs: number,
    ) => Readable,
    options: BatchWriteStreamOptions = {},
  ) {
    this.makeRequest = makeRequest;
    this.options = options;
    const gaxOptions = options.gaxOptions;
    this.backoffSettings = gaxOptions?.retry?.backoffSettings;
    this.retryableCodes = gaxOptions?.retry?.retryCodes ?? [
      grpc.status.UNAVAILABLE,
    ];
    this.timeout =
      gaxOptions?.timeout ??
      this.backoffSettings?.totalTimeoutMillis ??
      DEFAULT_TOTAL_TIMEOUT_MS;
    this.maxRetries = this.backoffSettings?.maxRetries ?? Infinity;

    this.totalGroups = mutationGroups ? mutationGroups.length : 0;
    this.pending = mutationGroups ? [...mutationGroups] : [];
    this.remaining = this.totalGroups;

    this.userStream = through.obj((chunk: IBatchWriteResponse, _enc, next) => {
      next(null, chunk);
    });

    this.setupStreamCancellation();
  }

  public start(): Transform {
    if (this.totalGroups === 0) {
      this.finalize(grpc.status.OK);
      setImmediate(() => {
        this.userStream.end();
      });
      return this.userStream;
    }

    this.userStream.on('drain', () => {
      this.activeRequestStream?.resume();
    });

    this.startAttempt();
    return this.userStream;
  }

  private setupStreamCancellation(): void {
    const originalDestroy = this.userStream._destroy;
    this.userStream._destroy = (
      error: Error | null,
      callback: (error?: Error | null) => void,
    ) => {
      if (!this.terminated) {
        this.cleanupActiveRequestStream();
        this.finalize(
          (error as grpc.ServiceError | null)?.code ?? grpc.status.CANCELLED,
        );
      }
      if (typeof originalDestroy === 'function') {
        originalDestroy.call(this.userStream, error, callback);
      } else {
        callback(error);
      }
    };

    this.userStream.once('close', () => {
      if (!this.terminated) {
        this.cleanupActiveRequestStream();
        this.finalize(grpc.status.CANCELLED);
      }
    });
  }

  private finalize(status: grpc.status): void {
    if (this.terminated) {
      return;
    }
    this.terminated = true;
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    this.options.onTerminate?.(status);
  }

  private cleanupActiveRequestStream(): void {
    if (!this.activeRequestStream) {
      return;
    }
    const streamToClean = this.activeRequestStream;
    this.activeRequestStream = null;
    streamToClean.removeAllListeners('data');
    streamToClean.removeAllListeners('end');
    streamToClean.removeAllListeners('error');
    streamToClean.on('error', () => {});
    if (!streamToClean.destroyed) {
      streamToClean.destroy();
    }
  }

  private isRetryableError(err: grpc.ServiceError): boolean {
    if (!err || typeof err.code !== 'number') {
      return false;
    }
    const allowsNetworkRetries = this.retryableCodes.includes(
      grpc.status.UNAVAILABLE,
    );
    return (
      this.retryableCodes.includes(err.code) ||
      (allowsNetworkRetries && isRetryableInternalError(err))
    );
  }

  private handleRetryOrFail(err: grpc.ServiceError): void {
    this.cleanupActiveRequestStream();
    if (this.terminated || this.userStream.destroyed) {
      return;
    }

    const elapsed = Date.now() - this.startTime;
    if (
      this.remaining > 0 &&
      this.retryCount < this.maxRetries &&
      elapsed < this.timeout &&
      this.isRetryableError(err)
    ) {
      this.retryCount++;
      const delayMs = getNextRetryDelayMs(
        err,
        this.retryCount,
        this.backoffSettings,
      );
      if (elapsed + delayMs >= this.timeout) {
        const deadlineErr = new DeadlineError(err);
        this.finalize(grpc.status.DEADLINE_EXCEEDED);
        this.userStream.destroy(deadlineErr);
        return;
      }
      this.retryTimer = setTimeout(() => {
        this.retryTimer = null;
        if (!this.terminated && !this.userStream.destroyed) {
          this.startAttempt();
        }
      }, delayMs);
      return;
    }

    const finalError =
      elapsed >= this.timeout && this.isRetryableError(err)
        ? new DeadlineError(err)
        : err;
    this.finalize(finalError.code ?? grpc.status.UNKNOWN);
    this.userStream.destroy(finalError);
  }

  private buildCurrentAttemptGroups(): IMutationGroup[] {
    const currentGroups: IMutationGroup[] = [];
    this.streamIndexes = [];
    for (let origIdx = 0; origIdx < this.totalGroups; origIdx++) {
      const group = this.pending[origIdx];
      if (group !== null) {
        currentGroups.push(group);
        this.streamIndexes.push(origIdx);
      }
    }
    return currentGroups;
  }

  /**
   * Validates response indexes against current request bounds, translates
   * retry-local indexes back to original caller positions in-place, and marks
   * acknowledged mutation groups as resolved.
   */
  private processResponseIndexes(
    response: IBatchWriteResponse,
  ): grpc.ServiceError | null {
    const respIndexes = response.indexes;
    if (!Array.isArray(respIndexes)) {
      return null;
    }

    // Validate all response indexes before mutating state.
    for (let i = 0; i < respIndexes.length; i++) {
      const idx = Number(respIndexes[i]);
      if (
        !Number.isInteger(idx) ||
        idx < 0 ||
        idx >= this.streamIndexes.length
      ) {
        const msg = `BatchWrite index ${idx} out of bounds for current request size ${this.streamIndexes.length}`;
        return Object.assign(new Error(msg), {
          code: grpc.status.INTERNAL,
          details: msg,
          metadata: new grpc.Metadata(),
        } as grpc.ServiceError);
      }
    }

    // Translate retry-local indexes back to original caller indexes in-place
    // and mark each acknowledged group as resolved (nulling reference for GC).
    for (let i = 0; i < respIndexes.length; i++) {
      const retryIdx = Number(respIndexes[i]);
      const origIdx = this.streamIndexes[retryIdx];
      respIndexes[i] = origIdx;
      if (this.pending[origIdx] !== null) {
        this.pending[origIdx] = null;
        this.remaining--;
      }
    }

    return null;
  }

  private handleData(
    response: IBatchWriteResponse,
    currentStream: Readable,
  ): void {
    if (this.terminated || this.userStream.destroyed) {
      return;
    }

    const validationError = this.processResponseIndexes(response);
    if (validationError) {
      this.cleanupActiveRequestStream();
      this.finalize(grpc.status.INTERNAL);
      this.userStream.destroy(validationError);
      return;
    }

    // Forward the response with translated indexes and respect downstream backpressure.
    if (!this.userStream.write(response)) {
      currentStream.pause();
    }
  }

  private handleError(err: grpc.ServiceError): void {
    if (this.terminated || this.userStream.destroyed) {
      return;
    }
    if (this.totalGroups > 0 && this.remaining === 0) {
      this.cleanupActiveRequestStream();
      this.finalize(grpc.status.OK);
      this.userStream.end();
      return;
    }
    this.handleRetryOrFail(err);
  }

  private handleEnd(): void {
    this.activeRequestStream = null;
    if (this.terminated || this.userStream.destroyed) {
      return;
    }

    // Premature stream end (EOF while remaining > 0) is treated as a
    // retryable UNAVAILABLE error so remaining groups are retried.
    if (this.remaining > 0) {
      const msg = `BatchWrite stream ended prematurely with ${this.remaining} unacknowledged mutation group(s)`;
      const prematureEofErr = Object.assign(new Error(msg), {
        code: grpc.status.UNAVAILABLE,
        details: msg,
        metadata: new grpc.Metadata(),
      } as grpc.ServiceError);
      this.handleRetryOrFail(prematureEofErr);
      return;
    }

    this.finalize(grpc.status.OK);
    this.userStream.end();
  }

  private startAttempt(): void {
    if (this.terminated || this.userStream.destroyed) {
      return;
    }

    if (this.remaining === 0) {
      this.finalize(grpc.status.OK);
      this.userStream.end();
      return;
    }

    const currentGroups = this.buildCurrentAttemptGroups();
    const elapsed = Date.now() - this.startTime;
    const remainingTimeoutMs = Number.isFinite(this.timeout)
      ? Math.max(0, this.timeout - elapsed)
      : this.timeout;

    const currentStream = this.makeRequest(currentGroups, remainingTimeoutMs);
    this.activeRequestStream = currentStream;

    const onData = (response: IBatchWriteResponse) => {
      this.handleData(response, currentStream);
    };

    const onError = (err: grpc.ServiceError) => {
      currentStream.removeListener('data', onData);
      currentStream.removeListener('end', onEnd);
      this.handleError(err);
    };

    const onEnd = () => {
      currentStream.removeListener('data', onData);
      currentStream.removeListener('error', onError);
      this.handleEnd();
    };

    currentStream.on('data', onData);
    currentStream.once('error', onError);
    currentStream.once('end', onEnd);
  }
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
  const coordinator = new BatchWriteRetryCoordinator(
    mutationGroups,
    makeRequest,
    options,
  );
  return coordinator.start();
}

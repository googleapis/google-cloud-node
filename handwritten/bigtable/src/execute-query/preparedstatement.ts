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
import {Bigtable} from '..';
import * as SqlTypes from './types';
import {PreciseDate} from '@google-cloud/precise-date';

import {google} from '../../protos/protos';
import {MetadataConsumer} from './metadataconsumer';
import {EventEmitter} from 'events';
import {ServiceError, CallOptions} from 'google-gax';

export const SHOULD_REFRESH_SOON_PERIOD_MS = 1000;

export type PreparedStatementDataCallback = (
  err?: Error,
  preparedQueryBytes?: Uint8Array | string,
  metadata?: SqlTypes.ResultSetMetadata,
) => void;

interface IRetryRequest {
  client: string;
  method: string;
  reqOpts: google.bigtable.v2.IPrepareQueryRequest;
  retryOpts?: CallOptions;
}

/**
 * This object keeps track of the query plan a.k.a. metadata and preparedQuery bytes.
 * It provides a way of retrieving last retrieved query plan.
 * If a query plan is marked as expired, it will be refreshed.
 * You can get the query plan via the getData method.
 * If the query plan is not expired, getData will return the value immediately.
 * If the object is marked as expired, getting the query plan will wait for
 * a refresh to happen. If the refresh fails, all awaiting getData calls
 * also return an error.
 */
export class PreparedStatement extends EventEmitter {
  private bigtable: Bigtable;
  private retryRequest: IRetryRequest;
  private metadata: SqlTypes.ResultSetMetadata;
  private preparedQueryBytes: Uint8Array | string;
  private validUntilTimestamp: number | null;
  private forcedExpiration: boolean;
  private isRefreshing: boolean;
  private timer: NodeJS.Timeout | null;
  private lastRefreshError: ServiceError | Error | null;
  private parameterTypes: {[param: string]: SqlTypes.Type};

  constructor(
    bigtable: Bigtable,
    response: google.bigtable.v2.PrepareQueryResponse,
    retryRequest: IRetryRequest,
    parameterTypes: {[param: string]: SqlTypes.Type},
  ) {
    super();
    this.bigtable = bigtable;
    this.metadata = MetadataConsumer.parseMetadata(response.metadata!);
    this.preparedQueryBytes = response.preparedQuery;
    this.validUntilTimestamp = timestampFromResponse(response);
    this.timer = null;
    this.isRefreshing = false;
    this.lastRefreshError = null;
    this.forcedExpiration = false;
    this.retryRequest = retryRequest;
    this.parameterTypes = parameterTypes;
  }

  /**
   * Returns true if the validUntilTimestamp is close,
   * meaning less than SHOULD_REFRESH_SOON_PERIOD_MS away.
   */
  private shouldRefreshSoon = (): boolean => {
    if (!this.validUntilTimestamp) {
      return false;
    }
    return (
      Date.now() > this.validUntilTimestamp - SHOULD_REFRESH_SOON_PERIOD_MS
    );
  };

  /**
   * Schedules the refresh. It is deffered to the next tick to ensure
   * that the current call stack is finished before a request to bigtable is made.
   */
  private setupTimer = (): void => {
    this.timer = setTimeout(this.handleTimerEnd, 0);
  };

  private discardTimer = (): void => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  /**
   * Performs a request to bigtable to get a refreshed query plan.
   */
  private startRefreshing = (): void => {
    this.isRefreshing = true;
    this.bigtable.request(this.retryRequest, this.handlePrepareQueryResponse);
  };

  /**
   * Begins the refresh.
   */
  private handleTimerEnd = (): void => {
    if (!this.isRefreshing) {
      this.discardTimer();
      this.startRefreshing();
    }
  };

  /**
   * Callback for handling the call to bigtable.
   */
  private handlePrepareQueryResponse = (
    err: ServiceError | null,
    response?: google.bigtable.v2.PrepareQueryResponse,
  ): void => {
    if (this.isRefreshing) {
      this.isRefreshing = false;
      this.discardTimer();
      if (err) {
        this.lastRefreshError = err;
        this.emit('refreshDone');
      } else {
        try {
          this.lastRefreshError = null;
          this.forcedExpiration = false;
          this.validUntilTimestamp = timestampFromResponse(response!);
          this.metadata = MetadataConsumer.parseMetadata(response!.metadata!);
          this.preparedQueryBytes = response!.preparedQuery;
        } catch (err: any) {
          this.lastRefreshError = err as Error;
        }
        this.emit('refreshDone');
      }
    } else {
      const err = new Error(
        'Invalid state: PrepareQueryResponse recieved when not refreshing.',
      );
      console.error(err);
      throw err;
    }
  };

  /**
   * Invoked when the query plan is retrieved from this object.
   */
  private scheduleRefreshIfNeeded = (): void => {
    if (!this.isRefreshing && this.timer === null) {
      if (this.isExpired() || this.shouldRefreshSoon()) {
        this.setupTimer();
      } // else noop
    } // else noop
  };

  /**
   * This function should be called, when the server returns
   * the FAILED_PRECONDITION error saying the query plan
   * is expired. For more info refer to the ExecuteQueryStateMachine.
   */
  markAsExpired = (): void => {
    this.forcedExpiration = true;
  };

  /**
   * Used for retrieveing the query plan (preparedQuery bytes and metadata)
   * @param callback called when query plan is available
   * @param timeoutMs when callback should be called with an error.
   */
  getData = (
    callback: PreparedStatementDataCallback,
    timeoutMs: number,
  ): void => {
    this.scheduleRefreshIfNeeded();
    if (this.isExpired()) {
      const listener = new CallbackWithTimeout(callback, timeoutMs);
      this.once('refreshDone', () => {
        // If there are many listeners, the query plan could have expired again
        // before we got to processing this one, so we have to check it again.
        if (this.isExpired() || this.lastRefreshError) {
          listener.tryInvoke(
            this.lastRefreshError ||
              new Error('Getting a fresh query plan failed.'),
            undefined,
            undefined,
          );
        } else {
          listener.tryInvoke(undefined, this.preparedQueryBytes, this.metadata);
        }
      });
    } else {
      // for the sake of consistency we should call the callback asynchornously
      // regardless if the plan needs refreshing or not.
      setTimeout(
        () => callback(undefined, this.preparedQueryBytes, this.metadata),
        0,
      );
    }
  };

  /**
   * @returns parameter types used to create the query plan
   */
  getParameterTypes = (): {[param: string]: SqlTypes.Type} =>
    this.parameterTypes;

  /**
   * @returns true if the object has been marked as expired.
   */
  isExpired = (): boolean => {
    return this.forcedExpiration;
  };
}

/**
 * This class makes sure the callback is called only once.
 * If the timeout expired, the callback is called with a "Timeout Expired" error.
 * Otherwise it is called with provided args.
 */
class CallbackWithTimeout {
  private callback: PreparedStatementDataCallback | null;
  private timer: NodeJS.Timeout | null;
  private isValid: boolean;

  constructor(callback: PreparedStatementDataCallback, timeout: number) {
    this.callback = callback;
    this.isValid = true;
    this.timer = setTimeout(() => {
      this.tryInvoke(
        new Error(
          'Deadline Exceeded waiting for prepared statement to refresh.',
        ),
      );
    }, timeout);
  }

  /**
   * If this object has not yet been invalidated, the callback is called.
   * @param args
   */
  tryInvoke(...args: Parameters<PreparedStatementDataCallback>): void {
    if (!this.isValid || !this.callback) {
      return;
    }
    const callback = this.callback;
    this.invalidate();
    callback(...args);
  }

  /**
   * After this method is called, the callback can no longer be invoked.
   */
  private invalidate(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.callback = null;
    this.isValid = false;
  }
}

function timestampFromResponse(
  response: google.bigtable.v2.PrepareQueryResponse,
): number | null {
  if (!response.validUntil?.seconds) {
    return null;
  }
  return new PreciseDate({
    seconds: response.validUntil?.seconds ?? undefined,
    nanos: response.validUntil?.nanos ?? undefined,
  }).getTime();
}

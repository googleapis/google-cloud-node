/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {grpc, CallOptions, Operation as GaxOperation} from 'google-gax';
import {protos} from '@google-cloud/spanner-api';
import {getRetryInfo, RETRY_INFO_BIN} from './protos';

export {RETRY_INFO_BIN};
const RetryInfo = getRetryInfo();
import instanceAdmin = protos.google;
import databaseAdmin = protos.google;

export type IOperation = instanceAdmin.longrunning.IOperation;

export type Schema =
  | string
  | string[]
  | databaseAdmin.spanner.admin.database.v1.IUpdateDatabaseDdlRequest;

export interface ResourceCallback<Resource, Response> {
  (
    err: grpc.ServiceError | null,
    resource?: Resource | null,
    response?: Response,
  ): void;
}
export type PagedResponse<Item, Response> = [Item[], {} | null, Response];

export type RequestCallback<T, R = void> = R extends void
  ? NormalCallback<T>
  : PagedCallback<T, R>;

export interface NormalCallback<TResponse> {
  (err: grpc.ServiceError | null, res?: TResponse | null): void;
}

export interface PagedCallback<Item, Response> {
  (
    err: grpc.ServiceError | null,
    results?: Item[] | null,
    nextQuery?: {} | null,
    response?: Response | null,
  ): void;
}

export interface LongRunningCallback<Resource> {
  (
    err: grpc.ServiceError | null,
    resource?: Resource | null,
    operation?: GaxOperation | null,
    apiResponse?: IOperation,
  ): void;
}

export interface PagedOptions {
  pageSize?: number;
  pageToken?: string;
  gaxOptions?: CallOptions;
}

export interface PagedOptionsWithFilter extends PagedOptions {
  filter?: string;
}

/*!
 * HTTP header for the resource prefix to improve routing
 * by the backend.
 */
export const CLOUD_RESOURCE_HEADER = 'google-cloud-resource-prefix';

/*!
 * HTTP header to route the requests at Leader
 */
export const LEADER_AWARE_ROUTING_HEADER = 'x-goog-spanner-route-to-leader';

/*
 * END TO END TRACING  header.
 */
export const END_TO_END_TRACING_HEADER = 'x-goog-spanner-end-to-end-tracing';

/*
 * AFE SERVER TIMING header.
 */
export const AFE_SERVER_TIMING_HEADER =
  'x-goog-spanner-enable-afe-server-timing';

/**
 * Add Leader aware routing header to existing header list.
 * @param headers Existing header list.
 */
export function addLeaderAwareRoutingHeader(headers: {[k: string]: string}) {
  headers[LEADER_AWARE_ROUTING_HEADER] = 'true';
}

let isAFEServerTimingEnabledCached: boolean | undefined;

/**
 * Returns whether AFE (Application Frontend Extension) server timing is enabled.
 *
 * This function checks the value of the environment variable
 * `SPANNER_DISABLE_AFE_SERVER_TIMING`. If the variable is set to the
 * string `'true'` (case-insensitive), then AFE server timing is considered disabled,
 * and this function returns `false`. For all other values (including if the variable is unset),
 * the function returns `true`.
 *
 * @returns {boolean} `true` if AFE server timing is enabled; otherwise, `false`.
 */
export function isAFEServerTimingEnabled(): boolean {
  if (isAFEServerTimingEnabledCached === undefined) {
    isAFEServerTimingEnabledCached =
      process.env['SPANNER_DISABLE_AFE_SERVER_TIMING']?.toLowerCase() !==
      'true';
  }
  return isAFEServerTimingEnabledCached;
}

/** Resets the cached value (use in tests if env changes). */
export function resetAFEServerTimingForTest(): void {
  isAFEServerTimingEnabledCached = undefined;
}

/**
 * Returns common headers to add.
 * @param headers Common header list.
 */
export function getCommonHeaders(
  resourceName: string,
  enableTracing?: boolean,
) {
  const headers: {[k: string]: string} = {};

  if (
    process.env.SPANNER_ENABLE_END_TO_END_TRACING?.toLowerCase() === 'true' ||
    enableTracing
  ) {
    headers[END_TO_END_TRACING_HEADER] = 'true';
  }

  if (isAFEServerTimingEnabled()) {
    headers[AFE_SERVER_TIMING_HEADER] = 'true';
  }

  headers[CLOUD_RESOURCE_HEADER] = resourceName;

  return headers;
}

// Default retry/backoff parameters from spanner_client_config.json
const DEFAULT_INITIAL_RETRY_DELAY_MS = 100;
const DEFAULT_MAX_RETRY_DELAY_MS = 60000;
const DEFAULT_RETRY_DELAY_MULTIPLIER = 1.3;

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

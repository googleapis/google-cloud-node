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
import {google as instanceAdmin} from '../protos/protos';
import {google as databaseAdmin} from '../protos/protos';
import {Spanner} from '.';

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
    process.env.SPANNER_ENABLE_END_TO_END_TRACING === 'true' ||
    enableTracing
  ) {
    headers[END_TO_END_TRACING_HEADER] = 'true';
  }

  if (Spanner.isAFEServerTimingEnabled()) {
    headers[AFE_SERVER_TIMING_HEADER] = 'true';
  }

  headers[CLOUD_RESOURCE_HEADER] = resourceName;

  return headers;
}

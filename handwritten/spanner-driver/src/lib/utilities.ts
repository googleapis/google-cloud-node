// Copyright 2026 Google LLC
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

import {Query, QueryCallback} from './query.js';
import {QueryConfig, QueryResult} from './types.js';

/**
 * Normalizes query arguments for `Client.query` and `Pool.query`, resolving
 * `Query` instance vs `QueryConfig` and extracting the actual callback function.
 *
 * @template R - Row result shape type (defaults to `Record<string, unknown>`).
 * @param queryText - SQL query string, `QueryConfig` object, or `Query` instance.
 * @param values - Positional query parameter array or callback function.
 * @param callback - Optional Node callback function.
 * @returns Object containing normalized `query` instance and `actualCallback`.
 */
export function normalizeQueryArgs<R = Record<string, unknown>>(
  queryText: string | QueryConfig | Query<QueryResult<R>>,
  values?: unknown[] | QueryCallback<QueryResult<R>>,
  callback?: QueryCallback<QueryResult<R>>,
): {
  query: Query<QueryResult<R>>;
  actualCallback: QueryCallback<QueryResult<R>> | undefined;
} {
  let query: Query<QueryResult<R>>;
  if (queryText instanceof Query) {
    query = queryText;
    if (Array.isArray(values)) {
      query.values = values;
    }
    if (typeof values === 'function') {
      query.callback = values;
    } else if (typeof callback === 'function') {
      query.callback = callback;
    }
  } else {
    query = new Query<QueryResult<R>>(queryText, values as unknown[], callback);
  }

  return {query, actualCallback: query.callback};
}

/**
 * Dispatches query errors to a callback function if provided, or emits an `'error'` event
 * on the `Query` instance if an error listener is attached (mutually exclusive).
 *
 * @template T - Query result return shape type.
 * @param err - Error instance to dispatch.
 * @param query - `Query` instance.
 * @param callback - Optional Node callback function.
 */
export function dispatchQueryError<T>(
  err: Error,
  query: Query<T>,
  callback?: QueryCallback<T>,
): void {
  if (callback) {
    process.nextTick(() => callback(err));
  } else if (query.listenerCount('error') > 0) {
    query.emit('error', err);
  }
}

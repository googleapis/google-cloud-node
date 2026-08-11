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
import {
  FieldDef,
  ITypeOverrides,
  QueryConfig,
  QueryResult,
  TypeParser,
} from './types.js';

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
  } else {
    process.nextTick(() => {
      if (query.listenerCount('error') > 0) {
        query.emit('error', err);
      }
    });
  }
}

/**
 * Decodes a raw database result row using the active type overrides registry or pre-resolved parsers.
 *
 * @template R - Result row type (object or array).
 * @param rawRow - Raw column values array from database driver.
 * @param fields - Column metadata descriptors (names and OIDs).
 * @param typeOverridesOrParsers - Active type overrides registry or pre-resolved parser functions array.
 * @param rowMode - Formatting mode ('object' or 'array').
 * @returns Formatted JavaScript row object or array.
 */
export function decodeRow<R = Record<string, unknown>>(
  rawRow: (string | null | undefined)[],
  fields: FieldDef[],
  typeOverridesOrParsers: ITypeOverrides | TypeParser[],
  rowMode?: 'array' | 'object',
): R {
  const parsers: TypeParser[] = Array.isArray(typeOverridesOrParsers)
    ? typeOverridesOrParsers
    : fields.map(f => typeOverridesOrParsers.getTypeParser(f.dataTypeID));

  if (rowMode === 'array') {
    return rawRow.map((val, idx) => {
      const parser = parsers[idx];
      return val === null || val === undefined
        ? null
        : parser
          ? parser(val)
          : val;
    }) as unknown as R;
  }

  const rowObj: Record<string, unknown> = {};
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const val = rawRow[i];
    const parser = parsers[i];
    rowObj[field.name] =
      val === null || val === undefined ? null : parser ? parser(val) : val;
  }
  return rowObj as unknown as R;
}

/**
 * Encodes query parameter values using the active type overrides registry.
 *
 * @param values - Positional parameter values passed to query.
 * @param typeOverrides - Active type overrides registry.
 * @returns Serialized parameter values array.
 */
export function encodeParameters(
  values: unknown[] | undefined,
  typeOverrides: ITypeOverrides,
): unknown[] | undefined {
  if (!values || !Array.isArray(values)) {
    return values;
  }
  return values.map(val => typeOverrides.encodeValue(val));
}

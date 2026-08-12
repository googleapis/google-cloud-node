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

/**
 * Field metadata descriptor for query result set columns.
 */
export interface FieldDef {
  /** Column name returned in query result set. */
  name: string;
  /** PostgreSQL Object Identifier (OID) data type code. */
  dataTypeID: number;
}

/**
 * Standard query result.
 *
 * @template R - Shape of returned result set row objects or tuples.
 */
export interface QueryResult<R = Record<string, unknown>> {
  /** Array of result set rows formatted as objects or arrays based on `rowMode`. */
  rows: R[];
  /** Column metadata descriptors matching fields returned by Spanner query. */
  fields: FieldDef[];
  /** Total number of rows affected by SQL statement or returned in result set. */
  rowCount: number;
  /** SQL statement command verb inferred from execution (e.g. 'SELECT', 'INSERT', 'UPDATE', 'DELETE'). */
  command: string;
}

/**
 * Configuration object passed when executing parameterized SQL queries.
 */
export interface QueryConfig {
  /** SQL statement query text. */
  text: string;
  /** Optional positional query parameters ($1, $2, etc.). */
  values?: unknown[];
  /**
   * Result row formatting mode:
   * - `'object'` (default): Returns rows as key-value objects (`{ id: 1 }`).
   * - `'array'`: Returns rows as positionally ordered arrays (`[1]`).
   */
  rowMode?: 'array' | 'object';
  /** Custom type parser registry hook for overriding OID data type decoding. */
  types?: unknown;
}

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
 * Escapes a PostgreSQL SQL identifier (such as a table name, column name, or schema name)
 * by enclosing it in double quotes and doubling internal double-quote characters.
 *
 * ⚠️ **PostgreSQL Identifier Case Sensitivity Warning**:
 * In PostgreSQL dialect, unquoted identifiers in SQL queries are automatically converted to
 * lowercase by the query parser (for example, `SELECT * FROM MyTable` queries table `mytable`).
 *
 * Calling `escapeIdentifier('MyTable')` produces `"MyTable"`, which forces PostgreSQL to
 * preserve exact uppercase/mixed-case character sensitivity.
 *
 * **Note**: If your Spanner PostgreSQL table or column was created without double quotes, Spanner
 * stores the identifier as lowercase (`mytable`). Double-quoting `"MyTable"` will cause PostgreSQL
 * to search for an uppercase table and throw a `relation "MyTable" does not exist` error.
 *
 * @param str - The identifier string to escape.
 * @returns Safely double-quoted identifier string matching PostgreSQL dialect rules.
 */
export const escapeIdentifier = (str: string): string =>
  `"${str.replace(/"/g, '""')}"`;

/**
 * Escapes a PostgreSQL string literal value by enclosing it in single quotes,
 * doubling internal single quotes, and adding PostgreSQL `E'...'` escape string syntax
 * when backslashes are present.
 *
 * ⚠️ **Note**: Instead of manually escaping SQL literals, it is recommended to use
 * parameterized queries. Refer to parameterized queries and the `client.query` API
 * for more information.
 *
 * @param str - The literal string value to escape.
 * @returns Safely quoted literal string matching PostgreSQL dialect rules.
 */
export const escapeLiteral = (str: string): string => {
  if (str.includes('\\')) {
    return "E'" + str.replace(/'/g, "''").replace(/\\/g, '\\\\') + "'";
  }
  return "'" + str.replace(/'/g, "''") + "'";
};

/**
 * Prepares a parameter value for PostgreSQL dialect queries by unwrapping
 * objects implementing custom `.toPostgres()` serialization hooks (e.g. Knex/ORMs).
 *
 * @param val - Parameter value to prepare.
 * @returns Serialized or unwrapped parameter value.
 */
export function preparePgValue(val: unknown): unknown {
  if (
    typeof val === 'object' &&
    val !== null &&
    typeof (val as {toPostgres?: unknown}).toPostgres === 'function'
  ) {
    return (val as {toPostgres: () => unknown}).toPostgres();
  }
  return val;
}

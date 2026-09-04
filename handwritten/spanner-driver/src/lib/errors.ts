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

import {DEFAULT_DIALECT, Dialect} from './constants.js';
import {enrichPgError, PgError} from './pg/errors.js';

export {enrichPgError, PgError};

/**
 * Standard DatabaseError class matching traditional database error structures.
 * Contains error codes (`code`), severity, detail, and hint fields.
 */
export class DatabaseError extends Error {
  /** Error severity level (e.g. 'ERROR', 'FATAL', 'PANIC'). */
  severity?: string;
  /** Error code (e.g. 5-character PostgreSQL SQLSTATE string like '42P01'). */
  code?: string;
  /** Detailed error message snippet if available. */
  detail?: string;
  /** Helpful hint or resolution suggestion for the query error. */
  hint?: string;
  /** Position index of the syntax error within the SQL query string. */
  position?: string | number;

  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

/**
 * Enriches a raw database error according to the specified SQL dialect rules.
 *
 * Defaults to 'pg' (PostgreSQL) dialect error enrichment.
 *
 * @param err - Thrown error object or message string.
 * @param dialect - SQL dialect ('pg' or 'googlesql'). Defaults to DEFAULT_DIALECT ('pg').
 * @returns DatabaseError instance enriched with dialect-specific error codes.
 */
export function enrichError(
  err: unknown,
  dialect: Dialect = DEFAULT_DIALECT,
): DatabaseError {
  if (dialect === 'pg') {
    return enrichPgError(err);
  }
  return err instanceof DatabaseError ? err : new DatabaseError(String(err));
}

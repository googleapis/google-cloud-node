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

import {DatabaseError} from '../errors.js';

/** Type alias for DatabaseError for pg compatibility. */
export type PgError = DatabaseError;

/** Regex matching valid PostgreSQL SQLSTATE codes (Classes 00-58, XX, HV, P0, F0). */
const PG_SQLSTATE_REGEX = /^(?:[0-9]{2}|XX|HV|P0|F0)[0-9A-Z]{3}$/i;

/**
 * Enriches a thrown Error from Spanner or SpannerLib with standard node-postgres (pg)
 * SQLSTATE codes (`err.code`) and severity fields so ORMs and applications matching
 * on PostgreSQL error codes function correctly.
 *
 * Explicitly extracts error properties, preserves stack traces, and validates PostgreSQL
 * SQLSTATE class prefixes (e.g. 00-58, XX, HV, P0, F0). If no valid PostgreSQL SQLSTATE
 * code is present or extracted from backend error messages (`[SQLSTATE xxxxx]`), non-SQLSTATE
 * codes are safely defaulted to standard PostgreSQL internal error code `'XX000'`.
 *
 * @param err - Thrown error object or message string to enrich.
 * @returns DatabaseError instance enriched with PostgreSQL SQLSTATE code and severity.
 */
export function enrichPgError(err: unknown): PgError {
  let pgErr: PgError;
  if (!err) {
    pgErr = new DatabaseError('Unknown error');
  } else if (err instanceof DatabaseError) {
    pgErr = err;
  } else if (typeof err === 'object' && err !== null && !Array.isArray(err)) {
    const errorObj = err as Record<string, unknown>;
    const message =
      typeof errorObj.message === 'string'
        ? errorObj.message
        : String(errorObj.message || 'Unknown error');
    pgErr = new DatabaseError(message);

    if (typeof errorObj.stack === 'string') {
      pgErr.stack = errorObj.stack;
    }
    if (errorObj.code !== undefined) {
      pgErr.code = String(errorObj.code);
    }
    if (typeof errorObj.severity === 'string') {
      pgErr.severity = errorObj.severity;
    }
    if (typeof errorObj.detail === 'string') {
      pgErr.detail = errorObj.detail;
    }
    if (typeof errorObj.hint === 'string') {
      pgErr.hint = errorObj.hint;
    }
    if (
      typeof errorObj.position === 'string' ||
      typeof errorObj.position === 'number'
    ) {
      pgErr.position = errorObj.position;
    }
  } else {
    pgErr = new DatabaseError(String(err));
  }

  // Set default severity
  if (!pgErr.severity) {
    pgErr.severity = 'ERROR';
  }

  // If code is already a valid 5-character PostgreSQL SQLSTATE string, preserve it
  if (typeof pgErr.code === 'string' && PG_SQLSTATE_REGEX.test(pgErr.code)) {
    pgErr.code = pgErr.code.toUpperCase();
    return pgErr;
  }

  const msg = (pgErr.message || '').toString();

  // Extract SQLSTATE code enriched by the underlying Go SQL driver (go-sql-spanner)
  const match = msg.match(/\[SQLSTATE\s+([0-9A-Z]{5})\]/i);
  if (match && PG_SQLSTATE_REGEX.test(match[1])) {
    pgErr.code = match[1].toUpperCase();
    return pgErr;
  }

  // Unconditionally overwrite non-SQLSTATE code with standard PostgreSQL internal error XX000
  pgErr.code = 'XX000';

  return pgErr;
}

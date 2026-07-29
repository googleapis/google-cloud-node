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
 * Standard PostgreSQL DatabaseError class matching `node-postgres` error structure.
 * Contains PostgreSQL SQLSTATE codes (`code`), severity, detail, and hint fields.
 */
export class DatabaseError extends Error {
  /** Error severity level (e.g. 'ERROR', 'FATAL', 'PANIC'). */
  severity?: string;
  /** 5-character string PostgreSQL SQLSTATE code (e.g. '42P01', '23505', '42601'). */
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

/** Type alias for DatabaseError for pg compatibility. */
export type PgError = DatabaseError;

/**
 * Enriches a thrown Error from Spanner or SpannerLib with standard node-postgres (pg)
 * SQLSTATE codes (`err.code`) and severity fields so ORMs and applications matching
 * on PostgreSQL error codes function correctly.
 *
 * Preserves the original error class name (`DatabaseError`), stack traces, and existing
 * 5-character SQLSTATE codes. If no 5-character SQLSTATE code is present or extracted
 * from backend error messages (`[SQLSTATE xxxxx]`), non-SQLSTATE codes are safely defaulted
 * to standard PostgreSQL internal error code `'XX000'`.
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
    pgErr = new DatabaseError(String(errorObj.message || 'Unknown error'));
    Object.assign(pgErr, errorObj);
    pgErr.name = 'DatabaseError';
    if (typeof errorObj.stack === 'string') {
      pgErr.stack = errorObj.stack;
    }
  } else {
    pgErr = new DatabaseError(String(err));
  }

  // Set default severity
  if (!pgErr.severity) {
    pgErr.severity = 'ERROR';
  }

  // If code is already a 5-char SQLSTATE string, preserve it
  if (typeof pgErr.code === 'string' && /^[0-9A-Z]{5}$/i.test(pgErr.code)) {
    return pgErr;
  }

  const msg = (pgErr.message || '').toString();

  // Extract SQLSTATE code enriched by the underlying Go SQL driver (go-sql-spanner)
  const match = msg.match(/\[SQLSTATE\s+([0-9A-Z]{5})\]/i);
  if (match) {
    pgErr.code = match[1].toUpperCase();
    return pgErr;
  }

  // Unconditionally overwrite non-SQLSTATE code with standard PostgreSQL internal error XX000
  pgErr.code = 'XX000';

  return pgErr;
}

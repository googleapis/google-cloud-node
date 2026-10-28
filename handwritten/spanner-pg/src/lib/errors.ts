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

export class DatabaseError extends Error {
  severity?: string;
  code?: string;
  detail?: string;
  hint?: string;
  position?: string | number;

  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

export type PgError = DatabaseError;

/**
 * Enriches a thrown Error from Spanner or SpannerLib with standard node-postgres (pg)
 * SQLSTATE codes (err.code) and severity fields so ORMs and applications matching
 * on PostgreSQL error codes function correctly.
 */
export function enrichPgError(err: any): PgError {
  if (!err) {
    err = new DatabaseError('Unknown error');
  } else if (!(err instanceof DatabaseError)) {
    Object.setPrototypeOf(err, DatabaseError.prototype);
  }

  const pgErr = err as PgError;

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

  // Default fallback SQLSTATE internal error
  if (!pgErr.code) {
    pgErr.code = 'XX000';
  }

  return pgErr;
}

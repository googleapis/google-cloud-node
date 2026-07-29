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

import {DatabaseError} from './lib/errors.js';
import {ClientConfig, resolveDsn} from './lib/config.js';

export {DatabaseError, ClientConfig, resolveDsn};

/**
 * Escapes a PostgreSQL SQL identifier (such as a table name or column name)
 * by enclosing it in double quotes and doubling internal double-quote characters.
 *
 * @param str - The identifier string to escape.
 * @returns Safely double-quoted identifier string.
 */
export const escapeIdentifier = (str: string) => `"${str.replace(/"/g, '""')}"`;

/**
 * Escapes a PostgreSQL string literal value by enclosing it in single quotes,
 * doubling internal single quotes, and adding PostgreSQL `E'...'` escape string
 * prefix if backslashes are present.
 *
 * @param str - The literal string value to escape.
 * @returns Safely quoted literal string.
 */
export const escapeLiteral = (str: string) => {
  if (str.includes('\\')) {
    return "E'" + str.replace(/'/g, "''").replace(/\\/g, '\\\\') + "'";
  }
  return "'" + str.replace(/'/g, "''") + "'";
};

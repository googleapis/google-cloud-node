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
 * @fileoverview Main entry point for the Node.js Spanner N-API Wrapper.
 *
 * This package provides a high-performance, crash-proof, and memory-stable
 * Node-API (N-API) bridge to the native Go-based Spanner SDK. It exposes an
 * object-oriented API for managing database connection pools, executing queries,
 * and iterating through raw result sets utilizing ES Modules (ESM) and CommonJS.
 */

import { Pool } from './lib/pool.js';
import { Connection } from './lib/connection.js';
import { Rows } from './lib/rows.js';
import { SpannerLibError } from './ffi/utils.js';

export { Pool, Connection, Rows, SpannerLibError };

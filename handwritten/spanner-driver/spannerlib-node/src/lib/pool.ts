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

import { ffi } from '../ffi/utils.js';
import { spannerLib } from './spannerlib.js';
import { Connection } from './connection.js';

/**
 * Manages a pool of database connections to Spanner.
 *
 * This class wraps the connection pool handle from the underlying Go library,
 * providing methods to create connections and manage the pool lifecycle.
 */
export class Pool {
  public oid: number | null;
  public closed: boolean;
  public userAgent: string;
  public connStr: string;

  /**
   * Creates a new connection pool.
   *
   * @param connectionString The connection string for the database.
   * @returns A Promise that resolves to a new Pool instance.
   * @throws {SpannerLibError} If creation fails in the Go library.
   */
  static async create(connectionString: string): Promise<Pool> {
    // Detect if running in ESM context
    const isESM = typeof require === 'undefined';
    const userAgentSuffix = isESM ? 'node-esm' : 'node-cjs';

    const p = new Pool(userAgentSuffix, connectionString);
    const handled = await ffi.invokeAsync(
      'CreatePool',
      userAgentSuffix,
      connectionString
    );

    p.oid = handled.objectId;
    spannerLib.register(p, { type: 'pool', poolId: p.oid! });
    return p;
  }

  constructor(userAgent: string, connectionString: string) {
    this.oid = null;
    this.closed = false;
    this.userAgent = userAgent;
    this.connStr = connectionString;
  }

  /**
   * Creates a new connection from the pool.
   *
   * @returns A Promise that resolves to a new Connection instance.
   * @throws {Error} If the pool is closed.
   */
  async createConnection(): Promise<Connection> {
    if (this.closed) throw new Error('Pool is already closed');
    return await Connection.create(this);
  }

  /**
   * Closes the pool and releases associated resources.
   *
   * @returns A Promise that resolves when the pool is closed.
   */
  async close(): Promise<void> {
    if (!this.closed) {
      this.closed = true;
      try {
        if (this.oid !== null) {
          await ffi.invokeAsync('ClosePool', this.oid);
        }
      } finally {
        spannerLib.unregister(this);
      }
    }
  }
}

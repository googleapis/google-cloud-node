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

import {EventEmitter} from 'events';
import {Client} from './client.js';
import {ClientConfig} from './config.js';
import {Query, QueryCallback} from './query.js';
import {QueryConfig, QueryResult} from './types.js';

/**
 * Basic Pool class managing database connection instances.
 * Compatible with node-postgres (`pg.Pool`) interface.
 *
 * Facilitates client acquisition (`connect`), automatic query execution with connection
 * auto-release (`query`), and graceful pool shutdown (`end`).
 */
export class Pool extends EventEmitter {
  /** Resolved ClientConfig object used when instantiating connections. */
  readonly config: ClientConfig;

  /** Boolean flag tracking whether pool shutdown has been initiated. */
  private isEnding = false;

  /**
   * Instantiates a new Spanner Pool.
   *
   * @param config - Connection string (e.g. `projects/p/instances/i/databases/d`) or `ClientConfig` object.
   */
  constructor(config?: string | ClientConfig) {
    super();
    this.config =
      typeof config === 'string' ? {connectionString: config} : config || {};
  }

  /**
   * Acquires a connected `Client` instance from the pool.
   * Supports both Promise (`const client = await pool.connect()`) and Node callback (`pool.connect(cb)`).
   *
   * @returns Promise resolving to connected `Client` instance, or void if callback is provided.
   */
  async connect(): Promise<Client>;
  connect(
    callback: (err: Error | null, client?: Client, done?: () => void) => void,
  ): void;
  connect(
    callback?: (err: Error | null, client?: Client, done?: () => void) => void,
  ): Promise<Client> | void {
    if (callback) {
      this._doConnect()
        .then(client => callback(null, client, () => void client.end()))
        .catch(err => callback(err));
      return;
    }
    return this._doConnect();
  }

  private async _doConnect(): Promise<Client> {
    if (this.isEnding) {
      throw new Error('Cannot acquire client from ending pool');
    }
    const client = new Client(this.config);
    await client.connect();
    return client;
  }

  /**
   * Executes a query by acquiring a client, executing the statement, and automatically releasing the client.
   * Supports Promises, callbacks, and streaming row events.
   *
   * @template R - Row result shape type (defaults to `Record<string, unknown>`).
   * @param queryText - SQL query string, `QueryConfig` object, or `Query` instance.
   * @param values - Positional query parameter array or callback function.
   * @param callback - Optional Node callback function.
   * @returns Executable `Query` instance implementing Thenable interface.
   */
  public query<R = Record<string, unknown>>(
    queryText: string | QueryConfig | Query<QueryResult<R>>,
    values?: unknown[] | QueryCallback<QueryResult<R>>,
    callback?: QueryCallback<QueryResult<R>>,
  ): Query<QueryResult<R>> {
    const query =
      queryText instanceof Query
        ? queryText
        : new Query<QueryResult<R>>(queryText, values as unknown[], callback);

    const executionPromise = (async () => {
      const client = await this._doConnect();
      try {
        return await client.query(query);
      } finally {
        await client.end();
      }
    })();

    query.setPromise(executionPromise);
    executionPromise.catch(() => {});
    return query;
  }

  /**
   * Drains and shuts down the connection pool.
   * Supports both Promise (`await pool.end()`) and Node callback (`pool.end(cb)`) forms.
   *
   * @returns Promise resolving when pool is closed, or void if callback is passed.
   */
  async end(): Promise<void>;
  end(callback: () => void): void;
  end(callback?: () => void): Promise<void> | void {
    this.isEnding = true;
    if (callback) {
      process.nextTick(callback);
      return;
    }
    return Promise.resolve();
  }
}

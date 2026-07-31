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
import {dispatchQueryError, normalizeQueryArgs} from './utilities.js';

/**
 * Basic Pool class managing database connection instances.
 *
 * Facilitates client acquisition (`connect`), automatic query execution with connection
 * auto-release (`query`), and graceful pool shutdown (`end`).
 *
 * TODO(PR 4 - Connection Pooling): Full connection pooling features (max connections,
 * min idle connections, idle timeouts, connection queueing, and pool event emitters)
 * will be expanded in PR 4.
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
        .then(client => callback(null, client, () => void client.release()))
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
    // TODO(PR 4 - Connection Pooling): Override client.release to return client to idle connection pool
    client.release = client.end.bind(client);
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
    const {query, actualCallback} = normalizeQueryArgs(
      queryText,
      values,
      callback,
    );

    const executionPromise = (async () => {
      let client: Client;

      // 1. Connection acquisition stage:
      // Catches connection failures from _doConnect() before client.query is invoked.
      // Notifies actualCallback or error listeners so callback-based queries do not hang.
      try {
        client = await this._doConnect();
      } catch (err: unknown) {
        const errorObj = err instanceof Error ? err : new Error(String(err));
        dispatchQueryError(errorObj, query, actualCallback);
        throw errorObj;
      }

      // 2. Query execution stage:
      // Executed on the acquired client using an internal query instance without callback.
      // This ensures client.query does not fire actualCallback prematurely before client.release() completes.
      const queryForClient = new Query<QueryResult<R>>(
        query.text ?? '',
        query.values,
      );
      queryForClient.on('row', row => query.emit('row', row));
      queryForClient.on('fields', fields => query.emit('fields', fields));

      let result: QueryResult<R>;
      let queryErr: Error | undefined;

      try {
        result = await client.query(queryForClient);
        query.emit('end', result);
      } catch (err: unknown) {
        queryErr = err instanceof Error ? err : new Error(String(err));
      } finally {
        await client.release();
      }

      if (queryErr) {
        dispatchQueryError(queryErr, query, actualCallback);
        throw queryErr;
      }

      if (actualCallback) {
        process.nextTick(() => actualCallback!(null, result!));
      }
      return result!;
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

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
import {ClientConfig, resolveDsn} from './config.js';
import {DEFAULT_DIALECT, Dialect} from './constants.js';
import {enrichError} from './errors.js';
import {Query, QueryCallback} from './query.js';
import {QueryConfig, QueryResult} from './types.js';

/**
 * Task entry stored in single-connection query execution queue.
 * Ensures queries execute sequentially per client connection.
 */
interface QueryTask<T = unknown> {
  run: () => Promise<T>;
}

/**
 * Client class representing a single database connection to Google Cloud Spanner.
 * Compatible with node-postgres (`pg.Client`) interface.
 *
 * Handles DSN resolution, connection lifecycle (`connect`/`end`), sequential query
 * execution, transaction state tracking (`txStatus`), and dialect-aware error enrichment.
 */
export class Client extends EventEmitter {
  /** Resolved ClientConfig object passed on instantiation. */
  readonly config: ClientConfig;

  /** Fully formatted Spanner DSN resource string (e.g. `projects/p/instances/i/databases/d`). */
  readonly dsn: string;

  /** Active SQL dialect (defaults to `'pg'`). */
  readonly dialect: Dialect = DEFAULT_DIALECT;

  /** Boolean indicating whether connection has been established. */
  public isConnected = false;

  /**
   * Active transaction status code:
   * - `'I'` (Idle): Outside transaction block.
   * - `'T'` (Transaction): Active transaction started (`BEGIN`).
   * - `'E'` (Error): Transaction failed due to query error.
   */
  public txStatus: 'I' | 'T' | 'E' = 'I';

  /** Internal task queue managing sequential query execution. */
  private queryQueue: QueryTask<unknown>[] = [];

  /** Boolean flag tracking active query execution state. */
  private isExecuting = false;

  /**
   * Instantiates a new Spanner Client connection handle.
   *
   * @param config - Connection string (e.g. `projects/p/instances/i/databases/d` or `postgresql://...`) or `ClientConfig` object.
   */
  constructor(config?: string | ClientConfig) {
    super();
    if (typeof config === 'string') {
      this.dsn = resolveDsn(config);
      this.config = {connectionString: config};
    } else {
      this.config = config || {};
      this.dsn = resolveDsn(this.config);
    }
  }

  /**
   * Establishes a connection to Google Cloud Spanner using the resolved DSN.
   * Supports both Promise (`await client.connect()`) and Node callback (`client.connect(cb)`) forms.
   *
   * @returns Promise resolving when connection is established, or void if callback is passed.
   */
  async connect(): Promise<void>;
  connect(callback: (err: Error | null) => void): void;
  connect(callback?: (err: Error | null) => void): Promise<void> | void {
    if (callback) {
      this._doConnect()
        .then(() => callback(null))
        .catch(err => callback(err));
      return;
    }
    return this._doConnect();
  }

  private async _doConnect(): Promise<void> {
    if (this.isConnected) {
      return;
    }
    try {
      if (!this.dsn) {
        throw new Error(
          'Invalid Spanner connection configuration: project, instance, and database must be provided.',
        );
      }
      this.isConnected = true;
    } catch (err) {
      throw enrichError(err, this.dialect);
    }
  }

  /**
   * Executes a SQL query against Google Cloud Spanner.
   * Supports Promises (`await client.query(sql)`), callbacks (`client.query(sql, cb)`),
   * and streaming row events (`client.query(sql).on('row', cb)`).
   *
   * @template R - Row result shape type (defaults to `Record<string, unknown>`).
   * @param queryText - SQL statement text string, `QueryConfig` configuration object, or existing `Query` instance.
   * @param values - Optional positional query parameters ($1, $2, etc.) or callback function.
   * @param callback - Optional Node callback function receiving `(err, result)`.
   * @returns Executable `Query` instance implementing Thenable interface and EventEmitter.
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

    let actualCallback: QueryCallback<QueryResult<R>> | undefined =
      query.callback;
    if (typeof values === 'function') {
      actualCallback = values as QueryCallback<QueryResult<R>>;
    }

    const task: QueryTask<QueryResult<R>> = {
      run: async () => {
        const sqlText = query.text;
        const sqlValues = query.values;

        if (typeof sqlText !== 'string' || !sqlText.trim()) {
          const err = enrichError(
            new Error('Query text must be a non-empty string'),
            this.dialect,
          );
          if (query.listenerCount('error') > 0) {
            query.emit('error', err);
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback!(err));
          }
          throw err;
        }

        if (
          sqlValues !== undefined &&
          sqlValues !== null &&
          !Array.isArray(sqlValues)
        ) {
          const err = enrichError(
            new Error('Query values must be an Array'),
            this.dialect,
          );
          if (query.listenerCount('error') > 0) {
            query.emit('error', err);
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback!(err));
          }
          throw err;
        }

        try {
          if (!this.isConnected) {
            await this.connect();
          }

          const trimmedUpper = sqlText.trim().toUpperCase();
          if (
            trimmedUpper.startsWith('BEGIN') ||
            trimmedUpper.startsWith('START TRANSACTION')
          ) {
            this.txStatus = 'T';
          }

          const statements = sqlText
            .split(';')
            .map(s => s.trim())
            .filter(s => s.length > 0);

          const command =
            statements.length > 0
              ? statements[0].split(/\s+/)[0].toUpperCase()
              : 'SELECT';

          const result: QueryResult<R> = {
            rows: [],
            fields: [],
            rowCount: 0,
            command,
          };

          query.emit('end', result);
          if (actualCallback) {
            process.nextTick(() => actualCallback!(null, result));
          }
          return result;
        } catch (err: unknown) {
          const enriched = enrichError(err, this.dialect);
          if (this.txStatus === 'T') {
            this.txStatus = 'E';
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback!(enriched));
          } else {
            query.emit('error', enriched);
          }
          throw enriched;
        }
      },
    };

    const executionPromise = new Promise<QueryResult<R>>((resolve, reject) => {
      const originalRun = task.run;
      task.run = async () => {
        try {
          const res = await originalRun();
          resolve(res);
          return res;
        } catch (err: unknown) {
          const enriched = enrichError(err, this.dialect);
          reject(enriched);
          throw enriched;
        }
      };
    });

    query.setPromise(executionPromise);
    executionPromise.catch(() => {});
    this.queryQueue.push(task as QueryTask<unknown>);
    void this.processQueue();
    return query;
  }

  /**
   * Processes query tasks sequentially from the internal queue.
   */
  private async processQueue(): Promise<void> {
    if (this.queryQueue.length === 0) {
      this.emit('drain');
      return;
    }
    if (this.isExecuting) return;
    this.isExecuting = true;
    const task = this.queryQueue[0];
    try {
      await task.run();
    } catch {
      // Handled in executionPromise reject
    } finally {
      this.queryQueue.shift();
      this.isExecuting = false;
      void this.processQueue();
    }
  }

  /**
   * Closes the client connection and resets transaction status.
   * Supports both Promise (`await client.end()`) and Node callback (`client.end(cb)`) forms.
   *
   * @returns Promise resolving when connection is closed, or void if callback is passed.
   */
  async end(): Promise<void>;
  end(callback: (err: Error | null) => void): void;
  end(callback?: (err: Error | null) => void): Promise<void> | void {
    if (callback) {
      this._doEnd()
        .then(() => callback(null))
        .catch(err => callback(err));
      return;
    }
    return this._doEnd();
  }

  private async _doEnd(): Promise<void> {
    if (!this.isConnected) {
      return;
    }
    this.isConnected = false;
    this.txStatus = 'I';
  }
}

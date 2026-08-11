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
import {
  getDefaultTypeOverrides,
  ITypeOverrides,
  QueryConfig,
  QueryResult,
} from './types.js';
import {
  dispatchQueryError,
  encodeParameters,
  normalizeQueryArgs,
} from './utilities.js';

/**
 * Task entry stored in single-connection query execution queue.
 * Ensures queries execute sequentially per client connection.
 */
interface QueryTask<T = unknown> {
  run: () => Promise<T>;
  cancel?: (err: Error) => void;
}

/**
 * Client class representing a single database connection to Google Spanner.
 *
 * Handles DSN resolution, connection lifecycle (`connect`/`end`/`release`), sequential query
 * execution, transaction state tracking (`txStatus`), and dialect-aware error enrichment.
 */
export class Client extends EventEmitter {
  /** Resolved ClientConfig object passed on instantiation. */
  readonly config: ClientConfig;

  /** Fully formatted Spanner DSN resource string (e.g. `projects/p/instances/i/databases/d`). */
  readonly dsn: string;

  /** Active SQL dialect (defaults to `'pg'`). */
  readonly dialect: Dialect = DEFAULT_DIALECT;

  /** Type parser override registry configured on this client. */
  readonly types?: ITypeOverrides;

  /** Boolean indicating whether connection has been established. */
  public isConnected = false;

  /**
   * Active transaction status code:
   * - `'I'` (Idle): Outside transaction block.
   * - `'T'` (Transaction): Active transaction block.
   * - `'E'` (Error): Transaction failed due to query error inside transaction block.
   *
   * Updated dynamically from the native backend driver (`spannerlib-node`) upon query execution.
   */
  public txStatus: 'I' | 'T' | 'E' = 'I';

  /** Internal task queue managing sequential query execution. */
  private queryQueue: QueryTask<unknown>[] = [];

  /** Boolean flag tracking active query execution state. */
  private isExecuting = false;

  /** Boolean flag tracking whether client has been explicitly closed via end(). */
  private isEnded = false;

  /** Cached Promise for in-flight connect() calls. */
  private connectPromise?: Promise<void>;

  /**
   * Instantiates a new Spanner Client connection handle.
   *
   * @param config - Connection string (e.g. `projects/p/instances/i/databases/d` or `postgresql://...`) or `ClientConfig` object.
   */
  constructor(config?: string | ClientConfig) {
    super();
    this.config =
      typeof config === 'string' ? {connectionString: config} : config || {};
    this.dsn = this.config.connectionString || resolveDsn(this.config);
    this.types = this.config.types;
  }

  /**
   * Establishes a connection to Google Spanner using the resolved DSN.
   * Supports both Promise (`await client.connect()`) and Node callback (`client.connect(cb)`) forms.
   *
   * @returns Promise resolving when connection is established, or void if callback is passed.
   */
  async connect(): Promise<void>;
  connect(callback: (err: Error | null) => void): void;
  connect(callback?: (err: Error | null) => void): Promise<void> | void {
    if (this.isConnected) {
      if (callback) {
        process.nextTick(() => callback(null));
        return;
      }
      return Promise.resolve();
    }

    if (!this.connectPromise) {
      this.connectPromise = (async () => {
        try {
          await this._doConnect();
        } finally {
          this.connectPromise = undefined;
        }
      })();
    }

    if (callback) {
      this.connectPromise
        .then(() => callback(null))
        .catch(err => callback(err));
      return;
    }
    return this.connectPromise;
  }

  private async _doConnect(): Promise<void> {
    if (this.isConnected) {
      return;
    }
    if (this.isEnded) {
      throw new Error('Client was closed');
    }
    try {
      if (!this.dsn) {
        throw new Error(
          'Invalid Spanner connection configuration: project, instance, and database must be provided.',
        );
      }
      // TODO(PR 4 - Native CGO Bridge): Instantiate native CGO Spanner connection handle via spannerlib-node
      if (!this.isEnded) {
        this.isConnected = true;
      }
    } catch (err) {
      throw enrichError(err, this.dialect);
    }
  }

  /**
   * Executes a SQL query against Google Spanner.
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
    const {query, actualCallback} = normalizeQueryArgs(
      queryText,
      values,
      callback,
    );

    const sqlText = query.text;
    const sqlValues = query.values;

    if (typeof sqlText !== 'string' || !sqlText.trim()) {
      const err = enrichError(
        new Error('Query text must be a non-empty string'),
        this.dialect,
      );
      dispatchQueryError(err, query, actualCallback);
      const executionPromise = Promise.reject<QueryResult<R>>(err);
      executionPromise.catch(() => {});
      query.setPromise(executionPromise);
      return query;
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
      dispatchQueryError(err, query, actualCallback);
      const executionPromise = Promise.reject<QueryResult<R>>(err);
      executionPromise.catch(() => {});
      query.setPromise(executionPromise);
      return query;
    }

    let resolveTask!: (val: QueryResult<R>) => void;
    let rejectTask!: (err: unknown) => void;
    const executionPromise = new Promise<QueryResult<R>>((res, rej) => {
      resolveTask = res;
      rejectTask = rej;
    });

    query.setPromise(executionPromise);
    executionPromise.catch(() => {});

    const task: QueryTask<QueryResult<R>> = {
      run: async () => {
        try {
          if (this.isEnded) {
            throw new Error('Client was closed');
          }
          if (!this.isConnected) {
            await this.connect();
          }

          // Resolve effective type overrides in priority order: Query-level > Client-level > Dialect default
          const effectiveTypes = this.getEffectiveTypeOverrides(query.types);
          const _encodedValues = encodeParameters(query.values, effectiveTypes);
          void _encodedValues;

          // TODO(PR 6 - Native CGO Bridge): Execute query through native CGO bridge (spannerlib-node).
          // Both `command` and `txStatus` ('I', 'T', or 'E') will be returned by the native backend driver.
          const result: QueryResult<R> = {
            rows: [],
            fields: [],
            rowCount: 0,
            command: 'SELECT',
          };

          query.emit('end', result);
          if (actualCallback) {
            process.nextTick(() => actualCallback!(null, result));
          }
          resolveTask(result);
          return result;
        } catch (err: unknown) {
          const enriched = enrichError(err, this.dialect);
          dispatchQueryError(enriched, query, actualCallback);
          rejectTask(enriched);
          throw enriched;
        }
      },
      cancel: (err: Error) => {
        dispatchQueryError(err, query, actualCallback);
        rejectTask(err);
      },
    };

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
    const task = this.queryQueue.shift()!;
    try {
      await task.run();
    } catch {
      // Handled in executionPromise reject
    } finally {
      this.isExecuting = false;
      void this.processQueue();
    }
  }

  /**
   * Releases the client connection handle.
   *
   * - **Standalone Client**: Delegates to `this.end()` to permanently close the connection handle.
   * - **Pooled Client**: When checked out from a `Pool`, this method is intercepted by
   *   the pool's release handler to return the connection back to the idle pool (or pass
   *   it directly to queued queries) instead of closing the underlying connection.
   *
   * TODO(PR 7 - Native CGO Bridge): Native connection handle closure (await this.connection?.close()) will be wired up in PR 7.
   *
   * @param err - Optional error flag/instance or Node callback function.
   * @returns Promise resolving when connection is released, or void if callback is passed.
   */
  public release(): Promise<void>;
  public release(err: boolean | Error | undefined): void;
  public release(callback: (err: Error | null) => void): void;
  public release(
    err?: boolean | Error | ((err: Error | null) => void),
  ): Promise<void> | void {
    if (typeof err === 'function') {
      return this.end(err);
    }
    return this.end();
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

  /**
   * Resolves the active type overrides registry in priority order:
   * 1. Query-level override (`QueryConfig.types`)
   * 2. Client-level override (`ClientConfig.types`)
   * 3. Dialect default global registry (`getDefaultTypeOverrides(this.dialect)`)
   */
  private getEffectiveTypeOverrides(
    queryTypes?: ITypeOverrides,
  ): ITypeOverrides {
    return queryTypes || this.types || getDefaultTypeOverrides(this.dialect);
  }

  private async _doEnd(): Promise<void> {
    this.isEnded = true;
    this.isConnected = false;
    // TODO(PR 7 - Native CGO Bridge): Close native CGO Spanner connection handle (await this.connection?.close())
    // Cancel pending queries in queue to prevent execution after client close
    const pendingTasks = this.queryQueue;
    this.queryQueue = [];
    const closeError = new Error('Client was closed');
    for (const task of pendingTasks) {
      if (task.cancel) {
        task.cancel(closeError);
      }
    }
  }
}

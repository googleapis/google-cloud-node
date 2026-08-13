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
import {Codec} from './codec.js';
import {ITypeOverrides, QueryConfig, QueryResult} from './types.js';
import {dispatchQueryError, normalizeQueryArgs} from './utilities.js';
import {Connection, Pool} from './native.js';

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
  /** Native Spanner connection pool handle from spannerlib-node. */
  private nativePool?: Pool;

  /** Native Spanner connection handle from spannerlib-node. */
  private nativeConnection?: Connection;

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
  connect(): Promise<this>;
  connect(callback: (err: Error | null, client?: this) => void): void;
  connect(
    callback?: (err: Error | null, client?: this) => void,
  ): Promise<this> | void {
    if (this.isConnected) {
      if (callback) {
        process.nextTick(() => callback(null, this));
        return;
      }
      return Promise.resolve(this);
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
        .then(() => callback(null, this))
        .catch(err => callback(err));
      return;
    }
    return this.connectPromise.then(() => this);
  }

  private async _doConnect(): Promise<void> {
    if (this.isEnded) {
      throw enrichError(
        new Error('Cannot connect: Client was already closed'),
        this.dialect,
      );
    }
    if (this.isConnected) {
      return;
    }
    try {
      if (!this.dsn) {
        throw new Error(
          'Invalid Spanner connection configuration: project, instance, and database must be provided.',
        );
      }
      const pool = await Pool.create(this.dsn);
      this.nativePool = pool;
      try {
        this.nativeConnection = await pool.createConnection();
        this.txStatus = this.nativeConnection.transactionState || 'I';
      } catch (err) {
        await pool.close().catch(() => {});
        this.nativePool = undefined;
        throw err;
      }

      if (this.isEnded) {
        if (this.nativeConnection) {
          await this.nativeConnection.close().catch(() => {});
          this.nativeConnection = undefined;
        }
        if (this.nativePool) {
          await this.nativePool.close().catch(() => {});
          this.nativePool = undefined;
        }
      } else {
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

    if (this.isEnded) {
      const err = enrichError(
        new Error('Client was closed and is not queryable'),
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
            throw new Error('Client was closed and is not queryable');
          }
          if (!this.isConnected) {
            await this.connect();
          }

          const resultSets: QueryResult<R>[] = [];

          if (this.nativeConnection) {
            // Encode params
            let executeRequest: Parameters<Connection['execute']>[0] = sqlText;
            if (query.values && query.values.length > 0) {
              const {fields} = Codec.encodeParams(query.values, this.dialect);
              executeRequest = {
                sql: sqlText,
                params: {fields},
              };
            }
            const nativeRows =
              await this.nativeConnection.execute(executeRequest);
            try {
              this.txStatus = this.nativeConnection.transactionState || 'I';

              let hasMoreResultSets = true;
              while (hasMoreResultSets) {
                const metadata = await nativeRows.metadata();
                const fields = Codec.mapMetadataToFieldDefs(
                  metadata,
                  this.dialect,
                );
                if (fields.length > 0) {
                  query.emit('fields', fields);
                }

                const parsers = Codec.getTypeParsers(
                  fields,
                  query.types || this.types,
                  this.dialect,
                );

                const currentRows: R[] = [];
                const currentResult: QueryResult<R> = {
                  rows: currentRows,
                  fields,
                  rowCount: 0,
                  // TODO(PR - Command Resolution): Parse or receive SQL command tag from backend
                  command: 'SELECT',
                };

                let listValue;
                while ((listValue = await nativeRows.next()) !== null) {
                  const rawRow = Codec.extractRawRow(listValue);
                  const decoded = Codec.decodeRow<R>(
                    rawRow,
                    fields,
                    parsers,
                    query.rowMode,
                  );
                  currentRows.push(decoded);
                  currentResult.rowCount = currentRows.length;
                  query.emit('row', decoded, currentResult);
                }

                const stats = await nativeRows.resultSetStats();
                if (
                  stats &&
                  stats.rowCountExact !== undefined &&
                  stats.rowCountExact !== null
                ) {
                  currentResult.rowCount =
                    typeof stats.rowCountExact === 'number'
                      ? stats.rowCountExact
                      : parseInt(String(stats.rowCountExact), 10);
                } else {
                  const updateCount = await nativeRows.updateCount();
                  currentResult.rowCount =
                    updateCount >= 0 ? updateCount : currentRows.length;
                }

                // TODO(PR - Command Resolution): Parse or receive SQL command tag from backend
                currentResult.command = 'SELECT';
                resultSets.push(currentResult);

                if (typeof nativeRows.nextResultSet === 'function') {
                  hasMoreResultSets = Boolean(await nativeRows.nextResultSet());
                } else {
                  hasMoreResultSets = false;
                }
              }
            } finally {
              await nativeRows.close();
            }
          }

          const finalResult: QueryResult<R> | QueryResult<R>[] =
            resultSets.length > 1
              ? resultSets
              : resultSets[0] || {
                  rows: [],
                  fields: [],
                  rowCount: 0,
                  command: 'SELECT',
                };

          query.emit('end', finalResult);
          if (actualCallback) {
            process.nextTick(() =>
              actualCallback!(null, finalResult as QueryResult<R>),
            );
          }
          resolveTask(finalResult as QueryResult<R>);
          return finalResult as QueryResult<R>;
        } catch (err: unknown) {
          if (this.nativeConnection) {
            this.txStatus = this.nativeConnection.transactionState || 'I';
          }
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

  private async _doEnd(): Promise<void> {
    if (
      !this.connectPromise &&
      !this.isConnected &&
      !this.nativeConnection &&
      !this.nativePool &&
      this.queryQueue.length === 0
    ) {
      return;
    }
    this.isEnded = true;
    this.isConnected = false;
    this.txStatus = 'I';

    try {
      if (this.nativeConnection && !this.nativeConnection.closed) {
        await this.nativeConnection.close();
      }
    } catch {
      // Ignore native closure errors during teardown
    } finally {
      this.nativeConnection = undefined;
    }

    try {
      if (this.nativePool && !this.nativePool.closed) {
        await this.nativePool.close();
      }
    } catch {
      // Ignore native closure errors during teardown
    } finally {
      this.nativePool = undefined;
    }

    // Cancel pending queries in queue to prevent execution after client close
    const pendingTasks = this.queryQueue;
    this.queryQueue = [];
    const closeError = new Error('Client was closed and is not queryable');
    for (const task of pendingTasks) {
      if (task.cancel) {
        task.cancel(closeError);
      }
    }
  }
}

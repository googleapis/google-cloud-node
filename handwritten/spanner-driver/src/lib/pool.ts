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
import {PoolConfig, resolveDsn} from './config.js';
import {Query, QueryCallback} from './query.js';
import {QueryConfig, QueryResult} from './types.js';
import {dispatchQueryError, normalizeQueryArgs} from './utilities.js';

/**
 * Connection Pool class managing reusable database connection instances.
 *
 * Supports configurable pool limits (`max`, `min`), idle connection timeouts (`idleTimeoutMillis`),
 * acquisition queueing and timeouts (`connectionTimeoutMillis`), client recycling (`release`),
 * connection reuse limits (`maxUses`), connection lifespan limits (`maxLifetimeSeconds`),
 * initialization hooks (`onConnect`), and lifecycle events (`connect`, `acquire`, `release`, `remove`, `error`).
 */
export class Pool extends EventEmitter {
  /** Resolved PoolConfig object used when instantiating connections. */
  readonly config: PoolConfig;

  /** Fully formatted Spanner DSN resource string (e.g. `projects/p/instances/i/databases/d`). */
  readonly dsn: string;

  /** Calculated pool bounds and timeout settings. */
  readonly options: {
    max: number;
    min: number;
    idleTimeoutMillis: number;
    connectionTimeoutMillis: number;
    allowExitOnIdle: boolean;
    maxUses: number;
    maxLifetimeSeconds: number;
    onConnect?: (client: Client) => void | Promise<void>;
  };

  /** Boolean flag tracking whether pool shutdown has been initiated. */
  private isEnding = false;

  /** Boolean flag tracking whether pool shutdown has completed. */
  private isEnded = false;

  /** Set of all active and idle Client instances managed by this pool. */
  private allClients = new Set<Client>();

  /** Queue of idle Client instances available for immediate checkout. */
  private idleClients: Array<{client: Client; timer?: NodeJS.Timeout}> = [];

  /** Internal metadata tracking client creation time and checkout count. */
  private clientMeta = new WeakMap<
    Client,
    {checkoutCount: number; createdAt: number}
  >();

  /** Pending acquirers waiting for a client when totalCount >= max. */
  private waitQueue: Array<{
    resolve: (client: Client) => void;
    reject: (err: Error) => void;
    timer?: NodeJS.Timeout;
  }> = [];

  /**
   * Resolvers array supporting graceful shutdown (`pool.end()`).
   * When `pool.end()` is invoked while active queries are still running on checked-out clients,
   * shutdown pauses by registering a Promise resolver here. Once the last in-flight query finishes
   * and its client is released (reaching `allClients.size === 0`), `finishEnd()` iterates through
   * `endResolvers` to notify all waiting `pool.end()` callers simultaneously.
   */
  private endResolvers: Array<() => void> = [];

  /**
   * Instantiates a new Spanner Pool.
   *
   * @param config - Connection string (e.g. `projects/p/instances/i/databases/d`) or `PoolConfig` object.
   */
  constructor(config?: string | PoolConfig) {
    super();
    this.config =
      typeof config === 'string' ? {connectionString: config} : config || {};
    this.dsn = resolveDsn(config);

    this.options = {
      max: this.config.max ?? 10,
      min: this.config.min ?? 0,
      idleTimeoutMillis: this.config.idleTimeoutMillis ?? 10000,
      connectionTimeoutMillis: this.config.connectionTimeoutMillis ?? 0,
      allowExitOnIdle: this.config.allowExitOnIdle ?? false,
      maxUses: this.config.maxUses ?? Infinity,
      maxLifetimeSeconds: this.config.maxLifetimeSeconds ?? 0,
      onConnect: this.config.onConnect,
    };
  }

  /** Total number of clients currently managed by the pool (active + idle). */
  get totalCount(): number {
    return this.allClients.size;
  }

  /** Total number of idle clients currently available in the pool. */
  get idleCount(): number {
    return this.idleClients.length;
  }

  /** Total number of pending requests waiting for a client connection. */
  get waitingCount(): number {
    return this.waitQueue.length;
  }

  /**
   * Acquires a connected `Client` instance from the pool.
   * Supports both Promise (`const client = await pool.connect()`) and Node callback (`pool.connect(cb)`).
   *
   * @returns Promise resolving to connected `Client` instance, or void if callback is provided.
   */
  async connect(): Promise<Client>;
  connect(
    callback: (
      err: Error | null,
      client?: Client,
      done?: (err?: boolean | Error) => void,
    ) => void,
  ): void;
  connect(
    callback?: (
      err: Error | null,
      client?: Client,
      done?: (err?: boolean | Error) => void,
    ) => void,
  ): Promise<Client> | void {
    if (callback) {
      this._doConnect()
        .then(client =>
          callback(null, client, (releaseErr?: boolean | Error) => {
            void client.release(releaseErr);
          }),
        )
        .catch(err => callback(err));
      return;
    }
    return this._doConnect();
  }

  private async _doConnect(): Promise<Client> {
    if (this.isEnding || this.isEnded) {
      throw new Error('Cannot acquire client from ending pool');
    }

    // 1. Check if an idle client is already available
    while (this.idleClients.length > 0) {
      const item = this.idleClients.pop()!;
      if (item.timer) {
        clearTimeout(item.timer);
      }

      const meta = this.clientMeta.get(item.client);
      const isExpiredByLifetime =
        this.options.maxLifetimeSeconds > 0 &&
        meta !== undefined &&
        (Date.now() - meta.createdAt) / 1000 >= this.options.maxLifetimeSeconds;

      if (isExpiredByLifetime || !item.client.isConnected) {
        this.removeClient(item.client);
        continue;
      }

      this.attachReleaseWrapper(item.client);
      this.emit('acquire', item.client);
      return item.client;
    }

    // 2. Create a new client if pool capacity allows
    if (this.allClients.size < this.options.max) {
      const clientConfig = this.dsn
        ? {...this.config, connectionString: this.dsn}
        : this.config;
      const client = new Client(clientConfig);
      this.allClients.add(client);
      this.clientMeta.set(client, {checkoutCount: 0, createdAt: Date.now()});

      // Remove dead client on background error and forward to pool error listener if attached
      client.on('error', (err: Error) => {
        this.removeClient(client);
        if (this.listenerCount('error') > 0) {
          this.emit('error', err, client);
        }
      });

      try {
        await this.connectAndInit(client, this.options.connectionTimeoutMillis);

        // Re-check if pool has been closed while waiting for connection or onConnect
        if (this.isEnding || this.isEnded) {
          throw new Error('Cannot acquire client from ending pool');
        }
      } catch (err) {
        this.removeClient(client);
        throw err;
      }

      // Emit 'connect' lifecycle event (synchronous / non-blocking EventEmitter notification)
      this.emit('connect', client);
      this.attachReleaseWrapper(client);
      this.emit('acquire', client);
      return client;
    }

    // 3. Queue acquisition request if max clients reached
    return new Promise<Client>((resolve, reject) => {
      let timeoutTimer: NodeJS.Timeout | undefined;

      if (this.options.connectionTimeoutMillis > 0) {
        timeoutTimer = setTimeout(() => {
          const idx = this.waitQueue.findIndex(w => w.resolve === resolve);
          if (idx !== -1) {
            this.waitQueue.splice(idx, 1);
            reject(new Error('timeout exceeded when trying to connect'));
          }
        }, this.options.connectionTimeoutMillis);

        if (timeoutTimer.unref) {
          timeoutTimer.unref();
        }
      }

      this.waitQueue.push({resolve, reject, timer: timeoutTimer});
    });
  }

  /**
   * Connects a Client instance and executes onConnect initialization, optionally bounded by connectionTimeoutMillis.
   */
  private async connectAndInit(
    client: Client,
    timeoutMs: number,
  ): Promise<void> {
    const initPromise = (async () => {
      await client.connect();
      if (typeof this.options.onConnect === 'function') {
        await this.options.onConnect(client);
      }
    })();
    initPromise.catch(() => {});

    if (timeoutMs <= 0) {
      await initPromise;
      return;
    }

    let timer: NodeJS.Timeout | undefined;
    const timeoutPromise = new Promise<never>((_, reject) => {
      timer = setTimeout(() => {
        void client.end();
        reject(new Error('timeout exceeded when trying to connect'));
      }, timeoutMs);
      if (timer.unref) {
        timer.unref();
      }
    });

    try {
      await Promise.race([initPromise, timeoutPromise]);
    } finally {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }

  /**
   * Binds a pool release handler to `client.release` on checked-out Client instances.
   *
   * While a standalone Client delegates `release()` directly to `client.end()` to close
   * its connection, a pooled Client must notify this Pool instance upon release so it can:
   * 1. Check if the connection errored or reached maxUses / maxLifetimeSeconds limits.
   * 2. Hand the client immediately to pending requesters in `waitQueue` (FIFO).
   * 3. Or return the client to `idleClients` (LIFO) and schedule `idleTimeoutMillis` eviction.
   * 4. Emit the pool `'release'` event.
   *
   */
  private attachReleaseWrapper(client: Client): void {
    let released = false;

    client.release = ((
      err?: boolean | Error | ((err: Error | null) => void),
    ): Promise<void> | void => {
      let callback: ((err: Error | null) => void) | undefined;
      let isErrored = false;

      if (typeof err === 'function') {
        callback = err;
      } else if (err === true || err instanceof Error) {
        isErrored = true;
      }

      if (released) {
        if (callback) {
          callback(null);
          return;
        }
        return Promise.resolve();
      }
      released = true;

      const doRelease = async (): Promise<void> => {
        if (!this.allClients.has(client)) {
          return;
        }

        const meta = this.clientMeta.get(client);
        if (meta) {
          meta.checkoutCount++;
        }

        const isExpiredByUses =
          this.options.maxUses > 0 &&
          meta !== undefined &&
          meta.checkoutCount >= this.options.maxUses;

        const isExpiredByLifetime =
          this.options.maxLifetimeSeconds > 0 &&
          meta !== undefined &&
          (Date.now() - meta.createdAt) / 1000 >=
            this.options.maxLifetimeSeconds;

        if (
          isErrored ||
          isExpiredByUses ||
          isExpiredByLifetime ||
          this.isEnding ||
          this.isEnded ||
          !client.isConnected
        ) {
          this.removeClient(client);
          this.emit('release', isErrored ? err : null, client);
          return;
        }

        this.emit('release', null, client);

        // If callers are waiting in queue, hand client directly to next waiter
        if (this.waitQueue.length > 0) {
          const waiter = this.waitQueue.shift()!;
          if (waiter.timer) {
            clearTimeout(waiter.timer);
          }
          this.attachReleaseWrapper(client);
          this.emit('acquire', client);
          waiter.resolve(client);
          return;
        }

        // Guard against duplicate insertion in idle queue
        if (this.idleClients.some(item => item.client === client)) {
          return;
        }

        // Otherwise, store client in idle queue with idle timeout
        let idleTimer: NodeJS.Timeout | undefined;
        if (this.options.idleTimeoutMillis > 0) {
          idleTimer = setTimeout(() => {
            this.onIdleTimeout(client);
          }, this.options.idleTimeoutMillis);

          if (
            this.options.allowExitOnIdle &&
            typeof idleTimer.unref === 'function'
          ) {
            idleTimer.unref();
          }
        }

        this.idleClients.push({client, timer: idleTimer});
      };

      if (callback) {
        doRelease()
          .then(() => callback!(null))
          .catch(e => callback!(e));
        return;
      }
      return doRelease();
    }) as typeof client.release;
  }

  /**
   * Handles idle connection timeout expiration for a client.
   */
  private onIdleTimeout(client: Client): void {
    const idx = this.idleClients.findIndex(item => item.client === client);
    if (idx !== -1) {
      const [{timer}] = this.idleClients.splice(idx, 1);
      if (timer) {
        clearTimeout(timer);
      }

      if (this.allClients.size > this.options.min) {
        this.removeClient(client);
      } else {
        this.idleClients.push({client});
      }
    }
  }

  /**
   * Permanently closes and removes a client from the pool.
   */
  private removeClient(client: Client): void {
    this.allClients.delete(client);
    const idx = this.idleClients.findIndex(item => item.client === client);
    if (idx !== -1) {
      const [{timer}] = this.idleClients.splice(idx, 1);
      if (timer) {
        clearTimeout(timer);
      }
    }

    void client.end();
    this.emit('remove', client);

    if (this.isEnding && this.allClients.size === 0) {
      this.finishEnd();
    } else if (!this.isEnding && !this.isEnded && this.waitQueue.length > 0) {
      const waiter = this.waitQueue.shift()!;
      if (waiter.timer) {
        clearTimeout(waiter.timer);
      }
      this._doConnect()
        .then(newClient => waiter.resolve(newClient))
        .catch(err => waiter.reject(err));
    }
  }

  /**
   * Completes graceful pool shutdown by resolving all pending `pool.end()` Promises.
   * Invoked automatically when the last checked-out client is released and removed (`allClients.size === 0`).
   */
  private finishEnd(): void {
    while (this.endResolvers.length > 0) {
      const resolve = this.endResolvers.shift()!;
      resolve();
    }
  }

  /**
   * Executes a query by acquiring a client, executing the statement, and automatically releasing the client.
   * Supports Promises, callbacks, and row-by-row event listeners.
   *
   * **Memory Consideration**: Like standard `node-postgres`, calling `pool.query()` buffers all result
   * rows in memory before resolving the returned `QueryResult.rows` array. For large datasets,
   * query pagination (`LIMIT` / `OFFSET`) should be used to manage memory consumption.
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
      try {
        client = await this._doConnect();
      } catch (err: unknown) {
        const errorObj = err instanceof Error ? err : new Error(String(err));
        dispatchQueryError(errorObj, query, actualCallback);
        throw errorObj;
      }

      // 2. Query execution stage:
      const queryForClient = new Query<QueryResult<R>>(
        query.text ?? '',
        query.values,
      );
      queryForClient.rowMode = query.rowMode;
      queryForClient.types = query.types;
      void queryForClient.on('row', (row, result) => {
        void query.emit('row', row, result);
      });
      void queryForClient.on('fields', fields => {
        void query.emit('fields', fields);
      });

      let result: QueryResult<R>;
      let queryErr: Error | undefined;

      try {
        result = await client.query(queryForClient);
      } catch (err: unknown) {
        queryErr = err instanceof Error ? err : new Error(String(err));
      } finally {
        await client.release();
      }

      if (queryErr) {
        dispatchQueryError(queryErr, query, actualCallback);
        throw queryErr;
      }

      query.emit('end', result!);
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
    if (callback) {
      this._doEnd()
        .then(() => callback())
        .catch(() => callback());
      return;
    }
    return this._doEnd();
  }

  private async _doEnd(): Promise<void> {
    if (this.isEnded) {
      return;
    }
    this.isEnding = true;

    // 1. Drain and reject all pending waitQueue requests
    while (this.waitQueue.length > 0) {
      const waiter = this.waitQueue.shift()!;
      if (waiter.timer) {
        clearTimeout(waiter.timer);
      }
      waiter.reject(new Error('Cannot acquire client from ending pool'));
    }

    // 2. Close and remove all idle clients
    const idleToClose = [...this.idleClients];
    this.idleClients = [];
    for (const {client, timer} of idleToClose) {
      if (timer) {
        clearTimeout(timer);
      }
      this.removeClient(client);
    }

    // 3. Graceful shutdown: If active queries are still running on checked-out clients,
    // pause and wait for all active clients to be released and removed (allClients.size === 0).
    if (this.allClients.size > 0) {
      await new Promise<void>(resolve => {
        this.endResolvers.push(resolve);
      });
    }

    this.isEnded = true;
  }
}

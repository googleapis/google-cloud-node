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
import {resolveDsn} from './config.js';
import {Client, ClientConfig, QueryConfig, QueryResult} from './client.js';
import {Pool as SpannerPool, Connection} from 'spannerlib-node';

export interface PoolClient extends Client {
  release(err?: Error | boolean): void;
}

export class Pool extends EventEmitter {
  private config: ClientConfig;
  private spannerPool: SpannerPool | null = null;
  private isClosed = false;

  constructor(config?: string | ClientConfig) {
    super();
    if (typeof config === 'string') {
      this.config = {connectionString: config};
    } else {
      this.config = config || {};
    }
  }

  private async ensurePool(): Promise<SpannerPool> {
    if (this.isClosed) {
      throw new Error('Pool is already closed');
    }
    if (this.spannerPool) {
      return this.spannerPool;
    }
    const dsn = resolveDsn(this.config);
    this.spannerPool = await SpannerPool.create(dsn);
    return this.spannerPool;
  }

  /**
   * Checks out a client connection from the pool.
   */
  async connect(): Promise<PoolClient>;
  async connect(
    callback: (err?: Error, client?: PoolClient, done?: () => void) => void,
  ): Promise<PoolClient>;
  async connect(
    callback?: (err?: Error, client?: PoolClient, done?: () => void) => void,
  ): Promise<PoolClient> {
    try {
      const pool = await this.ensurePool();
      const conn = await pool.createConnection();

      // Wrap in Client instance
      const client = new Client(this.config) as unknown as PoolClient;
      client.setConnection(conn);

      // Add release hook
      let released = false;
      client.release = (err?: Error | boolean) => {
        if (released) return;
        released = true;
        conn.close().catch(closeErr => {
          this.emit('error', closeErr);
        });
      };

      this.emit('connect', client);
      this.emit('acquire', client);

      if (callback) {
        callback(undefined, client, () => client.release());
      }
      return client;
    } catch (err: any) {
      if (callback) {
        callback(err, undefined as any, (() => {}) as any);
        return undefined as any;
      }
      throw err;
    }
  }

  /**
   * Helper executing a query immediately on a checked out client.
   */
  async query(text: string, values?: any[]): Promise<QueryResult>;
  async query(config: QueryConfig): Promise<QueryResult>;
  async query(
    text: string | QueryConfig,
    values?: any[],
    callback?: (err: Error | null, result?: QueryResult) => void,
  ): Promise<QueryResult> {
    let actualCallback = callback;
    if (typeof values === 'function') {
      actualCallback = values as any;
      values = undefined;
    }

    let client: PoolClient | null = null;
    try {
      client = await this.connect();
      const res = await (client as any).query(text, values);
      client.release();
      if (actualCallback) {
        actualCallback(null, res);
      }
      return res;
    } catch (err: any) {
      if (client) {
        client.release();
      }
      if (actualCallback) {
        actualCallback(err);
      }
      throw err;
    }
  }

  /**
   * Closes the connection pool.
   */
  async end(): Promise<void>;
  async end(callback: () => void): Promise<void>;
  async end(callback?: () => void): Promise<void> {
    try {
      this.isClosed = true;
      if (this.spannerPool) {
        await this.spannerPool.close();
        this.spannerPool = null;
      }
      if (callback) {
        callback();
      }
    } catch (err: any) {
      this.emit('error', err);
      if (callback) {
        callback();
        return;
      }
      throw err;
    }
  }
}

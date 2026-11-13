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
import {encodeValue, decodeValue, getPgOid} from './codec.js';
import {Pool as SpannerPool, Connection} from 'spannerlib-node';
import {Query} from './query.js';
import {enrichPgError} from './errors.js';
import {types, globalRegistry, hasCustomParser, TypeParserRegistry} from './types.js';

export interface ClientConfig {
  connectionString?: string;
  host?: string;
  port?: number;
  project?: string;
  instance?: string;
  database?: string;
  types?: any;
}

export interface FieldDef {
  name: string;
  dataTypeID: number;
}

export interface QueryResult {
  rows: any[];
  fields: FieldDef[];
  rowCount: number;
  command: string;
}

export interface QueryConfig {
  text: string;
  values?: any[];
  rowMode?: 'array';
  types?: any;
}

/**
 * Module-level cache for SpannerPool instances keyed by database DSN string.
 *
 * In Cloud Spanner, establishing a connection pool involves gRPC channel setup,
 * IAM/OAuth2 credential resolution, and CGO session initialization (~2-3s overhead).
 *
 * To match the instant connect behavior expected by node-postgres applications and
 * ORMs when instantiating new Client objects, SpannerPool handles are transparently
 * cached per DSN. Multiple Client instances targeting the same database share the
 * underlying gRPC session channels, while individual clients acquire and release
 * separate connection handles.
 */
const poolCache = new Map<string, SpannerPool>();

/**
 * Closes all cached SpannerPool instances and clears the module-level pool cache.
 *
 * This function should be called during application graceful shutdown or in test runner
 * hooks (e.g. afterAll) to close all underlying gRPC background channels and ensure
 * Node.js exits cleanly without open handle warnings.
 */
export async function clearPoolCache(): Promise<void> {
  for (const [, pool] of poolCache.entries()) {
    if (pool && typeof pool.close === 'function') {
      await Promise.resolve(pool.close()).catch(() => {});
    }
  }
  poolCache.clear();
}

export class Client extends EventEmitter {
  static Query = Query;
  private config: ClientConfig;
  private connection: Connection | null = null;
  private spannerPool: SpannerPool | null = null;
  private isConnected = false;
  private externalConnection = false;
  private queryQueue: Array<{run: () => Promise<any>}> = [];
  private isExecuting = false;
  private ending = false;
  /**
   * Tracks the PostgreSQL transaction status indicator:
   * - 'I': Idle (not in a transaction block)
   * - 'T': In Transaction (active transaction block after BEGIN / START TRANSACTION)
   * - 'E': In Failed Transaction (an error occurred during an active transaction)
   */
  private txStatus: 'I' | 'T' | 'E' = 'I';
  public types: any;

  constructor(config?: string | ClientConfig) {
    super();
    if (typeof config === 'string') {
      this.config = {connectionString: config};
    } else {
      this.config = config || {};
    }
    this.types = this.config.types || new TypeParserRegistry(globalRegistry);
  }

  /**
   * Registers a custom type parser function for a given PostgreSQL OID on this Client instance.
   *
   * Type parser resolution precedence order:
   * 1. Query-level (`query.types`)
   * 2. Client-instance level (`client.types`, registered via `client.setTypeParser`)
   * 3. Client-config level (`client.config.types`)
   * 4. Global level (`pg.types`)
   */
  public setTypeParser(oid: number | string, format?: any, customParser?: any): void {
    if (typeof format === 'function') {
      customParser = format;
      format = 'text';
    }
    return this.types.setTypeParser(oid, format, customParser);
  }

  /**
   * Returns the current PostgreSQL transaction status indicator string ('I', 'T', or 'E').
   */
  public getTransactionStatus(): string {
    return this.txStatus;
  }

  /**
   * Internal helper to inject an existing Connection (used by Pool client checkout).
   */
  setConnection(conn: Connection): void {
    this.connection = conn;
    this.isConnected = true;
    this.externalConnection = true;
  }

  /**
   * Establishes a session pool and checkout connection.
   */
  async connect(): Promise<this>;
  async connect(callback: (err?: Error) => void): Promise<this>;
  async connect(callback?: (err?: Error) => void): Promise<this> {
    if (this.isConnected) {
      const err = new Error('Client has already been connected');
      if (callback) {
        process.nextTick(() => callback(err));
        return this;
      }
      return Promise.reject(err);
    }

    try {
      const dsn = resolveDsn(this.config);
      let pool = poolCache.get(dsn);
      if (!pool) {
        pool = await SpannerPool.create(dsn);
        poolCache.set(dsn, pool);
      }
      this.spannerPool = pool;
      this.connection = await this.spannerPool.createConnection();
      this.isConnected = true;
      this.emit('connect');
      if (callback) callback();
      return this;
    } catch (err: any) {
      err = enrichPgError(err);
      if (callback) {
        callback(err);
        return this;
      }
      if (this.listenerCount('error') > 0) {
        this.emit('error', err);
      }
      throw err;
    }
  }

  /**
   * Closes active connection and pool handles.
   */
  private async doClose(): Promise<void> {
    const conn = this.connection;
    this.connection = null;
    this.spannerPool = null;
    this.isConnected = false;
    this.emit('end');
    if (conn && !this.externalConnection) {
      void conn.close().catch(() => {});
    }
  }

  async end(): Promise<void>;
  async end(callback: (err?: Error) => void): Promise<void>;
  async end(callback?: (err?: Error) => void): Promise<void> {
    this.ending = true;
    const endPromise = new Promise<void>((resolve, reject) => {
      if (this.queryQueue.length === 0 && !this.isExecuting) {
        this.doClose().then(resolve, reject);
      } else {
        this.once('drain', () => {
          this.doClose().then(resolve, reject);
        });
      }
    });

    try {
      await endPromise;
      if (callback) callback();
    } catch (err: any) {
      if (callback) {
        callback(err);
        return;
      }
      throw err;
    }
  }

  /**
   * Executes a query with optional parameters, returning a formatted QueryResult.
   */
  query(text: string, values?: any[]): Query;
  query(
    text: string,
    callback: (err: Error | null, result?: QueryResult) => void,
  ): Query;
  query(
    text: string,
    values: any[],
    callback: (err: Error | null, result?: QueryResult) => void,
  ): Query;
  query(config: QueryConfig): Query;
  query(
    config: QueryConfig,
    callback: (err: Error | null, result?: QueryResult) => void,
  ): Query;
  query(query: Query): Query;
  query(
    text: string | QueryConfig | Query,
    values?: any[] | ((err: Error | null, result?: QueryResult) => void),
    callback?: (err: Error | null, result?: QueryResult) => void,
  ): Query {
    let query: Query;
    if (text instanceof Query) {
      query = text;
      if (typeof values === 'function') {
        query.callback = values as any;
      }
    } else {
      query = new Query(text, values as any, callback);
    }

    if (this.ending) {
      const err = new Error('Client was closed and is not queryable');
      const executionPromise = Promise.reject(err);
      if (query.callback) {
        executionPromise.catch(() => {});
      }
      query.setPromise(executionPromise);
      process.nextTick(() => {
        const actualCallback = query.callback;
        if (actualCallback) {
          actualCallback(err);
        } else {
          query.emit('error', err);
        }
      });
      return query;
    }

    const task = {
      run: async () => {
        const sqlText = query.text;
        const sqlValues = query.values;
        const actualCallback = query.callback;
        const isArrayMode = query.rowMode === 'array';
        // Resolves custom type parsers according to priority order:
        // 1. query.types  2. client.types  3. client.config.types  4. global pg.types
        const customTypesHook = (oid: number) => {
          if (query.types && typeof query.types.getTypeParser === 'function') {
            return query.types.getTypeParser(oid);
          }
          if (this.types && typeof this.types.getTypeParser === 'function') {
            return this.types.getTypeParser(oid);
          }
          if (
            this.config?.types &&
            typeof this.config.types.getTypeParser === 'function'
          ) {
            return this.config.types.getTypeParser(oid);
          }
          if (hasCustomParser(oid)) {
            return types.getTypeParser(oid);
          }
          return null;
        };
        if (typeof sqlText !== 'string') {
          const err = enrichPgError(new Error('Query text must be a string'));
          if (query.listenerCount('error') > 0) {
            query.emit('error', err);
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback(err));
          }
          throw err;
        }
        if (
          sqlValues !== undefined &&
          sqlValues !== null &&
          !Array.isArray(sqlValues)
        ) {
          const err = enrichPgError(
            new Error('Query values must be an Array')
          );
          if (query.listenerCount('error') > 0) {
            query.emit('error', err);
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback(err));
          }
          throw err;
        }

        let rows: any;
        try {
          if (!this.isConnected) {
            await this.connect();
          }

          const trimmedUpper = sqlText.trim().toUpperCase();
          if (trimmedUpper.startsWith('BEGIN') || trimmedUpper.startsWith('START TRANSACTION')) {
            this.txStatus = 'T';
          }

          // 1. Build Spanner parameter maps from positional args
          const params: Record<string, any> = {};
          const paramTypes: Record<string, any> = {};
          if (sqlValues && sqlValues.length > 0) {
            for (let i = 0; i < sqlValues.length; i++) {
              const paramName = `p${i + 1}`;
              const {valueProto, typeProto} = encodeValue(sqlValues[i]);
              params[paramName] = valueProto;
              paramTypes[paramName] = typeProto;
            }
          }

          // 2. Execute on Go wrapper connection
          const executeRequest: any = {sql: sqlText};
          if (sqlValues && sqlValues.length > 0) {
            executeRequest.params = {fields: params};
            executeRequest.paramTypes = paramTypes;
          }

          rows = await this.connection!.execute(executeRequest);

          const resultSets: QueryResult[] = [];
          let hasMoreResultSets = false;
          do {
            // 3. Extract columns metadata
            const metadata = await rows.metadata();
            const fields: FieldDef[] = [];
            if (metadata && metadata.rowType && metadata.rowType.fields) {
              for (const f of metadata.rowType.fields) {
                fields.push({
                  name: f.name || '',
                  dataTypeID: f.type ? getPgOid(f.type) : 0,
                });
              }
            }

            // 4. Decode results rows
            const outputRows: any[] = [];
            const currentResult: QueryResult = {
              rows: outputRows,
              fields,
              rowCount: 0,
              command: 'SELECT',
            };
            let listValue;
            while ((listValue = await rows.next()) !== null) {
              let rowData: any;
              if (isArrayMode) {
                rowData = [];
                if (
                  listValue.values &&
                  metadata &&
                  metadata.rowType &&
                  metadata.rowType.fields
                ) {
                  for (
                    let colIdx = 0;
                    colIdx < listValue.values.length;
                    colIdx++
                  ) {
                    const field: any = metadata.rowType.fields[colIdx];
                    const fieldType: any = field.type;
                    const valProto: any = listValue.values[colIdx];
                    rowData.push(
                      decodeValue(valProto, fieldType, true, customTypesHook)
                    );
                  }
                }
              } else {
                rowData = {};
                if (
                  listValue.values &&
                  metadata &&
                  metadata.rowType &&
                  metadata.rowType.fields
                ) {
                  for (
                    let colIdx = 0;
                    colIdx < listValue.values.length;
                    colIdx++
                  ) {
                    const field: any = metadata.rowType.fields[colIdx];
                    const fieldName: string = field.name || '';
                    const fieldType: any = field.type;
                    const valProto: any = listValue.values[colIdx];
                    rowData[fieldName] = decodeValue(
                      valProto,
                      fieldType,
                      true,
                      customTypesHook
                    );
                  }
                }
              }

              outputRows.push(rowData);
              currentResult.rowCount = outputRows.length;
              query.emit('row', rowData, currentResult);
            }

            // 5. Query stats & row count mapping
            let rowCount = outputRows.length;
            const stats = await rows.resultSetStats();
            if (
              stats &&
              stats.rowCountExact !== undefined &&
              stats.rowCountExact !== null
            ) {
              rowCount =
                typeof stats.rowCountExact === 'number'
                  ? stats.rowCountExact
                  : parseInt(stats.rowCountExact.toString(), 10);
            }

            // Inferred PG command per statement
            const statements = sqlText
              .split(';')
              .map(s => s.trim())
              .filter(s => s.length > 0);
            const currentStmt = statements[resultSets.length] || sqlText;
            let command = 'SELECT';
            const trimmedSql = currentStmt.trim().toUpperCase();
            if (trimmedSql.startsWith('INSERT')) command = 'INSERT';
            else if (trimmedSql.startsWith('UPDATE')) command = 'UPDATE';
            else if (trimmedSql.startsWith('DELETE')) command = 'DELETE';
            else if (trimmedSql.startsWith('CREATE')) command = 'CREATE';
            else if (trimmedSql.startsWith('DROP')) command = 'DROP';

            resultSets.push({
              rows: outputRows,
              fields,
              rowCount,
              command,
            });

            if (typeof rows.nextResultSet === 'function') {
              hasMoreResultSets = await rows.nextResultSet();
            } else {
              hasMoreResultSets = false;
            }
          } while (hasMoreResultSets);

          // Clean up iterator
          await rows.close();

          if (trimmedUpper.startsWith('COMMIT') || trimmedUpper.startsWith('ROLLBACK')) {
            this.txStatus = 'I';
          }

          const finalResult: any =
            resultSets.length > 1 ? resultSets : resultSets[0];

          query.emit('end', finalResult);
          if (actualCallback) {
            process.nextTick(() => actualCallback(null, finalResult));
          }
          return finalResult;
        } catch (err: any) {
          err = enrichPgError(err);
          if (this.txStatus === 'T') {
            this.txStatus = 'E';
          }
          if (rows) {
            void rows.close().catch(() => {});
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback(err));
          } else {
            query.emit('error', err);
          }
          throw err;
        }
      },
    };

    const executionPromise = new Promise<any>((resolve, reject) => {
      const originalRun = task.run;
      task.run = async () => {
        try {
          const res = await originalRun();
          resolve(res);
          return res;
        } catch (err: any) {
          err = enrichPgError(err);
          reject(err);
          throw err;
        }
      };
    });

    query.setPromise(executionPromise);
    executionPromise.catch(() => {});
    this.queryQueue.push(task);
    void this.processQueue();
    return query;
  }

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
    } catch (err: any) {
      // Ignored here, handles in executionPromise reject
    } finally {
      this.queryQueue.shift();
      this.isExecuting = false;
      void this.processQueue();
    }
  }
}

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
import {encodeValue, decodeValue} from './codec.js';
import {Pool as SpannerPool, Connection} from 'spannerlib-node';
import {Query} from './query.js';

export interface ClientConfig {
  connectionString?: string;
  host?: string;
  port?: number;
  database?: string;
  user?: string;
  password?: string;
  ssl?: boolean | any;
  project?: string;
  instance?: string;
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

  constructor(config?: string | ClientConfig) {
    super();
    if (typeof config === 'string') {
      this.config = {connectionString: config};
    } else {
      this.config = config || {};
    }
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
   * Stubs custom client-level type parsing overrides.
   */
  setTypeParser(id: number, parser: Function): void {}

  /**
   * Establishes a session pool and checkout connection.
   */
  async connect(): Promise<void>;
  async connect(callback: (err?: Error) => void): Promise<void>;
  async connect(callback?: (err?: Error) => void): Promise<void> {
    if (this.isConnected) {
      if (callback) callback();
      return;
    }

    try {
      const dsn = resolveDsn(this.config);
      this.spannerPool = await SpannerPool.create(dsn);
      this.connection = await this.spannerPool.createConnection();
      this.isConnected = true;
      this.emit('connect');
      if (callback) callback();
    } catch (err: any) {
      this.emit('error', err);
      if (callback) {
        callback(err);
        return;
      }
      throw err;
    }
  }

  /**
   * Closes active connection and pool handles.
   */
  private async doClose(): Promise<void> {
    if (this.connection && !this.externalConnection) {
      await this.connection.close();
      this.connection = null;
    }
    if (this.spannerPool && !this.externalConnection) {
      await this.spannerPool.close();
      this.spannerPool = null;
    }
    this.isConnected = false;
    this.emit('end');
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
    const query =
      text instanceof Query ? text : new Query(text, values as any, callback);

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
        let rows: any;
        try {
          if (!this.isConnected) {
            await this.connect();
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

          // 3. Extract columns metadata
          const metadata = await rows.metadata();
          const fields: FieldDef[] = [];
          if (metadata && metadata.rowType && metadata.rowType.fields) {
            for (const f of metadata.rowType.fields) {
              fields.push({
                name: f.name || '',
                dataTypeID: f.type ? (f.type.code as number) : 0,
              });
            }
          }

          // 4. Decode results rows
          const outputRows: any[] = [];
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
                  rowData.push(decodeValue(valProto, fieldType));
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
                  rowData[fieldName] = decodeValue(valProto, fieldType);
                }
              }
            }

            outputRows.push(rowData);
            query.emit('row', rowData);
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

          // Clean up iterator
          await rows.close();

          // Inferred PG command
          let command = 'SELECT';
          const trimmedSql = sqlText.trim().toUpperCase();
          if (trimmedSql.startsWith('INSERT')) command = 'INSERT';
          else if (trimmedSql.startsWith('UPDATE')) command = 'UPDATE';
          else if (trimmedSql.startsWith('DELETE')) command = 'DELETE';
          else if (trimmedSql.startsWith('CREATE')) command = 'CREATE';
          else if (trimmedSql.startsWith('DROP')) command = 'DROP';

          const result: QueryResult = {
            rows: outputRows,
            fields,
            rowCount,
            command,
          };

          query.emit('end', result);
          if (actualCallback) {
            process.nextTick(() => actualCallback(null, result as any));
          }
          return result;
        } catch (err: any) {
          if (rows) {
            await rows.close().catch(() => {});
          }
          if (query.listenerCount('error') > 0) {
            query.emit('error', err);
          }
          if (actualCallback) {
            process.nextTick(() => actualCallback(err));
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
        } catch (err) {
          reject(err);
          throw err;
        }
      };
    });

    query.setPromise(executionPromise);
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

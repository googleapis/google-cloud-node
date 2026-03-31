/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {promisifyAll} from '@google-cloud/promisify';
import * as through from 'through2';
import {Operation as GaxOperation, CallOptions} from 'google-gax';
import {Database, UpdateSchemaCallback, UpdateSchemaResponse} from './database';
import {PartialResultStream, Row} from './partial-result-stream';
import {
  ReadRequest,
  TimestampBounds,
  CommitOptions,
  CommitResponse,
  ReadResponse,
  ReadCallback,
  CommitCallback,
} from './transaction';
import {google as databaseAdmin} from '../protos/protos';
import {Schema, LongRunningCallback} from './common';
import IRequestOptions = databaseAdmin.spanner.v1.IRequestOptions;
import {
  ObservabilityOptions,
  startTrace,
  setSpanError,
  traceConfig,
} from './instrument';
import {google} from '../protos/protos';
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import {Int, SpannerDate, Numeric, Float32, Float} from './codec';

// valid scalar types that Spanner accepts in a Key
export type KeyScalar =
  | string
  | number
  | boolean
  | SpannerDate
  | Buffer
  | Uint8Array
  | Int
  | Numeric
  | Float32
  | Float;

export type Key = KeyScalar | KeyScalar[];

export type CreateTableResponse = [
  Table,
  GaxOperation,
  databaseAdmin.longrunning.IOperation,
];
export type CreateTableCallback = LongRunningCallback<Table>;

export type DropTableResponse = UpdateSchemaResponse;
export type DropTableCallback = UpdateSchemaCallback;

interface MutateRowsOptions extends CommitOptions {
  requestOptions?: Omit<IRequestOptions, 'requestTag'>;
  excludeTxnFromChangeStreams?: boolean;
  isolationLevel?: IsolationLevel;
  readLockMode?: ReadLockMode;
}

export type DeleteRowsCallback = CommitCallback;
export type DeleteRowsResponse = CommitResponse;
export type DeleteRowsOptions = MutateRowsOptions;

export type InsertRowsCallback = CommitCallback;
export type InsertRowsResponse = CommitResponse;
export type InsertRowsOptions = MutateRowsOptions;

export type ReplaceRowsCallback = CommitCallback;
export type ReplaceRowsResponse = CommitResponse;
export type ReplaceRowsOptions = MutateRowsOptions;

export type UpdateRowsCallback = CommitCallback;
export type UpdateRowsResponse = CommitResponse;
export type UpdateRowsOptions = MutateRowsOptions;

export type UpsertRowsCallback = CommitCallback;
export type UpsertRowsResponse = CommitResponse;
export type UpsertRowsOptions = MutateRowsOptions;

const GOOGLE_STANDARD_SQL = 'GOOGLE_STANDARD_SQL';
const POSTGRESQL = 'POSTGRESQL';
/**
 * Create a Table object to interact with a table in a Cloud Spanner
 * database.
 *
 * @class
 *
 * @param {Database} database {@link Database} instance.
 * @param {string} name Name of the table.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 * const table = database.table('my-table');
 * ```
 */
class Table {
  database: Database;
  name: string;
  _observabilityOptions?: ObservabilityOptions;
  constructor(database: Database, name: string) {
    /**
     * The {@link Database} instance of this {@link Table} instance.
     * @name Table#database
     * @type {Database}
     */
    this.database = database;
    /**
     * The name of this table.
     * @name Table#name
     * @type {string}
     */
    this.name = name;
    this._observabilityOptions = database._observabilityOptions;
  }
  /**
   * Create a table.
   *
   * @param {string} schema See {@link Database#createTable}.
   * @param {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {CreateTableCallback} [callback] Callback function.
   * @returns {Promise<CreateTableResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const schema =
   *   'CREATE TABLE Singers (' +
   *   '  SingerId INT64 NOT NULL,' +
   *   '  FirstName STRING(1024),' +
   *   '  LastName STRING(1024),' +
   *   '  SingerInfo BYTES(MAX),' +
   *   ') PRIMARY KEY(SingerId)';
   *
   * table.create(schema, function(err, table, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Table created successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.create(schema)
   *   .then(function(data) {
   *     const table = data[0];
   *     const operation = data[1];
   *
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Table created successfully.
   *   });
   * ```
   */
  create(
    schema: Schema,
    gaxOptions?: CallOptions,
  ): Promise<CreateTableResponse>;
  create(schema: Schema, callback: CreateTableCallback): void;
  create(
    schema: Schema,
    gaxOptions: CallOptions,
    callback: CreateTableCallback,
  ): void;
  create(
    schema: Schema,
    gaxOptionsOrCallback?: CallOptions | CreateTableCallback,
    cb?: CreateTableCallback,
  ): Promise<CreateTableResponse> | void {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.database.createTable(schema, gaxOptions, callback!);
  }

  protected getDBName(): string {
    return this.database.formattedName_;
  }

  /**
   * Create a readable object stream to receive rows from the database using key
   * lookups and scans.
   *
   * @see [StreamingRead API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.StreamingRead)
   * @see [ReadRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest)
   *
   * @param {ReadRequest} query Configuration object, describing what to read from the table..
   * @param {TimestampBounds} [options] [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
   * @returns {PartialResultStream} A readable stream that emits rows.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * table.createReadStream({
   *     keys: ['1'],
   *     columns: ['SingerId', 'name']
   *   })
   *   .on('error', function(err) {})
   *   .on('data', function(row) {
   *     // row = {
   *     //   SingerId: '1',
   *     //   Name: 'Eddie Wilson'
   *     // }
   *   })
   *   .on('end', function() {
   *     // All results retrieved.
   *   });
   *
   * //-
   * // Provide an array for `query.keys` to read with a composite key.
   * //-
   * const query = {
   *   keys: [
   *     [
   *       'Id1',
   *       'Name1'
   *     ],
   *     [
   *       'Id2',
   *       'Name2'
   *     ]
   *   ],
   *   // ...
   * };
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * table.createReadStream({
   *     keys: ['1'],
   *     columns: ['SingerId', 'name']
   *   })
   *   .on('data', function(row) {
   *     this.end();
   *   });
   * ```
   */
  createReadStream(
    request: ReadRequest,
    options: TimestampBounds = {},
  ): PartialResultStream {
    const proxyStream = through.obj();

    this.database.getSnapshot(options, (err, snapshot) => {
      if (err) {
        proxyStream.destroy(err);
        return;
      }

      snapshot!
        .createReadStream(this.name, request)
        .on('error', err => {
          proxyStream.destroy(err);
          snapshot!.end();
        })
        .on('end', () => snapshot!.end())
        .pipe(proxyStream);
    });

    return proxyStream as PartialResultStream;
  }
  /**
   * @typedef {array} DropTableResponse
   * @property {google.longrunning.Operation} 0 An {@link Operation} object that can be used to check
   *     the status of the request.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback DropTableCallback
   * @param {?Error} err Request error, if any.
   * @param {google.longrunning.Operation} operation An {@link Operation} object that can be used to
   *     check the status of the request.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Delete the table. Not to be confused with {@link Table#deleteRows}.
   *
   * Wrapper around {@link Database#updateSchema}.
   *
   * @see {@link Database#updateSchema}
   *
   * @throws {TypeError} If any arguments are passed in.
   * @param {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DropTableCallback} [callback] Callback function.
   * @returns {Promise<DropTableResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * table.delete(function(err, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Table deleted successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.delete()
   *   .then(function(data) {
   *     const operation = data[0];
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Table deleted successfully.
   *   });
   * ```
   */
  delete(gaxOptions?: CallOptions): Promise<DropTableResponse>;
  delete(callback: DropTableCallback): void;
  delete(gaxOptions: CallOptions, callback: DropTableCallback): void;
  delete(
    gaxOptionsOrCallback?: CallOptions | DropTableCallback,
    cb?: DropTableCallback,
  ): Promise<DropTableResponse> | void {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    const [schema, table] = this.name.includes('.')
      ? this.name.split('.')
      : [null, this.name];

    let dropStatement = 'DROP TABLE `' + table + '`';

    const performDelete = async (): Promise<void | DropTableResponse> => {
      const result = await this.database.getDatabaseDialect(gaxOptions);

      if (result && result.includes(POSTGRESQL)) {
        dropStatement = schema
          ? `DROP TABLE "${schema}"."${table}"`
          : `DROP TABLE "${table}"`;
      } else if (result && result.includes(GOOGLE_STANDARD_SQL)) {
        dropStatement = schema
          ? 'DROP TABLE `' + schema + '`.`' + table + '`'
          : dropStatement;
      }

      const updateSchemaResult = callback
        ? this.database.updateSchema(dropStatement, gaxOptions, callback)
        : this.database.updateSchema(dropStatement, gaxOptions);

      return updateSchemaResult as Promise<DropTableResponse | void>;
    };

    if (!callback) {
      return performDelete() as Promise<DropTableResponse>;
    } else {
      void performDelete();
    }
  }
  /**
   * @typedef {array} DeleteRowsResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback DeleteRowsCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * @typedef {object} DeleteRowsOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Delete rows from this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {array} keys The keys for the rows to delete. If using a
   *     composite key, provide an array within this array. See the example
   * below.
   * @param {DeleteRowsOptions|CallOptions} [options] Options for configuring the request.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DeleteRowsCallback} [callback] Callback function.
   * @returns {Promise<DeleteRowsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const keys = ['Id1', 'Id2', 'Id3'];
   *
   * table.deleteRows(keys, function(err, apiResponse) {});
   *
   * //-
   * // Provide an array for `keys` to delete rows with a composite key.
   * //-
   * const keys = [
   *   [
   *     'Id1',
   *     'Name1'
   *   ],
   *   [
   *     'Id2',
   *     'Name2'
   *   ]
   * ];
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.deleteRows(keys)
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   * ```
   */
  deleteRows(
    keys: Key[],
    options?: DeleteRowsOptions | CallOptions,
  ): Promise<DeleteRowsResponse>;
  deleteRows(keys: Key[], callback: DeleteRowsCallback): void;
  deleteRows(
    keys: Key[],
    options: DeleteRowsOptions | CallOptions,
    callback: DeleteRowsCallback,
  ): void;
  deleteRows(
    keys: Key[],
    optionsOrCallback?: DeleteRowsOptions | CallOptions | DeleteRowsCallback,
    cb?: DeleteRowsCallback,
  ): Promise<DeleteRowsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    return this._mutate('deleteRows', keys, options, callback!);
  }
  /**
   * Drop the table.
   *
   * @see {@link Table#delete}
   * @see {@link Database#updateSchema}
   *
   * @param {object} [gaxOptions] Request configuration options.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DropTableCallback} [callback] Callback function.
   * @returns {Promise<DropTableResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * table.drop(function(err, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Table dropped successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.drop()
   *   .then(function(data) {
   *     const operation = data[0];
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Table dropped successfully.
   *   });
   * ```
   */
  drop(gaxOptions?: CallOptions): Promise<DropTableResponse>;
  drop(callback: DropTableCallback): void;
  drop(gaxOptions: CallOptions, callback: DropTableCallback): void;
  drop(
    gaxOptionsOrCallback?: CallOptions | DropTableCallback,
    cb?: DropTableCallback,
  ): Promise<DropTableResponse> | void {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    return this.delete(gaxOptions, callback!);
  }
  /**
   * @typedef {array} InsertRowsResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback InsertRowsCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * @typedef {object} InsertRowsOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Insert rows of data into this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   * @param {InsertRowsOptions|CallOptions} [options] Options for configuring the request.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {InsertRowsCallback} [callback] Callback function.
   * @returns {Promise<InsertRowsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Eddie Wilson'
   * };
   *
   * table.insert(row, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Rows inserted successfully.
   * });
   *
   * //-
   * // Multiple rows can be inserted at once.
   * //-
   * const row2 = {
   *   SingerId: 'Id3b',
   *   Name: 'Joe West'
   * };
   *
   * table.insert([
   *   row,
   *   row2
   * ], function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.insert(row)
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   *
   * ```
   * @example <caption>include:samples/crud.js</caption>
   * region_tag:spanner_insert_data
   * Full example:
   */
  insert(
    rows: object | object[],
    options?: InsertRowsOptions | CallOptions,
  ): Promise<InsertRowsResponse>;
  insert(rows: object | object[], callback: InsertRowsCallback): void;
  insert(
    rows: object | object[],
    options: InsertRowsOptions | CallOptions,
    callback: InsertRowsCallback,
  ): void;
  insert(
    rows: object | object[],
    optionsOrCallback?: InsertRowsOptions | CallOptions | InsertRowsCallback,
    cb?: InsertRowsCallback,
  ): Promise<InsertRowsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this._mutate('insert', rows, options, callback!);
  }
  /**
   * Configuration object, describing what to read from the table.
   */
  /**
   * @typedef {array} TableReadResponse
   * @property {array[]} 0 Rows are returned as an array of object arrays. Each
   *     object has a `name` and `value` property. To get a serialized object,
   *     call `toJSON()`. Optionally, provide an options object to `toJSON()`
   *     specifying `wrapNumbers: true` to protect large integer values outside
   * of the range of JavaScript Number. If set, FLOAT64 values will be returned
   *     as {@link Spanner.Float} objects and INT64 values as {@link
   * Spanner.Int}.
   */
  /**
   * @callback TableReadCallback
   * @param {?Error} err Request error, if any.
   * @param {array[]} rows Rows are returned as an array of object arrays. Each
   *     object has a `name` and `value` property. To get a serialized object,
   *     call `toJSON()`. Optionally, provide an options object to `toJSON()`
   *     specifying `wrapNumbers: true` to protect large integer values outside
   * of the range of JavaScript Number. If set, FLOAT64 values will be returned
   *     as {@link Spanner.Float} objects and INT64 values as {@link
   * Spanner.Int}.
   */
  /**
   * Receive rows from the database using key lookups and scans.
   *
   * **Performance Considerations:**
   *
   * This method wraps the streaming method,
   * {@link Table#createReadStream} for your convenience. All rows will
   * be stored in memory before being released to your callback. If you intend
   * on receiving a lot of results from your query, consider using the streaming
   * method, so you can free each result from memory after consuming it.
   *
   * @param {ReadRequest} query Configuration object, describing
   *     what to read from the table.
   * @param {TimestampBounds} options [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
   * @param {TableReadCallback} [callback] Callback function.
   * @returns {Promise<TableReadResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const query = {
   *   keys: ['1'],
   *   columns: ['SingerId', 'name']
   * };
   *
   * table.read(query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const firstRow = rows[0];
   *
   *   // firstRow = [
   *   //   {
   *   //     name: 'SingerId',
   *   //     value: '1'
   *   //   },
   *   //   {
   *   //     name: 'Name',
   *   //     value: 'Eddie Wilson'
   *   //   }
   *   // ]
   * });
   *
   * //-
   * // Provide an array for `query.keys` to read with a composite key.
   * //-
   * const query = {
   *   keys: [
   *     [
   *       'Id1',
   *       'Name1'
   *     ],
   *     [
   *       'Id2',
   *       'Name2'
   *     ]
   *   ],
   *   // ...
   * };
   *
   * //-
   * // Rows are returned as an array of object arrays. Each object has a `name`
   * // and `value` property. To get a serialized object, call `toJSON()`.
   * //
   * // Alternatively, set `query.json` to `true`, and this step will be
   * performed
   * // automatically.
   * //-
   * table.read(query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const firstRow = rows[0];
   *
   *   // firstRow.toJSON() = {
   *   //   SingerId: '1',
   *   //   Name: 'Eddie Wilson'
   *   // }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.read(query)
   *   .then(function(data) {
   *     const rows = data[0];
   *   });
   *
   * ```
   * @example <caption>include:samples/crud.js</caption>
   * region_tag:spanner_read_data
   * Full example:
   *
   * @example <caption>include:samples/crud.js</caption>
   * region_tag:spanner_read_stale_data
   * Reading stale data:
   *
   * @example <caption>include:samples/index-read-data.js</caption>
   * region_tag:spanner_read_data_with_index
   * Reading data using an index:
   *
   * @example <caption>include:samples/index-read-data-with-storing.js</caption>
   * region_tag:spanner_read_data_with_storing_index
   * Reading data using a storing index:
   */
  read(request: ReadRequest, options?: TimestampBounds): Promise<ReadResponse>;
  read(request: ReadRequest, callback: ReadCallback): void;
  read(
    request: ReadRequest,
    options: TimestampBounds,
    callback: ReadCallback,
  ): void;
  read(
    request: ReadRequest,
    optionsOrCallback?: TimestampBounds | ReadCallback,
    cb?: ReadCallback,
  ): Promise<ReadResponse> | void {
    const rows: Row[] = [];

    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? (optionsOrCallback as TimestampBounds)
        : {};

    this.createReadStream(request, options)
      .on('error', callback!)
      .on('data', (row: Row) => rows.push(row))
      .on('end', () => callback!(null, rows));
  }
  /**
   * @typedef {array} ReplaceRowsResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback ReplaceRowsCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * @typedef {object} ReplaceRowsOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Replace rows of data within this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   * @param {ReplaceRowsOptions|CallOptions} [options] Options for configuring the request.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {ReplaceRowsCallback} [callback] Callback function.
   * @returns {Promise<ReplaceRowsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * table.replace(row, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Row replaced successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.replace(row)
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   * ```
   */
  replace(
    rows: object | object[],
    options?: ReplaceRowsOptions | CallOptions,
  ): Promise<ReplaceRowsResponse>;
  replace(rows: object | object[], callback: ReplaceRowsCallback): void;
  replace(
    rows: object | object[],
    options: ReplaceRowsOptions | CallOptions,
    callback: ReplaceRowsCallback,
  ): void;
  replace(
    rows: object | object[],
    optionsOrCallback?: ReplaceRowsOptions | CallOptions | ReplaceRowsCallback,
    cb?: ReplaceRowsCallback,
  ): Promise<ReplaceRowsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this._mutate('replace', rows, options, callback!);
  }
  /**
   * @typedef {array} UpdateRowsResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback UpdateRowsCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * @typedef {object} UpdateRowsOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Update rows of data within this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   * @param {UpdateRowsOptions|CallOptions} [options] Options for configuring the request.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {UpdateRowsCallback} [callback] Callback function.
   * @returns {Promise<UpdateRowsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * table.update(row, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Row updated successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.update(row)
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   *
   * ```
   * @example <caption>include:samples/crud.js</caption>
   * region_tag:spanner_update_data
   * Full example:
   */
  update(
    rows: object | object[],
    options?: UpdateRowsOptions | CallOptions,
  ): Promise<UpdateRowsResponse>;
  update(rows: object | object[], callback: UpdateRowsCallback): void;
  update(
    rows: object | object[],
    options: UpdateRowsOptions | CallOptions,
    callback: UpdateRowsCallback,
  ): void;
  update(
    rows: object | object[],
    optionsOrCallback?: UpdateRowsOptions | CallOptions | UpdateRowsCallback,
    cb?: UpdateRowsCallback,
  ): Promise<UpdateRowsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this._mutate('update', rows, options, callback!);
  }
  /**
   * @typedef {array} UpsertRowsResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback UpsertRowsCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * @typedef {object} UpsertRowsOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Insert or update rows of data within this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   *
   * @param {UpsertRowsOptions|CallOptions} [options] Options for configuring the request.
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {UpsertRowsCallback} [callback] Callback function.
   * @returns {Promise<UpsertRowsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const table = database.table('Singers');
   *
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * table.upsert(row, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Row inserted or updated successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.upsert(row)
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   * ```
   */
  upsert(
    rows: object | object[],
    options?: UpsertRowsOptions | CallOptions,
  ): Promise<UpsertRowsResponse>;
  upsert(rows: object | object[], callback: UpsertRowsCallback): void;
  upsert(
    rows: object | object[],
    options: UpsertRowsOptions | CallOptions,
    callback: UpsertRowsCallback,
  ): void;
  upsert(
    rows: object | object[],
    optionsOrCallback?: UpsertRowsOptions | CallOptions | UpsertRowsCallback,
    cb?: UpsertRowsCallback,
  ): Promise<UpsertRowsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this._mutate('upsert', rows, options, callback!);
  }
  /**
   * Creates a new transaction and applies the desired mutation via
   * {@link Transaction#commit}.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @private
   *
   * @param {string} method CRUD method (insert, update, etc.).
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   * @param {function} callback The callback function.
   */
  private _mutate(
    method: 'deleteRows' | 'insert' | 'replace' | 'update' | 'upsert',
    rows: object | object[],
    options: MutateRowsOptions | CallOptions = {},
    callback: CommitCallback,
  ): void {
    const traceConfig: traceConfig = {
      opts: this._observabilityOptions,
      tableName: this.name,
      dbName: this.getDBName(),
      transactionTag: (options as MutateRowsOptions)?.requestOptions
        ?.transactionTag,
    };

    startTrace('Table.' + method, traceConfig, span => {
      const requestOptions =
        'requestOptions' in options ? options.requestOptions : {};

      const excludeTxnFromChangeStreams =
        'excludeTxnFromChangeStreams' in options
          ? options.excludeTxnFromChangeStreams
          : false;

      const isolationLevel =
        'isolationLevel' in options
          ? options.isolationLevel
          : IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED;

      const readLockMode =
        'readLockMode' in options
          ? options.readLockMode
          : ReadLockMode.READ_LOCK_MODE_UNSPECIFIED;

      this.database.runTransaction(
        {
          requestOptions: requestOptions,
          excludeTxnFromChangeStreams: excludeTxnFromChangeStreams,
          isolationLevel: isolationLevel,
          readLockMode: readLockMode,
        },
        (err, transaction) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback(err);
            return;
          }

          transaction![method](this.name, rows as Key[]);
          transaction!.commit(options, (err, resp) => {
            if (err) {
              setSpanError(span, err);
            }
            span.end();
            callback(err, resp);
          });
        },
      );
    });
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Table, {
  exclude: ['delete', 'drop'],
});

/**
 * Reference to the {@link Table} class.
 * @name module:@google-cloud/spanner.Table
 * @see Table
 */
export {Table};

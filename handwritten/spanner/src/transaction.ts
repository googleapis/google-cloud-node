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

import {DateStruct, PreciseDate} from '@google-cloud/precise-date';
import {promisifyAll} from '@google-cloud/promisify';
import {isEmpty, toArray} from './helper';
import Long = require('long');
import {EventEmitter} from 'events';
import {grpc, CallOptions, ServiceError, Status, GoogleError} from 'google-gax';
import {common as p} from 'protobufjs';
import {finished, Readable, PassThrough, Stream} from 'stream';

import {codec, Json, JSONOptions, Type, Value} from './codec';
import {
  PartialResultStream,
  partialResultStream,
  ResumeToken,
  Row,
} from './partial-result-stream';
import {Session} from './session';
import {Key} from './table';
import {Span} from './instrument';
import {google as spannerClient} from '../protos/protos';
import {
  NormalCallback,
  addLeaderAwareRoutingHeader,
  getCommonHeaders,
} from './common';
import {google} from '../protos/protos';
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import IAny = google.protobuf.IAny;
import IQueryOptions = google.spanner.v1.ExecuteSqlRequest.IQueryOptions;
import IRequestOptions = google.spanner.v1.IRequestOptions;
import {Database, Spanner} from '.';
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import {
  ObservabilityOptions,
  startTrace,
  setSpanError,
  setSpanErrorAndException,
  traceConfig,
} from './instrument';
import {RunTransactionOptions} from './transaction-runner';
import {injectRequestIDIntoHeaders, nextNthRequest} from './request_id_header';

export type Rows = Array<Row | Json>;
const RETRY_INFO_TYPE = 'type.googleapis.com/google.rpc.retryinfo';
const RETRY_INFO_BIN = 'google.rpc.retryinfo-bin';

export interface TimestampBounds {
  strong?: boolean;
  minReadTimestamp?: PreciseDate | spannerClient.protobuf.ITimestamp;
  maxStaleness?: number | spannerClient.protobuf.IDuration;
  readTimestamp?: PreciseDate | spannerClient.protobuf.ITimestamp;
  exactStaleness?: number | spannerClient.protobuf.IDuration;
  returnReadTimestamp?: boolean;
}

export interface BatchWriteOptions {
  requestOptions?: Pick<IRequestOptions, 'priority' | 'transactionTag'>;
  gaxOptions?: CallOptions;
  excludeTxnFromChangeStreams?: boolean;
}

export interface RequestOptions {
  json?: boolean;
  jsonOptions?: JSONOptions;
  gaxOptions?: CallOptions;
  maxResumeRetries?: number;
  /**
   * An object where column names as keys and custom objects as corresponding
   * values for deserialization. This is only needed for proto columns
   * where deserialization logic is on user-specific code. When provided,
   * the custom object enables deserialization of backend-received column data.
   * If not provided, data remains serialized as buffer for Proto Messages and
   * integer for Proto Enums.
   *
   * @example
   * To obtain Proto Messages and Proto Enums as JSON objects, you must supply
   * additional metadata. This metadata should include the protobufjs-cli
   * generated proto message function and enum object. It encompasses the essential
   * logic for proper data deserialization.
   *
   * Eg: To read data from Proto Columns in json format using DQL, you should pass
   * columnsMetadata where key is the name of the column and value is the protobufjs-cli
   * generated proto message function and enum object.
   *
   *     const query = {
   *       sql: `SELECT SingerId,
   *                    FirstName,
   *                    LastName,
   *                    SingerInfo,
   *                    SingerGenre,
   *                    SingerInfoArray,
   *                    SingerGenreArray
   *             FROM Singers
   *             WHERE SingerId = 6`,
   *       columnsMetadata: {
   *         SingerInfo: music.SingerInfo,
   *         SingerInfoArray: music.SingerInfo,
   *         SingerGenre: music.Genre,
   *         SingerGenreArray: music.Genre,
   *       },
   *     };
   */
  columnsMetadata?: object;
}

export interface CommitOptions {
  requestOptions?: Pick<IRequestOptions, 'priority'>;
  returnCommitStats?: boolean;
  maxCommitDelay?: spannerClient.protobuf.IDuration;
  gaxOptions?: CallOptions;
}

export interface Statement {
  sql: string;
  params?: {[param: string]: Value};
  types?: Type | {[param: string]: Value};
  // This property is used internally as a mapping for types. Do not set it manually
  paramTypes?: {[k: string]: google.spanner.v1.Type} | null;
}

export interface ExecuteSqlRequest extends Statement, RequestOptions {
  resumeToken?: ResumeToken;
  queryMode?: spannerClient.spanner.v1.ExecuteSqlRequest.QueryMode;
  partitionToken?: Uint8Array | string;
  seqno?: number;
  queryOptions?: IQueryOptions;
  requestOptions?: Omit<IRequestOptions, 'transactionTag'>;
  dataBoostEnabled?: boolean | null;
  directedReadOptions?: google.spanner.v1.IDirectedReadOptions;
}

export interface KeyRange {
  startClosed?: Value[];
  startOpen?: Value[];
  endClosed?: Value[];
  endOpen?: Value[];
}

export interface ReadRequest extends RequestOptions {
  table?: string;
  index?: string;
  columns?: string[] | null;
  keys?: string[] | string[][];
  ranges?: KeyRange[];
  keySet?: spannerClient.spanner.v1.IKeySet | null;
  limit?: number | Long | string | null;
  resumeToken?: Uint8Array | null;
  partitionToken?: Uint8Array | null;
  requestOptions?: Omit<IRequestOptions, 'transactionTag'>;
  dataBoostEnabled?: boolean | null;
  directedReadOptions?: google.spanner.v1.IDirectedReadOptions;
}

export interface BatchUpdateError extends grpc.ServiceError {
  rowCounts: number[];
}

export type CommitRequest = spannerClient.spanner.v1.ICommitRequest;

export type BatchUpdateResponse = [
  number[],
  spannerClient.spanner.v1.ExecuteBatchDmlResponse,
];
export type BeginResponse = [spannerClient.spanner.v1.ITransaction];

export type BeginTransactionCallback =
  NormalCallback<spannerClient.spanner.v1.ITransaction>;
export type CommitResponse = [spannerClient.spanner.v1.ICommitResponse];

export type ReadResponse = [Rows];
export type RunResponse = [
  Rows,
  spannerClient.spanner.v1.ResultSetStats,
  spannerClient.spanner.v1.ResultSetMetadata,
];
export type RunUpdateResponse = [number];

export interface BatchUpdateOptions {
  requestOptions?: Omit<IRequestOptions, 'transactionTag'>;
  gaxOptions?: CallOptions;
}
export interface BatchUpdateCallback {
  (
    err: null | BatchUpdateError,
    rowCounts: number[],
    response?: spannerClient.spanner.v1.ExecuteBatchDmlResponse,
  ): void;
}
export interface BatchUpdateOptions {
  requestOptions?: Omit<IRequestOptions, 'transactionTag'>;
  gaxOptions?: CallOptions;
}

export type ReadCallback = NormalCallback<Rows>;

export interface RunCallback {
  (
    err: null | grpc.ServiceError,
    rows: Rows,
    stats: spannerClient.spanner.v1.ResultSetStats,
    metadata?: spannerClient.spanner.v1.ResultSetMetadata,
  ): void;
}

export interface RunUpdateCallback {
  (err: null | grpc.ServiceError, rowCount: number): void;
}

export type CommitCallback =
  NormalCallback<spannerClient.spanner.v1.ICommitResponse>;

type PrecommitTokenProvider =
  | spannerClient.spanner.v1.ITransaction
  | spannerClient.spanner.v1.IPartialResultSet
  | spannerClient.spanner.v1.IExecuteBatchDmlResponse
  | spannerClient.spanner.v1.ICommitResponse;

/**
 * @typedef {object} TimestampBounds
 * @property {boolean} [strong=true] Read at a timestamp where all previously
 *     committed transactions are visible.
 * @property {external:PreciseDate|google.protobuf.Timestamp} [minReadTimestamp]
 *     Executes all reads at a `timestamp >= minReadTimestamp`.
 * @property {number|google.protobuf.Timestamp} [maxStaleness] Read data at a
 *     `timestamp >= NOW - maxStaleness` (milliseconds).
 * @property {external:PreciseDate|google.protobuf.Timestamp} [readTimestamp]
 *     Executes all reads at the given timestamp.
 * @property {number|google.protobuf.Timestamp} [exactStaleness] Executes all
 *     reads at a timestamp that is `exactStaleness` (milliseconds) old.
 * @property {boolean} [returnReadTimestamp=true] When true,
 *     {@link Snapshot#readTimestamp} will be populated after
 *     {@link Snapshot#begin} is called.
 */
/**
 * This transaction type provides guaranteed consistency across several reads,
 * but does not allow writes. Snapshot read-only transactions can be configured
 * to read at timestamps in the past.
 *
 * When finished with the Snapshot, call {@link Snapshot#end} to
 * release the underlying {@link Session}. Failure to do so can result in a
 * Session leak.
 *
 * **This object is created and returned from {@link Database#getSnapshot}.**
 *
 * @class
 * @hideconstructor
 *
 * @see [Timestamp Bounds API Documentation](https://cloud.google.com/spanner/docs/timestamp-bounds)
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 *
 * const timestampBounds = {
 *   strong: true
 * };
 *
 * database.getSnapshot(timestampBounds, (err, transaction) => {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // It should be called when the snapshot finishes.
 *   transaction.end();
 * });
 * ```
 */
export class Snapshot extends EventEmitter {
  protected _options!: spannerClient.spanner.v1.ITransactionOptions;
  protected _seqno = 1;
  protected _waitingRequests: Array<() => void>;
  protected _inlineBeginStarted;
  protected _useInRunner = false;
  protected _latestPreCommitToken:
    | spannerClient.spanner.v1.IMultiplexedSessionPrecommitToken
    | undefined
    | null;
  id?: Uint8Array | string;
  multiplexedSessionPreviousTransactionId?: Uint8Array | string;
  ended: boolean;
  metadata?: spannerClient.spanner.v1.ITransaction;
  readTimestamp?: PreciseDate;
  readTimestampProto?: spannerClient.protobuf.ITimestamp;
  request: (config: {}, callback: Function) => void;
  requestStream: (config: {}) => Readable;
  session: Session;
  queryOptions?: IQueryOptions;
  commonHeaders_: {[k: string]: string};
  requestOptions?: Pick<IRequestOptions, 'transactionTag'>;
  _observabilityOptions?: ObservabilityOptions;
  _traceConfig: traceConfig;
  protected _dbName?: string;
  protected _mutationKey: spannerClient.spanner.v1.Mutation | null;

  /**
   * The transaction ID.
   *
   * @name Snapshot#id
   * @type {?(string|Buffer)}
   */
  /**
   * Whether or not the transaction has ended. If true, make no further
   * requests, and discard the transaction.
   *
   * @name Snapshot#ended
   * @type {boolean}
   */
  /**
   * The raw transaction response object. It is populated after
   * {@link Snapshot#begin} is called.
   *
   * @name Snapshot#metadata
   * @type {?TransactionResponse}
   */
  /**
   * **Snapshot only**
   * The timestamp at which all reads are performed.
   *
   * @name Snapshot#readTimestamp
   * @type {?external:PreciseDate}
   */
  /**
   * **Snapshot only**
   * The protobuf version of {@link Snapshot#readTimestamp}. This is useful if
   * you require microsecond precision.
   *
   * @name Snapshot#readTimestampProto
   * @type {?google.protobuf.Timestamp}
   */
  /**
   * @constructor
   *
   * @param {Session} session The parent Session object.
   * @param {TimestampBounds} [options] Snapshot timestamp bounds.
   * @param {QueryOptions} [queryOptions] Default query options to use when none
   *        are specified for a query.
   */
  constructor(
    session: Session,
    options?: TimestampBounds,
    queryOptions?: IQueryOptions,
  ) {
    super();

    this.ended = false;
    this.session = session;
    this.queryOptions = Object.assign({}, queryOptions);
    this.request = session.request.bind(session);
    this.requestStream = session.requestStream.bind(session);

    const readOnly = Snapshot.encodeTimestampBounds(options || {});
    this._options = {readOnly};
    this._dbName = (this.session.parent as Database).formattedName_;
    this._waitingRequests = [];
    this._inlineBeginStarted = false;
    this._observabilityOptions = session._observabilityOptions;
    this.commonHeaders_ = getCommonHeaders(
      this._dbName,
      this._observabilityOptions?.enableEndToEndTracing,
    );
    this._traceConfig = {
      opts: this._observabilityOptions,
      dbName: this._dbName,
    };
    this._latestPreCommitToken = null;
    this._mutationKey = null;
  }

  protected _updatePrecommitToken(resp: PrecommitTokenProvider): void {
    if (
      this._latestPreCommitToken === null ||
      this._latestPreCommitToken === undefined ||
      (resp.precommitToken &&
        this._latestPreCommitToken!.seqNum! < resp.precommitToken!.seqNum!)
    ) {
      this._latestPreCommitToken = resp.precommitToken;
    }
  }

  /**
   * Selects a single representative mutation from a list to be used as the
   * transaction's `mutationKey`.
   *
   * This key is required by Spanner and is sent in the `BeginTransactionRequest`
   * for read-write transactions that only contain mutations. The selection follows
   * a two-tiered heuristic to choose the most significant mutation.
   *
   * The selection heuristic is as follows:
   *
   * 1. Priority of Operation Type: High-priority mutations (`delete`, `update`,
   * `replace`, `insertOrUpdate`) are always chosen over low-priority
   * (`insert`) mutations.
   *
   * 2. Selection Strategy:
   * - If any high-priority mutations exist, one is chosen randomly from
   * that group, ignoring the number of rows.
   * - If only `insert` mutations exist, the one(s) with the largest number
   * of rows are identified, and one is chosen randomly from that subset.
   *
   * @protected
   * @param mutations The list of mutations from which to select the key.
   */
  protected _setMutationKey(mutations: spannerClient.spanner.v1.Mutation[]) {
    // return if the list is empty
    if (mutations.length === 0) {
      return;
    }

    // maintain a set of high priority keys
    const HIGH_PRIORITY_KEYS = new Set([
      'delete',
      'update',
      'replace',
      'insertOrUpdate',
    ]);

    // maintain a variable for low priority key
    const LOW_PRIORITY_KEY = 'insert';

    // Partition mutations into high and low priority groups.
    const [highPriority, lowPriority] = mutations.reduce(
      (acc, mutation) => {
        const key = Object.keys(mutation)[0] as keyof typeof mutation;
        if (HIGH_PRIORITY_KEYS.has(key)) {
          acc[0].push(mutation);
        } else if (key === LOW_PRIORITY_KEY) {
          acc[1].push(mutation);
        }
        // return accumulated mutations list
        return acc;
      },
      [[], []] as [
        spannerClient.spanner.v1.Mutation[],
        spannerClient.spanner.v1.Mutation[],
      ],
    );

    // Apply the selection logic based on the rules.
    if (highPriority.length > 0) {
      // RULE 1: If high-priority keys exist, pick one randomly.
      const randomIndex = Math.floor(Math.random() * highPriority.length);
      this._mutationKey = highPriority[randomIndex];
    } else if (lowPriority.length > 0) {
      // RULE 2: If only 'insert' key(s) exist, find the one with
      // highest number of values
      const {bestCandidates} = lowPriority.reduce(
        (acc, mutation) => {
          const size = mutation.insert?.values?.length || 0;

          if (size > acc.maxSize) {
            // New largest size found, start a new list
            return {maxSize: size, bestCandidates: [mutation]};
          }
          if (size === acc.maxSize) {
            // Same size as current max, add to list
            acc.bestCandidates.push(mutation);
          }
          // return accumulated mutations list
          return acc;
        },
        {
          maxSize: -1,
          bestCandidates: [] as spannerClient.spanner.v1.Mutation[],
        },
      );

      // Pick randomly from the largest 'insert' mutation(s).
      const randomIndex = Math.floor(Math.random() * bestCandidates.length);
      this._mutationKey = bestCandidates[randomIndex];
    } else {
      // No mutations to select from.
      this._mutationKey = null;
    }
  }

  /**
   * Modifies transaction selector to include the multiplexed session previous
   * transaction id.
   * This is essential for operations that use an `inline begin`.
   * @protected
   * @param transaction The transaction selector object that will be mutated
   * to include the multiplexed session previous transaction id.
   */
  protected _setPreviousTransactionId(
    transaction: spannerClient.spanner.v1.ITransactionSelector,
  ): void {
    transaction.begin!.readWrite! = Object.assign(
      {},
      transaction.begin!.readWrite! || {},
      {
        multiplexedSessionPreviousTransactionId:
          this.multiplexedSessionPreviousTransactionId,
      },
    );
  }

  /**
   * @typedef {object} TransactionResponse
   * @property {string|Buffer} id The transaction ID.
   * @property {?google.protobuf.Timestamp} readTimestamp For snapshot read-only
   *     transactions, the read timestamp chosen for the transaction.
   */
  /**
   * @typedef {array} TransactionBeginResponse
   * @property {TransactionResponse} 0 The raw transaction object.
   */
  /**
   * @callback TransactionBeginCallback
   * @param {?Error} err Request error, if any.
   * @param {TransactionResponse} apiResponse The raw transaction object.
   */
  /**
   * Begin a new transaction. Typically, you need not call this unless
   * manually creating transactions via {@link Session} objects.
   *
   * @see [BeginTransaction API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.BeginTransaction)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {TransactionBeginCallback} [callback] Callback function.
   * @returns {Promise<TransactionBeginResponse>}
   *
   * @example
   * ```
   * transaction.begin(function(err) {
   *   if (!err) {
   *     // transaction began successfully.
   *   }
   * });
   *
   * ```
   * @example If the callback is omitted, the function returns a Promise
   * ```
   * transaction.begin()
   *   .then(function(data) {
   *     const apiResponse = data[0];
   *   });
   * ```
   */
  begin(gaxOptions?: CallOptions): Promise<BeginResponse>;
  begin(callback: BeginTransactionCallback): void;
  begin(gaxOptions: CallOptions, callback: BeginTransactionCallback): void;
  begin(
    gaxOptionsOrCallback?: CallOptions | BeginTransactionCallback,
    cb?: BeginTransactionCallback,
  ): void | Promise<BeginResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    const session = this.session.formattedName_!;
    const options = this._options;
    if (
      this.multiplexedSessionPreviousTransactionId &&
      (this.session.parent as Database).isMuxEnabledForRW_
    ) {
      options.readWrite!.multiplexedSessionPreviousTransactionId =
        this.multiplexedSessionPreviousTransactionId;
    }
    const reqOpts: spannerClient.spanner.v1.IBeginTransactionRequest = {
      session,
      options,
    };

    if (this._mutationKey) {
      reqOpts.mutationKey = this._mutationKey;
    }

    // Only hand crafted read-write transactions will be able to set a
    // transaction tag for the BeginTransaction RPC. Also, this.requestOptions
    // is only set in the constructor of Transaction, which is the constructor
    // for read/write transactions.
    if (this.requestOptions) {
      reqOpts.requestOptions = this.requestOptions;
    }

    const headers = this.commonHeaders_;
    if (
      this._getSpanner().routeToLeaderEnabled &&
      (this._options.readWrite !== undefined ||
        this._options.partitionedDml !== undefined)
    ) {
      addLeaderAwareRoutingHeader(headers);
    }

    return startTrace(
      'Snapshot.begin',
      {
        transactionTag: this.requestOptions?.transactionTag,
        ...this._traceConfig,
      },
      span => {
        span.addEvent('Begin Transaction');

        this.request(
          {
            client: 'SpannerClient',
            method: 'beginTransaction',
            reqOpts,
            gaxOpts,
            headers: injectRequestIDIntoHeaders(headers, this.session),
          },
          (
            err: null | grpc.ServiceError,
            resp: spannerClient.spanner.v1.ITransaction,
          ) => {
            if (err) {
              setSpanError(span, err);
            } else {
              this._updatePrecommitToken(resp);
              this._update(resp, span);
            }
            span.end();
            callback!(err, resp);
          },
        );
      },
    );
  }

  /**
   * A KeyRange represents a range of rows in a table or index.
   *
   * A range has a start key and an end key. These keys can be open or closed,
   * indicating if the range includes rows with that key.
   *
   * Keys are represented by an array of strings where the nth value in the list
   * corresponds to the nth component of the table or index primary key.
   *
   * @typedef {object} KeyRange
   * @property {string[]} [startClosed] If the start is closed, then the range
   *     includes all rows whose first key columns exactly match.
   * @property {string[]} [startOpen] If the start is open, then the range
   *     excludes rows whose first key columns exactly match.
   * @property {string[]} [endClosed] If the end is closed, then the range
   *     includes all rows whose first key columns exactly match.
   * @property {string[]} [endOpen] If the end is open, then the range excludes
   *     rows whose first key columns exactly match.
   */
  /**
   * Read request options. This includes all standard ReadRequest options as
   * well as several convenience properties.
   *
   * @see [StreamingRead API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.StreamingRead)
   * @see [ReadRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest)
   *
   * @typedef {object} ReadRequest
   * @property {string} table The name of the table in the database to be read.
   * @property {string[]} columns The columns of the table to be returned for each
   *     row matching this query.
   * @property {string[]|string[][]} keys The primary or index keys of the rows in this table to be
   *     yielded. If using a composite key, provide an array within this array.
   *     See the example below.
   * @property {KeyRange[]} [ranges] An alternative to the keys property; this can
   *     be used to define a range of keys to be yielded.
   * @property {string} [index] The name of an index on the table if a
   *     different index than the primary key should be used to determine which rows to return.
   * @property {boolean} [json=false] Receive the rows as serialized objects. This
   *     is the equivalent of calling `toJSON()` on each row.
   * @property {JSONOptions} [jsonOptions] Configuration options for the serialized
   *     objects.
   * @property {object} [keySet] Defines a collection of keys and/or key ranges to
   *     read.
   * @property {number} [limit] The number of rows to yield.
   * @property {Buffer} [partitionToken]
   *     If present, results will be restricted to the specified partition
   *     previously created using PartitionRead(). There must be an exact
   *     match for the values of fields common to this message and the
   *     PartitionReadRequest message used to create this partition_token.
   * @property {google.spanner.v1.RequestOptions} [requestOptions]
   *     Common options for this request.
   * @property {google.spanner.v1.IDirectedReadOptions} [directedReadOptions]
   *     Indicates which replicas or regions should be used for non-transactional reads or queries.
   * @property {object} [gaxOptions]
   *     Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * Create a readable object stream to receive rows from the database using key
   * lookups and scans.
   *
   * Wrapper around {@link v1.SpannerClient#streamingRead}.
   *
   * @see {@link v1.SpannerClient#streamingRead}
   * @see [StreamingRead API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.StreamingRead)
   * @see [ReadRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest)
   *
   * @fires PartialResultStream#response
   * @fires PartialResultStream#stats
   *
   * @param {string} table The table to read from.
   * @param {ReadRequest} query Configuration object. See official
   *     [`ReadRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest).
   *     API documentation.
   * @returns {ReadableStream} A readable stream that emits rows.
   *
   * @example
   * ```
   * transaction.createReadStream('Singers', {
   *     keys: ['1'],
   *     columns: ['SingerId', 'name']
   *   })
   *   .on('error', function(err) {})
   *   .on('data', function(row) {
   *     // row = [
   *     //   {
   *     //     name: 'SingerId',
   *     //     value: '1'
   *     //   },
   *     //   {
   *     //     name: 'Name',
   *     //     value: 'Eddie Wilson'
   *     //   }
   *     // ]
   *   })
   *   .on('end', function() {
   *     // All results retrieved.
   *   });
   *
   * ```
   * @example Provide an array for `query.keys` to read with a
   * composite key.
   * ```
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
   * ```
   *
   * @example Rows are returned as an array of object arrays. Each
   * object has a `name` and `value` property. To get a serialized object, call
   * `toJSON()`.
   * ```
   * transaction.createReadStream('Singers', {
   *     keys: ['1'],
   *     columns: ['SingerId', 'name']
   *   })
   *   .on('error', function(err) {})
   *   .on('data', function(row) {
   *     // row.toJSON() = {
   *     //   SingerId: '1',
   *     //   Name: 'Eddie Wilson'
   *     // }
   *   })
   *   .on('end', function() {
   *     // All results retrieved.
   *   });
   * ```
   *
   * @example Alternatively, set `query.json` to `true`, and this step
   * will perform automatically.
   * ```
   * transaction.createReadStream('Singers', {
   *     keys: ['1'],
   *     columns: ['SingerId', 'name'],
   *     json: true,
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
   * ```
   *
   * @example If you anticipate many results, you can end a stream
   * early to prevent unnecessary processing and API requests.
   * ```
   * transaction.createReadStream('Singers', {
   *     keys: ['1'],
   *     columns: ['SingerId', 'name']
   *   })
   *   .on('data', function(row) {
   *     this.end();
   *   });
   * ```
   */
  createReadStream(
    table: string,
    request = {} as ReadRequest,
  ): PartialResultStream {
    const {
      gaxOptions,
      json,
      jsonOptions,
      maxResumeRetries,
      requestOptions,
      columnsMetadata,
    } = request;
    const keySet = Snapshot.encodeKeySet(request);
    const transaction: spannerClient.spanner.v1.ITransactionSelector = {};

    if (this.id) {
      transaction.id = this.id as Uint8Array;
    } else if (this._options.readWrite) {
      transaction.begin = this._options;
    } else {
      transaction.singleUse = this._options;
    }

    if (
      !this.id &&
      this._options.readWrite &&
      (this.session.parent as Database).isMuxEnabledForRW_
    ) {
      this._setPreviousTransactionId(transaction);
    }

    const directedReadOptions = this._getDirectedReadOptions(
      request.directedReadOptions,
    );

    request = Object.assign({}, request);

    delete request.gaxOptions;
    delete request.json;
    delete request.jsonOptions;
    delete request.maxResumeRetries;
    delete request.keys;
    delete request.ranges;
    delete request.requestOptions;
    delete request.directedReadOptions;
    delete request.columnsMetadata;

    const reqOpts: spannerClient.spanner.v1.IReadRequest = Object.assign(
      request,
      {
        session: this.session.formattedName_!,
        requestOptions: this.configureTagOptions(
          typeof transaction.singleUse !== 'undefined',
          this.requestOptions?.transactionTag ?? undefined,
          requestOptions,
        ),
        directedReadOptions: directedReadOptions,
        transaction,
        table,
        keySet,
      },
    );

    const headers = this.commonHeaders_;
    if (
      this._getSpanner().routeToLeaderEnabled &&
      (this._options.readWrite !== undefined ||
        this._options.partitionedDml !== undefined)
    ) {
      addLeaderAwareRoutingHeader(headers);
    }

    const traceConfig: traceConfig = {
      ...this._traceConfig,
      tableName: table,
      transactionTag: this.requestOptions?.transactionTag,
      requestTag: requestOptions?.requestTag,
    };

    return startTrace('Snapshot.createReadStream', traceConfig, span => {
      let attempt = 0;
      const database = this.session.parent as Database;
      const nthRequest = nextNthRequest(database);
      const makeRequest = (resumeToken?: ResumeToken): Readable => {
        if (this.id && transaction.begin) {
          delete transaction.begin;
          transaction.id = this.id;
        }

        attempt++;

        if (!resumeToken) {
          if (attempt === 1) {
            span.addEvent('Starting stream');
          } else {
            span.addEvent('Re-attempting start stream', {attempt: attempt});
          }
        } else {
          span.addEvent('Resuming stream', {
            resume_token: resumeToken!.toString(),
            attempt: attempt,
          });
        }

        return this.requestStream({
          client: 'SpannerClient',
          method: 'streamingRead',
          reqOpts: Object.assign({}, reqOpts, {resumeToken}),
          gaxOpts: gaxOptions,
          headers: injectRequestIDIntoHeaders(
            headers,
            this.session,
            nthRequest,
            attempt,
          ),
        });
      };

      const resultStream = partialResultStream(
        this._wrapWithIdWaiter(makeRequest),
        {
          json,
          jsonOptions,
          maxResumeRetries,
          columnsMetadata,
          gaxOptions,
        },
      )
        ?.on('response', response => {
          this._updatePrecommitToken(response);
          if (response.metadata && response.metadata!.transaction && !this.id) {
            this._update(response.metadata!.transaction, span);
          }
        })
        .on('error', err => {
          setSpanError(span, err);
          const wasAborted = isErrorAborted(err);
          if (!this.id && this._useInRunner && !wasAborted) {
            // TODO: resolve https://github.com/googleapis/nodejs-spanner/issues/2170
            void this.begin();
          } else {
            if (wasAborted) {
              span.addEvent('Stream broken. Not safe to retry', {
                'transaction.id': this.id?.toString(),
              });
            }
          }
          span.end();
        })
        .on('end', err => {
          if (err) {
            setSpanError(span, err);
          }
          span.end();
        });

      if (resultStream instanceof Stream) {
        finished(resultStream, err => {
          if (err) {
            setSpanError(span, err);
          }
          span.end();
        });
      }

      return resultStream;
    });
  }

  /**
   * Let the client know you're done with a particular transaction. This should
   * mainly be called for {@link Snapshot} objects, however in certain cases
   * you may want to call them for {@link Transaction} objects as well.
   *
   * @example Calling `end` on a read only snapshot
   * ```
   * database.getSnapshot((err, transaction) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.run('SELECT * FROM Singers', (err, rows) => {
   *     if (err) {
   *       // Error handling omitted.
   *     }
   *
   *     // End the snapshot.
   *     transaction.end();
   *   });
   * });
   * ```
   *
   * @example Calling `end` on a read/write transaction
   * ```
   * database.runTransaction((err, transaction) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const query = 'UPDATE Account SET Balance = 1000 WHERE Key = 1';
   *
   *   transaction.runUpdate(query, err => {
   *     if (err) {
   *       // In the event of an error, there would be nothing to rollback,
   * so
   *       // instead of continuing, discard the
   * transaction. transaction.end(); return;
   *     }
   *
   *     transaction.commit(err => {});
   *   });
   * });
   * ```
   */
  end(): void {
    if (this.ended) {
      return;
    }

    this.ended = true;
    process.nextTick(() => this.emit('end'));
  }

  /**
   * @typedef {array} ReadResponse
   * @property {array[]} 0 Rows are returned as an array of object arrays. Each
   *     object has a `name` and `value` property. To get a serialized object,
   *     call `toJSON()`. Optionally, provide an options object to `toJSON()`
   *     specifying `wrapNumbers: true` to protect large integer values outside
   * of the range of JavaScript Number. If set, FLOAT64 values are returned
   *     as {@link Spanner.Float} objects and INT64 values as {@link
   * Spanner.Int}.
   */
  /**
   * @callback ReadCallback
   * @param {?Error} err Request error, if any.
   * @param {array[]} rows Rows are returned as an array of object arrays. Each
   *     object has a `name` and `value` property. To get a serialized object,
   *     call `toJSON()`. Optionally, provide an options object to `toJSON()`
   *     specifying `wrapNumbers: true` to protect large integer values outside
   * of the range of JavaScript Number. If set, FLOAT64 values are returned
   *     as {@link Spanner.Float} objects and INT64 values as {@link
   * Spanner.Int}.
   */
  /**
   * Performs a read request against the specified Table.
   *
   * Wrapper around {@link v1.SpannerClient#read}.
   *
   * @see {@link v1.SpannerClient#read}
   *
   * @param {string} table The table to read from.
   * @param {ReadRequest} query Configuration object. See official
   *     [`ReadRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ReadRequest).
   *     API documentation.
   * @param {ReadCallback} [callback] Callback function.
   * @returns {Promise<ReadResponse>}
   *
   * @example
   * ```
   * const query = {
   *   keys: ['1'],
   *   columns: ['SingerId', 'name']
   * };
   *
   * transaction.read('Singers', query, function(err, rows) {
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
   * ```
   * @example Provide an array for `query.keys` to read with a
   * composite key.
   * ```
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
   * ```
   *
   * @example Rows are returned as an array of object arrays. Each
   * object has a `name` and `value` property. To get a serialized object, call
   * `toJSON()`.
   * ```
   * transaction.read('Singers', query, function(err, rows) {
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
   * ```
   *
   * @example Alternatively, set `query.json` to `true`, and this step
   * will perform automatically.
   * ```
   * query.json = true;
   *
   * transaction.read('Singers', query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const firstRow = rows[0];
   *
   *   // firstRow = {
   *   //   SingerId: '1',
   *   //   Name: 'Eddie Wilson'
   *   // }
   * });
   * ```
   */
  read(table: string, request: ReadRequest): Promise<ReadResponse>;
  read(table: string, callback: ReadCallback): void;
  read(table: string, request: ReadRequest, callback: ReadCallback): void;
  read(
    table: string,
    requestOrCallback: ReadRequest | ReadCallback,
    cb?: ReadCallback,
  ): void | Promise<ReadResponse> {
    const rows: Rows = [];

    let request: ReadRequest;
    let callback: ReadCallback;

    if (typeof requestOrCallback === 'function') {
      request = {} as RequestOptions;
      callback = requestOrCallback as ReadCallback;
    } else {
      request = requestOrCallback as RequestOptions;
      callback = cb as ReadCallback;
    }

    return startTrace(
      'Snapshot.read',
      {
        tableName: table,
        ...this._traceConfig,
      },
      span => {
        this.createReadStream(table, request)
          .on('error', err => {
            const e = err as grpc.ServiceError;
            setSpanError(span, e);
            span.end();
            callback!(e, null);
          })
          .on('data', row => rows.push(row))
          .on('end', () => {
            span.end();
            callback!(null, rows);
          });
      },
    );
  }

  /**
   * Execute a SQL statement on this database inside of a transaction.
   *
   * **Performance Considerations:**
   *
   * This method wraps the streaming method,
   * {@link Snapshot#run} for your convenience. All rows are stored in memory
   * before releasing to your callback. If you intend to receive a lot of
   * results from your query, consider using the streaming method,
   * so you can free each result from memory after consuming it.
   *
   * Wrapper around {@link v1.SpannerClient#executeStreamingSql}.
   *
   * @see {@link v1.SpannerClient#executeStreamingSql}
   * @see [ExecuteStreamingSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteStreamingSql)
   * @see [ExecuteSqlRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *
   * @param {string|ExecuteSqlRequest} query A SQL query or
   *     {@link ExecuteSqlRequest} object.
   * @param {RunCallback} [callback] Callback function.
   * @returns {Promise<RunResponse>}
   *
   * @example
   * ```
   * transaction.run(query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // rows = [
   *   //   {
   *   //     SingerId: '1',
   *   //     Name: 'Eddie Wilson'
   *   //   }
   *   // ]
   * });
   *
   * ```
   * @example The SQL query string can contain parameter placeholders.
   * A parameter placeholder consists of '@' followed by the parameter name.
   * ```
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name',
   *   params: {
   *     name: 'Eddie Wilson'
   *   }
   * };
   *
   * transaction.run(query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   * ```
   *
   * @example If you need to enforce a specific param type, a types map
   * can be provided. This is typically useful if your param value can be null.
   * ```
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name AND id = @id',
   *   params: {
   *     id: spanner.int(8),
   *     name: null
   *   },
   *   types: {
   *     id: 'int64',
   *     name: 'string'
   *   }
   * };
   *
   * transaction.run(query, function(err, rows) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   * ```
   */
  run(query: string | ExecuteSqlRequest): Promise<RunResponse>;
  run(query: string | ExecuteSqlRequest, callback: RunCallback): void;
  run(
    query: string | ExecuteSqlRequest,
    callback?: RunCallback,
  ): void | Promise<RunResponse> {
    const rows: Rows = [];
    let stats: google.spanner.v1.ResultSetStats;
    let metadata: google.spanner.v1.ResultSetMetadata;

    startTrace(
      'Snapshot.run',
      {
        ...(query as ExecuteSqlRequest),
        ...this._traceConfig,
      },
      span => {
        return this.runStream(query)
          .on('error', err => {
            setSpanError(span, err);
            span.end();
            if (!('code' in err)) {
              Object.assign(err, {
                code: grpc.status.UNKNOWN,
                details: err.message,
                metadata: new grpc.Metadata(),
              });
            }
            callback!(err as ServiceError, rows, stats, metadata);
          })
          .on('response', response => {
            if (response.metadata) {
              metadata = response.metadata;
              if (metadata.transaction && !this.id) {
                this._update(metadata.transaction, span);
              }
            }
          })
          .on('data', row => rows.push(row))
          .on('stats', _stats => (stats = _stats))
          .on('end', () => {
            span.end();
            callback!(null, rows, stats, metadata);
          });
      },
    );
  }

  /**
   * ExecuteSql request options. This includes all standard ExecuteSqlRequest
   * options as well as several convenience properties.
   *
   * @see [Query Syntax](https://cloud.google.com/spanner/docs/query-syntax)
   * @see [ExecuteSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteSql)
   *
   * @typedef {object} ExecuteSqlRequest
   * @property {string} resumeToken The token used to resume getting results.
   * @property {google.spanner.v1.ExecuteSqlRequest.QueryMode} queryMode Query plan and
   *     execution statistics for the SQL statement that
   *     produced this result set.
   * @property {string} partitionToken The partition token.
   * @property {number} seqno The Sequence number. This option is used internally and will be overridden.
   * @property {string} sql The SQL string.
   * @property {google.spanner.v1.ExecuteSqlRequest.IQueryOptions} [queryOptions]
   *     Default query options to use with the database. These options will be
   *     overridden by any query options set in environment variables or that
   *     are specified on a per-query basis.
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {Object.<string, *>} [params] A map of parameter names to values.
   * @property {Object.<string, (string|ParamType)>} [types] A map of parameter
   *     names to types. If omitted the client will attempt to guess for all
   *     non-null values.
   * @property {boolean} [json=false] Receive the rows as serialized objects. This
   *     is the equivalent of calling `toJSON()` on each row.
   * @property {JSONOptions} [jsonOptions] Configuration options for the
   *     serialized objects.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   *  @property {number} [maxResumeRetries] The maximum number of times that the
   *     stream will retry to push data downstream, when the downstream indicates
   *     that it is not ready for any more data. Increase this value if you
   *     experience 'Stream is still not ready to receive data' errors as a
   *     result of a slow writer in your receiving stream.
   *  @property {object} [directedReadOptions]
   *     Indicates which replicas or regions should be used for non-transactional reads or queries.
   */
  /**
   * Create a readable object stream to receive resulting rows from a SQL
   * statement.
   *
   * Wrapper around {@link v1.SpannerClient#executeStreamingSql}.
   *
   * @see {@link v1.SpannerClient#executeStreamingSql}
   * @see [ExecuteStreamingSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteStreamingSql)
   * @see [ExecuteSqlRequest API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *
   * @fires PartialResultStream#response
   * @fires PartialResultStream#stats
   *
   * @param {string|ExecuteSqlRequest} query A SQL query or
   *     {@link ExecuteSqlRequest} object.
   * @returns {ReadableStream}
   *
   * @example
   * ```
   * const query = 'SELECT * FROM Singers';
   *
   * transaction.runStream(query)
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
   * ```
   * @example The SQL query string can contain parameter placeholders.
   * A parameter placeholder consists of '@' followed by the parameter name.
   * ```
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name',
   *   params: {
   *     name: 'Eddie Wilson'
   *   }
   * };
   *
   * transaction.runStream(query)
   *   .on('error', function(err) {})
   *   .on('data', function(row) {})
   *   .on('end', function() {});
   * ```
   *
   * @example If you anticipate many results, you can end a stream
   * early to prevent unnecessary processing and API requests.
   * ```
   * transaction.runStream(query)
   *   .on('data', function(row) {
   *     this.end();
   *   });
   * ```
   */
  runStream(query: string | ExecuteSqlRequest): PartialResultStream {
    if (typeof query === 'string') {
      query = {sql: query} as ExecuteSqlRequest;
    }

    query = Object.assign({}, query) as ExecuteSqlRequest;
    query.queryOptions = Object.assign(
      Object.assign({}, this.queryOptions),
      query.queryOptions,
    );

    const {
      gaxOptions,
      json,
      jsonOptions,
      maxResumeRetries,
      requestOptions,
      columnsMetadata,
    } = query;
    let reqOpts;

    const directedReadOptions = this._getDirectedReadOptions(
      query.directedReadOptions,
    );

    const sanitizeRequest = () => {
      query = query as ExecuteSqlRequest;
      const {params, paramTypes} = Snapshot.encodeParams(query);
      const transaction: spannerClient.spanner.v1.ITransactionSelector = {};
      if (this.id) {
        transaction.id = this.id as Uint8Array;
      } else if (this._options.readWrite) {
        transaction.begin = this._options;
      } else {
        transaction.singleUse = this._options;
      }

      if (
        !this.id &&
        this._options.readWrite &&
        (this.session.parent as Database).isMuxEnabledForRW_
      ) {
        this._setPreviousTransactionId(transaction);
      }
      delete query.gaxOptions;
      delete query.json;
      delete query.jsonOptions;
      delete query.maxResumeRetries;
      delete query.requestOptions;
      delete query.types;
      delete query.directedReadOptions;
      delete query.columnsMetadata;

      reqOpts = Object.assign(query, {
        session: this.session.formattedName_!,
        seqno: this._seqno++,
        requestOptions: this.configureTagOptions(
          typeof transaction.singleUse !== 'undefined',
          this.requestOptions?.transactionTag ?? undefined,
          requestOptions,
        ),
        directedReadOptions: directedReadOptions,
        transaction,
        params,
        paramTypes,
      });
    };

    const headers = this.commonHeaders_;
    if (
      this._getSpanner().routeToLeaderEnabled &&
      (this._options.readWrite !== undefined ||
        this._options.partitionedDml !== undefined)
    ) {
      addLeaderAwareRoutingHeader(headers);
    }

    const traceConfig: traceConfig = {
      transactionTag: this.requestOptions?.transactionTag,
      requestTag: requestOptions?.requestTag,
      ...query,
      ...this._traceConfig,
    };
    return startTrace('Snapshot.runStream', traceConfig, span => {
      let attempt = 0;
      const database = this.session.parent as Database;
      const nthRequest = nextNthRequest(database);
      const makeRequest = (resumeToken?: ResumeToken): Readable => {
        attempt++;

        if (!resumeToken) {
          if (attempt === 1) {
            span.addEvent('Starting stream');
          } else {
            span.addEvent('Re-attempting start stream', {attempt: attempt});
          }
        } else {
          span.addEvent('Resuming stream', {
            resume_token: resumeToken!.toString(),
            attempt: attempt,
          });
        }

        if (!reqOpts || (this.id && !reqOpts.transaction.id)) {
          try {
            sanitizeRequest();
          } catch (e) {
            const errorStream = new PassThrough();
            setSpanErrorAndException(span, e as Error);
            span.end();
            setImmediate(() => errorStream.destroy(e as Error));
            return errorStream;
          }
        }

        return this.requestStream({
          client: 'SpannerClient',
          method: 'executeStreamingSql',
          reqOpts: Object.assign({}, reqOpts, {resumeToken}),
          gaxOpts: gaxOptions,
          headers: injectRequestIDIntoHeaders(
            headers,
            this.session,
            nthRequest,
            attempt,
          ),
        });
      };

      const resultStream = partialResultStream(
        this._wrapWithIdWaiter(makeRequest),
        {
          json,
          jsonOptions,
          maxResumeRetries,
          columnsMetadata,
          gaxOptions,
        },
      )
        .on('response', response => {
          this._updatePrecommitToken(response);
          if (response.metadata && response.metadata!.transaction && !this.id) {
            this._update(response.metadata!.transaction, span);
          }
        })
        .on('error', err => {
          setSpanError(span, err as Error);
          const wasAborted = isErrorAborted(err);
          if (!this.id && this._useInRunner && !wasAborted) {
            span.addEvent('Stream broken. Safe to retry');
            // TODO: resolve https://github.com/googleapis/nodejs-spanner/issues/2170
            void this.begin();
          } else {
            if (wasAborted) {
              span.addEvent('Stream broken. Not safe to retry', {
                'transaction.id': this.id?.toString(),
              });
            }
          }
          span.end();
        })
        .on('end', err => {
          if (err) {
            setSpanError(span, err as Error);
          }
          span.end();
        });

      if (resultStream instanceof Stream) {
        finished(resultStream, err => {
          if (err) {
            setSpanError(span, err);
          }
          span.end();
        });
      }

      return resultStream;
    });
  }

  /**
   *
   * @private
   */
  configureTagOptions(
    singleUse?: boolean,
    transactionTag?: string,
    requestOptions = {},
  ): IRequestOptions | null {
    if (!singleUse && transactionTag) {
      (requestOptions as IRequestOptions).transactionTag = transactionTag;
    }

    return requestOptions!;
  }

  /**
   * Transforms convenience options `keys` and `ranges` into a KeySet object.
   *
   * @private
   * @static
   *
   * @param {ReadRequest} request The read request.
   * @returns {object}
   */
  static encodeKeySet(request: ReadRequest): spannerClient.spanner.v1.IKeySet {
    const keySet: spannerClient.spanner.v1.IKeySet = request.keySet || {};

    if (request.keys) {
      keySet.keys = toArray(request.keys as string[]).map(
        codec.convertToListValue,
      );
    }

    if (request.ranges) {
      keySet.ranges = toArray(request.ranges).map(range => {
        const encodedRange: spannerClient.spanner.v1.IKeyRange = {};

        Object.keys(range).forEach(bound => {
          encodedRange[bound] = codec.convertToListValue(range[bound]);
        });

        return encodedRange;
      });
    }

    if (isEmpty(keySet)) {
      keySet.all = true;
    }

    return keySet;
  }

  /**
   * Formats timestamp options into proto format.
   *
   * @private
   * @static
   *
   * @param {TimestampBounds} options The user supplied options.
   * @returns {object}
   */
  static encodeTimestampBounds(
    options: TimestampBounds,
  ): spannerClient.spanner.v1.TransactionOptions.IReadOnly {
    const readOnly: spannerClient.spanner.v1.TransactionOptions.IReadOnly = {};
    const {returnReadTimestamp = true} = options;

    if (options.minReadTimestamp instanceof PreciseDate) {
      readOnly.minReadTimestamp = (
        options.minReadTimestamp as PreciseDate
      ).toStruct();
    }

    if (options.readTimestamp instanceof PreciseDate) {
      readOnly.readTimestamp = (
        options.readTimestamp as PreciseDate
      ).toStruct();
    }

    if (typeof options.maxStaleness === 'number') {
      readOnly.maxStaleness = codec.convertMsToProtoTimestamp(
        options.maxStaleness as number,
      );
    }

    if (typeof options.exactStaleness === 'number') {
      readOnly.exactStaleness = codec.convertMsToProtoTimestamp(
        options.exactStaleness as number,
      );
    }

    // If we didn't detect a convenience format, we'll just assume that
    // they passed in a protobuf timestamp.
    if (isEmpty(readOnly)) {
      Object.assign(readOnly, options);
    }

    readOnly.returnReadTimestamp = returnReadTimestamp;
    return readOnly;
  }

  /**
   * Encodes convenience options `param` and `types` into the proto formatted.
   *
   * @private
   * @static
   *
   * @param {ExecuteSqlRequest} request The SQL request.
   * @returns {object}
   */
  static encodeParams(request: ExecuteSqlRequest) {
    const typeMap = request.types || {};

    const params: p.IStruct = {fields: request.params?.fields || {}};
    const paramTypes: {[field: string]: spannerClient.spanner.v1.Type} =
      request.paramTypes || {};

    if (request.params && !request.params.fields) {
      const fields = {};

      Object.keys(request.params).forEach(param => {
        const value = request.params![param];

        if (!typeMap[param]) {
          typeMap[param] = codec.getType(value);
        }
        fields[param] = codec.encode(value);
      });

      params.fields = fields;
    }

    if (!isEmpty(typeMap)) {
      Object.keys(typeMap).forEach(param => {
        const type = typeMap[param];
        if (process.env['SPANNER_ENABLE_UUID_AS_UNTYPED'] === 'true') {
          const typeObject = codec.createTypeObject(type);
          if (
            (type.child &&
              typeObject.code === 'ARRAY' &&
              typeObject.arrayElementType?.code !== 'TYPE_CODE_UNSPECIFIED') ||
            (!type.child && typeObject.code !== 'TYPE_CODE_UNSPECIFIED')
          ) {
            paramTypes[param] = typeObject;
          }
        } else {
          paramTypes[param] = codec.createTypeObject(type);
        }
      });
    }

    return {params, paramTypes};
  }

  /**
   * Get directed read options
   * @private
   * @param {google.spanner.v1.IDirectedReadOptions} directedReadOptions Request directedReadOptions object.
   */
  protected _getDirectedReadOptions(
    directedReadOptions:
      | google.spanner.v1.IDirectedReadOptions
      | null
      | undefined,
  ) {
    if (
      !directedReadOptions &&
      this._getSpanner().directedReadOptions &&
      this._options.readOnly
    ) {
      return this._getSpanner().directedReadOptions;
    }

    return directedReadOptions;
  }

  /**
   * Update transaction properties from the response.
   *
   * @private
   *
   * @param {spannerClient.spanner.v1.ITransaction} resp Response object.
   */
  protected _update(
    resp: spannerClient.spanner.v1.ITransaction,
    span: Span,
  ): void {
    const {id, readTimestamp} = resp;

    this.id = id!;
    this.metadata = resp;

    span.addEvent('Transaction Creation Done', {id: this.id.toString()});

    if (readTimestamp) {
      this.readTimestampProto = readTimestamp;
      this.readTimestamp = new PreciseDate(readTimestamp as DateStruct);
    }
    this._releaseWaitingRequests();
  }

  /**
   * Wrap `makeRequest` function with the lock to make sure the inline begin
   * transaction can happen only once.
   *
   * @param makeRequest
   * @private
   */
  private _wrapWithIdWaiter(
    makeRequest: (resumeToken?: ResumeToken) => Readable,
  ): (resumeToken?: ResumeToken) => Readable {
    if (this.id || !this._options.readWrite) {
      return makeRequest;
    }
    if (!this._inlineBeginStarted) {
      this._inlineBeginStarted = true;
      return makeRequest;
    }

    // Queue subsequent requests.
    return (resumeToken?: ResumeToken): Readable => {
      const streamProxy = new Readable({
        read() {},
      });

      this._waitingRequests.push(() => {
        makeRequest(resumeToken)
          .on('data', chunk => streamProxy.emit('data', chunk))
          .on('error', err => streamProxy.emit('error', err))
          .on('end', () => streamProxy.emit('end'));
      });

      return streamProxy;
    };
  }

  _releaseWaitingRequests() {
    while (this._waitingRequests.length > 0) {
      const request = this._waitingRequests.shift();
      request?.();
    }
  }

  /**
   * Gets the Spanner object
   *
   * @private
   *
   * @returns {Spanner}
   */
  protected _getSpanner(): Spanner {
    return this.session.parent.parent.parent as Spanner;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Snapshot, {
  exclude: ['configureTagOptions', 'end'],
});

/**
 * Never use DML class directly. Instead, it should be extended upon
 * if a class requires DML capabilities.
 *
 * @private
 * @class
 */
export class Dml extends Snapshot {
  /**
   * @typedef {array} RunUpdateResponse
   * @property {number} 0 Affected row count.
   */
  /**
   * @callback RunUpdateCallback
   * @param {?Error} err Request error, if any.
   * @param {number} rowCount Affected row count.
   */
  /**
   * Execute a DML statement and get the affected row count.
   *
   * @private
   *
   * @see {@link Transaction#run}
   *
   * @param {string|object} query A DML statement or
   *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *     object.
   * @param {object} [query.params] A map of parameter name to values.
   * @param {object} [query.types] A map of parameter types.
   * @param {RunUpdateCallback} [callback] Callback function.
   * @returns {Promise<RunUpdateResponse>}
   */
  runUpdate(query: string | ExecuteSqlRequest): Promise<RunUpdateResponse>;
  runUpdate(
    query: string | ExecuteSqlRequest,
    callback: RunUpdateCallback,
  ): void;
  runUpdate(
    query: string | ExecuteSqlRequest,
    callback?: RunUpdateCallback,
  ): void | Promise<RunUpdateResponse> {
    if (typeof query === 'string') {
      query = {sql: query} as ExecuteSqlRequest;
    }

    return startTrace(
      'Dml.runUpdate',
      {
        ...query,
        ...this._traceConfig,
        transactionTag: this.requestOptions?.transactionTag,
        requestTag: query.requestOptions?.requestTag,
      },
      span => {
        this.run(
          query,
          (
            err: null | grpc.ServiceError,
            rows: Rows,
            stats: spannerClient.spanner.v1.ResultSetStats,
          ) => {
            let rowCount = 0;

            if (stats && stats.rowCount) {
              rowCount = Math.floor(stats[stats.rowCount] as number);
            }

            if (err) {
              setSpanError(span, err);
            }

            span.end();
            callback!(err, rowCount);
          },
        );
      },
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Dml);

/**
 * This type of transaction is the only way to write data into Cloud Spanner.
 * These transactions rely on pessimistic locking and, if necessary, two-phase
 * commit. Locking read-write transactions may abort, requiring the application
 * to retry.
 *
 * Calling either {@link Transaction#commit} or {@link Transaction#rollback}
 * signals that the transaction is finished and no further requests will be
 * made. If for some reason you decide not to call one of the aformentioned
 * methods, call {@link Transaction#end} to release the underlying
 * {@link Session}.
 *
 * Running a transaction via {@link Database#runTransaction} or
 * {@link Database#runTransactionAsync} automatically re-runs the
 * transaction on `ABORTED` errors.
 *
 * {@link Database#getTransaction} returns a plain {@link Transaction}
 * object, requiring the user to retry manually.
 *
 * @class
 * @extends Snapshot
 *
 * @param {Session} session The parent Session object.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 *
 * database.runTransaction(function(err, transaction) {
 *   // The `transaction` object is ready for use.
 * });
 *
 * ```
 * @example To manually control retrying the transaction, use the
 * `getTransaction` method.
 * ```
 * database.getTransaction(function(err, transaction) {
 *   // The `transaction` object is ready for use.
 * });
 * ```
 */
export class Transaction extends Dml {
  commitTimestamp?: PreciseDate;
  commitTimestampProto?: spannerClient.protobuf.ITimestamp;
  private _queuedMutations: spannerClient.spanner.v1.Mutation[];
  private _retryCommit: Boolean;

  /**
   * Timestamp at which the transaction was committed. Will be populated once
   * {@link Transaction#commit} is called.
   *
   * @name Transaction#commitTimestamp
   * @type {?external:PreciseDate}
   */
  /**
   * The protobuf version of {@link Transaction#commitTimestamp}. This is useful
   * if you require microsecond precision.
   *
   * @name Transaction#commitTimestampProto
   * @type {?google.protobuf.Timestamp}
   */
  /**
   * Execute a DML statement and get the affected row count.
   *
   * @name Transaction#runUpdate
   *
   * @see {@link Transaction#run}
   *
   * @param {string|object} query A DML statement or
   *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *     object.
   * @param {object} [query.params] A map of parameter name to values.
   * @param {object} [query.types] A map of parameter types.
   * @param {RunUpdateCallback} [callback] Callback function.
   * @returns {Promise<RunUpdateResponse>}
   *
   * @example
   * ```
   * const query = 'UPDATE Account SET Balance = 1000 WHERE Key = 1';
   *
   * transaction.runUpdate(query, (err, rowCount) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   * ```
   */
  constructor(
    session: Session,
    options = {} as spannerClient.spanner.v1.TransactionOptions.ReadWrite,
    queryOptions?: IQueryOptions,
    requestOptions?: Pick<IRequestOptions, 'transactionTag'>,
  ) {
    super(session, undefined, queryOptions);

    this._queuedMutations = [];
    this._options = {readWrite: options};
    this._options.isolationLevel = IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED;
    this.requestOptions = requestOptions;
    this._retryCommit = false;
  }

  /**
   * @typedef {error} BatchUpdateError
   * @property {number} code gRPC status code.
   * @property {?object} metadata gRPC metadata.
   * @property {number[]} rowCounts The affected row counts for any DML
   *     statements that were executed successfully before this error occurred.
   */
  /**
   * @typedef {object} BatchUpdateOptions
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @property {google.spanner.v1.IRequestOptions} [requestOptions] The request options to include
   *     with the commit request.
   */
  /**
   * @typedef {array} BatchUpdateResponse
   * @property {number[]} 0 Affected row counts.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback BatchUpdateCallback
   * @param {?BatchUpdateError} err Request error, if any.
   * @param {number[]} rowCounts Affected row counts.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Execute a series of DML statements and get the affected row counts.
   *
   * If any of the DML statements fail, the returned error will contain a list
   * of results for all successfully executed statements.
   *
   * @param {string[]|object[]} query A DML statement or
   *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *     object.
   * @param {object} [query.params] A map of parameter name to values.
   * @param {object} [query.types] A map of parameter types.
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {BatchUpdateOptions} [options] Options for configuring the request.
   * @param {RunUpdateCallback} [callback] Callback function.
   * @returns {Promise<RunUpdateResponse>}
   *
   * @example
   * ```
   * const queries = [
   *   {
   *     sql: 'INSERT INTO MyTable (Key, Value) VALUES (@key, @value)',
   *     params: {key: 'my-key', value: 'my-value'},
   *   },
   *   {
   *     sql: 'UPDATE MyTable t SET t.Value = @value WHERE t.KEY = @key',
   *     params: {key: 'my-other-key', value: 'my-other-value'}
   *   }
   * ];
   *
   * transaction.batchUpdate(queries, (err, rowCounts, apiResponse) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   *
   * ```
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * const [rowCounts, apiResponse] = await transaction.batchUpdate(queries);
   * ```
   */
  batchUpdate(
    queries: Array<string | Statement>,
    options?: BatchUpdateOptions | CallOptions,
  ): Promise<BatchUpdateResponse>;
  batchUpdate(
    queries: Array<string | Statement>,
    callback: BatchUpdateCallback,
  ): void;
  batchUpdate(
    queries: Array<string | Statement>,
    options: BatchUpdateOptions | CallOptions,
    callback: BatchUpdateCallback,
  ): void;
  batchUpdate(
    queries: Array<string | Statement>,
    optionsOrCallback?: BatchUpdateOptions | CallOptions | BatchUpdateCallback,
    cb?: BatchUpdateCallback,
  ): Promise<BatchUpdateResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOpts =
      'gaxOptions' in options
        ? (options as BatchUpdateOptions).gaxOptions
        : options;

    if (!Array.isArray(queries) || !queries.length) {
      const rowCounts: number[] = [];
      const error = new Error('batchUpdate requires at least 1 DML statement.');
      const batchError: BatchUpdateError = Object.assign(error, {
        code: 3, // invalid argument
        rowCounts,
      }) as BatchUpdateError;
      callback!(batchError, rowCounts);
      return;
    }

    const statements: spannerClient.spanner.v1.ExecuteBatchDmlRequest.IStatement[] =
      queries.map(query => {
        if (typeof query === 'string') {
          return {sql: query};
        }
        const {sql} = query;
        const {params, paramTypes} = Snapshot.encodeParams(query);
        return {sql, params, paramTypes};
      });

    const transaction: spannerClient.spanner.v1.ITransactionSelector = {};
    if (this.id) {
      transaction.id = this.id as Uint8Array;
    } else {
      transaction.begin = this._options;
    }

    if (
      !this.id &&
      this._options.readWrite &&
      (this.session.parent as Database).isMuxEnabledForRW_
    ) {
      this._setPreviousTransactionId(transaction);
    }

    const requestOptionsWithTag = this.configureTagOptions(
      false,
      this.requestOptions?.transactionTag ?? undefined,
      (options as BatchUpdateOptions).requestOptions,
    );
    const reqOpts: spannerClient.spanner.v1.ExecuteBatchDmlRequest = {
      session: this.session.formattedName_!,
      requestOptions: requestOptionsWithTag,
      transaction,
      seqno: this._seqno++,
      statements,
    } as spannerClient.spanner.v1.ExecuteBatchDmlRequest;

    const database = this.session.parent as Database;
    const headers = injectRequestIDIntoHeaders(
      this.commonHeaders_,
      this.session,
      nextNthRequest(database),
      1,
    );
    if (this._getSpanner().routeToLeaderEnabled) {
      addLeaderAwareRoutingHeader(headers);
    }

    const traceConfig: traceConfig = {
      ...this._traceConfig,
      transactionTag: requestOptionsWithTag?.transactionTag,
      requestTag: (options as BatchUpdateOptions)?.requestOptions?.requestTag,
    };
    return startTrace('Transaction.batchUpdate', traceConfig, span => {
      this.request(
        {
          client: 'SpannerClient',
          method: 'executeBatchDml',
          reqOpts,
          gaxOpts,
          headers: headers,
        },
        (
          err: null | grpc.ServiceError,
          resp: spannerClient.spanner.v1.ExecuteBatchDmlResponse,
        ) => {
          let batchUpdateError: BatchUpdateError;

          if (err) {
            const rowCounts: number[] = [];
            batchUpdateError = Object.assign(err, {rowCounts});
            setSpanError(span, batchUpdateError);
            span.end();
            callback!(batchUpdateError, rowCounts, resp);
            return;
          }

          this._updatePrecommitToken(resp);

          const {resultSets, status} = resp;
          for (const resultSet of resultSets) {
            if (!this.id && resultSet.metadata?.transaction) {
              this._update(resultSet.metadata.transaction, span);
            }
          }
          const rowCounts: number[] = resultSets.map(({stats}) => {
            return (
              (stats &&
                Number(
                  stats[
                    (stats as spannerClient.spanner.v1.ResultSetStats).rowCount!
                  ],
                )) ||
              0
            );
          });

          if (status && status.code !== 0) {
            const error = new Error(status.message!);
            batchUpdateError = Object.assign(error, {
              code: status.code,
              metadata: Transaction.extractKnownMetadata(status.details!),
              rowCounts,
            }) as BatchUpdateError;
            setSpanError(span, batchUpdateError);
          }

          span.end();
          callback!(batchUpdateError!, rowCounts, resp);
        },
      );
    });
  }

  private static extractKnownMetadata(
    details: IAny[],
  ): grpc.Metadata | undefined {
    if (details && typeof details[Symbol.iterator] === 'function') {
      const metadata = new grpc.Metadata();
      for (const detail of details) {
        if (detail.type_url === RETRY_INFO_TYPE && detail.value) {
          metadata.add(RETRY_INFO_BIN, detail.value as string);
        }
      }
      return metadata;
    }
    return undefined;
  }

  /**
   * This method updates the _queuedMutations property of the transaction.
   *
   * @public
   *
   * @param {spannerClient.spanner.v1.Mutation[]} [mutation]
   */
  setQueuedMutations(mutation: spannerClient.spanner.v1.Mutation[]): void {
    this._queuedMutations = mutation;
  }

  /**
   * @typedef {object} CommitOptions
   * @property {google.spanner.v1.IRequestOptions} requestOptions The request options to include
   *     with the commit request.
   * @property {boolean} returnCommitStats Include statistics related to the
   *     transaction in the {@link CommitResponse}.
   * @property {spannerClient.proto.IDuration} maxCommitDelay Maximum amount
   *     of delay the commit is willing to incur in order to improve
   *     throughput. Value should be between 0ms and 500ms.
   * @property {object} [gaxOptions] The request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {object} CommitResponse
   * @property {google.protobuf.Timestamp} commitTimestamp The transaction
   *     commit timestamp.
   * @property {google.spanner.v1.CommitResponse.ICommitStats|null} commitStats
   *     The statistics about this commit. Only populated if requested in
   *     {@link CommitOptions}.
   */
  /**
   * @typedef {array} CommitPromiseResponse
   * @property {CommitResponse} 0 The commit response.
   */
  /**
   * @callback CommitCallback
   * @param {?Error} error Request error, if any.
   * @param {CommitResponse} apiResponse The full API response.
   */
  /**
   * Commit the transaction.
   *
   * Wrapper around {@link v1.SpannerClient#commit}.
   *
   * @see {@link v1.SpannerClient#commit}
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {CommitOptions} [options] Options for configuring the request.
   * @param {CommitCallback} [callback] Callback function.
   * @returns {Promise<CommitPromiseResponse>}
   *
   * @example
   * ```
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue a mutation (note that there is no callback passed to `insert`).
   *   transaction.insert('Singers', {
   *     SingerId: 'Id3b',
   *     Name: 'Joe West'
   *   });
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err, apiResponse) {
   *     if (!err) {
   *       // Get the commit timestamp on successful commits.
   *       const {commitTimestamp} = apiResponse;
   *     }
   *   });
   * });
   * ```
   */
  commit(options?: CommitOptions | CallOptions): Promise<CommitResponse>;
  commit(callback: CommitCallback): void;
  commit(options: CommitOptions | CallOptions, callback: CommitCallback): void;
  commit(
    optionsOrCallback?: CommitOptions | CallOptions | CommitCallback,
    cb?: CommitCallback,
  ): void | Promise<CommitResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOpts =
      'gaxOptions' in options ? (options as CommitOptions).gaxOptions : options;

    const mutations = this._queuedMutations;
    const session = this.session.formattedName_!;
    const precommitToken = this._latestPreCommitToken;
    const requestOptions = (options as CommitOptions).requestOptions;
    const reqOpts: CommitRequest = {
      mutations,
      session,
      requestOptions,
      precommitToken,
    };

    return startTrace(
      'Transaction.commit',
      {
        transactionTag: this.requestOptions?.transactionTag,
        ...this._traceConfig,
      },
      span => {
        if (this.id) {
          reqOpts.transactionId = this.id as Uint8Array;
        } else if (!this._useInRunner) {
          reqOpts.singleUseTransaction = this._options;
        } else {
          if ((this.session.parent as Database).isMuxEnabledForRW_) {
            this._setMutationKey(mutations);
          }
          this.begin().then(
            () => {
              this.commit(options, (err, resp) => {
                if (err) {
                  setSpanError(span, err);
                }
                span.end();
                callback(err, resp);
              });
            },
            err => {
              setSpanError(span, err);
              span.end();
              callback(err, null);
            },
          );
          return;
        }

        if (
          'returnCommitStats' in options &&
          (options as CommitOptions).returnCommitStats
        ) {
          reqOpts.returnCommitStats = (
            options as CommitOptions
          ).returnCommitStats;
        }
        if (
          'maxCommitDelay' in options &&
          (options as CommitOptions).maxCommitDelay
        ) {
          reqOpts.maxCommitDelay = (options as CommitOptions).maxCommitDelay;
        }
        reqOpts.requestOptions = Object.assign(
          requestOptions || {},
          this.requestOptions,
        );

        const headers = this.commonHeaders_;
        if (this._getSpanner().routeToLeaderEnabled) {
          addLeaderAwareRoutingHeader(headers);
        }

        span.addEvent('Starting Commit');

        const database = this.session.parent as Database;
        this.request(
          {
            client: 'SpannerClient',
            method: 'commit',
            reqOpts,
            gaxOpts: gaxOpts,
            headers: injectRequestIDIntoHeaders(
              headers,
              this.session,
              nextNthRequest(database),
              1,
            ),
          },
          (
            err: null | Error,
            resp: spannerClient.spanner.v1.ICommitResponse,
          ) => {
            if (
              resp &&
              'MultiplexedSessionRetry' in resp &&
              !this._retryCommit
            ) {
              this._retryCommit = true;
              this._updatePrecommitToken(resp);
              return this.commit(options, callback);
            }

            this.end();

            if (err) {
              span.addEvent('Commit failed');
              setSpanError(span, err);
            } else {
              span.addEvent('Commit Done');
            }

            if (resp && resp.commitTimestamp) {
              this.commitTimestampProto = resp.commitTimestamp;
              this.commitTimestamp = new PreciseDate(
                resp.commitTimestamp as DateStruct,
              );
            }
            err = Transaction.decorateCommitError(
              err as ServiceError,
              mutations,
            );

            span.end();
            callback!(err as ServiceError | null, resp);
          },
        );
      },
    );
  }

  /**
   * Decorates an error returned by a commit with additional information for
   * specific known errors.
   * @param err the error to check and decorate with additional information if possible
   * @param mutations the mutations included in the commit request
   * @private
   */
  private static decorateCommitError(
    err: null | ServiceError,
    mutations: spannerClient.spanner.v1.Mutation[],
  ): null | Error {
    if (!err) {
      return err;
    }
    if (err.code === Status.FAILED_PRECONDITION) {
      const mismatchErr = Transaction.decoratePossibleJsonMismatchError(
        err,
        mutations,
      );
      if (mismatchErr) {
        return mismatchErr;
      }
    }
    return err;
  }

  /**
   * Decorates an error returned by a commit with additional information if the
   * error was returned because the application tried to insert an array of
   * objects into a JSON column. An array of objects will by default be encoded
   * as ARRAY<JSON>, but can also be interpreted as JSON. An application must
   * specify a top-level array of objects that should be inserted into a JSON
   * column as a string instead of as an array of objects.
   * @param err the error returned by the commit RPC
   * @param mutations the mutations included in the commit request
   * @private
   */
  private static decoratePossibleJsonMismatchError(
    err: ServiceError,
    mutations: spannerClient.spanner.v1.Mutation[],
  ): null | ServiceError {
    const errorMessage =
      /Invalid value for column (?<column>.+) in table (?<table>.+): Expected JSON./;
    const found = err.message && err.message.match(errorMessage);
    if (found && found.groups) {
      const table = found.groups.table;
      const column = found.groups.column;
      for (const mutation of mutations) {
        const write =
          mutation.insert ||
          mutation.update ||
          mutation.insertOrUpdate ||
          mutation.replace;
        if (write && write.table === table) {
          const index = write.columns?.indexOf(column);
          if (index && index > -1 && write.values) {
            for (const row of write.values) {
              if (
                row.values?.length &&
                row.values.length > index &&
                row.values[index].listValue
              ) {
                // If the value is an array, the client library also encoded it as
                // an array. Inserting an array into a JSON column is not possible,
                // although if it is encoded as a string containing a top-level JSON
                // array it will work.
                const additionalMessage =
                  'The value is an array. Convert the value to a JSON string containing an array instead in order to insert it into a JSON column. Example: `[{"key": "value 1"}, {"key": "value 2"}]` instead of [{key: "value 1"}, {key: "value 2"}]';
                return {
                  code: err.code,
                  details: `${err.details} ${additionalMessage}`,
                  message: `${err.message} ${additionalMessage}`,
                  metadata: err.metadata,
                  name: err.name,
                  stack: err.stack,
                };
              }
            }
          }
        }
      }
    }
    return null;
  }

  /**
   * Delete rows from a table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {string} table The name of the table.
   * @param {array} keys The keys for the rows to delete. If using a
   *     composite key, provide an array within this array. See the example
   * below.
   *
   * @example
   * ```
   * const keys = ['Id1', 'Id2', 'Id3'];
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue this mutation until later calling `commit`.
   *   // Note that a callback is not passed to `deleteRows`.
   *   transaction.deleteRows('Singers', keys);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The rows were deleted successfully.
   *     }
   *   });
   * });
   *
   * ```
   * @example Provide an array for `keys` to delete rows with a
   * composite key.
   * ```
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
   * ```
   */
  deleteRows(table: string, keys: Key[]): void {
    this._queuedMutations.push(buildDeleteMutation(table, keys));
  }

  /**
   * Insert rows of data into this table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {string} table The name of the table.
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   *
   * @example
   * ```
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Eddie Wilson'
   * };
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue this mutation until later calling `commit`.
   *   // Note that a callback is not passed to `insert`.
   *   transaction.insert('Singers', row);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The row was inserted successfully.
   *     }
   *   });
   * });
   *
   * ```
   * @example Multiple rows can be inserted at once.
   * ```
   * const row2 = {
   *   SingerId: 'Id3b',
   *   Name: 'Joe West'
   * };
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue multiple mutations until later calling `commit`.
   *   // Note that a callback is not passed to `insert`.
   *   transaction.insert('Singers', [
   *     row,
   *     row2
   *   ]);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The rows were inserted successfully.
   *     }
   *   });
   * });
   * ```
   */
  insert(table: string, rows: object | object[]): void {
    this._mutate('insert', table, rows);
  }

  /**
   * Replace rows of data within a table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {string} table The table to read from.
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   *
   * @example
   * ```
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue this mutation until later calling `commit`.
   *   // Note that a callback is not passed to `replace`.
   *   transaction.replace('Singers', row);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The row was replaced successfully.
   *     }
   *   });
   * });
   * ```
   */
  replace(table: string, rows: object | object[]): void {
    this._mutate('replace', table, rows);
  }

  /**
   * Roll back a transaction, releasing any locks it holds. It is a good idea to
   * call this for any transaction that includes one or more queries that you
   * decide not to commit.
   *
   * Wrapper around {@link v1.SpannerClient#rollback}.
   *
   * @see {@link v1.SpannerClient#rollback}
   * @see [Rollback API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Rollback)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {BasicCallback} [callback] Callback function.
   * @returns {Promise<BasicResponse>}
   *
   * @example
   * ```
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.rollback(function(err) {
   *     if (!err) {
   *       // Transaction rolled back successfully.
   *     }
   *   });
   * });
   * ```
   */
  rollback(gaxOptions?: CallOptions): Promise<void>;
  rollback(callback: spannerClient.spanner.v1.Spanner.RollbackCallback): void;
  rollback(
    gaxOptions: CallOptions,
    callback: spannerClient.spanner.v1.Spanner.RollbackCallback,
  ): void;
  rollback(
    gaxOptionsOrCallback?:
      | CallOptions
      | spannerClient.spanner.v1.Spanner.RollbackCallback,
    cb?: spannerClient.spanner.v1.Spanner.RollbackCallback,
  ): void | Promise<void> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    return startTrace('Transaction.rollback', this._traceConfig, span => {
      if (!this.id) {
        span.addEvent('Transaction ID is unknown, nothing to rollback.');
        span.end();
        callback(null);
        return;
      }

      const session = this.session.formattedName_!;
      const transactionId = this.id;
      const reqOpts: spannerClient.spanner.v1.IRollbackRequest = {
        session,
        transactionId,
      };

      const headers = this.commonHeaders_;
      if (this._getSpanner().routeToLeaderEnabled) {
        addLeaderAwareRoutingHeader(headers);
      }

      this.request(
        {
          client: 'SpannerClient',
          method: 'rollback',
          reqOpts,
          gaxOpts,
          headers: headers,
        },
        (err: null | ServiceError) => {
          if (err) {
            setSpanError(span, err);
          }
          span.end();
          this.end();
          callback!(err);
        },
      );
    });
  }

  /**
   * Update rows of data within a table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {string} table The table to read from.
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   *
   * @example
   * ```
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue this mutation until later calling `commit`.
   *   // Note that a callback is not passed to `update`.
   *   transaction.update('Singers', row);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The row was updated successfully.
   *     }
   *   });
   * });
   * ```
   */
  update(table: string, rows: object | object[]): void {
    this._mutate('update', table, rows);
  }

  /**
   * Insert or update rows of data within a table.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @param {string} table The table to read from.
   * @param {object|object[]} rows A map of names to values of data to insert
   *     into this table.
   *
   * @example
   * ```
   * const row = {
   *   SingerId: 'Id3',
   *   Name: 'Joe West'
   * };
   *
   * database.runTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Queue this mutation until later calling `commit`.
   *   // Note that a callback is not passed to `upsert`.
   *   transaction.upsert('Singers', row);
   *
   *   // Commit the transaction.
   *   transaction.commit(function(err) {
   *     if (!err) {
   *       // The row was updated or inserted successfully.
   *     }
   *   });
   * });
   * ```
   */
  upsert(table: string, rows: object | object[]): void {
    this._mutate('insertOrUpdate', table, rows);
  }

  /**
   * Formats the mutations.
   *
   * @see [Commit API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.Commit)
   *
   * @private
   *
   * @param {string} method CRUD method (insert, update, etc.).
   * @param {string} table Table to perform mutations in.
   * @param {object} rows Hash of key value pairs.
   */
  private _mutate(
    method: string,
    table: string,
    keyVals: object | object[],
  ): void {
    this._queuedMutations.push(buildMutation(method, table, keyVals));
  }

  /**
   * Takes a list of rows and returns all unique column names.
   *
   * @private
   *
   * @param {object[]} rows The rows.
   * @returns {string[]}
   */
  static getUniqueKeys(rows: object[]): string[] {
    const allKeys: string[] = [];
    rows.forEach(row => allKeys.push(...Object.keys(row)));
    const unique = new Set(allKeys);
    return Array.from(unique).sort();
  }

  /**
   * Mark transaction as started from the runner.
   */
  useInRunner(): void {
    this._useInRunner = true;
  }

  /**
   * Use optimistic concurrency control for the transaction.
   *
   * In this concurrency mode, operations during the execution phase, i.e.,
   * reads and queries, are performed without acquiring locks, and transactional
   * consistency is ensured by running a validation process in the commit phase
   * (when any needed locks are acquired). The validation process succeeds only
   * if there are no conflicting committed transactions (that committed
   * mutations to the read data at a commit timestamp after the read timestamp).
   *
   * @deprecated Set readLockMode through setReadWriteTransactionOptions instead.
   */
  useOptimisticLock(): void {
    this._options.readWrite!.readLockMode = ReadLockMode.OPTIMISTIC;
  }

  /**
   * Use option excludeTxnFromChangeStreams to exclude read/write transactions
   * from being tracked in change streams.
   *
   * Enabling this options to true will effectively disable change stream tracking
   * for a specified transaction, allowing read/write transaction to operate without being
   * included in change streams.
   */
  excludeTxnFromChangeStreams(): void {
    this._options.excludeTxnFromChangeStreams = true;
  }

  setReadWriteTransactionOptions(options: RunTransactionOptions) {
    /**
     * Set option excludeTxnFromChangeStreams=true to exclude read/write transactions
     * from being tracked in change streams.
     */
    if (options?.excludeTxnFromChangeStreams) {
      this._options.excludeTxnFromChangeStreams = true;
    }
    /**
     * Set isolation level.
     */
    this._options.isolationLevel = options?.isolationLevel
      ? options?.isolationLevel
      : this._getSpanner().defaultTransactionOptions.isolationLevel;

    /**
     * Set read lock mode.
     */
    this._options.readWrite!.readLockMode = options?.readLockMode
      ? options?.readLockMode
      : this._getSpanner().defaultTransactionOptions.readLockMode;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Transaction, {
  exclude: ['deleteRows', 'insert', 'replace', 'update', 'upsert'],
});

/**
 * Builds an array of protobuf Mutations from the given row(s).
 *
 * @param {string} method - CRUD method (insert, update, etc.).
 * @param {string} table - Table to perform mutations in.
 * @param {object | object[]} keyVals - Hash of key-value pairs representing the rows.
 * @returns {spannerClient.spanner.v1.Mutation} - The formatted mutation.
 * @throws {GoogleError} - If a row does not contain the correct number of columns.
 */
function buildMutation(
  method: string,
  table: string,
  keyVals: object | object[],
): spannerClient.spanner.v1.Mutation {
  const rows: object[] = toArray(keyVals);
  const columns = Transaction.getUniqueKeys(rows);

  const values = rows.map((row, index) => {
    const keys = Object.keys(row);
    const missingColumns = columns.filter(column => !keys.includes(column));

    if (missingColumns.length > 0) {
      throw new GoogleError(
        [
          `Row at index ${index} does not contain the correct number of columns.`,
          `Missing columns: ${JSON.stringify(missingColumns)}`,
        ].join('\n\n'),
      );
    }

    const values = columns.map(column => row[column]);
    return codec.convertToListValue(values);
  });

  const mutation: spannerClient.spanner.v1.IMutation = {
    [method]: {table, columns, values},
  };
  return mutation as spannerClient.spanner.v1.Mutation;
}

/**
 * Builds a delete mutation.
 *
 * @param {string} table - The name of the table.
 * @param {Key[]} keys - The keys for the rows to delete.
 * @returns {spannerClient.spanner.v1.Mutation} - The formatted delete mutation.
 */
function buildDeleteMutation(
  table: string,
  keys: Key[],
): spannerClient.spanner.v1.Mutation {
  const keySet: spannerClient.spanner.v1.IKeySet = {
    keys: toArray(keys).map(codec.convertToListValue),
  };
  const mutation: spannerClient.spanner.v1.IMutation = {
    delete: {table, keySet},
  };
  return mutation as spannerClient.spanner.v1.Mutation;
}

/**
 * MutationSet represent a set of changes to be applied atomically to a Cloud Spanner
 * database with a {@link Transaction}.
 * Mutations are used to insert, update, upsert(insert or update), replace, or
 * delete rows within tables.
 *
 * Mutations are added to a {@link Transaction} and are not executed until the
 * transaction is committed via {@link Transaction#commit}.
 *
 * If the transaction is rolled back or encounters an error, the mutations are
 * discarded.
 *
 * @example
 * ```
 * const {Spanner, Mutation} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 *
 * const mutations = new MutationSet();
 * mutations.insert('Singers', {SingerId: '123', FirstName: 'David'});
 * mutations.update('Singers', {SingerId: '123', FirstName: 'Marc'});
 *
 * try {
 *  database.writeAtLeastOnce(mutations, (err, res) => {
 *    console.log("RESPONSE: ", res);
 *  });
 * } catch(err) {
 *  console.log("ERROR: ", err);
 * }
 * ```
 */
export class MutationSet {
  /**
   * An array to store the mutations.
   */
  private _queuedMutations: spannerClient.spanner.v1.Mutation[];

  /**
   * Creates a new Mutation object.
   */
  constructor() {
    this._queuedMutations = [];
  }

  /**
   * Adds an insert operation to the mutation set.
   * @param {string} table. The name of the table to insert into.
   * @param {object|object[]} rows. A single row object or an array of row objects to insert.
   */
  insert(table: string, rows: object | object[]): void {
    this._queuedMutations.push(buildMutation('insert', table, rows));
  }

  /**
   * Adds an update operation to the mutation set.
   * @param {string} table. The name of the table to update.
   * @param {object|object[]} rows. A single row object or an array of row objects to update.
   * Each row object must contain the primary key values to indentify the row to update.
   */
  update(table: string, rows: object | object[]): void {
    this._queuedMutations.push(buildMutation('update', table, rows));
  }

  /**
   * Adds an upsert operation to the mutation set.
   * An upsert will insert a new row if it does not exist or update an existing row if it does.
   * @param {string} table. The name of the table to upsert.
   * @param {object|object[]} rows. A single row object or an array of row objects to upsert.
   */
  upsert(table: string, rows: object | object[]): void {
    this._queuedMutations.push(buildMutation('insertOrUpdate', table, rows));
  }

  /**
   * Adds a replace operation to the mutation set.
   * A replace operation deletes the existing row (if it exists) and inserts the new row.
   * @param {string} table. The name of the table to replace.
   * @param {object|object[]} rows. A single row object or an array of row objects to replace.
   */
  replace(table: string, rows: object | object[]): void {
    this._queuedMutations.push(buildMutation('replace', table, rows));
  }

  /**
   * Adds a deleteRows operation to the mutation set.
   * This operation deletes rows from the specified table based on their primary keys.
   * @param {string} table. The name of the table to deleteRows from.
   * @param {key[]} key. An array of key objects, each represeting the primary key of a row to delete.
   */
  deleteRows(table: string, keys: Key[]): void {
    this._queuedMutations.push(buildDeleteMutation(table, keys));
  }

  /**
   * Returns the internal representation of the queued mutations as a protobuf message.
   * @returns {spannerClient.spanner.v1.Mutation[]}. The protobuf message representing the mutations.
   */
  proto(): spannerClient.spanner.v1.Mutation[] {
    return this._queuedMutations;
  }
}

/**
 * A group of mutations to be committed together.
 * Related mutations should be placed in a group.
 *
 * For example, two mutations inserting rows with the same primary
 * key prefix in both parent and child tables are related.
 *
 * This object is created and returned from {@link Database#MutationGroup}.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 *
 * const mutationGroup = new MutationGroup();
 * mutationGroup.insert('Singers', {SingerId: '123', FirstName: 'David'});
 * mutationGroup.update('Singers', {SingerId: '123', FirstName: 'Marc'});
 *
 * database.batchWriteAtLeastOnce([mutationGroup], {})
 *    .on('error', console.error)
 *    .on('data', response => {
 *          console.log('response: ', response);
 *      })
 *     .on('end', () => {
 *          console.log('Request completed successfully');
 *      });
 * ```
 */
export class MutationGroup {
  private _proto: spannerClient.spanner.v1.BatchWriteRequest.MutationGroup;

  constructor() {
    this._proto =
      new spannerClient.spanner.v1.BatchWriteRequest.MutationGroup();
  }

  insert(table: string, rows: object | object[]): void {
    this._proto.mutations.push(buildMutation('insert', table, rows));
  }

  update(table: string, rows: object | object[]): void {
    this._proto.mutations.push(buildMutation('update', table, rows));
  }

  upsert(table: string, rows: object | object[]): void {
    this._proto.mutations.push(buildMutation('insertOrUpdate', table, rows));
  }

  replace(table: string, rows: object | object[]): void {
    this._proto.mutations.push(buildMutation('replace', table, rows));
  }

  deleteRows(table: string, keys: Key[]): void {
    this._proto.mutations.push(buildDeleteMutation(table, keys));
  }

  proto(): spannerClient.spanner.v1.BatchWriteRequest.IMutationGroup {
    return this._proto;
  }
}

/**
 * This type of transaction is used to execute a single Partitioned DML
 * statement. Partitioned DML partitions the key space and runs the DML
 * statement over each partition in parallel using separate, internal
 * transactions that commit independently.
 *
 * Chances are, you'll never need to create a partitioned DML transaction
 * directly, instead you'll want to use {@link Database#runPartitionedUpdate}.
 *
 * @class
 * @extends Snapshot
 *
 * @see Database#runPartitionedUpdate
 */
export class PartitionedDml extends Dml {
  constructor(
    session: Session,
    options = {} as spannerClient.spanner.v1.TransactionOptions.PartitionedDml,
  ) {
    super(session);
    this._options = {partitionedDml: options};
  }
  /**
   * Use option excludeTxnFromChangeStreams to exclude partitionedDml
   * queries from being tracked in change streams.
   *
   * Enabling this options to true will effectively disable change stream tracking
   * for a specified partitionedDml query, allowing write queries to operate
   * without being included in change streams.
   */
  excludeTxnFromChangeStreams(): void {
    this._options.excludeTxnFromChangeStreams = true;
  }

  /**
   * Execute a DML statement and get the affected row count. Unlike
   * {@link Transaction#runUpdate} after using this method you should
   * immediately discard this transaction, internally it will invoke
   * {@link PartitionedDml#end}.
   *
   * @see Database#runPartitionedUpdate
   *
   * @param {string|object} query A DML statement or
   *     [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   *     object.
   * @param {object} [query.params] A map of parameter name to values.
   * @param {object} [query.types] A map of parameter types.
   * @param {RunUpdateCallback} [callback] Callback function.
   * @returns {Promise<RunUpdateResponse>}
   *
   * @example
   * ```
   * transaction.runUpdate(query, (err, rowRount) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   * ```
   */
  runUpdate(query: string | ExecuteSqlRequest): Promise<RunUpdateResponse>;
  runUpdate(
    query: string | ExecuteSqlRequest,
    callback: RunUpdateCallback,
  ): void;
  runUpdate(
    query: string | ExecuteSqlRequest,
    callback?: RunUpdateCallback,
  ): void | Promise<RunUpdateResponse> {
    return startTrace(
      'PartitionedDml.runUpdate',
      {
        ...(query as ExecuteSqlRequest),
        ...this._traceConfig,
      },
      span => {
        super.runUpdate(query, (err, count) => {
          if (err) {
            setSpanError(span, err);
          }
          this.end();
          span.end();
          callback!(err, count);
        });
      },
    );
  }
}

function isErrorAborted(err): boolean {
  return (
    err &&
    typeof err === 'object' &&
    'code' in err &&
    (err as grpc.ServiceError).code === grpc.status.ABORTED
  );
}

/*! Developer Documentation
 *
 * All async methods (except for streams) return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(PartitionedDml);

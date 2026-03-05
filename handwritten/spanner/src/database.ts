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

import {
  ApiError,
  ExistsCallback,
  GetConfig,
  Metadata,
  ServiceObjectConfig,
} from '@google-cloud/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const common = require('./common-grpc/service-object');
import {promisify, promisifyAll, callbackifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import * as r from 'teeny-request';
import * as streamEvents from 'stream-events';
import * as through from 'through2';
import {
  CallOptions,
  GoogleError,
  grpc,
  Operation as GaxOperation,
} from 'google-gax';
import {Backup} from './backup';
import {BatchTransaction, TransactionIdentifier} from './batch-transaction';
import {SessionFactory, SessionFactoryInterface} from './session-factory';
import {
  google as databaseAdmin,
  google,
  google as spannerClient,
} from '../protos/protos';
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import {
  CreateDatabaseCallback,
  CreateDatabaseOptions,
  GetDatabaseOperationsOptions,
  GetDatabaseOperationsResponse,
  Instance,
  GetDatabaseOperationsCallback,
} from './instance';
import {PartialResultStream, Row} from './partial-result-stream';
import {Session} from './session';
import {
  isSessionNotFoundError,
  SessionPool,
  SessionPoolCloseCallback,
  SessionPoolInterface,
  SessionPoolOptions,
} from './session-pool';
import {CreateTableCallback, CreateTableResponse, Table} from './table';
import {
  BatchWriteOptions,
  CommitCallback,
  CommitResponse,
  ExecuteSqlRequest,
  MutationGroup,
  MutationSet,
  RunCallback,
  RunResponse,
  RunUpdateCallback,
  Snapshot,
  TimestampBounds,
  Transaction,
} from './transaction';
import {
  AsyncRunTransactionCallback,
  AsyncTransactionRunner,
  RunTransactionCallback,
  RunTransactionOptions,
  TransactionRunner,
} from './transaction-runner';
import {
  IOperation,
  LongRunningCallback,
  NormalCallback,
  PagedOptionsWithFilter,
  PagedResponse,
  RequestCallback,
  ResourceCallback,
  Schema,
  addLeaderAwareRoutingHeader,
  getCommonHeaders,
} from './common';
import {finished, Duplex, Readable, Transform} from 'stream';
import {PreciseDate} from '@google-cloud/precise-date';
import {EnumKey, RequestConfig, TranslateEnumKeys, Spanner} from '.';
import {toArray} from './helper';
import {ServiceError} from 'google-gax';
import IPolicy = google.iam.v1.IPolicy;
import Policy = google.iam.v1.Policy;
import FieldMask = google.protobuf.FieldMask;
import IDatabase = google.spanner.admin.database.v1.IDatabase;
import snakeCase = require('lodash.snakecase');
import {
  ObservabilityOptions,
  Span,
  getActiveOrNoopSpan,
  startTrace,
  setSpanError,
  setSpanErrorAndException,
  traceConfig,
} from './instrument';
import {
  AtomicCounter,
  X_GOOG_SPANNER_REQUEST_ID_HEADER,
  craftRequestId,
  newAtomicCounter,
} from './request_id_header';

export type GetDatabaseRolesCallback = RequestCallback<
  IDatabaseRole,
  databaseAdmin.spanner.admin.database.v1.IListDatabaseRolesResponse
>;
export type GetDatabaseRolesResponse = PagedResponse<
  IDatabaseRole,
  databaseAdmin.spanner.admin.database.v1.IListDatabaseRolesResponse
>;
type SetDatabaseMetadataCallback = ResourceCallback<GaxOperation, IOperation>;
type SetDatabaseMetadataResponse = [GaxOperation, IOperation];
type IDatabaseRole = databaseAdmin.spanner.admin.database.v1.IDatabaseRole;

type CreateBatchTransactionCallback = ResourceCallback<
  BatchTransaction,
  google.spanner.v1.ITransaction | google.spanner.v1.ISession
>;

type CreateBatchTransactionResponse = [
  BatchTransaction,
  google.spanner.v1.ITransaction | google.spanner.v1.ISession,
];
type DatabaseResponse = [Database, r.Response];
type DatabaseCallback = ResourceCallback<Database, r.Response>;

type GetSnapshotCallback = NormalCallback<Snapshot>;

type GetTransactionCallback = NormalCallback<Transaction>;

export interface SessionPoolConstructor {
  new (
    database: Database,
    options?: SessionPoolOptions | null,
  ): SessionPoolInterface;
}

export type GetDatabaseDialectCallback = NormalCallback<
  EnumKey<typeof google.spanner.admin.database.v1.DatabaseDialect>
>;

export interface SetIamPolicyRequest {
  policy: Policy | null;
  updateMask?: FieldMask | null;
}

export interface RunPartitionedUpdateOptions extends ExecuteSqlRequest {
  excludeTxnFromChangeStreams?: boolean;
}

export type UpdateSchemaCallback = ResourceCallback<
  GaxOperation,
  databaseAdmin.longrunning.IOperation
>;

export type UpdateSchemaResponse = [
  GaxOperation,
  databaseAdmin.longrunning.IOperation,
];

type PoolRequestCallback = RequestCallback<Session>;

type ResultSetStats = spannerClient.spanner.v1.ResultSetStats;
type ResultSetMetadata = spannerClient.spanner.v1.ResultSetMetadata;

export type GetSessionsOptions = PagedOptionsWithFilter;
export type GetDatabaseRolesOptions = PagedOptionsWithFilter;

/**
 * IDatabase structure with database state enum translated to string form.
 */
type IDatabaseTranslatedEnum = Omit<
  TranslateEnumKeys<
    databaseAdmin.spanner.admin.database.v1.IDatabase,
    'state',
    typeof databaseAdmin.spanner.admin.database.v1.Database.State
  >,
  'restoreInfo'
> &
  Omit<
    TranslateEnumKeys<
      databaseAdmin.spanner.admin.database.v1.IDatabase,
      'databaseDialect',
      typeof databaseAdmin.spanner.admin.database.v1.DatabaseDialect
    >,
    'restoreInfo'
  > & {restoreInfo?: IRestoreInfoTranslatedEnum | null};

/**
 * IRestoreInfo structure with restore source type enum translated to string form.
 */
type IRestoreInfoTranslatedEnum = TranslateEnumKeys<
  databaseAdmin.spanner.admin.database.v1.IRestoreInfo,
  'sourceType',
  typeof databaseAdmin.spanner.admin.database.v1.RestoreSourceType
>;

type GetDatabaseMetadataResponse = [IDatabaseTranslatedEnum];
type GetDatabaseMetadataCallback = RequestCallback<IDatabaseTranslatedEnum>;

type GetSchemaCallback = RequestCallback<
  string,
  databaseAdmin.spanner.admin.database.v1.IGetDatabaseDdlResponse
>;
type GetSchemaResponse = [
  string[],
  databaseAdmin.spanner.admin.database.v1.IGetDatabaseDdlResponse,
];
type GetIamPolicyResponse = IPolicy;
type GetIamPolicyCallback = RequestCallback<IPolicy>;
type SetIamPolicyResponse = IPolicy;
type SetIamPolicyCallback = RequestCallback<IPolicy>;
type GetSessionsCallback = RequestCallback<
  Session,
  google.spanner.v1.IListSessionsResponse
>;

type GetSessionsResponse = PagedResponse<
  Session,
  google.spanner.v1.IListSessionsResponse
>;

export type GetDatabaseConfig = GetConfig &
  databaseAdmin.spanner.admin.database.v1.IGetDatabaseRequest & {
    gaxOptions?: CallOptions;
  };
type DatabaseCloseResponse = [google.protobuf.IEmpty];

export type CreateSessionResponse = [
  Session,
  spannerClient.spanner.v1.ISession,
];

export interface CreateSessionOptions {
  labels?: {[k: string]: string} | null;
  databaseRole?: string | null;
  gaxOptions?: CallOptions;
  multiplexed?: boolean;
}

export interface GetIamPolicyOptions {
  requestedPolicyVersion?: number | null;
  gaxOptions?: CallOptions;
}

/**
 * @typedef {object} GetTransactionOptions
 */
export type GetTransactionOptions = Omit<RunTransactionOptions, 'timeout'>;

export type CreateSessionCallback = ResourceCallback<
  Session,
  spannerClient.spanner.v1.ISession
>;

export interface BatchCreateSessionsOptions extends CreateSessionOptions {
  count: number;
}

export type BatchCreateSessionsResponse = [
  Session[],
  spannerClient.spanner.v1.IBatchCreateSessionsResponse,
];

export type BatchCreateSessionsCallback = ResourceCallback<
  Session[],
  spannerClient.spanner.v1.IBatchCreateSessionsResponse
>;

export type DatabaseDeleteResponse = [databaseAdmin.protobuf.IEmpty];
export type DatabaseDeleteCallback =
  NormalCallback<databaseAdmin.protobuf.IEmpty>;

export interface CancelableDuplex extends Duplex {
  cancel(): void;
}

export type RestoreDatabaseCallback = LongRunningCallback<Database>;

export type RestoreDatabaseResponse = [
  Database,
  GaxOperation,
  databaseAdmin.longrunning.IOperation,
];

export type GetRestoreInfoCallback = NormalCallback<IRestoreInfoTranslatedEnum>;
export type GetStateCallback = NormalCallback<
  EnumKey<typeof databaseAdmin.spanner.admin.database.v1.Database.State>
>;

interface DatabaseRequest {
  (
    config: RequestConfig,
    callback: ResourceCallback<GaxOperation, IOperation>,
  ): void;
  <T>(config: RequestConfig, callback: RequestCallback<T>): void;
  <T, R>(config: RequestConfig, callback: RequestCallback<T, R>): void;
}

export interface RestoreOptions {
  encryptionConfig?: databaseAdmin.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig;
  gaxOptions?: CallOptions;
}

export interface WriteAtLeastOnceOptions extends CallOptions {
  readLockMode?: ReadLockMode;
  isolationLevel?: IsolationLevel;
}

/**
 * Create a Database object to interact with a Cloud Spanner database.
 *
 * @class
 *
 * @param {string} name Name of the database.
 * @param {SessionPoolOptions|SessionPoolInterface} options Session pool
 *     configuration options or custom pool interface.
 * @param {google.spanner.v1.ExecuteSqlRequest.IQueryOptions} queryOptions
 *     The default query options to use for queries on the database.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 * ```
 */
class Database extends common.GrpcServiceObject {
  private instance: Instance;
  formattedName_: string;
  pool_: SessionPoolInterface;
  sessionFactory_: SessionFactoryInterface;
  queryOptions_?: spannerClient.spanner.v1.ExecuteSqlRequest.IQueryOptions;
  isMuxEnabledForRW_?: boolean;
  commonHeaders_: {[k: string]: string};
  request: DatabaseRequest;
  databaseRole?: string | null;
  labels?: {[k: string]: string} | null;
  databaseDialect?: EnumKey<
    typeof databaseAdmin.spanner.admin.database.v1.DatabaseDialect
  > | null;
  _observabilityOptions?: ObservabilityOptions; // TODO: exmaine if we can remove it
  private _traceConfig: traceConfig;
  private _nthRequest: AtomicCounter;
  public _clientId: number;
  constructor(
    instance: Instance,
    name: string,
    poolOptions?: SessionPoolConstructor | SessionPoolOptions,
    queryOptions?: spannerClient.spanner.v1.ExecuteSqlRequest.IQueryOptions,
    databaseRole?: string | null,
  ) {
    const methods = {
      /**
       * Create a database.
       *
       * @method Database#create
       * @param {CreateDatabaseRequest} [options] Configuration object.
       * @param {CreateDatabaseCallback} [callback] Callback function.
       * @returns {Promise<CreateDatabaseResponse>}
       *
       * @example
       * ```
       * const {Spanner} = require('@google-cloud/spanner');
       * const spanner = new Spanner();
       * const instance = spanner.instance('my-instance');
       * const database = instance.database('my-database');
       *
       * database.create(function(err, database, operation, apiResponse) {
       *   if (err) {
       *     // Error handling omitted.
       *   }
       *
       *   operation
       *     .on('error', function(err) {})
       *     .on('complete', function() {
       *       // Database created successfully.
       *     });
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * database.create()
       *   .then(function(data) {
       *     const operation = data[0];
       *     const apiResponse = data[1];
       *
       *     return operation.promise();
       *   })
       *   .then(function() {
       *     // Database created successfully.
       *   });
       * ```
       */
      create: true,
    };

    const formattedName_ = Database.formatName_(instance.formattedName_, name);

    super({
      parent: instance,
      id: name,
      methods,
      createMethod: (
        _: {},
        options: CreateDatabaseOptions,
        callback: CreateDatabaseCallback,
      ) => {
        const pool = this.pool_ as SessionPool;
        if (pool._pending > 0) {
          // If there are BatchCreateSessions requests pending, then we should
          // wait until these have finished before we try to create the database.
          // Otherwise the results of these requests might be propagated to
          // client requests that are submitted after the database has been
          // created. If the pending requests have not finished within 10 seconds,
          // they will be ignored and the database creation will proceed.
          let timeout;
          const promises = [
            new Promise<void>(
              resolve => (timeout = setTimeout(resolve, 10000)),
            ),
            new Promise<void>(resolve => {
              pool
                .on('available', () => {
                  if (pool._pending === 0) {
                    clearTimeout(timeout);
                    resolve();
                  }
                })
                .on('createError', () => {
                  if (pool._pending === 0) {
                    clearTimeout(timeout);
                    resolve();
                  }
                });
            }),
          ];
          Promise.race(promises)
            .then(() =>
              instance.createDatabase(formattedName_, options, callback),
            )
            .catch(() => {});
        } else {
          return instance.createDatabase(formattedName_, options, callback);
        }
      },
    } as {} as ServiceObjectConfig);

    this.formattedName_ = formattedName_;
    this.instance = instance;

    const poolOpts = typeof poolOptions === 'object' ? poolOptions : null;
    this.databaseRole = databaseRole || poolOpts?.databaseRole || null;
    this.labels = this._getSpanner().sessionLabels || poolOpts?.labels || null;

    this._observabilityOptions = instance._observabilityOptions;
    this._traceConfig = {
      opts: this._observabilityOptions,
      dbName: this.formattedName_,
    };

    this.request = instance.request;
    this._nthRequest = newAtomicCounter(0);
    if (this.parent && this.parent.parent) {
      this._clientId = (this.parent.parent as Spanner)._nthClientId;
    } else {
      this._clientId = instance._nthClientId;
    }
    this._observabilityOptions = instance._observabilityOptions;
    this.commonHeaders_ = getCommonHeaders(
      this.formattedName_,
      this._observabilityOptions?.enableEndToEndTracing,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.requestStream = instance.requestStream as any;
    this.sessionFactory_ = new SessionFactory(this, name, poolOptions);
    this.pool_ = this.sessionFactory_.getPool();
    this.isMuxEnabledForRW_ = this.sessionFactory_.isMultiplexedEnabledForRW();
    const sessionPoolInstance = this.pool_ as SessionPool;
    if (sessionPoolInstance) {
      sessionPoolInstance._observabilityOptions =
        instance._observabilityOptions;
    }
    this.queryOptions_ = Object.assign(
      Object.assign({}, queryOptions),
      Database.getEnvironmentQueryOptions(),
    );
  }

  _nextNthRequest(): number {
    return this._nthRequest.increment();
  }

  /**
   * @typedef {array} SetDatabaseMetadataResponse
   * @property {object} 0 The {@link Database} metadata.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback SetDatabaseMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The {@link Database} metadata.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Update the metadata for this database. Note that this method follows PATCH
   * semantics, so previously-configured settings will persist.
   *
   * Wrapper around {@link v1.DatabaseAdminClient#updateDatabase}.
   *
   * @see {@link v1.DatabaseAdminClient#updateDatabase}
   * @see [UpdateDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase)
   *
   * @param {object} metadata The metadata you wish to set.
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {SetDatabaseMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetDatabaseMetadataResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const metadata = {
   *   enableDropProtection: true
   * };
   *
   * database.setMetadata(metadata, function(err, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Metadata updated successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.setMetadata(metadata).then(function(data) {
   *   const operation = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  setMetadata(
    metadata: IDatabase,
    gaxOptions?: CallOptions,
  ): Promise<SetDatabaseMetadataResponse>;
  setMetadata(metadata: IDatabase, callback: SetDatabaseMetadataCallback): void;
  setMetadata(
    metadata: IDatabase,
    gaxOptions: CallOptions,
    callback: SetDatabaseMetadataCallback,
  ): void;
  setMetadata(
    metadata: IDatabase,
    optionsOrCallback?: CallOptions | SetDatabaseMetadataCallback,
    cb?: SetDatabaseMetadataCallback,
  ): void | Promise<SetDatabaseMetadataResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      database: extend(
        {
          name: this.formattedName_,
        },
        metadata,
      ),
      updateMask: {
        paths: Object.keys(metadata).map(snakeCase),
      },
    };
    return this.request(
      {
        client: 'DatabaseAdminClient',
        method: 'updateDatabase',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      callback!,
    );
  }

  static getEnvironmentQueryOptions() {
    const options =
      {} as spannerClient.spanner.v1.ExecuteSqlRequest.IQueryOptions;
    if (process.env.SPANNER_OPTIMIZER_VERSION) {
      options.optimizerVersion = process.env.SPANNER_OPTIMIZER_VERSION;
    }
    if (process.env.SPANNER_OPTIMIZER_STATISTICS_PACKAGE) {
      options.optimizerStatisticsPackage =
        process.env.SPANNER_OPTIMIZER_STATISTICS_PACKAGE;
    }
    return options;
  }

  /**
   * @typedef {object} BatchCreateSessionsOptions
   * @property {number} count The number of sessions to create.
   * @property {object.<string, string>} [labels] Labels to apply to each
   *     session.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} BatchCreateSessionsResponse
   * @property {Session[]} 0 The newly created sessions.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback BatchCreateSessionsCallback
   * @param {?Error} err Request error, if any.
   * @param {Session[]} sessions The newly created sessions.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a batch of sessions, which can be used to perform transactions that
   * read and/or modify data.
   *
   * **It is unlikely you will need to interact with sessions directly. By
   * default, sessions are created and utilized for maximum performance
   * automatically.**
   *
   * Wrapper around {@link v1.SpannerClient#batchCreateSessions}.
   *
   * @see {@link v1.SpannerClient#batchCreateSessions}
   * @see [BatchCreateSessions API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.BatchCreateSessions)
   *
   * @param {number|BatchCreateSessionsOptions} options Desired session count or
   *     a configuration object.
   * @param {BatchCreateSessionsCallback} [callback] Callback function.
   * @returns {Promise<BatchCreateSessionsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const count = 5;
   *
   * database.batchCreateSession(count, (err, sessions, response) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // `sessions` is an array of Session objects.
   * });
   *
   * ```
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * const [sessions, response] = await database.batchCreateSessions(count);
   * ```
   */
  batchCreateSessions(
    options: number | BatchCreateSessionsOptions,
  ): Promise<BatchCreateSessionsResponse>;
  batchCreateSessions(
    options: number | BatchCreateSessionsOptions,
    callback: BatchCreateSessionsCallback,
  ): void;
  batchCreateSessions(
    options: number | BatchCreateSessionsOptions,
    callback?: BatchCreateSessionsCallback,
  ): void | Promise<BatchCreateSessionsResponse> {
    if (typeof options === 'number') {
      options = {count: options};
    }

    const count = options.count;
    const labels = options.labels || this.labels || null;
    const databaseRole = options.databaseRole || this.databaseRole || null;

    const reqOpts: google.spanner.v1.IBatchCreateSessionsRequest = {
      database: this.formattedName_,
      sessionTemplate: {labels: labels, creatorRole: databaseRole},
      sessionCount: count,
    };

    const headers = this.commonHeaders_;
    if (this._getSpanner().routeToLeaderEnabled) {
      addLeaderAwareRoutingHeader(headers);
    }

    const allHeaders = this._metadataWithRequestId(
      this._nextNthRequest(),
      1,
      headers,
    );

    startTrace('Database.batchCreateSessions', this._traceConfig, span => {
      this.request<google.spanner.v1.IBatchCreateSessionsResponse>(
        {
          client: 'SpannerClient',
          method: 'batchCreateSessions',
          reqOpts,
          gaxOpts: options.gaxOptions,
          headers: allHeaders,
        },
        (err, resp) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback!(err, null, resp!);
            return;
          }

          const sessions = (resp!.session || []).map(metadata => {
            const session = this.session(metadata.name!);
            session._observabilityOptions = this._traceConfig!.opts;
            session.metadata = metadata;
            return session;
          });

          span.end();
          callback!(null, sessions, resp!);
        },
      );
    });
  }

  public _metadataWithRequestId(
    nthRequest: number,
    attempt: number,
    priorMetadata?: {[k: string]: string},
  ): {[k: string]: string} {
    if (!priorMetadata) {
      priorMetadata = {};
    }
    const withReqId = {
      ...priorMetadata,
    };
    withReqId[X_GOOG_SPANNER_REQUEST_ID_HEADER] = craftRequestId(
      this._clientId || 1,
      1, // TODO: Properly infer the channelId
      nthRequest,
      attempt,
    );
    return withReqId;
  }

  /**
   * Get a reference to a {@link BatchTransaction} object.
   *
   * @see {@link BatchTransaction#identifier} to generate an identifier.
   *
   * @param {TransactionIdentifier} identifier The transaction identifier.
   * @param {object} [options] [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
   * @returns {BatchTransaction} A batch transaction object.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const transaction = database.batchTransaction({
   *   session: 'my-session',
   *   transaction: 'my-transaction',
   *   readTimestamp: 1518464696657
   * });
   * ```
   */
  batchTransaction(
    identifier: TransactionIdentifier,
    options?: TimestampBounds,
  ): BatchTransaction {
    const session =
      typeof identifier.session === 'string'
        ? this.session(identifier.session)
        : identifier.session;
    const id = identifier.transaction;
    const transaction = new BatchTransaction(session, options);
    transaction.id = id;
    transaction._observabilityOptions = this._traceConfig!.opts;
    transaction.readTimestamp = identifier.timestamp as PreciseDate;
    return transaction;
  }
  /**
   * @callback CloseDatabaseCallback
   * @param {?Error} err Request error, if any.
   */
  /**
   * Close the database connection and destroy all sessions associated with it.
   *
   * @param {CloseDatabaseCallback} [callback] Callback function.
   * @returns {Promise}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.close(function(err) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   * });
   *
   * //-
   * // In the event of a session leak, the error object will contain a
   * // `messages` field.
   * //-
   * database.close(function(err) {
   *   if (err && err.messages) {
   *     err.messages.forEach(function(message) {
   *       console.error(message);
   *     });
   *   }
   * });
   * ```
   */
  close(callback: SessionPoolCloseCallback): void;
  close(): Promise<DatabaseCloseResponse>;
  close(
    callback?: SessionPoolCloseCallback,
  ): void | Promise<DatabaseCloseResponse> {
    const key = this.id!.split('/').pop();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.parent as any).databases_.delete(key);
    this.pool_.close(callback!);
  }
  /**
   * @typedef {array} CreateTransactionResponse
   * @property {BatchTransaction} 0 The {@link BatchTransaction}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateTransactionCallback
   * @param {?Error} err Request error, if any.
   * @param {BatchTransaction} transaction The {@link BatchTransaction}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a transaction that can be used for batch querying.
   *
   * @param {object} [options] [Transaction options](https://cloud.google.com/spanner/docs/timestamp-bounds).
   * @param {CreateTransactionCallback} [callback] Callback function.
   * @returns {Promise<CreateTransactionResponse>}
   */
  createBatchTransaction(
    options?: TimestampBounds,
  ): Promise<CreateBatchTransactionResponse>;
  createBatchTransaction(callback: CreateBatchTransactionCallback): void;
  createBatchTransaction(
    options: TimestampBounds,
    callback: CreateBatchTransactionCallback,
  ): void;
  createBatchTransaction(
    optionsOrCallback?: TimestampBounds | CreateBatchTransactionCallback,
    cb?: CreateBatchTransactionCallback,
  ): void | Promise<CreateBatchTransactionResponse> {
    const callback =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as CreateBatchTransactionCallback)
        : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? (optionsOrCallback as TimestampBounds)
        : {};
    return startTrace(
      'Database.createBatchTransaction',
      this._traceConfig,
      span => {
        this.sessionFactory_.getSession((err, session) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback!(err as ServiceError, null, undefined);
            return;
          }
          const transaction = this.batchTransaction(
            {session: session!},
            options,
          );
          this._releaseOnEnd(session!, transaction, span);
          transaction.begin((err, resp) => {
            if (err) {
              setSpanError(span, err);
              if (isSessionNotFoundError(err)) {
                span.addEvent('No session available', {
                  'session.id': session?.id,
                });
              }
              span.end();
              callback!(err, null, resp!);
              return;
            }
            span.addEvent('Using Session', {'session.id': session?.id});
            span.end();
            callback!(null, transaction, resp!);
          });
        });
      },
    );
  }
  /**
   * Create a new session.
   *
   * @typedef {object} CreateSessionOptions
   * @property {Object.<string, string>} [labels] The labels for the session.
   *
   *   * Label keys must be between 1 and 63 characters long and must conform to
   *     the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
   *   * Label values must be between 0 and 63 characters long and must conform
   *     to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
   *   * No more than 64 labels can be associated with a given session.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} CreateSessionResponse
   * @property {Session} 0 The newly created session.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateSessionCallback
   * @param {?Error} err Request error, if any.
   * @param {Session} session The newly created session.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a new session, which can be used to perform transactions that read
   * and/or modify data.
   *
   * Sessions can only execute one transaction at a time. To execute multiple
   * concurrent read-write/write-only transactions, create multiple sessions.
   * Note that standalone reads and queries use a transaction internally, and
   * count toward the one transaction limit.
   *
   * **It is unlikely you will need to interact with sessions directly. By
   * default, sessions are created and utilized for maximum performance
   * automatically.**
   *
   * Wrapper around {@link v1.SpannerClient#createSession}.
   *
   * @see {@link v1.SpannerClient#createSession}
   * @see [CreateSession API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.CreateSession)
   *
   * @param {CreateSessionOptions} [options] Configuration object.
   * @param {CreateSessionCallback} [callback] Callback function.
   * @returns {Promise<CreateSessionResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.createSession(function(err, session, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // `session` is a Session object.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.createSession().then(function(data) {
   *   const session = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  createSession(options: CreateSessionOptions): Promise<CreateSessionResponse>;
  createSession(callback: CreateSessionCallback): void;
  createSession(
    options: CreateSessionOptions,
    callback: CreateSessionCallback,
  ): void;
  createSession(
    optionsOrCallback: CreateSessionOptions | CreateSessionCallback,
    cb?: CreateSessionCallback,
  ): void | Promise<CreateSessionResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? extend({}, optionsOrCallback)
        : ({} as CreateSessionOptions);

    const reqOpts: google.spanner.v1.ICreateSessionRequest = {
      database: this.formattedName_,
    };

    reqOpts.session = {};

    if (options.multiplexed) {
      reqOpts.session.multiplexed = options.multiplexed;
    }

    reqOpts.session.labels = options.labels || this.labels || null;

    reqOpts.session.creatorRole =
      options.databaseRole || this.databaseRole || null;

    const headers = this._metadataWithRequestId(
      this._nextNthRequest(),
      1,
      this.commonHeaders_,
    );
    if (this._getSpanner().routeToLeaderEnabled) {
      addLeaderAwareRoutingHeader(headers);
    }

    startTrace('Database.createSession', this._traceConfig, span => {
      this.request<google.spanner.v1.ISession>(
        {
          client: 'SpannerClient',
          method: 'createSession',
          reqOpts,
          gaxOpts: options.gaxOptions,
          headers: headers,
        },
        (err, resp) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback(err, null, resp!);
            return;
          }
          const session = this.session(resp!.name!);
          session.metadata = resp;
          session._observabilityOptions = this._traceConfig!.opts;
          span.end();
          callback(null, session, resp!);
        },
      );
    });
  }
  /**
   * @typedef {array} CreateTableResponse
   * @property {Table} 0 The new {@link Table}.
   * @property {google.longrunning.Operation} 1 An {@link Operation} object that can be used to check
   *     the status of the request.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback CreateTableCallback
   * @param {?Error} err Request error, if any.
   * @param {Table} table The new {@link Table}.
   * @param {google.longrunning.Operation} operation An {@link Operation} object that can be used to
   *     check the status of the request.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a table.
   *
   * Wrapper around {@link Database#updateSchema}.
   *
   * @see {@link Database#updateSchema}
   *
   * @param {string} schema A DDL CREATE statement describing the table.
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
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
   *
   * const schema =
   *   'CREATE TABLE Singers (' +
   *   '  SingerId INT64 NOT NULL,' +
   *   '  FirstName STRING(1024),' +
   *   '  LastName STRING(1024),' +
   *   '  SingerInfo BYTES(MAX),' +
   *   ') PRIMARY KEY(SingerId)';
   *
   * database.createTable(schema, function(err, table, operation, apiResponse) {
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
   * database.createTable(schema)
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
  createTable(
    schema: Schema,
    gaxOptions?: CallOptions,
  ): Promise<CreateTableResponse>;
  createTable(schema: Schema, callback: CreateTableCallback): void;
  createTable(
    schema: Schema,
    gaxOptions: CallOptions,
    callback: CreateTableCallback,
  ): void;
  createTable(
    schema: Schema,
    gaxOptionsOrCallback?: CallOptions | CreateTableCallback,
    cb?: CreateTableCallback,
  ): void | Promise<CreateTableResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.updateSchema(schema, gaxOptions, (err, operation, resp) => {
      if (err) {
        callback!(err, null, null, resp!);
        return;
      }
      const tableName = (schema as string).match(
        /CREATE TABLE `*([^\s`(]+)/,
      )![1];
      const table = this.table(tableName!);
      table._observabilityOptions = this._traceConfig!.opts;
      callback!(null, table, operation!, resp!);
    });
  }
  /**
   * Decorates transaction so that when end() is called it will return the session
   * back into the pool.
   *
   * @private
   *
   * @param {Session} session The session to release.
   * @param {Transaction} transaction The transaction to observe.
   * @returns {Transaction}
   */
  private _releaseOnEnd(session: Session, transaction: Snapshot, span: Span) {
    transaction.once('end', () => {
      try {
        this.sessionFactory_.release(session);
      } catch (e) {
        setSpanErrorAndException(span, e as Error);
        this.emit('error', e);
      } finally {
        span.end();
      }
    });
  }
  /**
   * @typedef {array} DatabaseDeleteResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DatabaseDeleteCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Delete the database.
   *
   * Wrapper around {@link v1.DatabaseAdminClient#dropDatabase}.
   *
   * @see {@link v1.DatabaseAdminClient#dropDatabase}
   * @see [DropDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DatabaseDeleteCallback} [callback] Callback function.
   * @returns {Promise<DatabaseDeleteResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.delete(function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Database was deleted successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.delete().then(function(data) {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  delete(gaxOptions?: CallOptions): Promise<DatabaseDeleteResponse>;
  delete(callback: DatabaseDeleteCallback): void;
  delete(gaxOptions: CallOptions, callback: DatabaseDeleteCallback): void;
  delete(
    optionsOrCallback?: CallOptions | DatabaseDeleteCallback,
    cb?: DatabaseDeleteCallback,
  ): void | Promise<DatabaseDeleteResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts: databaseAdmin.spanner.admin.database.v1.IDropDatabaseRequest =
      {
        database: this.formattedName_,
      };
    this.close(() => {
      this.request<r.Response>(
        {
          client: 'DatabaseAdminClient',
          method: 'dropDatabase',
          reqOpts,
          gaxOpts,
          headers: this.commonHeaders_,
        },
        callback!,
      );
    });
  }
  /**
   * @typedef {array} DatabaseExistsResponse
   * @property {boolean} 0 Whether the {@link Database} exists.
   */
  /**
   * @callback DatabaseExistsCallback
   * @param {?Error} err Request error, if any.
   * @param {boolean} exists Whether the {@link Database} exists.
   */
  /**
   * Check if a database exists.
   *
   * @method Database#exists
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DatabaseExistsCallback} [callback] Callback function.
   * @returns {Promise<DatabaseExistsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.exists(function(err, exists) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.exists().then(function(data) {
   *   const exists = data[0];
   * });
   * ```
   */
  exists(gaxOptions?: CallOptions): Promise<[boolean]>;
  exists(callback: ExistsCallback): void;
  exists(gaxOptions: CallOptions, callback: ExistsCallback): void;
  exists(
    gaxOptionsOrCallback?: CallOptions | ExistsCallback,
    cb?: ExistsCallback,
  ): void | Promise<[boolean]> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    const NOT_FOUND = 5;

    this.getMetadata(gaxOptions, err => {
      if (err && (err as ApiError).code !== NOT_FOUND) {
        callback!(err);
        return;
      }
      const exists = !err || (err as ApiError).code !== NOT_FOUND;
      callback!(null, exists);
    });
  }
  /**
   * @typedef {array} GetDatabaseResponse
   * @property {Database} 0 The {@link Database}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetDatabaseCallback
   * @param {?Error} err Request error, if any.
   * @param {Database} database The {@link Database}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a database if it exists.
   *
   * You may optionally use this to "get or create" an object by providing an
   * object with `autoCreate` set to `true`. Any extra configuration that is
   * normally required for the `create` method must be contained within this
   * object as well.
   *
   * @param {options} [options] Configuration object.
   * @param {boolean} [options.autoCreate=false] Automatically create the
   *     object if it does not exist.
   * @param {object} [options.gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetDatabaseCallback} [callback] Callback function.
   * @returns {Promise<GetDatabaseResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.get(function(err, database, apiResponse) {
   *   // `database.metadata` has been populated.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.get().then(function(data) {
   *   const database = data[0];
   *   const apiResponse = data[0];
   * });
   * ```
   */
  get(options?: GetDatabaseConfig): Promise<DatabaseResponse>;
  get(callback: DatabaseCallback): void;
  get(options: GetDatabaseConfig, callback: DatabaseCallback): void;
  get(
    optionsOrCallback?: GetDatabaseConfig | DatabaseCallback,
    cb?: DatabaseCallback,
  ): void | Promise<DatabaseResponse> {
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetDatabaseConfig);
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    this.getMetadata(options.gaxOptions!, (err, metadata) => {
      if (err) {
        if (options.autoCreate && (err as ApiError).code === 5) {
          this.create(
            options,
            (err, database: Database, operation: GaxOperation) => {
              if (err) {
                callback!(err as grpc.ServiceError);
                return;
              }
              operation
                .on('error', callback!)
                .on('complete', (metadata: Metadata) => {
                  this.metadata = metadata;
                  callback!(null, this, metadata as r.Response);
                });
            },
          );
          return;
        }
        callback!(err);
        return;
      }
      callback!(null, this, metadata as r.Response);
    });
  }
  /**
   * @typedef {array} GetDatabaseMetadataResponse
   * @property {object} 0 The {@link Database} metadata.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetDatabaseMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The {@link Database} metadata.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get the database's metadata.
   *
   * Wrapper around {@link v1.DatabaseAdminClient#getDatabase}.
   *
   * @see {@link v1.DatabaseAdminClient#getDatabase}
   * @see [GetDatabase API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase)
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetDatabaseMetadataCallback} [callback] Callback function.
   * @returns {Promise<GetDatabaseMetadataResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getMetadata(function(err, metadata) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Database was deleted successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.getMetadata().then(function(data) {
   *   const metadata = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  getMetadata(gaxOptions?: CallOptions): Promise<GetDatabaseMetadataResponse>;
  getMetadata(callback: GetDatabaseMetadataCallback): void;
  getMetadata(
    gaxOptions: CallOptions,
    callback: GetDatabaseMetadataCallback,
  ): void;
  getMetadata(
    gaxOptionsOrCallback?: CallOptions | GetDatabaseMetadataCallback,
    cb?: GetDatabaseMetadataCallback,
  ): void | Promise<GetDatabaseMetadataResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function'
        ? (gaxOptionsOrCallback as GetDatabaseMetadataCallback)
        : cb;
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object'
        ? (gaxOptionsOrCallback as CallOptions)
        : {};

    const reqOpts: databaseAdmin.spanner.admin.database.v1.IGetDatabaseRequest =
      {
        name: this.formattedName_,
      };
    return this.request(
      {
        client: 'DatabaseAdminClient',
        method: 'getDatabase',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }
        callback!(err, resp);
      },
    );
  }

  /**
   * {@link google.spanner.admin.database.v1#RestoreInfo} structure with restore
   * source type enum translated to string form.
   *
   * @typedef {object} IRestoreInfoTranslatedEnum
   */
  /**
   * @callback GetRestoreInfoCallback
   * @param {?Error} err Request error, if any.
   * @param {IRestoreInfoTranslatedEnum | undefined} restoreInfo Contains the restore
   *     information for the database if it was restored from a backup.
   */
  /**
   * Retrieves the restore information of the database.
   *
   * @see {@link #getMetadata}
   *
   * @method Database#getRestoreInfo
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetRestoreInfoCallback} [callback] Callback function.
   * @returns {Promise<IRestoreInfoTranslatedEnum | undefined>} When resolved,
   *     contains the restore information for the database if it was restored
   *     from a backup.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const restoreInfo = await database.getRestoreInfo();
   * console.log(`Database restored from ${restoreInfo.backupInfo.backup}`);
   * ```
   */
  getRestoreInfo(
    options?: CallOptions,
  ): Promise<IRestoreInfoTranslatedEnum | undefined>;
  getRestoreInfo(callback: GetRestoreInfoCallback): void;
  getRestoreInfo(options: CallOptions, callback: GetRestoreInfoCallback): void;
  async getRestoreInfo(
    optionsOrCallback?: CallOptions | GetRestoreInfoCallback,
  ): Promise<IRestoreInfoTranslatedEnum | undefined> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};

    const [metadata] = await this.getMetadata(gaxOptions);
    return metadata.restoreInfo ? metadata.restoreInfo : undefined;
  }

  /**
   * @callback GetStateCallback
   * @param {?Error} err Request error, if any.
   * @param {EnumKey<typeof, google.spanner.admin.database.v1.Database.State> | undefined} state
   *     Contains the current state of the database if the state is defined.
   */
  /**
   * Retrieves the state of the database.
   *
   * The database state indicates if the database is ready after creation or
   * after being restored from a backup.
   *
   * @see {@link #getMetadata}
   *
   * @method Database#getState
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetStateCallback} [callback] Callback function.
   * @returns {Promise<EnumKey<typeof, google.spanner.admin.database.v1.Database.State> | undefined>}
   *     When resolved, contains the current state of the database if the state
   *     is defined.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const state = await database.getState();
   * const isReady = (state === 'READY');
   * ```
   */
  getState(
    options?: CallOptions,
  ): Promise<
    | EnumKey<typeof databaseAdmin.spanner.admin.database.v1.Database.State>
    | undefined
  >;
  getState(callback: GetStateCallback): void;
  getState(options: CallOptions, callback: GetStateCallback): void;
  async getState(
    optionsOrCallback?: CallOptions | GetStateCallback,
  ): Promise<
    | EnumKey<typeof databaseAdmin.spanner.admin.database.v1.Database.State>
    | undefined
  > {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};

    const [metadata] = await this.getMetadata(gaxOptions);
    return metadata.state || undefined;
  }

  /**
   * Retrieves the dialect of the database
   *
   * @see {@link #getMetadata}
   *
   * @method Database#getDatabaseDialect
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetDatabaseDialectCallback} [callback] Callback function.
   * @returns {Promise<EnumKey<typeof, databaseAdmin.spanner.admin.database.v1.DatabaseDialect> | undefined>}
   * When resolved, contains the database dialect of the database if the dialect is defined.
   * @example
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const dialect = await database.getDatabaseDialect();
   * const isGoogleSQL = (dialect === 'GOOGLE_STANDARD_SQL');
   * const isPostgreSQL = (dialect === 'POSTGRESQL');
   */

  getDatabaseDialect(
    options?: CallOptions,
  ): Promise<
    | EnumKey<typeof databaseAdmin.spanner.admin.database.v1.DatabaseDialect>
    | undefined
  >;
  getDatabaseDialect(callback: GetDatabaseDialectCallback): void;
  getDatabaseDialect(
    options: CallOptions,
    callback: GetDatabaseDialectCallback,
  ): void;
  async getDatabaseDialect(
    optionsOrCallback?: CallOptions | GetDatabaseDialectCallback,
    callback?: GetDatabaseDialectCallback,
  ): Promise<
    | EnumKey<typeof databaseAdmin.spanner.admin.database.v1.DatabaseDialect>
    | undefined
  > {
    const gaxOptions =
      typeof optionsOrCallback === 'object'
        ? (optionsOrCallback as CallOptions)
        : {};

    const cb =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as GetDatabaseDialectCallback)
        : callback;

    try {
      if (
        this.databaseDialect === 'DATABASE_DIALECT_UNSPECIFIED' ||
        this.databaseDialect === null ||
        this.databaseDialect === undefined
      ) {
        const [metadata] = await this.getMetadata(gaxOptions);
        this.databaseDialect = metadata.databaseDialect;
      }
      if (cb) {
        cb(null, this.databaseDialect);
        return;
      }
      return this.databaseDialect || undefined;
    } catch (err) {
      cb!(err as grpc.ServiceError);
      return;
    }
  }

  /**
   * @typedef {array} GetSchemaResponse
   * @property {string[]} 0 An array of database DDL statements.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetSchemaCallback
   * @param {?Error} err Request error, if any.
   * @param {string[]} statements An array of database DDL statements.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get this database's schema as a list of formatted DDL statements.
   *
   * Wrapper around {@link v1.DatabaseAdminClient#getDatabaseDdl}.
   *
   * @see {@link v1.DatabaseAdminClient#getDatabaseDdl}
   * @see [Data Definition Language (DDL)](https://cloud.google.com/spanner/docs/data-definition-language)
   * @see [GetDatabaseDdl API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetSchemaCallback} [callback] Callback function.
   * @returns {Promise<GetSchemaResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getSchema(function(err, statements, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.getSchema().then(function(data) {
   *   const statements = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  getSchema(options?: CallOptions): Promise<GetSchemaResponse>;
  getSchema(callback: GetSchemaCallback): void;
  getSchema(options: CallOptions, callback: GetSchemaCallback): void;
  getSchema(
    optionsOrCallback?: CallOptions | GetSchemaCallback,
    cb?: GetSchemaCallback,
  ): void | Promise<GetSchemaResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts: databaseAdmin.spanner.admin.database.v1.IGetDatabaseDdlRequest =
      {
        database: this.formattedName_,
      };
    this.request<databaseAdmin.spanner.admin.database.v1.IGetDatabaseDdlResponse>(
      {
        client: 'DatabaseAdminClient',
        method: 'getDatabaseDdl',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err, statements, ...args: any[]) => {
        callback!(err, statements ? statements.statements : null, ...args);
      },
    );
  }

  /**
   * Options object for requested policy version.
   *
   * @typedef {object} GetIamPolicyOptions
   * @property {number|null} [requestedPolicyVersion] policy version requested, possible values are 0, 1 and 3,
   *     See {@link https://cloud.google.com/iam/docs/policies#versions} for more details
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @callback GetIamPolicyCallback
   * @param {?Error} err Request error, if any.
   * @param {google.iam.v1.Policy| undefined} policy Returns policy for the give database
   */
  /**
   * Retrieves the policy of the database.
   *
   * A Policy is a collection of bindings. A binding binds one or more members, or principals,
   * to a single role. Principals can be user accounts, service accounts, Google groups, and
   * domains (such as G Suite). A role is a named list of permissions; each role can be an IAM
   * predefined role or a user-created custom role.
   *
   * @see {@link #getIamPolicy}
   *
   * @method Database#getIamPolicy
   * @param {object} [options] requestedPolicyVersion and gax options(configuration options)
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html}
   *     for more details on gax options.
   * @param {GetIamPolicyCallback} [callback] Callback function.
   * @returns {Promise<Policy | undefined>}
   *     When resolved, contains the current policy of the database.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const policy = await database.getIamPolicy();
   * console.log(policy.bindings, policy.version, policy.etag, policy.auditConfigs)
   * const policyWithVersion specified = await database.getIamPolicy({requestedPolicyVersion: 3});
   * ```
   */
  getIamPolicy(options?: GetIamPolicyOptions): Promise<GetIamPolicyResponse>;
  getIamPolicy(callback: GetIamPolicyCallback): void;
  getIamPolicy(
    options: GetIamPolicyOptions,
    callback: GetIamPolicyCallback,
  ): void;
  getIamPolicy(
    optionsOrCallback?: GetIamPolicyOptions | GetIamPolicyCallback,
    cb?: GetIamPolicyCallback,
  ): void | Promise<GetIamPolicyResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts: databaseAdmin.iam.v1.IGetIamPolicyRequest = {
      resource: this.formattedName_,
      options: {
        requestedPolicyVersion: options.requestedPolicyVersion || null,
      },
    };
    this.request<GetIamPolicyResponse>(
      {
        client: 'DatabaseAdminClient',
        method: 'getIamPolicy',
        reqOpts,
        gaxOpts: options.gaxOptions,
        headers: this.commonHeaders_,
      },
      (err, resp) => {
        callback!(err, resp);
      },
    );
  }

  /**
   * Options object for listing sessions.
   *
   * @typedef {object} GetSessionsOptions
   * @property {string} [filter] An expression for filtering the results of the
   *     request. Filter rules are case insensitive. The fields eligible for
   *     filtering are:
   *     - **`name`**
   *     - **`display_name`**
   *     - **`labels.key`** where key is the name of a label
   *
   *     Some examples of using filters are:
   *     - **`name:*`** The instance has a name.
   *     - **`name:Howl`** The instance's name is howl.
   *     - **`labels.env:*`** The instance has the label env.
   *     - **`labels.env:dev`** The instance's label env has the value dev.
   *     - **`name:howl labels.env:dev`** The instance's name is howl and it has
   *       the label env with value dev.
   * @property {number} [pageSize] Maximum number of results per page.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} GetSessionsResponse
   * @property {Session[]} 0 Array of {@link Session} instances.
   * @property {object} 1 A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetSessionsCallback
   * @param {?Error} err Request error, if any.
   * @param {Session[]} instances Array of {@link Session} instances.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Gets a list of sessions.
   *
   * Wrapper around {@link v1.SpannerClient#listSessions}
   *
   * @see {@link v1.SpannerClient#listSessions}
   * @see [ListSessions API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ListSessions)
   *
   * @param {GetSessionsOptions} [options] Options object for listing sessions.
   * @param {GetSessionsCallback} [callback] Callback function.
   * @returns {Promise<GetSessionsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getSessions(function(err, sessions) {
   *   // `sessions` is an array of `Session` objects.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, sessions, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     database.getSessions(nextQuery, callback);
   *   }
   * }
   *
   * database.getInstances({
   *   gaxOptions: {autoPaginate: false}
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.getInstances().then(function(data) {
   *   const sessions = data[0];
   * });
   * ```
   */
  getSessions(options?: GetSessionsOptions): Promise<GetSessionsResponse>;
  getSessions(callback: GetSessionsCallback): void;
  getSessions(options: GetSessionsOptions, callback: GetSessionsCallback): void;
  getSessions(
    optionsOrCallback?: GetSessionsOptions | GetSessionsCallback,
    cb?: GetSessionsCallback,
  ): void | Promise<GetSessionsResponse> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetSessionsOptions);
    const gaxOpts = extend(true, {}, options.gaxOptions);
    let reqOpts = extend({}, options, {
      database: this.formattedName_,
    });
    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetSessionsOptions).pageSize,
          pageToken: (gaxOpts as GetSessionsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetSessionsOptions).pageSize;
      delete (gaxOpts as GetSessionsOptions).pageToken;
    }

    const headers = this._metadataWithRequestId(
      this._nextNthRequest(),
      1,
      this.commonHeaders_,
    );

    return startTrace('Database.getSessions', this._traceConfig, span => {
      this.request<
        google.spanner.v1.ISession,
        google.spanner.v1.IListSessionsResponse
      >(
        {
          client: 'SpannerClient',
          method: 'listSessions',
          reqOpts,
          gaxOpts,
          headers: headers,
        },
        (err, sessions, nextPageRequest, ...args) => {
          if (err) {
            setSpanError(span, err);
          }
          let sessionInstances: Session[] | null = null;
          if (sessions) {
            sessionInstances = sessions.map(metadata => {
              const session = self.session(metadata.name!);
              session.metadata = metadata;
              session._observabilityOptions = this._traceConfig!.opts;
              return session;
            });
          }
          span.end();
          const nextQuery = nextPageRequest!
            ? extend({}, options, nextPageRequest!)
            : null;
          callback!(err, sessionInstances!, nextQuery, ...args);
        },
      );
    });
  }

  /**
   * Get a list of sessions as a readable object stream.
   *
   * Wrapper around {@link v1.SpannerClient#listSessions}
   *
   * @see {@link v1.SpannerClient#listSessions}
   * @see [ListSessions API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ListSessions)
   *
   * @method Spanner#getSessionsStream
   * @param {GetSessionsOptions} [options] Options object for listing sessions.
   * @returns {ReadableStream} A readable stream that emits {@link Session}
   *     instances.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getSessionsStream()
   *   .on('error', console.error)
   *   .on('data', function(database) {
   *     // `sessions` is a `Session` object.
   *   })
   *   .on('end', function() {
   *     // All sessions retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * database.getSessionsStream()
   *   .on('data', function(session) {
   *     this.end();
   *   });
   * ```
   */
  getSessionsStream(options: GetSessionsOptions = {}): NodeJS.ReadableStream {
    const gaxOpts = extend(true, {}, options.gaxOptions);

    let reqOpts = extend({}, options, {
      database: this.formattedName_,
    });
    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetSessionsOptions).pageSize,
          pageToken: (gaxOpts as GetSessionsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetSessionsOptions).pageSize;
      delete (gaxOpts as GetSessionsOptions).pageToken;
    }

    return this.requestStream({
      client: 'SpannerClient',
      method: 'listSessionsStream',
      reqOpts,
      gaxOpts,
      headers: this.commonHeaders_,
    });
  }

  /**
   * @typedef {array} GetSnapshotResponse
   * @property {Snapshot} 0 The snapshot object.
   */
  /**
   * @callback GetSnapshotCallback
   * @param {?Error} err Request error, if any.
   * @param {Snapshot} snapshot The snapshot object.
   */
  /**
   * Get a read only {@link Snapshot} transaction.
   *
   * Wrapper around {@link v1.SpannerClient#beginTransaction}.
   *
   * **NOTE:** When finished with the Snapshot, {@link Snapshot#end} should be
   * called to release the underlying {@link Session}. **Failure to do could
   * result in a Session leak.**
   *
   * **NOTE:** Since the returned {@link Snapshot} transaction is not a
   * single-use transaction, it is invalid to set the `minReadTimestamp` and
   * `maxStaleness` parameters in {@link TimestampBounds} as those parameters
   * can only be set for single-use transactions.
   * https://cloud.google.com/spanner/docs/reference/rest/v1/TransactionOptions#bounded-staleness
   *
   * @see {@link v1.SpannerClient#beginTransaction}
   *
   * @param {TimestampBounds} [options] Timestamp bounds.
   * @param {GetSnapshotCallback} [callback] Callback function.
   * @returns {Promise<GetSnapshotResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getSnapshot(function(err, transaction) {
   *   if (err) {
   *    // Error handling omitted.
   *   }
   *
   *   // Should be called when finished with Snapshot.
   *   transaction.end();
   * });
   * ```
   *
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * database.getSnapshot().then(function(data) {
   *   const transaction = data[0];
   * });
   * ```
   *
   * @example <caption>include:samples/transaction.js</caption>
   * region_tag:spanner_read_only_transaction
   * Read-only transaction:
   */
  getSnapshot(options?: TimestampBounds): Promise<[Snapshot]>;
  getSnapshot(callback: GetSnapshotCallback): void;
  getSnapshot(options: TimestampBounds, callback: GetSnapshotCallback): void;
  getSnapshot(
    optionsOrCallback?: TimestampBounds | GetSnapshotCallback,
    cb?: GetSnapshotCallback,
  ): void | Promise<[Snapshot]> {
    const callback =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as GetSnapshotCallback)
        : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? (optionsOrCallback as TimestampBounds)
        : {};

    if (
      ('maxStaleness' in options &&
        options.maxStaleness !== null &&
        options.maxStaleness !== undefined) ||
      ('minReadTimestamp' in options &&
        options.minReadTimestamp !== null &&
        options.minReadTimestamp !== undefined)
    ) {
      const error = Object.assign(
        new Error(
          'maxStaleness / minReadTimestamp is not supported for multi-use read-only transactions.',
        ),
        {
          code: 3, // invalid argument
        },
      ) as ServiceError;
      callback!(error);
      return;
    }

    return startTrace('Database.getSnapshot', this._traceConfig, span => {
      this.sessionFactory_.getSession((err, session) => {
        if (err) {
          setSpanError(span, err);
          span.end();
          callback!(err as ServiceError);
          return;
        }

        const snapshot = session!.snapshot(options, this.queryOptions_);

        snapshot.begin(err => {
          if (err) {
            setSpanError(span, err);
            if (
              isSessionNotFoundError(err) &&
              !this.sessionFactory_.isMultiplexedEnabled()
            ) {
              span.addEvent('No session available', {
                'session.id': session?.id,
              });
              session!.lastError = err;
              this.sessionFactory_.release(session!);
              span.end();
              this.getSnapshot(options, callback!);
            } else {
              span.addEvent('Using Session', {'session.id': session?.id});
              this.sessionFactory_.release(session!);
              span.end();
              callback!(err);
            }
            return;
          }

          this._releaseOnEnd(session!, snapshot, span);
          span.end();
          callback!(err, snapshot);
        });
      });
    });
  }
  /**
   * @typedef {array} GetTransactionResponse
   * @property {Transaction} 0 The transaction object.
   */
  /**
   * @callback GetTransactionCallback
   * @param {?Error} err Request error, if any.
   * @param {Transaction} transaction The transaction object.
   */
  /**
   * Get a read/write ready {@link Transaction} object.
   *
   * **NOTE:** In the event that you encounter an error while reading/writing,
   * if you decide to forgo calling {@link Transaction#commit} or
   * {@link Transaction#rollback}, then you need to call
   * {@link Transaction#end} to release the underlying {@link Session} object.
   * **Failure to do could result in a Session leak.**
   *
   * Wrapper around {@link v1.SpannerClient#beginTransaction}.
   *
   * @see {@link v1.SpannerClient#beginTransaction}
   *
   * @param {GetTransactionCallback} [callback] Callback function.
   * @returns {Promise<GetTransactionResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getTransaction(function(err, transaction) {});
   *
   * ```
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * database.getTransaction().then(function(data) {
   *   const transaction = data[0];
   * });
   * ```
   */
  getTransaction(
    optionsOrCallback?: GetTransactionOptions,
  ): Promise<[Transaction]>;
  getTransaction(callback: GetTransactionCallback): void;
  getTransaction(
    optionsOrCallback?: GetTransactionOptions | GetTransactionCallback,
    callback?: GetTransactionCallback,
  ): void | Promise<[Transaction]> {
    const cb =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as GetTransactionCallback)
        : callback;
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? (optionsOrCallback as GetTransactionOptions)
        : {};

    return startTrace(
      'Database.getTransaction',
      {
        ...this._traceConfig,
        transactionTag: options.requestOptions?.transactionTag,
      },
      span => {
        this.sessionFactory_.getSessionForReadWrite(
          (err, session, transaction) => {
            if (!err) {
              if (options.requestOptions) {
                transaction!.requestOptions = Object.assign(
                  transaction!.requestOptions || {},
                  options.requestOptions,
                );
              }
              transaction?.setReadWriteTransactionOptions(
                options as RunTransactionOptions,
              );
              span.addEvent('Using Session', {'session.id': session?.id});
              transaction!._observabilityOptions = this._observabilityOptions;
              this._releaseOnEnd(session!, transaction!, span);
            } else {
              setSpanError(span, err);
            }
            span.end();
            cb!(err as grpc.ServiceError | null, transaction);
          },
        );
      },
    );
  }

  /**
   * Query object for listing database operations.
   *
   * @typedef {object} GetDatabaseOperationsOptions
   * @property {string} [filter] An expression for filtering the results of the
   *     request. Filter can be configured as outlined in
   *     {@link v1.DatabaseAdminClient#listDatabaseOperations}.
   * @property {number} [pageSize] Maximum number of results per page.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetDatabaseOperationsCallback} [callback] Callback function.
   */
  /**
   * @typedef {array} GetDatabaseOperationsResponse
   * @property {IOperation[]} 0 Array of {@link IOperation} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * List pending and completed operations for the database.
   *
   * @see {@link Instance.getDatabaseOperations}
   *
   * @param {GetDatabaseOperationsOptions} [options] Contains query object for
   *     listing database operations and request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @returns {Promise<GetDatabaseOperationsResponse>} When resolved, contains
   *     a paged list of database operations.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const [operations] = await database.getOperations();
   *
   * //-
   * // To manually handle pagination, set autoPaginate:false in gaxOptions.
   * //-
   * let pageToken = undefined;
   * do {
   *   const [operations, , response] = await database.getOperations({
   *     pageSize: 3,
   *     pageToken,
   *     gaxOptions: {autoPaginate: false},
   *   });
   *   operations.forEach(operation => {
   *     // Do something with operation
   *   });
   *   pageToken = response.nextPageToken;
   * } while (pageToken);
   * ```
   */
  getOperations(
    options?: GetDatabaseOperationsOptions,
  ): Promise<GetDatabaseOperationsResponse>;
  getOperations(callback: GetDatabaseOperationsCallback): void;
  getOperations(
    options: GetDatabaseOperationsOptions,
    callback: GetDatabaseOperationsCallback,
  ): void;
  async getOperations(
    optionsOrCallback?:
      | GetDatabaseOperationsOptions
      | GetDatabaseOperationsCallback,
  ): Promise<GetDatabaseOperationsResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    // Create a query that lists database operations only on this database from
    // the instance. Operation name will be prefixed with the database path for
    // all operations on this database
    let dbSpecificFilter = `name:${this.formattedName_}`;
    if (options && options.filter) {
      dbSpecificFilter = `(${dbSpecificFilter}) AND (${options.filter})`;
    }
    const dbSpecificQuery: GetDatabaseOperationsOptions = {
      ...options,
      filter: dbSpecificFilter,
    };

    return this.instance.getDatabaseOperations(dbSpecificQuery);
  }

  /**
   * @typedef {array} GetDatabaseRolesResponse
   * @property {IDatabaseRolees[]} 0 Array of list of database roles.
   * @property {object} 1 A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetDatabaseRolesCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Gets a list of database roles
   *
   * @see {@link v1.DatabaseAdminClient#getDatabaseRoles}
   * @see [GetDatabaseRoles API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseRoles)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetDatabaseRolesCallback} [callback] Callback function.
   * @returns {Promise<GetDatabaseRolesResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.getDatabaseRoles(function(err, roles) {
   *   // `roles` is an array of `DatabaseRoles` objects.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, roles, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     database.getDatabaseRoles(nextQuery, callback);
   *   }
   * }
   *
   * database.getInstances({
   *   gaxOptions: {autoPaginate: false}
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.getInstances().then(function(data) {
   *   const roles = data[0];
   * });
   * ```
   */
  getDatabaseRoles(gaxOptions?: CallOptions): Promise<GetDatabaseRolesResponse>;
  getDatabaseRoles(callback: GetDatabaseRolesCallback): void;
  getDatabaseRoles(
    gaxOptions: CallOptions,
    callback: GetDatabaseRolesCallback,
  ): void;
  getDatabaseRoles(
    optionsOrCallback?: CallOptions | GetDatabaseRolesCallback,
    cb?: GetDatabaseRolesCallback,
  ): void | Promise<GetDatabaseRolesResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    let reqOpts = {
      parent: this.formattedName_,
    };

    // Copy over pageSize and pageToken values from gaxOptions.
    // However, values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetDatabaseRolesOptions).pageSize,
          pageToken: (gaxOpts as GetDatabaseRolesOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetDatabaseRolesOptions).pageSize;
      delete (gaxOpts as GetDatabaseRolesOptions).pageToken;
    }

    this.request<
      IDatabaseRole,
      databaseAdmin.spanner.admin.database.v1.ListDatabaseRolesResponse
    >(
      {
        client: 'DatabaseAdminClient',
        method: 'listDatabaseRoles',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, roles, nextPageRequest, ...args) => {
        const nextQuery = nextPageRequest!
          ? extend({}, gaxOpts, nextPageRequest!)
          : null;

        callback!(err, roles, nextQuery, ...args);
      },
    );
  }

  /**
   * Make an API request, first assuring an active session is used.
   *
   * @private
   *
   * @param {object} config Request config
   * @param {function} callback Callback function
   */
  makePooledRequest_(config: RequestConfig): Promise<Session>;
  makePooledRequest_(
    config: RequestConfig,
    callback: PoolRequestCallback,
  ): void;
  makePooledRequest_(
    config: RequestConfig,
    callback?: PoolRequestCallback,
  ): void | Promise<Session> {
    const sessionFactory_ = this.sessionFactory_;
    sessionFactory_.getSessionForReadWrite((err, session) => {
      if (err) {
        callback!(err as ServiceError, null);
        return;
      }

      const span = getActiveOrNoopSpan();
      span.addEvent('Using Session', {'session.id': session?.id});
      config.reqOpts.session = session!.formattedName_;
      this.request<Session>(config, (err, ...args) => {
        sessionFactory_.release(session!);
        callback!(err, ...args);
      });
    });
  }

  /**
   * Make an API request as a stream, first assuring an active session is used.
   *
   * @private
   *
   * @param {object} config Request config
   * @returns {Stream}
   */
  makePooledStreamingRequest_(config: RequestConfig): Readable {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const sessionFactory_ = this.sessionFactory_;
    let requestStream: CancelableDuplex;
    let session: Session | null;
    const waitForSessionStream = streamEvents(through.obj());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (waitForSessionStream as any).abort = () => {
      releaseSession();
      if (requestStream) {
        requestStream.cancel();
      }
    };
    function destroyStream(err: grpc.ServiceError) {
      waitForSessionStream.destroy(err);
    }
    function releaseSession() {
      if (session) {
        sessionFactory_.release(session);
        session = null;
      }
    }
    waitForSessionStream.on('reading', () => {
      sessionFactory_.getSession((err, session_) => {
        const span = getActiveOrNoopSpan();
        if (err) {
          setSpanError(span, err as ServiceError);
          destroyStream(err as ServiceError);
          return;
        }
        span.addEvent('Using Session', {'session.id': session_?.id});
        session = session_!;
        config.reqOpts.session = session!.formattedName_;
        requestStream = self.requestStream(config);
        requestStream
          .on('error', releaseSession)
          .on('error', destroyStream)
          .on('end', releaseSession)
          .pipe(waitForSessionStream);
      });
    });
    return waitForSessionStream;
  }

  /**
   * @typedef {object} RestoreOptions
   * @property {google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig}
   *     encryptionConfig An encryption configuration describing
   *     the encryption type and key resources in Cloud KMS used to
   *     encrypt/decrypt the database to restore to.
   * @property {CallOptions} [gaxOptions] The request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} RestoreDatabaseResponse
   * @property {Database} 0 The new {@link Database}.
   * @property {google.longrunning.Operation} 1 An {@link Operation} object that can be used to check
   *     the status of the request.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback RestoreDatabaseCallback
   * @param {?Error} err Request error, if any.
   * @param {Database} database The new {@link Database}.
   * @param {google.longrunning.Operation} operation An {@link Operation} object that can be used to
   *     check the status of the request.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Restore a backup into this database.
   *
   * When this call completes, the restore will have commenced but will not
   * necessarily have completed.
   *
   * @param {string} backupPath The path of the backup to restore.
   * @param {RestoreOptions} [options] Request configuration options.
   * @param {RestoreDatabaseCallback} [callback] Callback function.
   * @returns {Promise<RestoreDatabaseResponse>} When resolved, contains the restore operation.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const backupName = 'projects/my-project/instances/my-instance/backups/my-backup';
   * const [, restoreOperation] = await database.restore(backupName);
   * // Wait for restore to complete
   * await restoreOperation.promise();
   *
   * //-
   * // Restore database with a different encryption key to the one used by the
   * // backup.
   * //-
   * const [, restoreWithKeyOperation] = await database.restore(
   *   backupName,
   *   {
   *     encryptionConfig: {
   *       encryptionType: 'CUSTOMER_MANAGED_ENCRYPTION',
   *       kmsKeyName: 'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key',
   *     }
   *   },
   * );
   * // Wait for restore to complete
   * await restoreWithKeyOperation.promise();
   * ```
   */
  restore(backupPath: string): Promise<RestoreDatabaseResponse>;
  restore(
    backupPath: string,
    options?: RestoreOptions | CallOptions,
  ): Promise<RestoreDatabaseResponse>;
  restore(backupPath: string, callback: RestoreDatabaseCallback): void;
  restore(
    backupPath: string,
    options: RestoreOptions | CallOptions,
    callback: RestoreDatabaseCallback,
  ): void;
  restore(
    backupName: string,
    optionsOrCallback?: RestoreOptions | CallOptions | RestoreDatabaseCallback,
    cb?: RestoreDatabaseCallback,
  ): Promise<RestoreDatabaseResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as RestoreDatabaseCallback)
        : cb;
    const gaxOpts =
      'gaxOptions' in options
        ? (options as RestoreOptions).gaxOptions
        : (options as CallOptions);

    const reqOpts: databaseAdmin.spanner.admin.database.v1.IRestoreDatabaseRequest =
      {
        parent: this.instance.formattedName_,
        databaseId: this.id,
        backup: Backup.formatName_(this.instance.formattedName_, backupName),
      };

    if (
      'encryptionConfig' in options &&
      (options as RestoreOptions).encryptionConfig
    ) {
      reqOpts.encryptionConfig = (options as RestoreOptions).encryptionConfig;
    }

    return this.request(
      {
        client: 'DatabaseAdminClient',
        method: 'restoreDatabase',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, operation, resp) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }
        callback!(null, this, operation, resp);
      },
    );
  }

  /**
   * Transaction options.
   *
   * @typedef {object} DatabaseRunRequest
   * @property {number} [exactStaleness] Executes all reads at the timestamp
   *     that is `exactStaleness` old.
   * @property {date} [readTimestamp] Execute all reads at the given
   *     timestamp.
   * @property {boolean} [strong] Read at the timestamp where all previously
   *     committed transactions are visible.
   */
  /**
   * @typedef {array} RunResponse
   * @property {Array<Row | Json>} 0 Rows are returned as an array objects. Each
   *     object has a `name` and `value` property. To get a serialized object,
   *     call `toJSON()`.
   * @property {?google.spanner.v1.IResultSetStats} 1 Query statistics, if the query is executed in
   *     PLAN or PROFILE mode.
   */
  /**
   * @callback RunCallback
   * @param {?Error} err Request error, if any.
   * @param {Array<Row | Json>} rows Rows are returned as an array of objects.
   *     Each object has a `name` and `value` property. To get a serialized
   *     object, call `toJSON()`.
   * @param {?google.spanner.v1.IResultSetStats} stats Query statistics, if the query is executed
   *     in PLAN or PROFILE mode.
   */
  /**
   * Execute a SQL statement on this database.
   *
   * Wrapper around {@link v1.SpannerClient#executeStreamingSql}.
   *
   * @see {@link v1.SpannerClient#executeStreamingSql}
   * @see [Query Syntax](https://cloud.google.com/spanner/docs/query-syntax)
   * @see [ExecuteSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteSql)
   *
   * @param {string|ExecuteSqlRequest} query A SQL query or
   *     {@link ExecuteSqlRequest} object.
   * @param {TimestampBounds} [options] Snapshot timestamp bounds.
   * @param {RunCallback} [callback] Callback function.
   * @returns {Promise<RunResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const query = 'SELECT * FROM Singers';
   *
   * database.run(query, function(err, rows) {
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
   * // Rows are returned as an array of object arrays. Each object has a `name`
   * // and `value` property. To get a serialized object, call `toJSON()`.
   * //-
   * database.run(query, function(err, rows) {
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
   * // Alternatively, set `query.json` to `true`, and this step will be performed
   * // automatically.
   * //-
   * database.run(query, function(err, rows) {
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
   *
   * //-
   * // The SQL query string can contain parameter placeholders. A parameter
   * // placeholder consists of '@' followed by the parameter name.
   * //-
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name',
   *   params: {
   *     name: 'Eddie Wilson'
   *   }
   * };
   *
   * database.run(query, function(err, rows) {});
   *
   * //-
   * // If you need to enforce a specific param type, a types map can be provided.
   * // This is typically useful if your param value can be null.
   * //-
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
   * database.run(query, function(err, rows) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.run(query).then(function(data) {
   *   const rows = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/crud.js</caption>
   * region_tag:spanner_query_data
   * Full example:
   *
   * @example <caption>include:samples/index-query-data.js</caption>
   * region_tag:spanner_query_data_with_index
   * Querying data with an index:
   */
  run(query: string | ExecuteSqlRequest): Promise<RunResponse>;
  run(
    query: string | ExecuteSqlRequest,
    options?: TimestampBounds,
  ): Promise<RunResponse>;
  run(query: string | ExecuteSqlRequest, callback: RunCallback): void;
  run(
    query: string | ExecuteSqlRequest,
    options: TimestampBounds,
    callback: RunCallback,
  ): void;
  run(
    query: string | ExecuteSqlRequest,
    optionsOrCallback?: TimestampBounds | RunCallback,
    cb?: RunCallback,
  ): void | Promise<RunResponse> {
    let stats: ResultSetStats;
    let metadata: ResultSetMetadata;
    const rows: Row[] = [];
    const callback =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as RunCallback)
        : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? (optionsOrCallback as TimestampBounds)
        : {};

    return startTrace(
      'Database.run',
      {
        ...(query as ExecuteSqlRequest),
        ...this._traceConfig,
      },
      span => {
        this.runStream(query, options)
          .on('error', err => {
            setSpanError(span, err);
            span.end();
            callback!(err as grpc.ServiceError, rows, stats, metadata);
          })
          .on('response', response => {
            if (response.metadata) {
              metadata = response.metadata;
            }
          })
          .on('stats', _stats => (stats = _stats))
          .on('data', row => {
            rows.push(row);
          })
          .on('end', () => {
            span.end();
            callback!(null, rows, stats, metadata);
          });
      },
    );
  }
  /**
   * Partitioned DML transactions are used to execute DML statements with a
   * different execution strategy that provides different, and often better,
   * scalability properties for large, table-wide operations than DML in a
   * Transaction transaction. Smaller scoped statements, such as an OLTP workload,
   * should prefer using Transaction transactions.
   *
   * @see {@link Transaction#runUpdate}
   *
   * @param {string|ExecuteSqlRequest} query A DML statement or
   *     {@link ExecuteSqlRequest} object.
   * @param {RunUpdateCallback} [callback] Callback function.
   * @returns {Promise<RunUpdateResponse>}
   */
  runPartitionedUpdate(
    query: string | RunPartitionedUpdateOptions,
  ): Promise<[number]>;
  runPartitionedUpdate(
    query: string | RunPartitionedUpdateOptions,
    callback?: RunUpdateCallback,
  ): void;
  runPartitionedUpdate(
    query: string | RunPartitionedUpdateOptions,
    callback?: RunUpdateCallback,
  ): void | Promise<[number]> {
    return startTrace(
      'Database.runPartitionedUpdate',
      {
        ...(query as RunPartitionedUpdateOptions),
        ...this._traceConfig,
        requestTag: (query as RunPartitionedUpdateOptions)?.requestOptions
          ?.requestTag,
      },
      span => {
        this.sessionFactory_.getSessionForPartitionedOps((err, session) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback!(err as ServiceError, 0);
            return;
          }

          void this._runPartitionedUpdate(session!, query, (err, count) => {
            if (err) {
              setSpanError(span, err);
            }
            span.end();
            callback!(err, count);
          });
        });
      },
    );
  }

  _runPartitionedUpdate(
    session: Session,
    query: string | RunPartitionedUpdateOptions,
    callback?: RunUpdateCallback,
  ): void | Promise<number> {
    const transaction = session.partitionedDml();

    if (typeof query !== 'string' && query.excludeTxnFromChangeStreams) {
      transaction.excludeTxnFromChangeStreams();
    }
    transaction.begin(err => {
      if (err) {
        this.sessionFactory_.release(session!);
        callback!(err, 0);
        return;
      }

      transaction.runUpdate(query, async (err, updateCount) => {
        if (err) {
          if (err.code !== grpc.status.ABORTED) {
            this.sessionFactory_.release(session!);
            callback!(err, 0);
            return;
          }
          void this._runPartitionedUpdate(session, query, callback);
        } else {
          this.sessionFactory_.release(session!);
          callback!(null, updateCount);
          return;
        }
      });
    });
  }

  /**
   * Create a readable object stream to receive resulting rows from a SQL
   * statement.
   *
   * Wrapper around {@link v1.SpannerClient#executeStreamingSql}.
   *
   * @see {@link v1.SpannerClient#executeStreamingSql}
   * @see [Query Syntax](https://cloud.google.com/spanner/docs/query-syntax)
   * @see [ExecuteSql API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.ExecuteSql)
   *
   * @fires PartialResultStream#response
   *
   * @param {string|ExecuteSqlRequest} query A SQL query or
   *     {@link ExecuteSqlRequest} object.
   * @param {TimestampBounds} [options] Snapshot timestamp bounds.
   * @returns {PartialResultStream} A readable stream that emits rows.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const query = 'SELECT * FROM Singers';
   *
   * database.runStream(query)
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
   *   // ]
   *   })
   *   .on('end', function() {
   *     // All results retrieved.
   *   });
   *
   * //-
   * // Rows are returned as an array of objects. Each object has a `name` and
   * // `value` property. To get a serialized object, call `toJSON()`.
   * //-
   * database.runStream(query)
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
   *
   * //-
   * // Alternatively, set `query.json` to `true`, and this step will be performed
   * // automatically.
   * //-
   * query.json = true;
   *
   * database.runStream(query)
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
   * // The SQL query string can contain parameter placeholders. A parameter
   * // placeholder consists of '@' followed by the parameter name.
   * //-
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name',
   *   params: {
   *     name: 'Eddie Wilson'
   *   }
   * };
   *
   * database.runStream(query)
   *   .on('error', function(err) {})
   *   .on('data', function(row) {})
   *   .on('end', function() {});
   *
   * //-
   * // If you need to enforce a specific param type, a types map can be provided.
   * // This is typically useful if your param value can be null.
   * //-
   * const query = {
   *   sql: 'SELECT * FROM Singers WHERE name = @name',
   *   params: {
   *     name: 'Eddie Wilson'
   *   },
   *   types: {
   *     name: 'string'
   *   }
   * };
   *
   * database.runStream(query)
   *   .on('error', function(err) {})
   *   .on('data', function(row) {})
   *   .on('end', function() {});
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * database.runStream(query)
   *   .on('data', function(row) {
   *     this.end();
   *   });
   * ```
   */
  runStream(
    query: string | ExecuteSqlRequest,
    options?: TimestampBounds,
  ): PartialResultStream {
    const proxyStream: Transform = through.obj();
    return startTrace(
      'Database.runStream',
      {
        ...(query as ExecuteSqlRequest),
        ...this._traceConfig,
        requestTag: (query as ExecuteSqlRequest)?.requestOptions?.requestTag,
      },
      span => {
        this.sessionFactory_.getSession((err, session) => {
          if (err) {
            setSpanError(span, err);
            proxyStream.destroy(err);
            span.end();
            return;
          }

          span.addEvent('Using Session', {'session.id': session?.id});

          const snapshot = session!.snapshot(options, this.queryOptions_);

          this._releaseOnEnd(session!, snapshot, span);

          let dataReceived = false;
          let dataStream = snapshot.runStream(query);

          const endListener = () => {
            snapshot.end();
          };
          dataStream
            .once('data', () => (dataReceived = true))
            .once('error', err => {
              setSpanError(span, err);

              if (
                !dataReceived &&
                isSessionNotFoundError(err as grpc.ServiceError) &&
                !this.sessionFactory_.isMultiplexedEnabled()
              ) {
                // If it is a 'Session not found' error and we have not yet received
                // any data, we can safely retry the query on a new session.
                // Register the error on the session so the pool can discard it.
                if (session) {
                  session.lastError = err as grpc.ServiceError;
                }
                span.addEvent('No session available', {
                  'session.id': session?.id,
                });
                // Remove the current data stream from the end user stream.
                dataStream.unpipe(proxyStream);
                dataStream.removeListener('end', endListener);
                dataStream.end();
                snapshot.end();
                span.end();
                // Create a new data stream and add it to the end user stream.
                dataStream = this.runStream(query, options);
                dataStream.pipe(proxyStream);
              } else {
                proxyStream.destroy(err);
                snapshot.end();
              }
            })
            .on('stats', stats => proxyStream.emit('stats', stats))
            .on('response', response => proxyStream.emit('response', response))
            .once('end', endListener)
            .pipe(proxyStream);
        });

        finished(proxyStream, err => {
          if (err) {
            setSpanError(span, err);
          }
          span.end();
        });

        return proxyStream as PartialResultStream;
      },
    );
  }

  /**
   * @typedef {object} RunTransactionOptions
   * @property {number} [timeout] The maximum amount of time (in ms) that a
   *     {@link Transaction} should be ran for.
   */
  /**
   * @callback RunTransactionCallback
   * @param {?Error} err An error returned while making this request.
   * @param {Transaction} transaction The transaction object. The transaction has
   *     already been created, and is ready to be queried and committed against.
   */
  /**
   * A transaction in Cloud Spanner is a set of reads and writes that execute
   * atomically at a single logical point in time across columns, rows, and tables
   * in a database.
   *
   * Note that Cloud Spanner does not support nested transactions. If a new
   * transaction is started inside of the run function, it will be an independent
   * transaction.
   *
   * The callback you provide to this function will become the "run function". It
   * will be executed with either an error or a {@link Transaction}
   * object. The Transaction object will let you run queries and queue mutations
   * until you are ready to {@link Transaction#commit}.
   *
   * In the event that an aborted error occurs, we will re-run the `runFn` in its
   * entirety. If you prefer to handle aborted errors for yourself please refer to
   * {@link Database#getTransaction}.
   *
   * **NOTE:** In the event that you encounter an error while reading/writing,
   * if you decide to forgo calling {@link Transaction#commit} or
   * {@link Transaction#rollback}, then you need to call
   * {@link Transaction#end} to release the underlying {@link Session} object.
   * **Failure to do could result in a Session leak.**
   *
   * For a more complete listing of functionality available to a Transaction, see
   * the {@link Transaction} API documentation. For a general overview of
   * transactions within Cloud Spanner, see
   * [Transactions](https://cloud.google.com/spanner/docs/transactions) from the
   * official Cloud Spanner documentation.
   *
   * If you would like to run a transaction and receive a promise or use
   * async/await, use {@link Database#runTransactionAsync}.
   *
   * @see [Transactions](https://cloud.google.com/spanner/docs/transactions)
   *
   * @param {RunTransactionOptions} [options] Transaction runner options.
   * @param {RunTransactionCallback} callback A function to execute in the context
   *     of a transaction.
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
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Run a transactional query.
   *   transaction.run('SELECT * FROM Singers', function(err, rows) {
   *     if (err) {
   *       // Error handling omitted.
   *     }
   *
   *     // Queue a mutation (note that there is no callback passed to `insert`).
   *     transaction.insert('Singers', {
   *       SingerId: 'Id3b',
   *       Name: 'Joe West'
   *     });
   *
   *     // Commit the transaction.
   *     transaction.commit(function(err) {
   *       if (!err) {
   *         // Transaction committed successfully.
   *       }
   *     });
   *   });
   * });
   *
   * ```
   * @example <caption>include:samples/transaction.js</caption>
   * region_tag:spanner_read_write_transaction
   * Read-write transaction:
   */
  runTransaction(runFn: RunTransactionCallback): void;
  runTransaction(
    options: RunTransactionOptions,
    runFn: RunTransactionCallback,
  ): void;
  runTransaction(
    optionsOrRunFn: RunTransactionOptions | RunTransactionCallback,
    fn?: RunTransactionCallback,
  ): void {
    const runFn =
      typeof optionsOrRunFn === 'function'
        ? (optionsOrRunFn as RunTransactionCallback)
        : fn;
    const options =
      typeof optionsOrRunFn === 'object' && optionsOrRunFn
        ? (optionsOrRunFn as RunTransactionOptions)
        : {};

    startTrace(
      'Database.runTransaction',
      {
        ...this._traceConfig,
        transactionTag: options.requestOptions?.transactionTag,
      },
      span => {
        this.sessionFactory_.getSessionForReadWrite(
          (err, session?, transaction?) => {
            if (err) {
              setSpanError(span, err);
            }

            if (err && isSessionNotFoundError(err as grpc.ServiceError)) {
              span.addEvent('No session available', {
                'session.id': session?.id,
              });
              span.end();
              this.runTransaction(options, runFn!);
              return;
            }

            if (err) {
              span.end();
              runFn!(err as grpc.ServiceError);
              return;
            }

            transaction!._observabilityOptions = this._observabilityOptions;

            transaction!.requestOptions = Object.assign(
              transaction!.requestOptions || {},
              options.requestOptions,
            );

            transaction!.setReadWriteTransactionOptions(
              options as RunTransactionOptions,
            );

            const release = () => {
              this.sessionFactory_.release(session!);
              span.end();
            };

            const runner = new TransactionRunner(
              session!,
              transaction!,
              runFn!,
              options,
            );

            runner.run().then(release, err => {
              setSpanError(span, err!);

              if (isSessionNotFoundError(err)) {
                span.addEvent('No session available', {
                  'session.id': session?.id,
                });
                release();
                this.runTransaction(options, runFn!);
              } else {
                setImmediate(runFn!, err);
                release();
              }
            });
          },
        );
      },
    );
  }

  runTransactionAsync<T = {}>(
    runFn: AsyncRunTransactionCallback<T>,
  ): Promise<T>;
  runTransactionAsync<T = {}>(
    options: RunTransactionOptions,
    runFn: AsyncRunTransactionCallback<T>,
  ): Promise<T>;
  /**
   * @callback AsyncRunTransactionCallback
   * @param {Transaction} transaction The transaction object. The transaction has
   *     already been created, and is ready to be queried and committed against.
   */
  /**
   * A transaction in Cloud Spanner is a set of reads and writes that execute
   * atomically at a single logical point in time across columns, rows, and tables
   * in a database.
   *
   * Note that Cloud Spanner does not support nested transactions. If a new
   * transaction is started inside of the run function, it will be an independent
   * transaction.
   *
   * The async function you provide will become the "run function". It
   * will be executed with a {@link Transaction}
   * object. The Transaction object will let you run queries and queue mutations
   * until you are ready to {@link Transaction#commit}.
   *
   * In the event that an aborted error occurs, we will re-run the `runFn` in its
   * entirety. If you prefer to handle aborted errors for yourself please refer to
   * {@link Database#getTransaction}.
   *
   * **NOTE:** In the event that you encounter an error while reading/writing,
   * if you decide to forgo calling {@link Transaction#commit} or
   * {@link Transaction#rollback}, then you need to call
   * {@link Transaction#end} to release the underlying {@link Session} object.
   * **Failure to do could result in a Session leak.**
   *
   * For a more complete listing of functionality available to a Transaction, see
   * the {@link Transaction} API documentation. For a general overview of
   * transactions within Cloud Spanner, see
   * [Transactions](https://cloud.google.com/spanner/docs/transactions) from the
   * official Cloud Spanner documentation.
   *
   * @see [Transactions](https://cloud.google.com/spanner/docs/transactions)
   *
   * @param {RunTransactionOptions} [options] Transaction runner options.
   * @param {AsyncRunTransactionCallback} callback A function to execute in the
   *      context of a transaction.
   * @returns {Promise}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const data = await database.runTransactionAsync(async (transaction) => {
   *   const [rows] = await transaction.run('SELECT * FROM MyTable');
   *   const data = rows.map(row => row.thing);
   *
   *   await transaction.commit();
   *   return data;
   * });
   * ```
   */
  async runTransactionAsync<T = {}>(
    optionsOrRunFn: RunTransactionOptions | AsyncRunTransactionCallback<T>,
    fn?: AsyncRunTransactionCallback<T>,
  ): Promise<T> {
    const runFn =
      typeof optionsOrRunFn === 'function'
        ? (optionsOrRunFn as AsyncRunTransactionCallback<T>)
        : fn!;
    const options =
      typeof optionsOrRunFn === 'object'
        ? (optionsOrRunFn as RunTransactionOptions)
        : {};

    let sessionId = '';
    const getSession = this.sessionFactory_.getSessionForReadWrite.bind(
      this.sessionFactory_,
    );

    return startTrace(
      'Database.runTransactionAsync',
      {
        ...this._traceConfig,
        transactionTag: options?.requestOptions?.transactionTag,
      },
      async span => {
        // Loop to retry 'Session not found' errors.
        // (and yes, we like while (true) more than for (;;) here)
        // eslint-disable-next-line no-constant-condition
        while (true) {
          try {
            const [session, transaction] = await promisify(getSession)();
            transaction.requestOptions = Object.assign(
              transaction.requestOptions || {},
              options.requestOptions,
            );
            transaction!.setReadWriteTransactionOptions(
              options as RunTransactionOptions,
            );
            sessionId = session?.id;
            span.addEvent('Using Session', {'session.id': sessionId});
            const runner = new AsyncTransactionRunner<T>(
              session,
              transaction,
              runFn,
              options,
            );

            try {
              return await runner.run();
            } catch (e) {
              setSpanErrorAndException(span, e as Error);
              throw e;
            } finally {
              span.end();
              this.sessionFactory_.release(session);
            }
          } catch (e) {
            if (isSessionNotFoundError(e as ServiceError)) {
              span.addEvent('No session available', {
                'session.id': sessionId,
              });
            } else {
              span.end();
              throw e;
            }
          }
        }
      },
    );
  }

  /**
   * Write a batch of mutations to Spanner.
   *
   * All mutations in a group are committed atomically. However, mutations across
   * groups can be committed non-atomically in an unspecified order and thus, they
   * must be independent of each other. Partial failure is possible, i.e., some groups
   * may have been committed successfully, while some may have failed. The results of
   * individual batches are streamed into the response as the batches are applied.
   *
   * batchWriteAtLeastOnce requests are not replay protected, meaning that each mutation group may
   * be applied more than once. Replays of non-idempotent mutations may have undesirable
   * effects. For example, replays of an insert mutation may produce an already exists
   * error or if you use generated or commit timestamp-based keys, it may result in additional
   * rows being added to the mutation's table. We recommend structuring your mutation groups to
   * be idempotent to avoid this issue.
   *
   * @method Spanner#batchWriteAtLeastOnce
   *
   * @param {MutationGroup[]} [mutationGroups] The group of mutations to be applied.
   * @param {BatchWriteOptions} [options] Options object for batch write request.
   *
   * @returns {ReadableStream} An object stream which emits
   *   {@link protos.google.spanner.v1.BatchWriteResponse|BatchWriteResponse}
   *  on 'data' event.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const mutationGroup = new MutationGroup();
   * mutationGroup.insert('Singers', {
   *  SingerId: '1',
   *  FirstName: 'Marc',
   *  LastName: 'Richards',
   *  });
   *
   * database.batchWriteAtLeastOnce([mutationGroup])
   *   .on('error', console.error)
   *   .on('data', response => {
   *        console.log('response: ', response);
   *   })
   *   .on('end', () => {
   *        console.log('Request completed successfully');
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * database.batchWriteAtLeastOnce()
   *   .on('data', response => {
   *     this.end();
   *   });
   * ```
   */
  batchWriteAtLeastOnce(
    mutationGroups: MutationGroup[],
    options?: BatchWriteOptions,
  ): NodeJS.ReadableStream {
    const proxyStream: Transform = through.obj();

    return startTrace(
      'Database.batchWriteAtLeastOnce',
      {
        ...this._traceConfig,
        transactionTag: options?.requestOptions?.transactionTag,
      },
      span => {
        this.sessionFactory_.getSessionForReadWrite((err, session) => {
          if (err) {
            proxyStream.destroy(err);
            setSpanError(span, err);
            span.end();
            return;
          }

          span.addEvent('Using Session', {'session.id': session?.id});
          const gaxOpts = extend(true, {}, options?.gaxOptions);
          const reqOpts = Object.assign(
            {} as spannerClient.spanner.v1.BatchWriteRequest,
            {
              session: session!.formattedName_!,
              mutationGroups: mutationGroups.map(mg => mg.proto()),
              requestOptions: options?.requestOptions,
              excludeTxnFromChangeStream: options?.excludeTxnFromChangeStreams,
            },
          );
          let dataReceived = false;
          let dataStream = this.requestStream({
            client: 'SpannerClient',
            method: 'batchWrite',
            reqOpts,
            gaxOpts,
            headers: this.commonHeaders_,
          });
          dataStream
            .once('data', () => (dataReceived = true))
            .once('error', err => {
              setSpanError(span, err);

              if (
                !dataReceived &&
                isSessionNotFoundError(err as grpc.ServiceError)
              ) {
                // If there's a 'Session not found' error and we have not yet received
                // any data, we can safely retry the writes on a new session.
                // Register the error on the session so the pool can discard it.
                if (session) {
                  session.lastError = err as grpc.ServiceError;
                }
                span.addEvent('No session available', {
                  'session.id': session?.id,
                });
                // Remove the current data stream from the end user stream.
                dataStream.unpipe(proxyStream);
                dataStream.end();
                span.end();
                // Create a new stream and add it to the end user stream.
                dataStream = this.batchWriteAtLeastOnce(
                  mutationGroups,
                  options,
                );
                dataStream.pipe(proxyStream);
              } else {
                span.end();
                proxyStream.destroy(err);
              }
            })
            .once('end', () => {
              span.end();
              this.sessionFactory_.release(session!);
            })
            .pipe(proxyStream);
        });

        return proxyStream as NodeJS.ReadableStream;
      },
    );
  }

  /**
   * Write mutations using a single RPC invocation without replay protection.
   *
   * writeAtLeastOnce writes mutations to Spanner using a single Commit RPC.
   * These requests are not replay protected, meaning that it may apply mutations more
   * than once, if the mutations are not idempotent, this may lead to a failure being
   * reported when the mutation was applied once. Replays non-idempotent mutations may
   * have undesirable effects. For example, replays of an insert mutation may produce an
   * already exists error. For this reason, most users of the library will prefer to use
   * {@link runTransaction} instead.
   *
   * However, {@link writeAtLeastOnce()} requires only a single RPC, whereas {@link runTransaction()}
   * requires two RPCs (one of which may be performed in advance), and so this method may be
   * appropriate for latency sensitive and/or high throughput blind writing.
   *
   * We recommend structuring your mutation set to be idempotent to avoid this issue.
   *
   * @param {MutationSet} [mutations] Set of Mutations to be applied.
   * @param {CallOptions} [options] Options object for blind write request.
   * @param {CommitCallback} [callback] Callback function for blind write request.
   *
   * @returns {Promise}
   *
   * @example
   * ```
   * const {Spanner, MutationSet} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const mutations = new MutationSet();
   * mutations.upsert('Singers', {
   *    SingerId: 1,
   *    FirstName: 'Scarlet',
   *    LastName: 'Terry',
   *  });
   * mutations.upsert('Singers', {
   *    SingerId: 2,
   *    FirstName: 'Marc',
   *    LastName: 'Richards',
   *  });
   *
   * try {
   *  const [response] = await database.writeAtLeastOnce(mutations, {});
   *  console.log(response.commitTimestamp);
   * } catch(err) {
   *  console.log("Error: ", err);
   * }
   * ```
   */
  writeAtLeastOnce(mutations: MutationSet): Promise<CommitResponse>;
  writeAtLeastOnce(
    mutations: MutationSet,
    options: WriteAtLeastOnceOptions,
  ): Promise<CommitResponse>;
  writeAtLeastOnce(mutations: MutationSet, callback: CommitCallback): void;
  writeAtLeastOnce(
    mutations: MutationSet,
    options: WriteAtLeastOnceOptions,
    callback: CommitCallback,
  ): void;
  writeAtLeastOnce(
    mutations: MutationSet,
    optionsOrCallback?: WriteAtLeastOnceOptions | CommitCallback,
    callback?: CommitCallback,
  ): void | Promise<CommitResponse> {
    const cb =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as CommitCallback)
        : callback;
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? (optionsOrCallback as WriteAtLeastOnceOptions)
        : {};

    return startTrace('Database.writeAtLeastOnce', this._traceConfig, span => {
      this.sessionFactory_.getSession((err, session?, transaction?) => {
        if (
          err &&
          isSessionNotFoundError(err as grpc.ServiceError) &&
          !this.sessionFactory_.isMultiplexedEnabled()
        ) {
          span.addEvent('No session available', {
            'session.id': session?.id,
          });
          span.end();
          this.writeAtLeastOnce(mutations, options, cb!);
          return;
        }
        if (err) {
          setSpanError(span, err);
          span.end();
          cb!(err as grpc.ServiceError);
          return;
        }
        span.addEvent('Using Session', {'session.id': session?.id});
        this._releaseOnEnd(session!, transaction!, span);
        try {
          transaction!.setReadWriteTransactionOptions(
            options as RunTransactionOptions,
          );
          transaction?.setQueuedMutations(mutations.proto());
          return transaction?.commit(options, (err, resp) => {
            if (err) {
              setSpanError(span, err);
            }
            span.end();
            cb!(err, resp);
          });
        } catch (e) {
          setSpanErrorAndException(span, e as Error);
          span.end();
          throw e;
        }
      });
    });
  }

  /**
   * Create a Session object.
   *
   * It is unlikely you will need to interact with sessions directly. By default,
   * sessions are created and utilized for maximum performance automatically.
   *
   * @param {string} [name] The name of the session. If not provided, it is
   *     assumed you are going to create it.
   * @returns {Session} A Session object.
   *
   * @example
   * ```
   * var session = database.session('session-name');
   * ```
   */
  session(name?: string) {
    return new Session(this, name);
  }
  /**
   * Get a reference to a Table object.
   *
   * @throws {GoogleError} If a name is not provided.
   *
   * @param {string} name The name of the table.
   * @return {Table} A Table object.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const table = database.table('Singers');
   * ```
   */

  /**
   * @callback SetIamPolicyCallback
   * @param {?Error} err Request error, if any.
   * @param {google.iam.v1.Policy| undefined} policy Returns policy for the give database
   */
  /**
   * Sets the policy for the database.
   *
   * A Policy is a collection of bindings. A binding binds one or more members, or principals,
   * to a single role. Principals can be user accounts, service accounts, Google groups, and
   * domains (such as G Suite). A role is a named list of permissions; each role can be an IAM
   * predefined role or a user-created custom role.
   *
   * @see {@link #setIamPolicy}
   *
   * @method Database#setIamPolicy
   * @param {object} [policy] requestedPolicyVersion and gax options(configuration options)
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html}
   *     for more details on gax options.
   * @param {object} [options] Requested configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html}
   *     for more details on Call Options.
   * @param {SetIamPolicyCallback} [callback] Callback function.
   * @returns {Promise<Policy | undefined>}
   *     When resolved, contains the current policy of the database.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   * const binding = {
   *     role: 'roles/spanner.fineGrainedAccessUser',
   *     members: ['user:asthamohta@google.com'],
   *     condition: {
   *         title: 'new condition',
   *         expression: 'resource.name.endsWith("/databaseRoles/parent")',
   *     },
   * };
   * const policy = {
   *     bindings: [newBinding],
   *     version: 3,
   *};
   * const policy = await database.setIamPolicy({policy: policy});
   * ```
   */
  setIamPolicy(policy: SetIamPolicyRequest): Promise<SetIamPolicyResponse>;
  setIamPolicy(
    policy: SetIamPolicyRequest,
    options?: CallOptions,
  ): Promise<SetIamPolicyResponse>;
  setIamPolicy(
    policy: SetIamPolicyRequest,
    callback: SetIamPolicyCallback,
  ): void;
  setIamPolicy(
    policy: SetIamPolicyRequest,
    options: CallOptions,
    callback: SetIamPolicyCallback,
  ): void;
  setIamPolicy(
    policy: SetIamPolicyRequest,
    optionsOrCallback?: CallOptions | SetIamPolicyCallback,
    cb?: SetIamPolicyCallback,
  ): Promise<SetIamPolicyResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function'
        ? (optionsOrCallback as SetIamPolicyCallback)
        : cb;
    const gaxOpts = options as CallOptions;

    const reqOpts: databaseAdmin.iam.v1.ISetIamPolicyRequest = {
      resource: this.formattedName_,
      policy: policy.policy,
      updateMask: policy.updateMask || null,
    };

    this.request<SetIamPolicyResponse>(
      {
        client: 'DatabaseAdminClient',
        method: 'setIamPolicy',
        reqOpts,
        gaxOpts: gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, resp) => {
        callback!(err, resp);
      },
    );
  }

  table(name: string) {
    if (!name) {
      throw new GoogleError('A name is required to access a Table object.');
    }
    return new Table(this, name);
  }
  /**
   * Update the schema of the database by creating/altering/dropping tables,
   * columns, indexes, etc.
   *
   * This method immediately responds with an Operation object. Register event
   * handlers for the "error" and "complete" events to see how the operation
   * finishes. Follow along with the examples below.
   *
   * Wrapper around {@link v1.DatabaseAdminClient#updateDatabaseDdl}.
   *
   * @see {@link v1.DatabaseAdminClient#updateDatabaseDdl}
   * @see [Data Definition Language (DDL)](https://cloud.google.com/spanner/docs/data-definition-language)
   * @see [Schema and Data Model](https://cloud.google.com/spanner/docs/schema-and-data-model)
   * @see [UpdateDatabaseDdl API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.UpdateDatabaseDdlRequest)
   *
   * @param {string|string[]|object} statements An array of database DDL
   *     statements, or an
   *     [`UpdateDatabaseDdlRequest` object](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.database.v1#google.spanner.admin.database.v1.UpdateDatabaseDdlRequest).
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {LongRunningOperationCallback} [callback] Callback function.
   * @returns {Promise<LongRunningOperationResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * const statements = [
   *   'CREATE TABLE Singers (' +
   *   '  SingerId INT64 NOT NULL,' +
   *   '  FirstName STRING(1024),' +
   *   '  LastName STRING(1024),' +
   *   '  SingerInfo BYTES(MAX),' +
   *   ') PRIMARY KEY(SingerId)'
   * ];
   *
   * database.updateSchema(statements, function(err, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Database schema updated successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.updateSchema(statements)
   *   .then(function(data) {
   *     const operation = data[0];
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Database schema updated successfully.
   *   });
   *
   * ```
   * @example <caption>include:samples/schema.js</caption>
   * region_tag:spanner_add_column
   * Adding a column:
   *
   * @example <caption>include:samples/index-create.js</caption>
   * region_tag:spanner_create_index
   * Creating an index:
   *
   * @example <caption>include:samples/index-create-stroing.js</caption>
   * region_tag:spanner_create_storing_index
   * Creating a storing index:
   */
  updateSchema(
    statements: Schema,
    gaxOptions?: CallOptions,
  ): Promise<UpdateSchemaResponse>;
  updateSchema(statements: Schema, callback: UpdateSchemaCallback): void;
  updateSchema(
    statements: Schema,
    gaxOptions: CallOptions,
    callback: UpdateSchemaCallback,
  ): void;
  updateSchema(
    statements: Schema,
    optionsOrCallback?: CallOptions | UpdateSchemaCallback,
    cb?: UpdateSchemaCallback,
  ): Promise<UpdateSchemaResponse> | void {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    if (typeof statements === 'string' || Array.isArray(statements)) {
      statements = {
        statements: toArray(statements) as string[],
      };
    }
    const reqOpts: databaseAdmin.spanner.admin.database.v1.IUpdateDatabaseDdlRequest =
      extend(
        {
          database: this.formattedName_,
        },
        statements,
      );
    return this.request(
      {
        client: 'DatabaseAdminClient',
        method: 'updateDatabaseDdl',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      callback!,
    );
  }
  /**
   * Format the database name to include the instance name.
   *
   * @private
   *
   * @param {string} instanceName The formatted instance name.
   * @param {string} name The table name.
   * @returns {string}
   *
   * @example
   * ```
   * Database.formatName_(
   *   'projects/grape-spaceship-123/instances/my-instance',
   *   'my-database'
   * );
   * // 'projects/grape-spaceship-123/instances/my-instance/databases/my-database'
   * ```
   */
  static formatName_(instanceName: string, name: string) {
    if (name.indexOf('/') > -1) {
      return name;
    }
    const databaseName = name.split('/').pop();
    return instanceName + '/databases/' + databaseName;
  }

  /**
   * Gets the Spanner object
   *
   * @private
   *
   * @returns {Spanner}
   */
  private _getSpanner(): Spanner {
    return this.instance.parent as Spanner;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Database, {
  exclude: [
    'batchTransaction',
    'batchWriteAtLeastOnce',
    'getRestoreInfo',
    'getState',
    'getDatabaseDialect',
    'getOperations',
    'runTransaction',
    'runTransactionAsync',
    'table',
    'session',
  ],
});

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
callbackifyAll(Database, {
  exclude: [
    'create',
    'batchCreateSessions',
    'batchTransaction',
    'batchWriteAtLeastOnce',
    'writeAtLeastOnce',
    'close',
    'createBatchTransaction',
    'createSession',
    'createTable',
    'delete',
    'exists',
    'get',
    'getDatabaseDialect',
    'getMetadata',
    'getSchema',
    'getSessions',
    'getSnapshot',
    'getTransaction',
    'getIamPolicy',
    'restore',
    'run',
    'runPartitionedUpdate',
    'runTransaction',
    'runTransactionAsync',
    'session',
    'setMetadata',
    'table',
    'updateSchema',
  ],
});

/**
 * Reference to the {@link Database} class.
 * @name module:@google-cloud/spanner.Database
 * @see Database
 */
export {Database};

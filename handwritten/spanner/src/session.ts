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

/*!
 * @module spanner/session
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const common = require('./common-grpc/service-object');
import {promisifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import * as r from 'teeny-request';
import {
  Snapshot,
  Transaction,
  PartitionedDml,
  TimestampBounds,
} from './transaction';
import {google} from '../protos/protos';
import {
  Database,
  CreateSessionCallback,
  CreateSessionOptions,
} from './database';
import {ServiceObjectConfig} from '@google-cloud/common';
import {
  NormalCallback,
  addLeaderAwareRoutingHeader,
  getCommonHeaders,
} from './common';
import {ObservabilityOptions} from './instrument';
import {grpc, CallOptions} from 'google-gax';
import IRequestOptions = google.spanner.v1.IRequestOptions;
import {Spanner} from '.';
import {injectRequestIDIntoHeaders, nextNthRequest} from './request_id_header';
export type GetSessionResponse = [Session, r.Response];

/**
 * @deprecated. enum to capture the possible session types
 */
export const enum types {
  ReadOnly = 'readonly',
  ReadWrite = 'readwrite',
}

export interface GetSessionMetadataResponse {
  name?: string | null;
  labels?: {[k: string]: string} | null;
  createTime?: google.protobuf.ITimestamp | null;
  approximateLastUseTime?: google.protobuf.ITimestamp | null;
  databaseRole?: string | null;
}

export type GetSessionMetadataCallback =
  NormalCallback<GetSessionMetadataResponse>;

export type KeepAliveCallback = NormalCallback<google.spanner.v1.IResultSet>;
export type KeepAliveResponse = [google.spanner.v1.IResultSet];
export type DeleteSessionResponse = [google.protobuf.IEmpty];
export type DeleteSessionCallback = NormalCallback<google.protobuf.IEmpty>;

/**
 * Create a Session object to interact with a Cloud Spanner session.
 *
 * **It is unlikely you will need to interact with sessions directly. By
 * default, sessions are created and utilized for maximum performance
 * automatically.**
 *
 * @class
 * @param {Database} database Parent {@link Database} instance.
 * @param {string} [name] The name of the session. If not provided, it is
 *     assumed you are going to create it.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 *
 * const instance = spanner.instance('my-instance');
 * const database = instance.database('my-database');
 *
 * //-
 * // To create a session manually, don't provide a name.
 * //-
 * const session = database.session();
 *
 * session.create(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Session created successfully.
 *   // `session.id` = The name of the session.
 * });
 *
 * //-
 * // To access a previously-created session, provide a name.
 * //-
 * const session = database.session('session-name');
 * ```
 */
export class Session extends common.GrpcServiceObject {
  formattedName_?: string;
  txn?: Transaction;
  lastUsed?: number;
  lastError?: grpc.ServiceError;
  commonHeaders_: {[k: string]: string};
  _observabilityOptions?: ObservabilityOptions;
  constructor(database: Database, name?: string) {
    const methods = {
      /**
       * Create a session.
       *
       * @method Session#create
       * @param {object} [options] See {@link Database#createSession}.
       * @param {CreateSessionCallback} [callback] Callback function.
       * @returns {Promise<CreateSessionResponse>}
       *
       * @example
       * ```
       * session.create(function(err, session, apiResponse) {
       *   if (err) {
       *     // Error handling omitted.
       *   }
       *
       *   // Session created successfully.
       * });
       *
       * //-
       * //Returns a Promise if the callback is omitted.
       * //-
       * session.create()
       *   .then(function(data) {
       *     const session = data[0];
       *     const apiResponse = data[1];
       *
       *     // Session created successfully.
       *   });
       * ```
       */
      create: true,
      /**
       * @typedef {array} SessionExistsResponse
       * @property {boolean} 0 Whether the {@link Session} exists.
       */
      /**
       * @callback SessionExistsCallback
       * @param {?Error} err Request error, if any.
       * @param {boolean} exists Whether the {@link Session} exists.
       */
      /**
       * Check if a session exists.
       *
       * @method Session#exists
       * @param {SessionExistsCallback} [callback] Callback function.
       * @returns {Promise<SessionExistsResponse>}
       *
       * @example
       * ```
       * session.exists(function(err, exists) {});
       *
       * //-
       * //Returns a Promise if the callback is omitted.
       * //-
       * session.exists().then(function(data) {
       *   const exists = data[0];
       * });
       * ```
       */
      exists: true,
      /**
       * @typedef {array} GetSessionResponse
       * @property {Session} 0 The {@link Session}.
       * @property {object} 1 The full API response.
       */
      /**
       * @callback CreateSessionCallback
       * @param {?Error} err Request error, if any.
       * @param {Session} session The {@link Session}.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Get a session if it exists.
       *
       * You may optionally use this to "get or create" an object by providing
       * an object with `autoCreate` set to `true`. Any extra configuration that
       * is normally required for the `create` method must be contained within
       * this object as well.
       *
       * @method Session#get
       * @param {options} [options] Configuration object.
       * @param {boolean} [options.autoCreate=false] Automatically create the
       *     object if it does not exist.
       * @param {CreateSessionCallback} [callback] Callback function.
       * @returns {Promise<GetSessionResponse>}
       *
       * @example
       * ```
       * session.get(function(err, session, apiResponse) {
       *   // `session.metadata` has been populated.
       * });
       *
       * //-
       * //Returns a Promise if the callback is omitted.
       * //-
       * session.get().then(function(data) {
       *   const session = data[0];
       *   const apiResponse = data[0];
       * });
       * ```
       */
      get: true,
    };
    super({
      parent: database,
      /**
       * @name Session#id
       * @type {string}
       */
      id: name,
      methods,
      createMethod: (
        _: {},
        optionsOrCallback: CreateSessionOptions | CreateSessionCallback,
        callback: CreateSessionCallback,
      ) => {
        const options =
          typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
        callback =
          typeof optionsOrCallback === 'function'
            ? optionsOrCallback
            : callback;

        this.labels = options.labels || null;
        this.databaseRole =
          options.databaseRole || database.databaseRole || null;

        return database.createSession(options, (err, session, apiResponse) => {
          if (err) {
            callback(err, null, apiResponse);
            return;
          }

          extend(this, session);
          callback(null, this, apiResponse);
        });
      },
    } as {} as ServiceObjectConfig);

    this._observabilityOptions = database._observabilityOptions;
    this.commonHeaders_ = getCommonHeaders(
      (this.parent as Database).formattedName_,
      this._observabilityOptions?.enableEndToEndTracing,
    );
    this.request = database.request;
    this.requestStream = database.requestStream;

    if (name) {
      this.formattedName_ = Session.formatName_(database.formattedName_, name);
    }
  }
  /**
   * Delete a session.
   *
   * Wrapper around {@link v1.SpannerClient#deleteSession}.
   *
   * @see {@link v1.SpannerClient#deleteSession}
   * @see [DeleteSession API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.DeleteSession)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DeleteSessionCallback} [callback] Callback function.
   * @returns {Promise<DeleteSessionResponse>}
   *
   * @example
   * ```
   * session.delete(function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Session deleted successfully.
   * });
   *
   * //-
   * //Returns a Promise if the callback is omitted.
   * //-
   * session.delete().then(function(data) {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  delete(gaxOptions?: CallOptions): Promise<DeleteSessionResponse>;
  delete(callback: DeleteSessionCallback): void;
  delete(gaxOptions: CallOptions, callback: DeleteSessionCallback): void;
  delete(
    optionsOrCallback?: CallOptions | DeleteSessionCallback,
    cb?: DeleteSessionCallback,
  ): void | Promise<DeleteSessionResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      name: this.formattedName_,
    };
    const database = this.parent as Database;
    return this.request(
      {
        client: 'SpannerClient',
        method: 'deleteSession',
        reqOpts,
        gaxOpts,
        headers: injectRequestIDIntoHeaders(
          this.commonHeaders_,
          this,
          nextNthRequest(database),
          1,
        ),
      },
      callback!,
    );
  }
  /**
   * @typedef {array} GetSessionMetadataResponse
   * @property {object} 0 The session's metadata.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetSessionMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The session's metadata.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get the session's metadata.
   *
   * Wrapper around {@link v1.SpannerClient#getSession}.
   *
   * @see {@link v1.SpannerClient#getSession}
   * @see [GetSession API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.Spanner.GetSession)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {GetSessionMetadataCallback} [callback] Callback function.
   * @returns {Promise<GetSessionMetadataResponse>}
   *
   * @example
   * ```
   * session.getMetadata(function(err, metadata, apiResponse) {});
   *
   * //-
   * //Returns a Promise if the callback is omitted.
   * //-
   * session.getMetadata().then(function(data) {
   *   const metadata = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  getMetadata(gaxOptions?: CallOptions): Promise<GetSessionMetadataResponse>;
  getMetadata(callback: GetSessionMetadataCallback): void;
  getMetadata(
    gaxOptions: CallOptions,
    callback: GetSessionMetadataCallback,
  ): void;
  getMetadata(
    optionsOrCallback?: CallOptions | GetSessionMetadataCallback,
    cb?: GetSessionMetadataCallback,
  ): void | Promise<GetSessionMetadataResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      name: this.formattedName_,
    };

    const headers = this.commonHeaders_;
    if (this._getSpanner().routeToLeaderEnabled) {
      addLeaderAwareRoutingHeader(headers);
    }
    const database = this.parent as Database;
    return this.request(
      {
        client: 'SpannerClient',
        method: 'getSession',
        reqOpts,
        gaxOpts,
        headers: injectRequestIDIntoHeaders(
          headers,
          this.session,
          nextNthRequest(database),
          1,
        ),
      },
      (err, resp) => {
        if (resp) {
          resp.databaseRole = resp.creatorRole;
          delete resp.creatorRole;
          this.metadata = resp;
        }
        callback!(err, resp);
      },
    );
  }
  /**
   * Ping the session with `SELECT 1` to prevent it from expiring.
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {BasicCallback} [callback] Callback function.
   * @returns {Promise<BasicResponse>}
   *
   * @example
   * ```
   * session.keepAlive(function(err) {
   *   if (err) {
   *     // An error occurred while trying to keep this session alive.
   *   }
   * });
   * ```
   */
  keepAlive(gaxOptions?: CallOptions): Promise<KeepAliveResponse>;
  keepAlive(callback: KeepAliveCallback): void;
  keepAlive(gaxOptions: CallOptions, callback: KeepAliveCallback): void;
  keepAlive(
    optionsOrCallback?: CallOptions | KeepAliveCallback,
    cb?: KeepAliveCallback,
  ): void | Promise<KeepAliveResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      session: this.formattedName_,
      sql: 'SELECT 1',
    };

    const database = this.parent as Database;
    return this.request(
      {
        client: 'SpannerClient',
        method: 'executeSql',
        reqOpts,
        gaxOpts,
        headers: injectRequestIDIntoHeaders(
          this.commonHeaders_,
          this,
          nextNthRequest(database),
          1,
        ),
      },
      callback!,
    );
  }

  /**
   * Create a PartitionedDml transaction.
   *
   * @returns {PartitionedDml}
   *
   * @example
   * ```
   * const transaction = session.partitionedDml();
   * ```
   */
  partitionedDml() {
    return new PartitionedDml(this);
  }
  /**
   * Create a Snapshot transaction.
   *
   * @param {TimestampBounds} [options] The timestamp bounds.
   * @param {google.spanner.v1.ExecuteSqlRequest.IQueryOptions} [queryOptions] The default query options to use.
   * @returns {Snapshot}
   *
   * @example
   * ```
   * const snapshot = session.snapshot({strong: false});
   * ```
   */
  snapshot(
    options?: TimestampBounds,
    queryOptions?: google.spanner.v1.ExecuteSqlRequest.IQueryOptions,
  ) {
    return new Snapshot(this, options, queryOptions);
  }
  /**
   * Create a read write Transaction.
   *
   * @param {google.spanner.v1.ExecuteSqlRequest.IQueryOptions} [queryOptions] The default query options to use.
   * @return {Transaction}
   *
   * @example
   * ```
   * const transaction = session.transaction();
   * ```
   */
  transaction(
    queryOptions?: google.spanner.v1.ExecuteSqlRequest.IQueryOptions,
    requestOptions?: Pick<IRequestOptions, 'transactionTag'>,
  ) {
    return new Transaction(this, undefined, queryOptions, requestOptions);
  }
  /**
   * Format the session name to include the parent database's name.
   *
   * @private
   *
   * @param {string} databaseName The parent database's name.
   * @param {string} name The instance name.
   * @returns {string}
   *
   * @example
   * ```
   * Session.formatName_('my-database', 'my-session');
   * // 'projects/grape-spaceship-123/instances/my-instance/' +
   * // 'databases/my-database/sessions/my-session'
   * ```
   */
  static formatName_(databaseName: string, name: string) {
    if (name.indexOf('/') > -1) {
      return name;
    }
    const sessionName = name.split('/').pop();
    return databaseName + '/sessions/' + sessionName;
  }

  /**
   * Gets the Spanner object
   *
   * @private
   *
   * @returns {Spanner}
   */
  private _getSpanner(): Spanner {
    return this.parent.parent.parent as Spanner;
  }

  private channelId(): number {
    // The Node.js client does not use a gRPC channel pool, so this always returns 1.
    return 1;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Session, {
  exclude: ['delete', 'partitionedDml', 'snapshot', 'transaction'],
});

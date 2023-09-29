/*!
 * Copyright 2018 Google LLC.
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

/**
 * @namespace google
 */
/**
 * @namespace google.datastore.v1
 */
/**
 * @namespace google.protobuf
 */

import arrify = require('arrify');
import extend = require('extend');
import {
  GrpcClient,
  ClientStub,
  ChannelCredentials,
  GoogleAuth,
  GoogleAuthOptions,
  CallOptions,
  Operation,
  ServiceError,
} from 'google-gax';
import * as is from 'is';
import {Transform, pipeline} from 'stream';

import {entity, Entities, Entity, EntityProto, ValueProto} from './entity';
import {AggregateField} from './aggregate';
import Key = entity.Key;
export {Entity, Key, AggregateField};
import {PropertyFilter, and, or} from './filter';
export {PropertyFilter, and, or};
import {
  GetIndexesCallback,
  GetIndexesOptions,
  GetIndexesResponse,
  IIndex,
  Index,
} from './index-class';
import {Query} from './query';
import {
  DatastoreRequest,
  CommitCallback,
  CommitResponse,
  PrepareEntityObjectResponse,
  SaveCallback,
  SaveResponse,
  Mutation,
  RequestOptions,
} from './request';
import {Transaction} from './transaction';
import {promisifyAll} from '@google-cloud/promisify';
import {google} from '../protos/protos';
import {AggregateQuery} from './aggregate';

const {grpc} = new GrpcClient();

export type PathType = string | number | entity.Int;
export interface BooleanObject {
  [key: string]: boolean;
}
export interface EntityProtoReduceAccumulator {
  [key: string]: ValueProto;
}
export interface EntityProtoReduceData {
  value: ValueProto;
  excludeFromIndexes: ValueProto;
  name: string | number;
}
export type UpdateCallback = CommitCallback;
export type UpdateResponse = CommitResponse;
export type UpsertCallback = CommitCallback;
export type UpsertResponse = CommitResponse;
export type InsertCallback = CommitCallback;
export type InsertResponse = CommitResponse;

export interface LongRunningCallback {
  (
    err: ServiceError | null,
    operation?: Operation,
    apiResponse?: google.longrunning.IOperation
  ): void;
}
export type LongRunningResponse = [Operation, google.longrunning.IOperation];

export interface ExportEntitiesConfig
  extends Omit<google.datastore.admin.v1.IExportEntitiesRequest, 'projectId'> {
  bucket?: string | {name: string};
  kinds?: string[];
  namespaces?: string[];
  gaxOptions?: CallOptions;
}

export interface ImportEntitiesConfig
  extends Omit<google.datastore.admin.v1.IImportEntitiesRequest, 'projectId'> {
  file?: string | {bucket: {name: string}; name: string};
  kinds?: string[];
  namespaces?: string[];
  gaxOptions?: CallOptions;
}

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1: require('./v1'),
});

const urlSafeKey = new entity.URLSafeKey();

/**
 * Idiomatic class for interacting with Cloud Datastore. Uses the lower-level
 * {@link DatastoreClient} class under the hood.
 *
 * In addition to the constructor options shown here, the {@link Datastore}
 * class constructor accepts the same options accepted by
 * {@link DatastoreClient}.
 *
 * <h4>The Datastore Emulator</h4>
 *
 * Make sure you have the <a href="https://cloud.google.com/sdk/downloads">
 * gcloud SDK installed</a>, then run:
 *
 * <pre>
 *   $ gcloud beta emulators datastore start --no-legacy
 * </pre>
 *
 * You will see the following printed:
 *
 * <pre>
 *   [datastore] API endpoint: http://localhost:8005
 *   [datastore] If you are using a library that supports the
 *               DATASTORE_EMULATOR_HOST environment variable, run:
 *   [datastore]
 *   [datastore]   export DATASTORE_EMULATOR_HOST=localhost:8005
 *   [datastore]
 *   [datastore] Dev App Server is now running.
 * </pre>
 *
 * Set that environment variable and your localhost Datastore will
 * automatically be used. You can also pass this address in manually with
 * `apiEndpoint`.
 *
 * Additionally, `DATASTORE_PROJECT_ID` is recognized. If you have this set,
 * you don't need to provide a `projectId`.
 *
 *
 * See {@link https://cloud.google.com/datastore/docs/concepts/overview| Cloud Datastore Concepts Overview}
 *
 * @param {object} [options] Configuration options.
 * @param {string} [options.apiEndpoint] Override the default API endpoint used
 *     to reach Datastore. This is useful for connecting to your local Datastore
 *     server (usually "http://localhost:8080").
 * @param {string} [options.namespace] Namespace to isolate transactions to.
 *
 * @example Import the client library
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 *
 * ```
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const datastore = new Datastore();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const datastore = new Datastore({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example Retrieving Records
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 *
 * // Records, called "entities" in Datastore, are retrieved by using a key. The
 * // key is more than a numeric identifier, it is a complex data structure that
 * // can be used to model relationships. The simplest key has a string `kind`
 * // value, and either a numeric `id` value, or a string `name` value.
 * //
 * // A single record can be retrieved with {@link Datastore#key} and
 * // {@link Datastore#get}.
 * //-
 * const key = datastore.key(['Company', 'Google']);
 *
 * datastore.get(key, function(err, entity) {
 *   // entity = The record.
 *   // entity[datastore.KEY] = The key for this entity.
 * });
 *
 * //-
 * // <h3>Querying Records</h3>
 * //
 * // Create a query with {@link Datastore#createQuery}.
 * //-
 * const query = datastore.createQuery('Company');
 *
 * //-
 * // Multiple records can be found that match criteria with
 * // {@link Query#filter}.
 * //-
 * query.filter('location', 'CA');
 *
 * //-
 * // Records can also be ordered with {@link Query#order}.
 * //-
 * query.order('name');
 *
 * //-
 * // The number of records returned can be specified with
 * // {@link Query#limit}.
 * //-
 * query.limit(5);
 *
 * //-
 * // Records' key structures can also be queried with
 * // {@link Query#hasAncestor}.
 * //-
 * const ancestorKey = datastore.key(['ParentCompany', 'Alphabet']);
 *
 * query.hasAncestor(ancestorKey);
 *
 * //-
 * // Run the query with {@link Datastore#runQuery}.
 * //-
 * datastore.runQuery(query, (err, entities) => {
 *   // entities = An array of records.
 *
 *   // Access the Key object for an entity.
 *   const firstEntityKey = entities[0][datastore.KEY];
 * });
 *
 * ```
 * @example Paginating Records
 * ```
 * // Imagine building a website that allows a user to sift through hundreds of
 * // their contacts. You'll likely want to only display a subset of these at
 * // once, so you set a limit.
 * //-
 * const express = require('express');
 * const app = express();
 *
 * const NUM_RESULTS_PER_PAGE = 15;
 *
 * app.get('/contacts', (req, res) => {
 *   const query = datastore.createQuery('Contacts')
 *     .limit(NUM_RESULTS_PER_PAGE);
 *
 *   if (req.query.nextPageCursor) {
 *     query.start(req.query.nextPageCursor);
 *   }
 *
 *   datastore.runQuery(query, (err, entities, info) => {
 *     if (err) {
 *       // Error handling omitted.
 *       return;
 *     }
 *
 *     // Respond to the front end with the contacts and the cursoring token
 *     // from the query we just ran.
 *     const frontEndResponse = {
 *       contacts: entities
 *     };
 *
 *     // Check if  more results may exist.
 *     if (info.moreResults !== datastore.NO_MORE_RESULTS) {
 *       frontEndResponse.nextPageCursor = info.endCursor;
 *     }
 *
 *     res.render('contacts', frontEndResponse);
 *   });
 * });
 *
 * ```
 * @example Creating Records
 * ```
 * // New entities can be created and persisted with {@link Datastore#save}.
 * // The entity must have a key to be saved. If you don't specify an
 * // identifier for the key, one is generated for you.
 * //
 * // We will create a key with a `name` identifier, "Google".
 * //-
 * const key = datastore.key(['Company', 'Google']);
 *
 * const data = {
 *   name: 'Google',
 *   location: 'CA'
 * };
 *
 * datastore.save({
 *   key: key,
 *   data: data
 * }, (err) => {
 *   if (!err) {
 *     // Record saved successfully.
 *   }
 * });
 *
 * //-
 * // We can verify the data was saved by using {@link Datastore#get}.
 * //-
 * datastore.get(key, (err, entity) => {
 *   // entity = {
 *   //   name: 'Google',
 *   //   location: 'CA'
 *   // }
 * });
 *
 * //-
 * // If we want to update this record, we can modify the data object and re-
 * // save it.
 * //-
 * data.symbol = 'GOOG';
 *
 * datastore.save({
 *   key: key, // defined above (datastore.key(['Company', 'Google']))
 *   data: data
 * }, (err, entity) => {
 *   if (!err) {
 *     // Record updated successfully.
 *   }
 * });
 *
 * ```
 * @example Deleting Records
 * ```
 * // Entities can be removed from Datastore by passing the entity's key object
 * // to {@link Datastore#delete}.
 * //-
 * const key = datastore.key(['Company', 'Google']);
 *
 * datastore.delete(key, (err) => {
 *   if (!err) {
 *     // Record deleted successfully.
 *   }
 * });
 *
 * ```
 * @example Transactions
 * ```
 * // Complex logic can be wrapped in a transaction with
 * // {@link Datastore#transaction}. All queries and updates run within
 * // the transaction will be applied when the `done` function is called.
 * //-
 * const transaction = datastore.transaction();
 *
 * transaction.run((err) => {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   const key = datastore.key(['Company', 'Google']);
 *
 *   transaction.get(key, (err, entity) => {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     entity.symbol = 'GOOG';
 *
 *     transaction.save(entity);
 *
 *     transaction.commit((err) => {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 *
 * ```
 * @example Queries with Ancestors
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 *
 * const customerId1 = 2993844;
 * const customerId2 = 4993882;
 * const customerKey1 = datastore.key(['Customer', customerId1]);
 * const customerKey2 = datastore.key(['Customer', customerId2]);
 * const cookieKey1 = datastore.key(['Customer', customerId1, 'Cookie',
 * 'cookie28839']); // child entity const cookieKey2 =
 * datastore.key(['Customer', customerId1, 'Cookie', 'cookie78984']); // child
 * entity const cookieKey3 = datastore.key(['Customer', customerId2, 'Cookie',
 * 'cookie93911']); // child entity
 *
 * const entities = [];
 *
 * entities.push({
 *   key: customerKey1,
 *   data: {
 *     name: 'Jane Doe',
 *     address: '4848 Liller'
 *   }
 * });
 *
 * entities.push({
 *   key: customerKey2,
 *   data: {
 *     name: 'John Smith',
 *     address: '4848 Pine'
 *   }
 * });
 *
 * entities.push({
 *   key: cookieKey1,
 *   data: {
 *     cookieVal: 'dj83kks88rkld'
 *   }
 * });
 *
 * entities.push({
 *   key: cookieKey2,
 *   data: {
 *     cookieVal: 'sj843ka99s'
 *   }
 * });
 *
 * entities.push({
 *   key: cookieKey3,
 *   data: {
 *     cookieVal: 'otk82k2kw'
 *   }
 * });
 *
 * datastore.upsert(entities);
 *
 * const query = datastore.createQuery().hasAncestor(customerKey1);
 *
 * datastore.runQuery(query, (err, entities) => {
 *   for (let entity of entities) {
 *     console.log(entity[datastore.KEY]);
 *   }
 * });
 *
 * const query2 = datastore.createQuery().hasAncestor(customerKey2);
 *
 * datastore.runQuery(query2, (err, entities) => {
 *   for (let entity of entities) {
 *     console.log(entity[datastore.KEY]);
 *   }
 * });
 *
 * datastore.runQuery(query2, (entities) => {
 *   console.log(entities);
 * });
 * ```
 */
class Datastore extends DatastoreRequest {
  clients_: Map<string, ClientStub>;
  namespace?: string;
  defaultBaseUrl_: string;
  options: DatastoreOptions;
  baseUrl_?: string;
  port_?: number;
  customEndpoint_?: boolean;
  auth: GoogleAuth;
  constructor(options?: DatastoreOptions) {
    super();
    options = options || {};
    this.clients_ = new Map();
    this.datastore = this;

    /**
     * @name Datastore#namespace
     * @type {string}
     */
    this.namespace = options.namespace;

    options.projectId = options.projectId || process.env.DATASTORE_PROJECT_ID;

    this.defaultBaseUrl_ = 'datastore.googleapis.com';
    this.determineBaseUrl_(options.apiEndpoint);

    const scopes: string[] = Array.from(
      new Set([
        ...gapic.v1.DatastoreClient.scopes,
        ...gapic.v1.DatastoreAdminClient.scopes,
      ])
    );

    this.options = Object.assign(
      {
        libName: 'gccl',
        libVersion: require('../../package.json').version,
        scopes,
        servicePath: this.baseUrl_,
        port: typeof this.port_ === 'number' ? this.port_ : 443,
      },
      options
    );
    const isUsingLocalhost =
      this.baseUrl_ &&
      (this.baseUrl_.includes('localhost') ||
        this.baseUrl_.includes('127.0.0.1') ||
        this.baseUrl_.includes('::1'));
    const isEmulatorVariableSet = process.env.DATASTORE_EMULATOR_HOST;
    const isUsingEmulator = isUsingLocalhost || isEmulatorVariableSet;
    if (this.customEndpoint_ && isUsingEmulator) {
      this.options.sslCreds ??= grpc.credentials.createInsecure();
    }

    this.auth = new GoogleAuth(this.options);
  }

  /**
   * Create an aggregation query from a Query.
   *
   * @param {Query} query A Query object.
   */
  createAggregationQuery(query: Query): AggregateQuery {
    return new AggregateQuery(query);
  }

  /**
   * Export entities from this project to a Google Cloud Storage bucket.
   *
   * @param {ExportEntitiesConfig} config Configuration object.
   * @param {string | Bucket} config.bucket The `gs://bucket` path or a
   *     @google-cloud/storage Bucket object.
   * @param {string[]} [config.kinds] The kinds to include in this import.
   * @param {string[]} [config.namespaces] The namespace IDs to include in this
   *     import.
   * @param {object} [config.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   */
  export(config: ExportEntitiesConfig): Promise<LongRunningResponse>;
  export(config: ExportEntitiesConfig, callback: LongRunningCallback): void;
  export(
    config: ExportEntitiesConfig,
    callback?: LongRunningCallback
  ): void | Promise<LongRunningResponse> {
    const reqOpts: ExportEntitiesConfig = {
      entityFilter: {},
      ...config,
    };

    if (reqOpts.bucket && reqOpts.outputUrlPrefix) {
      throw new Error('Both `bucket` and `outputUrlPrefix` were provided.');
    }

    if (!reqOpts.outputUrlPrefix) {
      if (typeof config.bucket === 'string') {
        reqOpts.outputUrlPrefix = `gs://${config.bucket.replace('gs://', '')}`;
      } else if (typeof config.bucket === 'object') {
        reqOpts.outputUrlPrefix = `gs://${config.bucket.name}`;
      } else {
        throw new Error('A Bucket object or URL must be provided.');
      }
    }

    if (reqOpts.kinds) {
      if (typeof config.entityFilter === 'object') {
        throw new Error('Both `entityFilter` and `kinds` were provided.');
      }
      reqOpts.entityFilter!.kinds = reqOpts.kinds;
    }

    if (reqOpts.namespaces) {
      if (typeof config.entityFilter === 'object') {
        throw new Error('Both `entityFilter` and `namespaces` were provided.');
      }
      reqOpts.entityFilter!.namespaceIds = reqOpts.namespaces;
    }

    delete reqOpts.bucket;
    delete reqOpts.gaxOptions;
    delete reqOpts.kinds;
    delete reqOpts.namespaces;

    this.request_(
      {
        client: 'DatastoreAdminClient',
        method: 'exportEntities',
        reqOpts: reqOpts as RequestOptions,
        gaxOpts: config.gaxOptions,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback as any
    );
  }

  /**
   * Get all of the indexes in this project.
   *
   * @param {GetIndexesOptions | GetIndexesCallback} [optionsOrCallback]
   * @param {object} [options.gaxOptions] Request configuration options,
   *     outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {GetIndexesResponse} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Index[]} callback.indexes All matching Index instances.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<GetIndexesResponse>}
   */
  getIndexes(options?: GetIndexesOptions): Promise<GetIndexesResponse>;
  getIndexes(options: GetIndexesOptions, callback: GetIndexesCallback): void;
  getIndexes(callback: GetIndexesCallback): void;
  getIndexes(
    optionsOrCallback?: GetIndexesOptions | GetIndexesCallback,
    cb?: GetIndexesCallback
  ): void | Promise<GetIndexesResponse> {
    let options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    options = extend(true, {}, options);

    const gaxOpts = options.gaxOptions || {};

    const reqOpts = {
      pageSize: (gaxOpts as GetIndexesOptions).pageSize,
      pageToken: (gaxOpts as GetIndexesOptions).pageToken,
      ...options,
    };

    delete (gaxOpts as GetIndexesOptions).pageSize;
    delete (gaxOpts as GetIndexesOptions).pageToken;
    delete (reqOpts as CallOptions).autoPaginate;
    delete (reqOpts as GetIndexesOptions).gaxOptions;

    if (
      typeof options.autoPaginate === 'boolean' &&
      typeof gaxOpts.autoPaginate === 'undefined'
    ) {
      gaxOpts.autoPaginate = options.autoPaginate;
    }

    this.request_(
      {
        client: 'DatastoreAdminClient',
        method: 'listIndexes',
        reqOpts,
        gaxOpts,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err, ...resp: any[]) => {
        let indexes: Index[] = [];

        if (resp[0]) {
          indexes = resp[0].map((index: IIndex) => {
            const indexInstance = this.index(index.indexId!);
            indexInstance.metadata = index;
            return indexInstance;
          });
        }

        const nextQuery = resp[1]! ? Object.assign(options, resp[1]) : null;
        const apiResp: google.datastore.admin.v1.IListIndexesResponse = resp[2];

        callback(err as ServiceError, indexes, nextQuery, apiResp);
      }
    );
  }

  /**
   * Get all of the indexes in this project as a readable object stream.
   *
   * @param {GetIndexesOptions} [options] Configuration object. See
   *     {@link Datastore#getIndexes} for a complete list of options.
   * @returns {ReadableStream<Index>}
   */
  getIndexesStream(options?: GetIndexesOptions): NodeJS.ReadableStream {
    const {gaxOptions, ...reqOpts} = options || {};
    return pipeline(
      this.requestStream_({
        client: 'DatastoreAdminClient',
        method: 'listIndexesStream',
        reqOpts,
        gaxOpts: gaxOptions,
      }),
      new Transform({
        objectMode: true,
        transform: (index: IIndex, enc: string, next: Function) => {
          const indexInstance = this.index(index.indexId!);
          indexInstance.metadata = index;
          next(null, indexInstance);
        },
      }),
      () => {}
    );
  }

  /**
   * Gets the database id that all requests will be run against.
   *
   * @returns {string} The database id that the current client is set to that
   *    requests will run against.
   */
  getDatabaseId(): string | undefined {
    return this.options.databaseId;
  }

  getProjectId(): Promise<string> {
    return this.auth.getProjectId();
  }

  /**
   * Import entities into this project from a remote file.
   *
   * @param {ImportEntitiesConfig} config Configuration object.
   * @param {string | File} config.file The `gs://bucket/file` path or a
   *     @google-cloud/storage File object.
   * @param {string[]} [config.kinds] The kinds to include in this import.
   * @param {string[]} [config.namespaces] The namespace IDs to include in this
   *     import.
   * @param {object} [config.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   */
  import(config: ImportEntitiesConfig): Promise<LongRunningResponse>;
  import(config: ImportEntitiesConfig, callback: LongRunningCallback): void;
  import(
    config: ImportEntitiesConfig,
    callback?: LongRunningCallback
  ): void | Promise<LongRunningResponse> {
    const reqOpts: ImportEntitiesConfig = {
      entityFilter: {},
      ...config,
    };

    if (config.file && config.inputUrl) {
      throw new Error('Both `file` and `inputUrl` were provided.');
    }

    if (!reqOpts.inputUrl) {
      if (typeof config.file === 'string') {
        reqOpts.inputUrl = `gs://${config.file.replace('gs://', '')}`;
      } else if (typeof config.file === 'object') {
        reqOpts.inputUrl = `gs://${config.file.bucket.name}/${config.file.name}`;
      } else {
        throw new Error('An input URL must be provided.');
      }
    }

    if (reqOpts.kinds) {
      if (typeof config.entityFilter === 'object') {
        throw new Error('Both `entityFilter` and `kinds` were provided.');
      }
      reqOpts.entityFilter!.kinds = reqOpts.kinds;
    }

    if (reqOpts.namespaces) {
      if (typeof config.entityFilter === 'object') {
        throw new Error('Both `entityFilter` and `namespaces` were provided.');
      }
      reqOpts.entityFilter!.namespaceIds = reqOpts.namespaces;
    }

    delete reqOpts.file;
    delete reqOpts.gaxOptions;
    delete reqOpts.kinds;
    delete reqOpts.namespaces;

    this.request_(
      {
        client: 'DatastoreAdminClient',
        method: 'importEntities',
        reqOpts: reqOpts as RequestOptions,
        gaxOpts: config.gaxOptions,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback as any
    );
  }

  /**
   * Get a reference to an Index.
   *
   * @param {string} id The index name or id.
   * @returns {Index}
   */
  index(id: string): Index {
    return new Index(this, id);
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/datastore#_google_cloud_datastore_Datastore_save_member_1_|Datastore#save}, forcing the method to be `insert`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {object} callback.apiResponse The full API response.
   */
  insert(entities: Entities): Promise<InsertResponse>;
  insert(entities: Entities, callback: InsertCallback): void;
  insert(
    entities: Entities,
    callback?: InsertCallback
  ): void | Promise<InsertResponse> {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'insert';
        return x;
      });

    this.save(entities, callback!);
  }

  /**
   * Insert or update the specified object(s). If a key is incomplete, its
   * associated object is inserted and the original Key object is updated to
   * contain the generated ID.
   *
   * This method will determine the correct Datastore method to execute
   * (`upsert`, `insert`, or `update`) by using the key(s) provided. For
   * example, if you provide an incomplete key (one without an ID), the request
   * will create a new entity and have its ID automatically assigned. If you
   * provide a complete key, the entity will be updated with the data specified.
   *
   * By default, all properties are indexed. To prevent a property from being
   * included in *all* indexes, you must supply an `excludeFromIndexes` array.
   *
   * To prevent large properties from being included in *all* indexes, you must supply
   * `excludeLargeProperties: true`.
   *  See below for an example.
   *
   * @borrows {@link Transaction#save} as save
   *
   * @throws {Error} If an unrecognized method is provided.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the example below to
   * see how to target properties at different levels of nesting within your
   * @param {boolean} [entities.excludeLargeProperties] Automatically exclude
   *  large properties from indexing. It help in storing large values.
   * @param {string} [entities.method] Explicit method to use, either 'insert',
   *     'update', or 'upsert'.
   * @param {object} entities.data Data to save with the provided key.
   *     entity.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * //-
   * // Save a single entity.
   * //
   * // Notice that we are providing an incomplete key. After saving, the
   * // original Key object used to save will be updated to contain the path
   * // with its generated ID.
   * //-
   * const key = datastore.key('Company');
   * const entity = {
   *   key: key,
   *   data: {
   *     rating: '10'
   *   }
   * };
   *
   * datastore.save(entity, (err) => {
   *   console.log(key.path); // [ 'Company', 5669468231434240 ]
   *   console.log(key.namespace); // undefined
   * });
   *
   * //-
   * // Save a single entity using a provided name instead of auto-generated ID.
   * //
   * // Here we are providing a key with name instead of an ID. After saving,
   * // the original Key object used to save will be updated to contain the
   * // path with the name instead of a generated ID.
   * //-
   * const key = datastore.key(['Company', 'donutshack']);
   * const entity = {
   *   key: key,
   *   data: {
   *     name: 'DonutShack',
   *     rating: 8
   *   }
   * };
   *
   * datastore.save(entity, (err) => {
   *   console.log(key.path); // ['Company', 'donutshack']
   *   console.log(key.namespace); // undefined
   * });
   *
   * //-
   * // Save a single entity with a provided namespace. Namespaces allow for
   * // multitenancy. To read more about this, see
   * // [the Datastore docs on key concepts](https://goo.gl/M1LUAu).
   * //
   * // Here we are providing a key with namespace.
   * //-
   * const key = datastore.key({
   *   namespace: 'my-namespace',
   *   path: ['Company', 'donutshack']
   * });
   *
   * const entity = {
   *   key: key,
   *   data: {
   *     name: 'DonutShack',
   *     rating: 8
   *   }
   * };
   *
   * datastore.save(entity, (err) => {
   *   console.log(key.path); // ['Company', 'donutshack']
   *   console.log(key.namespace); // 'my-namespace'
   * });
   *
   * //-
   * // Save different types of data, including ints, doubles, dates, booleans,
   * // blobs, and lists.
   * //
   * // Notice that we are providing an incomplete key. After saving, the
   * // original Key object used to save will be updated to contain the path
   * // with its generated ID.
   * //-
   * const key = datastore.key('Company');
   * const entity = {
   *   key: key,
   *   data: {
   *     name: 'DonutShack',
   *     rating: datastore.int(10),
   *     worth: datastore.double(123456.78),
   *     location: datastore.geoPoint({
   *       latitude: 40.6894,
   *       longitude: -74.0447
   *     }),
   *     numDonutsServed: 45,
   *     founded: new Date('Tue May 12 2015 15:30:00 GMT-0400 (EDT)'),
   *     isStartup: true,
   *     donutEmoji: Buffer.from('\uD83C\uDF69'),
   *     keywords: [
   *       'donut',
   *       'coffee',
   *       'yum'
   *     ]
   *   }
   * };
   *
   * datastore.save(entity, (err, apiResponse) => {});
   *
   * //-
   * // Use an array, `excludeFromIndexes`, to exclude properties from indexing.
   * // This will allow storing string values larger than 1500 bytes.
   * //-
   * const entity = {
   *   key: datastore.key('Company'),
   *   excludeFromIndexes: [
   *     'description',
   *     'embeddedEntity.description',
   *     'arrayValue[]',
   *     'arrayValue[].description'
   *   ],
   *   data: {
   *     description: 'Long string (...)',
   *     embeddedEntity: {
   *       description: 'Long string (...)'
   *     },
   *     arrayValue: [
   *       'Long string (...)',
   *       {
   *         description: 'Long string (...)'
   *       }
   *     ]
   *   }
   * };
   *
   * datastore.save(entity, (err, apiResponse) => {});
   *
   * //-
   * // Use boolean `excludeLargeProperties`, to auto exclude Large properties from indexing.
   * // This will allow storing string values larger than 1500 bytes.
   * //-
   * const entity = {
   *   key: datastore.key('Company'),
   *   data: {
   *     description: 'Long string (...)',
   *     embeddedEntity: {
   *       description: 'Long string (...)'
   *     },
   *     arrayValue: [
   *       'Long string (...)',
   *       {
   *         description: 'Long string (...)'
   *       }
   *     ]
   *   },
   *   excludeLargeProperties: true
   * };
   *
   * datastore.save(entity, (err, apiResponse) => {});
   *
   * //-
   * // Save multiple entities at once.
   * //-
   * const companyKey = datastore.key(['Company', 123]);
   * const productKey = datastore.key(['Product', 'Computer']);
   * const entities = [
   *   {
   *     key: companyKey,
   *     data: {
   *       HQ: 'Dallas, TX'
   *     }
   *   },
   *   {
   *     key: productKey,
   *     data: {
   *       vendor: 'Dell'
   *     }
   *   }
   * ];
   *
   * datastore.save(entities, (err, apiResponse) => {});
   *
   * //-
   * // Explicitly attempt to 'insert' a specific entity.
   * //-
   * const userKey = datastore.key(['User', 'chilts']);
   * const entity = {
   *   key: userKey,
   *   method: 'insert',
   *   data: {
   *     fullName: 'Andrew Chilton'
   *   }
   * };
   *
   * datastore.save(entity, (err, apiResponse) => {});
   *
   * //-
   * // Returns a Promise if callback is omitted.
   * //-
   * datastore.save(entity).then((data) => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  save(entities: Entities, gaxOptions?: CallOptions): Promise<SaveResponse>;
  save(
    entities: Entities,
    gaxOptions: CallOptions,
    callback: SaveCallback
  ): void;
  save(entities: Entities, callback: SaveCallback): void;
  save(
    entities: Entities,
    gaxOptionsOrCallback?: CallOptions | SaveCallback,
    cb?: SaveCallback
  ): void | Promise<SaveResponse> {
    entities = arrify(entities);
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    const insertIndexes: BooleanObject = {};
    const mutations: google.datastore.v1.IMutation[] = [];
    const methods: BooleanObject = {
      insert: true,
      update: true,
      upsert: true,
    };

    // Iterate over the entity objects, build a proto from all keys and values,
    // then place in the correct mutation array (insert, update, etc).
    entities
      .map(DatastoreRequest.prepareEntityObject_)
      .forEach((entityObject: Entity, index: number) => {
        const mutation: Mutation = {};
        let entityProto: EntityProto = {};
        let method = 'upsert';

        if (entityObject.method) {
          if (methods[entityObject.method]) {
            method = entityObject.method;
          } else {
            throw new Error(
              'Method ' + entityObject.method + ' not recognized.'
            );
          }
        }

        if (entityObject.excludeLargeProperties) {
          entityObject.excludeFromIndexes = entity.findLargeProperties_(
            entityObject.data,
            '',
            entityObject.excludeFromIndexes
          );
        }

        if (!entity.isKeyComplete(entityObject.key)) {
          insertIndexes[index] = true;
        }

        // @TODO remove in @google-cloud/datastore@2.0.0
        // This was replaced with a more efficient mechanism in the top-level
        // `excludeFromIndexes` option.
        if (Array.isArray(entityObject.data)) {
          entityProto.properties = entityObject.data.reduce(
            (
              acc: EntityProtoReduceAccumulator,
              data: EntityProtoReduceData
            ) => {
              const value = entity.encodeValue(
                data.value,
                data.name.toString()
              );

              if (typeof data.excludeFromIndexes === 'boolean') {
                const excluded = data.excludeFromIndexes;
                let values = value.arrayValue && value.arrayValue.values;

                if (values) {
                  values = values.map((x: ValueProto) => {
                    x.excludeFromIndexes = excluded;
                    return x;
                  });
                } else {
                  value.excludeFromIndexes = data.excludeFromIndexes;
                }
              }

              acc[data.name] = value;

              return acc;
            },
            {}
          );
        } else {
          entityProto = entity.entityToEntityProto(entityObject);
        }

        entityProto.key = entity.keyToKeyProto(entityObject.key);

        mutation[method] = entityProto;
        mutations.push(mutation);
      });

    const reqOpts = {
      mutations,
    };

    function onCommit(
      err?: Error | null,
      resp?: google.datastore.v1.ICommitResponse
    ) {
      if (err || !resp) {
        callback(err, resp);
        return;
      }

      arrify(resp.mutationResults).forEach((result, index) => {
        if (!result.key) {
          return;
        }
        if (insertIndexes[index]) {
          const id = entity.keyFromKeyProto(result.key).id;
          entities[index].key.id = id;
        }
      });

      callback(null, resp);
    }

    if (this.id) {
      this.requests_.push(reqOpts);
      this.requestCallbacks_.push(onCommit);
      return;
    }

    this.request_(
      {
        client: 'DatastoreClient',
        method: 'commit',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      onCommit
    );
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/datastore#_google_cloud_datastore_Datastore_save_member_1_|Datastore#save}, forcing the method to be `update`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {object} callback.apiResponse The full API response.
   */
  update(entities: Entities): Promise<UpdateResponse>;
  update(entities: Entities, callback: UpdateCallback): void;
  update(
    entities: Entities,
    callback?: UpdateCallback
  ): void | Promise<UpdateResponse> {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'update';
        return x;
      });

    this.save(entities, callback!);
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/datastore#_google_cloud_datastore_Datastore_save_member_1_|Datastore#save}, forcing the method to be `upsert`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {object} callback.apiResponse The full API response.
   */
  upsert(entities: Entities): Promise<UpsertResponse>;
  upsert(entities: Entities, callback: UpsertCallback): void;
  upsert(
    entities: Entities,
    callback?: UpsertCallback
  ): void | Promise<UpsertResponse> {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'upsert';
        return x;
      });

    this.save(entities, callback!);
  }

  /**
   * Helper function to get a Datastore Double object.
   *
   * @param {number} value The double value.
   * @returns {object}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const threeDouble = datastore.double(3.0);
   * ```
   */
  static double(value: number) {
    return new entity.Double(value);
  }

  double(value: number) {
    return Datastore.double(value);
  }

  /**
   * Helper function to check if something is a Datastore Double object.
   *
   * @param {*} value
   * @returns {boolean}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * datastore.isDouble(0.42); // false
   * datastore.isDouble(datastore.double(0.42)); // true
   * ```
   */
  static isDouble(value?: {}) {
    return entity.isDsDouble(value);
  }

  isDouble(value?: {}) {
    return Datastore.isDouble(value);
  }

  /**
   * Helper function to get a Datastore Geo Point object.
   *
   * @param {object} coordinates Coordinate value.
   * @param {number} coordinates.latitude Latitudinal value.
   * @param {number} coordinates.longitude Longitudinal value.
   * @returns {object}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const coordinates = {
   *   latitude: 40.6894,
   *   longitude: -74.0447
   * };
   *
   * const geoPoint = datastore.geoPoint(coordinates);
   *
   * //-
   * // List all companies that are located at 40.123 latitude
   * // and -74.0447 longitude.
   * //-
   * const query = datastore.createQuery('Company');
   * const companyQuery = query
   *   .filter('geoPoint.latitude', datastore.double(40.123))
   *   .filter('geoPoint.longitude', datastore.double(-74.0447));
   * ```
   */
  static geoPoint(coordinates: entity.Coordinates) {
    return new entity.GeoPoint(coordinates);
  }

  geoPoint(coordinates: entity.Coordinates) {
    return Datastore.geoPoint(coordinates);
  }

  /**
   * Helper function to check if something is a Datastore Geo Point object.
   *
   * @param {*} value
   * @returns {boolean}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const coordinates = {
   *   latitude: 0,
   *   longitude: 0
   * };
   *
   * datastore.isGeoPoint(coordinates); // false
   * datastore.isGeoPoint(datastore.geoPoint(coordinates)); // true
   * ```
   */
  static isGeoPoint(value?: {}) {
    return entity.isDsGeoPoint(value);
  }

  isGeoPoint(value?: {}) {
    return Datastore.isGeoPoint(value);
  }

  /**
   * Helper function to get a Datastore Integer object.
   *
   * This is also useful when using an ID outside the bounds of a JavaScript
   * Number object.
   *
   * @param {number} value The integer value.
   * @returns {object}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const sevenInteger = datastore.int(7);
   *
   * //-
   * // Create an Int to support long Key IDs.
   * //-
   * const key = datastore.key([
   *   'Kind',
   *   datastore.int('100000000000001234')
   * ]);
   * ```
   */
  static int(value: number | string) {
    return new entity.Int(value);
  }

  int(value: number | string) {
    return Datastore.int(value);
  }

  /**
   * Helper function to check if something is a Datastore Integer object.
   *
   * @param {*} value
   * @returns {boolean}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * datastore.isInt(42); // false
   * datastore.isInt(datastore.int(42)); // true
   * ```
   */
  static isInt(value?: {}) {
    return entity.isDsInt(value);
  }

  isInt(value?: {}) {
    return Datastore.isInt(value);
  }

  /**
   * Access the Key from an Entity object.
   *
   * @name Datastore.KEY
   * @type {symbol}
   */
  /**
   * Access the Key from an Entity object.
   *
   * @name Datastore#KEY
   * @type {symbol}
   */
  static KEY: typeof entity.KEY_SYMBOL = entity.KEY_SYMBOL;
  KEY: typeof entity.KEY_SYMBOL = Datastore.KEY;

  /**
   * This is one of three values which may be returned from
   * {@link Datastore#runQuery}, {@link Transaction#runQuery}, and
   * {@link Query#run} as `info.moreResults`.
   *
   * There *may* be more results after the specified end cursor.
   *
   * @type {string}
   */
  static MORE_RESULTS_AFTER_CURSOR = 'MORE_RESULTS_AFTER_CURSOR';
  MORE_RESULTS_AFTER_CURSOR = Datastore.MORE_RESULTS_AFTER_CURSOR;

  /**
   * This is one of three values which may be returned from
   * {@link Datastore#runQuery}, {@link Transaction#runQuery}, and
   * {@link Query#run} as `info.moreResults`.
   *
   * There *may* be more results after the specified limit.
   *
   * @type {string}
   */
  static MORE_RESULTS_AFTER_LIMIT = 'MORE_RESULTS_AFTER_LIMIT';
  MORE_RESULTS_AFTER_LIMIT = Datastore.MORE_RESULTS_AFTER_LIMIT;

  /**
   * This is one of three values which may be returned from
   * {@link Datastore#runQuery}, {@link Transaction#runQuery}, and
   * {@link Query#run} as `info.moreResults`.
   *
   * There are no more results left to query for.
   *
   * @type {string}
   */
  static NO_MORE_RESULTS = 'NO_MORE_RESULTS';
  NO_MORE_RESULTS = Datastore.NO_MORE_RESULTS;

  /**
   * Create a query for the specified kind. See {@link Query} for all
   * of the available methods.
   *
   * @see {@link https://cloud.google.com/datastore/docs/concepts/queries| Datastore Queries}
   * @see {@link Query}
   *
   * @param {string} [namespace] Namespace.
   * @param {string} kind  The kind to query.
   * @returns {Query}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const query = datastore.createQuery('Company');
   * ```
   */
  createQuery(kind?: string): Query;
  createQuery(kind?: string[]): Query;
  createQuery(namespace: string, kind: string): Query;
  createQuery(namespace: string, kind: string[]): Query;
  createQuery(
    namespaceOrKind?: string | string[],
    kind?: string | string[]
  ): Query {
    let namespace = namespaceOrKind as string;
    if (!kind) {
      kind = namespaceOrKind;
      namespace = this.namespace!;
    }
    return new Query(this, namespace, arrify(kind) as string[]);
  }

  /**
   * Helper to create a Key object, scoped to the instance's namespace by
   * default.
   *
   * You may also specify a configuration object to define a namespace and path.
   *
   * @param {object|string|array} [options] Key path. To specify or override a namespace,
   *     you must use an object here to explicitly state it.
   * @param {string|array} [options.path]  Key path.
   * @param {string} [options.namespace] Optional namespace.
   * @returns {Key} A newly created Key from the options given.
   *
   * @example
   * ```
   * <caption>Create an incomplete key with a kind value of `Company`.
   * Since no Id is supplied, Datastore will generate one on save.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key('Company');
   *
   * ```
   * @example
   * ```
   * <caption>Create a complete key with a kind value of `Company` and Id `123`.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 123]);
   *
   * ```
   * @example
   * ```
   * <caption>If the ID integer is outside the bounds of a JavaScript Number
   * object, create an Int.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key([
   *   'Company',
   *   datastore.int('100000000000001234')
   * ]);
   *
   * ```
   * @example
   * ```
   * <caption>Create a complete key with a kind value of `Company` and name `Google`.
   * Because the supplied Id is a string, Datastore will prefix it with "name=".
   * Had the supplied Id been numeric, Datastore would prefix it with the standard, "id=".</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 'Google']);
   *
   * ```
   * @example
   * ```
   * <caption>Create a complete key from a provided namespace and path.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key({
   *   namespace: 'My-NS',
   *   path: ['Company', 123]
   * });
   *
   * ```
   * @example
   * ```
   * <caption>Create a complete key that specifies an ancestor. This will create a Team entity
   * with a name of "Datastore", which belongs to the Company with the "name=Google" key.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 'Google', 'Team', 'Datastore']);
   *
   * ```
   * @example
   * ```
   * <caption>Create a incomplete key that specifies an ancestor. This will create an Employee entity
   * with an auto-generated Id, which belongs to the Company with the "name=Google" key.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 'Google', 'Employee']);
   * ```
   */
  key(options: entity.KeyOptions): entity.Key;
  key(path: PathType[]): entity.Key;
  key(path: string): entity.Key;
  key(options: string | entity.KeyOptions | PathType[]): entity.Key {
    const keyOptions = is.object(options)
      ? (options as entity.KeyOptions)
      : {
          namespace: this.namespace,
          path: arrify(options) as PathType[],
        };
    return new entity.Key(keyOptions);
  }

  /**
   * Helper function to check if something is a Datastore Key object.
   *
   * @param {*} value
   * @returns {boolean}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * datastore.isKey({path: ['Company', 123]}); // false
   * datastore.isKey(datastore.key(['Company', 123])); // true
   * ```
   */
  static isKey(value?: {}) {
    return entity.isDsKey(value);
  }
  isKey(value?: {}) {
    return Datastore.isKey(value);
  }

  /**
   * Helper to create a URL safe key.
   *
   * This is intended to work with the "legacy" representation of a
   * datastore "Key" used within Google App Engine (a so-called "Reference").
   * The returned string can be used as the "urlsafe"
   * The base64 encoded values will have padding removed.
   *
   *
   * @param {entity.Key} key Entity key object.
   * @param {string} locationPrefix Optional .
   *  The location prefix of an App Engine project ID.
   *  Often this value is 's~', but may also be 'e~', or other location prefixes
   *  currently unknown.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {string} callback.urlSafeKey A Base64-encoded URL-safe key.
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const key = datastore.key(['Company', 'Google']);
   *
   * datastore.keyToLegacyUrlSafe(key, (err, urlSafeKey) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *   console.log(urlSafeKey);
   * });
   *
   * //-
   * // Create a complete URL-safe key using a location prefix.
   * //-
   * const locationPrefix = 's~';
   *
   * datastore.keyToLegacyUrlSafe(key, locationPrefix, (err, urlSafeKey) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *   console.log(urlSafeKey);
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * datastore.keyToLegacyUrlSafe(key).then((data) => {
   *   const urlSafeKey = data[0];
   *   console.log(urlSafeKey);
   * });
   * ```
   */
  keyToLegacyUrlSafe(key: entity.Key, locationPrefix?: string): Promise<string>;
  keyToLegacyUrlSafe(
    key: entity.Key,
    callback: KeyToLegacyUrlSafeCallback
  ): void;
  keyToLegacyUrlSafe(
    key: entity.Key,
    locationPrefix: string,
    callback: KeyToLegacyUrlSafeCallback
  ): void;
  keyToLegacyUrlSafe(
    key: entity.Key,
    locationPrefixOrCallback?: string | KeyToLegacyUrlSafeCallback,
    callback?: KeyToLegacyUrlSafeCallback
  ): Promise<string> | void {
    const locationPrefix =
      typeof locationPrefixOrCallback === 'string'
        ? locationPrefixOrCallback
        : '';
    callback =
      typeof locationPrefixOrCallback === 'function'
        ? locationPrefixOrCallback
        : callback;
    this.auth.getProjectId((err, projectId) => {
      if (err) {
        callback!(err);
        return;
      }
      callback!(null, urlSafeKey.legacyEncode(projectId!, key, locationPrefix));
    });
  }

  /**
   * Helper to convert URL safe key string to entity key object
   *
   * This is intended to work with the "legacy" representation of a
   * datastore "Key" used within Google App Engine (a so-called "Reference").
   *
   * @param {entity.Key} key Entity key object.
   * @param {string} locationPrefix Optional .
   *  The location prefix of an App Engine project ID.
   *  Often this value is 's~', but may also be 'e~', or other location prefixes
   *  currently unknown.
   * @returns {string} Created urlsafe key.
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const urlSafeKey = 'ag9ncmFzcy1jbHVtcC00NzlyEwsSB0NvbXBhbnkiBkdvb2dsZQw';
   *
   * datastore.keyFromLegacyUrlsafe(key);
   *
   * ```
   */
  keyFromLegacyUrlsafe(key: string): entity.Key {
    return urlSafeKey.legacyDecode(key);
  }

  /**
   * Create a new Transaction object.
   *
   * @param {object} [options] Configuration object.
   * @param {string} [options.id] The ID of a previously run transaction.
   * @param {boolean} [options.readOnly=false] A read-only transaction cannot
   *     modify entities.
   * @returns {Transaction}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   * ```
   */
  transaction(options?: TransactionOptions) {
    return new Transaction(this, options);
  }

  /**
   * Determine the appropriate endpoint to use for API requests. If not
   * explicitly defined, check for the "DATASTORE_EMULATOR_HOST" environment
   * variable, used to connect to a local Datastore server.
   *
   * @private
   *
   * @param {string} customApiEndpoint Custom API endpoint.
   */
  determineBaseUrl_(customApiEndpoint?: string) {
    let baseUrl = this.defaultBaseUrl_;
    const leadingProtocol = new RegExp('^https*://');
    const trailingSlashes = new RegExp('/*$');
    const port = new RegExp(':(\\d+)');

    if (customApiEndpoint) {
      baseUrl = customApiEndpoint;
      this.customEndpoint_ = true;
    } else if (process.env.DATASTORE_EMULATOR_HOST) {
      baseUrl = process.env.DATASTORE_EMULATOR_HOST;
      this.customEndpoint_ = true;
    }

    if (port.test(baseUrl)) {
      this.port_ = Number(baseUrl.match(port)![1]);
    }

    this.baseUrl_ = baseUrl
      .replace(leadingProtocol, '')
      .replace(port, '')
      .replace(trailingSlashes, '');
  }

  /**
   * {@link DatastoreRequest} class.
   *
   * @name Datastore.DatastoreRequest
   * @see DatastoreRequest
   * @type {constructor}
   */
  DatastoreRequest = DatastoreRequest;

  /**
   * {@link Query} class.
   *
   * @name Datastore.Query
   * @see Query
   * @type {constructor}
   */
  Query = Query;

  /**
   * {@link Transaction} class.
   *
   * @name Datastore.Transaction
   * @see Transaction
   * @type {constructor}
   */
  Transaction = Transaction;
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Datastore, {
  exclude: [
    'createAggregationQuery',
    'double',
    'isDouble',
    'geoPoint',
    'getDatabaseId',
    'getProjectId',
    'isGeoPoint',
    'index',
    'int',
    'isInt',
    'createQuery',
    'key',
    'isKey',
    'keyFromLegacyUrlsafe',
    'transaction',
  ],
});

export {Datastore};

/**
 * The default export of the `@google-cloud/datastore` package is the
 * {@link Datastore} class.
 *
 * See the {@link Datastore} class for client methods and configuration options.
 *
 * @module {Datastore} @google-cloud/datastore
 * @alias nodejs-datastore
 *
 * @example Install the client library with <a href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save
 * ```
 * @google-cloud/datastore
 *
 * @example Import the client library
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 *
 * ```
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const datastore = new Datastore();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const datastore = new Datastore({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:datastore_quickstart
 * Full quickstart example:
 */

/**
 * @name Datastore.v1
 * @see v1.DatastoreClient
 * @type {object}
 * @property {constructor} DatastoreClient
 *     Reference to {@link v1.DatastoreClient}.
 */

/**
 * @name module:@google-cloud/datastore.v1
 * @see v1.DatastoreClient
 * @type {object}
 * @property {constructor} DatastoreClient
 *     Reference to {@link v1.DatastoreClient}.
 */
module.exports.v1 = gapic.v1;

export interface TransactionOptions {
  id?: string;
  readOnly?: boolean;
}

export {Index, DatastoreRequest, Query, Transaction};

export interface DatastoreOptions extends GoogleAuthOptions {
  namespace?: string;
  apiEndpoint?: string;
  sslCreds?: ChannelCredentials;
  databaseId?: string;
}

export interface KeyToLegacyUrlSafeCallback {
  (err?: Error | null, urlSafeKey?: string): void;
}
const v1 = gapic.v1;
export {v1};

export {DatastoreClient, DatastoreAdminClient} from './v1';

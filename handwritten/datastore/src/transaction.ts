/*!
 * Copyright 2014 Google LLC.
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
import arrify = require('arrify');
import {CallOptions} from 'google-gax';

import {google} from '../protos/protos';

import {Datastore, TransactionOptions} from '.';
import {entity, Entity, Entities} from './entity';
import {
  Query,
  RunQueryCallback,
  RunQueryInfo,
  RunQueryOptions,
  RunQueryResponse,
} from './query';
import {
  CommitCallback,
  CommitResponse,
  DatastoreRequest,
  RequestOptions,
  PrepareEntityObjectResponse,
  CreateReadStreamOptions,
  GetResponse,
  GetCallback,
  RequestCallback,
} from './request';
import {AggregateQuery} from './aggregate';
import {Mutex} from 'async-mutex';

/*
 * This type matches the value returned by the promise in the
 * #beginTransactionAsync function and subsequently passed into various other
 * methods in this class.
 */
interface BeginAsyncResponse {
  err?: Error | null;
  resp?: google.datastore.v1.IBeginTransactionResponse;
}

enum TransactionState {
  NOT_STARTED,
  IN_PROGRESS, // IN_PROGRESS currently tracks the expired state as well
}

/**
 * A transaction is a set of Datastore operations on one or more entities. Each
 * transaction is guaranteed to be atomic, which means that transactions are
 * never partially applied. Either all of the operations in the transaction are
 * applied, or none of them are applied.
 *
 * @see {@link https://cloud.google.com/datastore/docs/concepts/transactions| Transactions Reference}
 *
 * @class
 * @extends {Request}
 * @param {Datastore} datastore A Datastore instance.
 * @mixes module:datastore/request
 *
 * @example
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const transaction = datastore.transaction();
 * ```
 */
class Transaction extends DatastoreRequest {
  namespace?: string;
  readOnly: boolean;
  request: Function;
  modifiedEntities_: ModifiedEntities;
  skipCommit?: boolean;
  #mutex = new Mutex();
  #state = TransactionState.NOT_STARTED;
  constructor(datastore: Datastore, options?: TransactionOptions) {
    super();
    /**
     * @name Transaction#datastore
     * @type {Datastore}
     */
    this.datastore = datastore;

    /**
     * @name Transaction#namespace
     * @type {string}
     */
    this.namespace = datastore.namespace;

    options = options || {};

    this.id = options.id;
    this.readOnly = options.readOnly === true;

    this.request = datastore.request_.bind(datastore);

    // A queue for entity modifications made during the transaction.
    this.modifiedEntities_ = [];

    // Queue the callbacks that process the API responses.
    this.requestCallbacks_ = [];

    // Queue the requests to make when we send the transactional commit.
    this.requests_ = [];
  }

  /*! Developer Documentation
   *
   * Below, we override two methods that we inherit from DatastoreRequest:
   * `delete` and `save`. This is done because:
   *
   *   A) the documentation needs to be different for a transactional save, and
   *   B) we build up a "modifiedEntities_" array on this object, used to build
   *      the final commit request with.
   */

  /**
   * Commit the remote transaction and finalize the current transaction
   * instance.
   *
   * If the commit request fails, we will automatically rollback the
   * transaction.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   *   If the commit fails, we automatically try to rollback the transaction
   * (see {module:datastore/transaction#rollback}).
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * transaction.commit((err, apiResponse) => {
   *   if (err) {
   *     // Transaction could not be committed.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * transaction.commit().then((data) => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  commit(gaxOptions?: CallOptions): Promise<CommitResponse>;
  commit(callback: CommitCallback): void;
  commit(gaxOptions: CallOptions, callback: CommitCallback): void;
  commit(
    gaxOptionsOrCallback?: CallOptions | CommitCallback,
    cb?: CommitCallback
  ): void | Promise<CommitResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function'
        ? gaxOptionsOrCallback
        : typeof cb === 'function'
        ? cb
        : () => {};
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    // This ensures that the transaction is started before calling runCommit
    this.#withBeginTransaction(
      gaxOptions,
      () => {
        this.#runCommit(gaxOptions, callback);
      },
      callback
    );
  }

  /**
   * Create a query for the specified kind. See {module:datastore/query} for all
   * of the available methods.
   *
   * @see {@link https://cloud.google.com/datastore/docs/concepts/queries| Datastore Queries}
   *
   * @see {@link Query}
   *
   * @param {string} [namespace] Namespace.
   * @param {string} kind The kind to query.
   * @returns {Query}
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * // Run the query inside the transaction.
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *   const ancestorKey = datastore.key(['ParentCompany', 'Alphabet']);
   *
   *   const query = transaction.createQuery('Company')
   *       .hasAncestor(ancestorKey);
   *
   *   query.run((err, entities) => {
   *     if (err) {
   *       // Error handling omitted.
   *     }
   *
   *     transaction.commit((err) => {
   *       if (!err) {
   *         // Transaction committed successfully.
   *       }
   *     });
   *   });
   * });
   *
   * // Run the query inside the transaction.with namespace
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *   const ancestorKey = datastore.key(['ParentCompany', 'Alphabet']);
   *
   *   const query = transaction.createQuery('CompanyNamespace', 'Company')
   *       .hasAncestor(ancestorKey);
   *
   *   query.run((err, entities) => {
   *     if (err) {
   *       // Error handling omitted.
   *     }
   *
   *     transaction.commit((err) => {
   *       if (!err) {
   *         // Transaction committed successfully.
   *       }
   *     });
   *   });
   * });
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
    return this.datastore.createQuery.call(
      this,
      namespaceOrKind as string,
      kind as string[]
    );
  }

  /**
   * Create an aggregation query from the query specified. See {module:datastore/query} for all
   * of the available methods.
   *
   */
  createAggregationQuery(query: Query): AggregateQuery {
    return this.datastore.createAggregationQuery.call(this, query);
  }

  /**
   * Delete all entities identified with the specified key(s) in the current
   * transaction.
   *
   * @param {Key|Key[]} key Datastore key object(s).
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Delete a single entity.
   *   transaction.delete(datastore.key(['Company', 123]));
   *
   *   // Delete multiple entities at once.
   *   transaction.delete([
   *     datastore.key(['Company', 123]),
   *     datastore.key(['Product', 'Computer'])
   *   ]);
   *
   *   transaction.commit((err) => {
   *     if (!err) {
   *       // Transaction committed successfully.
   *     }
   *   });
   * });
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete(entities?: Entities): any {
    arrify(entities).forEach((ent: Entity) => {
      this.modifiedEntities_.push({
        entity: {
          key: ent,
        },
        method: 'delete',
        args: [ent],
      });
    });
  }

  /**
   * This function calls get on the super class. If the transaction
   * has not been started yet then the transaction is started before the
   * get call is made.
   *
   * @param {Key|Key[]} keys Datastore key object(s).
   * @param {object} [options] Optional configuration.
   * @param {function} callback The callback function.
   *
   */
  get(
    keys: entity.Key | entity.Key[],
    options?: CreateReadStreamOptions
  ): Promise<GetResponse>;
  get(keys: entity.Key | entity.Key[], callback: GetCallback): void;
  get(
    keys: entity.Key | entity.Key[],
    options: CreateReadStreamOptions,
    callback: GetCallback
  ): void;
  get(
    keys: entity.Key | entity.Key[],
    optionsOrCallback?: CreateReadStreamOptions | GetCallback,
    cb?: GetCallback
  ): void | Promise<GetResponse> {
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? optionsOrCallback
        : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    // This ensures that the transaction is started before calling get
    this.#withBeginTransaction(
      options.gaxOptions,
      () => {
        super.get(keys, options, callback);
      },
      callback
    );
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/transaction#_google_cloud_datastore_Transaction_save_member_1_|Datastore#save}, forcing the method to be `insert`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   */
  insert(entities: Entities): void {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'insert';
        return x;
      });

    this.save(entities);
  }

  /**
   * Reverse a transaction remotely and finalize the current transaction
   * instance.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.rollback((err) => {
   *     if (!err) {
   *       // Transaction rolled back successfully.
   *     }
   *   });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * transaction.rollback().then((data) => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  rollback(callback: RollbackCallback): void;
  rollback(gaxOptions?: CallOptions): Promise<RollbackResponse>;
  rollback(gaxOptions: CallOptions, callback: RollbackCallback): void;
  rollback(
    gaxOptionsOrCallback?: CallOptions | RollbackCallback,
    cb?: RollbackCallback
  ): void | Promise<RollbackResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.request_(
      {
        client: 'DatastoreClient',
        method: 'rollback',
        gaxOpts: gaxOptions || {},
      },
      (err, resp) => {
        this.skipCommit = true;
        callback(err || null, resp);
      }
    );
  }

  /**
   * Begin a remote transaction. In the callback provided, run your
   * transactional commands.
   *
   * @param {object} [options] Configuration object.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {boolean} [options.readOnly=false] A read-only transaction cannot
   *     modify entities.
   * @param {string} [options.transactionId] The ID of a previous transaction.
   * @param {function} callback The function to execute within the context of
   *     a transaction.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Transaction} callback.transaction This transaction
   *     instance.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * transaction.run((err, transaction) => {
   *   // Perform Datastore transactional operations.
   *   const key = datastore.key(['Company', 123]);
   *
   *   transaction.get(key, (err, entity) => {
   *     entity.name = 'Google';
   *
   *     transaction.save({
   *       key: key,
   *       data: entity
   *     });
   *
   *     transaction.commit((err) => {
   *       if (!err) {
   *         // Data saved successfully.
   *       }
   *     });
   *   });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * transaction.run().then((data) => {
   *   const transaction = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  run(options?: RunOptions): Promise<RunResponse>;
  run(callback: RunCallback): void;
  run(options: RunOptions, callback: RunCallback): void;
  run(
    optionsOrCallback?: RunOptions | RunCallback,
    cb?: RunCallback
  ): void | Promise<RunResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.#mutex.runExclusive(async () => {
      if (this.#state === TransactionState.NOT_STARTED) {
        const runResults = await this.#beginTransactionAsync(options);
        this.#processBeginResults(runResults, callback);
      } else {
        process.emitWarning(
          'run has already been called and should not be called again.'
        );
        callback(null, this, {transaction: this.id});
      }
    });
  }

  /**
   * This function is a pass-through for the transaction.commit method
   * It contains the business logic used for committing a transaction
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @private
   */
  #runCommit(
    gaxOptions: CallOptions,
    callback: CommitCallback
  ): void | Promise<CommitResponse> {
    if (this.skipCommit) {
      setImmediate(callback);
      return;
    }

    const keys: Entities = {};

    this.modifiedEntities_
      // Reverse the order of the queue to respect the "last queued request
      // wins" behavior.
      .reverse()
      // Limit the operations we're going to send through to only the most
      // recently queued operations. E.g., if a user tries to save with the
      // same key they just asked to be deleted, the delete request will be
      // ignored, giving preference to the save operation.
      .filter((modifiedEntity: Entity) => {
        const key = modifiedEntity.entity.key;

        if (!entity.isKeyComplete(key)) return true;

        const stringifiedKey = JSON.stringify(modifiedEntity.entity.key);

        if (!keys[stringifiedKey]) {
          keys[stringifiedKey] = true;
          return true;
        }

        return false;
      })
      // Group entities together by method: `save` mutations, then `delete`.
      // Note: `save` mutations being first is required to maintain order when
      // assigning IDs to incomplete keys.
      .sort((a, b) => {
        return a.method < b.method ? 1 : a.method > b.method ? -1 : 0;
      })
      // Group arguments together so that we only make one call to each
      // method. This is important for `DatastoreRequest.save`, especially, as
      // that method handles assigning auto-generated IDs to the original keys
      // passed in. When we eventually execute the `save` method's API
      // callback, having all the keys together is necessary to maintain
      // order.
      .reduce((acc: Entities, entityObject: Entity) => {
        const lastEntityObject = acc[acc.length - 1];
        const sameMethod =
          lastEntityObject && entityObject.method === lastEntityObject.method;

        if (!lastEntityObject || !sameMethod) {
          acc.push(entityObject);
        } else {
          lastEntityObject.args = lastEntityObject.args.concat(
            entityObject.args
          );
        }

        return acc;
      }, [])
      // Call each of the mutational methods (DatastoreRequest[save,delete])
      // to build up a `req` array on this instance. This will also build up a
      // `callbacks` array, that is the same callback that would run if we
      // were using `save` and `delete` outside of a transaction, to process
      // the response from the API.
      .forEach(
        (modifiedEntity: {method: string; args: {reverse: () => void}}) => {
          const method = modifiedEntity.method;
          const args = modifiedEntity.args.reverse();
          Datastore.prototype[method].call(this, args, () => {});
        }
      );

    // Take the `req` array built previously, and merge them into one request to
    // send as the final transactional commit.
    const reqOpts = {
      mutations: this.requests_
        .map((x: {mutations: google.datastore.v1.Mutation}) => x.mutations)
        .reduce(
          (a: {concat: (arg0: Entity) => void}, b: Entity) => a.concat(b),
          []
        ),
    };

    this.request_(
      {
        client: 'DatastoreClient',
        method: 'commit',
        reqOpts,
        gaxOpts: gaxOptions || {},
      },
      (err, resp) => {
        if (err) {
          // Rollback automatically for the user.
          this.rollback(() => {
            // Provide the error & API response from the failed commit to the
            // user. Even a failed rollback should be transparent. RE:
            // https://github.com/GoogleCloudPlatform/google-cloud-node/pull/1369#discussion_r66833976
            callback(err, resp);
          });
          return;
        }

        // The `callbacks` array was built previously. These are the callbacks
        // that handle the API response normally when using the
        // DatastoreRequest.save and .delete methods.
        this.requestCallbacks_.forEach(
          (cb: (arg0: null, arg1: Entity) => void) => {
            cb(null, resp);
          }
        );
        callback(null, resp);
      }
    );
  }

  /**
   * This function parses results from a beginTransaction call
   *
   * @param {BeginAsyncResponse} [response]
   * The response data from a call to begin a transaction.
   * @param {RunCallback} [callback] A callback that accepts an error and a
   * response as arguments.
   *
   **/
  #processBeginResults(
    runResults: BeginAsyncResponse,
    callback: RunCallback
  ): void {
    const err = runResults.err;
    const resp = runResults.resp;
    if (err) {
      callback(err, null, resp);
    } else {
      this.#parseRunSuccess(runResults);
      callback(null, this, resp);
    }
  }

  /**
   * This function saves results from a successful beginTransaction call.
   *
   * @param {BeginAsyncResponse} [response] The response from a call to
   * begin a transaction that completed successfully.
   *
   **/
  #parseRunSuccess(runResults: BeginAsyncResponse) {
    const resp = runResults.resp;
    this.id = resp!.transaction;
    this.#state = TransactionState.IN_PROGRESS;
  }

  /**
   * This async function makes a beginTransaction call and returns a promise with
   * the information returned from the call that was made.
   *
   * @param {RunOptions} options The options used for a beginTransaction call.
   * @returns {Promise<RequestPromiseReturnType>}
   *
   *
   **/
  async #beginTransactionAsync(
    options: RunOptions
  ): Promise<BeginAsyncResponse> {
    const reqOpts: RequestOptions = {
      transactionOptions: {},
    };

    if (options.readOnly || this.readOnly) {
      reqOpts.transactionOptions!.readOnly = {};
    }

    if (options.transactionId || this.id) {
      reqOpts.transactionOptions!.readWrite = {
        previousTransaction: options.transactionId || this.id,
      };
    }

    if (options.transactionOptions) {
      reqOpts.transactionOptions = options.transactionOptions;
    }
    return new Promise((resolve: (value: BeginAsyncResponse) => void) => {
      this.request_(
        {
          client: 'DatastoreClient',
          method: 'beginTransaction',
          reqOpts,
          gaxOpts: options.gaxOptions,
        },
        // Always use resolve because then this function can return both the error and the response
        (err, resp) => {
          resolve({
            err,
            resp,
          });
        }
      );
    });
  }

  /**
   *
   * This function calls runAggregationQuery on the super class. If the transaction
   * has not been started yet then the transaction is started before the
   * runAggregationQuery call is made.
   *
   * @param {AggregateQuery} [query] AggregateQuery object.
   * @param {RunQueryOptions} [options] Optional configuration
   * @param {function} [callback] The callback function. If omitted, a promise is
   * returned.
   *
   **/
  runAggregationQuery(
    query: AggregateQuery,
    options?: RunQueryOptions
  ): Promise<RunQueryResponse>;
  runAggregationQuery(
    query: AggregateQuery,
    options: RunQueryOptions,
    callback: RequestCallback
  ): void;
  runAggregationQuery(query: AggregateQuery, callback: RequestCallback): void;
  runAggregationQuery(
    query: AggregateQuery,
    optionsOrCallback?: RunQueryOptions | RequestCallback,
    cb?: RequestCallback
  ): void | Promise<RunQueryResponse> {
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? optionsOrCallback
        : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    // This ensures that the transaction is started before calling runAggregationQuery
    this.#withBeginTransaction(
      options.gaxOptions,
      () => {
        super.runAggregationQuery(query, options, callback);
      },
      callback
    );
  }

  /**
   * This function calls runQuery on the super class. If the transaction
   * has not been started yet then the transaction is started before the
   * runQuery call is made.
   *
   * @param {Query} query Query object.
   * @param {object} [options] Optional configuration.
   * @param {function} [callback] The callback function. If omitted, a readable
   *     stream instance is returned.
   *
   */
  runQuery(query: Query, options?: RunQueryOptions): Promise<RunQueryResponse>;
  runQuery(
    query: Query,
    options: RunQueryOptions,
    callback: RunQueryCallback
  ): void;
  runQuery(query: Query, callback: RunQueryCallback): void;
  runQuery(
    query: Query,
    optionsOrCallback?: RunQueryOptions | RunQueryCallback,
    cb?: RunQueryCallback
  ): void | Promise<RunQueryResponse> {
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? optionsOrCallback
        : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    // This ensures that the transaction is started before calling runQuery
    this.#withBeginTransaction(
      options.gaxOptions,
      () => {
        super.runQuery(query, options, callback);
      },
      callback
    );
  }

  /**
   * Insert or update the specified object(s) in the current transaction. If a
   * key is incomplete, its associated object is inserted and the original Key
   * object is updated to contain the generated ID.
   *
   * This method will determine the correct Datastore method to execute
   * (`upsert`, `insert`, or `update`) by using the key(s) provided. For
   * example, if you provide an incomplete key (one without an ID), the request
   * will create a new entity and have its ID automatically assigned. If you
   * provide a complete key, the entity will be updated with the data specified.
   *
   * By default, all properties are indexed. To prevent a property from being
   * included in *all* indexes, you must supply an `excludeFromIndexes` array.
   * See below for an example.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the example below to
   * see how to target properties at different levels of nesting within your
   *     entity.
   * @param {object} entities.data Data to save with the provided key.
   *
   * @example
   * ```
   * <caption>Save a single entity.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * // Notice that we are providing an incomplete key. After the transaction is
   * // committed, the Key object held by the `key` variable will be populated
   * // with a path containing its generated ID.
   * //-
   * const key = datastore.key('Company');
   *
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.save({
   *     key: key,
   *     data: {
   *       rating: '10'
   *     }
   *   });
   *
   *   transaction.commit((err) => {
   *     if (!err) {
   *       // Data saved successfully.
   *     }
   *   });
   * });
   *
   * ```
   * @example
   * ```
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * // Use an array, `excludeFromIndexes`, to exclude properties from indexing.
   * // This will allow storing string values larger than 1500 bytes.
   *
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.save({
   *     key: key,
   *     excludeFromIndexes: [
   *       'description',
   *       'embeddedEntity.description',
   *       'arrayValue[].description'
   *     ],
   *     data: {
   *       description: 'Long string (...)',
   *       embeddedEntity: {
   *         description: 'Long string (...)'
   *       },
   *       arrayValue: [
   *         {
   *           description: 'Long string (...)'
   *         }
   *       ]
   *     }
   *   });
   *
   *   transaction.commit((err) => {
   *     if (!err) {
   *       // Data saved successfully.
   *     }
   *   });
   * });
   *
   * ```
   * @example
   * ```
   * <caption>Save multiple entities at once.</caption>
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   * const companyKey = datastore.key(['Company', 123]);
   * const productKey = datastore.key(['Product', 'Computer']);
   *
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.save([
   *     {
   *       key: companyKey,
   *       data: {
   *         HQ: 'Dallas, TX'
   *       }
   *     },
   *     {
   *       key: productKey,
   *       data: {
   *         vendor: 'Dell'
   *       }
   *     }
   *   ]);
   *
   *   transaction.commit((err) => {
   *     if (!err) {
   *       // Data saved successfully.
   *     }
   *   });
   * });
   * ```
   */
  save(entities: Entities): void {
    arrify(entities).forEach((ent: Entity) => {
      this.modifiedEntities_.push({
        entity: {
          key: ent.key,
        },
        method: 'save',
        args: [ent],
      });
    });
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/transaction#_google_cloud_datastore_Transaction_save_member_1_|Datastore#save}, forcing the method to be `update`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   */
  update(entities: Entities): void {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'update';
        return x;
      });

    this.save(entities);
  }

  /**
   * Maps to {@link https://cloud.google.com/nodejs/docs/reference/datastore/latest/datastore/transaction#_google_cloud_datastore_Transaction_save_member_1_|Datastore#save}, forcing the method to be `upsert`.
   *
   * @param {object|object[]} entities Datastore key object(s).
   * @param {Key} entities.key Datastore key object.
   * @param {string[]} [entities.excludeFromIndexes] Exclude properties from
   *     indexing using a simple JSON path notation. See the examples in
   *     {@link Datastore#save} to see how to target properties at different
   *     levels of nesting within your entity.
   * @param {object} entities.data Data to save with the provided key.
   */
  upsert(entities: Entities): void {
    entities = arrify(entities)
      .map(DatastoreRequest.prepareEntityObject_)
      .map((x: PrepareEntityObjectResponse) => {
        x.method = 'upsert';
        return x;
      });

    this.save(entities);
  }

  /**
   * Some rpc calls require that the transaction has been started (i.e, has a
   * valid id) before they can be sent. #withBeginTransaction acts as a wrapper
   * over those functions.
   *
   * If the transaction has not begun yet, `#withBeginTransaction` will first
   * send an rpc to begin the transaction, and then execute the wrapped
   * function. If it has begun, the wrapped function will be called directly
   * instead. If an error is encountered during the beginTransaction call, the
   * callback will be executed instead of the wrapped function.
   *
   * @param {CallOptions | undefined} [gaxOptions] Gax options provided by the
   * user that are used for the beginTransaction grpc call.
   * @param {function} [fn] A function which is run after ensuring a
   * beginTransaction call is made.
   * @param {function} [callback] A callback provided by the user that expects
   * an error in the first argument and a custom data type for the rest of the
   * arguments.
   * @private
   */
  #withBeginTransaction<T extends any[]>(
    gaxOptions: CallOptions | undefined,
    fn: () => void,
    callback: (...args: [Error | null, ...T] | [Error | null]) => void
  ): void {
    (async () => {
      if (this.#state === TransactionState.NOT_STARTED) {
        try {
          await this.#mutex.runExclusive(async () => {
            if (this.#state === TransactionState.NOT_STARTED) {
              // This sends an rpc call to get the transaction id
              const runResults = await this.#beginTransactionAsync({
                gaxOptions,
              });
              if (runResults.err) {
                // The rpc getting the id was unsuccessful.
                // Do not call the wrapped function.
                throw runResults.err;
              }
              this.#parseRunSuccess(runResults);
              // The rpc saving the transaction id was successful.
              // Now the wrapped function fn will be called.
            }
          });
        } catch (err: any) {
          // Handle an error produced by the beginTransactionAsync call
          return callback(err);
        }
      }
      return fn();
    })();
  }
}

export type ModifiedEntities = Array<{
  entity: {key: Entity};
  method: string;
  args: Entity[];
}>;
export type RunResponse = [
  Transaction,
  google.datastore.v1.IBeginTransactionResponse,
];
export interface RunCallback {
  (
    error: Error | null,
    transaction: Transaction | null,
    response?: google.datastore.v1.IBeginTransactionResponse
  ): void;
}
export interface RollbackCallback {
  (error: Error | null, response?: google.datastore.v1.IRollbackResponse): void;
}
export type RollbackResponse = [google.datastore.v1.IRollbackResponse];
export interface RunOptions {
  readOnly?: boolean;
  transactionId?: string;
  transactionOptions?: TransactionOptions;
  gaxOptions?: CallOptions;
}
/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Transaction, {
  exclude: [
    'createAggregationQuery',
    'createQuery',
    'delete',
    'insert',
    '#runAsync',
    'save',
    'update',
    'upsert',
  ],
});

/**
 * Reference to the {@link Transaction} class.
 * @name module:@google-cloud/datastore.Transaction
 * @see Transaction
 */
export {Transaction};

/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
import * as arrify from 'arrify';
import * as is from 'is';

import {entity} from './entity';
import {DatastoreRequest} from './request';

/**
 * A transaction is a set of Datastore operations on one or more entities. Each
 * transaction is guaranteed to be atomic, which means that transactions are
 * never partially applied. Either all of the operations in the transaction are
 * applied, or none of them are applied.
 *
 * @see [Transactions Reference]{@link https://cloud.google.com/datastore/docs/concepts/transactions}
 *
 * @class
 * @extends {Request}
 * @param {Datastore} datastore A Datastore instance.
 * @mixes module:datastore/request
 *
 * @example
 * const {Datastore} = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const transaction = datastore.transaction();
 */
class Transaction extends DatastoreRequest {
  projectId: string;
  namespace: string;
  readOnly: boolean;
  request;
  modifiedEntities_;
  skipCommit?: boolean;
  constructor(datastore, options) {
    super();
    /**
     * @name Transaction#datastore
     * @type {Datastore}
     */
    this.datastore = datastore;

    /**
     * @name Transaction#projectId
     * @type {string}
     */
    this.projectId = datastore.projectId;
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
   */
  commit(gaxOptions?, callback?) {
    if (is.fn(gaxOptions)) {
      callback = gaxOptions;
      gaxOptions = {};
    }

    callback = callback || (() => {});

    if (this.skipCommit) {
      setImmediate(callback);
      return;
    }

    const keys = {};

    this.modifiedEntities_
        // Reverse the order of the queue to respect the "last queued request
        // wins" behavior.
        .reverse()
        // Limit the operations we're going to send through to only the most
        // recently queued operations. E.g., if a user tries to save with the
        // same key they just asked to be deleted, the delete request will be
        // ignored, giving preference to the save operation.
        .filter(modifiedEntity => {
          const key = modifiedEntity.entity.key;

          if (!entity.isKeyComplete(key)) {
            return true;
          }

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
        .reduce(
            (acc, entityObject) => {
              const lastEntityObject = acc[acc.length - 1];
              const sameMethod = lastEntityObject &&
                  entityObject.method === lastEntityObject.method;

              if (!lastEntityObject || !sameMethod) {
                acc.push(entityObject);
              } else {
                lastEntityObject.args =
                    lastEntityObject.args.concat(entityObject.args);
              }

              return acc;
            },
            [])
        // Call each of the mutational methods (DatastoreRequest[save,delete])
        // to build up a `req` array on this instance. This will also build up a
        // `callbacks` array, that is the same callback that would run if we
        // were using `save` and `delete` outside of a transaction, to process
        // the response from the API.
        .forEach(modifiedEntity => {
          const method = modifiedEntity.method;
          const args = modifiedEntity.args.reverse();
          DatastoreRequest.prototype[method].call(this, args, () => {});
        });

    // Take the `req` array built previously, and merge them into one request to
    // send as the final transactional commit.
    const reqOpts = {
      mutations: this.requests_.map(x => x.mutations)
                     .reduce((a, b) => a.concat(b), []),
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
          this.requestCallbacks_.forEach(cb => {
            cb(null, resp);
          });
          callback(null, resp);
        });
  }

  /**
   * Create a query for the specified kind. See {module:datastore/query} for all
   * of the available methods.
   *
   * @see [Datastore Queries]{@link https://cloud.google.com/datastore/docs/concepts/queries}
   *
   * @see {@link Query}
   *
   * @param {string} [namespace] Namespace.
   * @param {string} kind The kind to query.
   * @returns {Query}
   *
   * @example
   * const {Datastore} = require('@google-cloud/datastore');
   * const datastore = new Datastore();
   * const transaction = datastore.transaction();
   *
   * // Run the query inside the transaction.
   * transaction.run((err) => {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const query = transaction.createQuery('Company');
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
   */
  createQuery(namespace: string, kind?: string) {
    return this.datastore.createQuery.call(this, namespace, kind);
  }

  /**
   * Delete all entities identified with the specified key(s) in the current
   * transaction.
   *
   * @param {Key|Key[]} key Datastore key object(s).
   *
   * @example
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
   */
  delete(entities) {
    arrify(entities).forEach(ent => {
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
   */
  rollback(gaxOptions, callback?) {
    if (is.fn(gaxOptions)) {
      callback = gaxOptions;
      gaxOptions = {};
    }

    callback = callback || (() => {});

    this.request_(
        {
          client: 'DatastoreClient',
          method: 'rollback',
          gaxOpts: gaxOptions,
        },
        (err, resp) => {
          this.skipCommit = true;
          callback(err || null, resp);
        });
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
   */
  run(options?, callback?) {
    if (is.fn(options)) {
      callback = options;
      options = {};
    }

    options = options || {};
    callback = callback || (() => {});

    // tslint:disable-next-line no-any
    const reqOpts: any = {
      transactionOptions: {},
    };

    if (options.readOnly || this.readOnly) {
      reqOpts.transactionOptions.readOnly = {};
    }

    if (options.transactionId || this.id) {
      reqOpts.transactionOptions.readWrite = {
        previousTransaction: options.transactionId || this.id,
      };
    }

    if (options.transactionOptions) {
      reqOpts.transactionOptions = options.transactionOptions;
    }

    this.request_(
        {
          client: 'DatastoreClient',
          method: 'beginTransaction',
          reqOpts,
          gaxOpts: options.gaxOptions,
        },
        (err, resp) => {
          if (err) {
            callback(err, null, resp);
            return;
          }
          this.id = resp.transaction;
          callback(null, this, resp);
        });
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
   * @example
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
   * @example
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
   */
  save(entities) {
    arrify(entities).forEach(ent => {
      this.modifiedEntities_.push({
        entity: {
          key: ent.key,
        },
        method: 'save',
        args: [ent],
      });
    });
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Transaction, {
  exclude: ['createQuery', 'delete', 'save'],
});

/**
 * Reference to the {@link Transaction} class.
 * @name module:@google-cloud/datastore.Transaction
 * @see Transaction
 */
export {Transaction};

/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import {PreciseDate} from '@google-cloud/precise-date';
import {promisifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import {
  ExecuteSqlRequest,
  ReadCallback,
  ReadRequest,
  ReadResponse,
  RunCallback,
  RunResponse,
  Snapshot,
} from './transaction';
import {google} from '../protos/protos';
import {Session, Database} from '.';
import {
  CLOUD_RESOURCE_HEADER,
  ResourceCallback,
  addLeaderAwareRoutingHeader,
} from '../src/common';
import {startTrace, setSpanError, traceConfig} from './instrument';
import {injectRequestIDIntoHeaders} from './request_id_header';
import {isString} from './helper';

export interface TransactionIdentifier {
  session: string | Session;
  transaction?: string;
  timestamp?: google.protobuf.ITimestamp;
}

export type CreateReadPartitionsResponse = [
  ReadRequest[],
  google.spanner.v1.IPartitionResponse,
];

export type CreateReadPartitionsCallback = ResourceCallback<
  ReadRequest[],
  google.spanner.v1.IPartitionResponse
>;

export type CreateQueryPartitionsResponse = [
  ExecuteSqlRequest[],
  google.spanner.v1.IPartitionResponse,
];

export type CreateQueryPartitionsCallback = ResourceCallback<
  ExecuteSqlRequest[],
  google.spanner.v1.IPartitionResponse
>;

/**
 * Use a BatchTransaction object to create partitions and read/query against
 * your Cloud Spanner database.
 *
 * @class
 * @extends Snapshot
 *
 * @param {TimestampBounds} [options] [Timestamp Bounds](https://cloud.google.com/spanner/docs/timestamp-bounds).
 */
class BatchTransaction extends Snapshot {
  /**
   * Closes all open resources.
   *
   * When the transaction is no longer needed, you should call this method to
   * free up resources allocated by the Batch client.
   *
   * Calling this method would render the transaction unusable everywhere. In
   * particular if this transaction object was being used across multiple
   * machines, calling this method on any of the machine would make the
   * transaction unusable on all the machines. This should only be called when
   * the transaction is no longer needed anywhere
   *
   * @param {BasicCallback} [callback] Callback function.
   * @returns {Promise<BasicResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.createBatchTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.close(function(err, apiResponse) {});
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * database.createBatchTransaction().then(function(data) {
   *   const transaction = data[0];
   *   return transaction.close();
   * });
   * ```
   */
  close(callback?) {
    this.end();
    if (callback) {
      callback();
    }
  }
  /**
   * @see [`ExecuteSqlRequest`](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.ExecuteSqlRequest)
   * @typedef {object} QueryPartition
   * @property {string} partitionToken A token representing the partition, used to identify and execute the partition at a later time.
   */
  /**
   * @typedef {array} CreateQueryPartitionsResponse
   * @property {ExecuteSqlRequest[]} 0 Array of ExecuteSqlRequest partitions.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateQueryPartitionsCallback
   * @param {?Error} err Request error, if any.
   * @param {ExecuteSqlRequest[]} partitions Array of ExecuteSqlRequest partitions.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Creates a set of query partitions that can be used to execute a query
   * operation in parallel. Partitions become invalid when the transaction used
   * to create them is closed.
   *
   * @param {string|ExecuteSqlRequest} query - A SQL query string or an {@link ExecuteSqlRequest} object.
   *  If a string is provided, it will be wrapped into an `ExecuteSqlRequest`.
   * @param {object} [query.gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {object} [query.params] A map of parameter name to values.
   * @param {object} [query.partitionOptions] A map of partition options.
   * @param {object} [query.types] A map of parameter types.
   * @param {CreateQueryPartitionsCallback} [callback] - Optional Callback function. If not provided, a promise is returned.
   * @returns {Promise<CreateQueryPartitionsResponse>|void} A promise resolving to an array of
   *  `ExecuteSqlRequest' partitions and `IPartitionResponse` , or void if a callback is provided.
   *
   * @example <caption>include:samples/batch.js</caption>
   * region_tag:spanner_batch_client
   */
  createQueryPartitions(
    query: string | ExecuteSqlRequest,
  ): Promise<CreateQueryPartitionsResponse>;
  createQueryPartitions(
    query: string | ExecuteSqlRequest,
    callback: CreateQueryPartitionsCallback,
  ): void;
  createQueryPartitions(
    query: string | ExecuteSqlRequest,
    cb?: CreateQueryPartitionsCallback,
  ): void | Promise<CreateQueryPartitionsResponse> {
    const request: ExecuteSqlRequest =
      typeof query === 'string' ? {sql: query} : query;

    const reqOpts = Object.assign({}, request, Snapshot.encodeParams(request));

    delete (reqOpts as any).gaxOptions;
    delete (reqOpts as any).types;

    const traceConfig: traceConfig = {
      sql: request.sql,
      opts: this._observabilityOptions,
      dbName: this.getDBName(),
    };
    return startTrace(
      'BatchTransaction.createQueryPartitions',
      traceConfig,
      span => {
        const headers: {[k: string]: string} = {};
        if (this._getSpanner().routeToLeaderEnabled) {
          addLeaderAwareRoutingHeader(headers);
        }

        this.createPartitions_(
          {
            client: 'SpannerClient',
            method: 'partitionQuery',
            reqOpts,
            gaxOpts: request.gaxOptions,
            headers: injectRequestIDIntoHeaders(headers, this.session),
          },
          (err, partitions, resp) => {
            if (err) {
              setSpanError(span, err);
            }

            span.end();
            cb!(err, partitions, resp);
          },
        );
      },
    );
  }

  protected getDBName(): string {
    return (this.session.parent as Database).formattedName_;
  }

  /**
   * Generic create partition method. Handles common parameters used in both
   * {@link BatchTransaction#createQueryPartitions} and {@link
   * BatchTransaction#createReadPartitions}
   *
   * @private
   *
   * @param {object} config The request config.
   * @param {function} callback Callback function.
   */
  createPartitions_(config, callback) {
    const traceConfig: traceConfig = {
      opts: this._observabilityOptions,
      dbName: this.getDBName(),
    };

    return startTrace(
      'BatchTransaction.createPartitions_',
      traceConfig,
      span => {
        const query = extend({}, config.reqOpts, {
          session: this.session.formattedName_,
          transaction: {id: this.id},
        });
        config.reqOpts = extend({}, query);
        const headers = {
          [CLOUD_RESOURCE_HEADER]: (this.session.parent as Database)
            .formattedName_,
        };
        config.headers = injectRequestIDIntoHeaders(headers, this.session);
        delete query.partitionOptions;
        this.session.request(config, (err, resp) => {
          if (err) {
            setSpanError(span, err);
            span.end();
            callback(err, null, resp);
            return;
          }

          const partitions = resp.partitions.map(partition => {
            return extend({}, query, partition);
          });

          if (resp.transaction) {
            const {id, readTimestamp} = resp.transaction;

            this.id = id;

            if (readTimestamp) {
              this.readTimestampProto = readTimestamp;
              this.readTimestamp = new PreciseDate(readTimestamp);
            }
          }

          span.end();
          callback(null, partitions, resp);
        });
      },
    );
  }
  /**
   * @typedef {object} ReadPartition
   * @mixes ReadRequestOptions
   * @property {string} partitionToken partitionToken A token representing the partition, used to identify and execute the partition at a later time.
   * @property {object} [gaxOptions] optional request configuration options,
   * See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} CreateReadPartitionsResponse
   * @property {ReadPartition[]} 0 Array of read partitions.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateReadPartitionsCallback
   * @param {?Error} err Request error, if any.
   * @param {ReadPartition[]} partitions Array of read partitions.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Creates a set of read partitions that can be used to execute a read
   * operation in parallel. Partitions become invalid when the transaction used
   * to create them is closed.
   *
   * @param {ReadRequest} options Configuration object, describing what to
   *     read from.
   * @param {CreateReadPartitionsCallback} [callback] Callback function.
   * @returns {Promise<CreateReadPartitionsResponse>|void} A promise that resolves
   * to an array containing the read partitions and the full API response, or `void` if a callback is provided.
   */
  createReadPartitions(
    options: ReadRequest,
  ): Promise<CreateReadPartitionsResponse>;
  createReadPartitions(
    options: ReadRequest,
    callback: CreateReadPartitionsCallback,
  ): void;
  createReadPartitions(
    options: ReadRequest,
    cb?: CreateReadPartitionsCallback,
  ): void | Promise<CreateReadPartitionsResponse> {
    const traceConfig: traceConfig = {
      opts: this._observabilityOptions,
      dbName: this.getDBName(),
    };

    return startTrace(
      'BatchTransaction.createReadPartitions',
      traceConfig,
      span => {
        const reqOpts = Object.assign({}, options, {
          keySet: Snapshot.encodeKeySet(options),
        });

        delete reqOpts.gaxOptions;
        delete reqOpts.keys;
        delete reqOpts.ranges;

        const headers: {[k: string]: string} = {};
        if (this._getSpanner().routeToLeaderEnabled) {
          addLeaderAwareRoutingHeader(headers);
        }

        this.createPartitions_(
          {
            client: 'SpannerClient',
            method: 'partitionRead',
            reqOpts,
            gaxOpts: options.gaxOptions,
            headers: injectRequestIDIntoHeaders(headers, this.session),
          },
          (err, partitions, resp) => {
            if (err) {
              setSpanError(span, err);
            }

            span.end();
            cb!(err, partitions, resp);
          },
        );
      },
    );
  }
  /**
   * Executes partition using either a read or a SQL query, depending on the type of partition provided.
   *
   * @param {ReadRequest|ExecuteSqlRequest} partition The partition object to execute.
   * This can either be a `ReadPartition` or a `QueryPartition`.
   *
   * @param {ReadCallback|RunCallback} [callback] Optional Callback function. If not provided,
   *  a promise will be returned.
   *
   * If the partition is a read partition, it will execute a read using {@link Transaction#read}
   * @see {@link Transaction#read} when using {@link ReadRequest}.
   *
   * If the partition is query partition, it will execute a SQL query using {@link Transaction#run}
   * @see {@link Transaction#run} when using {@link ExecuteSqlRequest}.
   *
   * @returns {Promise<ReadResponse | RunResponse>|void} Returns a promise when no callback is provided,
   *  or void when a callback is used.
   *
   * @example <caption>include:samples/batch.js</caption>
   * region_tag:spanner_batch_execute_partitions
   */
  execute(
    partition: ReadRequest | ExecuteSqlRequest,
  ): Promise<ReadResponse | RunResponse>;
  execute(
    partition: ReadRequest | ExecuteSqlRequest,
    callback: ReadCallback | RunCallback,
  ): void;
  execute(
    partition: ReadRequest | ExecuteSqlRequest,
    cb?: ReadCallback | RunCallback,
  ): void | Promise<ReadResponse | RunResponse> {
    const isRead = typeof (partition as ReadRequest).table === 'string';

    if (isRead) {
      this.read(
        (partition as ReadRequest).table!,
        partition as ReadRequest,
        cb as ReadCallback,
      );
      return;
    }

    this.run(partition as ExecuteSqlRequest, cb as RunCallback);
  }
  /**
   * Executes partition in streaming mode.
   *
   * @see {@link Transaction#createReadStream} when using {@link ReadPartition}.
   * @see {@link Transaction#runStream} when using {@link QueryPartition}.
   *
   * @param {ReadPartition|QueryPartition} partition The partition object.
   * @returns {ReadableStream} A readable stream that emits rows.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.createBatchTransaction(function(err, transaction) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   transaction.createReadPartitions(options, function(err, partitions) {
   *     const partition = partitions[0];
   *
   *     transaction
   *       .executeStream(partition)
   *       .on('error', function(err) {})
   *       .on('data', function(row) {
   *         // row = [
   *         //   {
   *         //     name: 'SingerId',
   *         //     value: '1'
   *         //   },
   *         //   {
   *         //     name: 'Name',
   *         //     value: 'Eddie Wilson'
   *         //   }
   *         // ]
   *       })
   *       .on('end', function() {
   *         // All results retrieved
   *       });
   *   });
   * });
   * ```
   */
  executeStream(partition) {
    // TODO: Instrument the streams with Otel.
    if (isString(partition.table)) {
      return this.createReadStream(partition.table, partition);
    }
    return this.runStream(partition);
  }
  /**
   * @typedef {object} TransactionIdentifier
   * @property {string|Session} session The full session name.
   * @property {string} transaction The transaction ID.
   * @property {string|Date} readTimestamp The transaction read timestamp.
   */
  /**
   * Creates a transaction identifier used to reference the transaction in
   * workers.
   *
   * @returns {TransactionIdentifier}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instance = spanner.instance('my-instance');
   * const database = instance.database('my-database');
   *
   * database.createBatchTransaction(function(err, transaction) {
   *   const identifier = transaction.identifier();
   * });
   * ```
   */
  identifier(): TransactionIdentifier {
    return {
      transaction: (this.id! as Buffer).toString('base64'),
      session: this.session.id,
      timestamp: this.readTimestampProto,
    };
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(BatchTransaction, {
  exclude: ['identifier'],
});

export {BatchTransaction};

/**
 * Copyright 2024 Google LLC. All Rights Reserved.
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

import * as protos from '../../protos/firestore_v1_proto_api';
import api = protos.google.firestore.v1;

import * as assert from 'assert';
import * as deepEqual from 'fast-deep-equal';

import * as firestore from '@google-cloud/firestore';
import {Aggregate, AggregateSpec} from '../aggregate';
import {average, count, countAll, field, sum} from '../pipelines';
import {Pipeline} from '../pipelines';
import {Timestamp} from '../timestamp';
import {mapToArray, requestTag, wrapError} from '../util';
import {ExplainMetrics, ExplainResults} from '../query-profile';
import {logger} from '../logger';
import {AggregateQuerySnapshot} from './aggregate-query-snapshot';
import {Query} from './query';
import {Readable, Transform} from 'stream';
import {QueryResponse, QuerySnapshotResponse} from './types';
import {
  SPAN_NAME_AGGREGATION_QUERY_GET,
  SPAN_NAME_RUN_AGGREGATION_QUERY,
} from '../telemetry/trace-util';

/**
 * A query that calculates aggregations over an underlying query.
 */
export class AggregateQuery<
  AggregateSpecType extends AggregateSpec,
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements
    firestore.AggregateQuery<AggregateSpecType, AppModelType, DbModelType>
{
  private readonly clientAliasToServerAliasMap: Record<string, string> = {};
  private readonly serverAliasToClientAliasMap: Record<string, string> = {};

  /**
   * @internal
   * @param _query The query whose aggregations will be calculated by this
   * object.
   * @param _aggregates The aggregations that will be performed by this query.
   */
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly _query: Query<AppModelType, DbModelType>,
    private readonly _aggregates: AggregateSpecType,
  ) {
    // Client-side aliases may be too long and exceed the 1500-byte string size limit.
    // Such long strings do not need to be transferred over the wire either.
    // The client maps the user's alias to a short form alias and send that to the server.
    let aggregationNum = 0;
    for (const clientAlias in this._aggregates) {
      if (Object.prototype.hasOwnProperty.call(this._aggregates, clientAlias)) {
        const serverAlias = `aggregate_${aggregationNum++}`;
        this.clientAliasToServerAliasMap[clientAlias] = serverAlias;
        this.serverAliasToClientAliasMap[serverAlias] = clientAlias;
      }
    }
  }

  /** The query whose aggregations will be calculated by this object. */
  get query(): Query<AppModelType, DbModelType> {
    return this._query;
  }

  /**
   * Executes this query.
   *
   * @returns A promise that will be resolved with the results of the query.
   */
  async get(): Promise<
    AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
  > {
    return this._query._firestore._traceUtil.startActiveSpan(
      SPAN_NAME_AGGREGATION_QUERY_GET,
      async () => {
        const {result} = await this._get();
        return result;
      },
    );
  }

  /**
   * Internal get() method that accepts an optional transaction options and
   * returns a snapshot with transaction and explain metadata.
   *
   * @private
   * @internal
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   */
  async _get(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
  ): Promise<
    QuerySnapshotResponse<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >
  > {
    const response = await this._getResponse(transactionOrReadTime);
    if (!response.result) {
      throw new Error('No AggregateQuery results');
    }
    return response as QuerySnapshotResponse<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >;
  }

  /**
   * Internal get() method that accepts an optional transaction id, and returns
   * transaction metadata.
   *
   * @private
   * @internal
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   */
  _getResponse(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): Promise<
    QueryResponse<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >
  > {
    // Capture the error stack to preserve stack tracing across async calls.
    const stack = Error().stack!;

    return new Promise((resolve, reject) => {
      const output: QueryResponse<
        AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
      > = {};

      const stream = this._stream(transactionOrReadTime, explainOptions);
      stream.on('error', err => {
        reject(wrapError(err, stack));
      });
      stream.on(
        'data',
        (
          data: QueryResponse<
            AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
          >,
        ) => {
          if (data.transaction) {
            output.transaction = data.transaction;
          }
          if (data.explainMetrics) {
            output.explainMetrics = data.explainMetrics;
          }
          if (data.result) {
            output.result = data.result;
          }
        },
      );
      stream.on('end', () => {
        stream.destroy();
        resolve(output);
      });
    });
  }

  /**
   * Internal streaming method that accepts an optional transaction ID.
   *
   * BEWARE: If `transactionOrReadTime` is `ITransactionOptions`, then the first
   * response in the stream will be a transaction response.
   *
   * @private
   * @internal
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   * @param explainOptions Options to use for explaining the query (if any).
   * @returns A stream of document results optionally preceded by a transaction response.
   */
  _stream(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): Readable {
    const tag = requestTag();
    const firestore = this._query.firestore;

    const stream: Transform = new Transform({
      objectMode: true,
      transform: (proto: api.IRunAggregationQueryResponse, enc, callback) => {
        const output: QueryResponse<
          AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
        > = {};

        // Proto comes with zero-length buffer by default
        if (proto.transaction?.length) {
          output.transaction = proto.transaction;
        }

        if (proto.explainMetrics) {
          output.explainMetrics = ExplainMetrics._fromProto(
            proto.explainMetrics,
            firestore._serializer!,
          );
        }

        if (proto.result) {
          const readTime = Timestamp.fromProto(proto.readTime!);
          const data = this.decodeResult(proto.result);
          output.result = new AggregateQuerySnapshot(this, readTime, data);
        }

        callback(undefined, output);
      },
    });

    firestore
      .initializeIfNeeded(tag)
      .then(async () => {
        // `toProto()` might throw an exception. We rely on the behavior of an
        // async function to convert this exception into the rejected Promise we
        // catch below.
        const request = this.toProto(transactionOrReadTime, explainOptions);

        const backendStream = await firestore.requestStream(
          'runAggregationQuery',
          /* bidirectional= */ false,
          request,
          tag,
        );
        stream.on('close', () => {
          backendStream.resume();
          backendStream.end();
        });
        backendStream.on('error', err => {
          // TODO(group-by) When group-by queries are supported for aggregates
          // consider implementing retries if the stream is making progress
          // receiving results for groups. See the use of lastReceivedDocument
          // in the retry strategy for runQuery.
          // Also note that explain queries should not be retried.

          backendStream.unpipe(stream);
          logger(
            'AggregateQuery._stream',
            tag,
            'AggregateQuery failed with stream error:',
            err,
          );

          this._query._firestore._traceUtil
            .currentSpan()
            .addEvent(`${SPAN_NAME_RUN_AGGREGATION_QUERY}: Error.`, {
              'error.message': err.message,
            });

          stream.destroy(err);
        });
        backendStream.resume();
        backendStream.pipe(stream);
      })
      .catch(e => stream.destroy(e));

    return stream;
  }

  /**
   * Internal method to decode values within result.
   * @private
   */
  private decodeResult(
    proto: api.IAggregationResult,
  ): firestore.AggregateSpecData<AggregateSpecType> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};
    const fields = proto.aggregateFields;
    if (fields) {
      const serializer = this._query.firestore._serializer!;
      for (const prop of Object.keys(fields)) {
        const alias = this.serverAliasToClientAliasMap[prop];
        assert(
          alias !== null && alias !== undefined,
          `'${prop}' not present in server-client alias mapping.`,
        );
        if (this._aggregates[alias] === undefined) {
          throw new Error(
            `Unexpected alias [${prop}] in result aggregate result`,
          );
        }
        data[alias] = serializer.decodeValue(fields[prop]);
      }
    }
    return data;
  }

  /**
   * Internal method for serializing a query to its RunAggregationQuery proto
   * representation with an optional transaction id.
   *
   * @private
   * @internal
   * @returns Serialized JSON for the query.
   */
  toProto(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): api.IRunAggregationQueryRequest {
    const queryProto = this._query.toProto();
    const runQueryRequest: api.IRunAggregationQueryRequest = {
      parent: queryProto.parent,
      structuredAggregationQuery: {
        structuredQuery: queryProto.structuredQuery,
        aggregations: mapToArray(this._aggregates, (aggregate, clientAlias) => {
          const serverAlias = this.clientAliasToServerAliasMap[clientAlias];
          assert(
            serverAlias !== null && serverAlias !== undefined,
            `'${clientAlias}' not present in client-server alias mapping.`,
          );
          return new Aggregate(
            serverAlias,
            aggregate.aggregateType,
            aggregate._field,
          ).toProto();
        }),
      },
    };

    if (transactionOrReadTime instanceof Uint8Array) {
      runQueryRequest.transaction = transactionOrReadTime;
    } else if (transactionOrReadTime instanceof Timestamp) {
      runQueryRequest.readTime = transactionOrReadTime.toProto().timestampValue;
    } else if (transactionOrReadTime) {
      runQueryRequest.newTransaction = transactionOrReadTime;
    }

    if (explainOptions) {
      runQueryRequest.explainOptions = explainOptions;
    }

    return runQueryRequest;
  }

  /**
   * @private
   * @internal
   */
  _pipeline(): Pipeline {
    const aggregates = mapToArray(
      this._aggregates,
      (aggregate, clientAlias) => {
        if (aggregate.aggregateType === 'count') {
          if (aggregate._field === undefined) {
            return countAll().as(clientAlias);
          }
          return count(field(aggregate._field)).as(clientAlias);
        } else if (aggregate.aggregateType === 'avg') {
          return average(field(aggregate._field!)).as(clientAlias);
        } else if (aggregate.aggregateType === 'sum') {
          return sum(field(aggregate._field!)).as(clientAlias);
        } else {
          throw new Error(`Unknown aggregate type ${aggregate.aggregateType}`);
        }
      },
    );

    if (aggregates.length === 0) {
      throw new Error(
        'Cannot convert an AggregateQuery with 0 aggregates to a Pipeline',
      );
    }

    return this._query
      ._pipeline()
      .aggregate(aggregates[0], ...aggregates.slice(1));
  }

  /**
   * Compares this object with the given object for equality.
   *
   * This object is considered "equal" to the other object if and only if
   * `other` performs the same aggregations as this `AggregateQuery` and
   * the underlying Query of `other` compares equal to that of this object
   * using `Query.isEqual()`.
   *
   * @param other The object to compare to this object for equality.
   * @returns `true` if this object is "equal" to the given object, as
   * defined above, or `false` otherwise.
   */
  isEqual(
    other: firestore.AggregateQuery<
      AggregateSpecType,
      AppModelType,
      DbModelType
    >,
  ): boolean {
    if (this === other) {
      return true;
    }
    if (!(other instanceof AggregateQuery)) {
      return false;
    }
    if (!this.query.isEqual(other.query)) {
      return false;
    }
    return deepEqual(this._aggregates, other._aggregates);
  }

  /**
   * Plans and optionally executes this query. Returns a Promise that will be
   * resolved with the planner information, statistics from the query
   * execution (if any), and the query results (if any).
   *
   * @returns A Promise that will be resolved with the planner information,
   * statistics from the query execution (if any), and the query results (if any).
   */
  async explain(
    options?: firestore.ExplainOptions,
  ): Promise<
    ExplainResults<
      AggregateQuerySnapshot<AggregateSpecType, AppModelType, DbModelType>
    >
  > {
    const {result, explainMetrics} = await this._getResponse(
      undefined,
      options || {},
    );
    if (!explainMetrics) {
      throw new Error('No explain results');
    }
    return new ExplainResults(explainMetrics, result || null);
  }
}

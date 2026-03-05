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
import * as firestore from '@google-cloud/firestore';
import {field} from '../pipelines';
import {Pipeline} from '../pipelines';

import {Timestamp} from '../timestamp';
import {VectorValue} from '../field-value';
import {FieldPath} from '../path';
import {QueryDocumentSnapshot} from '../document';
import {DocumentChange} from '../document-change';
import {isPrimitiveArrayEqual} from '../util';
import {QueryUtil} from './query-util';
import {Query} from './query';
import {VectorQueryOptions} from './vector-query-options';
import {VectorQuerySnapshot} from './vector-query-snapshot';
import {ExplainResults} from '../query-profile';
import {QueryResponse} from './types';

/**
 * A query that finds the documents whose vector fields are closest to a certain query vector.
 * Create an instance of `VectorQuery` with {@link Query.findNearest:VectorQueryOptions}.
 */
export class VectorQuery<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements firestore.VectorQuery<AppModelType, DbModelType>
{
  /**
   * @internal
   * @private
   **/
  readonly _queryUtil: QueryUtil<
    AppModelType,
    DbModelType,
    VectorQuery<AppModelType, DbModelType>
  >;

  /**
   * @private
   * @internal
   */
  constructor(
    private readonly _query: Query<AppModelType, DbModelType>,
    private readonly _options: VectorQueryOptions,
  ) {
    this._queryUtil = new QueryUtil<
      AppModelType,
      DbModelType,
      VectorQuery<AppModelType, DbModelType>
    >(_query._firestore, _query._queryOptions, _query._serializer);
  }

  /** The query whose results participants in the vector search. Filtering
   * performed by the query will apply before the vector search.
   **/
  get query(): Query<AppModelType, DbModelType> {
    return this._query;
  }

  /**
   * @private
   * @internal
   */
  private get _rawVectorField(): string {
    return typeof this._options.vectorField === 'string'
      ? this._options.vectorField
      : this._options.vectorField.toString();
  }

  /**
   * @private
   * @internal
   */
  private get _rawDistanceResultField(): string | undefined {
    if (typeof this._options.distanceResultField === 'undefined') return;

    return typeof this._options.distanceResultField === 'string'
      ? this._options.distanceResultField
      : this._options.distanceResultField.toString();
  }

  /**
   * @private
   * @internal
   */
  private get _rawQueryVector(): Array<number> {
    return Array.isArray(this._options.queryVector)
      ? this._options.queryVector
      : this._options.queryVector.toArray();
  }

  /**
   * Plans and optionally executes this vector search query. Returns a Promise that will be
   * resolved with the planner information, statistics from the query execution (if any),
   * and the query results (if any).
   *
   * @returns A Promise that will be resolved with the planner information, statistics
   *  from the query execution (if any), and the query results (if any).
   */
  async explain(
    options?: firestore.ExplainOptions,
  ): Promise<ExplainResults<VectorQuerySnapshot<AppModelType, DbModelType>>> {
    if (options === undefined) {
      options = {};
    }
    const {result, explainMetrics} = await this._getResponse(options);
    if (!explainMetrics) {
      throw new Error('No explain results');
    }
    return new ExplainResults(explainMetrics, result || null);
  }

  /**
   * Executes this vector search query.
   *
   * @returns A promise that will be resolved with the results of the query.
   */
  async get(): Promise<VectorQuerySnapshot<AppModelType, DbModelType>> {
    const {result} = await this._getResponse();
    if (!result) {
      throw new Error('No VectorQuerySnapshot result');
    }
    return result;
  }

  /**
   * @private
   * @internal
   */
  _pipeline(): Pipeline {
    const options: firestore.Pipelines.FindNearestStageOptions = {
      field: field(this._options.vectorField),
      vectorValue: this._options.queryVector,
      limit: this._options.limit,
      distanceMeasure: this._options.distanceMeasure.toLowerCase() as
        | 'cosine'
        | 'euclidean'
        | 'dot_product',
    };
    return this.query
      ._pipeline()
      .where(field(this._options.vectorField).exists())
      .findNearest(options);
  }

  _getResponse(
    explainOptions?: firestore.ExplainOptions,
  ): Promise<QueryResponse<VectorQuerySnapshot<AppModelType, DbModelType>>> {
    return this._queryUtil._getResponse(
      this,
      /*transactionOrReadTime*/ undefined,
      // VectorQuery cannot be retried with cursors as they do not support cursors yet.
      /*retryWithCursor*/ false,
      explainOptions,
    );
  }

  /**
   * Internal streaming method that accepts an optional transaction ID.
   *
   * @param transactionId - A transaction ID.
   * @private
   * @internal
   * @returns A stream of document results.
   */
  _stream(transactionId?: Uint8Array): NodeJS.ReadableStream {
    return this._queryUtil._stream(
      this,
      transactionId,
      /*retryWithCursor*/ false,
    );
  }

  /**
   * Internal method for serializing a query to its proto
   * representation with an optional transaction id.
   *
   * @private
   * @internal
   * @returns Serialized JSON for the query.
   */
  toProto(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): api.IRunQueryRequest {
    const queryProto = this._query.toProto(transactionOrReadTime);

    const queryVector = Array.isArray(this._options.queryVector)
      ? new VectorValue(this._options.queryVector)
      : (this._options.queryVector as VectorValue);

    queryProto.structuredQuery!.findNearest = {
      limit: {value: this._options.limit},
      distanceMeasure: this._options.distanceMeasure,
      vectorField: {
        fieldPath: FieldPath.fromArgument(this._options.vectorField)
          .formattedName,
      },
      queryVector: queryVector._toProto(this._query._serializer),
      distanceResultField: this._options?.distanceResultField
        ? FieldPath.fromArgument(this._options.distanceResultField!)
            .formattedName
        : undefined,
      distanceThreshold: this._options?.distanceThreshold
        ? {value: this._options?.distanceThreshold}
        : undefined,
    };

    if (explainOptions) {
      queryProto.explainOptions = explainOptions;
    }

    return queryProto;
  }

  /**
   * Construct the resulting vector snapshot for this query with given documents.
   *
   * @private
   * @internal
   */
  _createSnapshot(
    readTime: Timestamp,
    size: number,
    docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
    changes: () => Array<DocumentChange<AppModelType, DbModelType>>,
  ): VectorQuerySnapshot<AppModelType, DbModelType> {
    return new VectorQuerySnapshot<AppModelType, DbModelType>(
      this,
      readTime,
      size,
      docs,
      changes,
    );
  }

  /**
   * Construct a new vector query whose result will start after To support stream().
   * This now throws an exception because cursors are not supported from the backend for vector queries yet.
   *
   * @private
   * @internal
   * @returns Serialized JSON for the query.
   */
  startAfter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...fieldValuesOrDocumentSnapshot: Array<unknown>
  ): VectorQuery<AppModelType, DbModelType> {
    throw new Error(
      'Unimplemented: Vector query does not support cursors yet.',
    );
  }

  /**
   * Compares this object with the given object for equality.
   *
   * This object is considered "equal" to the other object if and only if
   * `other` performs the same vector distance search as this `VectorQuery` and
   * the underlying Query of `other` compares equal to that of this object
   * using `Query.isEqual()`.
   *
   * @param other - The object to compare to this object for equality.
   * @returns `true` if this object is "equal" to the given object, as
   * defined above, or `false` otherwise.
   */
  isEqual(other: firestore.VectorQuery<AppModelType, DbModelType>): boolean {
    if (this === other) {
      return true;
    }
    if (!(other instanceof VectorQuery)) {
      return false;
    }
    if (!this.query.isEqual(other.query)) {
      return false;
    }
    return (
      this._rawVectorField === other._rawVectorField &&
      isPrimitiveArrayEqual(this._rawQueryVector, other._rawQueryVector) &&
      this._options.limit === other._options.limit &&
      this._options.distanceMeasure === other._options.distanceMeasure &&
      this._options.distanceThreshold === other._options.distanceThreshold &&
      this._rawDistanceResultField === other._rawDistanceResultField
    );
  }
}

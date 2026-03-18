/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as firestore from '@google-cloud/firestore';
import * as protos from '../protos/firestore_v1_proto_api';

import {FieldOrder} from './reference/field-order';
import {Query} from './reference/query';
import {QueryOptions} from './reference/query-options';
import {FieldPath} from './path';
import {Serializer} from './serializer';
import {Firestore} from './index';

import api = protos.google.firestore.v1;

/**
 * A split point that can be used in a query as a starting and/or end point for
 * the query results. The cursors returned by {@link #startAt} and {@link
 * #endBefore} can only be used in a query that matches the constraint of query
 * that produced this partition.
 *
 * @class QueryPartition
 */
export class QueryPartition<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements firestore.QueryPartition<AppModelType, DbModelType>
{
  private readonly _serializer: Serializer;
  private _memoizedStartAt: unknown[] | undefined;
  private _memoizedEndBefore: unknown[] | undefined;

  /** @private */
  constructor(
    private readonly _firestore: Firestore,
    private readonly _collectionId: string,
    private readonly _converter: firestore.FirestoreDataConverter<
      AppModelType,
      DbModelType
    >,
    private readonly _startAt: api.IValue[] | undefined,
    private readonly _endBefore: api.IValue[] | undefined,
  ) {
    this._serializer = new Serializer(_firestore);
  }

  /**
   * The cursor that defines the first result for this partition or `undefined`
   * if this is the first partition. The cursor value must be
   * destructured when passed to `startAt()` (for example with
   * `query.startAt(...queryPartition.startAt)`).
   *
   * @example
   * ```
   * const query = firestore.collectionGroup('collectionId');
   * for await (const partition of query.getPartitions(42)) {
   *   let partitionedQuery = query.orderBy(FieldPath.documentId());
   *   if (partition.startAt) {
   *     partitionedQuery = partitionedQuery.startAt(...partition.startAt);
   *   }
   *   if (partition.endBefore) {
   *     partitionedQuery = partitionedQuery.endBefore(...partition.endBefore);
   *   }
   *   const querySnapshot = await partitionedQuery.get();
   *   console.log(`Partition contained ${querySnapshot.length} documents`);
   * }
   *
   * ```
   * @type {Array<*>}
   * @returns {Array<*>} A cursor value that can be used with {@link
   * Query#startAt} or `undefined` if this is the first partition.
   */
  get startAt(): unknown[] | undefined {
    if (this._startAt && !this._memoizedStartAt) {
      this._memoizedStartAt = this._startAt.map(v =>
        this._serializer.decodeValue(v),
      );
    }

    return this._memoizedStartAt;
  }

  /**
   * The cursor that defines the first result after this partition or
   * `undefined` if this is the last partition.  The cursor value must be
   * destructured when passed to `endBefore()` (for example with
   * `query.endBefore(...queryPartition.endBefore)`).
   *
   * @example
   * ```
   * const query = firestore.collectionGroup('collectionId');
   * for await (const partition of query.getPartitions(42)) {
   *   let partitionedQuery = query.orderBy(FieldPath.documentId());
   *   if (partition.startAt) {
   *     partitionedQuery = partitionedQuery.startAt(...partition.startAt);
   *   }
   *   if (partition.endBefore) {
   *     partitionedQuery = partitionedQuery.endBefore(...partition.endBefore);
   *   }
   *   const querySnapshot = await partitionedQuery.get();
   *   console.log(`Partition contained ${querySnapshot.length} documents`);
   * }
   *
   * ```
   * @type {Array<*>}
   * @returns {Array<*>} A cursor value that can be used with {@link
   * Query#endBefore} or `undefined` if this is the last partition.
   */
  get endBefore(): unknown[] | undefined {
    if (this._endBefore && !this._memoizedEndBefore) {
      this._memoizedEndBefore = this._endBefore.map(v =>
        this._serializer.decodeValue(v),
      );
    }

    return this._memoizedEndBefore;
  }

  /**
   * Returns a query that only encapsulates the documents for this partition.
   *
   * @example
   * ```
   * const query = firestore.collectionGroup('collectionId');
   * for await (const partition of query.getPartitions(42)) {
   *   const partitionedQuery = partition.toQuery();
   *   const querySnapshot = await partitionedQuery.get();
   *   console.log(`Partition contained ${querySnapshot.length} documents`);
   * }
   *
   * ```
   * @returns {Query<T>} A query partitioned by a {@link Query#startAt} and
   * {@link Query#endBefore} cursor.
   */
  toQuery(): Query<AppModelType, DbModelType> {
    // Since the api.Value to JavaScript type conversion can be lossy (unless
    // `useBigInt` is used), we pass the original protobuf representation to the
    // created query.
    let queryOptions = QueryOptions.forCollectionGroupQuery(
      this._collectionId,
      this._converter,
    );
    queryOptions = queryOptions.with({
      fieldOrders: [new FieldOrder(FieldPath.documentId())],
    });
    if (this._startAt !== undefined) {
      queryOptions = queryOptions.with({
        startAt: {before: true, values: this._startAt},
      });
    }
    if (this._endBefore !== undefined) {
      queryOptions = queryOptions.with({
        endAt: {before: true, values: this._endBefore},
      });
    }
    return new Query(this._firestore, queryOptions);
  }
}

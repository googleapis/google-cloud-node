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
import * as deepEqual from 'fast-deep-equal';

import * as firestore from '@google-cloud/firestore';
import {ResourcePath} from '../path';
import {defaultConverter} from '../types';
import {FilterInternal} from './filter-internal';
import {FieldOrder} from './field-order';
import {LimitType, QueryCursor} from './types';
import {coalesce} from './helpers';

/**
 * Internal class representing custom Query options.
 *
 * These options are immutable. Modified options can be created using `with()`.
 * @private
 * @internal
 */
export class QueryOptions<
  AppModelType,
  DbModelType extends firestore.DocumentData,
> {
  constructor(
    readonly parentPath: ResourcePath,
    readonly collectionId: string,
    readonly converter: firestore.FirestoreDataConverter<
      AppModelType,
      DbModelType
    >,
    readonly allDescendants: boolean,
    readonly filters: FilterInternal[],
    readonly fieldOrders: FieldOrder[],
    readonly startAt?: QueryCursor,
    readonly endAt?: QueryCursor,
    readonly limit?: number,
    readonly limitType?: LimitType,
    readonly offset?: number,
    readonly projection?: api.StructuredQuery.IProjection,
    // Whether to select all documents under `parentPath`. By default, only
    // collections that match `collectionId` are selected.
    readonly kindless = false,
    // Whether to require consistent documents when restarting the query. By
    // default, restarting the query uses the readTime offset of the original
    // query to provide consistent results.
    readonly requireConsistency = true,
  ) {}

  /**
   * Returns query options for a collection group query.
   * @private
   * @internal
   */
  static forCollectionGroupQuery<
    AppModelType = firestore.DocumentData,
    DbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    collectionId: string,
    converter = defaultConverter<AppModelType, DbModelType>(),
  ): QueryOptions<AppModelType, DbModelType> {
    return new QueryOptions<AppModelType, DbModelType>(
      /*parentPath=*/ ResourcePath.EMPTY,
      collectionId,
      converter,
      /*allDescendants=*/ true,
      /*fieldFilters=*/ [],
      /*fieldOrders=*/ [],
    );
  }

  /**
   * Returns query options for a single-collection query.
   * @private
   * @internal
   */
  static forCollectionQuery<
    AppModelType = firestore.DocumentData,
    DbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    collectionRef: ResourcePath,
    converter = defaultConverter<AppModelType, DbModelType>(),
  ): QueryOptions<AppModelType, DbModelType> {
    return new QueryOptions<AppModelType, DbModelType>(
      collectionRef.parent()!,
      collectionRef.id!,
      converter,
      /*allDescendants=*/ false,
      /*fieldFilters=*/ [],
      /*fieldOrders=*/ [],
    );
  }

  /**
   * Returns query options for a query that fetches all descendants under the
   * specified reference.
   *
   * @private
   * @internal
   */
  static forKindlessAllDescendants(
    parent: ResourcePath,
    id: string,
    requireConsistency = true,
  ): QueryOptions<firestore.DocumentData, firestore.DocumentData> {
    let options = new QueryOptions<
      firestore.DocumentData,
      firestore.DocumentData
    >(
      parent,
      id,
      defaultConverter(),
      /*allDescendants=*/ true,
      /*fieldFilters=*/ [],
      /*fieldOrders=*/ [],
    );

    options = options.with({
      kindless: true,
      requireConsistency,
    });
    return options;
  }

  /**
   * Returns the union of the current and the provided options.
   * @private
   * @internal
   */
  with(
    settings: Partial<
      Omit<QueryOptions<AppModelType, DbModelType>, 'converter'>
    >,
  ): QueryOptions<AppModelType, DbModelType> {
    return new QueryOptions(
      coalesce(settings.parentPath, this.parentPath)!,
      coalesce(settings.collectionId, this.collectionId)!,
      this.converter,
      coalesce(settings.allDescendants, this.allDescendants)!,
      coalesce(settings.filters, this.filters)!,
      coalesce(settings.fieldOrders, this.fieldOrders)!,
      coalesce(settings.startAt, this.startAt),
      coalesce(settings.endAt, this.endAt),
      coalesce(settings.limit, this.limit),
      coalesce(settings.limitType, this.limitType),
      coalesce(settings.offset, this.offset),
      coalesce(settings.projection, this.projection),
      coalesce(settings.kindless, this.kindless),
      coalesce(settings.requireConsistency, this.requireConsistency),
    );
  }

  withConverter<
    NewAppModelType,
    NewDbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    converter: firestore.FirestoreDataConverter<
      NewAppModelType,
      NewDbModelType
    >,
  ): QueryOptions<NewAppModelType, NewDbModelType> {
    return new QueryOptions<NewAppModelType, NewDbModelType>(
      this.parentPath,
      this.collectionId,
      converter,
      this.allDescendants,
      this.filters,
      this.fieldOrders,
      this.startAt,
      this.endAt,
      this.limit,
      this.limitType,
      this.offset,
      this.projection,
    );
  }

  hasFieldOrders(): boolean {
    return this.fieldOrders.length > 0;
  }

  isEqual(other: QueryOptions<AppModelType, DbModelType>): boolean {
    if (this === other) {
      return true;
    }

    return (
      other instanceof QueryOptions &&
      this.parentPath.isEqual(other.parentPath) &&
      this.filtersEqual(other.filters) &&
      this.collectionId === other.collectionId &&
      this.converter === other.converter &&
      this.allDescendants === other.allDescendants &&
      this.limit === other.limit &&
      this.offset === other.offset &&
      deepEqual(this.fieldOrders, other.fieldOrders) &&
      deepEqual(this.startAt, other.startAt) &&
      deepEqual(this.endAt, other.endAt) &&
      deepEqual(this.projection, other.projection) &&
      this.kindless === other.kindless &&
      this.requireConsistency === other.requireConsistency
    );
  }

  private filtersEqual(other: FilterInternal[]): boolean {
    if (this.filters.length !== other.length) {
      return false;
    }

    for (let i = 0; i < other.length; i++) {
      if (!this.filters[i].isEqual(other[i])) {
        return false;
      }
    }
    return true;
  }
}

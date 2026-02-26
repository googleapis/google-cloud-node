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
import {GoogleError} from 'google-gax';
import {Transform} from 'stream';
import {and, field, Ordering} from '../pipelines';

import {CompositeFilter, UnaryFilter} from '../filter';
import {
  AggregateField,
  DocumentChange,
  DocumentSnapshot,
  FieldPath,
  Filter,
  Firestore,
  QueryDocumentSnapshot,
  Timestamp,
} from '../index';
import {compare} from '../order';
import {validateFieldPath} from '../path';
import {Pipeline} from '../pipelines';
import {
  reverseOrderings,
  toPipelineBooleanExpr,
  whereConditionsFromCursor,
} from '../pipelines/pipeline-util';
import {ExplainResults} from '../query-profile';
import {Serializer} from '../serializer';
import {defaultConverter} from '../types';
import {
  invalidArgumentMessage,
  validateFunction,
  validateInteger,
  validateMinNumberOfArguments,
} from '../validate';
import {QueryWatch} from '../watch';
import {AggregateQuery} from './aggregate-query';
import {CompositeFilterInternal} from './composite-filter-internal';
import {comparisonOperators, directionOperators} from './constants';
import {DocumentReference} from './document-reference';
import {FieldFilterInternal} from './field-filter-internal';
import {FieldOrder} from './field-order';
import {FilterInternal} from './filter-internal';
import {
  validateQueryOperator,
  validateQueryOrder,
  validateQueryValue,
} from './helpers';
import {QueryOptions} from './query-options';
import {QuerySnapshot} from './query-snapshot';

import {QueryUtil} from './query-util';
import {
  LimitType,
  QueryCursor,
  QueryResponse,
  QuerySnapshotResponse,
  QueryStreamElement,
} from './types';
import {VectorQuery} from './vector-query';
import {VectorQueryOptions} from './vector-query-options';
import {SPAN_NAME_QUERY_GET} from '../telemetry/trace-util';

/**
 * A Query refers to a query which you can read or stream from. You can also
 * construct refined Query objects by adding filters and ordering.
 *
 * @class Query
 */
export class Query<
  AppModelType = firestore.DocumentData,
  DbModelType extends firestore.DocumentData = firestore.DocumentData,
> implements firestore.Query<AppModelType, DbModelType>
{
  /**
   * @internal
   * @private
   **/
  readonly _serializer: Serializer;
  /**
   * @internal
   * @private
   **/
  protected readonly _allowUndefined: boolean;
  /**
   * @internal
   * @private
   **/
  readonly _queryUtil: QueryUtil<
    AppModelType,
    DbModelType,
    Query<AppModelType, DbModelType>
  >;

  /**
   * @internal
   * @private
   *
   * @param _firestore The Firestore Database client.
   * @param _queryOptions Options that define the query.
   */
  constructor(
    /**
     * @internal
     * @private
     **/
    readonly _firestore: Firestore,
    /**
     * @internal
     * @private
     **/
    readonly _queryOptions: QueryOptions<AppModelType, DbModelType>,
  ) {
    this._serializer = new Serializer(_firestore);
    this._allowUndefined =
      !!this._firestore._settings.ignoreUndefinedProperties;
    this._queryUtil = new QueryUtil<
      AppModelType,
      DbModelType,
      Query<AppModelType, DbModelType>
    >(_firestore, _queryOptions, this._serializer);
  }

  /**
   * Extracts field values from the DocumentSnapshot based on the provided
   * field order.
   *
   * @private
   * @internal
   * @param documentSnapshot The document to extract the fields from.
   * @param fieldOrders The field order that defines what fields we should
   * extract.
   * @returns {Array.<*>} The field values to use.
   */
  static _extractFieldValues(
    documentSnapshot: DocumentSnapshot,
    fieldOrders: FieldOrder[],
  ): unknown[] {
    const fieldValues: unknown[] = [];

    for (const fieldOrder of fieldOrders) {
      if (FieldPath.documentId().isEqual(fieldOrder.field)) {
        fieldValues.push(documentSnapshot.ref);
      } else {
        const fieldValue = documentSnapshot.get(fieldOrder.field);
        if (fieldValue === undefined) {
          throw new Error(
            `Field "${fieldOrder.field}" is missing in the provided DocumentSnapshot. ` +
              'Please provide a document that contains values for all specified ' +
              'orderBy() and where() constraints.',
          );
        } else {
          fieldValues.push(fieldValue);
        }
      }
    }
    return fieldValues;
  }

  /**
   * The [Firestore]{@link Firestore} instance for the Firestore
   * database (useful for performing transactions, etc.).
   *
   * @type {Firestore}
   * @name Query#firestore
   * @readonly
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * collectionRef.add({foo: 'bar'}).then(documentReference => {
   *   let firestore = documentReference.firestore;
   *   console.log(`Root location for document is ${firestore.formattedName}`);
   * });
   * ```
   */
  get firestore(): Firestore {
    return this._firestore;
  }

  /**
   * Creates and returns a new [Query]{@link Query} with the additional filter
   * that documents must contain the specified field and that its value should
   * satisfy the relation constraint provided.
   *
   * This function returns a new (immutable) instance of the Query (rather than
   * modify the existing instance) to impose the filter.
   *
   * @param {string|FieldPath} fieldPath The name of a property value to compare.
   * @param {string} opStr A comparison operation in the form of a string.
   * Acceptable operator strings are "<", "<=", "==", "!=", ">=", ">", "array-contains",
   * "in", "not-in", and "array-contains-any".
   * @param {*} value The value to which to compare the field for inclusion in
   * a query.
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * collectionRef.where('foo', '==', 'bar').get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  where(
    fieldPath: string | FieldPath,
    opStr: firestore.WhereFilterOp,
    value: unknown,
  ): Query<AppModelType, DbModelType>;

  /**
   * Creates and returns a new [Query]{@link Query} with the additional filter
   * that documents should satisfy the relation constraint(s) provided.
   *
   * This function returns a new (immutable) instance of the Query (rather than
   * modify the existing instance) to impose the filter.
   *
   * @param {Filter} filter A unary or composite filter to apply to the Query.
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   *
   * collectionRef.where(Filter.and(Filter.where('foo', '==', 'bar'), Filter.where('foo', '!=', 'baz'))).get()
   *   .then(querySnapshot => {
   *     querySnapshot.forEach(documentSnapshot => {
   *       console.log(`Found document at ${documentSnapshot.ref.path}`);
   *     });
   * });
   * ```
   */
  where(filter: Filter): Query<AppModelType, DbModelType>;

  where(
    fieldPathOrFilter: string | firestore.FieldPath | Filter,
    opStr?: firestore.WhereFilterOp,
    value?: unknown,
  ): Query<AppModelType, DbModelType> {
    let filter: Filter;

    if (fieldPathOrFilter instanceof Filter) {
      filter = fieldPathOrFilter;
    } else {
      filter = Filter.where(fieldPathOrFilter, opStr!, value);
    }

    if (this._queryOptions.startAt || this._queryOptions.endAt) {
      throw new Error(
        'Cannot specify a where() filter after calling startAt(), ' +
          'startAfter(), endBefore() or endAt().',
      );
    }

    const parsedFilter = this._parseFilter(filter);

    if (parsedFilter.getFilters().length === 0) {
      // Return the existing query if not adding any more filters (e.g. an empty composite filter).
      return this;
    }

    const options = this._queryOptions.with({
      filters: this._queryOptions.filters.concat(parsedFilter),
    });
    return new Query(this._firestore, options);
  }

  /**
   * @internal
   * @private
   */
  _parseFilter(filter: Filter): FilterInternal {
    if (filter instanceof UnaryFilter) {
      return this._parseFieldFilter(filter);
    }
    return this._parseCompositeFilter(filter as CompositeFilter);
  }

  /**
   * @internal
   * @private
   */
  _parseFieldFilter(fieldFilterData: UnaryFilter): FieldFilterInternal {
    let value = fieldFilterData._getValue();
    let operator = fieldFilterData._getOperator();
    const fieldPath = fieldFilterData._getField();

    validateFieldPath('fieldPath', fieldPath);

    operator = validateQueryOperator('opStr', operator, value);
    validateQueryValue('value', value, this._allowUndefined);

    const path = FieldPath.fromArgument(fieldPath);

    if (FieldPath.documentId().isEqual(path)) {
      if (operator === 'array-contains' || operator === 'array-contains-any') {
        throw new Error(
          `Invalid Query. You can't perform '${operator}' ` +
            'queries on FieldPath.documentId().',
        );
      } else if (operator === 'in' || operator === 'not-in') {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error(
            `Invalid Query. A non-empty array is required for '${operator}' filters.`,
          );
        }
        value = value.map(el => this.validateReference(el));
      } else {
        value = this.validateReference(value);
      }
    }

    return new FieldFilterInternal(
      this._serializer,
      path,
      comparisonOperators[operator],
      value,
    );
  }

  /**
   * @internal
   * @private
   */
  _parseCompositeFilter(compositeFilterData: CompositeFilter): FilterInternal {
    const parsedFilters = compositeFilterData
      ._getFilters()
      .map(filter => this._parseFilter(filter))
      .filter(parsedFilter => parsedFilter.getFilters().length > 0);

    // For composite filters containing 1 filter, return the only filter.
    // For example: AND(FieldFilter1) == FieldFilter1
    if (parsedFilters.length === 1) {
      return parsedFilters[0];
    }
    return new CompositeFilterInternal(
      parsedFilters,
      compositeFilterData._getOperator() === 'AND' ? 'AND' : 'OR',
    );
  }

  /**
   * Creates and returns a new [Query]{@link Query} instance that applies a
   * field mask to the result and returns only the specified subset of fields.
   * You can specify a list of field paths to return, or use an empty list to
   * only return the references of matching documents.
   *
   * Queries that contain field masks cannot be listened to via `onSnapshot()`
   * listeners.
   *
   * This function returns a new (immutable) instance of the Query (rather than
   * modify the existing instance) to impose the field mask.
   *
   * @param {...(string|FieldPath)} fieldPaths The field paths to return.
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let collectionRef = firestore.collection('col');
   * let documentRef = collectionRef.doc('doc');
   *
   * return documentRef.set({x:10, y:5}).then(() => {
   *   return collectionRef.where('x', '>', 5).select('y').get();
   * }).then((res) => {
   *   console.log(`y is ${res.docs[0].get('y')}.`);
   * });
   * ```
   */
  select(...fieldPaths: Array<string | FieldPath>): Query {
    const fields: api.StructuredQuery.IFieldReference[] = [];

    if (fieldPaths.length === 0) {
      fields.push({fieldPath: FieldPath.documentId().formattedName});
    } else {
      for (let i = 0; i < fieldPaths.length; ++i) {
        validateFieldPath(i, fieldPaths[i]);
        fields.push({
          fieldPath: FieldPath.fromArgument(fieldPaths[i]).formattedName,
        });
      }
    }

    // By specifying a field mask, the query result no longer conforms to type
    // `T`. We there return `Query<DocumentData>`;
    const options = this._queryOptions.with({
      projection: {fields},
    }) as QueryOptions<firestore.DocumentData, firestore.DocumentData>;
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that's additionally sorted
   * by the specified field, optionally in descending order instead of
   * ascending.
   *
   * This function returns a new (immutable) instance of the Query (rather than
   * modify the existing instance) to impose the field mask.
   *
   * @param {string|FieldPath} fieldPath The field to sort by.
   * @param {string=} directionStr Optional direction to sort by ('asc' or
   * 'desc'). If not specified, order will be ascending.
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '>', 42);
   *
   * query.orderBy('foo', 'desc').get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  orderBy(
    fieldPath: string | firestore.FieldPath,
    directionStr?: firestore.OrderByDirection,
  ): Query<AppModelType, DbModelType> {
    validateFieldPath('fieldPath', fieldPath);
    directionStr = validateQueryOrder('directionStr', directionStr);

    if (this._queryOptions.startAt || this._queryOptions.endAt) {
      throw new Error(
        'Cannot specify an orderBy() constraint after calling ' +
          'startAt(), startAfter(), endBefore() or endAt().',
      );
    }

    const newOrder = new FieldOrder(
      FieldPath.fromArgument(fieldPath),
      directionOperators[directionStr || 'asc'],
    );

    const options = this._queryOptions.with({
      fieldOrders: this._queryOptions.fieldOrders.concat(newOrder),
    });
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that only returns the
   * first matching documents.
   *
   * This function returns a new (immutable) instance of the Query (rather than
   * modify the existing instance) to impose the limit.
   *
   * @param {number} limit The maximum number of items to return.
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '>', 42);
   *
   * query.limit(1).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  limit(limit: number): Query<AppModelType, DbModelType> {
    validateInteger('limit', limit);

    const options = this._queryOptions.with({
      limit,
      limitType: LimitType.First,
    });
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that only returns the
   * last matching documents.
   *
   * You must specify at least one orderBy clause for limitToLast queries,
   * otherwise an exception will be thrown during execution.
   *
   * Results for limitToLast queries cannot be streamed via the `stream()` API.
   *
   * @param limit The maximum number of items to return.
   * @returns The created Query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '>', 42);
   *
   * query.limitToLast(1).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Last matching document is ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  limitToLast(limit: number): Query<AppModelType, DbModelType> {
    validateInteger('limitToLast', limit);

    const options = this._queryOptions.with({limit, limitType: LimitType.Last});
    return new Query(this._firestore, options);
  }

  /**
   * Specifies the offset of the returned results.
   *
   * This function returns a new (immutable) instance of the
   * [Query]{@link Query} (rather than modify the existing instance)
   * to impose the offset.
   *
   * @param {number} offset The offset to apply to the Query results
   * @returns {Query} The created Query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '>', 42);
   *
   * query.limit(10).offset(20).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  offset(offset: number): Query<AppModelType, DbModelType> {
    validateInteger('offset', offset);

    const options = this._queryOptions.with({offset});
    return new Query(this._firestore, options);
  }

  /**
   * Returns a query that counts the documents in the result set of this
   * query.
   *
   * The returned query, when executed, counts the documents in the result set
   * of this query without actually downloading the documents.
   *
   * Using the returned query to count the documents is efficient because only
   * the final count, not the documents' data, is downloaded. The returned
   * query can count the documents in cases where the result set is
   * prohibitively large to download entirely (thousands of documents).
   *
   * @returns a query that counts the documents in the result set of this
   * query. The count can be retrieved from `snapshot.data().count`, where
   * `snapshot` is the `AggregateQuerySnapshot` resulting from running the
   * returned query.
   */
  count(): AggregateQuery<
    {count: firestore.AggregateField<number>},
    AppModelType,
    DbModelType
  > {
    return this.aggregate({
      count: AggregateField.count(),
    });
  }

  /**
   * Returns a query that can perform the given aggregations.
   *
   * The returned query, when executed, calculates the specified aggregations
   * over the documents in the result set of this query without actually
   * downloading the documents.
   *
   * Using the returned query to perform aggregations is efficient because only
   * the final aggregation values, not the documents' data, is downloaded. The
   * returned query can perform aggregations of the documents count the
   * documents in cases where the result set is prohibitively large to download
   * entirely (thousands of documents).
   *
   * @param aggregateSpec An `AggregateSpec` object that specifies the aggregates
   * to perform over the result set. The AggregateSpec specifies aliases for each
   * aggregate, which can be used to retrieve the aggregate result.
   * @example
   * ```typescript
   * const aggregateQuery = col.aggregate(query, {
   *   countOfDocs: count(),
   *   totalHours: sum('hours'),
   *   averageScore: average('score')
   * });
   *
   * const aggregateSnapshot = await aggregateQuery.get();
   * const countOfDocs: number = aggregateSnapshot.data().countOfDocs;
   * const totalHours: number = aggregateSnapshot.data().totalHours;
   * const averageScore: number | null = aggregateSnapshot.data().averageScore;
   * ```
   */
  aggregate<T extends firestore.AggregateSpec>(
    aggregateSpec: T,
  ): AggregateQuery<T, AppModelType, DbModelType> {
    return new AggregateQuery<T, AppModelType, DbModelType>(
      this,
      aggregateSpec,
    );
  }

  /**
   * Returns a query that can perform vector distance (similarity) search with given parameters.
   *
   * The returned query, when executed, performs a distance (similarity) search on the specified
   * `vectorField` against the given `queryVector` and returns the top documents that are closest
   * to the `queryVector`.
   *
   * Only documents whose `vectorField` field is a {@link VectorValue} of the same dimension as `queryVector`
   * participate in the query, all other documents are ignored.
   *
   * @example
   * ```
   * // Returns the closest 10 documents whose Euclidean distance from their 'embedding' fields are closed to [41, 42].
   * const vectorQuery = col.findNearest('embedding', [41, 42], {limit: 10, distanceMeasure: 'EUCLIDEAN'});
   *
   * const querySnapshot = await vectorQuery.get();
   * querySnapshot.forEach(...);
   * ```
   *
   * @param vectorField - A string or {@link FieldPath} specifying the vector field to search on.
   * @param queryVector - The {@link VectorValue} used to measure the distance from `vectorField` values in the documents.
   * @param options - Options control the vector query. `limit` specifies the upper bound of documents to return, must
   * be a positive integer with a maximum value of 1000. `distanceMeasure` specifies what type of distance is calculated
   * when performing the query.
   *
   * @deprecated Use the new {@link Query.(findNearest:VectorQueryOptions)} implementation
   * accepting a single `options` param.
   */
  findNearest(
    vectorField: string | firestore.FieldPath,
    queryVector: firestore.VectorValue | Array<number>,
    options: {
      limit: number;
      distanceMeasure: 'EUCLIDEAN' | 'COSINE' | 'DOT_PRODUCT';
    },
  ): VectorQuery<AppModelType, DbModelType>;

  /**
   * Returns a query that can perform vector distance (similarity) search with given parameters.
   *
   * The returned query, when executed, performs a distance (similarity) search on the specified
   * `vectorField` against the given `queryVector` and returns the top documents that are closest
   * to the `queryVector`.
   *
   * Only documents whose `vectorField` field is a {@link VectorValue} of the same dimension as `queryVector`
   * participate in the query, all other documents are ignored.
   *
   * @example
   * ```
   * // Returns the closest 10 documents whose Euclidean distance from their 'embedding' fields are closed to [41, 42].
   * const vectorQuery = col.findNearest({
   *     vectorField: 'embedding',
   *     queryVector: [41, 42],
   *     limit: 10,
   *     distanceMeasure: 'EUCLIDEAN',
   *     distanceResultField: 'distance',
   *     distanceThreshold: 0.125
   * });
   *
   * const querySnapshot = await aggregateQuery.get();
   * querySnapshot.forEach(...);
   * ```
   * @param options - An argument specifying the behavior of the {@link VectorQuery} returned by this function.
   * See {@link VectorQueryOptions}.
   */
  findNearest(
    options: VectorQueryOptions,
  ): VectorQuery<AppModelType, DbModelType>;

  findNearest(
    vectorFieldOrOptions: string | firestore.FieldPath | VectorQueryOptions,
    queryVector?: firestore.VectorValue | Array<number>,
    options?: {
      limit?: number;
      distanceMeasure?: 'EUCLIDEAN' | 'COSINE' | 'DOT_PRODUCT';
    },
  ): VectorQuery<AppModelType, DbModelType> {
    if (
      typeof vectorFieldOrOptions === 'string' ||
      vectorFieldOrOptions instanceof FieldPath
    ) {
      const vqOptions: VectorQueryOptions = {
        distanceMeasure: options!.distanceMeasure!,
        limit: options!.limit!,
        queryVector: queryVector!,
        vectorField: vectorFieldOrOptions,
      };
      return this._findNearest(vqOptions);
    } else {
      return this._findNearest(vectorFieldOrOptions as VectorQueryOptions);
    }
  }

  _findNearest(
    options: VectorQueryOptions,
  ): VectorQuery<AppModelType, DbModelType> {
    validateFieldPath('vectorField', options.vectorField);

    if (options.limit <= 0) {
      throw invalidArgumentMessage('limit', 'positive limit number');
    }

    if (
      (Array.isArray(options.queryVector)
        ? options.queryVector.length
        : options.queryVector.toArray().length) === 0
    ) {
      throw invalidArgumentMessage(
        'queryVector',
        'vector size must be larger than 0',
      );
    }

    return new VectorQuery<AppModelType, DbModelType>(this, options);
  }

  /**
   * Returns a value indicating if this query is a collection group query
   */
  _isCollectionGroupQuery(): boolean {
    return this._queryOptions.allDescendants;
  }

  /**
   * @private
   * @internal
   */
  _pipeline(): Pipeline {
    let pipeline: Pipeline;
    const db = this.firestore;
    if (this._isCollectionGroupQuery()) {
      pipeline = db
        .pipeline()
        .collectionGroup(this._queryOptions.collectionId!);
    } else {
      pipeline = db
        .pipeline()
        .collection(
          this._queryOptions.parentPath.append(this._queryOptions.collectionId)
            .relativeName,
        );
    }

    // filters
    for (const filter of this._queryOptions.filters) {
      pipeline = pipeline.where(
        toPipelineBooleanExpr(filter, this._serializer),
      );
    }

    // projections
    const projections = this._queryOptions.projection?.fields || [];
    if (projections.length > 0) {
      const projectionFields = projections.map(p => field(p.fieldPath!));
      pipeline = pipeline.select(
        projectionFields[0],
        ...projectionFields.slice(1),
      );
    }

    // orders
    // Ignore inequality fields when creating implicit order-bys
    // for generating existsConditions, because existence filters
    // will have already been added in the call to `toPipelineBooleanExpr`
    const existsConditions = this.createImplicitOrderBy(true).map(
      fieldOrder => {
        return field(fieldOrder.field).exists();
      },
    );
    if (existsConditions.length > 1) {
      const [first, second, ...rest] = existsConditions;
      pipeline = pipeline.where(and(first, second, ...rest));
    } else {
      pipeline = pipeline.where(existsConditions[0]);
    }

    const orderings = this.createImplicitOrderBy().map(fieldOrder => {
      let dir: 'ascending' | 'descending' | undefined = undefined;
      switch (fieldOrder.direction) {
        case 'ASCENDING': {
          dir = 'ascending';
          break;
        }
        case 'DESCENDING': {
          dir = 'descending';
          break;
        }
      }
      return new Ordering(field(fieldOrder.field), dir || 'ascending');
    });

    if (orderings.length > 0) {
      if (this._queryOptions.limitType === LimitType.Last) {
        const actualOrderings = reverseOrderings(orderings);
        pipeline = pipeline.sort(
          actualOrderings[0],
          ...actualOrderings.slice(1),
        );
        // cursors
        if (this._queryOptions.startAt !== undefined) {
          pipeline = pipeline.where(
            whereConditionsFromCursor(
              this._queryOptions.startAt,
              orderings,
              'after',
            ),
          );
        }

        if (this._queryOptions.endAt !== undefined) {
          pipeline = pipeline.where(
            whereConditionsFromCursor(
              this._queryOptions.endAt,
              orderings,
              'before',
            ),
          );
        }

        if (this._queryOptions.limit !== undefined) {
          pipeline = pipeline.limit(this._queryOptions.limit!);
        }

        pipeline = pipeline.sort(orderings[0], ...orderings.slice(1));
      } else {
        pipeline = pipeline.sort(orderings[0], ...orderings.slice(1));
        if (this._queryOptions.startAt !== undefined) {
          pipeline = pipeline.where(
            whereConditionsFromCursor(
              this._queryOptions.startAt,
              orderings,
              'after',
            ),
          );
        }
        if (this._queryOptions.endAt !== undefined) {
          pipeline = pipeline.where(
            whereConditionsFromCursor(
              this._queryOptions.endAt,
              orderings,
              'before',
            ),
          );
        }

        if (this._queryOptions.limit !== undefined) {
          pipeline = pipeline.limit(this._queryOptions.limit);
        }
      }
    }

    // offset
    if (this._queryOptions.offset) {
      pipeline = pipeline.offset(this._queryOptions.offset);
    }

    return pipeline;
  }

  /**
   * Returns true if this `Query` is equal to the provided value.
   *
   * @param {*} other The value to compare against.
   * @returns {boolean} true if this `Query` is equal to the provided value.
   */
  isEqual(other: firestore.Query<AppModelType, DbModelType>): boolean {
    if (this === other) {
      return true;
    }

    return (
      other instanceof Query && this._queryOptions.isEqual(other._queryOptions)
    );
  }

  /**
   * Returns the sorted array of inequality filter fields used in this query.
   *
   * @returns An array of inequality filter fields sorted lexicographically by FieldPath.
   */
  private getInequalityFilterFields(): FieldPath[] {
    const inequalityFields: FieldPath[] = [];

    for (const filter of this._queryOptions.filters) {
      for (const subFilter of filter.getFlattenedFilters()) {
        if (subFilter.isInequalityFilter()) {
          inequalityFields.push(subFilter.field);
        }
      }
    }

    return inequalityFields.sort((a, b) => a.compareTo(b));
  }

  /**
   * Computes the backend ordering semantics for DocumentSnapshot cursors.
   *
   * @private
   * @internal
   * @param cursorValuesOrDocumentSnapshot The snapshot of the document or the
   * set of field values to use as the boundary.
   * @returns The implicit ordering semantics.
   */
  private createImplicitOrderByForCursor(
    cursorValuesOrDocumentSnapshot: Array<
      DocumentSnapshot<AppModelType, DbModelType> | unknown
    >,
  ): FieldOrder[] {
    // Add an implicit orderBy if the only cursor value is a DocumentSnapshot.
    if (
      cursorValuesOrDocumentSnapshot.length !== 1 ||
      !(cursorValuesOrDocumentSnapshot[0] instanceof DocumentSnapshot)
    ) {
      return this._queryOptions.fieldOrders;
    }

    return this.createImplicitOrderBy();
  }

  private createImplicitOrderBy(ignoreInequalityFields = false): FieldOrder[] {
    const fieldOrders = this._queryOptions.fieldOrders.slice();
    const fieldsNormalized = new Set([
      ...fieldOrders.map(item => item.field.toString()),
    ]);

    /** The order of the implicit ordering always matches the last explicit order by. */
    const lastDirection =
      fieldOrders.length === 0
        ? directionOperators.ASC
        : fieldOrders[fieldOrders.length - 1].direction;

    if (!ignoreInequalityFields) {
      /**
       * Any inequality fields not explicitly ordered should be implicitly ordered in a
       * lexicographical order. When there are multiple inequality filters on the same field, the
       * field should be added only once.
       * Note: getInequalityFilterFields function sorts the key field before
       * other fields. However, we want the key field to be sorted last.
       */
      const inequalityFields = this.getInequalityFilterFields();
      for (const field of inequalityFields) {
        if (
          !fieldsNormalized.has(field.toString()) &&
          !field.isEqual(FieldPath.documentId())
        ) {
          fieldOrders.push(new FieldOrder(field, lastDirection));
          fieldsNormalized.add(field.toString());
        }
      }
    }

    // Add the document key field to the last if it is not explicitly ordered.
    if (!fieldsNormalized.has(FieldPath.documentId().toString())) {
      fieldOrders.push(new FieldOrder(FieldPath.documentId(), lastDirection));
    }

    return fieldOrders;
  }

  /**
   * Builds a Firestore 'Position' proto message.
   *
   * @private
   * @internal
   * @param {Array.<FieldOrder>} fieldOrders The field orders to use for this
   * cursor.
   * @param {Array.<DocumentSnapshot|*>} cursorValuesOrDocumentSnapshot The
   * snapshot of the document or the set of field values to use as the boundary.
   * @param before Whether the query boundary lies just before or after the
   * provided data.
   * @returns {Object} The proto message.
   */
  private createCursor(
    fieldOrders: FieldOrder[],
    cursorValuesOrDocumentSnapshot: Array<DocumentSnapshot | unknown>,
    before: boolean,
  ): QueryCursor {
    let fieldValues;

    if (
      cursorValuesOrDocumentSnapshot.length === 1 &&
      cursorValuesOrDocumentSnapshot[0] instanceof DocumentSnapshot
    ) {
      fieldValues = Query._extractFieldValues(
        cursorValuesOrDocumentSnapshot[0] as DocumentSnapshot,
        fieldOrders,
      );
    } else {
      fieldValues = cursorValuesOrDocumentSnapshot;
    }

    if (fieldValues.length > fieldOrders.length) {
      throw new Error(
        'Too many cursor values specified. The specified ' +
          'values must match the orderBy() constraints of the query.',
      );
    }

    const options: QueryCursor = {values: [], before};

    for (let i = 0; i < fieldValues.length; ++i) {
      let fieldValue = fieldValues[i];

      if (FieldPath.documentId().isEqual(fieldOrders[i].field)) {
        fieldValue = this.validateReference(fieldValue);
      }

      validateQueryValue(i, fieldValue, this._allowUndefined);
      options.values!.push(this._serializer.encodeValue(fieldValue)!);
    }

    return options;
  }

  /**
   * Validates that a value used with FieldValue.documentId() is either a
   * string or a DocumentReference that is part of the query`s result set.
   * Throws a validation error or returns a DocumentReference that can
   * directly be used in the Query.
   *
   * @param val The value to validate.
   * @throws If the value cannot be used for this query.
   * @returns If valid, returns a DocumentReference that can be used with the
   * query.
   * @private
   * @internal
   */
  private validateReference(
    val: unknown,
  ): DocumentReference<AppModelType, DbModelType> {
    const basePath = this._queryOptions.allDescendants
      ? this._queryOptions.parentPath
      : this._queryOptions.parentPath.append(this._queryOptions.collectionId);
    let reference: DocumentReference<AppModelType, DbModelType>;

    if (typeof val === 'string') {
      const path = basePath.append(val);

      if (this._queryOptions.allDescendants) {
        if (!path.isDocument) {
          throw new Error(
            'When querying a collection group and ordering by ' +
              'FieldPath.documentId(), the corresponding value must result in ' +
              `a valid document path, but '${val}' is not because it ` +
              'contains an odd number of segments.',
          );
        }
      } else if (val.indexOf('/') !== -1) {
        throw new Error(
          'When querying a collection and ordering by FieldPath.documentId(), ' +
            `the corresponding value must be a plain document ID, but '${val}' ` +
            'contains a slash.',
        );
      }

      reference = new DocumentReference(
        this._firestore,
        basePath.append(val),
        this._queryOptions.converter,
      );
    } else if (val instanceof DocumentReference) {
      reference = val;
      if (!basePath.isPrefixOf(reference._path)) {
        throw new Error(
          `"${reference.path}" is not part of the query result set and ` +
            'cannot be used as a query boundary.',
        );
      }
    } else {
      throw new Error(
        'The corresponding value for FieldPath.documentId() must be a ' +
          `string or a DocumentReference, but was "${val}".`,
      );
    }

    if (
      !this._queryOptions.allDescendants &&
      reference._path.parent()!.compareTo(basePath) !== 0
    ) {
      throw new Error(
        'Only a direct child can be used as a query boundary. ' +
          `Found: "${reference.path}".`,
      );
    }
    return reference;
  }

  /**
   * Creates and returns a new [Query]{@link Query} that starts at the provided
   * set of field values relative to the order of the query. The order of the
   * provided values must match the order of the order by clauses of the query.
   *
   * @param {...*|DocumentSnapshot} fieldValuesOrDocumentSnapshot The snapshot
   * of the document the query results should start at or the field values to
   * start this query at, in order of the query's order by.
   * @returns {Query} A query with the new starting point.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.orderBy('foo').startAt(42).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  startAt(
    ...fieldValuesOrDocumentSnapshot: Array<unknown>
  ): Query<AppModelType, DbModelType> {
    validateMinNumberOfArguments(
      'Query.startAt',
      fieldValuesOrDocumentSnapshot,
      1,
    );

    const fieldOrders = this.createImplicitOrderByForCursor(
      fieldValuesOrDocumentSnapshot,
    );
    const startAt = this.createCursor(
      fieldOrders,
      fieldValuesOrDocumentSnapshot,
      true,
    );

    const options = this._queryOptions.with({fieldOrders, startAt});
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that starts after the
   * provided set of field values relative to the order of the query. The order
   * of the provided values must match the order of the order by clauses of the
   * query.
   *
   * @param {...*|DocumentSnapshot} fieldValuesOrDocumentSnapshot The snapshot
   * of the document the query results should start after or the field values to
   * start this query after, in order of the query's order by.
   * @returns {Query} A query with the new starting point.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.orderBy('foo').startAfter(42).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  startAfter(
    ...fieldValuesOrDocumentSnapshot: Array<unknown>
  ): Query<AppModelType, DbModelType> {
    validateMinNumberOfArguments(
      'Query.startAfter',
      fieldValuesOrDocumentSnapshot,
      1,
    );

    const fieldOrders = this.createImplicitOrderByForCursor(
      fieldValuesOrDocumentSnapshot,
    );
    const startAt = this.createCursor(
      fieldOrders,
      fieldValuesOrDocumentSnapshot,
      false,
    );

    const options = this._queryOptions.with({fieldOrders, startAt});
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that ends before the set of
   * field values relative to the order of the query. The order of the provided
   * values must match the order of the order by clauses of the query.
   *
   * @param {...*|DocumentSnapshot} fieldValuesOrDocumentSnapshot The snapshot
   * of the document the query results should end before or the field values to
   * end this query before, in order of the query's order by.
   * @returns {Query} A query with the new ending point.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.orderBy('foo').endBefore(42).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  endBefore(
    ...fieldValuesOrDocumentSnapshot: Array<unknown>
  ): Query<AppModelType, DbModelType> {
    validateMinNumberOfArguments(
      'Query.endBefore',
      fieldValuesOrDocumentSnapshot,
      1,
    );

    const fieldOrders = this.createImplicitOrderByForCursor(
      fieldValuesOrDocumentSnapshot,
    );
    const endAt = this.createCursor(
      fieldOrders,
      fieldValuesOrDocumentSnapshot,
      true,
    );

    const options = this._queryOptions.with({fieldOrders, endAt});
    return new Query(this._firestore, options);
  }

  /**
   * Creates and returns a new [Query]{@link Query} that ends at the provided
   * set of field values relative to the order of the query. The order of the
   * provided values must match the order of the order by clauses of the query.
   *
   * @param {...*|DocumentSnapshot} fieldValuesOrDocumentSnapshot The snapshot
   * of the document the query results should end at or the field values to end
   * this query at, in order of the query's order by.
   * @returns {Query} A query with the new ending point.
   *
   * @example
   * ```
   * let query = firestore.collection('col');
   *
   * query.orderBy('foo').endAt(42).get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  endAt(
    ...fieldValuesOrDocumentSnapshot: Array<unknown>
  ): Query<AppModelType, DbModelType> {
    validateMinNumberOfArguments(
      'Query.endAt',
      fieldValuesOrDocumentSnapshot,
      1,
    );

    const fieldOrders = this.createImplicitOrderByForCursor(
      fieldValuesOrDocumentSnapshot,
    );
    const endAt = this.createCursor(
      fieldOrders,
      fieldValuesOrDocumentSnapshot,
      false,
    );

    const options = this._queryOptions.with({fieldOrders, endAt});
    return new Query(this._firestore, options);
  }

  /**
   * Executes the query and returns the results as a
   * [QuerySnapshot]{@link QuerySnapshot}.
   *
   * @returns {Promise.<QuerySnapshot>} A Promise that resolves with the results
   * of the Query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * query.get().then(querySnapshot => {
   *   querySnapshot.forEach(documentSnapshot => {
   *     console.log(`Found document at ${documentSnapshot.ref.path}`);
   *   });
   * });
   * ```
   */
  async get(): Promise<QuerySnapshot<AppModelType, DbModelType>> {
    return this._firestore._traceUtil.startActiveSpan(
      SPAN_NAME_QUERY_GET,
      async () => {
        const {result} = await this._get();
        return result;
      },
    );
  }

  /**
   * Plans and optionally executes this query. Returns a Promise that will be
   * resolved with the planner information, statistics from the query execution (if any),
   * and the query results (if any).
   *
   * @returns A Promise that will be resolved with the planner information, statistics
   *  from the query execution (if any), and the query results (if any).
   */
  async explain(
    options?: firestore.ExplainOptions,
  ): Promise<ExplainResults<QuerySnapshot<AppModelType, DbModelType>>> {
    if (options === undefined) {
      options = {};
    }
    const {result, explainMetrics} = await this._getResponse(
      undefined,
      options,
    );
    if (!explainMetrics) {
      throw new Error('No explain results');
    }
    return new ExplainResults(explainMetrics, result || null);
  }

  /**
   * Internal get() method that accepts an optional transaction options, and
   * returns a query snapshot with transaction and explain metadata.
   *
   * @private
   * @internal
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   */
  async _get(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
  ): Promise<QuerySnapshotResponse<QuerySnapshot<AppModelType, DbModelType>>> {
    const result = await this._getResponse(transactionOrReadTime);
    if (!result.result) {
      throw new Error('No QuerySnapshot result');
    }
    return result as QuerySnapshotResponse<
      QuerySnapshot<AppModelType, DbModelType>
    >;
  }

  _getResponse(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): Promise<QueryResponse<QuerySnapshot<AppModelType, DbModelType>>> {
    return this._queryUtil._getResponse(
      this,
      transactionOrReadTime,
      true,
      explainOptions,
    );
  }

  /**
   * Executes the query and streams the results as
   * [QueryDocumentSnapshots]{@link QueryDocumentSnapshot}.
   *
   * @returns {Stream.<QueryDocumentSnapshot>} A stream of
   * QueryDocumentSnapshots.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * let count = 0;
   *
   * query.stream().on('data', (documentSnapshot) => {
   *   console.log(`Found document with name '${documentSnapshot.id}'`);
   *   ++count;
   * }).on('end', () => {
   *   console.log(`Total count is ${count}`);
   * });
   * ```
   */
  stream(): NodeJS.ReadableStream {
    return this._queryUtil.stream(this);
  }

  /**
   * Executes the query and streams the results as the following object:
   * {document?: DocumentSnapshot, metrics?: ExplainMetrics}
   *
   * The stream surfaces documents one at a time as they are received from the
   * server, and at the end, it will surface the metrics associated with
   * executing the query.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * let count = 0;
   *
   * query.explainStream({analyze: true}).on('data', (data) => {
   *   if (data.document) {
   *     // Use data.document which is a DocumentSnapshot instance.
   *     console.log(`Found document with name '${data.document.id}'`);
   *     ++count;
   *   }
   *   if (data.metrics) {
   *     // Use data.metrics which is an ExplainMetrics instance.
   *   }
   * }).on('end', () => {
   *   console.log(`Received ${count} documents.`);
   * });
   * ```
   */
  explainStream(
    explainOptions?: firestore.ExplainOptions,
  ): NodeJS.ReadableStream {
    if (explainOptions === undefined) {
      explainOptions = {};
    }
    if (this._queryOptions.limitType === LimitType.Last) {
      throw new Error(
        'Query results for queries that include limitToLast() ' +
          'constraints cannot be streamed. Use Query.explain() instead.',
      );
    }

    const responseStream = this._stream(undefined, explainOptions);
    const transform = new Transform({
      objectMode: true,
      transform(
        chunk: QueryStreamElement<AppModelType, DbModelType>,
        encoding,
        callback,
      ) {
        if (chunk.document || chunk.explainMetrics) {
          callback(undefined, {
            document: chunk.document,
            metrics: chunk.explainMetrics,
          });
        }
      },
    });
    responseStream.pipe(transform);
    responseStream.on('error', e => transform.destroy(e));
    return transform;
  }

  /**
   * Converts a QueryCursor to its proto representation.
   *
   * @param cursor The original cursor value
   * @private
   * @internal
   */
  private toCursor(cursor: QueryCursor | undefined): api.ICursor | undefined {
    if (cursor) {
      return cursor.before
        ? {before: true, values: cursor.values}
        : {values: cursor.values};
    }

    return undefined;
  }

  /**
   * Internal method for serializing a query to its RunQuery proto
   * representation with an optional transaction id or read time.
   *
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   * @param explainOptions Options to use for explaining the query (if any).
   * @private
   * @internal
   * @returns Serialized JSON for the query.
   */
  toProto(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): api.IRunQueryRequest {
    const projectId = this.firestore.projectId;
    const databaseId = this.firestore.databaseId;
    const parentPath = this._queryOptions.parentPath.toQualifiedResourcePath(
      projectId,
      databaseId,
    );

    const structuredQuery = this.toStructuredQuery();

    // For limitToLast queries, the structured query has to be translated to a version with
    // reversed ordered, and flipped startAt/endAt to work properly.
    if (this._queryOptions.limitType === LimitType.Last) {
      if (!this._queryOptions.hasFieldOrders()) {
        throw new Error(
          'limitToLast() queries require specifying at least one orderBy() clause.',
        );
      }

      structuredQuery.orderBy = this._queryOptions.fieldOrders!.map(order => {
        // Flip the orderBy directions since we want the last results
        const dir =
          order.direction === 'DESCENDING' ? 'ASCENDING' : 'DESCENDING';
        return new FieldOrder(order.field, dir).toProto();
      });

      // Swap the cursors to match the now-flipped query ordering.
      structuredQuery.startAt = this._queryOptions.endAt
        ? this.toCursor({
            values: this._queryOptions.endAt.values,
            before: !this._queryOptions.endAt.before,
          })
        : undefined;
      structuredQuery.endAt = this._queryOptions.startAt
        ? this.toCursor({
            values: this._queryOptions.startAt.values,
            before: !this._queryOptions.startAt.before,
          })
        : undefined;
    }

    const runQueryRequest: api.IRunQueryRequest = {
      parent: parentPath.formattedName,
      structuredQuery,
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
   * Converts current Query to an IBundledQuery.
   *
   * @private
   * @internal
   */
  _toBundledQuery(): protos.firestore.IBundledQuery {
    const projectId = this.firestore.projectId;
    const databaseId = this.firestore.databaseId;
    const parentPath = this._queryOptions.parentPath.toQualifiedResourcePath(
      projectId,
      databaseId,
    );
    const structuredQuery = this.toStructuredQuery();

    const bundledQuery: protos.firestore.IBundledQuery = {
      parent: parentPath.formattedName,
      structuredQuery,
    };
    if (this._queryOptions.limitType === LimitType.First) {
      bundledQuery.limitType = 'FIRST';
    } else if (this._queryOptions.limitType === LimitType.Last) {
      bundledQuery.limitType = 'LAST';
    }

    return bundledQuery;
  }

  private toStructuredQuery(): api.IStructuredQuery {
    const structuredQuery: api.IStructuredQuery = {
      from: [{}],
    };

    if (this._queryOptions.allDescendants) {
      structuredQuery.from![0].allDescendants = true;
    }

    // Kindless queries select all descendant documents, so we remove the
    // collectionId field.
    if (!this._queryOptions.kindless) {
      structuredQuery.from![0].collectionId = this._queryOptions.collectionId;
    }

    if (this._queryOptions.filters.length >= 1) {
      structuredQuery.where = new CompositeFilterInternal(
        this._queryOptions.filters,
        'AND',
      ).toProto();
    }

    if (this._queryOptions.hasFieldOrders()) {
      structuredQuery.orderBy = this._queryOptions.fieldOrders.map(o =>
        o.toProto(),
      );
    }

    structuredQuery.startAt = this.toCursor(this._queryOptions.startAt);
    structuredQuery.endAt = this.toCursor(this._queryOptions.endAt);

    if (this._queryOptions.limit) {
      structuredQuery.limit = {value: this._queryOptions.limit};
    }

    structuredQuery.offset = this._queryOptions.offset;
    structuredQuery.select = this._queryOptions.projection;

    return structuredQuery;
  }

  /**
   * @internal
   * @private
   * This method exists solely to maintain backward compatability.
   */
  _isPermanentRpcError(err: GoogleError, methodName: string): boolean {
    return this._queryUtil._isPermanentRpcError(err, methodName);
  }

  /**
   * @internal
   * @private
   * This method exists solely to maintain backward compatability.
   */
  _hasRetryTimedOut(methodName: string, startTime: number): boolean {
    return this._queryUtil._hasRetryTimedOut(methodName, startTime);
  }

  /**
   * Internal streaming method that accepts an optional transaction ID.
   *
   * BEWARE: If `transactionOrReadTime` is `ITransactionOptions`, then the first
   * response in the stream will be a transaction response.
   *
   * @param transactionOrReadTime A transaction ID, options to start a new
   *  transaction, or timestamp to use as read time.
   * @param explainOptions Options to use for explaining the query (if any).
   * @private
   * @internal
   * @returns A stream of document results, optionally preceded by a transaction response.
   */
  _stream(
    transactionOrReadTime?: Uint8Array | Timestamp | api.ITransactionOptions,
    explainOptions?: firestore.ExplainOptions,
  ): NodeJS.ReadableStream {
    return this._queryUtil._stream(
      this,
      transactionOrReadTime,
      true,
      explainOptions,
    );
  }

  /**
   * Attaches a listener for QuerySnapshot events.
   *
   * @param {querySnapshotCallback} onNext A callback to be called every time
   * a new [QuerySnapshot]{@link QuerySnapshot} is available.
   * @param {errorCallback=} onError A callback to be called if the listen
   * fails or is cancelled. No further callbacks will occur.
   *
   * @returns {function()} An unsubscribe function that can be called to cancel
   * the snapshot listener.
   *
   * @example
   * ```
   * let query = firestore.collection('col').where('foo', '==', 'bar');
   *
   * let unsubscribe = query.onSnapshot(querySnapshot => {
   *   console.log(`Received query snapshot of size ${querySnapshot.size}`);
   * }, err => {
   *   console.log(`Encountered error: ${err}`);
   * });
   *
   * // Remove this listener.
   * unsubscribe();
   * ```
   */
  onSnapshot(
    onNext: (snapshot: QuerySnapshot<AppModelType, DbModelType>) => void,
    onError?: (error: Error) => void,
  ): () => void {
    validateFunction('onNext', onNext);
    validateFunction('onError', onError, {optional: true});

    const watch: QueryWatch<AppModelType, DbModelType> =
      new (require('../watch').QueryWatch)(
        this.firestore,
        this,
        this._queryOptions.converter,
      );

    return watch.onSnapshot((readTime, size, docs, changes) => {
      onNext(new QuerySnapshot(this, readTime, size, docs, changes));
    }, onError || console.error);
  }

  /**
   * Returns a function that can be used to sort QueryDocumentSnapshots
   * according to the sort criteria of this query.
   *
   * @private
   * @internal
   */
  comparator(): (
    s1: QueryDocumentSnapshot<AppModelType, DbModelType>,
    s2: QueryDocumentSnapshot<AppModelType, DbModelType>,
  ) => number {
    return (doc1, doc2) => {
      // Add implicit sorting by name, using the last specified direction.
      const lastDirection = this._queryOptions.hasFieldOrders()
        ? this._queryOptions.fieldOrders[
            this._queryOptions.fieldOrders.length - 1
          ].direction
        : 'ASCENDING';
      const orderBys = this._queryOptions.fieldOrders.concat(
        new FieldOrder(FieldPath.documentId(), lastDirection),
      );

      for (const orderBy of orderBys) {
        let comp;
        if (FieldPath.documentId().isEqual(orderBy.field)) {
          comp = doc1.ref._path.compareTo(doc2.ref._path);
        } else {
          const v1 = doc1.protoField(orderBy.field);
          const v2 = doc2.protoField(orderBy.field);
          if (v1 === undefined || v2 === undefined) {
            throw new Error(
              'Trying to compare documents on fields that ' +
                "don't exist. Please include the fields you are ordering on " +
                'in your select() call.',
            );
          }
          comp = compare(v1, v2);
        }

        if (comp !== 0) {
          const direction = orderBy.direction === 'ASCENDING' ? 1 : -1;
          return direction * comp;
        }
      }

      return 0;
    };
  }

  withConverter<
    NewAppModelType,
    NewDbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    converter: firestore.FirestoreDataConverter<
      NewAppModelType,
      NewDbModelType
    > | null,
  ): Query<NewAppModelType, NewDbModelType>;
  /**
   * Applies a custom data converter to this Query, allowing you to use your
   * own custom model objects with Firestore. When you call get() on the
   * returned Query, the provided converter will convert between Firestore
   * data of type `NewDbModelType` and your custom type `NewAppModelType`.
   *
   * Using the converter allows you to specify generic type arguments when
   * storing and retrieving objects from Firestore.
   *
   * Passing in `null` as the converter parameter removes the current
   * converter.
   *
   * @example
   * ```
   * class Post {
   *   constructor(readonly title: string, readonly author: string) {}
   *
   *   toString(): string {
   *     return this.title + ', by ' + this.author;
   *   }
   * }
   *
   * const postConverter = {
   *   toFirestore(post: Post): FirebaseFirestore.DocumentData {
   *     return {title: post.title, author: post.author};
   *   },
   *   fromFirestore(
   *     snapshot: FirebaseFirestore.QueryDocumentSnapshot
   *   ): Post {
   *     const data = snapshot.data();
   *     return new Post(data.title, data.author);
   *   }
   * };
   *
   * const postSnap = await Firestore()
   *   .collection('posts')
   *   .withConverter(postConverter)
   *   .doc().get();
   * const post = postSnap.data();
   * if (post !== undefined) {
   *   post.title; // string
   *   post.toString(); // Should be defined
   *   post.someNonExistentProperty; // TS error
   * }
   *
   * ```
   * @param {FirestoreDataConverter | null} converter Converts objects to and
   * from Firestore. Passing in `null` removes the current converter.
   * @returns A Query that uses the provided converter.
   */
  withConverter<
    NewAppModelType,
    NewDbModelType extends firestore.DocumentData = firestore.DocumentData,
  >(
    converter: firestore.FirestoreDataConverter<
      NewAppModelType,
      NewDbModelType
    > | null,
  ): Query<NewAppModelType, NewDbModelType> {
    return new Query<NewAppModelType, NewDbModelType>(
      this.firestore,
      this._queryOptions.withConverter(converter ?? defaultConverter()),
    );
  }

  /**
   * Construct the resulting snapshot for this query with given documents.
   *
   * @private
   * @internal
   */
  _createSnapshot(
    readTime: Timestamp,
    size: number,
    docs: () => Array<QueryDocumentSnapshot<AppModelType, DbModelType>>,
    changes: () => Array<DocumentChange<AppModelType, DbModelType>>,
  ): QuerySnapshot<AppModelType, DbModelType> {
    return new QuerySnapshot<AppModelType, DbModelType>(
      this,
      readTime,
      size,
      docs,
      changes,
    );
  }
}

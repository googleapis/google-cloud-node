// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The result of fetching an entity from Datastore.
 *
 * @property {Object} entity
 *   The resulting entity.
 *
 *   This object should have the same structure as [Entity]{@link google.datastore.v1.Entity}
 *
 * @property {number} version
 *   The version of the entity, a strictly positive number that monotonically
 *   increases with changes to the entity.
 *
 *   This field is set for `FULL` entity
 *   results.
 *
 *   For missing entities in `LookupResponse`, this
 *   is the version of the snapshot that was used to look up the entity, and it
 *   is always set except for eventually consistent reads.
 *
 * @property {string} cursor
 *   A cursor that points to the position after the result entity.
 *   Set only when the `EntityResult` is part of a `QueryResultBatch` message.
 *
 * @typedef EntityResult
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.EntityResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var EntityResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specifies what data the 'entity' field contains.
   * A `ResultType` is either implied (for example, in `LookupResponse.missing`
   * from `datastore.proto`, it is always `KEY_ONLY`) or specified by context
   * (for example, in message `QueryResultBatch`, field `entity_result_type`
   * specifies a `ResultType` for all the values in field `entity_results`).
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  ResultType: {

    /**
     * Unspecified. This value is never used.
     */
    RESULT_TYPE_UNSPECIFIED: 0,

    /**
     * The key and properties.
     */
    FULL: 1,

    /**
     * A projected subset of properties. The entity may have no key.
     */
    PROJECTION: 2,

    /**
     * Only the key.
     */
    KEY_ONLY: 3
  }
};

/**
 * A query for entities.
 *
 * @property {Object[]} projection
 *   The projection to return. Defaults to returning all properties.
 *
 *   This object should have the same structure as [Projection]{@link google.datastore.v1.Projection}
 *
 * @property {Object[]} kind
 *   The kinds to query (if empty, returns entities of all kinds).
 *   Currently at most 1 kind may be specified.
 *
 *   This object should have the same structure as [KindExpression]{@link google.datastore.v1.KindExpression}
 *
 * @property {Object} filter
 *   The filter to apply.
 *
 *   This object should have the same structure as [Filter]{@link google.datastore.v1.Filter}
 *
 * @property {Object[]} order
 *   The order to apply to the query results (if empty, order is unspecified).
 *
 *   This object should have the same structure as [PropertyOrder]{@link google.datastore.v1.PropertyOrder}
 *
 * @property {Object[]} distinctOn
 *   The properties to make distinct. The query results will contain the first
 *   result for each distinct combination of values for the given properties
 *   (if empty, all results are returned).
 *
 *   This object should have the same structure as [PropertyReference]{@link google.datastore.v1.PropertyReference}
 *
 * @property {string} startCursor
 *   A starting point for the query results. Query cursors are
 *   returned in query result batches and
 *   [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 *
 * @property {string} endCursor
 *   An ending point for the query results. Query cursors are
 *   returned in query result batches and
 *   [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 *
 * @property {number} offset
 *   The number of results to skip. Applies before limit, but after all other
 *   constraints. Optional. Must be >= 0 if specified.
 *
 * @property {Object} limit
 *   The maximum number of results to return. Applies after all other
 *   constraints. Optional.
 *   Unspecified is interpreted as no limit.
 *   Must be >= 0 if specified.
 *
 *   This object should have the same structure as [Int32Value]{@link google.protobuf.Int32Value}
 *
 * @typedef Query
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Query definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var Query = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a kind.
 *
 * @property {string} name
 *   The name of the kind.
 *
 * @typedef KindExpression
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.KindExpression definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var KindExpression = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A reference to a property relative to the kind expressions.
 *
 * @property {string} name
 *   The name of the property.
 *   If name includes "."s, it may be interpreted as a property name path.
 *
 * @typedef PropertyReference
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.PropertyReference definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var PropertyReference = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a property in a projection.
 *
 * @property {Object} property
 *   The property to project.
 *
 *   This object should have the same structure as [PropertyReference]{@link google.datastore.v1.PropertyReference}
 *
 * @typedef Projection
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Projection definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var Projection = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The desired order for a specific property.
 *
 * @property {Object} property
 *   The property to order by.
 *
 *   This object should have the same structure as [PropertyReference]{@link google.datastore.v1.PropertyReference}
 *
 * @property {number} direction
 *   The direction to order by. Defaults to `ASCENDING`.
 *
 *   The number should be among the values of [Direction]{@link google.datastore.v1.Direction}
 *
 * @typedef PropertyOrder
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.PropertyOrder definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var PropertyOrder = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The sort direction.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  Direction: {

    /**
     * Unspecified. This value must not be used.
     */
    DIRECTION_UNSPECIFIED: 0,

    /**
     * Ascending.
     */
    ASCENDING: 1,

    /**
     * Descending.
     */
    DESCENDING: 2
  }
};

/**
 * A holder for any type of filter.
 *
 * @property {Object} compositeFilter
 *   A composite filter.
 *
 *   This object should have the same structure as [CompositeFilter]{@link google.datastore.v1.CompositeFilter}
 *
 * @property {Object} propertyFilter
 *   A filter on a property.
 *
 *   This object should have the same structure as [PropertyFilter]{@link google.datastore.v1.PropertyFilter}
 *
 * @typedef Filter
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Filter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var Filter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A filter that merges multiple other filters using the given operator.
 *
 * @property {number} op
 *   The operator for combining multiple filters.
 *
 *   The number should be among the values of [Operator]{@link google.datastore.v1.Operator}
 *
 * @property {Object[]} filters
 *   The list of filters to combine.
 *   Must contain at least one filter.
 *
 *   This object should have the same structure as [Filter]{@link google.datastore.v1.Filter}
 *
 * @typedef CompositeFilter
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.CompositeFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var CompositeFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A composite filter operator.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  Operator: {

    /**
     * Unspecified. This value must not be used.
     */
    OPERATOR_UNSPECIFIED: 0,

    /**
     * The results are required to satisfy each of the combined filters.
     */
    AND: 1
  }
};

/**
 * A filter on a specific property.
 *
 * @property {Object} property
 *   The property to filter by.
 *
 *   This object should have the same structure as [PropertyReference]{@link google.datastore.v1.PropertyReference}
 *
 * @property {number} op
 *   The operator to filter by.
 *
 *   The number should be among the values of [Operator]{@link google.datastore.v1.Operator}
 *
 * @property {Object} value
 *   The value to compare the property to.
 *
 *   This object should have the same structure as [Value]{@link google.datastore.v1.Value}
 *
 * @typedef PropertyFilter
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.PropertyFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var PropertyFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A property filter operator.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  Operator: {

    /**
     * Unspecified. This value must not be used.
     */
    OPERATOR_UNSPECIFIED: 0,

    /**
     * Less than.
     */
    LESS_THAN: 1,

    /**
     * Less than or equal.
     */
    LESS_THAN_OR_EQUAL: 2,

    /**
     * Greater than.
     */
    GREATER_THAN: 3,

    /**
     * Greater than or equal.
     */
    GREATER_THAN_OR_EQUAL: 4,

    /**
     * Equal.
     */
    EQUAL: 5,

    /**
     * Has ancestor.
     */
    HAS_ANCESTOR: 11
  }
};

/**
 * A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
 *
 * @property {string} queryString
 *   A string of the format described
 *   [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
 *
 * @property {boolean} allowLiterals
 *   When false, the query string must not contain any literals and instead must
 *   bind all values. For example,
 *   `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while
 *   `SELECT * FROM Kind WHERE a = @value` is.
 *
 * @property {Object.<string, Object>} namedBindings
 *   For each non-reserved named binding site in the query string, there must be
 *   a named parameter with that name, but not necessarily the inverse.
 *
 *   Key must match regex `[A-Za-z_$][A-Za-z_$0-9]*`, must not match regex
 *   `__.*__`, and must not be `""`.
 *
 * @property {Object[]} positionalBindings
 *   Numbered binding site @1 references the first numbered parameter,
 *   effectively using 1-based indexing, rather than the usual 0.
 *
 *   For each binding site numbered i in `query_string`, there must be an i-th
 *   numbered parameter. The inverse must also be true.
 *
 *   This object should have the same structure as [GqlQueryParameter]{@link google.datastore.v1.GqlQueryParameter}
 *
 * @typedef GqlQuery
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.GqlQuery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var GqlQuery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A binding parameter for a GQL query.
 *
 * @property {Object} value
 *   A value parameter.
 *
 *   This object should have the same structure as [Value]{@link google.datastore.v1.Value}
 *
 * @property {string} cursor
 *   A query cursor. Query cursors are returned in query
 *   result batches.
 *
 * @typedef GqlQueryParameter
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.GqlQueryParameter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var GqlQueryParameter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A batch of results produced by a query.
 *
 * @property {number} skippedResults
 *   The number of results skipped, typically because of an offset.
 *
 * @property {string} skippedCursor
 *   A cursor that points to the position after the last skipped result.
 *   Will be set when `skipped_results` != 0.
 *
 * @property {number} entityResultType
 *   The result type for every entity in `entity_results`.
 *
 *   The number should be among the values of [ResultType]{@link google.datastore.v1.ResultType}
 *
 * @property {Object[]} entityResults
 *   The results for this batch.
 *
 *   This object should have the same structure as [EntityResult]{@link google.datastore.v1.EntityResult}
 *
 * @property {string} endCursor
 *   A cursor that points to the position after the last result in the batch.
 *
 * @property {number} moreResults
 *   The state of the query after the current batch.
 *
 *   The number should be among the values of [MoreResultsType]{@link google.datastore.v1.MoreResultsType}
 *
 * @property {number} snapshotVersion
 *   The version number of the snapshot this batch was returned from.
 *   This applies to the range of results from the query's `start_cursor` (or
 *   the beginning of the query if no cursor was given) to this batch's
 *   `end_cursor` (not the query's `end_cursor`).
 *
 *   In a single transaction, subsequent query result batches for the same query
 *   can have a greater snapshot version number. Each batch's snapshot version
 *   is valid for all preceding batches.
 *   The value will be zero for eventually consistent queries.
 *
 * @typedef QueryResultBatch
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.QueryResultBatch definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/query.proto}
 */
var QueryResultBatch = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The possible values for the `more_results` field.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  MoreResultsType: {

    /**
     * Unspecified. This value is never used.
     */
    MORE_RESULTS_TYPE_UNSPECIFIED: 0,

    /**
     * There may be additional batches to fetch from this query.
     */
    NOT_FINISHED: 1,

    /**
     * The query is finished, but there may be more results after the limit.
     */
    MORE_RESULTS_AFTER_LIMIT: 2,

    /**
     * The query is finished, but there may be more results after the end
     * cursor.
     */
    MORE_RESULTS_AFTER_CURSOR: 4,

    /**
     * The query is finished, and there are no more results.
     */
    NO_MORE_RESULTS: 3
  }
};
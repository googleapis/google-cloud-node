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
 * The request for Datastore.Lookup.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {Object} readOptions
 *   The options for this lookup request.
 *
 *   This object should have the same structure as [ReadOptions]{@link google.datastore.v1.ReadOptions}
 *
 * @property {Object[]} keys
 *   Keys of entities to look up.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @typedef LookupRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.LookupRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var LookupRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.Lookup.
 *
 * @property {Object[]} found
 *   Entities found as `ResultType.FULL` entities. The order of results in this
 *   field is undefined and has no relation to the order of the keys in the
 *   input.
 *
 *   This object should have the same structure as [EntityResult]{@link google.datastore.v1.EntityResult}
 *
 * @property {Object[]} missing
 *   Entities not found as `ResultType.KEY_ONLY` entities. The order of results
 *   in this field is undefined and has no relation to the order of the keys
 *   in the input.
 *
 *   This object should have the same structure as [EntityResult]{@link google.datastore.v1.EntityResult}
 *
 * @property {Object[]} deferred
 *   A list of keys that were not looked up due to resource constraints. The
 *   order of results in this field is undefined and has no relation to the
 *   order of the keys in the input.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @typedef LookupResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.LookupResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var LookupResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.RunQuery.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {Object} partitionId
 *   Entities are partitioned into subsets, identified by a partition ID.
 *   Queries are scoped to a single partition.
 *   This partition ID is normalized with the standard default context
 *   partition ID.
 *
 *   This object should have the same structure as [PartitionId]{@link google.datastore.v1.PartitionId}
 *
 * @property {Object} readOptions
 *   The options for this query.
 *
 *   This object should have the same structure as [ReadOptions]{@link google.datastore.v1.ReadOptions}
 *
 * @property {Object} query
 *   The query to run.
 *
 *   This object should have the same structure as [Query]{@link google.datastore.v1.Query}
 *
 * @property {Object} gqlQuery
 *   The GQL query to run.
 *
 *   This object should have the same structure as [GqlQuery]{@link google.datastore.v1.GqlQuery}
 *
 * @typedef RunQueryRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.RunQueryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var RunQueryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.RunQuery.
 *
 * @property {Object} batch
 *   A batch of query results (always present).
 *
 *   This object should have the same structure as [QueryResultBatch]{@link google.datastore.v1.QueryResultBatch}
 *
 * @property {Object} query
 *   The parsed form of the `GqlQuery` from the request, if it was set.
 *
 *   This object should have the same structure as [Query]{@link google.datastore.v1.Query}
 *
 * @typedef RunQueryResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.RunQueryResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var RunQueryResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.BeginTransaction.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {Object} transactionOptions
 *   Options for a new transaction.
 *
 *   This object should have the same structure as [TransactionOptions]{@link google.datastore.v1.TransactionOptions}
 *
 * @typedef BeginTransactionRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.BeginTransactionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var BeginTransactionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.BeginTransaction.
 *
 * @property {string} transaction
 *   The transaction identifier (always present).
 *
 * @typedef BeginTransactionResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.BeginTransactionResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var BeginTransactionResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.Rollback.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {string} transaction
 *   The transaction identifier, returned by a call to
 *   Datastore.BeginTransaction.
 *
 * @typedef RollbackRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.RollbackRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var RollbackRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.Rollback.
 * (an empty message).
 * @typedef RollbackResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.RollbackResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var RollbackResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.Commit.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {number} mode
 *   The type of commit to perform. Defaults to `TRANSACTIONAL`.
 *
 *   The number should be among the values of [Mode]{@link google.datastore.v1.Mode}
 *
 * @property {string} transaction
 *   The identifier of the transaction associated with the commit. A
 *   transaction identifier is returned by a call to
 *   Datastore.BeginTransaction.
 *
 * @property {Object[]} mutations
 *   The mutations to perform.
 *
 *   When mode is `TRANSACTIONAL`, mutations affecting a single entity are
 *   applied in order. The following sequences of mutations affecting a single
 *   entity are not permitted in a single `Commit` request:
 *
 *   - `insert` followed by `insert`
 *   - `update` followed by `insert`
 *   - `upsert` followed by `insert`
 *   - `delete` followed by `update`
 *
 *   When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single
 *   entity.
 *
 *   This object should have the same structure as [Mutation]{@link google.datastore.v1.Mutation}
 *
 * @typedef CommitRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.CommitRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var CommitRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The modes available for commits.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  Mode: {

    /**
     * Unspecified. This value must not be used.
     */
    MODE_UNSPECIFIED: 0,

    /**
     * Transactional: The mutations are either all applied, or none are applied.
     * Learn about transactions [here](https://cloud.google.com/datastore/docs/concepts/transactions).
     */
    TRANSACTIONAL: 1,

    /**
     * Non-transactional: The mutations may not apply as all or none.
     */
    NON_TRANSACTIONAL: 2
  }
};

/**
 * The response for Datastore.Commit.
 *
 * @property {Object[]} mutationResults
 *   The result of performing the mutations.
 *   The i-th mutation result corresponds to the i-th mutation in the request.
 *
 *   This object should have the same structure as [MutationResult]{@link google.datastore.v1.MutationResult}
 *
 * @property {number} indexUpdates
 *   The number of index entries updated during the commit, or zero if none were
 *   updated.
 *
 * @typedef CommitResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.CommitResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var CommitResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.AllocateIds.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {Object[]} keys
 *   A list of keys with incomplete key paths for which to allocate IDs.
 *   No key may be reserved/read-only.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @typedef AllocateIdsRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.AllocateIdsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var AllocateIdsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.AllocateIds.
 *
 * @property {Object[]} keys
 *   The keys specified in the request (in the same order), each with
 *   its key path completed with a newly allocated ID.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @typedef AllocateIdsResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.AllocateIdsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var AllocateIdsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for Datastore.ReserveIds.
 *
 * @property {string} projectId
 *   The ID of the project against which to make the request.
 *
 * @property {string} databaseId
 *   If not empty, the ID of the database against which to make the request.
 *
 * @property {Object[]} keys
 *   A list of keys with complete key paths whose numeric IDs should not be
 *   auto-allocated.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @typedef ReserveIdsRequest
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.ReserveIdsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var ReserveIdsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for Datastore.ReserveIds.
 * @typedef ReserveIdsResponse
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.ReserveIdsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var ReserveIdsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A mutation to apply to an entity.
 *
 * @property {Object} insert
 *   The entity to insert. The entity must not already exist.
 *   The entity key's final path element may be incomplete.
 *
 *   This object should have the same structure as [Entity]{@link google.datastore.v1.Entity}
 *
 * @property {Object} update
 *   The entity to update. The entity must already exist.
 *   Must have a complete key path.
 *
 *   This object should have the same structure as [Entity]{@link google.datastore.v1.Entity}
 *
 * @property {Object} upsert
 *   The entity to upsert. The entity may or may not already exist.
 *   The entity key's final path element may be incomplete.
 *
 *   This object should have the same structure as [Entity]{@link google.datastore.v1.Entity}
 *
 * @property {Object} delete
 *   The key of the entity to delete. The entity may or may not already exist.
 *   Must have a complete key path and must not be reserved/read-only.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @property {number} baseVersion
 *   The version of the entity that this mutation is being applied to. If this
 *   does not match the current version on the server, the mutation conflicts.
 *
 * @typedef Mutation
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Mutation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var Mutation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The result of applying a mutation.
 *
 * @property {Object} key
 *   The automatically allocated key.
 *   Set only when the mutation allocated a key.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @property {number} version
 *   The version of the entity on the server after processing the mutation. If
 *   the mutation doesn't change anything on the server, then the version will
 *   be the version of the current entity or, if no entity is present, a version
 *   that is strictly greater than the version of any previous entity and less
 *   than the version of any possible future entity.
 *
 * @property {boolean} conflictDetected
 *   Whether a conflict was detected for this mutation. Always false when a
 *   conflict detection strategy field is not set in the mutation.
 *
 * @typedef MutationResult
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.MutationResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var MutationResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The options shared by read requests.
 *
 * @property {number} readConsistency
 *   The non-transactional read consistency to use.
 *   Cannot be set to `STRONG` for global queries.
 *
 *   The number should be among the values of [ReadConsistency]{@link google.datastore.v1.ReadConsistency}
 *
 * @property {string} transaction
 *   The identifier of the transaction in which to read. A
 *   transaction identifier is returned by a call to
 *   Datastore.BeginTransaction.
 *
 * @typedef ReadOptions
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.ReadOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var ReadOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The possible values for read consistencies.
   *
   * @enum {number}
   * @memberof google.datastore.v1
   */
  ReadConsistency: {

    /**
     * Unspecified. This value must not be used.
     */
    READ_CONSISTENCY_UNSPECIFIED: 0,

    /**
     * Strong consistency.
     */
    STRONG: 1,

    /**
     * Eventual consistency.
     */
    EVENTUAL: 2
  }
};

/**
 * Options for beginning a new transaction.
 *
 * Transactions can be created explicitly with calls to
 * Datastore.BeginTransaction or implicitly by setting
 * ReadOptions.new_transaction in read requests.
 *
 * @property {Object} readWrite
 *   The transaction should allow both reads and writes.
 *
 *   This object should have the same structure as [ReadWrite]{@link google.datastore.v1.ReadWrite}
 *
 * @property {Object} readOnly
 *   The transaction should only allow reads.
 *
 *   This object should have the same structure as [ReadOnly]{@link google.datastore.v1.ReadOnly}
 *
 * @typedef TransactionOptions
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.TransactionOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
 */
var TransactionOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Options specific to read / write transactions.
   *
   * @property {string} previousTransaction
   *   The transaction identifier of the transaction being retried.
   *
   * @typedef ReadWrite
   * @memberof google.datastore.v1
   * @see [google.datastore.v1.TransactionOptions.ReadWrite definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
   */
  ReadWrite: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Options specific to read-only transactions.
   * @typedef ReadOnly
   * @memberof google.datastore.v1
   * @see [google.datastore.v1.TransactionOptions.ReadOnly definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/datastore.proto}
   */
  ReadOnly: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};
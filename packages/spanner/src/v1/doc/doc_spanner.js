/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * The request for {@link CreateSession}.
 *
 * @property {string} database
 *   Required. The database in which the new session is created.
 *
 * @class
 * @see [google.spanner.v1.CreateSessionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var CreateSessionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A session in the Cloud Spanner API.
 *
 * @property {string} name
 *   Required. The name of the session.
 *
 * @class
 * @see [google.spanner.v1.Session definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var Session = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link GetSession}.
 *
 * @property {string} name
 *   Required. The name of the session to retrieve.
 *
 * @class
 * @see [google.spanner.v1.GetSessionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var GetSessionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link DeleteSession}.
 *
 * @property {string} name
 *   Required. The name of the session to delete.
 *
 * @class
 * @see [google.spanner.v1.DeleteSessionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var DeleteSessionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link ExecuteSql} and
 * {@link ExecuteStreamingSql}.
 *
 * @property {string} session
 *   Required. The session in which the SQL query should be performed.
 *
 * @property {Object} transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 *
 * @property {string} sql
 *   Required. The SQL query string.
 *
 * @property {Object} params
 *   The SQL query string can contain parameter placeholders. A parameter
 *   placeholder consists of `'@'` followed by the parameter
 *   name. Parameter names consist of any combination of letters,
 *   numbers, and underscores.
 *
 *   Parameters can appear anywhere that a literal value is expected.  The same
 *   parameter name can be used more than once, for example:
 *     `"WHERE id > @msg_id AND id < @msg_id + 100"`
 *
 *   It is an error to execute an SQL query with unbound parameters.
 *
 *   Parameter values are specified using `params`, which is a JSON
 *   object whose keys are parameter names, and whose values are the
 *   corresponding parameter values.
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 *
 * @property {Object.<string, Object>} paramTypes
 *   It is not always possible for Cloud Spanner to infer the right SQL type
 *   from a JSON value.  For example, values of type `BYTES` and values
 *   of type `STRING` both appear in {@link params} as JSON strings.
 *
 *   In these cases, `param_types` can be used to specify the exact
 *   SQL type for some or all of the SQL query parameters. See the
 *   definition of {@link Type} for more information
 *   about SQL types.
 *
 * @property {string} resumeToken
 *   If this request is resuming a previously interrupted SQL query
 *   execution, `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new SQL query execution to resume where the last one left
 *   off. The rest of the request parameters must exactly match the
 *   request that yielded this token.
 *
 * @property {number} queryMode
 *   Used to control the amount of debugging information returned in
 *   {@link ResultSetStats}.
 *
 *   The number should be among the values of [QueryMode]{@link QueryMode}
 *
 * @class
 * @see [google.spanner.v1.ExecuteSqlRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var ExecuteSqlRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Mode in which the query must be processed.
   *
   * @enum {number}
   */
  QueryMode: {

    /**
     * The default mode where only the query result, without any information
     * about the query plan is returned.
     */
    NORMAL: 0,

    /**
     * This mode returns only the query plan, without any result rows or
     * execution statistics information.
     */
    PLAN: 1,

    /**
     * This mode returns both the query plan and the execution statistics along
     * with the result rows.
     */
    PROFILE: 2
  }
};

/**
 * The request for {@link Read} and
 * {@link StreamingRead}.
 *
 * @property {string} session
 *   Required. The session in which the read should be performed.
 *
 * @property {Object} transaction
 *   The transaction to use. If none is provided, the default is a
 *   temporary read-only transaction with strong concurrency.
 *
 *   This object should have the same structure as [TransactionSelector]{@link TransactionSelector}
 *
 * @property {string} table
 *   Required. The name of the table in the database to be read.
 *
 * @property {string} index
 *   If non-empty, the name of an index on {@link table}. This index is
 *   used instead of the table primary key when interpreting {@link key_set}
 *   and sorting result rows. See {@link key_set} for further information.
 *
 * @property {string[]} columns
 *   The columns of {@link table} to be returned for each row matching
 *   this request.
 *
 * @property {Object} keySet
 *   Required. `key_set` identifies the rows to be yielded. `key_set` names the
 *   primary keys of the rows in {@link table} to be yielded, unless {@link index}
 *   is present. If {@link index} is present, then {@link key_set} instead names
 *   index keys in {@link index}.
 *
 *   Rows are yielded in table primary key order (if {@link index} is empty)
 *   or index key order (if {@link index} is non-empty).
 *
 *   It is not an error for the `key_set` to name rows that do not
 *   exist in the database. Read yields nothing for nonexistent rows.
 *
 *   This object should have the same structure as [KeySet]{@link KeySet}
 *
 * @property {number} limit
 *   If greater than zero, only the first `limit` rows are yielded. If `limit`
 *   is zero, the default is no limit.
 *
 * @property {string} resumeToken
 *   If this request is resuming a previously interrupted read,
 *   `resume_token` should be copied from the last
 *   {@link PartialResultSet} yielded before the interruption. Doing this
 *   enables the new read to resume where the last read left off. The
 *   rest of the request parameters must exactly match the request
 *   that yielded this token.
 *
 * @class
 * @see [google.spanner.v1.ReadRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var ReadRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link BeginTransaction}.
 *
 * @property {string} session
 *   Required. The session in which the transaction runs.
 *
 * @property {Object} options
 *   Required. Options for the new transaction.
 *
 *   This object should have the same structure as [TransactionOptions]{@link TransactionOptions}
 *
 * @class
 * @see [google.spanner.v1.BeginTransactionRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var BeginTransactionRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link Commit}.
 *
 * @property {string} session
 *   Required. The session in which the transaction to be committed is running.
 *
 * @property {string} transactionId
 *   Commit a previously-started transaction.
 *
 * @property {Object} singleUseTransaction
 *   Execute mutations in a temporary transaction. Note that unlike
 *   commit of a previously-started transaction, commit with a
 *   temporary transaction is non-idempotent. That is, if the
 *   `CommitRequest` is sent to Cloud Spanner more than once (for
 *   instance, due to retries in the application, or in the
 *   transport library), it is possible that the mutations are
 *   executed more than once. If this is undesirable, use
 *   {@link BeginTransaction} and
 *   {@link Commit} instead.
 *
 *   This object should have the same structure as [TransactionOptions]{@link TransactionOptions}
 *
 * @property {Object[]} mutations
 *   The mutations to be executed when this transaction commits. All
 *   mutations are applied atomically, in the order they appear in
 *   this list.
 *
 *   This object should have the same structure as [Mutation]{@link Mutation}
 *
 * @class
 * @see [google.spanner.v1.CommitRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var CommitRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for {@link Commit}.
 *
 * @property {Object} commitTimestamp
 *   The Cloud Spanner timestamp at which the transaction committed.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.spanner.v1.CommitResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var CommitResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link Rollback}.
 *
 * @property {string} session
 *   Required. The session in which the transaction to roll back is running.
 *
 * @property {string} transactionId
 *   Required. The transaction to roll back.
 *
 * @class
 * @see [google.spanner.v1.RollbackRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/spanner.proto}
 */
var RollbackRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
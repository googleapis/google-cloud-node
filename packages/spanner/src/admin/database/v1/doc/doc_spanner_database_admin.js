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
 * A Cloud Spanner database.
 *
 * @property {string} name
 *   Required. The name of the database. Values are of the form
 *   `projects/<project>/instances/<instance>/databases/<database>`,
 *   where `<database>` is as specified in the `CREATE DATABASE`
 *   statement. This name can be passed to other API methods to
 *   identify the database.
 *
 * @property {number} state
 *   Output only. The current database state.
 *
 *   The number should be among the values of [State]{@link State}
 *
 * @class
 * @see [google.spanner.admin.database.v1.Database definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var Database = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Indicates the current state of the database.
   *
   * @enum {number}
   */
  State: {

    /**
     * Not specified.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The database is still being created. Operations on the database may fail
     * with `FAILED_PRECONDITION` in this state.
     */
    CREATING: 1,

    /**
     * The database is fully created and ready for use.
     */
    READY: 2
  }
};

/**
 * The request for {@link ListDatabases}.
 *
 * @property {string} parent
 *   Required. The instance whose databases should be listed.
 *   Values are of the form `projects/<project>/instances/<instance>`.
 *
 * @property {number} pageSize
 *   Number of databases to be returned in the response. If 0 or less,
 *   defaults to the server's maximum allowed page size.
 *
 * @property {string} pageToken
 *   If non-empty, `page_token` should contain a
 *   {@link next_page_token} from a
 *   previous {@link ListDatabasesResponse}.
 *
 * @class
 * @see [google.spanner.admin.database.v1.ListDatabasesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var ListDatabasesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for {@link ListDatabases}.
 *
 * @property {Object[]} databases
 *   Databases that matched the request.
 *
 *   This object should have the same structure as [Database]{@link Database}
 *
 * @property {string} nextPageToken
 *   `next_page_token` can be sent in a subsequent
 *   {@link ListDatabases} call to fetch more
 *   of the matching databases.
 *
 * @class
 * @see [google.spanner.admin.database.v1.ListDatabasesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var ListDatabasesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link CreateDatabase}.
 *
 * @property {string} parent
 *   Required. The name of the instance that will serve the new database.
 *   Values are of the form `projects/<project>/instances/<instance>`.
 *
 * @property {string} createStatement
 *   Required. A `CREATE DATABASE` statement, which specifies the ID of the
 *   new database.  The database ID must conform to the regular expression
 *   `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length.
 *
 * @property {string[]} extraStatements
 *   An optional list of DDL statements to run inside the newly created
 *   database. Statements can create tables, indexes, etc. These
 *   statements execute atomically with the creation of the database:
 *   if there is an error in any statement, the database is not created.
 *
 * @class
 * @see [google.spanner.admin.database.v1.CreateDatabaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var CreateDatabaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata type for the operation returned by
 * {@link CreateDatabase}.
 *
 * @property {string} database
 *   The database being created.
 *
 * @class
 * @see [google.spanner.admin.database.v1.CreateDatabaseMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var CreateDatabaseMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link GetDatabase}.
 *
 * @property {string} name
 *   Required. The name of the requested database. Values are of the form
 *   `projects/<project>/instances/<instance>/databases/<database>`.
 *
 * @class
 * @see [google.spanner.admin.database.v1.GetDatabaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var GetDatabaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Enqueues the given DDL statements to be applied, in order but not
 * necessarily all at once, to the database schema at some point (or
 * points) in the future. The server checks that the statements
 * are executable (syntactically valid, name tables that exist, etc.)
 * before enqueueing them, but they may still fail upon
 * later execution (e.g., if a statement from another batch of
 * statements is applied first and it conflicts in some way, or if
 * there is some data-related problem like a `NULL` value in a column to
 * which `NOT NULL` would be added). If a statement fails, all
 * subsequent statements in the batch are automatically cancelled.
 *
 * Each batch of statements is assigned a name which can be used with
 * the {@link Operations} API to monitor
 * progress. See the
 * {@link operation_id} field for more
 * details.
 *
 * @property {string} database
 *   Required. The database to update.
 *
 * @property {string[]} statements
 *   DDL statements to be applied to the database.
 *
 * @property {string} operationId
 *   If empty, the new update request is assigned an
 *   automatically-generated operation ID. Otherwise, `operation_id`
 *   is used to construct the name of the resulting
 *   {@link Operation}.
 *
 *   Specifying an explicit operation ID simplifies determining
 *   whether the statements were executed in the event that the
 *   {@link UpdateDatabaseDdl} call is replayed,
 *   or the return value is otherwise lost: the {@link database} and
 *   `operation_id` fields can be combined to form the
 *   {@link name} of the resulting
 *   {@link longrunning.Operation}: `<database>/operations/<operation_id>`.
 *
 *   `operation_id` should be unique within the database, and must be
 *   a valid identifier: `[a-z][a-z0-9_]*`. Note that
 *   automatically-generated operation IDs always begin with an
 *   underscore. If the named operation already exists,
 *   {@link UpdateDatabaseDdl} returns
 *   `ALREADY_EXISTS`.
 *
 * @class
 * @see [google.spanner.admin.database.v1.UpdateDatabaseDdlRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var UpdateDatabaseDdlRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata type for the operation returned by
 * {@link UpdateDatabaseDdl}.
 *
 * @property {string} database
 *   The database being modified.
 *
 * @property {string[]} statements
 *   For an update this list contains all the statements. For an
 *   individual statement, this list contains only that statement.
 *
 * @property {Object[]} commitTimestamps
 *   Reports the commit timestamps of all statements that have
 *   succeeded so far, where `commit_timestamps[i]` is the commit
 *   timestamp for the statement `statements[i]`.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
 * @see [google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var UpdateDatabaseDdlMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link DropDatabase}.
 *
 * @property {string} database
 *   Required. The database to be dropped.
 *
 * @class
 * @see [google.spanner.admin.database.v1.DropDatabaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var DropDatabaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request for {@link GetDatabaseDdl}.
 *
 * @property {string} database
 *   Required. The database whose schema we wish to get.
 *
 * @class
 * @see [google.spanner.admin.database.v1.GetDatabaseDdlRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var GetDatabaseDdlRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for {@link GetDatabaseDdl}.
 *
 * @property {string[]} statements
 *   A list of formatted DDL statements defining the schema of the database
 *   specified in the request.
 *
 * @class
 * @see [google.spanner.admin.database.v1.GetDatabaseDdlResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/database/v1/spanner_database_admin.proto}
 */
var GetDatabaseDdlResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};
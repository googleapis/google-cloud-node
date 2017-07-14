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
 * A modification to one or more Cloud Spanner rows.  Mutations can be
 * applied to a Cloud Spanner database by sending them in a
 * {@link Commit} call.
 *
 * @property {Object} insert
 *   Insert new rows in a table. If any of the rows already exist,
 *   the write or transaction fails with error `ALREADY_EXISTS`.
 *
 *   This object should have the same structure as [Write]{@link Write}
 *
 * @property {Object} update
 *   Update existing rows in a table. If any of the rows does not
 *   already exist, the transaction fails with error `NOT_FOUND`.
 *
 *   This object should have the same structure as [Write]{@link Write}
 *
 * @property {Object} insertOrUpdate
 *   Like {@link insert}, except that if the row already exists, then
 *   its column values are overwritten with the ones provided. Any
 *   column values not explicitly written are preserved.
 *
 *   This object should have the same structure as [Write]{@link Write}
 *
 * @property {Object} replace
 *   Like {@link insert}, except that if the row already exists, it is
 *   deleted, and the column values provided are inserted
 *   instead. Unlike {@link insert_or_update}, this means any values not
 *   explicitly written become `NULL`.
 *
 *   This object should have the same structure as [Write]{@link Write}
 *
 * @property {Object} delete
 *   Delete rows from a table. Succeeds whether or not the named
 *   rows were present.
 *
 *   This object should have the same structure as [Delete]{@link Delete}
 *
 * @class
 * @see [google.spanner.v1.Mutation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/mutation.proto}
 */
var Mutation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Arguments to {@link insert}, {@link update}, {@link insert_or_update}, and
   * {@link replace} operations.
   *
   * @property {string} table
   *   Required. The table whose rows will be written.
   *
   * @property {string[]} columns
   *   The names of the columns in {@link table} to be written.
   *
   *   The list of columns must contain enough columns to allow
   *   Cloud Spanner to derive values for all primary key columns in the
   *   row(s) to be modified.
   *
   * @property {Object[]} values
   *   The values to be written. `values` can contain more than one
   *   list of values. If it does, then multiple rows are written, one
   *   for each entry in `values`. Each list in `values` must have
   *   exactly as many entries as there are entries in {@link columns}
   *   above. Sending multiple lists is equivalent to sending multiple
   *   `Mutation`s, each containing one `values` entry and repeating
   *   {@link table} and {@link columns}. Individual values in each list are
   *   encoded as described {@link here}.
   *
   *   This object should have the same structure as [google.protobuf.ListValue]{@link external:"google.protobuf.ListValue"}
   *
   * @class
   * @see [google.spanner.v1.Mutation.Write definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/mutation.proto}
   */
  Write: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Arguments to {@link delete} operations.
   *
   * @property {string} table
   *   Required. The table whose rows will be deleted.
   *
   * @property {Object} keySet
   *   Required. The primary keys of the rows within {@link table} to delete.
   *
   *   This object should have the same structure as [KeySet]{@link KeySet}
   *
   * @class
   * @see [google.spanner.v1.Mutation.Delete definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/spanner/v1/mutation.proto}
   */
  Delete: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};
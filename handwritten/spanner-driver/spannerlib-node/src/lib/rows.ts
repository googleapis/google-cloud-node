// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ffi, ENCODING_PROTOBUF } from '../ffi/utils.js';
import { spannerLib } from './spannerlib.js';
import { Connection } from './connection.js';
// TODO: Avoid tight coupling to internal paths of full client libraries.
// Unlike other languages like Java, Python , Node client does not export its protos.
// We need to explore how to import protos in Node
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type { google as googleProto } from '@google-cloud/spanner/build/protos/protos.js';
const { google } = pkg;
const ListValue = google.protobuf.ListValue;

/**
 * An iterator over results returned by a SQL query.
 *
 * This class wraps the rows handle from the underlying Go library,
 * providing methods to fetch rows one by one.
 */
export class Rows {
  public connection: Connection;
  public oid: number;
  public closed: boolean;
  private _cachedMetadata: googleProto.spanner.v1.ResultSetMetadata | null =
    null;
  private _cachedStats: googleProto.spanner.v1.ResultSetStats | null = null;
  constructor(connection: Connection, oid: number) {
    if (
      !connection.pool ||
      connection.pool.oid === null ||
      connection.pool.closed
    ) {
      throw new Error(
        'Cannot create Rows: Connection is not bound to an active Pool or Pool is closed'
      );
    }
    if (connection.closed || connection.oid === null) {
      throw new Error('Cannot create Rows: Connection is closed or invalid');
    }
    this.connection = connection;
    this.oid = oid;
    this.closed = false;
    spannerLib.register(this, {
      type: 'rows',
      poolId: connection.pool!.oid!,
      connectionId: connection.oid!,
      rowsId: oid,
    });
  }

  /**
   * Fetches the next row of data.
   *
   * @returns {Promise<googleProto.protobuf.ListValue | null>} A Promise that resolves to a ListValue containing the row data, or null if there are no more rows.
   * @throws {Error} If the rows are already closed.
   * @throws {SpannerLibError} If fetching fails in the Go library.
   */
  async next(): Promise<googleProto.protobuf.ListValue | null> {
    this.ensureOpenAndValid();

    const handled = await ffi.invokeAsync(
      'Next',
      this.connection.pool!.oid!,
      this.connection.oid!,
      this.oid,
      1,
      ENCODING_PROTOBUF
    );

    if (!handled.protobufBytes || handled.protobufBytes.length === 0) {
      return null;
    }

    return ListValue.decode(handled.protobufBytes);
  }

  /**
   * Retrieves the metadata for the result set.
   *
   * @returns {Promise<googleProto.spanner.v1.ResultSetMetadata | null>} A Promise resolving to the ResultSetMetadata object.
   */
  async metadata(): Promise<googleProto.spanner.v1.ResultSetMetadata | null> {
    this.ensureOpenAndValid();

    if (this._cachedMetadata) {
      return this._cachedMetadata;
    }

    const handled = await ffi.invokeAsync(
      'Metadata',
      this.connection.pool!.oid!,
      this.connection.oid!,
      this.oid
    );

    if (!handled.protobufBytes || handled.protobufBytes.length === 0) {
      return null;
    }

    this._cachedMetadata = google.spanner.v1.ResultSetMetadata.decode(
      handled.protobufBytes
    );
    return this._cachedMetadata;
  }

  /**
   * Retrieves the stats for the result set.
   *
   * @returns {Promise<googleProto.spanner.v1.ResultSetStats | null>} A Promise resolving to the ResultSetStats object.
   */
  async resultSetStats(): Promise<googleProto.spanner.v1.ResultSetStats | null> {
    this.ensureOpenAndValid();

    if (this._cachedStats) {
      return this._cachedStats;
    }

    const handled = await ffi.invokeAsync(
      'ResultSetStats',
      this.connection.pool!.oid!,
      this.connection.oid!,
      this.oid
    );

    if (!handled.protobufBytes || handled.protobufBytes.length === 0) {
      return null;
    }

    this._cachedStats = google.spanner.v1.ResultSetStats.decode(
      handled.protobufBytes
    );
    return this._cachedStats;
  }

  /**
   * Advances to the next result set (for multi-statement query results or batch DML).
   *
   * @returns {Promise<googleProto.spanner.v1.ResultSetMetadata | null>} A Promise resolving to the next ResultSetMetadata if available, otherwise null.
   */
  async nextResultSet(): Promise<googleProto.spanner.v1.ResultSetMetadata | null> {
    this.ensureOpenAndValid();

    const handled = await ffi.invokeAsync(
      'NextResultSet',
      this.connection.pool!.oid!,
      this.connection.oid!,
      this.oid
    );

    this._cachedMetadata = null;
    this._cachedStats = null;

    if (!handled.protobufBytes || handled.protobufBytes.length === 0) {
      return null;
    }

    this._cachedMetadata = google.spanner.v1.ResultSetMetadata.decode(
      handled.protobufBytes
    );
    return this._cachedMetadata;
  }

  /**
   * Returns the exact or lower bound row/update count if present in ResultSetStats.
   *
   * @returns {Promise<number>} A Promise resolving to the update count, or -1 if stats/count are not available.
   */
  async updateCount(): Promise<number> {
    const stats = (await this.resultSetStats()) as {
      rowCountExact?: unknown;
      rowCountLowerBound?: unknown;
    };
    if (!stats) {
      return -1;
    }
    if (stats.rowCountExact !== undefined && stats.rowCountExact !== null) {
      return typeof stats.rowCountExact === 'object'
        ? Number(stats.rowCountExact.toString())
        : Number(stats.rowCountExact);
    }
    if (
      stats.rowCountLowerBound !== undefined &&
      stats.rowCountLowerBound !== null
    ) {
      return typeof stats.rowCountLowerBound === 'object'
        ? Number(stats.rowCountLowerBound.toString())
        : Number(stats.rowCountLowerBound);
    }
    return -1;
  }

  /**
   * Closes the rows iterator and asynchronously releases the associated native resources.
   *
   * Marks the current iterator as closed, preventing subsequent `.next()` invocations, and dispatches an asynchronous `CloseRows` request to the native Go library via the C++ bridge layer. It finally unregisters the instance from the global garbage collection `FinalizationRegistry`.
   *
   * @returns {Promise<void>} A Promise that resolves successfully once the background thread finishes the native release operation.
   */
  async close(): Promise<void> {
    if (!this.closed) {
      this.closed = true;
      try {
        if (
          this.connection.pool &&
          !this.connection.pool.closed &&
          !this.connection.closed &&
          this.connection.pool.oid !== null &&
          this.connection.oid !== null
        ) {
          await ffi.invokeAsync(
            'CloseRows',
            this.connection.pool!.oid,
            this.connection.oid,
            this.oid
          );
        }
      } finally {
        spannerLib.unregister(this);
      }
    }
  }

  private ensureOpenAndValid(): void {
    if (this.closed) {
      throw new Error('Rows are already closed');
    }
    if (
      !this.connection ||
      this.connection.closed ||
      this.connection.oid === null
    ) {
      throw new Error('Connection is closed or invalid');
    }
    if (
      !this.connection.pool ||
      this.connection.pool.oid === null ||
      this.connection.pool.closed
    ) {
      throw new Error(
        'Connection must be bound to an active and open Pool to fetch rows'
      );
    }
  }
}

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

import { ffi } from '../ffi/utils.js';
import { spannerLib } from './spannerlib.js';
import { Pool } from './pool.js';
import { Rows } from './rows.js';
// TODO: Avoid tight coupling to internal paths of full client libraries.
// Unlike other languages like Java, Python , Node client does not export its protos.
import pkg from '@google-cloud/spanner/build/protos/protos.js';
const { google } = pkg;
import type { google as GoogleProto } from '@google-cloud/spanner/build/protos/protos.js';

/**
 * Manages a connection to the Spanner database.
 *
 * This class wraps the connection handle from the underlying Go library,
 * providing methods to execute SQL statements and manage transactions.
 */
export class Connection {
  public pool: Pool | null;
  public oid: number | null;
  public closed: boolean;

  /**
   * Creates a new connection within the specified pool.
   *
   * @param pool The pool to create the connection in.
   * @returns A Promise that resolves to a new Connection instance.
   * @throws {SpannerLibError} If creation fails in the Go library.
   */
  static async create(pool: Pool): Promise<Connection> {
    if (pool.closed || pool.oid === null) {
      throw new Error('Cannot create connection: Pool is closed or invalid');
    }
    const c = new Connection();
    c.pool = pool;

    const handled = await ffi.invokeAsync('CreateConnection', pool.oid);

    c.oid = handled.objectId;
    spannerLib.register(c, {
      type: 'connection',
      poolId: pool.oid,
      connectionId: c.oid!,
    });
    return c;
  }

  constructor() {
    this.pool = null;
    this.oid = null;
    this.closed = false;
  }

  /**
   * Executes a SQL statement on this connection.
   *
   * @param request A SQL string or ExecuteSqlRequest object.
   * @returns A Promise that resolves to a Rows instance containing results.
   */
  async execute(
    request: string | GoogleProto.spanner.v1.IExecuteSqlRequest
  ): Promise<Rows> {
    this.ensureOpenAndValid();

    const requestObj = typeof request === 'string' ? { sql: request } : request;
    const ExecuteSqlRequestProto = google.spanner.v1.ExecuteSqlRequest;
    const serializedPb = Buffer.from(
      ExecuteSqlRequestProto.encode(requestObj).finish()
    );

    const rowsResult = await ffi.invokeAsync(
      'Execute',
      this.pool!.oid,
      this.oid,
      serializedPb
    );
    const rowsId = rowsResult.objectId;

    return new Rows(this, rowsId);
  }

  /**
   * Begins an explicit Spanner transaction on this connection.
   *
   * @param options Optional transaction options (e.g., read-only vs read-write).
   */
  async beginTransaction(
    options?: GoogleProto.spanner.v1.ITransactionOptions
  ): Promise<void> {
    this.ensureOpenAndValid();
    const TransactionOptionsProto = google.spanner.v1.TransactionOptions;
    const serializedPb = options
      ? Buffer.from(TransactionOptionsProto.encode(options).finish())
      : Buffer.alloc(0);

    await ffi.invokeAsync(
      'BeginTransaction',
      this.pool!.oid,
      this.oid,
      serializedPb
    );
  }

  /**
   * Commits the active transaction on this connection.
   *
   * @returns A Promise that resolves to the CommitResponse (containing commitTimestamp).
   */
  async commit(): Promise<GoogleProto.spanner.v1.ICommitResponse> {
    this.ensureOpenAndValid();
    const res = await ffi.invokeAsync('Commit', this.pool!.oid, this.oid);
    if (res.protobufBytes && res.protobufBytes.length > 0) {
      return google.spanner.v1.CommitResponse.decode(res.protobufBytes);
    }
    return {};
  }

  /**
   * Rolls back the active transaction on this connection.
   */
  async rollback(): Promise<void> {
    this.ensureOpenAndValid();
    await ffi.invokeAsync('Rollback', this.pool!.oid, this.oid);
  }

  /**
   * Writes an array of mutations or a MutationGroup to Spanner.
   *
   * @param mutations An array of Mutations or a MutationGroup object.
   * @returns A Promise that resolves to the CommitResponse, or null if buffered in an active transaction.
   */
  async writeMutations(
    mutations:
      | GoogleProto.spanner.v1.BatchWriteRequest.IMutationGroup
      | GoogleProto.spanner.v1.IMutation[]
  ): Promise<GoogleProto.spanner.v1.ICommitResponse | null> {
    this.ensureOpenAndValid();

    const mutationGroup = Array.isArray(mutations)
      ? { mutations }
      : (mutations as GoogleProto.spanner.v1.BatchWriteRequest.IMutationGroup);
    const MutationGroupProto =
      google.spanner.v1.BatchWriteRequest.MutationGroup;
    const serializedPb = Buffer.from(
      MutationGroupProto.encode(mutationGroup).finish()
    );

    const res = await ffi.invokeAsync(
      'WriteMutations',
      this.pool!.oid,
      this.oid,
      serializedPb
    );
    if (res.protobufBytes && res.protobufBytes.length > 0) {
      return google.spanner.v1.CommitResponse.decode(res.protobufBytes);
    }
    return null;
  }

  /**
   * Executes a batch of DML statements on this connection.
   *
   * @param request An array of SQL strings/objects or ExecuteBatchDmlRequest object.
   * @returns A Promise that resolves to the ExecuteBatchDmlResponse.
   */
  async executeBatch(
    request:
      | string[]
      | GoogleProto.spanner.v1.ExecuteBatchDmlRequest.IStatement[]
      | GoogleProto.spanner.v1.IExecuteBatchDmlRequest
  ): Promise<GoogleProto.spanner.v1.IExecuteBatchDmlResponse> {
    this.ensureOpenAndValid();

    let requestObj: GoogleProto.spanner.v1.IExecuteBatchDmlRequest;
    if (Array.isArray(request)) {
      const stmts = request.map((s) =>
        typeof s === 'string'
          ? { sql: s }
          : (s as GoogleProto.spanner.v1.ExecuteBatchDmlRequest.IStatement)
      );
      requestObj = { statements: stmts };
    } else {
      requestObj = request;
    }

    const ExecuteBatchDmlRequestProto =
      google.spanner.v1.ExecuteBatchDmlRequest;
    const serializedPb = Buffer.from(
      ExecuteBatchDmlRequestProto.encode(requestObj).finish()
    );

    const res = await ffi.invokeAsync(
      'ExecuteBatch',
      this.pool!.oid,
      this.oid,
      serializedPb
    );
    if (res.protobufBytes && res.protobufBytes.length > 0) {
      return google.spanner.v1.ExecuteBatchDmlResponse.decode(
        res.protobufBytes
      );
    }
    return { resultSets: [] };
  }

  /**
   * Closes the connection and releases associated resources.
   *
   * @returns A Promise that resolves when the connection is closed.
   */
  async close(): Promise<void> {
    if (!this.closed) {
      this.closed = true;
      try {
        if (
          this.pool &&
          !this.pool.closed &&
          this.pool.oid !== null &&
          this.oid !== null
        ) {
          await ffi.invokeAsync('CloseConnection', this.pool.oid, this.oid);
        }
      } finally {
        spannerLib.unregister(this);
      }
    }
  }

  private ensureOpenAndValid(): void {
    if (this.closed) {
      throw new Error('Connection is already closed');
    }
    if (!this.pool || this.pool.oid === null || this.oid === null) {
      throw new Error('Connection is not bound to a Pool or invalid');
    }
  }
}

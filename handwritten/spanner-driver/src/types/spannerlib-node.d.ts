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

/**
 * TODO(spannerlib-node-package): This is a temporary ambient type declaration file.
 *
 * It provides TypeScript compiler type definitions for the native `spannerlib-node` bridge
 * during development and CI compilation before the `@google-cloud/spannerlib-node-*`
 * platform packages are published to npm.
 *
 * Once the pre-compiled platform packages are published to npm with their own bundled
 * type declarations, this file should be removed.
 */
declare module 'spannerlib-node' {
  /**
   * Represents an active database connection to Google Spanner via CGO.
   */
  export interface Connection {
    /** PostgreSQL transaction state indicator ('I' for Idle, 'T' for Active Transaction, 'E' for Error). */
    transactionState?: 'I' | 'T' | 'E';

    /** Whether the connection has been closed. */
    closed?: boolean;

    /**
     * Executes a SQL statement on Google Spanner.
     *
     * @param sqlOrConfig - SQL statement text string or structured query execution request.
     * @returns Promise resolving to a streaming Rows result handle.
     */
    execute(
      sqlOrConfig:
        | string
        | {
            sql: string;
            params?: {fields?: Record<string, unknown>};
          },
    ): Promise<Rows>;

    /**
     * Closes the native connection.
     */
    close(): Promise<void>;
  }

  /**
   * Represents a native connection pool managing underlying gRPC channels.
   */
  export interface Pool {
    /** Whether the pool has been closed. */
    closed?: boolean;

    /**
     * Creates a new Connection instance from this native pool.
     */
    createConnection(): Promise<Connection>;

    /**
     * Closes all connections and underlying gRPC channels in this pool.
     */
    close(): Promise<void>;
  }

  /**
   * Static factory for creating native Spanner connection pools.
   */
  export const Pool: {
    /**
     * Creates a native Spanner connection pool for the given DSN.
     *
     * @param dsn - Fully-qualified Spanner database path (projects/.../instances/.../databases/...).
     */
    create(dsn: string): Promise<Pool>;
  };

  /**
   * Streaming row iterator returned from native SQL execution.
   */
  export interface Rows {
    /**
     * Returns column metadata for the executed query.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata(): Promise<any>;

    /**
     * Fetches the next row as a protobuf ListValue, or null if all rows have been consumed.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    next(): Promise<any | null>;

    /**
     * Returns the update count (number of affected rows for DML).
     */
    updateCount(): Promise<number>;

    /**
     * Returns query execution stats (such as affected row count for DML).
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resultSetStats(): Promise<any>;

    /**
     * Advances to the next result set in multi-statement queries.
     */
    nextResultSet?(): Promise<boolean | null | unknown>;

    /**
     * Closes the native rows stream.
     */
    close(): Promise<void>;
  }

  /**
   * Error thrown by native Spanner CGO operations.
   */
  export class SpannerLibError extends Error {
    /** Spanner / gRPC status code. */
    code?: number;
  }
}

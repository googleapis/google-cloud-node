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

import type {Pool} from '../../src/lib/native.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type {google as GoogleProto} from '@google-cloud/spanner/build/protos/protos.js';

const {google} = pkg as {google: typeof GoogleProto};

export class MockNativeRows {
  public oid = 1;
  public closed = false;
  private rowIndex = 0;

  constructor(
    private readonly rowData: GoogleProto.protobuf.IListValue[] = [],
    private readonly metaData: GoogleProto.spanner.v1.IResultSetMetadata | null = null,
    private readonly rowUpdateCount = -1,
  ) {}

  async next(): Promise<GoogleProto.protobuf.IListValue | null> {
    if (this.closed) throw new Error('Rows are closed');
    if (this.rowIndex >= this.rowData.length) {
      return null;
    }
    const row = this.rowData[this.rowIndex];
    this.rowIndex++;
    return row;
  }

  async metadata(): Promise<GoogleProto.spanner.v1.IResultSetMetadata | null> {
    if (this.closed) throw new Error('Rows are closed');
    return this.metaData;
  }

  async updateCount(): Promise<number> {
    if (this.closed) throw new Error('Rows are closed');
    return this.rowUpdateCount;
  }

  async resultSetStats(): Promise<GoogleProto.spanner.v1.IResultSetStats | null> {
    if (this.closed) throw new Error('Rows are closed');
    if (this.rowUpdateCount >= 0) {
      return {
        rowCountExact: this.rowUpdateCount,
      };
    }
    return null;
  }

  async nextResultSet(): Promise<boolean> {
    if (this.closed) throw new Error('Rows are closed');
    return false;
  }

  async close(): Promise<void> {
    this.closed = true;
  }
}

export class MockNativeConnection {
  public oid: number | null = 1;
  public closed = false;
  public transactionState: 'I' | 'T' | 'E' = 'I';

  async execute(
    request: string | GoogleProto.spanner.v1.IExecuteSqlRequest,
  ): Promise<MockNativeRows> {
    if (this.closed) throw new Error('Connection is closed');

    const sql = (
      typeof request === 'string' ? request : request.sql || ''
    ).trim();
    const upper = sql.toUpperCase();

    if (upper.startsWith('BEGIN') || upper.startsWith('START TRANSACTION')) {
      this.transactionState = 'T';
      return new MockNativeRows([], null, -1);
    }

    if (upper.startsWith('COMMIT')) {
      this.transactionState = 'I';
      return new MockNativeRows([], null, -1);
    }

    if (upper.startsWith('ROLLBACK')) {
      this.transactionState = 'I';
      return new MockNativeRows([], null, -1);
    }

    if (upper.includes('FAIL_QUERY') || upper.includes('NON_EXISTENT_TABLE')) {
      if (this.transactionState === 'T') {
        this.transactionState = 'E';
      }
      throw new Error('Query execution failed');
    }

    if (upper.startsWith('SELECT 1')) {
      return new MockNativeRows(
        [
          {
            values: [{stringValue: '1'}],
          },
        ],
        {
          rowType: {
            fields: [
              {
                name: '?column?',
                type: {code: google.spanner.v1.TypeCode.INT64},
              },
            ],
          },
        },
      );
    }

    return new MockNativeRows([], null, -1);
  }

  async beginTransaction(): Promise<void> {
    if (this.closed) throw new Error('Connection is closed');
    this.transactionState = 'T';
  }

  async commit(): Promise<GoogleProto.spanner.v1.ICommitResponse> {
    if (this.closed) throw new Error('Connection is closed');
    this.transactionState = 'I';
    return {
      commitTimestamp: {seconds: 1723460000, nanos: 0},
    };
  }

  async rollback(): Promise<void> {
    if (this.closed) throw new Error('Connection is closed');
    this.transactionState = 'I';
  }

  async close(): Promise<void> {
    this.closed = true;
    this.oid = null;
    this.transactionState = 'I';
  }
}

export class MockNativePool {
  public oid: number | null = 1;
  public closed = false;
  public activeConnection: MockNativeConnection = new MockNativeConnection();

  async createConnection(): Promise<MockNativeConnection> {
    if (this.closed) throw new Error('Pool is closed');
    return this.activeConnection;
  }

  async close(): Promise<void> {
    this.closed = true;
    this.oid = null;
  }
}

export function createMockPool(): Pool {
  return new MockNativePool() as unknown as Pool;
}

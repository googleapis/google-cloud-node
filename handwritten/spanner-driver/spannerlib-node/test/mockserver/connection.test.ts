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

// Suppress no-explicit-any for decoding raw dynamic row structs returned by Spanner
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as assert from 'assert';
import { Pool } from '../../src/lib/pool.js';
import {
  MockSpanner,
  StatementResult,
  createSelect1ResultSet,
  createSelect1ResultSetWithStats,
  createResultSetWithAllDataTypes,
} from './mockspanner.js';
import { status } from '@grpc/grpc-js';
import pkg from '@google-cloud/spanner/build/protos/protos.js';
const { google } = pkg;

describe('End-to-End Execution on MockServer', () => {
  let mock: MockSpanner;
  let port: number;
  let pool: Pool;

  before(async () => {
    mock = MockSpanner.create();
    port = await mock.listen('127.0.0.1:0');
    const connStr = `localhost:${port}/projects/p/instances/i/databases/d?useplaintext=true`;
    pool = await Pool.create(connStr);
  });

  after(async () => {
    if (pool) {
      await pool.close();
    }
    mock?.close();
  });

  describe('Basic Operations', () => {
    it('should execute SQL end-to-end and Row fetching', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      assert.ok(connection, 'Connection created');

      const rows = await connection.execute('SELECT 1');
      assert.ok(rows, 'Rows returned');

      const row: any = await rows.next();
      assert.ok(row, 'Row decoded successfully');
      assert.strictEqual(
        row.values[0].stringValue,
        '1',
        'Decoded value matches result'
      );
      assert.strictEqual(await rows.next(), null, 'Iterator complete');

      await rows.close();
      await connection.close();
    });

    it('should decode all Spanner data types correctly across the FFI boundary', async () => {
      mock.putStatementResult(
        'SELECT * FROM AllTypes',
        StatementResult.resultSet(createResultSetWithAllDataTypes())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT * FROM AllTypes');
      const row: any = await rows.next();
      assert.ok(row, 'Row decoded successfully');

      assert.strictEqual(row.values[0].boolValue, true, 'BOOL decoded');
      assert.strictEqual(row.values[1].stringValue, '1', 'INT64 decoded');
      assert.strictEqual(row.values[2].numberValue, 3.14, 'FLOAT64 decoded');
      assert.strictEqual(row.values[4].stringValue, 'One', 'STRING decoded');

      await rows.close();
      await connection.close();
    });

    it('should properly handle backend gRPC errors and propagate them', async () => {
      mock.putStatementResult(
        'SELECT * FROM InvalidTable',
        StatementResult.error(new Error('Table InvalidTable not found'))
      );

      const connection = await pool.createConnection();
      await assert.rejects(async () => {
        await connection.execute('SELECT * FROM InvalidTable');
      }, /InvalidTable/);

      await connection.close();
    });

    it('should execute query with parameters successfully', async () => {
      mock.putStatementResult(
        'SELECT FirstName FROM Singers WHERE SingerId = @id',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      const ExecuteSqlRequest = google.spanner.v1.ExecuteSqlRequest;
      const rows = await connection.execute(
        ExecuteSqlRequest.create({
          sql: 'SELECT FirstName FROM Singers WHERE SingerId = @id',
          params: { fields: { id: { stringValue: '50' } } },
          paramTypes: { id: { code: google.spanner.v1.TypeCode.INT64 } },
        })
      );
      const row: any = await rows.next();
      assert.strictEqual(row.values[0].stringValue, '1');
      await rows.close();
      await connection.close();
    });

    it('should execute client-side virtual statements (show/set)', async () => {
      const connection = await pool.createConnection();
      assert.ok(connection);

      // Default variable check
      let rows = await connection.execute(
        'SHOW VARIABLE retry_aborts_internally'
      );
      assert.ok(rows);
      let row: any = await rows.next();
      assert.ok(row);
      assert.strictEqual(row.values[0].boolValue, true);
      assert.strictEqual(await rows.next(), null);
      await rows.close();

      // Set variable
      rows = await connection.execute('SET retry_aborts_internally = false');
      assert.ok(rows);
      assert.strictEqual(await rows.next(), null);
      await rows.close();

      // Re-verify variable
      rows = await connection.execute('SHOW VARIABLE retry_aborts_internally');
      assert.ok(rows);
      row = await rows.next();
      assert.ok(row);
      assert.strictEqual(row.values[0].boolValue, false);
      assert.strictEqual(await rows.next(), null);
      await rows.close();

      await connection.close();
    });
  });

  describe('Connection & Mutation Operations', () => {
    it('should handle concurrent query execution across multiple connections', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connections = await Promise.all([
        pool.createConnection(),
        pool.createConnection(),
        pool.createConnection(),
      ]);

      assert.strictEqual(connections.length, 3, '3 concurrent connections');

      const results = await Promise.all(
        connections.map((c) => c.execute('SELECT 1'))
      );

      for (const rows of results) {
        const row: any = await rows.next();
        assert.strictEqual(row.values[0].stringValue, '1');
        await rows.close();
      }

      await Promise.all(connections.map((c) => c.close()));
    });

    it('should write mutations successfully', async () => {
      const connection = await pool.createConnection();
      const Mutation = google.spanner.v1.Mutation;
      const mutation = Mutation.create({
        insert: {
          table: 'Users',
          columns: ['id', 'name'],
          values: [
            { values: [{ stringValue: '1' }, { stringValue: 'Alice' }] },
          ],
        },
      });
      const res = await connection.writeMutations([mutation]);
      assert.ok(res, 'CommitResponse returned');
      assert.ok(res.commitTimestamp, 'Commit timestamp present');
      await connection.close();
    });

    it('should buffer mutations when an active transaction exists', async () => {
      const connection = await pool.createConnection();
      await connection.beginTransaction();

      const Mutation = google.spanner.v1.Mutation;
      const mutation = Mutation.create({
        insert: {
          table: 'Users',
          columns: ['id', 'name'],
          values: [{ values: [{ stringValue: '2' }, { stringValue: 'Bob' }] }],
        },
      });
      const res = await connection.writeMutations([mutation]);
      assert.strictEqual(res, null, 'Buffered mutation returns null/nil');

      const commitResp = await connection.commit();
      assert.ok(commitResp, 'Commit response returned upon commit');
      assert.ok(commitResp.commitTimestamp, 'Commit timestamp present');

      await connection.close();
    });

    it('should throw error when writing mutations in a read-only transaction', async () => {
      const connection = await pool.createConnection();
      assert.ok(connection);

      // Begin a Read-Only transaction (options: readOnly = {})
      await connection.beginTransaction({ readOnly: {} });

      const Mutation = google.spanner.v1.Mutation;
      const mutation = Mutation.create({
        insert: {
          table: 'Users',
          columns: ['id', 'name'],
          values: [{ values: [{ stringValue: '2' }, { stringValue: 'Bob' }] }],
        },
      });

      await assert.rejects(async () => {
        await connection.writeMutations([mutation]);
      }, /read-only transactions/i);

      await connection.rollback();
      await connection.close();
    });
  });

  describe('Transaction Operations', () => {
    it('should manage explicit transaction lifecycle (beginTransaction, commit)', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      await connection.beginTransaction();

      const rows = await connection.execute('SELECT 1');
      const row: any = await rows.next();
      assert.strictEqual(row.values[0].stringValue, '1');
      await rows.close();

      const commitResp = await connection.commit();
      assert.ok(commitResp, 'Commit response returned');
      assert.ok(commitResp.commitTimestamp, 'Commit timestamp present');

      await connection.close();
    });

    it('should manage explicit transaction rollback (beginTransaction, rollback)', async () => {
      const connection = await pool.createConnection();
      await connection.beginTransaction();
      await connection.rollback();
      await connection.close();
    });

    it('should execute read-only transaction successfully', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      const TransactionOptions = google.spanner.v1.TransactionOptions;
      await connection.beginTransaction(
        TransactionOptions.create({
          readOnly: { strong: true },
        })
      );

      const rows = await connection.execute('SELECT 1');
      const row: any = await rows.next();
      assert.strictEqual(row.values[0].stringValue, '1');
      await rows.close();

      await connection.commit();

      await connection.close();
    });

    it('should throw error when calling beginTransaction twice', async () => {
      const connection = await pool.createConnection();
      await connection.beginTransaction();
      await assert.rejects(async () => {
        await connection.beginTransaction();
      });
      await connection.rollback();
      await connection.close();
    });
  });

  describe('Batch Operations', () => {
    it('should execute executeBatch successfully', async () => {
      mock.putStatementResult(
        'UPDATE Users SET status = "ACTIVE" WHERE id = 1',
        StatementResult.updateCount(1)
      );

      const connection = await pool.createConnection();
      const res = await connection.executeBatch([
        'UPDATE Users SET status = "ACTIVE" WHERE id = 1',
      ]);
      assert.ok(res, 'ExecuteBatchDmlResponse returned');
      assert.strictEqual(
        Number(res.resultSets![0].stats!.rowCountExact),
        1,
        'Row count matches'
      );
      await connection.close();
    });

    it('should execute query and batch DML using full Protobuf request objects', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );
      mock.putStatementResult(
        'UPDATE Users SET status = "ACTIVE" WHERE id = 1',
        StatementResult.updateCount(1)
      );

      const connection = await pool.createConnection();

      const ExecuteSqlRequest = google.spanner.v1.ExecuteSqlRequest;
      const rows = await connection.execute(
        ExecuteSqlRequest.create({ sql: 'SELECT 1' })
      );
      const row: any = await rows.next();
      assert.strictEqual(row.values[0].stringValue, '1');
      await rows.close();

      const ExecuteBatchDmlRequest = google.spanner.v1.ExecuteBatchDmlRequest;
      const res = await connection.executeBatch(
        ExecuteBatchDmlRequest.create({
          statements: [
            { sql: 'UPDATE Users SET status = "ACTIVE" WHERE id = 1' },
          ],
        })
      );
      assert.strictEqual(Number(res.resultSets![0].stats!.rowCountExact), 1);

      await connection.close();
    });
  });

  describe('Rows & Result Set Operations', () => {
    it('should retrieve metadata from Rows object', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT 1');
      assert.ok(rows);

      const metadata = await rows.metadata();
      assert.ok(metadata);
      assert.ok(metadata.rowType);
      assert.strictEqual(metadata.rowType.fields!.length, 1);

      await rows.close();
      await connection.close();
    });

    it('should retrieve stats and updateCount from Rows object', async () => {
      mock.putStatementResult(
        'UPDATE Singers SET Name = "Bob"',
        StatementResult.updateCount(100)
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('UPDATE Singers SET Name = "Bob"');
      assert.ok(rows);

      while ((await rows.next()) !== null) {
        // Consume all rows
      }

      const stats = await rows.resultSetStats();
      assert.ok(stats);
      assert.strictEqual(Number(stats.rowCountExact), 100);

      const count = await rows.updateCount();
      assert.strictEqual(count, 100);

      await rows.close();
      await connection.close();
    });

    it('should retrieve stats from a SELECT query after consuming all rows', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSetWithStats())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute({
        sql: 'SELECT 1',
        queryMode: google.spanner.v1.ExecuteSqlRequest.QueryMode.PROFILE,
      });
      assert.ok(rows);

      while ((await rows.next()) !== null) {
        // Consume all rows
      }

      const stats = await rows.resultSetStats();
      assert.ok(stats);
      assert.ok(stats.queryStats);
      assert.ok(stats.queryStats.fields);
      assert.strictEqual(
        stats.queryStats.fields['elapsed_time']?.stringValue,
        '1ms'
      );

      await rows.close();
      await connection.close();
    });

    it('should advance to next result set using nextResultSet()', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );
      mock.putStatementResult(
        'SELECT 2',
        StatementResult.resultSet(createSelect2ResultSet())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT 1; SELECT 2');
      assert.ok(rows);

      // Consume first result set
      const row1 = await rows.next();
      assert.ok(row1);
      assert.strictEqual(row1.values[0].stringValue, '1');
      assert.strictEqual(await rows.next(), null); // End of first result set

      // Move to next result set
      const meta2 = await rows.nextResultSet();
      assert.ok(meta2);
      assert.ok(meta2.rowType);
      assert.strictEqual(meta2.rowType.fields![0].name, 'COL2');

      // Consume second result set
      const row2 = await rows.next();
      assert.ok(row2);
      assert.strictEqual(row2.values[0].stringValue, '2');
      assert.strictEqual(await rows.next(), null); // End of second result set

      // There should be no more result sets
      assert.strictEqual(await rows.nextResultSet(), null);

      await rows.close();
      await connection.close();
    });

    it('should return null when calling nextResultSet() on a single query', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT 1');
      assert.ok(rows);

      while ((await rows.next()) !== null) {
        // Consume all rows
      }

      assert.strictEqual(await rows.nextResultSet(), null);

      await rows.close();
      await connection.close();
    });

    it('should clear and update stats when moving to next result set', async () => {
      mock.putStatementResult(
        'UPDATE Singers SET FirstName = "A" WHERE SingerId = 1',
        StatementResult.updateCount(10)
      );
      mock.putStatementResult(
        'UPDATE Singers SET FirstName = "B" WHERE SingerId = 2',
        StatementResult.updateCount(20)
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute(
        'UPDATE Singers SET FirstName = "A" WHERE SingerId = 1; UPDATE Singers SET FirstName = "B" WHERE SingerId = 2'
      );
      assert.ok(rows);

      while ((await rows.next()) !== null) {
        // Consume all rows
      }

      const stats1 = await rows.resultSetStats();
      assert.ok(stats1);
      assert.strictEqual(Number(stats1.rowCountExact), 10);

      const meta2 = await rows.nextResultSet();
      assert.ok(meta2);

      while ((await rows.next()) !== null) {
        // Consume all rows
      }

      const stats2 = await rows.resultSetStats();
      assert.ok(stats2);
      assert.strictEqual(Number(stats2.rowCountExact), 20);

      await rows.close();
      await connection.close();
    });

    it('should advance through mixed query and DML result sets in a multi-statement execution', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );
      mock.putStatementResult(
        'UPDATE Singers SET FirstName = "A" WHERE SingerId = 1',
        StatementResult.updateCount(5)
      );
      mock.putStatementResult(
        'SELECT 2',
        StatementResult.resultSet(createSelect2ResultSet())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute(
        'SELECT 1; UPDATE Singers SET FirstName = "A" WHERE SingerId = 1; SELECT 2'
      );
      assert.ok(rows);

      // Consume first result set: SELECT 1
      const row1 = await rows.next();
      assert.ok(row1);
      assert.strictEqual(row1.values[0].stringValue, '1');
      const endRow = await rows.next();
      assert.strictEqual(endRow, null); // End of first result set

      // Move to second result set: UPDATE Singers
      const meta2 = await rows.nextResultSet();
      assert.ok(meta2);

      // DML has no rows to fetch
      const endRowDml = await rows.next();
      assert.strictEqual(endRowDml, null);

      // Verify DML stats
      const stats2 = await rows.resultSetStats();
      assert.ok(stats2);
      assert.strictEqual(Number(stats2.rowCountExact), 5);

      // Move to third result set: SELECT 2
      const meta3 = await rows.nextResultSet();
      assert.ok(meta3);
      assert.ok(meta3.rowType);
      assert.strictEqual(meta3.rowType.fields![0].name, 'COL2');

      // Consume third result set: SELECT 2
      const row3 = await rows.next();
      assert.ok(row3);
      assert.strictEqual(row3.values[0].stringValue, '2');
      assert.strictEqual(await rows.next(), null); // End of third result set

      // There should be no more result sets
      const meta4 = await rows.nextResultSet();
      assert.strictEqual(meta4, null);

      await rows.close();
      await connection.close();
    });

    it('should handle multi-statement execution containing errors', async () => {
      mock.putStatementResult(
        'SELECT 1',
        StatementResult.resultSet(createSelect1ResultSet())
      );
      // mock an error for unknown table
      const tableNotFoundError = new Error('Table not found') as any;
      tableNotFoundError.code = status.NOT_FOUND;
      mock.putStatementResult(
        'SELECT * FROM UnknownTable',
        StatementResult.error(tableNotFoundError)
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute(
        'SELECT 1; SELECT * FROM UnknownTable'
      );
      assert.ok(rows);

      // First query (SELECT 1) succeeds
      const row1 = await rows.next();
      assert.ok(row1);
      assert.strictEqual(row1.values[0].stringValue, '1');
      assert.strictEqual(await rows.next(), null);

      // Advancing to the next result set (SELECT * FROM UnknownTable) should throw NotFound error
      await assert.rejects(async () => {
        await rows.nextResultSet();
      }, /Table not found/i);

      await rows.close();
      await connection.close();
    });

    it('should fail fetching next row if connection is closed midway', async () => {
      mock.putStatementResult(
        'SELECT * FROM Singers',
        StatementResult.resultSet(createResultSetWithManyRows())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT * FROM Singers');
      assert.ok(rows);

      // Fetch first row
      const row1 = await rows.next();
      assert.ok(row1);

      // Close connection
      await connection.close();

      // Fetching subsequent rows should throw connection closed/invalid error
      await assert.rejects(async () => {
        await rows.next();
      }, /Connection is closed or invalid/i);

      await rows.close();
    });

    it('should close connection with open rows cleanly without internal errors', async () => {
      mock.putStatementResult(
        'SELECT * FROM Singers',
        StatementResult.resultSet(createResultSetWithManyRows())
      );

      const connection = await pool.createConnection();
      const rows = await connection.execute('SELECT * FROM Singers');
      assert.ok(rows);

      // Fetch first row
      const row1 = await rows.next();
      assert.ok(row1);

      // Close the connection while rows are still open
      await connection.close();

      // Attempting to read more rows should cleanly fail with Connection is closed or invalid
      await assert.rejects(async () => {
        await rows.next();
      }, /Connection is closed or invalid/i);
    });
  });
});

function createResultSetWithManyRows() {
  const fields = [
    google.spanner.v1.StructType.Field.create({
      name: 'SingerId',
      type: { code: google.spanner.v1.TypeCode.INT64 },
    }),
  ];
  const metadata = new google.spanner.v1.ResultSetMetadata({
    rowType: new google.spanner.v1.StructType({
      fields,
    }),
  });
  return google.spanner.v1.ResultSet.create({
    metadata,
    rows: [
      { values: [{ stringValue: '1' }] },
      { values: [{ stringValue: '2' }] },
      { values: [{ stringValue: '3' }] },
    ],
  });
}

function createSelect2ResultSet() {
  const fields = [
    google.spanner.v1.StructType.Field.create({
      name: 'COL2',
      type: { code: google.spanner.v1.TypeCode.INT64 },
    }),
  ];
  const metadata = new google.spanner.v1.ResultSetMetadata({
    rowType: new google.spanner.v1.StructType({
      fields,
    }),
  });
  return google.spanner.v1.ResultSet.create({
    metadata,
    rows: [{ values: [{ stringValue: '2' }] }],
  });
}

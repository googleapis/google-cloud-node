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

import * as assert from 'assert';
import { Rows } from '../src/lib/rows.js';
import { Connection } from '../src/lib/connection.js';
import { Pool } from '../src/lib/pool.js';
import { ffi } from '../src/ffi/utils.js';
import sinon from 'sinon';
import pkg from '@google-cloud/spanner/build/protos/protos.js';
const { google } = pkg;
const ListValue = google.protobuf.ListValue;
const Value = google.protobuf.Value;

describe('Rows', () => {
  let stub: sinon.SinonStub;

  beforeEach(() => {
    stub = sinon.stub(ffi, 'invokeAsync');
  });

  afterEach(() => {
    stub.restore();
  });

  interface MockListValue {
    values: Array<{ stringValue: string }>;
  }

  it('should fetch next row successfully', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    // Create a dummy ListValue
    const listValue = ListValue.create({
      values: [Value.create({ stringValue: '1' })],
    });
    const buffer = ListValue.encode(listValue).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: buffer });

    const row = (await rows.next()) as unknown as MockListValue;

    assert.ok(row, 'Row should be returned');
    assert.strictEqual(row.values.length, 1, 'Row should have 1 value');
    assert.strictEqual(row.values[0].stringValue, '1', 'Value should be "1"');

    assert.strictEqual(
      stub.calledOnce,
      true,
      'invokeAsync should be called once'
    );
    assert.strictEqual(
      stub.firstCall.args[0],
      'Next',
      'First call should be Next'
    );
  });

  it('should return null when no more rows', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: null });

    const row = await rows.next();

    assert.strictEqual(row, null, 'Row should be null');
  });

  it('should retrieve metadata successfully', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    const metadataProto = google.spanner.v1.ResultSetMetadata.create({
      rowType: {
        fields: [{ name: 'col1', type: { code: 'INT64' } }],
      },
    });
    const buffer = google.spanner.v1.ResultSetMetadata.encode(
      metadataProto
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: buffer });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metadata: any = await rows.metadata();
    assert.ok(metadata, 'Metadata should be returned');
    assert.ok(metadata.rowType, 'RowType should exist');
    assert.strictEqual(metadata.rowType.fields[0].name, 'col1');
    assert.strictEqual(stub.firstCall.args[0], 'Metadata');
  });

  it('should retrieve stats successfully', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    const statsProto = google.spanner.v1.ResultSetStats.create({
      rowCountExact: 5,
    });
    const buffer = google.spanner.v1.ResultSetStats.encode(
      statsProto
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: buffer });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stats: any = await rows.resultSetStats();
    assert.ok(stats, 'Stats should be returned');
    assert.strictEqual(Number(stats.rowCountExact), 5);
    assert.strictEqual(stub.firstCall.args[0], 'ResultSetStats');
  });

  it('should advance to next result set successfully', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    const metadataProto = google.spanner.v1.ResultSetMetadata.create({
      rowType: {
        fields: [{ name: 'col2', type: { code: 'STRING' } }],
      },
    });
    const buffer = google.spanner.v1.ResultSetMetadata.encode(
      metadataProto
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: buffer });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metadata: any = await rows.nextResultSet();
    assert.ok(metadata, 'Metadata should be returned');
    assert.strictEqual(metadata.rowType.fields[0].name, 'col2');
    assert.strictEqual(stub.firstCall.args[0], 'NextResultSet');
  });

  it('should calculate updateCount correctly for exact and lower bound values', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    // Exact count test
    const exactStats = google.spanner.v1.ResultSetStats.create({
      rowCountExact: 12,
    });
    const exactBuffer = google.spanner.v1.ResultSetStats.encode(
      exactStats
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: exactBuffer });
    const countExact = await rows.updateCount();
    assert.strictEqual(countExact, 12);

    stub.restore();
    stub = sinon.stub(ffi, 'invokeAsync');

    // Lower bound count test
    const rowsLower = new Rows(connection, 4);
    const lowerBoundStats = google.spanner.v1.ResultSetStats.create({
      rowCountLowerBound: 42,
    });
    const lowerBoundBuffer = google.spanner.v1.ResultSetStats.encode(
      lowerBoundStats
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: lowerBoundBuffer });
    const countLower = await rowsLower.updateCount();
    assert.strictEqual(countLower, 42);
  });

  it('should throw error on operations if connection is closed', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);
    connection.closed = true;

    await assert.rejects(async () => {
      await rows.next();
    }, /Connection is closed or invalid/);

    await assert.rejects(async () => {
      await rows.metadata();
    }, /Connection is closed or invalid/);

    await assert.rejects(async () => {
      await rows.resultSetStats();
    }, /Connection is closed or invalid/);

    await assert.rejects(async () => {
      await rows.nextResultSet();
    }, /Connection is closed or invalid/);
  });

  it('should throw error on operations if rows are closed', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);
    rows.closed = true;

    await assert.rejects(async () => {
      await rows.next();
    }, /Rows are already closed/);

    await assert.rejects(async () => {
      await rows.metadata();
    }, /Rows are already closed/);

    await assert.rejects(async () => {
      await rows.resultSetStats();
    }, /Rows are already closed/);

    await assert.rejects(async () => {
      await rows.nextResultSet();
    }, /Rows are already closed/);
  });

  it('should cache metadata and return it without repeating FFI calls', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    // Mock metadata response
    const mockMeta = google.spanner.v1.ResultSetMetadata.create({
      rowType: new google.spanner.v1.StructType({
        fields: [
          { name: 'col1', type: { code: google.spanner.v1.TypeCode.STRING } },
        ],
      }),
    });
    const metaBuffer = google.spanner.v1.ResultSetMetadata.encode(
      mockMeta
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: metaBuffer });

    // Call metadata twice
    const meta1 = await rows.metadata();
    const meta2 = await rows.metadata();

    assert.ok(meta1);
    assert.strictEqual(meta1, meta2);
    assert.strictEqual(
      stub.callCount,
      1,
      'FFI Metadata should be invoked exactly once'
    );
  });

  it('should cache resultSetStats and return it without repeating FFI calls', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    // Mock stats response
    const mockStats = google.spanner.v1.ResultSetStats.create({
      rowCountExact: 100,
    });
    const statsBuffer = google.spanner.v1.ResultSetStats.encode(
      mockStats
    ).finish() as Buffer;

    stub
      .onFirstCall()
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: statsBuffer });

    // Call stats twice
    const stats1 = await rows.resultSetStats();
    const stats2 = await rows.resultSetStats();

    assert.ok(stats1);
    assert.strictEqual(stats1, stats2);
    assert.strictEqual(
      stub.callCount,
      1,
      'FFI ResultSetStats should be invoked exactly once'
    );
  });

  it('should clear cached metadata and stats when calling nextResultSet()', async () => {
    const pool = new Pool(
      'node-esm',
      'projects/test/instances/test/databases/test'
    );
    pool.oid = 1;
    const connection = new Connection();
    connection.pool = pool;
    connection.oid = 2;

    const rows = new Rows(connection, 3);

    // Mock metadata response
    const mockMeta = google.spanner.v1.ResultSetMetadata.create({
      rowType: new google.spanner.v1.StructType({
        fields: [
          { name: 'col1', type: { code: google.spanner.v1.TypeCode.STRING } },
        ],
      }),
    });
    const metaBuffer = google.spanner.v1.ResultSetMetadata.encode(
      mockMeta
    ).finish() as Buffer;

    // Mock stats response
    const mockStats = google.spanner.v1.ResultSetStats.create({
      rowCountExact: 100,
    });
    const statsBuffer = google.spanner.v1.ResultSetStats.encode(
      mockStats
    ).finish() as Buffer;

    const nextMeta = google.spanner.v1.ResultSetMetadata.create({
      rowType: new google.spanner.v1.StructType({
        fields: [
          { name: 'col2', type: { code: google.spanner.v1.TypeCode.INT64 } },
        ],
      }),
    });
    const nextMetaBuffer = google.spanner.v1.ResultSetMetadata.encode(
      nextMeta
    ).finish() as Buffer;

    const nextStats = google.spanner.v1.ResultSetStats.create({
      rowCountExact: 50,
    });
    const nextStatsBuffer = google.spanner.v1.ResultSetStats.encode(
      nextStats
    ).finish() as Buffer;

    stub
      .onCall(0)
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: metaBuffer });
    stub
      .onCall(1)
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: statsBuffer });
    stub
      .onCall(2)
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: nextMetaBuffer });
    stub
      .onCall(3)
      .resolves({ objectId: 0, pinnerId: 0, protobufBytes: nextStatsBuffer });

    // Populate initial caches
    const meta1 = await rows.metadata();
    const stats1 = await rows.resultSetStats();
    assert.ok(meta1);
    assert.ok(stats1);

    // Call nextResultSet()
    const nextResultSetMetadata = await rows.nextResultSet();
    assert.ok(nextResultSetMetadata);

    // Verify metadata was updated and matches nextMeta
    assert.strictEqual(
      nextResultSetMetadata.rowType?.fields?.[0]?.name,
      'col2'
    );

    // Verify stats were cleared (calling stats again invokes the stub a 4th time)
    const stats2 = await rows.resultSetStats();
    assert.ok(stats2);
    assert.strictEqual(stats2.rowCountExact?.toString(), '50');

    // Total invoke count should be 4 (Metadata, ResultSetStats, NextResultSet, ResultSetStats)
    // (Notice we did not invoke Metadata again because nextResultSet returned and cached the new metadata)
    assert.strictEqual(stub.callCount, 4);
  });
});

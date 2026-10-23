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
import {randomUUID} from 'crypto';
import {after, before, describe, it} from 'mocha';
import * as arrow from 'apache-arrow';
import {BigQuery, Job} from '../src';
import {checkArrowDependencies} from '../src/arrow';

const bigquery = new BigQuery();
const GCLOUD_TESTS_PREFIX = 'nodejs_bq_test';

describe('Arrow Query Results', () => {
  // One dataset for the tests that need tables. It's labeled like the main
  // system test dataset so that suite's stale-dataset cleanup also removes it
  // if a run is interrupted before after() runs.
  const dataset = bigquery.dataset(
    `${GCLOUD_TESTS_PREFIX}_arrow_${randomUUID()}`.replace(/-/g, '_'),
  );

  before(async () => {
    await dataset.create({labels: {[GCLOUD_TESTS_PREFIX]: ''}});
  });

  after(async () => {
    await dataset.delete({force: true});
  });

  it('should stream inline Arrow RecordBatches via jobs.query with JOB_CREATION_OPTIONAL and support cached results', async () => {
    const sql =
      'SELECT 1 AS id, "alpha" AS label UNION ALL SELECT 2 AS id, "beta" AS label ORDER BY id';
    const [structRows] = await bigquery.query(sql);

    for (const useQueryCache of [false, true]) {
      const stream = bigquery.createQueryArrowStream({
        query: sql,
        useQueryCache,
      });
      const batches: arrow.RecordBatch[] = await stream.toArray();

      // Verify queryId is populated and decoded Arrow columns match STRUCT_ENCODING rows.
      assert.ok(stream.queryId);
      const table = new arrow.Table(batches);
      assert.strictEqual(table.numRows, structRows.length);
      assert.deepStrictEqual(
        Array.from(table.getChild('id')!.toArray()),
        structRows.map((r: {id: number}) => BigInt(r.id)),
      );
      assert.deepStrictEqual(
        table.getChild('label')!.toArray(),
        structRows.map((r: {label: string}) => r.label),
      );
    }
  });

  it('should populate jobReference and emit job event when jobCreationMode is JOB_CREATION_REQUIRED', async () => {
    const stream = bigquery.createQueryArrowStream({
      query: 'SELECT 42 AS answer',
      jobCreationMode: 'JOB_CREATION_REQUIRED',
    });

    let emittedJob: Job | undefined;
    stream.on('job', (job: Job) => {
      emittedJob = job;
    });

    const batches: arrow.RecordBatch[] = await stream.toArray();

    // Verify jobReference and the 'job' event were populated alongside the inline batch.
    assert.ok(stream.jobReference?.jobId);
    assert.ok(emittedJob);
    assert.strictEqual(emittedJob.id, stream.jobReference?.jobId);
    const table = new arrow.Table(batches);
    assert.strictEqual(table.numRows, 1);
    assert.deepStrictEqual(Array.from(table.getChild('answer')!.toArray()), [
      42n,
    ]);
  });

  it('should emit a 0-row RecordBatch preserving the schema for an empty result set', async () => {
    const batches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream(
        'SELECT * FROM UNNEST(ARRAY<STRUCT<id INT64, name STRING>>[])',
      )
      .toArray();

    // Verify a single 0-row RecordBatch is emitted with the query's column names intact.
    assert.strictEqual(batches.length, 1);
    assert.strictEqual(batches[0].numRows, 0);
    assert.deepStrictEqual(
      batches[0].schema.fields.map(f => f.name),
      ['id', 'name'],
    );
    assert.ok(arrow.DataType.isInt(batches[0].schema.fields[0].type));
    assert.ok(arrow.DataType.isUtf8(batches[0].schema.fields[1].type));
  });

  it('should emit a 0-row, 0-column RecordBatch for a statement without a result schema', async () => {
    const batches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream('DECLARE x INT64 DEFAULT 1;')
      .toArray();

    // Verify a single 0-row, 0-column RecordBatch is emitted when no schema is returned.
    assert.strictEqual(batches.length, 1);
    assert.strictEqual(batches[0].numRows, 0);
    assert.strictEqual(batches[0].numCols, 0);
  });

  it('should run DDL and DML statements and emit a single 0-row RecordBatch for each', async () => {
    // DDL and DML return no result rows, but the stream must still run the
    // statement and end with one 0-row RecordBatch.
    const tableRef = `\`${dataset.id}.statements\``;
    for (const statement of [
      `CREATE TABLE ${tableRef} AS SELECT 1 AS x`,
      `UPDATE ${tableRef} SET x = 2 WHERE TRUE`,
    ]) {
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream(statement)
        .toArray();
      assert.strictEqual(batches.length, 1, statement);
      assert.strictEqual(batches[0].numRows, 0, statement);
    }

    // Verify both statements ran: UPDATE changed the row CREATE TABLE wrote.
    const [rows] = await bigquery.query(`SELECT x FROM ${tableRef}`);
    assert.deepStrictEqual(rows, [{x: 2}]);
  });

  it('should raise the same error as query() when a query fails during execution', async () => {
    const sql = 'SELECT 1 / 0';
    let structErr: (Error & {code?: number}) | undefined;
    try {
      await bigquery.query(sql);
    } catch (err) {
      structErr = err as Error & {code?: number};
    }
    assert.ok(structErr);

    // Verify createQueryArrowStream raises an error with the same status code and message.
    await assert.rejects(
      bigquery.createQueryArrowStream(sql).toArray(),
      (arrowErr: Error & {code?: number}) => {
        assert.strictEqual(arrowErr.code, structErr!.code);
        assert.strictEqual(arrowErr.message, structErr!.message);
        return true;
      },
    );
  });

  it('should stream multi-page results across inline jobs.query and streams/_default and support early cancellation', async () => {
    const totalRows = 20000;
    const sql = `SELECT id, REPEAT('x', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;

    // First, break out of iteration after the first batch to verify early cancellation keeps the shared client usable.
    const earlyStream = bigquery.createQueryArrowStream({
      query: sql,
      useQueryCache: false,
    });
    let earlyBatches = 0;
    for await (const batch of earlyStream) {
      assert.ok(batch.numRows > 0);
      earlyBatches++;
      break;
    }
    assert.strictEqual(earlyBatches, 1);

    // Then read the full multi-page result on the same BigQuery client.
    const stream = bigquery.createQueryArrowStream({
      query: sql,
      useQueryCache: false,
    });
    const batches: arrow.RecordBatch[] = await stream.toArray();

    // Verify the result spanned the inline jobs.query batch and streams/_default.
    assert.ok(
      batches.length >= 2,
      `Expected >= 2 batches, got ${batches.length}`,
    );
    assert.ok(stream.jobReference?.jobId);

    const table = new arrow.Table(batches);
    assert.strictEqual(table.numRows, totalRows);
    const ids = Array.from(table.getChild('id')!.toArray());
    for (let i = 0; i < totalRows; i++) {
      if (ids[i] !== BigInt(i + 1)) {
        assert.fail(
          `Expected id ${i + 1} at index ${i}, got ${String(ids[i])}`,
        );
      }
    }
  });

  it('should stream multi-page cached results from streams/_default', async () => {
    // A cache hit can return totalRows "0" with a pageToken and no inline
    // rows, so the second run reads every row from streams/_default.
    const totalRows = 20000;
    const sql = `SELECT id, REPEAT('c', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;
    for (let run = 0; run < 2; run++) {
      const table = new arrow.Table(
        await bigquery
          .createQueryArrowStream({query: sql, useQueryCache: true})
          .toArray(),
      );
      assert.strictEqual(table.numRows, totalRows);
      assert.strictEqual(Number(table.getChild('id')!.get(0)), 1);
      assert.strictEqual(
        Number(table.getChild('id')!.get(totalRows - 1)),
        totalRows,
      );
    }
  });

  it('should cancel only the ReadRows stream of a read that ends early while another read on the same client continues', async () => {
    // Concurrent reads share one BigQueryReadClient, so ending one read early
    // must cancel only its own ReadRows stream. The read that ends early uses
    // a 3M-row result so its stream is still open when it's cancelled.
    const endedEarlySql =
      'SELECT a * 1000 + b AS id FROM UNNEST(GENERATE_ARRAY(0, 2999)) AS a, UNNEST(GENERATE_ARRAY(0, 999)) AS b';
    const totalRows = 20000;
    const readFullySql = `SELECT id, REPEAT('x', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;
    const readClientProto =
      checkArrowDependencies().storage.BigQueryReadClient.prototype;
    const origReadRows = readClientProto.readRows;
    let openedStreams = 0;
    let cancelledStreams = 0;
    readClientProto.readRows = function (
      this: unknown,
      ...args: Parameters<typeof origReadRows>
    ) {
      const grpcStream = origReadRows.apply(this, args);
      openedStreams++;
      const origCancel = grpcStream.cancel?.bind(grpcStream);
      grpcStream.cancel = () => {
        cancelledStreams++;
        origCancel?.();
      };
      return grpcStream;
    };

    try {
      const endedEarly = bigquery
        .createQueryArrowStream({query: endedEarlySql, useQueryCache: false})
        [Symbol.asyncIterator]();
      const readFully = bigquery
        .createQueryArrowStream({query: readFullySql, useQueryCache: false})
        [Symbol.asyncIterator]();

      // Advance each read until it has opened its own ReadRows stream.
      while (openedStreams === 0) {
        assert.ok(!(await endedEarly.next()).done);
      }
      const fullBatches: arrow.RecordBatch[] = [];
      while (openedStreams === 1) {
        const next = await readFully.next();
        assert.ok(!next.done);
        fullBatches.push(next.value);
      }

      // End the first read early, then finish the second.
      await endedEarly.return!();
      let next = await readFully.next();
      while (!next.done) {
        fullBatches.push(next.value);
        next = await readFully.next();
      }

      // Verify only the ended read was cancelled and the other read every row.
      assert.strictEqual(cancelledStreams, 1);
      const ids = Array.from(new arrow.Table(fullBatches).getChild('id')!);
      assert.strictEqual(ids.length, totalRows);
      assert.strictEqual(ids[0], 1n);
      assert.strictEqual(ids[totalRows - 1], BigInt(totalRows));
    } finally {
      readClientProto.readRows = origReadRows;
    }
  });

  it('should stream multi-page results from streams/_default in a non-US location (EU)', async () => {
    const totalRows = 15000;
    const stream = bigquery.createQueryArrowStream({
      query: `SELECT id, REPEAT('y', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`,
      location: 'EU',
      useQueryCache: false,
    });

    const batches: arrow.RecordBatch[] = await stream.toArray();

    // Verify the job ran in EU and streamed all rows across inline + streams/_default.
    assert.strictEqual(stream.jobReference?.location, 'EU');
    assert.ok(
      batches.length >= 2,
      `Expected >= 2 batches, got ${batches.length}`,
    );
    const table = new arrow.Table(batches);
    assert.strictEqual(table.numRows, totalRows);
  });

  it('should decode all BigQuery data types with rows split between the inline first page and streams/_default', async () => {
    const totalRows = 15000;
    const sql = `
      SELECT
        id,
        IF(MOD(id, 2) = 1, TRUE, NULL) AS bool_col,
        IF(MOD(id, 2) = 1, 42, NULL) AS int64_col,
        IF(MOD(id, 2) = 1, 3.14, NULL) AS float64_col,
        IF(MOD(id, 2) = 1, NUMERIC '123456789.123456789', NULL) AS numeric_col,
        IF(MOD(id, 2) = 1, BIGNUMERIC '12345678901234567890.123456789012345678', NULL) AS bignumeric_col,
        IF(MOD(id, 2) = 1, REPEAT('hello_', 200), NULL) AS string_col,
        IF(MOD(id, 2) = 1, b'\\x01\\x02\\x03', NULL) AS bytes_col,
        IF(MOD(id, 2) = 1, DATE '2026-01-15', NULL) AS date_col,
        IF(MOD(id, 2) = 1, TIME '12:34:56.789012', NULL) AS time_col,
        IF(MOD(id, 2) = 1, DATETIME '2026-01-15 12:34:56.789012', NULL) AS datetime_col,
        IF(MOD(id, 2) = 1, TIMESTAMP '2026-01-15 12:34:56.789012Z', NULL) AS timestamp_col,
        IF(MOD(id, 2) = 1, ST_GEOGPOINT(-122.4194, 37.7749), NULL) AS geography_col,
        IF(MOD(id, 2) = 1, JSON '{"a": 1, "b": [true, "two"]}', NULL) AS json_col,
        IF(MOD(id, 2) = 1, RANGE<DATE> '[2026-01-01, 2026-02-01)', NULL) AS range_col,
        [id, id + 1] AS array_col,
        STRUCT(id AS x, IF(MOD(id, 2) = 1, 'nested', NULL) AS y) AS struct_col
      FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id
      ORDER BY id
    `;

    const batches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({query: sql, useQueryCache: false})
      .toArray();

    // Verify rows were split across the inline first page and streams/_default and combine cleanly into a Table.
    assert.ok(
      batches.length >= 2,
      `Expected >= 2 batches across inline and stream, got ${batches.length}`,
    );
    const table = new arrow.Table(batches);
    assert.strictEqual(table.numRows, totalRows);
    assert.strictEqual(table.numCols, 17);

    // Check row 0 (id = 1, non-null values from inline page) and row 1 (id = 2, NULL values).
    assert.strictEqual(table.getChild('bool_col')!.get(0), true);
    assert.strictEqual(table.getChild('bool_col')!.get(1), null);
    assert.strictEqual(table.getChild('int64_col')!.get(0), 42n);
    assert.strictEqual(table.getChild('int64_col')!.get(1), null);
    assert.strictEqual(table.getChild('float64_col')!.get(0), 3.14);
    assert.strictEqual(
      table.getChild('json_col')!.get(0),
      '{"a":1,"b":[true,"two"]}',
    );
    assert.deepStrictEqual(
      Array.from(table.getChild('array_col')!.get(0).toArray()),
      [1n, 2n],
    );
    assert.deepStrictEqual(table.getChild('struct_col')!.get(0).toJSON(), {
      x: 1n,
      y: 'nested',
    });

    // Check the last row (id = 15000, streamed from streams/_default).
    const lastIdx = totalRows - 1;
    assert.strictEqual(table.getChild('id')!.get(lastIdx), BigInt(totalRows));
    assert.strictEqual(table.getChild('bool_col')!.get(lastIdx), null);
    assert.deepStrictEqual(
      table.getChild('struct_col')!.get(lastIdx).toJSON(),
      {
        x: BigInt(totalRows),
        y: null,
      },
    );
  });

  it('should wait for an unfinished jobs.query via jobs.getQueryResults (maxResults = 0) and stream all rows from streams/_default at offset = 0', async () => {
    const origRequest = bigquery.request.bind(bigquery);
    let getQueryResultsCalls = 0;

    // Force POST /queries to return jobComplete: false by setting a 1ms server wait on the wire
    // while leaving the caller's Query object without timeoutMs so createQueryArrowStream waits.
    bigquery.request = (reqOpts, callback) => {
      if (reqOpts.uri === '/queries' && reqOpts.method === 'POST') {
        reqOpts.json = {...reqOpts.json, timeoutMs: 1};
      } else if (
        typeof reqOpts.uri === 'string' &&
        reqOpts.uri.startsWith('/queries/')
      ) {
        getQueryResultsCalls++;
      }
      return origRequest(reqOpts, callback);
    };

    try {
      const sql =
        'DECLARE n INT64 DEFAULT 50; SELECT x FROM UNNEST(GENERATE_ARRAY(1, n)) AS x ORDER BY x;';
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream({query: sql, useQueryCache: false})
        .toArray();

      // Verify jobs.getQueryResults was polled to wait for completion and all 50 rows streamed from offset = 0.
      assert.ok(
        getQueryResultsCalls >= 1,
        `Expected >= 1 jobs.getQueryResults call, got ${getQueryResultsCalls}`,
      );
      const table = new arrow.Table(batches);
      assert.strictEqual(table.numRows, 50);
      assert.strictEqual(table.getChild('x')!.get(0), 1n);
      assert.strictEqual(table.getChild('x')!.get(49), 50n);
    } finally {
      bigquery.request = origRequest;
    }
  });

  it('should keep the schema of an empty result after waiting for an unfinished jobs.query', async () => {
    // After the wait, rows come from streams/_default at offset = 0, which
    // sends nothing for a result without rows, so the schema has to come from
    // the job's destination table.
    const origRequest = bigquery.request.bind(bigquery);

    // Force POST /queries to return jobComplete: false so the stream waits
    // for the job before reading rows.
    bigquery.request = (reqOpts, callback) => {
      if (reqOpts.uri === '/queries' && reqOpts.method === 'POST') {
        reqOpts.json = {...reqOpts.json, timeoutMs: 1};
      }
      return origRequest(reqOpts, callback);
    };

    try {
      const sql = `DECLARE n INT64 DEFAULT 0;
        SELECT x, CAST(x AS STRING) AS s FROM UNNEST(GENERATE_ARRAY(1, n)) AS x;`;
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream({query: sql, useQueryCache: false})
        .toArray();

      // Verify one 0-row RecordBatch with the result's column names and types.
      assert.strictEqual(batches.length, 1);
      assert.strictEqual(batches[0].numRows, 0);
      assert.deepStrictEqual(
        batches[0].schema.fields.map(f => f.name),
        ['x', 's'],
      );
      assert.ok(arrow.DataType.isInt(batches[0].schema.fields[0].type));
      assert.ok(arrow.DataType.isUtf8(batches[0].schema.fields[1].type));
    } finally {
      bigquery.request = origRequest;
    }
  });

  it('should wait for an unfinished job with a picosecond TIMESTAMP(12) column using default jobs.getQueryResults format options', async function () {
    // Guards the job wait against format option regressions: the wait calls
    // jobs.getQueryResults with maxResults = 0 and the library's default
    // formatOptions (useInt64Timestamp), which must still succeed when the
    // result has a picosecond TIMESTAMP(12) column. Picosecond timestamps are
    // only enabled in some projects, so this runs only when
    // BIGQUERY_PICOSECOND_SUPPORT is set.
    if (process.env.BIGQUERY_PICOSECOND_SUPPORT !== 'true') {
      this.skip();
    }
    const origRequest = bigquery.request.bind(bigquery);
    let getQueryResultsCalls = 0;

    // Force POST /queries to return jobComplete: false so the stream waits
    // for the job with jobs.getQueryResults before reading rows.
    bigquery.request = (reqOpts, callback) => {
      if (reqOpts.uri === '/queries' && reqOpts.method === 'POST') {
        reqOpts.json = {...reqOpts.json, timeoutMs: 1};
      } else if (
        typeof reqOpts.uri === 'string' &&
        reqOpts.uri.startsWith('/queries/')
      ) {
        getQueryResultsCalls++;
      }
      return origRequest(reqOpts, callback);
    };

    try {
      const sql = `DECLARE n INT64 DEFAULT 3;
        SELECT x, CAST('2026-01-15 12:34:56.123456789123+00' AS TIMESTAMP(12)) AS ts
        FROM UNNEST(GENERATE_ARRAY(1, n)) AS x ORDER BY x;`;
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream({query: sql, useQueryCache: false})
        .toArray();

      // Verify the wait ran and every row streamed with an Arrow timestamp.
      assert.ok(
        getQueryResultsCalls >= 1,
        `Expected >= 1 jobs.getQueryResults call, got ${getQueryResultsCalls}`,
      );
      const table = new arrow.Table(batches);
      assert.strictEqual(table.numRows, 3);
      assert.ok(arrow.DataType.isTimestamp(table.schema.fields[1].type));
    } finally {
      bigquery.request = origRequest;
    }
  });

  it('should reject when a query does not complete within caller-specified timeoutMs', async () => {
    const sql =
      'DECLARE n INT64 DEFAULT 50; SELECT x FROM UNNEST(GENERATE_ARRAY(1, n)) AS x ORDER BY x;';

    // Verify specifying timeoutMs: 1 rejects when jobs.query returns jobComplete = false.
    await assert.rejects(
      bigquery
        .createQueryArrowStream({
          query: sql,
          timeoutMs: 1,
          useQueryCache: false,
        })
        .toArray(),
      /The query did not complete before 1ms/,
    );
  });

  it('should execute queries with jobs.insert-only options via jobs.insert and stream Arrow results from streams/_default at offset = 0', async () => {
    const sql =
      'SELECT x, x * 2 AS doubled FROM UNNEST(GENERATE_ARRAY(1, 25)) AS x ORDER BY x';
    let emittedJobId: string | undefined;

    const stream = bigquery.createQueryArrowStream({
      query: sql,
      jobTimeoutMs: 60000,
      location: 'EU',
      useQueryCache: false,
    });
    stream.on('job', job => {
      emittedJobId = job.id;
    });

    const batches: arrow.RecordBatch[] = await stream.toArray();
    const [expectedRows] = await bigquery.query({
      query: sql,
      jobTimeoutMs: 60000,
      location: 'EU',
      useQueryCache: false,
    });

    // Verify the query ran via jobs.insert (no queryId, jobReference in EU) and matches STRUCT_ENCODING rows.
    assert.strictEqual(stream.queryId, undefined);
    assert.ok(stream.jobReference?.jobId);
    assert.strictEqual(stream.jobReference?.location, 'EU');
    assert.strictEqual(emittedJobId, stream.jobReference?.jobId);

    const table = new arrow.Table(batches);
    assert.strictEqual(table.numRows, expectedRows.length);
    for (let i = 0; i < expectedRows.length; i++) {
      assert.strictEqual(
        Number(table.getChild('x')!.get(i)),
        expectedRows[i].x,
      );
      assert.strictEqual(
        Number(table.getChild('doubled')!.get(i)),
        expectedRows[i].doubled,
      );
    }
  });

  it('should raise the same error as query() when a jobs.insert query fails during execution', async () => {
    const failingQuery = {
      query: 'SELECT 1 / 0',
      jobTimeoutMs: 60000,
      useQueryCache: false,
    };

    let expectedError: (Error & {code?: number}) | undefined;
    try {
      await bigquery.query(failingQuery);
    } catch (err) {
      expectedError = err as Error & {code?: number};
    }
    assert.ok(expectedError, 'Expected bigquery.query() to reject');

    let actualError: (Error & {code?: number}) | undefined;
    try {
      await bigquery.createQueryArrowStream(failingQuery).toArray();
    } catch (err) {
      actualError = err as Error & {code?: number};
    }

    // Verify jobs.insert Arrow queries surface the same error code and message as query().
    assert.ok(actualError, 'Expected createQueryArrowStream() to reject');
    assert.strictEqual(actualError.code, expectedError.code);
    assert.match(actualError.message, /division by zero/i);
  });

  it('should reject when a jobs.insert query does not complete within caller-specified timeoutMs', async () => {
    // jobTimeoutMs forces jobs.insert; timeoutMs then bounds the wait on
    // jobs.getQueryResults, like BigQuery#query.
    await assert.rejects(
      bigquery
        .createQueryArrowStream({
          query:
            'DECLARE n INT64 DEFAULT 50; SELECT x FROM UNNEST(GENERATE_ARRAY(1, n)) AS x ORDER BY x;',
          jobTimeoutMs: 60000,
          timeoutMs: 1,
          useQueryCache: false,
        })
        .toArray(),
      /The query did not complete before 1ms/,
    );
  });

  it('should emit one 0-row, 0-column RecordBatch and the job with dry-run statistics for dryRun', async () => {
    let emittedJob: Job | undefined;
    const stream = bigquery.createQueryArrowStream({
      query: 'SELECT x FROM UNNEST(GENERATE_ARRAY(1, 10)) AS x',
      dryRun: true,
    });
    stream.on('job', job => {
      emittedJob = job;
    });
    const batches: arrow.RecordBatch[] = await stream.toArray();

    // Verify the dry run returned no rows or columns, and its statistics
    // are available on the emitted job.
    assert.strictEqual(batches.length, 1);
    assert.strictEqual(batches[0].numRows, 0);
    assert.strictEqual(batches[0].numCols, 0);
    assert.ok(emittedJob);
    assert.ok(emittedJob.metadata?.statistics?.totalBytesProcessed);
  });

  it('should emit a 0-row RecordBatch preserving the schema for an empty result read via jobs.insert and streams/_default', async () => {
    // jobs.insert returns no rows inline, so the schema of an empty result
    // has to come from ReadRows on streams/_default.
    const stream = bigquery.createQueryArrowStream({
      query:
        'SELECT x, CAST(x AS STRING) AS s FROM UNNEST(CAST([] AS ARRAY<INT64>)) AS x',
      jobTimeoutMs: 60000,
      useQueryCache: false,
    });
    const batches: arrow.RecordBatch[] = await stream.toArray();

    // Verify the query ran via jobs.insert and emitted one 0-row batch with the column names and types.
    assert.strictEqual(stream.queryId, undefined);
    assert.strictEqual(batches.length, 1);
    assert.strictEqual(batches[0].numRows, 0);
    assert.deepStrictEqual(
      batches[0].schema.fields.map(f => f.name),
      ['x', 's'],
    );
    assert.ok(arrow.DataType.isInt(batches[0].schema.fields[0].type));
    assert.ok(arrow.DataType.isUtf8(batches[0].schema.fields[1].type));
  });

  it('should stream Arrow results from an explicit destination table via CreateReadSession with default writeDisposition and WRITE_TRUNCATE', async () => {
    const destTable = dataset.table('dest_results');

    // 1. Default writeDisposition (writes to a new destination table).
    const initialBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query:
          'SELECT x AS id, CONCAT("row_", CAST(x AS STRING)) AS label FROM UNNEST(GENERATE_ARRAY(1, 100)) AS x ORDER BY x',
        destination: destTable,
      })
      .toArray();

    const initialTable = new arrow.Table(initialBatches);
    assert.strictEqual(initialTable.numRows, 100);
    assert.strictEqual(initialTable.getChild('id')!.get(0), 1n);
    assert.strictEqual(initialTable.getChild('id')!.get(99), 100n);

    // 2. WRITE_TRUNCATE overwrites the destination table and reads only the new rows.
    const truncatedBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query:
          'SELECT x AS id, CONCAT("new_", CAST(x AS STRING)) AS label FROM UNNEST(GENERATE_ARRAY(1, 10)) AS x ORDER BY x',
        destination: destTable,
        writeDisposition: 'WRITE_TRUNCATE',
      })
      .toArray();

    const truncatedTable = new arrow.Table(truncatedBatches);
    assert.strictEqual(truncatedTable.numRows, 10);
    assert.strictEqual(truncatedTable.getChild('id')!.get(0), 1n);
    assert.strictEqual(truncatedTable.getChild('label')!.get(0), 'new_1');

    // 3. 0-row query into an explicit destination table preserves the schema.
    const emptyBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: 'SELECT 1 AS id, "empty" AS label FROM UNNEST([1]) WHERE FALSE',
        destination: destTable,
        writeDisposition: 'WRITE_TRUNCATE',
      })
      .toArray();

    assert.strictEqual(emptyBatches.length, 1);
    assert.strictEqual(emptyBatches[0].numRows, 0);
    assert.deepStrictEqual(
      emptyBatches[0].schema.fields.map(f => f.name),
      ['id', 'label'],
    );
  });

  it('should apply arrowSerializationOptions.picosTimestampPrecision to an explicit destination table read via CreateReadSession', async () => {
    const destTable = dataset.table('dest_timestamp_precision');
    // apache-arrow returns timestamps as epoch milliseconds with fractional
    // microseconds: 2026-01-15T12:34:56.123456Z.
    const expectedMillis = Date.UTC(2026, 0, 15, 12, 34, 56, 123) + 0.456;

    // A TIMESTAMP column has microsecond precision, so CreateReadSession
    // should accept every precision and return the same value.
    for (const picosTimestampPrecision of [
      'TIMESTAMP_PRECISION_MICROS',
      'TIMESTAMP_PRECISION_NANOS',
      'TIMESTAMP_PRECISION_PICOS',
    ] as const) {
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream({
          query: "SELECT TIMESTAMP '2026-01-15 12:34:56.123456Z' AS ts",
          destination: destTable,
          writeDisposition: 'WRITE_TRUNCATE',
          arrowSerializationOptions: {picosTimestampPrecision},
        })
        .toArray();
      const table = new arrow.Table(batches);
      assert.ok(arrow.DataType.isTimestamp(table.schema.fields[0].type));
      assert.strictEqual(table.getChild('ts')!.get(0), expectedMillis);
    }

    // When picosecond TIMESTAMP(12) support is enabled on the test project,
    // also verify the default precision truncates to microseconds and
    // TIMESTAMP_PRECISION_PICOS keeps all 12 digits.
    if (process.env.BIGQUERY_PICOSECOND_SUPPORT !== 'true') {
      return;
    }
    const picosQuery =
      "SELECT CAST('2026-01-15 12:34:56.123456789123+00' AS TIMESTAMP(12)) AS ts";
    const defaultBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: picosQuery,
        destination: destTable,
        writeDisposition: 'WRITE_TRUNCATE',
      })
      .toArray();
    assert.strictEqual(
      new arrow.Table(defaultBatches).getChild('ts')!.get(0),
      expectedMillis,
    );

    const picosBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: picosQuery,
        destination: destTable,
        writeDisposition: 'WRITE_TRUNCATE',
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_PICOS',
        },
      })
      .toArray();
    assert.strictEqual(
      new arrow.Table(picosBatches).getChild('ts')!.get(0),
      '2026-01-15T12:34:56.123456789123Z',
    );
  });

  it('should apply arrowSerializationOptions.picosTimestampPrecision across inline jobs.query and streams/_default', async () => {
    const totalRows = 15000;
    const sql = `SELECT id, TIMESTAMP '2026-01-15 12:34:56.123456Z' AS ts, REPEAT('z', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;
    // apache-arrow returns timestamps as epoch milliseconds with fractional
    // microseconds: 2026-01-15T12:34:56.123456Z.
    const expectedMillis = Date.UTC(2026, 0, 15, 12, 34, 56, 123) + 0.456;

    for (const picosTimestampPrecision of [
      'TIMESTAMP_PRECISION_MICROS',
      'TIMESTAMP_PRECISION_NANOS',
      'TIMESTAMP_PRECISION_PICOS',
    ] as const) {
      const batches: arrow.RecordBatch[] = await bigquery
        .createQueryArrowStream({
          query: sql,
          useQueryCache: false,
          arrowSerializationOptions: {picosTimestampPrecision},
        })
        .toArray();

      // Verify the result spanned both inline jobs.query and streams/_default with consistent Timestamp values.
      assert.ok(
        batches.length >= 2,
        `Expected >= 2 batches for ${picosTimestampPrecision}, got ${batches.length}`,
      );
      const table = new arrow.Table(batches);
      assert.strictEqual(table.numRows, totalRows);
      const tsField = table.schema.fields.find(f => f.name === 'ts');
      assert.ok(arrow.DataType.isTimestamp(tsField?.type));
      assert.strictEqual(table.getChild('ts')!.get(0), expectedMillis);
      assert.strictEqual(
        table.getChild('ts')!.get(totalRows - 1),
        expectedMillis,
      );
    }

    // When picosecond TIMESTAMP(12) support is enabled on the test project,
    // also verify the default precision truncates to microseconds on every
    // batch and TIMESTAMP_PRECISION_PICOS keeps all 12 digits.
    if (process.env.BIGQUERY_PICOSECOND_SUPPORT !== 'true') {
      return;
    }
    const defaultBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: `SELECT id, CAST('2026-01-15 12:34:56.123456789123+00' AS TIMESTAMP(12)) AS ts, REPEAT('z', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`,
        useQueryCache: false,
      })
      .toArray();
    assert.ok(
      defaultBatches.length >= 2,
      `Expected >= 2 batches, got ${defaultBatches.length}`,
    );
    const defaultTable = new arrow.Table(defaultBatches);
    assert.strictEqual(defaultTable.getChild('ts')!.get(0), expectedMillis);
    assert.strictEqual(
      defaultTable.getChild('ts')!.get(totalRows - 1),
      expectedMillis,
    );

    const picosBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query:
          "SELECT CAST('2026-01-15 12:34:56.123456789123+00' AS TIMESTAMP(12)) AS ts_picos",
        useQueryCache: false,
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_PICOS',
        },
      })
      .toArray();
    const picosTable = new arrow.Table(picosBatches);
    assert.strictEqual(
      picosTable.getChild('ts_picos')!.get(0),
      '2026-01-15T12:34:56.123456789123Z',
    );
  });

  it('should enforce maxResults for jobs.insert queries read from streams/_default and from an explicit destination table', async () => {
    const totalRows = 15000;
    const sql = `SELECT id, REPEAT('m', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;
    const limit = 12000;

    // 1. jobTimeoutMs sends the query via jobs.insert, so rows come from
    // streams/_default starting at offset = 0.
    const insertStream = bigquery.createQueryArrowStream({
      query: sql,
      jobTimeoutMs: 600000,
      useQueryCache: false,
      maxResults: limit,
    });
    const insertTable = new arrow.Table(await insertStream.toArray());
    assert.strictEqual(insertStream.queryId, undefined);
    assert.strictEqual(insertTable.numRows, limit);
    assert.strictEqual(Number(insertTable.getChild('id')!.get(0)), 1);
    assert.strictEqual(
      Number(insertTable.getChild('id')!.get(limit - 1)),
      limit,
    );

    // 2. An explicit destination table is read via CreateReadSession.
    const destBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: sql,
        destination: dataset.table('dest_max_results'),
        writeDisposition: 'WRITE_TRUNCATE',
        maxResults: limit,
      })
      .toArray();
    const destTable = new arrow.Table(destBatches);
    assert.strictEqual(destTable.numRows, limit);
    assert.strictEqual(Number(destTable.getChild('id')!.get(0)), 1);
    assert.strictEqual(Number(destTable.getChild('id')!.get(limit - 1)), limit);

    // 3. maxResults = 0 returns one 0-row batch that keeps the schema.
    const emptyBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: sql,
        jobTimeoutMs: 600000,
        useQueryCache: false,
        maxResults: 0,
      })
      .toArray();
    assert.strictEqual(emptyBatches.length, 1);
    assert.strictEqual(emptyBatches[0].numRows, 0);
    assert.deepStrictEqual(
      emptyBatches[0].schema.fields.map(f => f.name),
      ['id', 'payload'],
    );
  });

  it('should enforce maxResults within the inline jobs.query page, across multi-page streams/_default results, and past the last row', async () => {
    const totalRows = 15000;
    const sql = `SELECT id, REPEAT('m', 1024) AS payload FROM UNNEST(GENERATE_ARRAY(1, ${totalRows})) AS id ORDER BY id`;

    // 1. maxResults satisfied within the inline jobs.query page. jobs.query
    // returns no rows inline when the whole result is over 512 KiB, so use a
    // small result here.
    const inlineBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query:
          'SELECT id FROM UNNEST(GENERATE_ARRAY(1, 100)) AS id ORDER BY id',
        useQueryCache: false,
        maxResults: 10,
      })
      .toArray();
    const inlineTable = new arrow.Table(inlineBatches);
    assert.strictEqual(inlineTable.numRows, 10);
    assert.strictEqual(Number(inlineTable.getChild('id')!.get(0)), 1);
    assert.strictEqual(Number(inlineTable.getChild('id')!.get(9)), 10);

    // 2. maxResults across a multi-page streams/_default result.
    const streamLimit = 12000;
    const multiBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: sql,
        useQueryCache: false,
        maxResults: streamLimit,
      })
      .toArray();
    assert.ok(
      multiBatches.length >= 2,
      `Expected >= 2 batches for maxResults = ${streamLimit}, got ${multiBatches.length}`,
    );
    const multiTable = new arrow.Table(multiBatches);
    assert.strictEqual(multiTable.numRows, streamLimit);
    assert.strictEqual(Number(multiTable.getChild('id')!.get(0)), 1);
    assert.strictEqual(
      Number(multiTable.getChild('id')!.get(streamLimit - 1)),
      streamLimit,
    );

    // 3. maxResults past the last row returns every row.
    const allBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: sql,
        useQueryCache: false,
        maxResults: totalRows + 5000,
      })
      .toArray();
    assert.strictEqual(new arrow.Table(allBatches).numRows, totalRows);
  });

  it('should return existing and new rows for WRITE_APPEND and fail WRITE_EMPTY on a non-empty destination table', async () => {
    const tableRef = `\`${dataset.id}.append_target\``;
    const destTable = dataset.table('append_target');
    await bigquery.query(`CREATE TABLE ${tableRef} AS SELECT 1 AS x`);

    // 1. WRITE_APPEND adds the new row and, like query(), reads back the whole
    // destination table, including the row that was already there.
    const appendBatches: arrow.RecordBatch[] = await bigquery
      .createQueryArrowStream({
        query: 'SELECT 2 AS x',
        destination: destTable,
        writeDisposition: 'WRITE_APPEND',
      })
      .toArray();
    const appendTable = new arrow.Table(appendBatches);
    assert.deepStrictEqual(
      Array.from(appendTable.getChild('x')!.toArray()).sort(),
      [1n, 2n],
    );

    // 2. WRITE_EMPTY fails because the destination table already has rows.
    await assert.rejects(
      bigquery
        .createQueryArrowStream({
          query: 'SELECT 3 AS x',
          destination: destTable,
          writeDisposition: 'WRITE_EMPTY',
        })
        .toArray(),
      /Already Exists/,
    );

    // Verify the failed WRITE_EMPTY job left the table unchanged.
    const [rows] = await bigquery.query(`SELECT x FROM ${tableRef} ORDER BY x`);
    assert.deepStrictEqual(rows, [{x: 1}, {x: 2}]);
  });
});

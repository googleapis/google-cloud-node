/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import {randomUUID} from 'crypto';
import {Field, RecordBatch} from 'apache-arrow';
import {getOrCreateStorageReadClient} from '../src/arrow';
import {BigQuery, BigQueryInt} from '../src/bigquery';

const bigquery = new BigQuery({
  projectId: process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT,
});

/**
 * System tests for reading query results in Apache Arrow format in
 * `@google-cloud/bigquery`.
 */
describe('Apache Arrow System Tests', () => {
  const datasetId = `arrow_sys_test_${randomUUID().replace(/-/g, '_')}`;
  const tableId = `arrow_table_${randomUUID().replace(/-/g, '_')}`;
  const dataset = bigquery.dataset(datasetId);
  const table = dataset.table(tableId);

  before(async () => {
    await dataset.create();
    await table.create({
      schema: [
        {name: 'id', type: 'INT64'},
        {name: 'label', type: 'STRING'},
      ],
    });
    await table.insert([
      {id: 1, label: 'alpha'},
      {id: 2, label: 'beta'},
      {id: 3, label: 'gamma'},
    ]);
  });

  after(async () => {
    try {
      await dataset.delete({force: true});
    } catch {
      // ignore cleanup errors
    }
  });

  // ===========================================================================
  // Requirement 1: Execution Path Routing & Job Creation Semantics
  // ===========================================================================
  describe('1. Execution Path Routing (Fast Path jobs.query vs Fallback Path jobs.insert)', () => {
    it('executes single-page fast path via jobs.query with default JOB_CREATION_OPTIONAL (no persistent Job created)', async () => {
      const [arrowTable, , apiResponse] =
        await bigquery.queryArrow('SELECT 1 AS a');

      assert.strictEqual(arrowTable.numRows, 1);
      assert.ok(
        apiResponse.queryId,
        'Expected fast-path jobs.query to populate queryId',
      );
      assert.strictEqual(
        apiResponse.jobReference,
        undefined,
        'Expected single-page queryArrow() to bypass persistent job creation via default JOB_CREATION_OPTIONAL',
      );
    });

    it('honors explicit jobCreationMode: JOB_CREATION_REQUIRED override on single-page fast path', async () => {
      const [arrowTable, , apiResponse] = await bigquery.queryArrow({
        query: 'SELECT 1 AS a',
        jobCreationMode: 'JOB_CREATION_REQUIRED',
      });

      assert.strictEqual(arrowTable.numRows, 1);
      assert.ok(
        apiResponse.jobReference?.jobId,
        'Expected explicit JOB_CREATION_REQUIRED to materialize a persistent JobReference',
      );
    });

    it('continues multi-page queries seamlessly from REST Page 1 into gRPC Storage Read API Page 2+ without row gaps or duplicates', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('X', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      const [arrowTable, , apiResponse] = await bigquery.queryArrow(sql);
      assert.strictEqual(arrowTable.numRows, 15000);
      assert.strictEqual(apiResponse.totalRows, '15000');

      // Verify strict contiguous row ordering across the Page 1 -> Page 2 boundary
      const idxCol = arrowTable.getChild('idx')!;
      assert.strictEqual(idxCol.get(0), 1n);
      assert.strictEqual(idxCol.get(7499), 7500n);
      assert.strictEqual(idxCol.get(14999), 15000n);
    });

    it('executes fallback jobs.insert anonymous path via server-side blocking ReadRows on _default stream without REST polling', async () => {
      let getMetadataCalls = 0;
      const origJob = bigquery.job.bind(bigquery);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bigquery as any).job = (id: string, options?: any) => {
        const jobInstance = origJob(id, options);
        const origGetMetadata = jobInstance.getMetadata.bind(jobInstance);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (jobInstance as any).getMetadata = (cb?: any) => {
          getMetadataCalls++;
          return origGetMetadata(cb);
        };
        return jobInstance;
      };

      try {
        const jobId = `arrow_no_poll_${randomUUID().replace(/-/g, '_')}`;
        const [arrowTable] = await bigquery.queryArrow({
          query: 'SELECT 42 AS answer, "server-wait" AS mode',
          jobId,
        });
        assert.strictEqual(arrowTable.numRows, 1);
        assert.deepStrictEqual(
          arrowTable.schema.fields.map((f: Field) => f.name),
          ['answer', 'mode'],
        );
        assert.strictEqual(
          getMetadataCalls,
          0,
          `Expected 0 client-side REST job.getMetadata() calls on _default job stream, got ${getMetadataCalls}`,
        );
      } finally {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (bigquery as any).job = origJob;
      }
    });

    it('reads explicit destination tables on fallback jobs.insert path via CreateReadSession (including 0-row schema preservation)', async () => {
      const destTable = dataset.table(
        `dest_${randomUUID().replace(/-/g, '_')}`,
      );

      const [arrowTable, , apiResponse] = await bigquery.queryArrow({
        query:
          'SELECT i AS id, CONCAT("dest_", CAST(i AS STRING)) AS label FROM UNNEST(GENERATE_ARRAY(1, 500)) AS i ORDER BY i',
        destination: destTable,
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_NANOS',
        },
      });

      assert.strictEqual(arrowTable.numRows, 500);
      assert.strictEqual(apiResponse.totalRows, '500');
      assert.strictEqual(arrowTable.getChild('id')!.get(0), 1n);
      assert.strictEqual(arrowTable.getChild('id')!.get(499), 500n);

      const emptyDestTable = dataset.table(
        `dest_empty_${randomUUID().replace(/-/g, '_')}`,
      );
      const [emptyTable] = await bigquery.queryArrow({
        query:
          'SELECT 101 AS id, "dest_empty" AS label FROM UNNEST([1]) WHERE 1 = 0',
        destination: emptyDestTable,
      });

      assert.strictEqual(emptyTable.numRows, 0);
      assert.deepStrictEqual(
        emptyTable.schema.fields.map((f: Field) => f.name),
        ['id', 'label'],
      );
    });

    it('enforces maxResults across single-page REST, multi-page hybrid (Page 1 REST + Page 2+ gRPC), 0-row schema, and fallback jobs.insert', async () => {
      const multiPageSql = `
        SELECT
          i AS idx,
          REPEAT('M', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      // 1. Multi-page hybrid cap across Page 1 (REST) + Page 2+ (gRPC)
      const [hybridCapped] = await bigquery.queryArrow({
        query: multiPageSql,
        maxResults: 8500,
      });
      assert.strictEqual(hybridCapped.numRows, 8500);
      assert.strictEqual(hybridCapped.getChild('idx')!.get(0), 1n);
      assert.strictEqual(hybridCapped.getChild('idx')!.get(8499), 8500n);

      // 2. Single-page cap (satisfied purely on Page 1 over REST)
      const [singleCapped] = await bigquery.queryArrow({
        query: multiPageSql,
        maxResults: 100,
      });
      assert.strictEqual(singleCapped.numRows, 100);
      assert.strictEqual(singleCapped.getChild('idx')!.get(99), 100n);

      // 3. maxResults: 0 preserves schema with 0 rows
      const [zeroCapped] = await bigquery.queryArrow({
        query: 'SELECT 1 AS idx, "hello" AS label',
        maxResults: 0,
      });
      assert.strictEqual(zeroCapped.numRows, 0);
      assert.deepStrictEqual(
        zeroCapped.schema.fields.map((f: Field) => f.name),
        ['idx', 'label'],
      );

      // 4. Fallback jobs.insert + maxResults
      const [fallbackCapped] = await bigquery.queryArrow({
        query:
          'SELECT i AS idx FROM UNNEST(GENERATE_ARRAY(1, 2000)) AS i ORDER BY i',
        jobId: `arrow_max_res_${randomUUID().replace(/-/g, '_')}`,
        maxResults: 750,
      });
      assert.strictEqual(fallbackCapped.numRows, 750);
      assert.strictEqual(fallbackCapped.getChild('idx')!.get(749), 750n);
    });

    it('continues cached multi-page queries (cacheHit: true) seamlessly across REST Page 1 and gRPC Page 2+', async () => {
      const uniqueTag = randomUUID().replace(/-/g, '_');
      const sql = `
        SELECT
          i AS idx,
          CONCAT('${uniqueTag}_', REPEAT('C', 2400)) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      const [firstTable, , firstResp] = await bigquery.queryArrow(sql);
      const [cachedTable, , cachedResp] = await bigquery.queryArrow(sql);

      assert.strictEqual(firstTable.numRows, 15000);
      assert.strictEqual(cachedTable.numRows, 15000);
      assert.strictEqual(firstResp.cacheHit, false);
      assert.strictEqual(cachedResp.cacheHit, true);
      assert.strictEqual(cachedTable.getChild('idx')!.get(0), 1n);
      assert.strictEqual(cachedTable.getChild('idx')!.get(14999), 15000n);
    });
  });

  // ===========================================================================
  // Requirement 2: Row-Based Accelerated API (bigquery.query & createQueryStream)
  // ===========================================================================
  describe('2. Row-Based Accelerated API (queryResultsFormat: "ARROW")', () => {
    it('matches standard JSON query results across all BigQuery scalar, temporal, decimal, spatial, JSON, and nested types', async () => {
      const sql = `
        SELECT
          42 AS int_val,
          3.14 AS float_val,
          TRUE AS bool_val,
          'hello arrow' AS str_val,
          b'raw-bytes' AS bytes_val,
          DATE '2024-06-15' AS date_val,
          TIME '14:30:45.123456' AS time_val,
          DATETIME '2024-06-15 14:30:45.123456' AS datetime_val,
          TIMESTAMP '2024-06-15 14:30:45.123456Z' AS timestamp_val,
          NUMERIC '12345.678901234' AS numeric_val,
          BIGNUMERIC '1234567890.123456789012345678' AS bignumeric_val,
          ST_GEOGPOINT(10, 20) AS geo_val,
          JSON '{"key": "val", "num": 7}' AS json_val,
          STRUCT(99 AS a, 'sub' AS b, NUMERIC '9.87654321' AS nested_num) AS struct_val,
          ['x', 'y', 'z'] AS str_arr,
          [STRUCT('k1' AS k, 1 AS v), STRUCT('k2' AS k, 2 AS v)] AS struct_arr,
          CAST(NULL AS STRING) AS null_str,
          CAST(NULL AS TIMESTAMP) AS null_ts
      `;

      const [jsonRows] = await bigquery.query({query: sql, parseJSON: true});
      const [arrowRows] = await bigquery.query({
        query: sql,
        queryResultsFormat: 'ARROW',
        parseJSON: true,
      });

      assert.strictEqual(arrowRows.length, 1);
      assert.deepStrictEqual(arrowRows, jsonRows);
    });

    it('deserializes RANGE<DATE>, RANGE<DATETIME>, and RANGE<TIMESTAMP> columns to match JSON results', async () => {
      const sql = `
        SELECT
          RANGE(DATE '2024-01-01', DATE '2024-01-31') AS range_date,
          RANGE(DATETIME '2024-01-01 08:30:00', DATETIME '2024-01-31 17:45:00') AS range_dt,
          RANGE(TIMESTAMP '2024-01-01 00:00:00Z', TIMESTAMP '2024-01-31 23:59:59Z') AS range_ts
      `;

      const [jsonRows] = await bigquery.query({query: sql});
      const [arrowRows] = await bigquery.query({
        query: sql,
        queryResultsFormat: 'ARROW',
      });

      assert.deepStrictEqual(arrowRows, jsonRows);
    });

    it('preserves exact microsecond precision for nested TIMESTAMP and DATETIME inside STRUCT and ARRAY', async () => {
      const sql = `
        SELECT
          STRUCT(
            TIMESTAMP '9999-12-31 23:59:59.987654Z' AS far_ts,
            DATETIME '9999-12-31 23:59:59.987654' AS far_dt
          ) AS nested_struct,
          [STRUCT(TIMESTAMP '9999-12-31 23:59:59.987654Z' AS far_ts)] AS nested_arr
      `;

      const [jsonRows] = await bigquery.query({query: sql});
      const [arrowRows] = await bigquery.query({
        query: sql,
        queryResultsFormat: 'ARROW',
      });

      assert.deepStrictEqual(arrowRows, jsonRows);
    });

    it('preserves exact 64-bit integer precision via BigQueryInt when wrapIntegers: true exceeds Number.MAX_SAFE_INTEGER', async () => {
      const sql =
        'SELECT 9007199254740993 AS max_plus_two, -9007199254740993 AS min_minus_two';

      const [jsonRows] = await bigquery.query({
        query: sql,
        wrapIntegers: true,
      });
      const [arrowRows] = await bigquery.query({
        query: sql,
        queryResultsFormat: 'ARROW',
        wrapIntegers: true,
      });

      assert.ok(arrowRows[0].max_plus_two instanceof BigQueryInt);
      assert.strictEqual(arrowRows[0].max_plus_two.value, '9007199254740993');
      assert.strictEqual(arrowRows[0].min_minus_two.value, '-9007199254740993');
      assert.deepStrictEqual(arrowRows, jsonRows);
    });

    it('stitches multi-page REST Page 1 + gRPC Page 2+ into standard JS rows in query() and createQueryStream()', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('R', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      const [arrowRows] = await bigquery.query({
        query: sql,
        queryResultsFormat: 'ARROW',
      });
      assert.strictEqual(arrowRows.length, 15000);
      assert.strictEqual(arrowRows[0].idx, 1);
      assert.strictEqual(arrowRows[14999].idx, 15000);

      let streamedCount = 0;
      for await (const row of bigquery.createQueryStream({
        query: sql,
        queryResultsFormat: 'ARROW',
      })) {
        streamedCount++;
        if (streamedCount === 1) {
          assert.strictEqual(row.idx, 1);
        }
      }
      assert.strictEqual(streamedCount, 15000);
    });

    it('infers all BigQuery types from Arrow extension metadata on jobs.insert fallback without inline REST TableSchema', async () => {
      const sql = `
        SELECT
          42 AS int_val,
          DATETIME '2024-06-15 14:30:45.123456' AS dt_val,
          TIMESTAMP '2024-06-15 14:30:45.123456Z' AS ts_val,
          ST_GEOGPOINT(10, 20) AS geo_val,
          JSON '{"ok": true}' AS json_val,
          RANGE(DATE '2024-01-01', DATE '2024-01-31') AS range_val
      `;

      const [jsonRows] = await bigquery.query({
        query: sql,
        jobId: `json_fallback_${randomUUID().replace(/-/g, '_')}`,
        parseJSON: true,
      });
      const [arrowRows] = await bigquery.query({
        query: sql,
        jobId: `arrow_fallback_${randomUUID().replace(/-/g, '_')}`,
        queryResultsFormat: 'ARROW',
        parseJSON: true,
      });

      assert.deepStrictEqual(arrowRows, jsonRows);
    });
  });

  // ===========================================================================
  // Requirement 3: Zero-Copy Columnar API (queryArrow & createQueryArrowStream)
  // ===========================================================================
  describe('3. Zero-Copy Columnar API (BigQuery, Dataset, and Table Helpers)', () => {
    it('executes dataset and table queryArrow() and createQueryArrowStream() scoped helpers', async () => {
      const [arrowTable] = await dataset.queryArrow(
        `SELECT id, label FROM \`${tableId}\` ORDER BY id`,
      );
      assert.strictEqual(arrowTable.numRows, 3);

      const batches: RecordBatch[] = [];
      for await (const batch of table.createQueryArrowStream(
        `SELECT id, label FROM \`${tableId}\` ORDER BY id`,
      )) {
        batches.push(batch as RecordBatch);
      }
      const streamedRows = batches.reduce((acc, b) => acc + b.numRows, 0);
      assert.strictEqual(streamedRows, 3);
    });

    it('supports named (@param) and positional (?) query parameters across queryArrow() and query()', async () => {
      const [namedTable] = await dataset.queryArrow({
        query: `SELECT id, label FROM \`${tableId}\` WHERE label = @target`,
        params: {target: 'beta'},
      });
      assert.strictEqual(namedTable.numRows, 1);
      assert.strictEqual(namedTable.getChild('id')!.get(0), 2n);

      const [posRows] = await dataset.query({
        query: `SELECT id, label FROM \`${tableId}\` WHERE id = ?`,
        params: [3],
        queryResultsFormat: 'ARROW',
      });
      assert.deepStrictEqual(posRows, [{id: 3, label: 'gamma'}]);
    });

    it('preserves full Arrow schema on 0-row empty queries via queryArrow()', async () => {
      const [emptyTable] = await table.queryArrow(
        `SELECT id, label FROM \`${tableId}\` WHERE 1 = 0`,
      );
      assert.strictEqual(emptyTable.numRows, 0);
      assert.deepStrictEqual(
        emptyTable.schema.fields.map((f: Field) => f.name),
        ['id', 'label'],
      );
    });

    it('handles non-SELECT (DML) statements cleanly in queryArrow() with 0 result rows', async () => {
      const [dmlTable] = await dataset.queryArrow(
        `INSERT INTO \`${tableId}\` (id, label) VALUES (99, 'dml_row')`,
      );
      assert.strictEqual(dmlTable.numRows, 0);
    });

    it('populates response totalRows from ReadRowsResponse.totalRowCount on multi-page streams', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('D', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      const [table, , respMeta] = await bigquery.queryArrow(sql);
      assert.strictEqual(table.numRows, 15000);
      assert.strictEqual(
        respMeta?.totalRows,
        '15000',
        `Expected ReadRowsResponse.totalRowCount to update responseMeta.totalRows to '15000', got '${respMeta?.totalRows}'`,
      );
    });
  });

  // ===========================================================================
  // Requirement 4: Arrow Serialization & Precision Options
  // ===========================================================================
  describe('4. Arrow Serialization & Precision Options (arrowSerializationOptions)', () => {
    it('forwards arrowSerializationOptions (picosTimestampPrecision) consistently across Page 1 (REST) and Page 2+ (Storage Read API)', async () => {
      const sql = `
        SELECT
          i AS idx,
          TIMESTAMP '2024-06-15 14:30:45.123456Z' AS ts_col,
          REPEAT('B', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      const [arrowTable] = await bigquery.queryArrow({
        query: sql,
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_NANOS',
        },
      });
      assert.strictEqual(arrowTable.numRows, 15000);

      const singleSql =
        "SELECT TIMESTAMP '2024-06-15 14:30:45.123456Z' AS ts_val";
      const [jsonRows] = await bigquery.query({query: singleSql});
      const [arrowRows] = await bigquery.query({
        query: singleSql,
        queryResultsFormat: 'ARROW',
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_NANOS',
        },
      });
      assert.deepStrictEqual(arrowRows, jsonRows);
    });
  });

  // ===========================================================================
  // Requirement 5: Streaming Backpressure, Resource Lifecycle & Error Handling
  // ===========================================================================
  describe('5. Streaming Backpressure, Client Caching & Error Handling', () => {
    it('streams Storage Read API batches incrementally per generator pull without buffering all pages upfront', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('A', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      let batchCount = 0;
      let totalRows = 0;
      for await (const batch of bigquery.createQueryArrowStream(sql)) {
        const rb = batch as RecordBatch;
        batchCount++;
        totalRows += rb.numRows;
        assert.ok(
          rb.numRows < 15000,
          `Expected discrete incremental RecordBatches (<15000 rows), got ${rb.numRows}`,
        );
      }
      assert.strictEqual(totalRows, 15000);
      assert.ok(
        batchCount > 2,
        `Expected incremental multi-batch streaming (batchCount > 2), got batchCount=${batchCount}`,
      );
    });

    it('reuses a cached BigQueryReadClient across multiple multi-page queries on the same BigQuery client instance', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('C', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      await bigquery.queryArrow(sql);
      const clientAfterFirstQuery = getOrCreateStorageReadClient(bigquery);
      assert.ok(
        clientAfterFirstQuery,
        'Expected BigQuery instance to cache BigQueryReadClient after first Storage Read query',
      );

      await bigquery.queryArrow(sql);
      const clientAfterSecondQuery = getOrCreateStorageReadClient(bigquery);
      assert.strictEqual(
        clientAfterFirstQuery,
        clientAfterSecondQuery,
        'Expected consecutive multi-page queries to reuse the exact same BigQueryReadClient instance',
      );
    });

    it('cancels active gRPC readRows stream immediately when breaking early from for-await', async () => {
      const sql = `
        SELECT
          i AS idx,
          REPEAT('E', 2400) AS payload
        FROM UNNEST(GENERATE_ARRAY(1, 15000)) AS i
        ORDER BY i
      `;

      await bigquery.queryArrow(sql);
      const storageClient = getOrCreateStorageReadClient(bigquery);
      const origReadRows = storageClient.readRows.bind(storageClient);

      let cancelCalled = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      storageClient.readRows = (req: any) => {
        const grpcStream = origReadRows(req);
        const origCancel = grpcStream.cancel.bind(grpcStream);
        grpcStream.cancel = () => {
          cancelCalled = true;
          return origCancel();
        };
        return grpcStream;
      };

      try {
        let batchCount = 0;
        for await (const batch of bigquery.createQueryArrowStream(sql)) {
          assert.ok(batch);
          batchCount++;
          if (batchCount === 2) {
            break;
          }
        }
        await new Promise(resolve => setTimeout(resolve, 25));
        assert.strictEqual(
          cancelCalled,
          true,
          'Expected breaking early from for-await to invoke grpcStream.cancel()',
        );
      } finally {
        storageClient.readRows = origReadRows;
      }
    });

    it('surfaces descriptive query execution errors on both fast path (jobs.query) and fallback path (jobs.insert _default stream)', async () => {
      await assert.rejects(
        () => bigquery.queryArrow('SELECT 1 / 0'),
        /division by zero/i,
      );

      await assert.rejects(
        () =>
          bigquery.queryArrow({
            query: 'SELECT 1 / 0',
            jobId: `arrow_err_${randomUUID().replace(/-/g, '_')}`,
          }),
        /division by zero/i,
      );
    });
  });
});

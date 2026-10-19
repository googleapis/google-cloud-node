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

  it('should reject WRITE_APPEND before running the query and leave the destination table unchanged', async () => {
    // Reading a WRITE_APPEND destination would also return the rows already
    // in the table, so the stream rejects it before sending the query.
    const tableRef = `\`${dataset.id}.append_target\``;
    await bigquery.query(`CREATE TABLE ${tableRef} AS SELECT 1 AS x`);

    await assert.rejects(
      bigquery
        .createQueryArrowStream({
          query: 'SELECT 2 AS x',
          destination: dataset.table('append_target'),
          writeDisposition: 'WRITE_APPEND',
        })
        .toArray(),
      /WRITE_APPEND is not supported with Arrow query results/,
    );

    // Verify the query never ran: the table still holds only its original row.
    const [rows] = await bigquery.query(`SELECT x FROM ${tableRef}`);
    assert.deepStrictEqual(rows, [{x: 1}]);
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
});

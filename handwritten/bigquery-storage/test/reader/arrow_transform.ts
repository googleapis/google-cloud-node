// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as protos from '../../protos/protos';
import {RecordBatchStreamWriter, tableFromArrays} from 'apache-arrow';
import {Readable} from 'stream';
import {
  ArrowRawTransform,
  ArrowRecordBatchTableRowTransform,
  ArrowRecordBatchTransform,
  ArrowRecordReaderTransform,
} from '../../src/reader/arrow_transform';
import {BigQuery} from '@google-cloud/bigquery';
import bigquery from '@google-cloud/bigquery/build/src/types';

type ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IReadRowsResponse;
const ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.ReadRowsResponse;

describe('Arrow Transform', () => {
  it('Pipeline with all transforms', async () => {
    const schema: bigquery.ITableSchema = {
      fields: [
        {name: 'name', type: 'STRING'},
        {name: 'row', type: 'INTEGER'},
        {name: 'arr', type: 'INTEGER', mode: 'REPEATED'},
        {
          name: 'rec',
          type: 'RECORD',
          fields: [
            {name: 'key', type: 'STRING'},
            {name: 'value', type: 'STRING'},
          ],
        },
        {
          name: 'recs',
          type: 'RECORD',
          mode: 'REPEATED',
          fields: [{name: 'num', type: 'INTEGER'}],
        },
      ],
    };
    const table = tableFromArrays({
      name: ['Ada Lovelace', 'Alan Turing', 'Bell'],
      row: [1, 2, 3],
      arr: [
        [10, 20],
        [20, 30],
        [30, 40],
      ],
      rec: [
        {key: 'foo', value: 'bar'},
        {key: 'test', value: 'baz'},
        {key: 'a key', value: 'a value'},
      ],
      recs: [
        [{num: 10}, {num: 20}],
        [{num: 20}, {num: 30}],
        [{num: 30}, {num: 40}],
      ],
    });
    const writer = RecordBatchStreamWriter.writeAll(table);
    const serializedRecordBatch = writer.toUint8Array(true);
    const serializedSchema = Uint8Array.from([]);
    const response: ReadRowsResponse = {
      arrowSchema: {
        serializedSchema,
      },
      arrowRecordBatch: {
        serializedRecordBatch,
        rowCount: table.numRows,
      },
    };

    const pipeline = Readable.from([response])
      .pipe(new ArrowRawTransform())
      .pipe(new ArrowRecordReaderTransform({arrowSchema: {serializedSchema}}))
      .pipe(new ArrowRecordBatchTransform())
      .pipe(new ArrowRecordBatchTableRowTransform());

    const consumeRows = new Promise<any[]>(resolve => {
      const rows: any[] = [];
      pipeline
        .on('data', data => rows.push(data))
        .on('end', () => resolve(rows));
    });
    const tableRows = await consumeRows;
    const rows = BigQuery.mergeSchemaWithRows_(schema, tableRows, {
      wrapIntegers: false,
    });
    assert.deepStrictEqual(rows, [
      {
        name: 'Ada Lovelace',
        row: 1,
        arr: [10, 20],
        rec: {key: 'foo', value: 'bar'},
        recs: [{num: 10}, {num: 20}],
      },
      {
        name: 'Alan Turing',
        row: 2,
        arr: [20, 30],
        rec: {key: 'test', value: 'baz'},
        recs: [{num: 20}, {num: 30}],
      },
      {
        name: 'Bell',
        row: 3,
        arr: [30, 40],
        rec: {key: 'a key', value: 'a value'},
        recs: [{num: 30}, {num: 40}],
      },
    ]);
  });
});

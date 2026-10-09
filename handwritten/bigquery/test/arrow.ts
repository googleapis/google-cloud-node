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
import {describe, it} from 'mocha';
import * as Big from 'big.js';
import {
  Binary,
  DateDay,
  Decimal,
  Field,
  Int64,
  RecordBatch,
  RecordBatchStreamWriter,
  Schema,
  Struct,
  TimeMicrosecond,
  TimestampMicrosecond,
  Utf8,
  makeData,
  tableFromArrays,
  vectorFromArray,
} from 'apache-arrow';
import {
  BigQuery,
  BigQueryDate,
  BigQueryDatetime,
  BigQueryInt,
  BigQueryTime,
  BigQueryTimestamp,
  Geography,
} from '../src/bigquery';
import {
  parseArrowSchema,
  parseArrowRecordBatches,
  deserializeArrowRows,
} from '../src/arrow';

/**
 * Helper to generate realistic BigQuery Arrow IPC bytes (separate serializedSchema
 * and serializedRecordBatch buffers matching BigQuery REST / Storage Read API format).
 */
function buildArrowIpcPayloads(ids: bigint[], names: string[]) {
  const table = tableFromArrays({
    id: BigInt64Array.from(ids),
    name: names,
  });
  const fullIpc = RecordBatchStreamWriter.writeAll(table).toUint8Array(true);

  const schemaOnlyWriter = new RecordBatchStreamWriter();
  schemaOnlyWriter.reset(undefined, table.schema);
  schemaOnlyWriter.finish();
  const schemaOnlyIpc = schemaOnlyWriter.toUint8Array(true);

  const schemaMsg = schemaOnlyIpc.subarray(0, schemaOnlyIpc.byteLength - 8);
  const batchMsg = fullIpc.subarray(schemaMsg.byteLength);

  return {
    schemaBase64: Buffer.from(schemaMsg).toString('base64'),
    fullIpcBase64: Buffer.from(batchMsg).toString('base64'),
    schemaUint8: schemaMsg,
    fullIpcUint8: batchMsg,
  };
}

describe('Apache Arrow Support', () => {
  it('parses Arrow IPC schema & record batches including 0-row schema', () => {
    const {schemaBase64} = buildArrowIpcPayloads([], []);
    const schema = parseArrowSchema(schemaBase64);
    assert.deepStrictEqual(
      schema.fields.map((f: Field) => f.name),
      ['id', 'name'],
    );
    assert.deepStrictEqual(parseArrowRecordBatches(schemaBase64, null), []);
  });

  it('deserializes Arrow RecordBatches across all BigQuery scalar & temporal types', () => {
    // 2023-01-01T12:00:00.123456Z -> 1672574400123456n micros
    const tsMicros = 1672574400123456n;
    const tsData = makeData({
      type: new TimestampMicrosecond(),
      length: 1,
      data: BigInt64Array.from([tsMicros]),
    });
    const dateVec = vectorFromArray(
      [new Date('2023-05-15T00:00:00Z')],
      new DateDay(),
    );
    const timeVec = vectorFromArray([45296123456n], new TimeMicrosecond());
    const numVec = vectorFromArray(
      [new Uint32Array([123456789, 0, 0, 0])],
      new Decimal(9, 38, 128),
    );
    const bytesVec = vectorFromArray([new Uint8Array([1, 2, 3])], new Binary());
    const dtVec = vectorFromArray(['2023-05-15T08:30:00.123456'], new Utf8());
    const geoVec = vectorFromArray(['POINT(1 2)'], new Utf8());
    const jsonVec = vectorFromArray(['{"a":42}'], new Utf8());
    const intVec = vectorFromArray([9007199254740993n], new Int64());

    const schema = new Schema([
      new Field('ts', new TimestampMicrosecond()),
      new Field('dt_date', new DateDay()),
      new Field('tm', new TimeMicrosecond()),
      new Field('num', new Decimal(9, 38, 128)),
      new Field('raw_bytes', new Binary()),
      new Field('dt_datetime', new Utf8()),
      new Field('geo', new Utf8()),
      new Field('json_col', new Utf8()),
      new Field('big_int', new Int64()),
    ]);

    const batch = new RecordBatch(
      schema,
      makeData({
        type: new Struct(schema.fields),
        length: 1,
        children: [
          tsData,
          dateVec.data[0],
          timeVec.data[0],
          numVec.data[0],
          bytesVec.data[0],
          dtVec.data[0],
          geoVec.data[0],
          jsonVec.data[0],
          intVec.data[0],
        ],
      }),
    );

    const rows = deserializeArrowRows(
      [batch],
      {
        fields: [
          {name: 'ts', type: 'TIMESTAMP'},
          {name: 'dt_date', type: 'DATE'},
          {name: 'tm', type: 'TIME'},
          {name: 'num', type: 'NUMERIC'},
          {name: 'raw_bytes', type: 'BYTES'},
          {name: 'dt_datetime', type: 'DATETIME'},
          {name: 'geo', type: 'GEOGRAPHY'},
          {name: 'json_col', type: 'JSON'},
          {name: 'big_int', type: 'INT64'},
        ],
      },
      {wrapIntegers: true, parseJSON: true},
    );

    assert.strictEqual(rows.length, 1);
    const row = rows[0];
    assert.ok(row.ts instanceof BigQueryTimestamp);
    assert.strictEqual(row.ts.value, '2023-01-01T12:00:00.123456000Z');
    assert.ok(row.dt_date instanceof BigQueryDate);
    assert.strictEqual(row.dt_date.value, '2023-05-15');
    assert.ok(row.tm instanceof BigQueryTime);
    assert.strictEqual(row.tm.value, '12:34:56.123456');
    assert.ok(row.num instanceof Big);
    assert.strictEqual(row.num.toFixed(9), '0.123456789');
    assert.ok(Buffer.isBuffer(row.raw_bytes));
    assert.deepStrictEqual(row.raw_bytes, Buffer.from([1, 2, 3]));
    assert.ok(row.dt_datetime instanceof BigQueryDatetime);
    assert.strictEqual(row.dt_datetime.value, '2023-05-15T08:30:00.123456');
    assert.ok(row.geo instanceof Geography);
    assert.strictEqual(row.geo.value, 'POINT(1 2)');
    assert.deepStrictEqual(row.json_col, {a: 42});
    assert.ok(row.big_int instanceof BigQueryInt);
    assert.strictEqual(row.big_int.value, '9007199254740993');

    // Verify unsafe BigQueryInt throws standard out-of-bounds Error on valueOf()
    assert.throws(
      () => row.big_int.valueOf(),
      /out of bounds of 'Number\.MAX_SAFE_INTEGER'/,
    );
  });

  it('decodes ISO-8601 Utf8 TIMESTAMP_PICOS columns when picosTimestampPrecision is TIMESTAMP_PRECISION_PICOS', () => {
    const picosIso = '2024-06-15T14:30:45.123456789123Z';
    const tsVec = vectorFromArray([picosIso], new Utf8());
    const tsField = new Field(
      'ts_picos',
      new Utf8(),
      true,
      new Map([['ARROW:extension:name', 'google:sqlType:timestamp_picos']]),
    );
    const schema = new Schema([tsField]);
    const batch = new RecordBatch(
      schema,
      makeData({
        type: new Struct(schema.fields),
        length: 1,
        children: [tsVec.data[0]],
      }),
    );

    const rows = deserializeArrowRows([batch]);
    assert.strictEqual(rows.length, 1);
    assert.ok(rows[0].ts_picos instanceof BigQueryTimestamp);
    assert.strictEqual(rows[0].ts_picos.value, picosIso);
  });

  it('omits client-only Arrow properties from JobConfigurationQuery payload on jobs.insert fallback', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let capturedJobConfigQuery: any;
    const resolved = require.resolve('@google-cloud/bigquery-storage');
    const origModule = require.cache[resolved];
    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: {
        BigQueryReadClient: class MockReadClient {
          readRows() {
            return (async function* () {})();
          }
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bq as any).createJob = (reqOpts: any, callback: any) => {
        capturedJobConfigQuery = reqOpts.configuration.query;
        process.nextTick(() =>
          callback(null, {
            id: 'job-fallback',
            location: 'US',
            bigQuery: bq,
            metadata: {},
          }),
        );
      };

      await bq.queryArrow({
        query: 'SELECT 1',
        jobId: 'custom-job-id',
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_NANOS',
        },
      });

      assert.strictEqual(capturedJobConfigQuery.queryResultsFormat, undefined);
      assert.strictEqual(
        capturedJobConfigQuery.arrowSerializationOptions,
        undefined,
      );
    } finally {
      if (origModule) {
        require.cache[resolved] = origModule;
      } else {
        delete require.cache[resolved];
      }
    }
  });

  it('returns standard JS rows from bigquery.query({ queryResultsFormat: "ARROW" })', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const {schemaBase64, fullIpcBase64} = buildArrowIpcPayloads(
      [1n, 2n],
      ['foo', 'bar'],
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bq as any).request = (reqOpts: any, callback: any) => {
      assert.strictEqual(reqOpts.json.queryResultsFormat, 'ARROW');
      process.nextTick(() =>
        callback(null, {
          queryId: 'q-1',
          jobComplete: true,
          schema: {
            fields: [
              {name: 'id', type: 'INT64'},
              {name: 'name', type: 'STRING'},
            ],
          },
          arrowSchema: {serializedSchema: schemaBase64},
          arrowRecordBatch: {
            serializedRecordBatch: fullIpcBase64,
            rowCount: '2',
          },
        }),
      );
    };

    const [rows] = await bq.query({
      query: 'SELECT 1 AS id, "foo" AS name',
      queryResultsFormat: 'ARROW',
    });
    assert.deepStrictEqual(rows, [
      {id: 1, name: 'foo'},
      {id: 2, name: 'bar'},
    ]);
  });

  it('streams raw RecordBatches via createQueryArrowStream and dataset/table helpers', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const {schemaBase64, fullIpcBase64} = buildArrowIpcPayloads(
      [1n, 2n, 3n],
      ['a', 'b', 'c'],
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bq as any).request = (reqOpts: any, callback: any) => {
      assert.strictEqual(reqOpts.method, 'POST');
      assert.strictEqual(reqOpts.uri, '/queries');
      assert.strictEqual(reqOpts.json.queryResultsFormat, 'ARROW');
      process.nextTick(() =>
        callback(null, {
          queryId: 'q-2',
          jobComplete: true,
          totalRows: '3',
          arrowSchema: {serializedSchema: schemaBase64},
          arrowRecordBatch: {
            serializedRecordBatch: fullIpcBase64,
            rowCount: '3',
          },
        }),
      );
    };

    const batches: RecordBatch[] = [];
    for await (const batch of bq
      .dataset('ds')
      .table('tbl')
      .createQueryArrowStream('SELECT 1')) {
      batches.push(batch as RecordBatch);
    }

    assert.strictEqual(batches.length, 1);
    assert.strictEqual(batches[0].numRows, 3);
  });

  it('preserves ArrowSchema on 0-row empty query in queryArrow()', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const {schemaBase64} = buildArrowIpcPayloads([], []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (bq as any).request = (_reqOpts: any, callback: any) => {
      process.nextTick(() =>
        callback(null, {
          queryId: 'q-3',
          jobComplete: true,
          totalRows: '0',
          arrowSchema: {serializedSchema: schemaBase64},
          arrowRecordBatch: {},
        }),
      );
    };

    const [table] = await bq.queryArrow('SELECT id, name FROM empty WHERE 1=0');
    assert.strictEqual(table.numRows, 0);
    assert.deepStrictEqual(
      table.schema.fields.map((f: Field) => f.name),
      ['id', 'name'],
    );
  });

  it('assembles multi-page ArrowTable across REST Page 1 + Storage Read API Page 2', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const page1 = buildArrowIpcPayloads([1n, 2n], ['one', 'two']);
    const page2 = buildArrowIpcPayloads([3n, 4n], ['three', 'four']);

    const resolved = require.resolve('@google-cloud/bigquery-storage');
    const origModule = require.cache[resolved];
    let capturedOffset = -1;

    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: {
        BigQueryReadClient: class MockReadClient {
          readRows(req: {readStream: string; offset: number}) {
            capturedOffset = req.offset;
            return (async function* () {
              yield {
                arrowSchema: {serializedSchema: page2.schemaUint8},
                arrowRecordBatch: {serializedRecordBatch: page2.fullIpcUint8},
              };
            })();
          }
          async close() {}
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bq as any).request = (_reqOpts: any, callback: any) => {
        process.nextTick(() =>
          callback(null, {
            jobComplete: true,
            jobReference: {
              projectId: 'my-project',
              jobId: 'job-1',
              location: 'US',
            },
            pageToken: 'page-2-token',
            arrowSchema: {serializedSchema: page1.schemaBase64},
            arrowRecordBatch: {
              serializedRecordBatch: page1.fullIpcBase64,
              rowCount: '2',
            },
          }),
        );
      };

      const [table] = await bq.queryArrow('SELECT id, name FROM big_table');
      assert.strictEqual(capturedOffset, 2);
      assert.strictEqual(table.numRows, 4);
      assert.strictEqual(table.batches.length, 2);
    } finally {
      if (origModule) {
        require.cache[resolved] = origModule;
      } else {
        delete require.cache[resolved];
      }
    }
  });

  it('slices multi-page Arrow batches to respect total maxResults cap and cancels gRPC stream early', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const page1 = buildArrowIpcPayloads([1n, 2n], ['one', 'two']);
    const page2 = buildArrowIpcPayloads(
      [3n, 4n, 5n],
      ['three', 'four', 'five'],
    );

    const resolved = require.resolve('@google-cloud/bigquery-storage');
    const origModule = require.cache[resolved];
    let cancelCalled = false;

    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: {
        BigQueryReadClient: class MockReadClient {
          readRows() {
            const gen = (async function* () {
              yield {
                arrowSchema: {serializedSchema: page2.schemaUint8},
                arrowRecordBatch: {serializedRecordBatch: page2.fullIpcUint8},
              };
            })();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (gen as any).cancel = () => {
              cancelCalled = true;
            };
            return gen;
          }
          async close() {}
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bq as any).request = (_reqOpts: any, callback: any) => {
        process.nextTick(() =>
          callback(null, {
            jobComplete: true,
            jobReference: {
              projectId: 'my-project',
              jobId: 'job-max',
              location: 'US',
            },
            pageToken: 'page-2-token',
            arrowSchema: {serializedSchema: page1.schemaBase64},
            arrowRecordBatch: {
              serializedRecordBatch: page1.fullIpcBase64,
              rowCount: '2',
            },
          }),
        );
      };

      const [table] = await bq.queryArrow({
        query: 'SELECT id, name FROM big_table',
        maxResults: 3,
      });
      assert.strictEqual(table.numRows, 3);
      assert.strictEqual(table.getChild('id')!.get(2), 3n);
      assert.strictEqual(cancelCalled, true);
    } finally {
      if (origModule) {
        require.cache[resolved] = origModule;
      } else {
        delete require.cache[resolved];
      }
    }
  });

  it('reads explicit destination tables via createReadSession (maxStreamCount: 1)', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const destTable = bq.dataset('dest_ds').table('dest_tbl');
    const page = buildArrowIpcPayloads([10n, 20n], ['ten', 'twenty']);

    const resolved = require.resolve('@google-cloud/bigquery-storage');
    const origModule = require.cache[resolved];
    let capturedTableRef = '';
    let capturedMaxStreams = -1;
    let capturedStreamName = '';

    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: {
        BigQueryReadClient: class MockReadClient {
          async createReadSession(req: {
            parent: string;
            readSession: {table: string; dataFormat: string};
            maxStreamCount: number;
          }) {
            capturedTableRef = req.readSession.table;
            capturedMaxStreams = req.maxStreamCount;
            return [
              {
                arrowSchema: {serializedSchema: page.schemaUint8},
                streams: [
                  {
                    name: 'projects/my-project/locations/US/sessions/s1/streams/0',
                  },
                ],
              },
            ];
          }
          readRows(req: {readStream: string; offset: number}) {
            capturedStreamName = req.readStream;
            return (async function* () {
              yield {
                arrowRecordBatch: {serializedRecordBatch: page.fullIpcUint8},
              };
            })();
          }
          async close() {}
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bq as any).createQueryJob = (_q: any, cb: any) => {
        const fakeJob = {
          id: 'job-dest',
          location: 'US',
          metadata: {
            configuration: {
              query: {
                destinationTable: {
                  projectId: 'my-project',
                  datasetId: 'dest_ds',
                  tableId: 'dest_tbl',
                },
              },
            },
          },
          getQueryResults: async () => [[], null, {totalRows: '2'}],
        };
        process.nextTick(() => cb(null, fakeJob, fakeJob.metadata));
      };

      const [table] = await bq.queryArrow({
        query: 'SELECT id, name FROM src_tbl',
        destination: destTable,
      });
      assert.strictEqual(
        capturedTableRef,
        'projects/my-project/datasets/dest_ds/tables/dest_tbl',
      );
      assert.strictEqual(capturedMaxStreams, 1);
      assert.strictEqual(
        capturedStreamName,
        'projects/my-project/locations/US/sessions/s1/streams/0',
      );
      assert.strictEqual(table.numRows, 2);
      assert.strictEqual(table.getChild('id')!.get(1), 20n);
    } finally {
      if (origModule) {
        require.cache[resolved] = origModule;
      } else {
        delete require.cache[resolved];
      }
    }
  });

  it('emits a warning when installed @google-cloud/bigquery-storage lacks ReadRowsRequest.arrowSerializationOptions', async () => {
    const bq = new BigQuery({projectId: 'my-project'});
    const page1 = buildArrowIpcPayloads([1n], ['one']);
    const page2 = buildArrowIpcPayloads([2n], ['two']);

    const resolved = require.resolve('@google-cloud/bigquery-storage');
    const origModule = require.cache[resolved];
    const warnings: string[] = [];
    const origEmitWarning = process.emitWarning;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process.emitWarning = ((warning: string) => {
      warnings.push(String(warning));
    }) as typeof process.emitWarning;

    require.cache[resolved] = {
      id: resolved,
      filename: resolved,
      loaded: true,
      exports: {
        BigQueryReadClient: class OldMockReadClient {
          _protos = {
            google: {
              cloud: {
                bigquery: {
                  storage: {
                    v1: {
                      ReadRowsRequest: {
                        type: {field: [{name: 'readStream'}, {name: 'offset'}]},
                      },
                    },
                  },
                },
              },
            },
          };
          readRows() {
            return (async function* () {
              yield {
                arrowSchema: {serializedSchema: page2.schemaUint8},
                arrowRecordBatch: {serializedRecordBatch: page2.fullIpcUint8},
              };
            })();
          }
          async close() {}
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (bq as any).request = (_reqOpts: any, callback: any) => {
        process.nextTick(() =>
          callback(null, {
            jobComplete: true,
            jobReference: {
              projectId: 'my-project',
              jobId: 'job-old-proto',
              location: 'US',
            },
            pageToken: 'page-2-token',
            arrowSchema: {serializedSchema: page1.schemaBase64},
            arrowRecordBatch: {
              serializedRecordBatch: page1.fullIpcBase64,
              rowCount: '1',
            },
          }),
        );
      };

      const [table] = await bq.queryArrow({
        query: 'SELECT id, name FROM big_table',
        arrowSerializationOptions: {
          picosTimestampPrecision: 'TIMESTAMP_PRECISION_PICOS',
        },
      });
      assert.strictEqual(table.numRows, 2);
      assert.strictEqual(warnings.length, 1);
      assert.match(warnings[0], /arrowSerializationOptions/);
    } finally {
      process.emitWarning = origEmitWarning;
      if (origModule) {
        require.cache[resolved] = origModule;
      } else {
        delete require.cache[resolved];
      }
    }
  });
});

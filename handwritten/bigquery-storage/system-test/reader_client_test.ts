// Copyright 2023 Google LLC
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
import * as gax from 'google-gax';
import * as uuid from 'uuid';
import * as sinon from 'sinon';
import {BigQuery, TableRow, TableSchema} from '@google-cloud/bigquery';
import * as protos from '../protos/protos';
import * as protobuf from 'protobufjs';
import {ClientOptions} from 'google-gax';
import * as customerRecordProtoJson from './fixtures/customer_record.json';
import * as bigquerystorage from '../src';
import * as reader from '../src/reader';
import {cleanupDatasets} from './util';
import {RecordBatch, Table, tableFromIPC} from 'apache-arrow';
import {ArrowRecordBatchTableRowTransform} from '../src/reader/arrow_transform';
import {ResourceStream} from '@google-cloud/paginator';
import {ArrowTableReader} from '../src/reader';
import {Transform, TransformCallback} from 'stream';
type ReadSession = protos.google.cloud.bigquery.storage.v1.IReadSession;

type ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IReadRowsResponse;
const {ReadClient, ArrowFormat, AvroFormat} = reader;

const sandbox = sinon.createSandbox();
afterEach(() => sandbox.restore());

if (process.env.NODE_ENV === 'DEBUG') {
  reader.setLogFunction(console.log);
}

const GCLOUD_TESTS_PREFIX = 'nodejs_bqstorage_system_test';
const bigquery = new BigQuery();
const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${uuid.v4()}`.replace(/-/gi, '_');
const datasetId = generateUuid();

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const root = protobuf.Root.fromJSON(customerRecordProtoJson);
if (!root) {
  throw Error('Proto must not be undefined');
}

describe('reader.ReaderClient', () => {
  let projectId: string;
  let parent: string;
  let tableRef: string;
  let tableId: string;
  let bqReadClient: bigquerystorage.BigQueryReadClient;
  let clientOptions: ClientOptions;
  const schema: TableSchema = {
    fields: [
      {
        name: 'name',
        type: 'STRING',
        mode: 'REQUIRED',
      },
      {
        name: 'row_num',
        type: 'INTEGER',
        mode: 'REQUIRED',
      },
      {
        name: 'optional',
        type: 'STRING',
        mode: 'NULLABLE',
      },
      {
        name: 'list',
        type: 'INT64',
        mode: 'REPEATED',
      },
      {
        name: 'metadata',
        type: 'RECORD',
        mode: 'NULLABLE',
        fields: [
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            mode: 'REQUIRED',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            mode: 'NULLABLE',
          },
        ],
      },
    ],
  };

  before(async () => {
    await cleanupDatasets(bigquery, GCLOUD_TESTS_PREFIX);

    await bigquery.createDataset(datasetId);
  }).timeout(2 * 60 * 1000);

  beforeEach(async () => {
    tableId = generateUuid();

    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, {schema});

    projectId = table.metadata.tableReference.projectId;

    parent = `projects/${projectId}`;
    tableRef = `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`;

    await bigquery
      .dataset(datasetId)
      .table(tableId)
      .insert([
        {
          name: 'Ada Lovelace',
          row_num: 1,
          optional: 'Some data',
          list: [1],
          metadata: {
            created_at: bigquery.timestamp('2020-04-27T18:07:25.356Z'),
            updated_at: bigquery.timestamp('2020-04-27T20:07:25.356Z'),
          },
        },
        {
          name: 'Alan Turing',
          row_num: 2,
          optional: 'Some other data',
          list: [1, 2],
          metadata: {
            created_at: bigquery.timestamp('2020-04-27T18:07:25.356Z'),
          },
        },
        {name: 'Bell', row_num: 3, list: [1, 2, 3]},
      ]);
  });

  after(async () => {
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
  });

  beforeEach(async () => {
    clientOptions = {
      projectId: projectId,
      'grpc.keepalive_time_ms': 30 * 1000,
      'grpc.keepalive_timeout_ms': 10 * 1000,
    };
    bqReadClient = new bigquerystorage.BigQueryReadClient(clientOptions);
  });

  afterEach(async () => {
    await bqReadClient.close();
  });

  describe('Common methods', () => {
    it('should create a client without arguments', () => {
      const client = new ReadClient();
      assert(client.getClient());
    });

    it('should create a client with arguments: parent, client, opts', async () => {
      const client = new ReadClient(clientOptions);
      assert(client.getClient());
      const clientId = await client.getClient().getProjectId();
      assert.strictEqual(clientId, clientOptions.projectId);
    });
  });

  describe('Read', () => {
    it('should invoke createReadSession and createReadStream without errors', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const session = await client.createReadSession({
          parent,
          table: tableRef,
          dataFormat: ArrowFormat,
        });

        assert.equal(session.dataFormat, ArrowFormat);
        assert.notEqual(session.streams, null);
        assert.equal(session.streams?.length, 1);

        const readStream = session.streams![0];
        const stream = await client.createReadStream({
          session,
          streamName: readStream.name!,
        });
        const rowStream = stream.getRowsStream();

        const responses: ReadRowsResponse[] = [];
        await new Promise((resolve, reject) => {
          rowStream.on('data', (data: ReadRowsResponse) => {
            responses.push(data);
          });
          rowStream.on('error', reject);
          rowStream.on('end', () => {
            resolve(null);
          });
        });

        assert.equal(responses.length, 1);

        const res = responses[0];
        assert.equal(stream['_offset'], res.rowCount);
        stream.close();
      } finally {
        client.close();
      }
    });
  });

  describe('AvroReader', () => {
    it('should read high precision timestamps from an avro stream', async () => {
      const avro = require('avsc');
      class AvroRawTransform extends Transform {
        private session: ReadSession;

        constructor(session: ReadSession) {
          super({
            objectMode: true,
          });
          this.session = session;
        }

        _transform(
          serializedRecordBatch: any,
          _: BufferEncoding,
          callback: TransformCallback,
        ): void {
          const session = this.session;
          const schema = JSON.parse(session?.avroSchema?.schema as string);
          const avroType = avro.Type.forSchema(schema);
          if (
            !(
              serializedRecordBatch.avroRows &&
              serializedRecordBatch.avroRows.serializedBinaryRows
            )
          ) {
            callback(null);
            return;
          }
          const decodedData = avroType.decode(
            serializedRecordBatch.avroRows.serializedBinaryRows,
            0,
          );
          callback(null, decodedData.value);
        }
      }

      const picosTableId = generateUuid();
      const picosSchema: any = {
        fields: [
          {
            name: 'customer_name',
            type: 'STRING',
            mode: 'REQUIRED',
          },
          {
            name: 'row_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            mode: 'NULLABLE',
            timestampPrecision: 12,
          },
        ],
      };
      const expectedTsValue = '2024-04-05T15:45:58.981123456789Z';
      await bigquery
        .dataset(datasetId)
        .createTable(picosTableId, {schema: picosSchema});
      await bigquery
        .dataset(datasetId)
        .table(picosTableId)
        .insert([
          {
            customer_name: 'my-name',
            row_num: 1,
            created_at: expectedTsValue,
          },
        ]);

      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const session = await client.createReadSession({
          parent: `projects/${projectId}`,
          table: `projects/${projectId}/datasets/${datasetId}/tables/${picosTableId}`,
          dataFormat: AvroFormat,
          avroSerializationOptions: {
            picosTimestampPrecision:
              protos.google.cloud.bigquery.storage.v1.ArrowSerializationOptions
                .PicosTimestampPrecision.TIMESTAMP_PRECISION_PICOS,
          },
        });

        assert.equal(session.dataFormat, AvroFormat);
        assert.notEqual(session.streams, null);
        assert.notEqual(session.streams?.length, 0);

        const readStream = session.streams![0];
        const connection = await client.createReadStream({
          session,
          streamName: readStream.name!,
        });

        const myStream = connection
          .getRowsStream()
          .pipe(new AvroRawTransform(session!));
        const responses: ReadRowsResponse[] = [];
        await new Promise((resolve, reject) => {
          myStream.on('data', (data: ReadRowsResponse) => {
            responses.push(data);
          });
          myStream.on('error', reject);
          myStream.on('end', () => {
            resolve(null);
          });
        });

        assert.equal(responses.length, 1);
        assert.equal((responses[0] as any)['created_at'], expectedTsValue);

        connection.close();
        client.close();
      } finally {
        client.close();
      }
    });
  });
  describe('ArrowTableReader', () => {
    it('should allow to read a table as an Arrow byte stream', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createArrowTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });

        const rawStream = await reader.getStream();

        const session = reader.getSessionInfo();
        assert.notEqual(session, null);
        assert.equal(session?.dataFormat, ArrowFormat);

        const content: Buffer = await new Promise((resolve, reject) => {
          let serializedSchema: string | Uint8Array = '';
          if (session?.arrowSchema?.serializedSchema) {
            serializedSchema = session?.arrowSchema?.serializedSchema;
          }
          // type checking needs to occur before calling Buffer.from
          // has to do with overload resolution
          // related to https://github.com/microsoft/TypeScript/issues/14107
          let buf: Buffer;
          if (typeof serializedSchema === 'string') {
            buf = Buffer.from(serializedSchema);
          } else if (serializedSchema instanceof Uint8Array) {
            buf = Buffer.from(serializedSchema);
          }
          rawStream.on('data', (data: Uint8Array) => {
            buf = Buffer.concat([buf, data]);
          });
          rawStream.on('error', reject);
          rawStream.on('end', () => {
            resolve(buf);
          });
        });
        const table = await tableFromIPC(content);

        assert.equal(table.numRows, 3);
        assert.equal(table.numCols, 5);

        reader.close();
      } finally {
        client.close();
      }
    });

    it('should allow to read a table as a stream of Arrow Record Batches', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createArrowTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });

        const recordBatchStream = await reader.getRecordBatchStream();

        const session = reader.getSessionInfo();
        assert.notEqual(session, null);
        assert.equal(session?.dataFormat, ArrowFormat);

        const batches: RecordBatch[] = [];
        for await (const batch of recordBatchStream) {
          batches.push(batch);
        }
        const table = new Table(batches);

        assert.equal(table.numRows, 3);
        assert.equal(table.numCols, 5);

        reader.close();
      } finally {
        client.close();
      }
    });
  });

  describe('TableReader', () => {
    it('should allow to read a table as a stream', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });

        const rowStream = await reader.getRowStream();
        const rows: TableRow[] = [];
        await new Promise((resolve, reject) => {
          rowStream.on('data', (data: TableRow) => {
            rows.push(data);
          });
          rowStream.on('error', reject);
          rowStream.on('end', () => {
            resolve(null);
          });
        });

        const session = reader.getSessionInfo();
        assert.notEqual(session, null);
        assert.equal(session?.dataFormat, ArrowFormat);

        assert.equal(rows.length, 3);

        assert.deepEqual(rows, [
          {
            f: [
              {
                v: 'Ada Lovelace',
              },
              {
                v: '1',
              },
              {
                v: 'Some data',
              },
              {
                v: [
                  {
                    v: '1',
                  },
                ],
              },
              {
                v: {
                  f: [
                    {
                      v: 1588010845356000,
                    },
                    {
                      v: 1588018045356000,
                    },
                  ],
                },
              },
            ],
          },
          {
            f: [
              {
                v: 'Alan Turing',
              },
              {
                v: '2',
              },
              {
                v: 'Some other data',
              },
              {
                v: [
                  {
                    v: '1',
                  },
                  {
                    v: '2',
                  },
                ],
              },
              {
                v: {
                  f: [
                    {
                      v: 1588010845356000,
                    },
                    {
                      v: null,
                    },
                  ],
                },
              },
            ],
          },
          {
            f: [
              {
                v: 'Bell',
              },
              {
                v: '3',
              },
              {
                v: null,
              },
              {
                v: [
                  {
                    v: '1',
                  },
                  {
                    v: '2',
                  },
                  {
                    v: '3',
                  },
                ],
              },
              {
                v: null,
              },
            ],
          },
        ]);
        const mergedRows = BigQuery.mergeSchemaWithRows_(schema, rows, {
          wrapIntegers: false,
        });
        assert.deepEqual(mergedRows, [
          {
            name: 'Ada Lovelace',
            row_num: 1,
            optional: 'Some data',
            list: [1],
            metadata: {
              created_at: {
                value: '2020-04-27T18:07:25.356Z',
              },
              updated_at: {
                value: '2020-04-27T20:07:25.356Z',
              },
            },
          },
          {
            name: 'Alan Turing',
            row_num: 2,
            optional: 'Some other data',
            list: [1, 2],
            metadata: {
              created_at: {
                value: '2020-04-27T18:07:25.356Z',
              },
              updated_at: null,
            },
          },
          {
            name: 'Bell',
            row_num: 3,
            list: [1, 2, 3],
            optional: null,
            metadata: null,
          },
        ]);

        reader.close();
      } finally {
        client.close();
      }
    });

    it('should allow to read a table with picosecond precision as a stream', async () => {
      const picosTableId = generateUuid();
      const picosSchema: any = {
        fields: [
          {
            name: 'customer_name',
            type: 'STRING',
            mode: 'REQUIRED',
          },
          {
            name: 'row_num',
            type: 'INTEGER',
            mode: 'REQUIRED',
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            mode: 'NULLABLE',
            timestampPrecision: 12,
          },
        ],
      };
      const expectedTsValue = '2024-04-05T15:45:58.981123456789Z';
      await bigquery
        .dataset(datasetId)
        .createTable(picosTableId, {schema: picosSchema});
      await bigquery
        .dataset(datasetId)
        .table(picosTableId)
        .insert([
          {
            customer_name: 'my-name',
            row_num: 1,
            created_at: expectedTsValue,
          },
        ]);

      // Try with a read stream from a session.
      const client1 = new ReadClient();
      const sessionTableRef = {
        datasetId,
        projectId,
        tableId: picosTableId,
      };
      const arrowReader = new ArrowTableReader(client1, sessionTableRef);
      const finalStream = (
        await arrowReader.getRecordBatchStream({
          arrowSerializationOptions: {
            picosTimestampPrecision:
              protos.google.cloud.bigquery.storage.v1.ArrowSerializationOptions
                .PicosTimestampPrecision.TIMESTAMP_PRECISION_PICOS,
          },
        })
      ).pipe(
        new ArrowRecordBatchTableRowTransform(),
      ) as ResourceStream<TableRow>;

      const responses: ReadRowsResponse[] = [];
      await new Promise((resolve, reject) => {
        finalStream.on('data', (data: ReadRowsResponse) => {
          responses.push(data);
        });
        finalStream.on('error', reject);
        finalStream.on('end', () => {
          resolve(null);
        });
      });

      assert.equal(responses.length, 1);
      assert.strictEqual((responses[0] as any)['f'][2]['v'], expectedTsValue);
    });

    it('should allow to read a table as tabledata.list RowsResponse', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });

        const [rows, session, response] = await reader.getRows();

        assert.notEqual(session, null);
        assert.equal(session?.dataFormat, ArrowFormat);

        assert.notEqual(response.totalRows, null); // estimated row count
        assert.equal(response.rows?.length, 3);

        assert.equal(rows.length, 3);

        reader.close();
      } finally {
        client.close();
      }
    });

    it('should allow to read a table with long running query', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const genTableId = generateUuid();
        await bigquery.query(
          `CREATE TABLE ${projectId}.${datasetId}.${genTableId} AS SELECT num FROM UNNEST(GENERATE_ARRAY(1,1000000)) as num`,
        );
        const reader = await client.createTableReader({
          table: {
            projectId,
            datasetId,
            tableId: genTableId,
          },
        });

        const [rows, session, response] = await reader.getRows();

        assert.notEqual(session, null);
        assert.equal(session?.dataFormat, ArrowFormat);

        assert.notEqual(response.totalRows, null); // estimated row count
        assert.equal(response.rows?.length, 1000000);

        assert.equal(rows.length, 1000000);

        reader.close();
      } finally {
        client.close();
      }
    }).timeout(60 * 1000);
  });

  describe('Error Scenarios', () => {
    it('send request with mismatched selected fields', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });

        let foundError: gax.GoogleError | null = null;
        try {
          const rowStream = await reader.getRowStream({
            selectedFields: 'wrong_field',
          });
          const rows: TableRow[] = [];
          for await (const data of rowStream) {
            rows.push(data);
          }
        } catch (err) {
          assert.notEqual(err, null);
          foundError = err as gax.GoogleError;
        }

        assert.notEqual(foundError, null);
        assert.equal(foundError?.code, gax.Status.INVALID_ARGUMENT);
        assert.equal(
          foundError?.message.includes(
            'request failed: The following selected fields do not exist in the table schema: wrong_field',
          ),
          true,
        );

        reader.close();
      } finally {
        client.close();
      }
    });

    it('should trigger reconnection when intermitent error happens', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const reader = await client.createTableReader({
          table: {
            projectId,
            datasetId,
            tableId,
          },
        });
        await reader.getRowStream();

        // access private stream connection
        const stream = reader['_arrowReader']['_session']['_readStreams'][0];
        let reconnectedCalled = false;
        sandbox.stub(stream, 'reconnect').callsFake(() => {
          reconnectedCalled = true;
        });
        const conn = stream['_connection'] as gax.CancellableStream; // private method

        const gerr = new gax.GoogleError('aborted');
        gerr.code = gax.Status.ABORTED;
        conn.emit('error', gerr);
        conn.emit('close');

        assert.equal(reconnectedCalled, true);
      } finally {
        client.close();
      }
    });
  });

  describe('close', () => {
    it('should invoke close without errors', async () => {
      bqReadClient.initialize().catch(err => {
        throw err;
      });
      const client = new ReadClient();
      client.setClient(bqReadClient);

      try {
        const session = await client.createReadSession({
          parent: `projects/${projectId}`,
          table: `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`,
          dataFormat: AvroFormat,
        });

        assert.equal(session.dataFormat, AvroFormat);
        assert.notEqual(session.streams, null);
        assert.notEqual(session.streams?.length, 0);

        const readStream = session.streams![0];
        const connection = await client.createReadStream({
          session,
          streamName: readStream.name!,
        });
        await sleep(100);

        const internalConn = connection['_connection']!;

        connection.close();
        assert.strictEqual(internalConn.destroyed, true);

        client.close();
      } finally {
        client.close();
      }
    });
  });
});

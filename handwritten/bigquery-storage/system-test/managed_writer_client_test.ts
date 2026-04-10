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
import {readFileSync} from 'fs';
import * as path from 'path';
import {describe, it} from 'mocha';
import * as uuid from 'uuid';
import * as gax from 'google-gax';
import * as sinon from 'sinon';
import {BigQuery, TableSchema} from '@google-cloud/bigquery';
import * as protos from '../protos/protos';
import * as bigquerywriter from '../src';
import * as protobuf from 'protobufjs';
import {ClientOptions} from 'google-gax';
import * as customerRecordProtoJson from './fixtures/customer_record.json';
import {JSONEncoder} from '../src/managedwriter/encoder';
import {PendingWrite} from '../src/managedwriter/pending_write';
import {PreciseDate} from '@google-cloud/precise-date';
import {cleanupDatasets} from './util';

const pkg = JSON.parse(
  readFileSync(path.resolve(__dirname, '../../package.json'), 'utf-8'),
);

const sandbox = sinon.createSandbox();
afterEach(() => sandbox.restore());

const {managedwriter, adapt} = bigquerywriter;
const {WriterClient, Writer, JSONWriter, parseStorageErrors} = managedwriter;
const {Type} = protobuf;

if (process.env.NODE_ENV === 'DEBUG') {
  managedwriter.setLogFunction(console.log);
}

type WriteStream = protos.google.cloud.bigquery.storage.v1.IWriteStream;
type DescriptorProto = protos.google.protobuf.IDescriptorProto;
type IInt64Value = protos.google.protobuf.IInt64Value;
type AppendRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IAppendRowsResponse;
type AppendRowsRequest =
  protos.google.cloud.bigquery.storage.v1.IAppendRowsRequest;

const FieldDescriptorProtoType =
  protos.google.protobuf.FieldDescriptorProto.Type;

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
const CustomerRecord = root.lookupType('CustomerRecord');

describe('managedwriter.WriterClient', () => {
  let projectId: string;
  let parent: string;
  let tableId: string;
  let bqWriteClient: bigquerywriter.BigQueryWriteClient;
  let clientOptions: ClientOptions;
  const schema: TableSchema = {
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
    ],
  };
  const protoDescriptor: DescriptorProto = {
    name: 'CustomerRecord',
    field: [
      {
        name: 'customer_name',
        number: 1,
        type: FieldDescriptorProtoType.TYPE_STRING,
      },
      {
        name: 'row_num',
        number: 2,
        type: FieldDescriptorProtoType.TYPE_INT64,
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

    parent = `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`;
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
    bqWriteClient = new bigquerywriter.BigQueryWriteClient(clientOptions);
  });

  afterEach(async () => {
    await bqWriteClient.close();
  });

  describe('Common methods', () => {
    it('should create a client without arguments', () => {
      const client = new WriterClient();
      assert(client.getClient());
    });

    it('should create a client with arguments: parent, client, opts, writeStream', async () => {
      const client = new WriterClient(clientOptions);
      assert(client.getClient());
      const clientId = await client.getClient().getProjectId();
      assert.strictEqual(clientId, clientOptions.projectId);
    });
  });

  describe('Writer', () => {
    it('should invoke appendRows without errors', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const streamType: WriteStream['type'] = managedwriter.PendingStream;
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };
      const row1Message = CustomerRecord.create(row1);
      const serializedRow1Message: Uint8Array =
        CustomerRecord.encode(row1Message).finish();

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };
      const row2Message = CustomerRecord.create(row2);
      const serializedRow2Message: Uint8Array =
        CustomerRecord.encode(row2Message).finish();

      const offset: IInt64Value['value'] = '0';

      const streamId = await client.createWriteStream({
        streamType,
        destinationTable: parent,
      });
      const appendRowsResponsesResult: AppendRowsResponse[] = [
        {
          appendResult: {
            offset: {
              value: offset,
            },
          },
          writeStream: streamId,
        },
      ];
      try {
        const connection = await client.createStreamConnection({
          streamId,
        });
        const writer = new Writer({
          connection,
          protoDescriptor,
        });
        const pw = writer.appendRows(
          {
            serializedRows: [serializedRow1Message, serializedRow2Message],
          },
          offset,
        );
        const result = await pw.getResult();
        const responses: AppendRowsResponse[] = [
          {
            appendResult: result.appendResult,
            writeStream: result.writeStream,
          },
        ];

        assert.deepEqual(appendRowsResponsesResult, responses);

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 2);

        const commitResponse = await client.batchCommitWriteStream({
          parent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);
      } finally {
        client.close();
      }
    });

    it('should invoke appendRows to default stream without errors', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Lovelace',
        row_num: 1,
      };
      const row1Message = CustomerRecord.create(row1);
      const serializedRow1Message: Uint8Array =
        CustomerRecord.encode(row1Message).finish();

      // Row 2
      const row2 = {
        customer_name: 'Turing',
        row_num: 2,
      };
      const row2Message = CustomerRecord.create(row2);
      const serializedRow2Message: Uint8Array =
        CustomerRecord.encode(row2Message).finish();

      const appendRowsResponsesResult: AppendRowsResponse[] = [
        {
          appendResult: {
            offset: null,
          },
          writeStream: parent + '/streams/_default',
        },
        {
          appendResult: {
            offset: null,
          },
          writeStream: parent + '/streams/_default',
        },
      ];
      try {
        const connection = await client.createStreamConnection({
          streamId: managedwriter.DefaultStream,
          destinationTable: parent,
        });
        const writer = new Writer({
          connection,
          protoDescriptor,
        });
        const pw1 = await writer.appendRows({
          serializedRows: [serializedRow1Message, serializedRow2Message],
        });
        const pw2 = await writer.appendRows({
          serializedRows: [serializedRow1Message, serializedRow2Message],
        });
        const results = await Promise.all([pw1.getResult(), pw2.getResult()]);
        const responses: AppendRowsResponse[] = results.map(result => ({
          appendResult: result.appendResult,
          writeStream: result.writeStream,
        }));

        assert.deepEqual(appendRowsResponsesResult, responses);

        writer.close();
        client.close();
      } finally {
        client.close();
      }
    });

    it('should invoke createWriteStream when streamType and destination table informed to createStreamConnection', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const streamType: WriteStream['type'] = managedwriter.PendingStream;
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Lovelace',
        row_num: 1,
      };
      const row1Message = CustomerRecord.create(row1);
      const serializedRow1Message: Uint8Array =
        CustomerRecord.encode(row1Message).finish();

      // Row 2
      const row2 = {
        customer_name: 'Turing',
        row_num: 2,
      };
      const row2Message = CustomerRecord.create(row2);
      const serializedRow2Message: Uint8Array =
        CustomerRecord.encode(row2Message).finish();

      try {
        const connection = await client.createStreamConnection({
          streamType,
          destinationTable: parent,
        });
        const streamId = connection.getStreamId();
        const writer = new Writer({
          connection,
          protoDescriptor,
        });
        const pw1 = await writer.appendRows({
          serializedRows: [serializedRow1Message, serializedRow2Message],
        });
        const pw2 = await writer.appendRows({
          serializedRows: [serializedRow1Message, serializedRow2Message],
        });
        const results = await Promise.all([pw1.getResult(), pw2.getResult()]);
        const responses: AppendRowsResponse[] = results.map(result => ({
          appendResult: result.appendResult,
          writeStream: result.writeStream,
        }));

        const appendRowsResponsesResult: AppendRowsResponse[] = [
          {
            appendResult: {
              offset: {
                value: '0',
              },
            },
            writeStream: streamId,
          },
          {
            appendResult: {
              offset: {
                value: '2',
              },
            },
            writeStream: streamId,
          },
        ];
        assert.deepEqual(appendRowsResponsesResult, responses);

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 4);

        const commitResponse = await client.batchCommitWriteStream({
          parent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);
      } finally {
        client.close();
      }
    });
  });

  describe('StreamConnection', () => {
    it('should pass traceId on AppendRequests', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Lovelace',
        row_num: 1,
      };

      // Row 2
      const row2 = {
        customer_name: 'Turing',
        row_num: 2,
      };

      try {
        const connection = await client.createStreamConnection({
          streamId: managedwriter.DefaultStream,
          destinationTable: parent,
        });
        let writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        let pw1 = await writer.appendRows([row1, row2]);
        let pw2 = await writer.appendRows([row1, row2]);
        await Promise.all([pw1.getResult(), pw2.getResult()]);

        let requests = [pw1.getRequest(), pw2.getRequest()];
        requests.every(req => {
          assert.notEqual(req.traceId, null);
          assert.strictEqual(req.traceId, `nodejs-writer:${pkg.version}`);
        });

        writer = new JSONWriter({
          traceId: 'foo',
          connection,
          protoDescriptor,
        });

        pw1 = await writer.appendRows([row1, row2]);
        pw2 = await writer.appendRows([row1, row2]);
        await Promise.all([pw1.getResult(), pw2.getResult()]);

        requests = [pw1.getRequest(), pw2.getRequest()];
        requests.every(req => {
          assert.notEqual(req.traceId, null);
          assert.strictEqual(req.traceId, `nodejs-writer:${pkg.version} foo`);
        });

        writer.close();
        client.close();
      } finally {
        client.close();
      }
    });
  });

  describe('JSONEncoder', () => {
    it('should automatically convert date/datetime/timestamps to expect BigQuery format', () => {
      const updatedSchema: TableSchema = {
        fields: [
          ...(schema.fields || []),
          {
            name: 'customer_birthday',
            type: 'DATE',
            mode: 'REQUIRED',
          },
          {
            name: 'customer_metadata',
            type: 'RECORD',
            mode: 'REQUIRED',
            fields: [
              {
                name: 'customer_created_at',
                type: 'DATETIME',
                mode: 'REQUIRED',
              },
              {
                name: 'customer_updated_at',
                type: 'TIMESTAMP',
              },
            ],
          },
          {
            name: 'customer_last_purchase_dates',
            type: 'TIMESTAMP',
            mode: 'REPEATED',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(updatedSchema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');
      const encoder = new JSONEncoder({
        protoDescriptor,
      });

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
        customer_birthday: new Date('1815-12-10'),
        customer_metadata: {
          customer_created_at: new Date('2022-01-09T03:49:46.564000Z'),
          customer_updated_at: new Date('2023-01-09T03:49:46.564000Z'),
        },
        customer_last_purchase_dates: [
          new PreciseDate('2022-01-09T03:49:46.564321Z'),
          new PreciseDate('2023-01-09T03:49:46.564321Z'),
        ],
      };

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
        customer_birthday: new Date('1912-07-23'),
        customer_metadata: {
          customer_created_at: new Date('2022-01-09T03:49:46.564000Z'),
          customer_updated_at: new Date('2023-01-09T03:49:46.564000Z'),
        },
        customer_last_purchase_dates: [
          new PreciseDate('2022-01-09T03:49:46.564321Z'),
          new PreciseDate('2023-01-09T03:49:46.564321Z'),
        ],
      };

      const Proto = Type.fromDescriptor(protoDescriptor);
      const encoded = encoder.encodeRows([row1, row2]);

      const encodedRow1 = encoded[0];
      const decodedRow1 = Proto.decode(encodedRow1).toJSON();
      assert.deepEqual(decodedRow1, {
        customer_name: 'Ada Lovelace',
        row_num: '1',
        customer_birthday: -56270,
        customer_metadata: {
          customer_created_at: '2022-01-09 03:49:46.564',
          customer_updated_at: '1673236186564000',
        },
        customer_last_purchase_dates: ['1641700186564321', '1673236186564321'],
      });

      const encodedRow2 = encoded[1];
      const decodedRow2 = Proto.decode(encodedRow2).toJSON();
      assert.deepEqual(decodedRow2, {
        customer_name: 'Alan Turing',
        row_num: '2',
        customer_birthday: -20981,
        customer_metadata: {
          customer_created_at: '2022-01-09 03:49:46.564',
          customer_updated_at: '1673236186564000',
        },
        customer_last_purchase_dates: ['1641700186564321', '1673236186564321'],
      });
    });

    it('should automatically convert numeric/bignumeric to expect BigQuery format', () => {
      const updatedSchema = {
        fields: [
          ...(schema.fields || []),
          {
            name: 'customer_points',
            type: 'NUMERIC',
          },
          {
            name: 'customer_funds',
            type: 'BIGNUMERIC',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(updatedSchema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');
      const encoder = new JSONEncoder({
        protoDescriptor,
      });

      // accept plain integers and bigint
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
        customer_points: 1234,
        customer_funds: BigInt(123456789),
      };

      // accept floats
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
        customer_points: 1234.56,
        customer_funds: '123456789.001234', // still accept in string
      };

      const Proto = Type.fromDescriptor(protoDescriptor);
      const encoded = encoder.encodeRows([row1, row2]);

      const encodedRow1 = encoded[0];
      const decodedRow1 = Proto.decode(encodedRow1).toJSON();
      assert.deepEqual(decodedRow1, {
        customer_name: 'Ada Lovelace',
        row_num: 1,
        customer_points: '1234',
        customer_funds: '123456789',
      });

      const encodedRow2 = encoded[1];
      const decodedRow2 = Proto.decode(encodedRow2).toJSON();
      assert.deepEqual(decodedRow2, {
        customer_name: 'Alan Turing',
        row_num: 2,
        customer_points: '1234.56',
        customer_funds: '123456789.001234',
      });
    });
  });

  describe('JSONWriter', () => {
    it('should invoke appendRows without errors', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const streamType: WriteStream['type'] = managedwriter.PendingStream;
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };

      const offset: IInt64Value['value'] = '0';

      const streamId = await client.createWriteStream({
        streamType,
        destinationTable: parent,
      });
      const appendRowsResponsesResult: AppendRowsResponse[] = [
        {
          appendResult: {
            offset: {
              value: offset,
            },
          },
          writeStream: streamId,
        },
      ];
      try {
        const connection = await client.createStreamConnection({
          streamId,
        });
        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });
        const pw = writer.appendRows([row1, row2], offset);
        const result = await pw.getResult();
        const responses: AppendRowsResponse[] = [
          {
            appendResult: result.appendResult,
            writeStream: result.writeStream,
          },
        ];

        assert.deepEqual(appendRowsResponsesResult, responses);

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 2);

        const commitResponse = await client.batchCommitWriteStream({
          parent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);

        writer.close();
      } finally {
        client.close();
      }
    });

    it('should invoke appendRows with picosecond precision timestamp without errors', async () => {
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
      const [table] = await bigquery
        .dataset(datasetId)
        .createTable(picosTableId, {schema: picosSchema});
      const picosParent = `projects/${projectId}/datasets/${datasetId}/tables/${table.id}`;

      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const streamType: WriteStream['type'] = managedwriter.PendingStream;
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(picosSchema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      // Row 1
      const expectedTsValue = '2023-01-01T12:00:00.123456789123Z';
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
        created_at: expectedTsValue,
      };

      const offset: IInt64Value['value'] = '0';

      const streamId = await client.createWriteStream({
        streamType,
        destinationTable: picosParent,
      });
      const appendRowsResponsesResult: AppendRowsResponse[] = [
        {
          appendResult: {
            offset: {
              value: offset,
            },
          },
          writeStream: streamId,
        },
      ];
      try {
        const connection = await client.createStreamConnection({
          streamId,
        });
        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });
        const pw = writer.appendRows([row1], offset);
        const result = await pw.getResult();
        const responses: AppendRowsResponse[] = [
          {
            appendResult: result.appendResult,
            writeStream: result.writeStream,
          },
        ];

        assert.deepEqual(appendRowsResponsesResult, responses);

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 1);

        const commitResponse = await client.batchCommitWriteStream({
          parent: picosParent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);

        writer.close();

        // Now read to make sure the written data is correct:
        const options: {[key: string]: any} = {};
        const timestampOutputFormat = 'ISO8601_STRING';
        const useInt64Timestamp = false;

        options['formatOptions.timestampOutputFormat'] = timestampOutputFormat;
        options['formatOptions.useInt64Timestamp'] = useInt64Timestamp;

        // TODO: When the latest version of Bigquery is released supporting high
        // precision reads then we should use that instead of request here.
        await new Promise<void>((resolve, reject) => {
          (table as any).request(
            {
              uri: '/data',
              qs: options,
            },
            (err: any, resp: any) => {
              if (err) {
                reject(err);
                return;
              }
              try {
                assert(resp.rows && resp.rows.length > 0);
                assert.strictEqual(resp.rows[0].f[2].v, expectedTsValue);
                resolve();
              } catch (e) {
                reject(e);
              }
            },
          );
        });
      } finally {
        client.close();
      }
    });

    it('should update proto descriptor automatically with appendRows without errors', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };

      let receivedSchemaNotification = false;
      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });
        connection.onSchemaUpdated(schema => {
          receivedSchemaNotification = !!schema;
        });
        connection.onConnectionError(err => {
          throw err;
        });

        const streamId = connection.getStreamId();
        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        let offset: IInt64Value['value'] = 0;
        let pw = writer.appendRows([row1, row2], offset);
        let result = await pw.getResult();

        assert.equal(result.error, null);

        const updatedSchema = {
          fields: [
            ...(schema.fields || []),
            {
              name: 'customer_email',
              type: 'STRING',
            },
          ],
        };
        const [md] = await bigquery
          .dataset(datasetId)
          .table(tableId)
          .setMetadata({
            schema: updatedSchema,
          });
        assert.deepEqual(md.schema, updatedSchema);

        // Row with new field
        const rowUpdated = {
          customer_name: 'Charles Babbage',
          row_num: 3,
          customer_email: 'charles@babbage.com',
        };
        offset = 2;

        while (!result.updatedSchema) {
          pw = writer.appendRows([rowUpdated], offset);
          rowUpdated.row_num++;
          offset++;
          result = await pw.getResult();
        }

        const updatedStorageSchema =
          adapt.convertBigQuerySchemaToStorageTableSchema(updatedSchema);
        assert.equal(
          result.updatedSchema.fields?.length,
          updatedStorageSchema.fields?.length,
        );
        assert.equal(receivedSchemaNotification, true);

        pw = writer.appendRows([rowUpdated], offset);
        offset++;
        result = await pw.getResult();

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, offset);

        const commitResponse = await client.batchCommitWriteStream({
          parent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);

        const [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${tableId}\` order by row_num`,
        );

        assert.strictEqual(rows.length, offset);
        assert.deepEqual(rows[rows.length - 1], rowUpdated);

        writer.close();
      } finally {
        client.close();
      }
    }).timeout(30 * 1000);

    it('Change data capture (CDC)', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const schema: TableSchema = {
        fields: [
          {
            name: 'id',
            type: 'INTEGER',
            mode: 'REQUIRED',
          },
          {
            name: 'username',
            type: 'STRING',
            mode: 'REQUIRED',
          },
        ],
      };
      const [table] = await bigquery
        .dataset(datasetId)
        .createTable(tableId + '_cdc', {
          schema,
          clustering: {
            fields: ['id'],
          },
          tableConstraints: {
            primaryKey: {
              columns: ['id'],
            },
          },
        });
      const parent = `projects/${projectId}/datasets/${datasetId}/tables/${table.id}`;

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(
          storageSchema,
          'root',
          adapt.withChangeType(),
        );

      const row1 = {
        id: 1,
        username: 'Alice',
        _CHANGE_TYPE: 'INSERT',
      };

      const row2 = {
        id: 2,
        username: 'Bob',
        _CHANGE_TYPE: 'INSERT',
      };

      try {
        const insertConn = await client.createStreamConnection({
          streamId: managedwriter.DefaultStream,
          destinationTable: parent,
        });

        const writer = new JSONWriter({
          connection: insertConn,
          protoDescriptor,
        });

        let pw = writer.appendRows([row1, row2]);
        let result = await pw.getResult();

        let [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${table.id}\` order by id`,
        );
        assert.strictEqual(rows.length, 2);

        const updaterConn = await client.createStreamConnection({
          streamId: managedwriter.DefaultStream,
          destinationTable: parent,
        });

        const updater = new JSONWriter({
          connection: updaterConn,
          protoDescriptor,
        });

        // Change Alice and send Charles
        row1.username = 'Alice in Wonderlands';
        row1._CHANGE_TYPE = 'UPSERT';

        const row3 = {
          id: 3,
          username: 'Charles',
          _CHANGE_TYPE: 'UPSERT',
        };

        pw = updater.appendRows([row1, row3]);
        result = await pw.getResult();

        [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${table.id}\` order by id`,
        );
        assert.strictEqual(rows.length, 3);

        // Remove Bob
        row2._CHANGE_TYPE = 'DELETE';

        pw = updater.appendRows([row2]);
        result = await pw.getResult();

        [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${table.id}\` order by id`,
        );
        assert.strictEqual(rows.length, 2);

        assert.deepStrictEqual(rows, [
          {id: 1, username: 'Alice in Wonderlands'},
          {id: 3, username: 'Charles'},
        ]);

        writer.close();
        updater.close();
      } finally {
        client.close();
      }
    });

    it('Flexible Columns and annotations', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const schema: TableSchema = {
        fields: [
          {
            name: '特別コラム',
            type: 'INTEGER',
            mode: 'REQUIRED',
          },
          {
            name: 'second',
            type: 'STRING',
            mode: 'REQUIRED',
          },
          {
            name: 'third-column',
            type: 'STRING',
            mode: 'REQUIRED',
          },
        ],
      };
      const [table] = await bigquery
        .dataset(datasetId)
        .createTable(tableId + '_flexible', {schema});
      const parent = `projects/${projectId}/datasets/${datasetId}/tables/${table.id}`;

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      const row1 = {
        特別コラム: 1,
        second: 'second_value',
        'third-column': 'another_value',
      };

      const row2 = {
        特別コラム: 2,
        second: 'another_one',
        'third-column': 'yet_another',
      };

      try {
        const connection = await client.createStreamConnection({
          streamId: managedwriter.DefaultStream,
          destinationTable: parent,
        });

        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        const pw = writer.appendRows([row1, row2]);
        await pw.getResult();

        const [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${table.id}\``,
        );
        assert.strictEqual(rows.length, 2);
        assert.deepStrictEqual(rows, [
          {
            特別コラム: 1,
            second: 'second_value',
            'third-column': 'another_value',
          },
          {
            特別コラム: 2,
            second: 'another_one',
            'third-column': 'yet_another',
          },
        ]);

        writer.close();
      } finally {
        client.close();
      }
    });

    it('should fill default values when MissingValuesInterpretation is set', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const schema: TableSchema = {
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
            name: 'id',
            type: 'STRING',
            mode: 'REQUIRED',
            defaultValueExpression: 'GENERATE_UUID()',
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            defaultValueExpression: 'CURRENT_TIMESTAMP()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            defaultValueExpression: 'CURRENT_TIMESTAMP()',
          },
        ],
      };
      const [table] = await bigquery
        .dataset(datasetId)
        .createTable(tableId + '_default_values', {schema});
      const parent = `projects/${projectId}/datasets/${datasetId}/tables/${table.id}`;

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const streamId = connection.getStreamId();
        const writer = new JSONWriter({
          connection,
          protoDescriptor,
          defaultMissingValueInterpretation: 'DEFAULT_VALUE',
          missingValueInterpretations: {
            updated_at: 'NULL_VALUE',
          },
        });

        let pw = writer.appendRows([row1, row2], 0);
        let result = await pw.getResult();

        // change MVI config
        writer.setDefaultMissingValueInterpretation('NULL_VALUE');
        writer.setMissingValueInterpretations({
          id: 'DEFAULT_VALUE',
          updated_at: 'DEFAULT_VALUE',
        });

        const row3 = {
          customer_name: 'Charles Babbage',
          row_num: 3,
        };

        const row4 = {
          customer_name: 'Lord Byron',
          row_num: 4,
        };

        pw = writer.appendRows([row3, row4], 2);
        result = await pw.getResult();

        assert.equal(result.error, null);

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 4);

        const commitResponse = await client.batchCommitWriteStream({
          parent,
          writeStreams: [streamId],
        });
        assert.equal(commitResponse.streamErrors?.length, 0);

        const [rows] = await bigquery.query(
          `SELECT * FROM \`${projectId}.${datasetId}.${table.id}\` order by row_num`,
        );
        assert.strictEqual(rows.length, 4);

        const first = rows[0];
        assert.notEqual(first.id, '');
        assert.notEqual(first.created_at, null);
        assert.equal(first.updated_at, null);

        const second = rows[1];
        assert.notEqual(second.id, '');
        assert.notEqual(second.created_at, null);
        assert.equal(second.updated_at, null);

        // After change on MVI config
        const third = rows[2];
        assert.notEqual(third.id, '');
        assert.equal(third.created_at, null);
        assert.notEqual(third.updated_at, null);

        const forth = rows[3];
        assert.notEqual(forth.id, '');
        assert.equal(forth.created_at, null);
        assert.notEqual(forth.updated_at, null);

        writer.close();
      } finally {
        client.close();
      }
    });
  });

  describe('Flaky Scenarios', () => {
    let flakyDatasetId: string;
    const flakyRegion = 'us-east7';

    let rowNum = 0;
    const generateRows = (num: number) => {
      const rows = [];
      for (let i = 0; i < num; i++) {
        rows.push({
          customer_name: generateUuid(),
          row_num: rowNum++,
        });
      }
      return rows;
    };

    beforeEach(() => {
      rowNum = 0;
    });

    before(async () => {
      flakyDatasetId = generateUuid();
      await bigquery.createDataset(flakyDatasetId, {
        location: flakyRegion,
      });
    });

    after(async () => {
      await bigquery
        .dataset(flakyDatasetId)
        .delete({force: true})
        .catch(console.warn);
    });

    describe('should manage to send data in sequence scenario', () => {
      it('every 10 request drops the connection', async () => {
        bqWriteClient.initialize().catch(err => {
          throw err;
        });
        const client = new WriterClient();
        client.enableWriteRetries(true);
        client.setClient(bqWriteClient);

        try {
          const flakyTableId = generateUuid() + '_reconnect_on_close';
          const [table] = await bigquery
            .dataset(flakyDatasetId)
            .createTable(flakyTableId, {
              schema,
              location: flakyRegion,
            });
          projectId = table.metadata.tableReference.projectId;
          parent = `projects/${projectId}/datasets/${flakyDatasetId}/tables/${flakyTableId}`;

          const connection = await client.createStreamConnection({
            streamType: managedwriter.PendingStream,
            destinationTable: parent,
          });

          const writer = new JSONWriter({
            connection,
            protoDescriptor,
          });

          const iterations = new Array(50).fill(1);
          let offset = 0;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const _ of iterations) {
            const rows = generateRows(10);
            const pw = writer.appendRows(rows, offset);
            try {
              await pw.getResult();
            } catch (err) {
              console.error('found error trying to send rows');
            }
            offset += 10;
          }

          const res = await connection.finalize();
          connection.close();
          assert.equal(res?.rowCount, 500);

          writer.close();
        } finally {
          client.close();
        }
      }).timeout(2 * 60 * 1000);

      it('opening the connection can fail more frequently', async () => {
        bqWriteClient.initialize().catch(err => {
          throw err;
        });
        const client = new WriterClient();
        client.enableWriteRetries(true);
        client.setMaxRetryAttempts(100); // aggresive retries
        client.setClient(bqWriteClient);

        try {
          const flakyTableId = generateUuid() + '_initial_connect_failure';
          const [table] = await bigquery
            .dataset(flakyDatasetId)
            .createTable(flakyTableId, {
              schema,
              location: flakyRegion,
            });
          projectId = table.metadata.tableReference.projectId;
          parent = `projects/${projectId}/datasets/${flakyDatasetId}/tables/${flakyTableId}`;

          const connection = await client.createStreamConnection({
            streamType: managedwriter.PendingStream,
            destinationTable: parent,
          });

          const writer = new JSONWriter({
            connection,
            protoDescriptor,
          });

          const iterations = new Array(50).fill(1);
          let offset = 0;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const _ of iterations) {
            const rows = generateRows(10);
            const pw = writer.appendRows(rows, offset);
            try {
              const res = await pw.getResult();
              assert.equal(res.error, null);
            } catch (err) {
              console.error('found error trying to send rows', err);
              throw err;
            }
            offset += 10;
            connection.close(); // Close connection on every append to trigger reconnection
          }

          const res = await connection.finalize();
          connection.close();
          assert.equal(res?.rowCount, 500);

          writer.close();
        } finally {
          client.close();
        }
      }).timeout(2 * 60 * 1000);
    });

    describe('should manage to send data in parallel', () => {
      it('every 10 request drops the connection', async () => {
        bqWriteClient.initialize().catch(err => {
          throw err;
        });
        const client = new WriterClient();
        client.enableWriteRetries(true);
        client.setMaxRetryAttempts(10);
        client.setClient(bqWriteClient);

        try {
          const flakyTableId = generateUuid() + '_reconnect_on_close';
          const [table] = await bigquery
            .dataset(flakyDatasetId)
            .createTable(flakyTableId, {
              schema,
              location: flakyRegion,
            });
          projectId = table.metadata.tableReference.projectId;
          parent = `projects/${projectId}/datasets/${flakyDatasetId}/tables/${flakyTableId}`;

          const connection = await client.createStreamConnection({
            streamType: managedwriter.PendingStream,
            destinationTable: parent,
          });

          const writer = new JSONWriter({
            connection,
            protoDescriptor,
          });

          const pendingWrites: PendingWrite[] = [];
          const iterations = new Array(50).fill(1);
          let offset = 0;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const _ of iterations) {
            const rows = generateRows(10);
            const pw = writer.appendRows(rows, offset);
            pendingWrites.push(pw);
            offset += 10;
          }

          await Promise.all(pendingWrites.map(pw => pw.getResult()));

          const res = await connection.finalize();
          connection.close();
          assert.equal(res?.rowCount, 500);

          writer.close();
        } finally {
          client.close();
        }
      }).timeout(2 * 60 * 1000);

      it('every 10 request there is a in stream INTERNAL error', async () => {
        bqWriteClient.initialize().catch(err => {
          throw err;
        });
        const client = new WriterClient();
        client.enableWriteRetries(true);
        client.setClient(bqWriteClient);

        try {
          const connection = await client.createStreamConnection({
            streamType: managedwriter.PendingStream,
            destinationTable: parent,
          });

          let numCalls = 0;
          let numSucess = 0;
          const conn = connection['_connection'] as gax.CancellableStream;
          sandbox
            .stub(conn, 'write')
            .callsFake(
              (
                chunk: unknown,
                _,
                cb?: ((error: Error | null | undefined) => void) | undefined,
              ): boolean => {
                const req = chunk as AppendRowsRequest;
                cb && cb(null);
                numCalls++;
                if (!req.writeStream) {
                  return false;
                }
                if (numCalls % 10 === 0) {
                  const res: AppendRowsResponse = {
                    writeStream: req.writeStream,
                    error: {
                      code: gax.Status.INTERNAL,
                      message: 'internal error',
                    },
                  };
                  conn?.emit('data', res);
                } else {
                  const res: AppendRowsResponse = {
                    writeStream: req.writeStream,
                    appendResult: {
                      offset: req.offset,
                    },
                  };
                  conn?.emit('data', res);
                  numSucess++;
                }
                return false;
              },
            );

          const writer = new JSONWriter({
            connection,
            protoDescriptor,
          });

          const pendingWrites: PendingWrite[] = [];
          const iterations = new Array(50).fill(1);
          let offset = 0;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          for (const _ of iterations) {
            const rows = generateRows(10);
            const pw = writer.appendRows(rows, offset);
            pendingWrites.push(pw);
            offset += 10;
          }

          await Promise.all(pendingWrites.map(pw => pw.getResult()));

          connection.close();
          assert.equal(numSucess, 50);

          writer.close();
        } finally {
          client.close();
        }
      }).timeout(2 * 60 * 1000);
    });
  });

  describe('Error Scenarios', () => {
    it('send request with mismatched proto descriptor', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };

      let storageErrors: protos.google.cloud.bigquery.storage.v1.IStorageError[] =
        [];
      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        connection.onConnectionError((err: gax.GoogleError) => {
          storageErrors = parseStorageErrors(err);
        });

        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        let offset: IInt64Value['value'] = 0;
        let pw = writer.appendRows([row1, row2], offset);
        await pw.getResult();

        protoDescriptor.field = [
          ...(protoDescriptor.field || []),
          {
            name: 'customer_email',
            number: 3,
            type: FieldDescriptorProtoType.TYPE_STRING,
          },
        ];
        writer.setProtoDescriptor(protoDescriptor);

        const row3 = {
          customer_name: 'Test',
          row_num: 3,
          customer_email: 'test@example.com',
        };
        offset = 2;

        pw = writer.appendRows([row3], offset);
        try {
          await pw.getResult();
        } catch (err) {
          assert.notEqual(err, null);
        }

        assert.equal(storageErrors.length, 1);
        assert.equal(
          storageErrors[0].errorMessage,
          'Schema mismatch due to extra fields in user schema',
        );

        writer.close();
      } finally {
        client.close();
      }
    });

    it('send request with invalid protobuf row', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const writer = new Writer({
          connection,
          protoDescriptor,
        });

        protoDescriptor.field = protoDescriptor.field?.slice(0, 1); // leave just first field

        const invalidProto = Type.fromDescriptor(
          protoDescriptor,
        ) as protobuf.Type;
        const row = {
          customer_name: 'Test',
        };
        const serialized = invalidProto.encode(row).finish();

        const pw = writer.appendRows(
          {
            serializedRows: [serialized],
          },
          0,
        );
        const res = await pw.getResult();
        assert.notEqual(res.error, null);
        assert.equal(
          res.error?.message?.split('.')[0],
          'Errors found while processing rows',
        );

        writer.close();
      } finally {
        client.close();
      }
    });

    it('send empty rows request should return an error', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        const pw = writer.appendRows([], 0);
        const res = await pw.getResult();
        assert.notEqual(res.error, null);
        assert.equal(
          res.error?.message?.split('.')[0],
          'Rows must be specified',
        );

        writer.close();
      } finally {
        client.close();
      }
    });

    it.skip('send large request should return an error', async () => {
      // Service limits changes are in flux, so this we disabled this test as is prone to flakes
      //
      // TODO: This will be tracked in bug https://b.corp.google.com/issues/485577546
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor: DescriptorProto =
        adapt.convertStorageSchemaToProto2Descriptor(storageSchema, 'root');

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const writer = new Writer({
          connection,
          protoDescriptor,
        });

        const row = {
          customer_name: 'Lovelace',
          row_num: 1,
        };
        const rowMessage = CustomerRecord.create(row);
        const serializedRowMessage: Uint8Array =
          CustomerRecord.encode(rowMessage).finish();

        const rows: Uint8Array[] = [];
        const targetSize = 11 * 1024 * 1024; // 11 MB;
        const numRows = targetSize / serializedRowMessage.length;
        for (let i = 0; i < numRows; i++) {
          rows.push(serializedRowMessage);
        }
        const badPw = writer.appendRows(
          {
            serializedRows: rows,
          },
          0,
        );

        let res = await badPw.getResult();
        assert.notEqual(res.error, null);
        assert.equal(res.error?.message?.includes('request too large'), true);

        const goodPw = writer.appendRows(
          {
            serializedRows: [serializedRowMessage],
          },
          0,
        );
        res = await goodPw.getResult();
        assert.equal(res.appendResult?.offset?.value, '0');

        writer.close();
      } finally {
        client.close();
      }
    });

    it('should trigger reconnection when connection closes and there are pending writes', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.enableWriteRetries(true);
      client.setClient(bqWriteClient);

      const connection = await client.createStreamConnection({
        streamType: managedwriter.PendingStream,
        destinationTable: parent,
      });

      let reconnectedCalled = false;
      connection.on('reconnect', () => {
        reconnectedCalled = true;
      });

      const writer = new JSONWriter({
        connection,
        protoDescriptor,
      });

      try {
        // Write some data and trigger error
        const pw = writer.appendRows(
          [
            {
              customer_name: 'Ada Lovelace',
              row_num: 1,
            },
            {
              customer_name: 'Alan Turing',
              row_num: 2,
            },
          ],
          0,
        );
        await pw.getResult();

        const conn = connection['_connection'] as gax.CancellableStream; // private method

        const gerr = new gax.GoogleError('aborted');
        gerr.code = gax.Status.ABORTED;
        conn.emit('error', gerr);
        conn.emit('close');

        assert.equal(reconnectedCalled, false);

        // add a fake pending write
        connection['_pendingWrites'].push(new PendingWrite({}));
        conn.emit('error', gerr);
        conn.emit('close');

        assert.equal(reconnectedCalled, true);

        writer.close();
      } finally {
        client.close();
      }
    });

    it('reconnect on idle connection', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      // Row 2
      const row2 = {
        customer_name: 'Alan Turing',
        row_num: 2,
      };

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        let pw = writer.appendRows([row1, row2], 0);
        await pw.getResult();

        // Simulate server sending ABORT error as the conn was idle
        const conn = connection['_connection'] as gax.CancellableStream; // private method
        const gerr = new gax.GoogleError(
          'Closing the stream because it has been inactive for 600 seconds',
        );
        gerr.code = gax.Status.ABORTED;
        conn.emit('error', gerr);
        // simulate server closing conn.
        await sleep(100);
        conn.destroy();
        await sleep(100);

        const row3 = {
          customer_name: 'Test',
          row_num: 3,
          customer_email: 'test@example.com',
        };

        pw = writer.appendRows([row3], 2);
        await pw.getResult();

        const res = await connection.finalize();
        connection.close();
        assert.equal(res?.rowCount, 3);

        writer.close();
      } finally {
        client.close();
      }
    }).timeout(20 * 1000);

    it('should mark any pending writes with error if connection was closed', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      const row1 = {
        customer_name: 'Ada Lovelace',
        row_num: 1,
      };

      try {
        const connection = await client.createStreamConnection({
          streamType: managedwriter.PendingStream,
          destinationTable: parent,
        });

        const writer = new JSONWriter({
          connection,
          protoDescriptor,
        });

        const pw1 = writer.appendRows([row1], 0);
        await pw1.getResult();

        // Try to append a new row
        const row2 = {
          customer_name: 'Test',
          row_num: 2,
          customer_email: 'test@example.com',
        };

        let foundError: gax.GoogleError | null = null;
        const pw2 = writer.appendRows([row2], 1);
        pw2.getResult().catch(err => {
          foundError = err as gax.GoogleError;
        });

        // Simulate server sending ABORTED error on a write
        const conn = connection['_connection'] as gax.CancellableStream; // private method
        // swallow ack for the last appendRow call, so we can simulate it failing
        conn.removeAllListeners('data');
        await new Promise(resolve => conn.once('data', resolve));
        conn.addListener('data', connection['handleData']);

        // simulate server closing conn.
        conn.emit('close');
        await sleep(100);
        conn.destroy();
        await sleep(100);

        // should throw error of reconnection
        assert.notEqual(foundError, null);
        assert.equal(foundError!.message.includes('retry'), true);

        connection.close();
        writer.close();
      } finally {
        client.close();
      }
    });
  });

  describe('close', () => {
    it('should invoke close without errors', async () => {
      bqWriteClient.initialize().catch(err => {
        throw err;
      });
      const streamType: WriteStream['type'] = managedwriter.PendingStream;
      const client = new WriterClient();
      client.setClient(bqWriteClient);

      // Row 1
      const row1 = {
        customer_name: 'Lovelace',
        row_num: 1,
      };
      const row1Message = CustomerRecord.create(row1);
      const serializedRow1Message: Uint8Array =
        CustomerRecord.encode(row1Message).finish();

      // Row 2
      const row2 = {
        customer_name: 'Turing',
        row_num: 2,
      };
      const row2Message = CustomerRecord.create(row2);
      const serializedRow2Message: Uint8Array =
        CustomerRecord.encode(row2Message).finish();

      const offset = 0;
      try {
        const streamId = await client.createWriteStream({
          streamType,
          destinationTable: parent,
        });
        const connection = await client.createStreamConnection({streamId});
        const internalConn = connection['_connection']!;
        const writer = new Writer({
          connection,
          protoDescriptor,
        });
        const pw = writer.appendRows(
          {
            serializedRows: [serializedRow1Message, serializedRow2Message],
          },
          offset,
        );
        await pw.getResult();

        writer.close();
        client.close();
        assert.strictEqual(client.isOpen(), false);
        assert.strictEqual(internalConn.destroyed, true);
      } finally {
        client.close();
      }
    });
  });
});

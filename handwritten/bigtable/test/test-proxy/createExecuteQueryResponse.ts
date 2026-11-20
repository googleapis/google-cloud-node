// Copyright 2026 Google LLC
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
import * as grpc from '@grpc/grpc-js';
import {describe, it} from 'mocha';

import {SqlTypes} from '../../src';
import {PreparedStatement} from '../../src/execute-query/preparedstatement';
import {QueryResultRow, Struct} from '../../src/execute-query/values';
import {
  parseMetadata,
  parseRows,
} from '../../testproxy/services/utils/request/createExecuteQueryResponse';
import {executeQuery} from '../../testproxy/services/execute-query';
import {google} from '../../testproxy/protos/protos';

function makePreparedStatement(
  metadata?: SqlTypes.ResultSetMetadata,
): PreparedStatement {
  return {
    getData: (
      callback: (
        err?: Error,
        preparedQueryBytes?: Uint8Array | string,
        resultMetadata?: SqlTypes.ResultSetMetadata,
      ) => void,
    ) => {
      callback(undefined, Buffer.from('prepared-query'), metadata);
    },
  } as unknown as PreparedStatement;
}

describe('TestProxy/createExecuteQueryResponse', () => {
  describe('parseMetadata', () => {
    it('should convert prepared statement metadata into ColumnMetadata protos', async () => {
      const metadata = SqlTypes.ResultSetMetadata.fromTuples([
        ['strCol', SqlTypes.String()],
        ['intCol', SqlTypes.Int64()],
      ]);
      const columns = await parseMetadata(makePreparedStatement(metadata));

      assert.strictEqual(columns.length, 2);
      assert.strictEqual(columns[0].name, 'strCol');
      assert.ok(columns[0].type?.stringType);
      assert.strictEqual(columns[1].name, 'intCol');
      assert.ok(columns[1].type?.int64Type);
    });

    it('should return an empty array when metadata is undefined', async () => {
      const columns = await parseMetadata(makePreparedStatement(undefined));
      assert.deepStrictEqual(columns, []);
    });
  });

  describe('parseRows', () => {
    it('should convert null and nested null values without throwing', async () => {
      const metadata = SqlTypes.ResultSetMetadata.fromTuples([
        ['strCol', SqlTypes.String()],
        ['arrCol', SqlTypes.Array(SqlTypes.Int64())],
        [
          'structCol',
          SqlTypes.Struct(
            {name: 'a', type: SqlTypes.String()},
            {name: 'b', type: SqlTypes.Int64()},
          ),
        ],
      ]);
      const row = new QueryResultRow(
        [
          null,
          [BigInt(1), null],
          Struct.fromTuples([
            ['a', 'hello'],
            ['b', null],
          ]),
        ],
        metadata.fieldMapping,
      );

      const parsedRows = await parseRows(makePreparedStatement(metadata), [
        row,
      ]);

      assert.strictEqual(parsedRows.length, 1);
      assert.strictEqual(parsedRows[0].values.length, 3);
      assert.deepStrictEqual({...parsedRows[0].values[0]}, {});
      assert.strictEqual(
        String(parsedRows[0].values[1].arrayValue?.values?.[0].intValue),
        '1',
      );
      assert.deepStrictEqual(
        {...parsedRows[0].values[1].arrayValue?.values?.[1]},
        {},
      );
      assert.strictEqual(
        parsedRows[0].values[2].arrayValue?.values?.[0].stringValue,
        'hello',
      );
      assert.deepStrictEqual(
        {...parsedRows[0].values[2].arrayValue?.values?.[1]},
        {},
      );
    });

    it('should return an empty array when metadata is undefined', async () => {
      const parsedRows = await parseRows(makePreparedStatement(undefined), []);
      assert.deepStrictEqual(parsedRows, []);
    });
  });

  describe('executeQuery service error mapping', () => {
    it('should map client-side errors without a gRPC code to INTERNAL', async () => {
      const clientMap = new Map();
      clientMap.set('client-1', {
        instance: () => ({
          prepareStatement: async () => {
            throw new Error('Invalid empty ResultSetMetadata received.');
          },
        }),
      });

      const response =
        await new Promise<google.bigtable.testproxy.IExecuteQueryResult>(
          (resolve, reject) => {
            executeQuery({clientMap})(
              {
                request: {
                  clientId: 'client-1',
                  request: {
                    instanceName: 'projects/p/instances/i',
                    query: 'SELECT 1',
                  },
                },
              },
              (err, res) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(res!);
                }
              },
            );
          },
        );

      assert.strictEqual(response.status?.code, grpc.status.INTERNAL);
      assert.strictEqual(
        response.status?.message,
        'Invalid empty ResultSetMetadata received.',
      );
    });

    it('should preserve explicit gRPC status codes on errors', async () => {
      const clientMap = new Map();
      clientMap.set('client-2', {
        instance: () => ({
          prepareStatement: async () => {
            const err = Object.assign(new Error('Deadline exceeded'), {
              code: grpc.status.DEADLINE_EXCEEDED,
            });
            throw err;
          },
        }),
      });

      const response =
        await new Promise<google.bigtable.testproxy.IExecuteQueryResult>(
          (resolve, reject) => {
            executeQuery({clientMap})(
              {
                request: {
                  clientId: 'client-2',
                  request: {
                    instanceName: 'projects/p/instances/i',
                    query: 'SELECT 1',
                  },
                },
              },
              (err, res) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(res!);
                }
              },
            );
          },
        );

      assert.strictEqual(response.status?.code, grpc.status.DEADLINE_EXCEEDED);
    });
  });
});

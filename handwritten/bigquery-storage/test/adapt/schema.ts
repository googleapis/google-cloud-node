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

import {google} from '../../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
import * as adapt from '../../src/adapt';

const TableFieldSchema = google.cloud.bigquery.storage.v1.TableFieldSchema;

describe('Adapt Schemas', () => {
  describe('BigQuery Schema to Storage Schema', () => {
    it('basic schema', () => {
      const schema = {
        fields: [
          {name: 'f1', type: 'STRING', description: 'first field'},
          {name: 'f2', type: 'INTEGER', description: 'second field'},
          {name: 'f3', type: 'BOOL', description: 'third field'},
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      assert.notEqual(storageSchema, null);
      if (!storageSchema) {
        throw Error('null storage schema');
      }
      assert.deepEqual(storageSchema, {
        fields: [
          {
            name: 'f1',
            description: 'first field',
            type: TableFieldSchema.Type.STRING,
            mode: TableFieldSchema.Mode.NULLABLE,
          },
          {
            name: 'f2',
            description: 'second field',
            type: TableFieldSchema.Type.INT64,
            mode: TableFieldSchema.Mode.NULLABLE,
          },
          {
            name: 'f3',
            description: 'third field',
            type: TableFieldSchema.Type.BOOL,
            mode: TableFieldSchema.Mode.NULLABLE,
          },
        ],
      });
    });

    it('arrays', () => {
      const schema = {
        fields: [
          {
            name: 'arr',
            type: 'NUMERIC',
            mode: 'REPEATED',
            description: 'array field',
          },
          {
            name: 'big',
            type: 'BIGNUMERIC',
            mode: 'REQUIRED',
            description: 'required big',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      assert.notEqual(storageSchema, null);
      if (!storageSchema) {
        throw Error('null storage schema');
      }
      assert.deepEqual(storageSchema, {
        fields: [
          {
            name: 'arr',
            description: 'array field',
            type: TableFieldSchema.Type.NUMERIC,
            mode: TableFieldSchema.Mode.REPEATED,
          },
          {
            name: 'big',
            description: 'required big',
            type: TableFieldSchema.Type.BIGNUMERIC,
            mode: TableFieldSchema.Mode.REQUIRED,
          },
        ],
      });
    });

    it('nested structs', () => {
      const schema = {
        fields: [
          {
            name: 'struct1',
            type: 'RECORD',
            description: 'struct field',
            fields: [
              {name: 'leaf1', type: 'DATE'},
              {name: 'leaf2', type: 'DATETIME'},
            ],
          },
          {
            name: 'field2',
            type: 'STRING',
            description: 'second field',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      assert.notEqual(storageSchema, null);
      if (!storageSchema) {
        throw Error('null storage schema');
      }
      assert.deepEqual(storageSchema, {
        fields: [
          {
            name: 'struct1',
            description: 'struct field',
            type: TableFieldSchema.Type.STRUCT,
            mode: TableFieldSchema.Mode.NULLABLE,
            fields: [
              {
                name: 'leaf1',
                type: TableFieldSchema.Type.DATE,
                mode: TableFieldSchema.Mode.NULLABLE,
              },
              {
                name: 'leaf2',
                type: TableFieldSchema.Type.DATETIME,
                mode: TableFieldSchema.Mode.NULLABLE,
              },
            ],
          },
          {
            name: 'field2',
            description: 'second field',
            type: TableFieldSchema.Type.STRING,
            mode: TableFieldSchema.Mode.NULLABLE,
          },
        ],
      });
    });

    it('range', () => {
      const schema = {
        fields: [
          {
            name: 'range_ts',
            type: 'RANGE',
            rangeElementType: {
              type: 'TIMESTAMP',
            },
          },
          {
            name: 'range_dt',
            type: 'RANGE',
            rangeElementType: {
              type: 'DATETIME',
            },
          },
          {
            name: 'range_d',
            type: 'RANGE',
            rangeElementType: {
              type: 'DATE',
            },
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      assert.notEqual(storageSchema, null);
      if (!storageSchema) {
        throw Error('null storage schema');
      }
      assert.deepEqual(storageSchema, {
        fields: [
          {
            name: 'range_ts',
            type: TableFieldSchema.Type.RANGE,
            mode: TableFieldSchema.Mode.NULLABLE,
            rangeElementType: {
              type: TableFieldSchema.Type.TIMESTAMP,
            },
          },
          {
            name: 'range_dt',
            type: TableFieldSchema.Type.RANGE,
            mode: TableFieldSchema.Mode.NULLABLE,
            rangeElementType: {
              type: TableFieldSchema.Type.DATETIME,
            },
          },
          {
            name: 'range_d',
            type: TableFieldSchema.Type.RANGE,
            mode: TableFieldSchema.Mode.NULLABLE,
            rangeElementType: {
              type: TableFieldSchema.Type.DATE,
            },
          },
        ],
      });
    });
  });
});

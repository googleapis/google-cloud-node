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
import * as protobuf from 'protobufjs';
import * as adapt from '../../src/adapt';
import * as messagesJSON from '../testdata/message.json';
import * as protos from '../../protos/protos';

type TableFieldSchema =
  protos.google.cloud.bigquery.storage.v1.ITableFieldSchema;
const TableFieldSchema =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema;
const DescriptorProto = protos.google.protobuf.DescriptorProto;
const {Root, Type} = protobuf;

describe('Adapt Protos', () => {
  describe('Schema to Proto Descriptor conversion', () => {
    it('basic', () => {
      const schema = {
        fields: [
          {
            name: 'foo',
            type: 'STRING',
            mode: 'NULLABLE',
          },
          {
            name: 'bar',
            type: 'FLOAT',
            mode: 'REQUIRED',
          },
          {
            name: 'baz',
            type: 'STRING',
            mode: 'REPEATED',
          },
          {
            name: 'bat',
            type: 'BOOL',
            mode: 'REPEATED',
          },
          {
            name: 'id',
            type: 'STRING',
            mode: 'REQUIRED',
            defaultValueExpression: 'GENERATE_UUID()',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Test',
      );
      assert.notEqual(protoDescriptor, null);
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      const TestProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        foo: 'name',
        bar: 42,
        baz: ['A', 'B'],
        bat: [true, false],
      };
      const serialized = TestProto.encode(raw).finish();
      const decoded = TestProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });

    it('basic with CDC fields', () => {
      const schema = {
        fields: [
          {
            name: 'id',
            type: 'INTEGER',
            mode: 'NULLABLE',
          },
          {
            name: 'username',
            type: 'STRING',
            mode: 'REQUIRED',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Test',
        adapt.withChangeType(),
        adapt.withChangeSequenceNumber(),
      );
      assert.notEqual(protoDescriptor, null);
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      const TestProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        id: 1,
        username: 'Alice',
        _CHANGE_TYPE: 'INSERT',
        _CHANGE_SEQUENCE_NUMBER: 'FF',
      };
      const serialized = TestProto.encode(raw).finish();
      const decoded = TestProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });

    it('basic with Flexible column fields', () => {
      const schema = {
        fields: [
          {
            name: '特別コラム',
            type: 'INTEGER',
            mode: 'NULLABLE',
          },
          {
            name: 'field-name',
            type: 'STRING',
            mode: 'REQUIRED',
          },
          {
            name: 'foo_👍',
            type: 'STRING',
            mode: 'REQUIRED',
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Flexible',
      );
      assert.notEqual(protoDescriptor, null);

      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      assert.deepEqual(JSON.parse(JSON.stringify(protoDescriptor)), {
        name: 'Flexible',
        field: [
          {
            name: 'field_54m55Yil44Kz44Op44Og',
            number: 1,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_INT64',
            options: {
              '.google.cloud.bigquery.storage.v1.columnName': '特別コラム',
            },
          },
          {
            name: 'field_ZmllbGQtbmFtZQ',
            number: 2,
            label: 'LABEL_REQUIRED',
            type: 'TYPE_STRING',
            options: {
              '.google.cloud.bigquery.storage.v1.columnName': 'field-name',
            },
          },
          {
            name: 'field_Zm9vXCfkY0',
            number: 3,
            label: 'LABEL_REQUIRED',
            type: 'TYPE_STRING',
            options: {
              '.google.cloud.bigquery.storage.v1.columnName': 'foo_👍',
            },
          },
        ],
      });

      const FlexibleProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        field_54m55Yil44Kz44Op44Og: 1,
        field_ZmllbGQtbmFtZQ: 'test',
        field_Zm9vXCfkY0: 'foo',
      };
      const serialized = FlexibleProto.encode(raw).finish();
      const decoded = FlexibleProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });

    it('nested struct', () => {
      const schema = {
        fields: [
          {
            name: 'record_id',
            type: 'INT64',
            mode: 'NULLABLE',
          },
          {
            name: 'recordDetails',
            type: 'STRUCT',
            mode: 'REPEATED',
            fields: [
              {
                name: 'key',
                type: 'STRING',
                mode: 'REQUIRED',
              },
              {
                name: 'value',
                type: 'STRING',
                mode: 'NULLABLE',
              },
            ],
          },
          {
            name: 'metadata',
            type: 'STRUCT',
            mode: 'NULLABLE',
            fields: [
              {
                name: 'createdAt',
                type: 'TIMESTAMP',
                mode: 'REQUIRED',
              },
              {
                name: 'updatedAt',
                type: 'TIMESTAMP',
                mode: 'NULLABLE',
              },
            ],
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Nested',
      );
      assert.notEqual(protoDescriptor, null);
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      assert.deepEqual(JSON.parse(JSON.stringify(protoDescriptor)), {
        name: 'Nested',
        field: [
          {
            name: 'record_id',
            number: 1,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_INT64',
            options: {},
          },
          {
            name: 'recordDetails',
            number: 2,
            label: 'LABEL_REPEATED',
            type: 'TYPE_MESSAGE',
            typeName: 'Nested_recordDetails',
          },
          {
            name: 'metadata',
            number: 3,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'Nested_metadata',
          },
        ],
        nestedType: [
          {
            name: 'Nested_recordDetails',
            field: [
              {
                name: 'key',
                number: 1,
                label: 'LABEL_REQUIRED',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'value',
                number: 2,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
            ],
          },
          {
            name: 'Nested_metadata',
            field: [
              {
                name: 'createdAt',
                number: 1,
                label: 'LABEL_REQUIRED',
                type: 'TYPE_INT64',
                options: {},
              },
              {
                name: 'updatedAt',
                number: 2,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_INT64',
                options: {},
              },
            ],
          },
        ],
      });
      const NestedProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        record_id: '12345',
        recordDetails: [
          {key: 'name', value: 'jimmy'},
          {key: 'title', value: 'clown'},
        ],
        metadata: {
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      };
      const serialized = NestedProto.encode(raw).finish();
      const decoded = NestedProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
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
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Test',
      );
      assert.notEqual(protoDescriptor, null);
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      const TestProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        range_dt: {
          start: '2024-04-05T15:45:58.981Z',
          end: '2024-04-05T16:45:58.981Z',
        },
        // The value is the number of days since the Unix epoch (1970-01-01)
        range_d: {
          start: new Date('2024-04-01').getTime() / (1000 * 60 * 60 * 24),
          end: new Date('2024-04-05').getTime() / (1000 * 60 * 60 * 24),
        },
        // The value is given in microseconds since the Unix epoch (1970-01-01)
        range_ts: {
          start: new Date('2024-04-05T15:45:58.981Z').getTime() * 1000,
          end: new Date('2024-04-05T16:45:58.981Z').getTime() * 1000,
        },
      };
      const serialized = TestProto.encode(raw).finish();
      const decoded = TestProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });

    it('convert both string and numeric value of table schema field type', () => {
      const schema: TableFieldSchema = {
        fields: [
          {
            name: 'rowNum',
            type: TableFieldSchema.Type.NUMERIC,
            mode: 'NULLABLE',
            description: '',
          },
          {
            name: 'range',
            type: 'RANGE',
            mode: 'NULLABLE',
            description: '',
            rangeElementType: {
              type: 'TIMESTAMP',
            },
          },
          {
            name: 'nested',
            type: TableFieldSchema.Type.STRUCT,
            mode: 'REQUIRED',
            description: '',
            fields: [
              {
                name: 'integer',
                mode: 'REQUIRED',
                description: '',
                type: TableFieldSchema.Type.INT64,
              },
            ],
          },
        ],
      };
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        schema,
        'root',
      );
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      const TestProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        rowNum: '1',
        range: {
          start: new Date('2024-04-05T15:45:58.981Z').getTime() * 1000,
        },
        nested: {
          integer: 10,
        },
      };
      const serialized = TestProto.encode(raw).finish();
      const decoded = TestProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });

    it('timestamp precision', () => {
      const schema = {
        fields: [
          {
            name: 'ts',
            type: 'TIMESTAMP',
            timestampPrecision: 12,
          },
        ],
      };
      const storageSchema =
        adapt.convertBigQuerySchemaToStorageTableSchema(schema);
      const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
        storageSchema,
        'Test',
      );
      assert.notEqual(protoDescriptor, null);
      assert.deepStrictEqual(JSON.parse(JSON.stringify(protoDescriptor)), {
        name: 'Test',
        field: [
          {
            name: 'ts',
            number: 1,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_STRING',
            options: {},
          },
        ],
      });
      if (!protoDescriptor) {
        throw Error('null proto descriptor set');
      }
      const TestProto = Type.fromDescriptor(protoDescriptor);
      const raw = {
        ts: '2024-04-05T15:45:58.981123456789Z',
      };
      const serialized = TestProto.encode(raw).finish();
      const decoded = TestProto.decode(serialized).toJSON();
      assert.deepEqual(raw, decoded);
    });
  });

  describe('Proto descriptor normalization', () => {
    it('bundle multiple proto descriptors into one', () => {
      const root = Root.fromJSON(messagesJSON).resolveAll();
      const descriptor = root
        .lookupType('testdata.GithubArchiveMessage')
        .add(root.lookupType('testdata.GithubArchiveRepo'))
        .add(root.lookupType('testdata.GithubArchiveEntity'))
        .toDescriptor('proto2');
      const normalized = adapt
        .normalizeDescriptor(new DescriptorProto(descriptor))
        .toJSON();
      assert.deepEqual(normalized, {
        name: 'GithubArchiveMessage',
        field: [
          {
            name: 'type',
            number: 1,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_STRING',
            options: {},
          },
          {
            name: 'public',
            number: 2,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_BOOL',
            options: {},
          },
          {
            name: 'payload',
            number: 3,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_STRING',
            options: {},
          },
          {
            name: 'repo',
            number: 4,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'GithubArchiveRepo',
            options: {},
          },
          {
            name: 'actor',
            number: 5,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'GithubArchiveEntity',
            options: {},
          },
          {
            name: 'org',
            number: 6,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'GithubArchiveEntity',
            options: {},
          },
          {
            name: 'created_at',
            number: 7,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_INT64',
            options: {},
          },
          {
            name: 'id',
            number: 8,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_STRING',
            options: {},
          },
          {
            name: 'other',
            number: 9,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_STRING',
            options: {},
          },
        ],
        nestedType: [
          {
            name: 'GithubArchiveRepo',
            field: [
              {
                name: 'id',
                number: 1,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_INT64',
                options: {},
              },
              {
                name: 'name',
                number: 2,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'url',
                number: 3,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
            ],
          },
          {
            name: 'GithubArchiveEntity',
            field: [
              {
                name: 'id',
                number: 1,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_INT64',
                options: {},
              },
              {
                name: 'login',
                number: 2,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'gravatar_id',
                number: 3,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'avatar_url',
                number: 4,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'url',
                number: 5,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
            ],
          },
        ],
      });
    });
    it('nested proto with enum', () => {
      const root = Root.fromJSON(messagesJSON).resolveAll();
      const descriptor = root
        .lookupType('testdata.ExternalEnumMessage')
        .add(root.lookupType('testdata.EnumMsgA'))
        .add(root.lookupType('testdata.EnumMsgB'))
        .add(root.lookupEnum('testdata.ExtEnum'))
        .toDescriptor('proto2');
      const normalized = adapt
        .normalizeDescriptor(new DescriptorProto(descriptor))
        .toJSON();
      assert.deepEqual(normalized, {
        name: 'ExternalEnumMessage',
        field: [
          {
            name: 'msg_a',
            number: 1,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'EnumMsgA',
            options: {},
          },
          {
            name: 'msg_b',
            number: 2,
            label: 'LABEL_OPTIONAL',
            type: 'TYPE_MESSAGE',
            typeName: 'EnumMsgB',
            options: {},
          },
        ],
        nestedType: [
          {
            name: 'EnumMsgA',
            field: [
              {
                name: 'foo',
                number: 1,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_STRING',
                options: {},
              },
              {
                name: 'bar',
                number: 2,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_ENUM',
                typeName: 'ExtEnum',
                options: {},
              },
            ],
          },
          {
            name: 'EnumMsgB',
            field: [
              {
                name: 'baz',
                number: 1,
                label: 'LABEL_OPTIONAL',
                type: 'TYPE_ENUM',
                typeName: 'ExtEnum',
                options: {},
              },
            ],
          },
        ],
        enumType: [
          {
            name: 'ExtEnum',
            value: [
              {name: 'UNDEFINED', number: 0},
              {name: 'THING', number: 1},
              {name: 'OTHER_THING', number: 2},
            ],
          },
        ],
      });
    });
  });
});

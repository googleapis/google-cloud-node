// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import * as protobuf from 'protobufjs';
import {it} from 'mocha';
import {fromProto3JSON} from '../../src/fromproto3json';
import {toProto3JSON} from '../../src/toproto3json';
import {testTwoTypesOfLoad} from './common';
import {JSONObject} from '../../src';

function testGoogleProtobufValue(root: protobuf.Root) {
  const MessageWithValue = root.lookupType('test.MessageWithValue');
  const messageNull = MessageWithValue.fromObject({
    valueField: {
      nullValue: 'NULL_VALUE',
    },
  });
  const jsonNull = {valueField: null};
  const messageNumber = MessageWithValue.fromObject({
    valueField: {
      numberValue: 42,
    },
  });
  const messageNaN = MessageWithValue.fromObject({
    valueField: {
      numberValue: NaN,
    },
  });
  const messageInfinity = MessageWithValue.fromObject({
    valueField: {
      numberValue: Infinity,
    },
  });
  const messageNegInfinity = MessageWithValue.fromObject({
    valueField: {
      numberValue: -Infinity,
    },
  });
  const jsonNumber = {valueField: 42};
  const jsonNaN = {valueField: 'NaN'};
  const jsonInfinity = {valueField: 'Infinity'};
  const jsonNegInfinity = {valueField: '-Infinity'};
  const messageString = MessageWithValue.fromObject({
    valueField: {
      stringValue: 'test',
    },
  });
  const jsonString = {valueField: 'test'};
  const messageBool = MessageWithValue.fromObject({
    valueField: {
      boolValue: true,
    },
  });
  const jsonBool = {valueField: true};
  const messageStruct = MessageWithValue.fromObject({
    valueField: {
      structValue: {
        fields: {
          nestedNull: (messageNull as unknown as JSONObject).valueField,
          nestedNumber: (messageNumber as unknown as JSONObject).valueField,
          nestedString: (messageString as unknown as JSONObject).valueField,
          nestedBool: (messageBool as unknown as JSONObject).valueField,
          nestedStruct: {
            structValue: {
              fields: {
                stringField: {
                  stringValue: 'test',
                },
              },
            },
          },
          nestedList: {
            listValue: {
              values: [
                {
                  stringValue: 'test',
                },
              ],
            },
          },
        },
      },
    },
  });
  const jsonStruct = {
    valueField: {
      nestedNull: jsonNull.valueField,
      nestedNumber: jsonNumber.valueField,
      nestedString: jsonString.valueField,
      nestedBool: jsonBool.valueField,
      nestedStruct: {
        stringField: 'test',
      },
      nestedList: ['test'],
    },
  };
  const messageList = MessageWithValue.fromObject({
    valueField: {
      listValue: {
        values: [
          (messageNull as unknown as JSONObject).valueField,
          (messageNumber as unknown as JSONObject).valueField,
          (messageString as unknown as JSONObject).valueField,
          (messageBool as unknown as JSONObject).valueField,
          (messageStruct as unknown as JSONObject).valueField,
          {
            listValue: {
              values: [
                {
                  stringValue: 'test',
                },
              ],
            },
          },
        ],
      },
    },
  });
  const jsonList = {
    valueField: [
      jsonNull.valueField,
      jsonNumber.valueField,
      jsonString.valueField,
      jsonBool.valueField,
      jsonStruct.valueField,
      ['test'],
    ],
  };

  it('serializes NullValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNull);
    assert.deepStrictEqual(serialized, jsonNull);
  });

  it('deserializes NullValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonNull);
    assert.deepStrictEqual(deserialized, messageNull);
  });

  it('serializes NumberValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNumber);
    assert.deepStrictEqual(serialized, jsonNumber);
  });

  it('deserializes NumberValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonNumber);
    assert.deepStrictEqual(deserialized, messageNumber);
  });

  it('serializes NaN to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNaN);
    assert.deepStrictEqual(serialized, jsonNaN);
  });

  it('deserializes NaN from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonNaN);
    // Attempting to serialize NaN or Infinity results in error.
    // "NaN" would parse as string_value, not number_value.
    // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Value
    assert.deepStrictEqual(
      deserialized,
      MessageWithValue.fromObject({
        valueField: {
          stringValue: 'NaN',
        },
      }),
    );
  });

  it('serializes Infinity to proto3 JSON', () => {
    const serialized = toProto3JSON(messageInfinity);
    assert.deepStrictEqual(serialized, jsonInfinity);
  });

  it('deserializes Infinity from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonInfinity);
    // Attempting to serialize NaN or Infinity results in error.
    // "Infinity" would parse as string_value, not number_value.
    // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Value
    assert.deepStrictEqual(
      deserialized,
      MessageWithValue.fromObject({
        valueField: {
          stringValue: 'Infinity',
        },
      }),
    );
  });

  it('serializes negative Infinity to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNegInfinity);
    assert.deepStrictEqual(serialized, jsonNegInfinity);
  });

  it('deserializes Infinity from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonNegInfinity);
    // Attempting to serialize NaN, Infinity, negative Infinity results in error.
    // "-Infinity" would parse as string_value, not number_value.
    // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Value
    assert.deepStrictEqual(
      deserialized,
      MessageWithValue.fromObject({
        valueField: {
          stringValue: '-Infinity',
        },
      }),
    );
  });

  it('serializes StringValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageString);
    assert.deepStrictEqual(serialized, jsonString);
  });

  it('deserializes StringValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonString);
    assert.deepStrictEqual(deserialized, messageString);
  });

  it('serializes BoolValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageBool);
    assert.deepStrictEqual(serialized, jsonBool);
  });

  it('deserializes BoolValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonBool);
    assert.deepStrictEqual(deserialized, messageBool);
  });

  it('serializes StructValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageStruct);
    assert.deepStrictEqual(serialized, jsonStruct);
  });

  it('deserializes StructValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonStruct);
    assert.deepStrictEqual(deserialized, messageStruct);
  });

  it('serializes ListValue to proto3 JSON', () => {
    const serialized = toProto3JSON(messageList);
    assert.deepStrictEqual(serialized, jsonList);
  });

  it('deserializes ListValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithValue, jsonList);
    assert.deepStrictEqual(deserialized, messageList);
  });
}

function testGoogleProtobufStruct(root: protobuf.Root) {
  const MessageWithStruct = root.lookupType('test.MessageWithStruct');
  const message = MessageWithStruct.fromObject({
    structField: {
      fields: {
        stringField: {
          stringValue: 'test',
        },
        numberField: {
          numberValue: 42,
        },
      },
    },
  });
  const json = {
    structField: {
      stringField: 'test',
      numberField: 42,
    },
  };

  const emptyStructMessage = MessageWithStruct.fromObject({
    structField: {},
  });
  const emptyStructJson = {
    structField: {},
  };

  it('serializes google.protobuf.Struct to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes google.protobuf.Struct from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithStruct, json);
    assert.deepStrictEqual(deserialized, message);
  });

  it('serializes empty google.protobuf.Struct to proto3 JSON', () => {
    const serialized = toProto3JSON(emptyStructMessage);
    assert.deepStrictEqual(serialized, emptyStructJson);
  });

  it('deserializes empty google.protobuf.Struct from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithStruct, emptyStructJson);
    assert.deepStrictEqual(deserialized, emptyStructMessage);
  });
}

function testGoogleProtobufListValue(root: protobuf.Root) {
  const MessageWithListValue = root.lookupType('test.MessageWithListValue');
  const message = MessageWithListValue.fromObject({
    listValueField: {
      values: [
        {
          structValue: {
            fields: {
              stringField: {
                stringValue: 'test',
              },
            },
          },
        },
        {
          structValue: {
            fields: {
              numberField: {
                numberValue: 42,
              },
            },
          },
        },
      ],
    },
  });
  const json: JSONObject = {
    listValueField: [{stringField: 'test'}, {numberField: 42}],
  };

  const emptyListMessage = MessageWithListValue.fromObject({
    listValueField: {},
  });
  const emptyListJson = {
    listValueField: [],
  };

  it('serializes google.protobuf.ListValue to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes google.protobuf.ListValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithListValue, json);
    assert.deepStrictEqual(deserialized, message);
  });

  it('serializes empty google.protobuf.ListValue to proto3 JSON', () => {
    const serialized = toProto3JSON(emptyListMessage);
    assert.deepStrictEqual(serialized, emptyListJson);
  });

  it('deserializes empty google.protobuf.ListValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithListValue, emptyListJson);
    assert.deepStrictEqual(deserialized, emptyListMessage);
  });
}

function testGoogleProtobufNullValue(root: protobuf.Root) {
  const MessageWithNullValue = root.lookupType('test.MessageWithNullValue');
  const message = MessageWithNullValue.fromObject({
    nullValueField: 'NULL_VALUE',
  });
  const json = {
    nullValueField: null,
  };

  it('serializes google.protobuf.NullValue to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes google.protobuf.NullValue from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithNullValue, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

testTwoTypesOfLoad('google.protobuf.Value', [
  testGoogleProtobufValue,
  testGoogleProtobufStruct,
  testGoogleProtobufListValue,
  testGoogleProtobufNullValue,
]);

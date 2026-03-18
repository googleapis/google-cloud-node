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

function testMap(root: protobuf.Root) {
  const MessageWithMap = root.lookupType('test.MessageWithMap');
  const message = MessageWithMap.fromObject({
    mapField: {
      key1: {
        stringField: 'value1',
      },
      key2: {
        stringField: 'value2',
      },
    },
    stringMapField: {
      key1: 'string value 1',
      key2: 'string value 2',
    },
    longMapField: {
      '2^63-1': '9223372036854775807',
      one: '1',
      'minus one': '-1',
      zero: '0',
    },
  });
  const json = {
    mapField: {
      key1: {
        stringField: 'value1',
      },
      key2: {
        stringField: 'value2',
      },
    },
    stringMapField: {
      key1: 'string value 1',
      key2: 'string value 2',
    },
    longMapField: {
      '2^63-1': '9223372036854775807',
      one: '1',
      'minus one': '-1',
      zero: '0',
    },
    enumMapField: {},
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithMap, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

function testEnumMap(root: protobuf.Root) {
  const MessageWithMap = root.lookupType('test.MessageWithMap');
  const message = MessageWithMap.fromObject({
    enumMapField: {
      key1: 'UNKNOWN',
      key2: 'KNOWN',
    },
  });
  const jsonWithStringEnums = {
    mapField: {},
    stringMapField: {},
    longMapField: {},
    enumMapField: {
      key1: 'UNKNOWN',
      key2: 'KNOWN',
    },
  };
  const jsonWithNumericEnums = {
    mapField: {},
    stringMapField: {},
    longMapField: {},
    enumMapField: {
      key1: 0,
      key2: 1,
    },
  };

  it('serializes to proto3 JSON with string enums', () => {
    const serialized = toProto3JSON(message, {numericEnums: false});
    assert.deepStrictEqual(serialized, jsonWithStringEnums);
  });

  it('serializes to proto3 JSON with numeric enums', () => {
    const serialized = toProto3JSON(message, {numericEnums: true});
    assert.deepStrictEqual(serialized, jsonWithNumericEnums);
  });

  it('deserializes from proto3 JSON with string enums', () => {
    const deserialized = fromProto3JSON(MessageWithMap, jsonWithStringEnums);
    assert.deepStrictEqual(deserialized, message);
  });

  it('deserializes from proto3 JSON with numeric enums', () => {
    const deserialized = fromProto3JSON(MessageWithMap, jsonWithNumericEnums);
    assert.deepStrictEqual(deserialized, message);
  });
}

testTwoTypesOfLoad('map fields', testMap);
testTwoTypesOfLoad('enum map fields', testEnumMap);

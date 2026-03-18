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

function testWrapperTypes(root: protobuf.Root) {
  const MessageWithWrappers = root.lookupType('test.MessageWithWrappers');
  const buffer = Buffer.from('buffer');
  const message = MessageWithWrappers.fromObject({
    doubleValueField: {value: 3.14},
    floatValueField: {value: 3.14},
    int64ValueField: {value: -42},
    uint64ValueField: {value: 42},
    int32ValueField: {value: -43},
    uint32ValueField: {value: 43},
    boolValueField: {value: true},
    stringValueField: {value: 'test'},
    bytesValueField: {value: buffer},
    nanValueField: {value: NaN},
    infinityValueField: {value: Infinity},
    negativeInfinityValueField: {value: -Infinity},
  });
  const json = {
    doubleValueField: 3.14,
    floatValueField: 3.14,
    int64ValueField: '-42',
    uint64ValueField: '42',
    int32ValueField: -43,
    uint32ValueField: 43,
    boolValueField: true,
    stringValueField: 'test',
    bytesValueField: buffer.toString('base64'),
    nanValueField: 'NaN',
    infinityValueField: 'Infinity',
    negativeInfinityValueField: '-Infinity',
  };

  const messageWithNulls = MessageWithWrappers.fromObject({
    doubleValueField: {},
    floatValueField: {},
    int64ValueField: {},
    uint64ValueField: {},
    int32ValueField: {},
    uint32ValueField: {},
    boolValueField: {},
    stringValueField: {},
    bytesValueField: {},
  });
  const jsonWithNulls = {
    doubleValueField: null,
    floatValueField: null,
    int64ValueField: null,
    uint64ValueField: null,
    int32ValueField: null,
    uint32ValueField: null,
    boolValueField: null,
    stringValueField: null,
    bytesValueField: null,
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithWrappers, json);
    assert.deepStrictEqual(deserialized, message);
  });

  it('serializes nulls to proto3 JSON', () => {
    const serialized = toProto3JSON(messageWithNulls);
    assert.deepStrictEqual(serialized, jsonWithNulls);
  });

  it('deserializes nulls from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithWrappers, jsonWithNulls);
    assert.deepStrictEqual(deserialized, messageWithNulls);
  });
}

testTwoTypesOfLoad('wrapper types', testWrapperTypes);

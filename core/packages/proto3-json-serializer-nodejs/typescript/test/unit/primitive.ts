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

function testPrimitiveTypes(root: protobuf.Root) {
  const PrimitiveTypes = root.lookupType('test.PrimitiveTypes');
  const message = PrimitiveTypes.fromObject({
    integerField: -42,
    unsignedIntegerField: 42,
    fixedIntegerField: 128,
    stringField: 'test',
    boolField: true,
    int64Field: -43,
    uint64Field: 43,
  });
  const json = {
    integerField: -42,
    unsignedIntegerField: 42,
    fixedIntegerField: 128,
    stringField: 'test',
    boolField: true,
    int64Field: '-43',
    uint64Field: '43',
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(PrimitiveTypes, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

function testLongIntegers(root: protobuf.Root) {
  const PrimitiveTypes = root.lookupType('test.PrimitiveTypes');
  const message = PrimitiveTypes.fromObject({
    int64Field: '-5011754511478056813',
    uint64Field: '5011754511478056813',
  });
  const json = {
    int64Field: '-5011754511478056813',
    uint64Field: '5011754511478056813',
  };

  it('serializes uint64 to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes uint64 from proto3 JSON', () => {
    const deserialized = fromProto3JSON(PrimitiveTypes, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

function testNotFiniteNumber(root: protobuf.Root) {
  const PrimitiveTypes = root.lookupType('test.PrimitiveTypes');
  const messageNaN = PrimitiveTypes.fromObject({
    doubleField: NaN,
  });
  const jsonNaN = {
    doubleField: 'NaN',
  };
  const messageInfinity = PrimitiveTypes.fromObject({
    doubleField: Infinity,
  });
  const jsonInfinity = {
    doubleField: 'Infinity',
  };
  const messageNegInfinity = PrimitiveTypes.fromObject({
    doubleField: Infinity,
  });
  const jsonNegInfinity = {
    doubleField: 'Infinity',
  };
  it('serializes NaN to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNaN);
    assert.deepStrictEqual(serialized, jsonNaN);
  });
  it('deserializes NaN from proto3 JSON', () => {
    const deserialized = fromProto3JSON(PrimitiveTypes, jsonNaN);
    assert.deepStrictEqual(deserialized, messageNaN);
  });
  it('serializes Infinity to proto3 JSON', () => {
    const serialized = toProto3JSON(messageInfinity);
    assert.deepStrictEqual(serialized, jsonInfinity);
  });
  it('deserializes Infinity from proto3 JSON', () => {
    const deserialized = fromProto3JSON(PrimitiveTypes, jsonInfinity);
    assert.deepStrictEqual(deserialized, messageInfinity);
  });
  it('serializes negative Infinity to proto3 JSON', () => {
    const serialized = toProto3JSON(messageNegInfinity);
    assert.deepStrictEqual(serialized, jsonNegInfinity);
  });
  it('deserializes negative Infinity from proto3 JSON', () => {
    const deserialized = fromProto3JSON(PrimitiveTypes, jsonNegInfinity);
    assert.deepStrictEqual(deserialized, messageNegInfinity);
  });
}

testTwoTypesOfLoad('primitive types', [
  testPrimitiveTypes,
  testLongIntegers,
  testNotFiniteNumber,
]);

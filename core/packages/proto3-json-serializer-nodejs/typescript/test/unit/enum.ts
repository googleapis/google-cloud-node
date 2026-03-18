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

function testEnum(root: protobuf.Root) {
  const MessageWithEnum = root.lookupType('test.MessageWithEnum');
  const message = MessageWithEnum.fromObject({
    enumField: 'KNOWN',
  });
  const json = {
    enumField: 'KNOWN',
  };
  const jsonWithNumber = {
    enumField: 1,
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('serializes to proto3 JSON with numeric enum values', () => {
    const serialized = toProto3JSON(message, {numericEnums: true});
    assert.deepStrictEqual(serialized, jsonWithNumber);
    console.log(serialized);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithEnum, json);
    assert.deepStrictEqual(deserialized, message);
  });

  it('fromProto3JSON allows unknown enum string value', () => {
    // the following call should not fail
    fromProto3JSON(MessageWithEnum, {
      enumField: 'WRONG VALUE',
    });
  });

  it('fromProto3JSON allows unknown enum number value', () => {
    // the following call should not fail
    fromProto3JSON(MessageWithEnum, {enumField: 42});
  });
}

testTwoTypesOfLoad('enum field', testEnum);

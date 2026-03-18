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

function testRegularAny(root: protobuf.Root) {
  const MessageWithAny = root.lookupType('test.MessageWithAny');
  const AnyContent = root.lookupType('test.AnyContent');
  const any = AnyContent.fromObject({
    stringField: 'string',
  });
  const message = MessageWithAny.fromObject({
    anyField: {
      type_url: 'types.googleapis.com/test.AnyContent', // note: snake case here because of protobuf.js bug/feature
      value: Buffer.from(AnyContent.encode(any).finish()),
    },
  });
  const json = {
    anyField: {
      '@type': 'types.googleapis.com/test.AnyContent',
      stringField: 'string',
    },
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithAny, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

function testAnyWithSpecialType(root: protobuf.Root) {
  const MessageWithAny = root.lookupType('test.MessageWithAny');
  const Value = root.lookupType('google.protobuf.Value');
  const value = Value.fromObject({
    stringValue: 'test',
  });
  const message = MessageWithAny.fromObject({
    anyField: {
      type_url: 'types.googleapis.com/google.protobuf.Value',
      value: Buffer.from(Value.encode(value).finish()),
    },
  });
  const json = {
    anyField: {
      '@type': 'types.googleapis.com/google.protobuf.Value',
      value: 'test',
    },
  };

  it('serializes google.protobuf.Any with a special type to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes google.protobuf.Any with a special type from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithAny, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

testTwoTypesOfLoad('google.protobuf.Any', [
  testRegularAny,
  testAnyWithSpecialType,
]);

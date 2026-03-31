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

function testOneof(root: protobuf.Root) {
  const MessageWithOneof = root.lookupType('test.MessageWithOneof');
  const message1 = MessageWithOneof.fromObject({
    stringField: 'test',
  });
  const message2 = MessageWithOneof.fromObject({
    integerField: 42,
  });
  const message3 = MessageWithOneof.fromObject({
    messageField: {
      stringField: 'test',
    },
  });
  const json1 = {
    stringField: 'test',
  };
  const json2 = {
    integerField: 42,
  };
  const json3 = {
    messageField: {
      stringField: 'test',
    },
  };

  it('serializes oneof 1 to proto3 JSON', () => {
    const serialized = toProto3JSON(message1);
    assert.deepStrictEqual(serialized, json1);
  });

  it('deserializes oneof 1 from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithOneof, json1);
    assert.deepStrictEqual(deserialized, message1);
  });

  it('serializes oneof 2 to proto3 JSON', () => {
    const serialized = toProto3JSON(message2);
    assert.deepStrictEqual(serialized, json2);
  });

  it('deserializes oneof 2 from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithOneof, json2);
    assert.deepStrictEqual(deserialized, message2);
  });

  it('serializes oneof 3 to proto3 JSON', () => {
    const serialized = toProto3JSON(message3);
    assert.deepStrictEqual(serialized, json3);
  });

  it('deserializes oneof 3 from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithOneof, json3);
    assert.deepStrictEqual(deserialized, message3);
  });
}

testTwoTypesOfLoad('oneof', testOneof);

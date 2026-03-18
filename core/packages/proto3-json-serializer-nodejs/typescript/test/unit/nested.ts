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

function testNestedMessage(root: protobuf.Root) {
  const MessageWithNestedMessage = root.lookupType(
    'test.MessageWithNestedMessage',
  );
  const message = MessageWithNestedMessage.fromObject({
    innerMessage: {
      stringField: 'test',
    },
  });
  const json = {
    innerMessage: {
      stringField: 'test',
    },
  };

  const emptyMessage = MessageWithNestedMessage.fromObject({});
  const messageWithNull = MessageWithNestedMessage.fromObject({});
  (messageWithNull as unknown as JSONObject)['innerMessage'] = null;
  const jsonWithNull = {
    innerMessage: null,
  };
  const emptyJson = {};

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithNestedMessage, json);
    assert.deepStrictEqual(deserialized, message);
  });

  it('serialized empty message results in empty proto3 JSON', () => {
    const serialized = toProto3JSON(emptyMessage);
    assert.deepStrictEqual(serialized, emptyJson);
  });

  it('serialized null inner message results in JSON with null', () => {
    const serialized = toProto3JSON(messageWithNull);
    assert.deepStrictEqual(serialized, jsonWithNull);
  });

  it('deserialized null inner message from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithNestedMessage, jsonWithNull);
    assert.deepStrictEqual(deserialized, emptyMessage);
  });
}

testTwoTypesOfLoad('nested messages', testNestedMessage);

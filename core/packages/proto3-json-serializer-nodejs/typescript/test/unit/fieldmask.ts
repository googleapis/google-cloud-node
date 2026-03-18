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

function testFieldMask(root: protobuf.Root) {
  const MessageWithFieldMask = root.lookupType('test.MessageWithFieldMask');

  const message = MessageWithFieldMask.fromObject({
    fieldMaskField: {
      paths: ['a.b', 'c.d.e'],
    },
  });
  const json = {
    fieldMaskField: 'a.b,c.d.e',
  };

  it('serializes to proto3 JSON', () => {
    const serialized = toProto3JSON(message);
    assert.deepStrictEqual(serialized, json);
  });

  it('deserializes from proto3 JSON', () => {
    const deserialized = fromProto3JSON(MessageWithFieldMask, json);
    assert.deepStrictEqual(deserialized, message);
  });
}

testTwoTypesOfLoad('google.protobuf.Timestamp', testFieldMask);

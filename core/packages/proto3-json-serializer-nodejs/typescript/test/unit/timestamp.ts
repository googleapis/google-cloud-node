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

function testTimestamp(root: protobuf.Root) {
  const MessageWithTimestamp = root.lookupType('test.MessageWithTimestamp');
  const testMapping = [
    // example from google/protobuf/timestamp.proto
    {
      timestamp: {seconds: 1484443815, nanos: 10000000},
      value: '2017-01-15T01:30:15.010Z',
    },
    {timestamp: {nanos: 10000000}, value: '1970-01-01T00:00:00.010Z'},
    {timestamp: {seconds: 1484443815}, value: '2017-01-15T01:30:15.000Z'},
    {
      timestamp: {seconds: 1642115149, nanos: 91148000},
      value: '2022-01-13T23:05:49.091148Z',
    },
    {
      timestamp: {seconds: 1642121565, nanos: 10000},
      value: '2022-01-14T00:52:45.000010Z',
    },
    {
      timestamp: {seconds: 1642121565, nanos: 123456789},
      value: '2022-01-14T00:52:45.123456789Z',
    },
    {
      timestamp: {seconds: 1640995200},
      value: '2022-01-01T00:00:00.000Z',
    },
  ];

  for (const mapping of testMapping) {
    const message = MessageWithTimestamp.fromObject({
      timestampField: mapping.timestamp,
    });
    const json = {
      timestampField: mapping.value,
    };

    it(`serializes ${JSON.stringify(mapping.timestamp)} to proto3 JSON`, () => {
      const serialized = toProto3JSON(message);
      assert.deepStrictEqual(serialized, json);
    });

    it(`deserializes "${mapping.value}" from proto3 JSON`, () => {
      const deserialized = fromProto3JSON(MessageWithTimestamp, json);
      assert.deepStrictEqual(deserialized, message);
    });
  }

  describe('Timestamp has no millisecond', () => {
    const message = MessageWithTimestamp.fromObject({
      timestampField: {seconds: 1640995200},
    });
    it('serialized date has no second to proto3 JSON', () => {
      const serialized = toProto3JSON(message);
      assert.deepStrictEqual(serialized, {
        timestampField: '2022-01-01T00:00:00.000Z',
      });
    });

    it('deserializes timestamp has no second from proto3 JSON', () => {
      const deserialized = fromProto3JSON(MessageWithTimestamp, {
        timestampField: '2022-01-01T00:00:00Z',
      });
      assert.deepStrictEqual(deserialized, message);
    });
  });
}

testTwoTypesOfLoad('google.protobuf.Timestamp', testTimestamp);

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

function testDuration(root: protobuf.Root) {
  const MessageWithDuration = root.lookupType('test.MessageWithDuration');
  // note the zero padding according to the spec:
  // the number of the digits in the fractional part must be 0, 3, 6, or 9
  const testMapping = [
    {duration: {seconds: 3}, value: '3s'},
    {duration: {nanos: 100000000}, value: '0.100s'},
    {duration: {}, value: '0s'},
    {duration: {seconds: 3, nanos: 5}, value: '3.000000005s'},
    {duration: {seconds: 3, nanos: 5000}, value: '3.000005s'},
    {duration: {seconds: 3, nanos: 5000000}, value: '3.005s'},
    {duration: {nanos: 1}, value: '0.000000001s'},
    {duration: {nanos: 10}, value: '0.000000010s'},
    {duration: {nanos: 100}, value: '0.000000100s'},
    {duration: {nanos: 1000}, value: '0.000001s'},
    {duration: {nanos: 10000}, value: '0.000010s'},
    {duration: {nanos: 100000}, value: '0.000100s'},
    {duration: {nanos: 1000000}, value: '0.001s'},
    {duration: {nanos: 10000000}, value: '0.010s'},
    {duration: {nanos: 100000000}, value: '0.100s'},
  ];

  for (const mapping of testMapping) {
    const message = MessageWithDuration.fromObject({
      durationField: mapping.duration,
    });
    const json = {
      durationField: mapping.value,
    };

    it(`serializes ${JSON.stringify(mapping.duration)} to proto3 JSON`, () => {
      const serialized = toProto3JSON(message);
      assert.deepStrictEqual(serialized, json);
    });

    it(`deserializes "${mapping.value}" from proto3 JSON`, () => {
      const deserialized = fromProto3JSON(MessageWithDuration, json);
      assert.deepStrictEqual(deserialized, message);
    });
  }
}

testTwoTypesOfLoad('google.protobuf.Duration', testDuration);

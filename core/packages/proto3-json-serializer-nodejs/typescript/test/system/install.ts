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

// @ts-ignore
import {packNTest} from 'pack-n-play';
import {describe, it} from 'mocha';

describe('Packing test', () => {
  it('should work in TypeScript code', async function () {
    this.timeout(300000);
    const options = {
      packageDir: process.cwd(),
      sample: {
        description: 'runs serializer and deserializer in TypeScript',
        ts: `
import * as assert from 'assert';
import * as protobuf from 'protobufjs';
import * as serializer from 'proto3-json-serializer';
const root = protobuf.Root.fromJSON({
  "nested": {
    "Test": {
      "fields": {
        "field": {
          "type": "string",
          "id": 1
        }
      }
    }
  }
});
const Test = root.lookupType('Test');
const json = {
  field: 'test',
};
const message = serializer.fromProto3JSON(Test, json);
assert(message);
const serialized = serializer.toProto3JSON(message);
assert.deepStrictEqual(serialized, json);
`,
        dependencies: ['protobufjs@^7.4.0'],
      },
    };
    await packNTest(options).catch((err: any) => {
      console.error(err);
      throw err;
    });
  });
});

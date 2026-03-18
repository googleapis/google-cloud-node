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

import * as path from 'path';
import * as protobuf from 'protobufjs';
import {describe} from 'mocha';

const fixtures = path.join(__dirname, '..', '..', '..', 'test-fixtures');

interface TestFunction {
  (root: protobuf.Root): void;
}

export function testTwoTypesOfLoad(
  name: string,
  testFunctions: TestFunction | Array<TestFunction>,
) {
  const functions: Array<TestFunction> = Array.isArray(testFunctions)
    ? testFunctions
    : [testFunctions];
  describe(name, () => {
    describe('loadSync test', () => {
      const root = protobuf.loadSync(
        path.join(fixtures, 'proto', 'test.proto'),
      );
      functions.map(func => {
        func(root);
      });
    });
    describe('fromJSON test', () => {
      const root = protobuf.Root.fromJSON(
        require(path.join(fixtures, 'proto', 'test.json')),
      );
      functions.map(func => {
        func(root);
      });
    });
  });
}

// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import './mocha_extensions';
import * as watchModule from '../../src/watch';

/* eslint-disable @typescript-eslint/no-explicit-any */
(globalThis as any).__firestoreWatchModule = watchModule;

expect.addEqualityTesters([
  function protobufMessageEquality(
    this: {
      equals: (a: unknown, b: unknown, customTesters?: unknown[]) => boolean;
    },
    a: unknown,
    b: unknown,
    customTesters: unknown[],
  ): boolean | undefined {
    if (
      typeof a === 'object' &&
      a !== null &&
      typeof b === 'object' &&
      b !== null &&
      '$type' in a &&
      '$type' in b &&
      a.constructor === b.constructor &&
      typeof (a as {$type?: {toObject?: unknown}}).$type?.toObject ===
        'function'
    ) {
      const type = (
        a as {$type: {toObject: (m: unknown, o: object) => unknown}}
      ).$type;
      return this.equals(
        type.toObject(a, {defaults: true}),
        type.toObject(b, {defaults: true}),
        customTesters,
      );
    }
    return undefined;
  },
  function uint8ArrayEquality(a: unknown, b: unknown): boolean | undefined {
    if (a instanceof Uint8Array && b instanceof Uint8Array) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.byteLength; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    return undefined;
  },
]);

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

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

import {createRequire} from 'module';
import type {
  Connection as IConnection,
  Pool as IPool,
  Rows as IRows,
  SpannerLibError as ISpannerLibError,
} from 'spannerlib-node';

// Resolves a require function compatible with both ESM and CommonJS runtimes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nodeRequire: (id: string) => any =
  typeof require === 'function'
    ? require
    : createRequire(process.cwd() + '/package.json');

function tryRequire(moduleName: string) {
  try {
    return nodeRequire(moduleName);
  } catch {
    return null;
  }
}

// 1. Dynamic Platform Package Loading:
// Attempts to load matching platform package (@google-cloud/spannerlib-node-<platform>-<arch>)
// or fallback development package ('spannerlib-node').
const platformKey = `${process.platform}-${process.arch}`;
const nativeModule =
  tryRequire(`@google-cloud/spannerlib-node-${platformKey}`) ||
  tryRequire('spannerlib-node');

let PoolValue: {create(dsn: string): Promise<IPool>};
let ConnectionValue: unknown;
let RowsValue: unknown;
let SpannerLibErrorValue: typeof ISpannerLibError;

if (nativeModule) {
  PoolValue = nativeModule.Pool;
  ConnectionValue = nativeModule.Connection;
  RowsValue = nativeModule.Rows;
  SpannerLibErrorValue = nativeModule.SpannerLibError;
} else {
  // 2. Unit Test / CI Fallback Stubs:
  // When native package is absent in CI, stub classes allow unit tests to mock and run.
  PoolValue = class {
    static async create(dsn: string): Promise<IPool> {
      throw new Error(
        `Native Spanner driver addon (@google-cloud/spannerlib-node-${platformKey}) is not installed. ` +
          `Failed to connect to Spanner database (DSN: ${dsn}).`,
      );
    }
  };

  ConnectionValue = class {};
  RowsValue = class {};
  SpannerLibErrorValue = class extends Error {
    code?: number;
  };
}

export type Connection = IConnection;
export type Pool = IPool;
export type Rows = IRows;
export type SpannerLibError = ISpannerLibError;

export const Pool = PoolValue;
export const Connection = ConnectionValue;
export const Rows = RowsValue;
export const SpannerLibError = SpannerLibErrorValue;

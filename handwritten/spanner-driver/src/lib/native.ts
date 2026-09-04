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
// Loads matching platform package (@google-cloud/spannerlib-node-<platform>-<arch>).
const platformKey = `${process.platform}-${process.arch}`;
const nativeModule = tryRequire(`@google-cloud/spannerlib-node-${platformKey}`);

export type Connection = IConnection;
export type Pool = IPool;
export type Rows = IRows;
export type SpannerLibError = ISpannerLibError;

export const Pool: {
  create(dsn: string): Promise<Pool>;
} = nativeModule?.Pool ?? {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(_dsn: string): Promise<Pool> {
    return Promise.reject(
      new Error(
        `Native Spanner driver addon (@google-cloud/spannerlib-node-${platformKey}) is not installed or supported on this platform.`,
      ),
    );
  },
};

export const Connection: unknown = nativeModule?.Connection ?? class {};
export const Rows: unknown = nativeModule?.Rows ?? class {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SpannerLibError: any =
  nativeModule?.SpannerLibError ?? class extends Error {};

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

/* eslint-disable @typescript-eslint/no-explicit-any, import/no-extraneous-dependencies, n/no-extraneous-import */
import {jest} from '@jest/globals';

export const describe = (globalThis as any).describe;
export const it = (globalThis as any).it;
export const test = (globalThis as any).test;
export const expect = (globalThis as any).expect;
export const beforeEach = (globalThis as any).beforeEach;
export const afterEach = (globalThis as any).afterEach;
export const beforeAll = (globalThis as any).beforeAll;
export const afterAll = (globalThis as any).afterAll;

export const mock: any = Object.assign(
  (...args: any[]) => (jest.fn as any)(...args),
  {
    module: (moduleName: string, factory: () => any) => {
      jest.mock(moduleName, factory);
    },
    restore: () => jest.restoreAllMocks(),
  },
);

export const spyOn: any = (obj: any, method: any) => jest.spyOn(obj, method);
export type Mock = any;
export {jest};

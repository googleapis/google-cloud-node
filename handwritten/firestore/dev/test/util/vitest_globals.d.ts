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

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface VitestMockContext<TArgs extends any[] = any[], TReturns = any> {
  calls: TArgs[];
  instances: TReturns[];
  invocationCallOrder: number[];
  results: Array<{type: 'return' | 'throw' | 'incomplete'; value: TReturns}>;
  lastCall: TArgs | undefined;
}

export interface VitestMock<
  TProcedure extends (...args: any[]) => any = (...args: any[]) => any,
> {
  (...args: Parameters<TProcedure>): ReturnType<TProcedure>;
  mock: VitestMockContext<Parameters<TProcedure>, ReturnType<TProcedure>>;
  mockClear(): this;
  mockReset(): this;
  mockRestore(): void;
  mockImplementation(fn: TProcedure): this;
  mockImplementationOnce(fn: TProcedure): this;
  mockReturnThis(): this;
  mockReturnValue(obj: ReturnType<TProcedure>): this;
  mockReturnValueOnce(obj: ReturnType<TProcedure>): this;
  mockResolvedValue(obj: Awaited<ReturnType<TProcedure>>): this;
  mockResolvedValueOnce(obj: Awaited<ReturnType<TProcedure>>): this;
  mockRejectedValue(obj: any): this;
  mockRejectedValueOnce(obj: any): this;
}

export interface VitestUtils {
  fn<TProcedure extends (...args: any[]) => any = (...args: any[]) => any>(
    implementation?: TProcedure,
  ): VitestMock<TProcedure>;
  spyOn<T extends object, M extends keyof T>(
    obj: T,
    method: M,
  ): T[M] extends (...args: any[]) => any ? VitestMock<T[M]> : VitestMock;
  useFakeTimers(config?: any): this;
  useRealTimers(): this;
  restoreAllMocks(): this;
  clearAllMocks(): this;
  resetAllMocks(): this;
}

export interface VitestAssertion<T = any> {
  not: VitestAssertion<T>;
  resolves: VitestPromiseAssertion<Awaited<T>>;
  rejects: VitestPromiseAssertion<any>;
  toBe(expected: any): void;
  toEqual(expected: any): void;
  toStrictEqual(expected: any): void;
  toBeNull(): void;
  toBeUndefined(): void;
  toBeDefined(): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
  toBeNaN(): void;
  toBeInstanceOf(expected: any): void;
  toBeGreaterThan(expected: number | bigint): void;
  toBeGreaterThanOrEqual(expected: number | bigint): void;
  toBeLessThan(expected: number | bigint): void;
  toBeLessThanOrEqual(expected: number | bigint): void;
  toBeCloseTo(expected: number, numDigits?: number): void;
  toHaveLength(expected: number): void;
  toContain(expected: any): void;
  toContainEqual(expected: any): void;
  toMatch(expected: string | RegExp): void;
  toMatchObject(expected: object): void;
  toHaveProperty(keyPath: string | string[], value?: any): void;
  toThrow(expected?: string | Constructable | RegExp | Error): void;
  toThrowError(expected?: string | Constructable | RegExp | Error): void;
  toHaveBeenCalled(): void;
  toHaveBeenCalledTimes(amount: number): void;
  toHaveBeenCalledWith(...args: any[]): void;
}

export interface VitestPromiseAssertion<T = any> {
  not: VitestPromiseAssertion<T>;
  toBe(expected: any): Promise<void>;
  toEqual(expected: any): Promise<void>;
  toStrictEqual(expected: any): Promise<void>;
  toBeNull(): Promise<void>;
  toBeUndefined(): Promise<void>;
  toBeDefined(): Promise<void>;
  toBeTruthy(): Promise<void>;
  toBeFalsy(): Promise<void>;
  toBeNaN(): Promise<void>;
  toBeInstanceOf(expected: any): Promise<void>;
  toBeGreaterThan(expected: number | bigint): Promise<void>;
  toBeGreaterThanOrEqual(expected: number | bigint): Promise<void>;
  toBeLessThan(expected: number | bigint): Promise<void>;
  toBeLessThanOrEqual(expected: number | bigint): Promise<void>;
  toBeCloseTo(expected: number, numDigits?: number): Promise<void>;
  toHaveLength(expected: number): Promise<void>;
  toContain(expected: any): Promise<void>;
  toContainEqual(expected: any): Promise<void>;
  toMatch(expected: string | RegExp): Promise<void>;
  toMatchObject(expected: object): Promise<void>;
  toHaveProperty(keyPath: string | string[], value?: any): Promise<void>;
  toThrow(expected?: string | Constructable | RegExp | Error): Promise<void>;
  toThrowError(
    expected?: string | Constructable | RegExp | Error,
  ): Promise<void>;
}

interface Constructable {
  new (...args: any[]): any;
}

export interface VitestExpectStatic {
  <T>(actual: T, message?: string): VitestAssertion<T>;
  fail(message?: string): never;
  anything(): any;
  any(constructor: unknown): any;
  arrayContaining<T = unknown>(sample: Array<T>): any;
  objectContaining<T = unknown>(sample: T): any;
  stringContaining(expected: string): any;
  stringMatching(expected: string | RegExp): any;
  addEqualityTesters(
    testers: Array<(a: any, b: any, customTesters: any[]) => boolean | undefined>,
  ): void;
  getState(): {currentTestName?: string; testPath?: string};
}

export type MockInstance<
  TProcedure extends (...args: any[]) => any = (...args: any[]) => any,
> = VitestMock<TProcedure>;

export interface VitestTaskSuite {
  name: string;
  suite?: VitestTaskSuite;
}

export interface VitestTask {
  name: string;
  suite?: VitestTaskSuite;
}

export interface VitestTestContext {
  task: VitestTask;
  skip(): void;
}

export interface VitestTestFunction {
  (title: string, fn?: (ctx: VitestTestContext) => unknown, timeout?: number): any;
  skip: VitestTestFunction;
  only: VitestTestFunction;
  skipIf(condition: boolean): VitestTestFunction;
  skipEmulator: VitestTestFunction;
  skipEnterprise: VitestTestFunction;
  skipClassic: VitestTestFunction;
}

export interface VitestSuiteFunction {
  (title: string, fn: () => void, timeout?: number): any;
  skip: VitestSuiteFunction;
  only: VitestSuiteFunction;
  skipIf(condition: boolean): VitestSuiteFunction;
  skipEmulator: VitestSuiteFunction;
  skipEnterprise: VitestSuiteFunction;
  skipClassic: VitestSuiteFunction;
}

export declare const expect: VitestExpectStatic;
export declare const vi: VitestUtils;
export declare const vitest: VitestUtils;
export declare const beforeAll: (fn: () => unknown, timeout?: number) => void;
export declare const afterAll: (fn: () => unknown, timeout?: number) => void;
export declare const beforeEach: (
  fn: (ctx: VitestTestContext) => unknown,
  timeout?: number,
) => void;
export declare const afterEach: (
  fn: (ctx: VitestTestContext) => unknown,
  timeout?: number,
) => void;
export declare const it: VitestTestFunction;
export declare const xit: VitestTestFunction;
export declare const test: VitestTestFunction;
export declare const describe: VitestSuiteFunction;
export declare const xdescribe: VitestSuiteFunction;

declare global {
  // eslint-disable-next-line no-var
  var expect: VitestExpectStatic;
  // eslint-disable-next-line no-var
  var vi: VitestUtils;
  // eslint-disable-next-line no-var
  var vitest: VitestUtils;
  // eslint-disable-next-line no-var
  var beforeAll: (fn: () => unknown, timeout?: number) => void;
  // eslint-disable-next-line no-var
  var afterAll: (fn: () => unknown, timeout?: number) => void;
  // eslint-disable-next-line no-var
  var beforeEach: (
    fn: (ctx: VitestTestContext) => unknown,
    timeout?: number,
  ) => void;
  // eslint-disable-next-line no-var
  var afterEach: (
    fn: (ctx: VitestTestContext) => unknown,
    timeout?: number,
  ) => void;
  // eslint-disable-next-line no-var
  var it: VitestTestFunction;
  // eslint-disable-next-line no-var
  var xit: VitestTestFunction;
  // eslint-disable-next-line no-var
  var test: VitestTestFunction;
  // eslint-disable-next-line no-var
  var describe: VitestSuiteFunction;
  // eslint-disable-next-line no-var
  var xdescribe: VitestSuiteFunction;
}

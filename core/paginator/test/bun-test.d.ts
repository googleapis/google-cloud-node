/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'bun:test' {
  export type DoneCallback = (err?: any) => void;
  export function describe(name: string, fn: () => void): void;
  export namespace describe {
    export function only(name: string, fn: () => void): void;
    export function skip(name: string, fn: () => void): void;
  }
  export function it(name: string, fn: (done: DoneCallback) => any): void;
  export namespace it {
    export function only(name: string, fn: (done: DoneCallback) => any): void;
    export function skip(name: string, fn: (done: DoneCallback) => any): void;
  }
  export function test(name: string, fn: (done: DoneCallback) => any): void;
  export namespace test {
    export function only(name: string, fn: (done: DoneCallback) => any): void;
    export function skip(name: string, fn: (done: DoneCallback) => any): void;
  }
  export function beforeEach(fn: (done: DoneCallback) => any): void;
  export function afterEach(fn: (done: DoneCallback) => any): void;
  export function beforeAll(fn: (done: DoneCallback) => any): void;
  export function afterAll(fn: (done: DoneCallback) => any): void;
  export const expect: any;
  export function mock<T extends (...args: any[]) => any = (...args: any[]) => any>(
    fn?: T
  ): Mock<T>;
  export namespace mock {
    export function module(moduleName: string, factory: () => any): void;
    export function restore(): void;
  }
  export function spyOn(obj: any, method: any): Mock<any>;
  export const jest: any;
  export interface Mock<
    T extends (...args: any[]) => any = (...args: any[]) => any,
  > {
    (...args: Parameters<T>): ReturnType<T>;
    mock: {
      calls: any[];
      results: {type: string; value: any}[];
      lastCall?: any;
    };
    mockImplementation(
      fn?: (a?: any, b?: any, c?: any, d?: any, ...args: any[]) => any
    ): this;
    mockReturnValue(val: any): this;
    mockResolvedValue(val: any): this;
    mockRejectedValue(val: any): this;
    mockRestore(): void;
    mockClear(): void;
    mockReset(): void;
  }
}

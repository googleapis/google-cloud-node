// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import assert from 'node:assert/strict';
import {describe, it} from 'node:test';
import {
  checkBreakingChanges,
  compareSourceTexts,
  isIgnoredSourceFile,
} from '../breaking-change-check.mjs';

describe('breaking-change-check', () => {
  describe('isIgnoredSourceFile', () => {
    it('ignores test, sample, build, and fixture paths', () => {
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/test/index.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/system-test/pubsub.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/samples/ quickstart.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/build/src/index.d.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/foo.test.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/pubsub.ts'),
        false,
      );
    });
  });

  describe('interface and type alias changes', () => {
    it('fails when an interface property type is narrowed (PR #9539 port?: string | number -> number)', () => {
      const base = `
        export interface ClientConfig {
          servicePath?: string;
          port?: string | number;
        }
      `;
      const head = `
        export interface ClientConfig {
          servicePath?: string;
          port?: number;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(errors.length > 0, 'Expected breaking change error');
      assert.ok(
        errors.some(e => e.includes('ClientConfig') && e.includes("'port'")),
        `Expected error mentioning ClientConfig.port, got: ${errors.join('; ')}`,
      );
    });

    it('passes when an interface property type is widened (port?: number -> string | number)', () => {
      const base = `
        export interface ClientConfig {
          servicePath?: string;
          port?: number;
        }
      `;
      const head = `
        export interface ClientConfig {
          servicePath?: string;
          port?: string | number;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.deepEqual(errors, []);
    });

    it('fails when an optional property is made required', () => {
      const base = `
        export interface Options {
          timeout?: number;
        }
      `;
      const head = `
        export interface Options {
          timeout: number;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(
        errors.some(e =>
          e.includes("optional property 'timeout' was made required"),
        ),
        `Unexpected errors: ${errors.join('; ')}`,
      );
    });

    it('passes when a required property is made optional', () => {
      const base = `
        export interface Options {
          timeout: number;
        }
      `;
      const head = `
        export interface Options {
          timeout?: number;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.deepEqual(errors, []);
    });

    it('fails when a new required property is added to an interface', () => {
      const base = `
        export interface Options {
          timeout?: number;
        }
      `;
      const head = `
        export interface Options {
          timeout?: number;
          endpoint: string;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(
        errors.some(e =>
          e.includes("new required property 'endpoint' was added"),
        ),
        `Unexpected errors: ${errors.join('; ')}`,
      );
    });

    it('passes when a new optional property is added to an interface', () => {
      const base = `
        export interface Options {
          timeout?: number;
        }
      `;
      const head = `
        export interface Options {
          timeout?: number;
          endpoint?: string;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.deepEqual(errors, []);
    });

    it('fails when an interface property is removed', () => {
      const base = `
        export interface Options {
          timeout?: number;
          endpoint?: string;
        }
      `;
      const head = `
        export interface Options {
          timeout?: number;
        }
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(
        errors.some(e => e.includes("'endpoint' was removed")),
        `Unexpected errors: ${errors.join('; ')}`,
      );
    });
  });

  describe('function, method, and constructor signatures', () => {
    it('fails when a function parameter type is narrowed', () => {
      const base = `
        export function connect(port: string | number): void {}
      `;
      const head = `
        export function connect(port: number): void {}
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(
        errors.some(e => e.includes("Function 'connect")),
        `Unexpected errors: ${errors.join('; ')}`,
      );
    });

    it('passes when a function parameter type is widened', () => {
      const base = `
        export function connect(port: number): void {}
      `;
      const head = `
        export function connect(port: string | number): void {}
      `;
      const errors = compareSourceTexts(base, head);
      assert.deepEqual(errors, []);
    });

    it('fails when a parameter is removed or made required', () => {
      const base = `
        export function request(url: string, retries?: number): void {}
      `;
      const headRemoved = `
        export function request(url: string): void {}
      `;
      const headRequired = `
        export function request(url: string, retries: number): void {}
      `;
      assert.ok(compareSourceTexts(base, headRemoved).length > 0);
      assert.ok(compareSourceTexts(base, headRequired).length > 0);
    });

    it('passes when a new optional parameter is added', () => {
      const base = `
        export function request(url: string): void {}
      `;
      const head = `
        export function request(url: string, retries?: number): void {}
      `;
      assert.deepEqual(compareSourceTexts(base, head), []);
    });

    it('fails when an overload is removed and passes when an overload is added', () => {
      const singleOverload = `
        export function parse(input: string): object;
        export function parse(input: string): object { return {}; }
      `;
      const twoOverloads = `
        export function parse(input: string): object;
        export function parse(input: Uint8Array): object;
        export function parse(input: string | Uint8Array): object { return {}; }
      `;
      assert.ok(compareSourceTexts(twoOverloads, singleOverload).length > 0);
      assert.deepEqual(compareSourceTexts(singleOverload, twoOverloads), []);
    });
  });

  describe('classes and member visibility', () => {
    it('passes when private members are added, modified, or removed', () => {
      const base = `
        export class Client {
          private secret: string = 'a';
          protected helper(): number { return 1; }
          public run(port?: number): void {}
        }
      `;
      const head = `
        export class Client {
          private secret: number = 42;
          private extraPrivate(): void {}
          protected helper(): number { return 1; }
          public run(port?: string | number): void {}
        }
      `;
      assert.deepEqual(compareSourceTexts(base, head), []);
    });

    it('fails when a public class member is made protected or private', () => {
      const base = `
        export class Client {
          public close(): void {}
        }
      `;
      const headProtected = `
        export class Client {
          protected close(): void {}
        }
      `;
      const headPrivate = `
        export class Client {
          private close(): void {}
        }
      `;
      assert.ok(
        compareSourceTexts(base, headProtected).some(e =>
          e.includes("visibility was restricted from 'public' to 'protected'"),
        ),
      );
      assert.ok(
        compareSourceTexts(base, headPrivate).some(e =>
          e.includes("visibility was restricted from 'public' to 'private'"),
        ),
      );
    });
  });

  describe('generics and exports', () => {
    it('fails when an export is removed', () => {
      const base = `
        export const A = 1;
        export const B = 2;
      `;
      const head = `
        export const A = 1;
      `;
      const errors = compareSourceTexts(base, head);
      assert.ok(errors.some(e => e.includes("Export 'B' was removed")));
    });

    it('passes when a generic type parameter constraint is widened and fails when narrowed', () => {
      const narrowConstraint = `
        export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
      `;
      const wideConstraint = `
        export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
      `;
      assert.deepEqual(
        compareSourceTexts(narrowConstraint, wideConstraint),
        [],
      );
      assert.ok(
        compareSourceTexts(wideConstraint, narrowConstraint).length > 0,
      );
    });

    it('fails when a generic interface property is narrowed and passes when widened', () => {
      const wideProp = `
        export interface Box<T> {
          value: T | string;
        }
      `;
      const narrowProp = `
        export interface Box<T> {
          value: T;
        }
      `;
      assert.ok(compareSourceTexts(wideProp, narrowProp).length > 0);
      assert.deepEqual(compareSourceTexts(narrowProp, wideProp), []);
    });
  });

  describe('historical commits (PR #9539 and PR #9549)', () => {
    it('detects the breaking change in PR #9539 (4443d6d6b1) and passes on its revert PR #9549 (d62a64f338)', async () => {
      const breakingErrors = await checkBreakingChanges({
        diffRevArgs: ['4443d6d6b1^', '4443d6d6b1'],
        baseRev: '4443d6d6b1^',
        headRev: '4443d6d6b1',
      });
      assert.ok(
        breakingErrors.some(
          e =>
            e.includes("Interface/Type 'ClientConfig': property 'port'") &&
            e.includes("was 'string | number | undefined'") &&
            e.includes("now 'number | undefined'"),
        ),
        `Expected PR #9539 ClientConfig.port breaking change, got: ${breakingErrors.join('\n')}`,
      );

      const revertErrors = await checkBreakingChanges({
        diffRevArgs: ['d62a64f338^', 'd62a64f338'],
        baseRev: 'd62a64f338^',
        headRev: 'd62a64f338',
      });
      assert.deepEqual(revertErrors, []);
    });
  });
});

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
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {describe, it} from 'node:test';
import {fileURLToPath} from 'node:url';
import {
  buildWorkspaceDepCompileFilterArgs,
  checkBreakingChanges,
  compareSourceTexts,
  escapeMarkdownSummaryText,
  escapeWorkflowCommandProperty,
  escapeWorkflowCommandValue,
  isIgnoredSourceFile,
  resolveGitDiffRange,
} from '../breaking-change-check.mjs';

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(TEST_DIR, '../..');

function hasGitCommit(rev, cwd = REPO_ROOT) {
  try {
    execFileSync('git', ['cat-file', '-e', `${rev}^{commit}`], {
      cwd,
      stdio: 'ignore',
    });
    return true;
  } catch {
    return false;
  }
}

function createTempGitRepo(setupCommitsFn) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bcc-test-'));
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: tmpDir,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
  const writeFiles = files => {
    for (const [rel, content] of Object.entries(files)) {
      const full = path.join(tmpDir, rel);
      if (content === null) {
        fs.rmSync(full, {force: true});
      } else {
        fs.mkdirSync(path.dirname(full), {recursive: true});
        fs.writeFileSync(
          full,
          typeof content === 'string'
            ? content
            : JSON.stringify(content, null, 2),
        );
      }
    }
  };
  const commitAll = msg => {
    git('add', '-A');
    git('commit', '-m', msg);
    return git('rev-parse', 'HEAD');
  };

  git('init');
  git('config', 'user.email', 'test@example.com');
  git('config', 'user.name', 'Test User');
  git('config', 'commit.gpgsign', 'false');

  return Promise.resolve()
    .then(() => setupCommitsFn({tmpDir, git, writeFiles, commitAll}))
    .finally(() => {
      fs.rmSync(tmpDir, {recursive: true, force: true});
    });
}

describe('breaking-change-check', () => {
  describe('isIgnoredSourceFile', () => {
    it('ignores test, sample, build, proto, and fixture paths across .ts/.mts/.cts', () => {
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/test/index.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/system-test/pubsub.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/samples/quickstart.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/build/src/index.d.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('core/packages/gaxios/esm/src/index.d.mts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/protos/protos.d.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/foo.test.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/foo.test.mts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/foo.spec.cts'),
        true,
      );
      assert.equal(isIgnoredSourceFile('handwritten/pubsub/gulpfile.ts'), true);
      assert.equal(
        isIgnoredSourceFile('handwritten/pubsub/src/pubsub.ts'),
        false,
      );
      assert.equal(
        isIgnoredSourceFile('core/packages/pkg/src/entry.mts'),
        false,
      );
      assert.equal(
        isIgnoredSourceFile('core/packages/pkg/src/entry.cts'),
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
      assert.deepEqual(compareSourceTexts(base, head), []);
    });

    it('fails when an optional property is made required and passes when required becomes optional', () => {
      const opt = 'export interface Options { timeout?: number; }';
      const req = 'export interface Options { timeout: number; }';
      assert.ok(
        compareSourceTexts(opt, req).some(e =>
          e.includes("optional property 'timeout' was made required"),
        ),
      );
      assert.deepEqual(compareSourceTexts(req, opt), []);
    });

    it('fails when a new required property is added (including to an empty interface) and passes when optional', () => {
      assert.ok(
        compareSourceTexts(
          'export interface Empty {}',
          'export interface Empty { endpoint: string; }',
        ).some(e => e.includes("new required property 'endpoint' was added")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export interface Options { timeout?: number; }',
          'export interface Options { timeout?: number; endpoint?: string; }',
        ),
        [],
      );
    });

    it('fails when a property is removed or made readonly', () => {
      assert.ok(
        compareSourceTexts(
          'export interface Options { timeout?: number; endpoint?: string; }',
          'export interface Options { timeout?: number; }',
        ).some(e => e.includes("'endpoint' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface Options { port?: number; }',
          'export interface Options { readonly port?: number; }',
        ).some(e => e.includes("property 'port' was made readonly")),
      );
    });

    it('detects breaking widening on output-only interfaces (including transitively returned interfaces)', () => {
      const base = `
        export interface Row { id: number; label: string; }
        export interface QueryPage { rows: Row[]; }
        export declare function query(): Promise<QueryPage>;
      `;
      const headWidened = `
        export interface Row { id: number | string; label: string; }
        export interface QueryPage { rows: Row[]; }
        export declare function query(): Promise<QueryPage>;
      `;
      const headOptional = `
        export interface Row { id?: number; label: string; }
        export interface QueryPage { rows: Row[]; }
        export declare function query(): Promise<QueryPage>;
      `;
      const headNarrowed = `
        export interface Row { id: 1; label: string; }
        export interface QueryPage { rows: Row[]; }
        export declare function query(): Promise<QueryPage>;
      `;
      assert.ok(
        compareSourceTexts(base, headWidened).some(e =>
          e.includes("Interface/Type 'Row': property 'id'"),
        ),
      );
      assert.ok(
        compareSourceTexts(base, headOptional).some(e =>
          e.includes("required output property 'id' was made optional"),
        ),
      );
      assert.deepEqual(compareSourceTexts(base, headNarrowed), []);
    });

    it('checks constructable interfaces, callable interfaces, and index signatures', () => {
      assert.ok(
        compareSourceTexts(
          'export interface Ctor { new (port: string | number): { ok: boolean }; }',
          'export interface Ctor { new (port: number): { ok: boolean }; }',
        ).some(e => e.includes("Constructable type 'Ctor'")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface Handler { (x: string): void; version: string; }',
          'export interface Handler { (x: string): void; }',
        ).some(e => e.includes("'version' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface HeadersMap { [key: string]: string | number; }',
          'export interface HeadersMap {}',
        ).some(e => e.includes("index signature '[key: string]' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface HeadersMap { [key: string]: string; }',
          'export interface HeadersMap { readonly [key: string]: string; }',
        ).some(e =>
          e.includes("index signature '[key: string]' was made readonly"),
        ),
      );
    });
  });

  describe('return-type covariance and callback contravariance', () => {
    it('fails when function or async return types widen or change from void to Promise<void>', () => {
      assert.ok(
        compareSourceTexts(
          'export function getId(): string { return "a"; }',
          'export function getId(): string | undefined { return undefined; }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export declare function fetchCount(): Promise<number>;',
          'export declare function fetchCount(): Promise<number | null>;',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export function flush(): void {}',
          'export async function flush(): Promise<void> {}',
        ).some(e => e.includes("changed from synchronous 'void' to a Promise")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export declare function getId(): string | undefined;',
          'export declare function getId(): string;',
        ),
        [],
      );
    });

    it('fails when an unexported helper return type widens while excusing verified ClientConfig widening', () => {
      assert.ok(
        compareSourceTexts(
          'type InternalRes = string; export declare function run(): InternalRes;',
          'type InternalRes = string | undefined; export declare function run(): InternalRes;',
        ).length > 0,
      );

      const baseConnected = `
        export interface ClientConfig { port?: number; }
        export class PubSub {
          options: ClientConfig = {};
          constructor(cfg?: ClientConfig) {}
          async getClientConfig(): Promise<ClientConfig> { return this.options; }
        }
      `;
      const headWidenedCfg = `
        export interface ClientConfig { port?: number | string; }
        export class PubSub {
          options: ClientConfig = {};
          constructor(cfg?: ClientConfig) {}
          async getClientConfig(): Promise<ClientConfig> { return this.options; }
        }
      `;
      const headNullableReturn = `
        export interface ClientConfig { port?: number | string; }
        export class PubSub {
          options: ClientConfig = {};
          constructor(cfg?: ClientConfig) {}
          async getClientConfig(): Promise<ClientConfig | undefined> { return undefined; }
        }
      `;
      assert.deepEqual(compareSourceTexts(baseConnected, headWidenedCfg), []);
      assert.ok(
        compareSourceTexts(baseConnected, headNullableReturn).length > 0,
      );
    });

    it('enforces contravariance on callback parameters, callback arity, callback return types, and higher-order callbacks', () => {
      // Widening what the library passes to a user callback breaks `(port: number) => void` consumers
      assert.ok(
        compareSourceTexts(
          'export declare function onPort(cb: (port: number) => void): void;',
          'export declare function onPort(cb: (port: number | string) => void): void;',
        ).length > 0,
      );
      // Narrowing what the library passes to a user callback is non-breaking
      assert.deepEqual(
        compareSourceTexts(
          'export declare function onPort(cb: (port: number | string) => void): void;',
          'export declare function onPort(cb: (port: number) => void): void;',
        ),
        [],
      );
      // Narrowing accepted callback return (`void | Promise<void>` -> `Promise<void>`) breaks sync callbacks
      assert.ok(
        compareSourceTexts(
          'export declare function hook(fn: () => void | Promise<void>): void;',
          'export declare function hook(fn: () => Promise<void>): void;',
        ).length > 0,
      );
      // Library passing extra arg to callback is safe; dropping a promised arg breaks consumers reading 2nd arg
      assert.deepEqual(
        compareSourceTexts(
          'export declare function onClose(cb: (code: number) => void): void;',
          'export declare function onClose(cb: (code: number, reason: string) => void): void;',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export declare function onClose(cb: (code: number, reason: string) => void): void;',
          'export declare function onClose(cb: (code: number) => void): void;',
        ).length > 0,
      );
      // Depth-2 higher-order callback (`emit` supplied to consumer narrowed `string | number` -> `string`)
      assert.ok(
        compareSourceTexts(
          'export declare function register(h: (emit: (v: string | number) => void) => void): void;',
          'export declare function register(h: (emit: (v: string) => void) => void): void;',
        ).length > 0,
      );
      // Optional callback property on an input options interface (plus mutually recursive interfaces)
      assert.ok(
        compareSourceTexts(
          'export interface RetryOpts { onErr?: (err: Error) => void; }',
          'export interface RetryOpts { onErr?: (err: Error | string) => void; }',
        ).some(e => e.includes("callback property 'onErr'")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export interface A { retry?: B; timeout?: number; } export interface B { onAttempt?: (a: A) => void; }',
          'export interface A { retry?: B; timeout?: number | string; } export interface B { onAttempt?: (a: A) => void; }',
        ),
        [],
      );
    });
  });

  describe('function, method, generic, and overload signatures', () => {
    it('catches class and interface method parameter narrowing despite TypeScript method bivariance', () => {
      assert.ok(
        compareSourceTexts(
          'export class Client { run(port: string | number): void {} }',
          'export class Client { run(port: number): void {} }',
        ).some(e => e.includes("Class 'Client': method 'run'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Client { send<T>(payload: T | string): void {} }',
          'export class Client { send<T>(payload: T): void {} }',
        ).some(e => e.includes("Class 'Client': method 'send'")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface Transport { send<T>(payload: T | string): T; }',
          'export interface Transport { send<T>(payload: T): T; }',
        ).some(e => e.includes("Interface/Type 'Transport': method 'send'")),
      );
    });

    it('checks generic functions, generic constraints, generic defaults, optional-to-default, and rest tuples', () => {
      // Explicit generic call `wrap<number>('hello')` breaks when `T | string` narrows to `T`
      assert.ok(
        compareSourceTexts(
          'export declare function wrap<T>(x: T | string): T;',
          'export declare function wrap<T>(x: T): T;',
        ).some(e => e.includes("Function 'wrap'")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export declare function wrap<T>(x: T): T;',
          'export declare function wrap<T>(x: T | string): T | string;',
        ).filter(e => e.includes('parameter')),
        [],
      );

      // Generic constraint on unexported local interface narrowed (`Base` -> `Sub`)
      assert.ok(
        compareSourceTexts(
          'interface Base { a: string; } export interface Box<T extends Base> { item: T; }',
          'interface Base { a: string; b: number; } export interface Box<T extends Base> { item: T; }',
        ).some(e =>
          e.includes(
            "Type 'Box' type parameter constraint became more restrictive",
          ),
        ),
      );

      // Generic constraint on exported union narrowed (`A | B` -> `A`)
      assert.ok(
        compareSourceTexts(
          'export interface A { a: 1; } export interface B { b: 2; } export interface Hook<T extends A | B> { run(x: T): void; }',
          'export interface A { a: 1; } export interface B { b: 2; } export interface Hook<T extends A> { run(x: T): void; }',
        ).some(e =>
          e.includes(
            "Type 'Hook' type parameter constraint became more restrictive",
          ),
        ),
      );

      // Generic type-parameter default removed (`0..1` -> `1..1`) vs added
      assert.ok(
        compareSourceTexts(
          'export interface Resp<T = unknown> { data: T; }',
          'export interface Resp<T> { data: T; }',
        ).some(e => e.includes('type parameter arity became more restrictive')),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export interface Resp<T> { data: T; }',
          'export interface Resp<T = unknown> { data: T; }',
        ),
        [],
      );

      // Optional parameter replaced with default initializer produces optional in .d.ts (non-breaking)
      assert.deepEqual(
        compareSourceTexts(
          'export function retry(url: string, attempts?: number): void {}',
          'export function retry(url: string, attempts = 3): void {}',
        ),
        [],
      );

      // Rest-tuple parameter arity narrowed `...[string, number?]` -> `...[string]`
      assert.ok(
        compareSourceTexts(
          'export function send(...args: [string, number?]): void {}',
          'export function send(...args: [string]): void {}',
        ).some(e => e.includes("Function 'send'")),
      );

      // Overload removed vs overload added
      const one = `
        export function parse(input: string): object;
        export function parse(input: string): object { return {}; }
      `;
      const two = `
        export function parse(input: string): object;
        export function parse(input: Uint8Array): object;
        export function parse(input: string | Uint8Array): object { return {}; }
      `;
      assert.ok(compareSourceTexts(two, one).length > 0);
      assert.deepEqual(compareSourceTexts(one, two), []);
    });
  });

  describe('classes, visibility, declaration emit inference, and @internal', () => {
    it('handles private/protected parameter properties, inferred returns from private/#private fields, ClassExpressions, and accessors', () => {
      // Removing `private readonly` constructor parameter keeps public constructor arity unchanged
      assert.deepEqual(
        compareSourceTexts(
          'export class Svc { constructor(public host: string, private readonly tag?: string) {} }',
          'export class Svc { constructor(public host: string, tag?: string) {} }',
        ),
        [],
      );

      // Changing a private or #private field that alters an inferred public return type IS breaking
      assert.ok(
        compareSourceTexts(
          'export class Client { private token = "abc"; getToken() { return this.token; } }',
          'export class Client { private token = 123; getToken() { return this.token; } }',
        ).some(e => e.includes("Class 'Client': method 'getToken'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Client { #token = "abc"; getToken() { return this.#token; } }',
          'export class Client { #token = 123; getToken() { return this.#token; } }',
        ).some(e => e.includes("Class 'Client': method 'getToken'")),
      );

      // Factory returning a ClassExpression with private members (avoids TS4094 false positives)
      assert.deepEqual(
        compareSourceTexts(
          'export function makeBase() { return class { private x = 1; run(): number { return 1; } }; }',
          'export function makeBase() { return class { private y = "s"; run(): number { return 2; } }; }',
        ),
        [],
      );

      // Auto-accessor visibility
      assert.deepEqual(
        compareSourceTexts(
          'export class Box { protected accessor count = 0; private secret = 1; }',
          'export class Box { protected accessor count = 0; private secret = "two"; }',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export class Box { public accessor count = 0; }',
          'export class Box { protected accessor count = 0; }',
        ).some(e =>
          e.includes("visibility was restricted from 'public' to 'protected'"),
        ),
      );
    });

    it('detects constructor restriction, abstract conversion, getter/setter visibility, anonymous default export, and aliased class exports', () => {
      assert.ok(
        compareSourceTexts(
          'export class Client { constructor(port?: number) {} }',
          'export class Client { protected constructor(port?: number) {} }',
        ).some(e =>
          e.includes(
            "constructor visibility was restricted from 'public' to 'protected'",
          ),
        ),
      );
      assert.ok(
        compareSourceTexts(
          'export class Client { run(): void {} }',
          'export abstract class Client { run(): void {} }',
        ).some(e => e.includes("changed from concrete to 'abstract'")),
      );
      assert.ok(
        compareSourceTexts(
          'export abstract class Base { abstract a(): void; }',
          'export abstract class Base { abstract a(): void; abstract b(): void; }',
        ).some(e => e.includes("added a new required abstract member 'b'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class C { get x(): number { return 1; } private set x(_v: number) {} }',
          'export class C { protected get x(): number { return 1; } private set x(_v: number) {} }',
        ).some(e =>
          e.includes(
            "member 'x' visibility was restricted from 'public' to 'protected'",
          ),
        ),
      );
      assert.ok(
        compareSourceTexts(
          'export default class { public open(): void {} }',
          'export default class { protected open(): void {} }',
        ).some(e => e.includes("Class 'default' member 'open'")),
      );
      assert.ok(
        compareSourceTexts(
          'class InternalImpl { public open(): void {} } export { InternalImpl as Client };',
          'class InternalImpl { protected open(): void {} } export { InternalImpl as Client };',
        ).some(e => e.includes("Class 'Client' member 'open'")),
      );
    });

    it('ignores @internal declarations on both .ts sources and pre-written .d.ts files', () => {
      assert.deepEqual(
        compareSourceTexts(
          `
            /**
             * @internal
             */
            export function _hiddenHelper(): void {}
            export class Client {
              /**
               * @internal
               */
              _resetCache(): void {}
              public ping(): string { return 'pong'; }
            }
          `,
          `
            export class Client {
              public ping(): string { return 'pong'; }
            }
          `,
        ),
        [],
      );
      assert.deepEqual(
        compareSourceTexts(
          'export * from "./types";',
          'export * from "./types";',
          {
            '__base__/types.d.ts':
              '/** @internal */\nexport declare function _secret(): void;\nexport interface Pub { a?: string; }\n',
            '__head__/types.d.ts': 'export interface Pub { a?: string; }\n',
          },
        ),
        [],
      );
    });
  });

  describe('type-only exports, symbols, enums, namespaces, and constants', () => {
    it('fails when a value export is downgraded to export type', () => {
      assert.ok(
        compareSourceTexts(
          'class Client {} export { Client };',
          'class Client {} export type { Client };',
        ).some(e => e.includes('runtime value removed')),
      );
    });

    it('handles well-known symbols, unique symbols, and symbol-branded classes in generic constraints', () => {
      assert.ok(
        compareSourceTexts(
          'export class Stream { async *[Symbol.asyncIterator]() { yield 1; } }',
          'export class Stream {}',
        ).some(e => e.includes("'[Symbol.asyncIterator]' was removed")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export const ERR_SYM = Symbol.for("err"); export class MyErr extends Error { [ERR_SYM] = "1"; } export interface Interceptor<T extends { err?: MyErr }> { onErr?: (e: MyErr) => void; val?: T; } export class Manager<T extends { err?: MyErr }> extends Set<Interceptor<T> | null> {}',
          'export const ERR_SYM = Symbol.for("err"); export class MyErr extends Error { [ERR_SYM] = "1"; } export interface Interceptor<T extends { err?: MyErr }> { onErr?: (e: MyErr) => void; val?: T; } export class Manager<T extends { err?: MyErr }> extends Set<Interceptor<T> | null> {}',
        ),
        [],
      );
      assert.deepEqual(
        compareSourceTexts(
          'export const TAG: unique symbol = Symbol("tag");',
          'export const TAG: unique symbol = Symbol("tag");',
        ),
        [],
      );
      assert.deepEqual(
        compareSourceTexts(
          'class Util { maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(optionsOrCallback?: T | C, cb?: C): [T, C] { return [{} as T, cb as C]; } } export const util = new Util();',
          'class Util { maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(optionsOrCallback?: T | C, cb?: C): [T, C] { return [{} as T, cb as C]; } } export const util = new Util();',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'class Util { maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(optionsOrCallback?: T | C, cb?: C): [T, C] { return [{} as T, cb as C]; } } export const util = new Util();',
          'class Util { maybeOptionsOrCallback<T = {}, C = (err: TypeError) => void>(optionsOrCallback?: T | C, cb?: C): [T, C] { return [{} as T, cb as C]; } } export const util = new Util();',
        ).length > 0,
      );
      assert.deepEqual(
        compareSourceTexts(
          'const SYM = Symbol("aq"); class AggregateQuery { type = SYM; count(alias?: string): AggregateQuery { return this; } } export class Datastore { create(): AggregateQuery { return new AggregateQuery(); } run(q: AggregateQuery): void {} }',
          'const SYM = Symbol("aq"); class AggregateQuery { type = SYM; count(alias?: string): AggregateQuery { return this; } } export class Datastore { create(): AggregateQuery { return new AggregateQuery(); } run(q: AggregateQuery): void {} }',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'const SYM = Symbol("aq"); class AggregateQuery { type = SYM; count(alias?: string): AggregateQuery { return this; } } export class Datastore { create(): AggregateQuery { return new AggregateQuery(); } run(q: AggregateQuery): void {} }',
          'const SYM = Symbol("aq"); class AggregateQuery { type = SYM; count(alias: number): AggregateQuery { return this; } } export class Datastore { create(): AggregateQuery { return new AggregateQuery(); } run(q: AggregateQuery): void {} }',
        ).length > 0,
      );
    });

    it('allows additive enum members while catching removed or revalued enum members', () => {
      assert.deepEqual(
        compareSourceTexts(
          'export enum State { Ready = "READY" }',
          'export enum State { Ready = "READY", Closed = "CLOSED" }',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export enum State { Ready = 0, Closed = 1 }',
          'export enum State { Closed = 0 }',
        ).some(e => e.includes("Enum 'State': member 'Ready' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export enum State { Ready = 0, Closed = 1 }',
          'export enum State { Ready = 0, Closed = 2 }',
        ).some(e => e.includes("Enum 'State': member 'Closed' value changed")),
      );
    });

    it('checks both runtime value namespaces and pure-type namespaces', () => {
      assert.ok(
        compareSourceTexts(
          'export namespace v1 { export function connect(port: string | number): void {} }',
          'export namespace v1 { export function connect(port: number): void {} }',
        ).some(e => e.includes('connect')),
      );
      assert.ok(
        compareSourceTexts(
          'export namespace protos { export interface IReq { host?: string; } }',
          'export namespace protos { export interface IReq { host: string; } }',
        ).some(e => e.includes("optional property 'host' was made required")),
      );
    });

    it('checks exported constants and typeof value queries', () => {
      assert.ok(
        compareSourceTexts(
          'export const DEFAULT_PORT: number = 443;',
          'export const DEFAULT_PORT: number | string = 443;',
        ).some(e => e.includes("Exported value 'DEFAULT_PORT'")),
      );
      assert.ok(
        compareSourceTexts(
          'export const VERSION = 1;',
          'export const VERSION = 2;',
        ).some(e => e.includes("Exported value 'VERSION'")),
      );
      assert.ok(
        compareSourceTexts(
          'export declare const MODE: string; export interface Opts { mode?: typeof MODE; }',
          'export const MODE = "strict"; export interface Opts { mode?: typeof MODE; }',
        ).some(e => e.includes("Interface/Type 'Opts': property 'mode'")),
      );
    });
  });

  describe('CLI flag, git range, and GitHub Actions workflow escaping helpers', () => {
    it('escapes %, CR, LF, :, and , in workflow commands and HTML in step summaries', () => {
      assert.equal(
        escapeWorkflowCommandValue('100%\r\n::set-env name=FOO::BAR'),
        '100%25%0D%0A::set-env name=FOO::BAR',
      );
      assert.equal(
        escapeWorkflowCommandProperty('pkg/a:b,c%d\ne.ts'),
        'pkg/a%3Ab%2Cc%25d%0Ae.ts',
      );
      assert.equal(
        escapeMarkdownSummaryText("Type 'Box<T>' & </details>\nnext"),
        "Type 'Box&lt;T&gt;' &amp; &lt;/details&gt; next",
      );
    });

    it('parses GIT_DIFF_ARG revisions and pathspecs in strict mode and rejects flags', () => {
      const prev = process.env.GIT_DIFF_ARG;
      try {
        delete process.env.GIT_DIFF_ARG;
        assert.throws(
          () => resolveGitDiffRange(true, REPO_ROOT),
          /GIT_DIFF_ARG/,
        );

        process.env.GIT_DIFF_ARG = '--output=/tmp/pwn HEAD';
        assert.throws(
          () => resolveGitDiffRange(true, REPO_ROOT),
          /Invalid git revision argument/,
        );

        process.env.GIT_DIFF_ARG = 'HEAD..HEAD -- :!packages';
        const parsed = resolveGitDiffRange(true, REPO_ROOT);
        assert.deepEqual(parsed.diffRevArgs, ['HEAD', 'HEAD']);
        assert.equal(parsed.baseRev, 'HEAD');
        assert.equal(parsed.headRev, null);
        assert.deepEqual(parsed.pathspecArgs, [':!packages']);
      } finally {
        if (prev === undefined) {
          delete process.env.GIT_DIFF_ARG;
        } else {
          process.env.GIT_DIFF_ARG = prev;
        }
      }
    });

    it('builds pnpm workspace dependency compile filters for public packages and removed base deps', async () => {
      await createTempGitRepo(({tmpDir, writeFiles, commitAll, git}) => {
        writeFiles({
          'core/packages/helper/package.json': {
            name: '@google-cloud/removed-helper',
            version: '1.0.0',
          },
          'pub/package.json': {
            name: '@google-cloud/pub',
            version: '1.0.0',
            dependencies: {'@google-cloud/removed-helper': 'workspace:*'},
          },
          'priv/package.json': {
            name: '@google-cloud/priv',
            private: true,
            version: '1.0.0',
          },
        });
        const baseSha = commitAll('base');
        writeFiles({
          'pub/package.json': {name: '@google-cloud/pub', version: '1.0.0'},
        });
        const args = buildWorkspaceDepCompileFilterArgs(
          [
            path.join(tmpDir, 'pub'),
            path.join(tmpDir, 'priv'),
            path.join(tmpDir, 'pub'),
          ],
          {
            absRepoRoot: tmpDir,
            baseRev: baseSha,
            reader: {
              getFileAtRev: (rev, rel) => git('show', `${rev}:${rel}`),
            },
          },
        );
        assert.deepEqual(args, [
          '--filter',
          '@google-cloud/pub^...',
          '--filter',
          '@google-cloud/removed-helper...',
        ]);
      });
    });
  });

  describe('hermetic git repository checkBreakingChanges integration', () => {
    it(
      'supports non-src package layouts (types/*.d.ts, typescript/src/*.ts, root index.d.ts, and .mts)',
      {timeout: 60000},
      async () => {
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'pkg-types/package.json': {
              name: '@test/firestore-like',
              version: '1.0.0',
              types: 'types/client.d.ts',
            },
            'pkg-types/tsconfig.json': {compilerOptions: {strict: true}},
            'pkg-types/types/client.d.ts':
              'export interface Settings { host?: string | number; }\n',
            'pkg-ts-src/package.json': {
              name: '@test/serializer-like',
              version: '1.0.0',
              main: './build/src/index.js',
              types: './build/src/index.d.ts',
            },
            'pkg-ts-src/tsconfig.json': {
              compilerOptions: {strict: true, outDir: 'build'},
            },
            'pkg-ts-src/typescript/src/index.ts':
              'export function encode(v: string | number): string { return String(v); }\n',
            'pkg-root-dts/package.json': {
              name: '@test/retry-like',
              version: '1.0.0',
              main: 'index.js',
              types: 'index.d.ts',
            },
            'pkg-root-dts/tsconfig.json': {compilerOptions: {strict: true}},
            'pkg-root-dts/index.d.ts':
              'export interface RetryOpts { retries?: number; }\n',
            'pkg-mts/package.json': {
              name: '@test/mts-pkg',
              version: '1.0.0',
              exports: {'.': './src/index.mts'},
            },
            'pkg-mts/tsconfig.json': {compilerOptions: {strict: true}},
            'pkg-mts/src/index.mts':
              'export function greet(name: string | number): string { return String(name); }\n',
          });
          const baseSha = commitAll('base');

          // 1. Additive commit across all 4 layouts passes cleanly
          writeFiles({
            'pkg-types/types/client.d.ts':
              'export interface Settings { host?: string | number; ssl?: boolean; }\n',
            'pkg-ts-src/typescript/src/index.ts':
              'export function encode(v: string | number | boolean): string { return String(v); }\n',
            'pkg-root-dts/index.d.ts':
              'export interface RetryOpts { retries?: number; maxDelay?: number; }\n',
            'pkg-mts/src/index.mts':
              'export function greet(name: string | number | boolean): string { return String(name); }\n',
          });
          const additiveSha = commitAll('additive');
          const additiveErrs = await checkBreakingChanges({
            diffRevArgs: [baseSha, additiveSha],
            baseRev: baseSha,
            headRev: additiveSha,
            repoRoot: tmpDir,
          });
          assert.deepEqual(additiveErrs, []);

          // 2. Breaking edits in all 4 non-standard layouts are caught
          writeFiles({
            'pkg-types/types/client.d.ts':
              'export interface Settings { host?: number; }\n',
            'pkg-ts-src/typescript/src/index.ts':
              'export function encode(v: number): string { return String(v); }\n',
            'pkg-root-dts/index.d.ts':
              'export interface RetryOpts { retries: number; }\n',
            'pkg-mts/src/index.mts':
              'export function greet(name: number): string { return String(name); }\n',
          });
          const breakSha = commitAll('breaking');
          const breakErrs = await checkBreakingChanges({
            diffRevArgs: [additiveSha, breakSha],
            baseRev: additiveSha,
            headRev: breakSha,
            repoRoot: tmpDir,
          });
          assert.ok(
            breakErrs.some(e => e.includes('pkg-types/types/client.d.ts')),
          );
          assert.ok(
            breakErrs.some(e =>
              e.includes('pkg-ts-src/typescript/src/index.ts'),
            ),
          );
          assert.ok(breakErrs.some(e => e.includes('pkg-root-dts/index.d.ts')));
          assert.ok(breakErrs.some(e => e.includes('pkg-mts/src/index.mts')));
        });
      },
    );

    it(
      'ignores unexported internal file deletions/renames while catching dropped entrypoint re-exports and removed package.json#exports subpaths',
      {timeout: 60000},
      async () => {
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'pkg/package.json': {
              name: '@test/client',
              version: '1.0.0',
              exports: {
                '.': {
                  types: './build/src/index.d.ts',
                  default: './build/src/index.js',
                },
                './lite': {
                  types: './build/src/lite.d.ts',
                  default: './build/src/lite.js',
                },
              },
            },
            'pkg/tsconfig.json': {
              compilerOptions: {strict: true, outDir: 'build'},
            },
            'pkg/src/internal.ts':
              'export function internalCompute(x: string): number { return x.length; }\n',
            'pkg/src/old-impl.ts':
              'import {internalCompute} from "./internal";\nexport class Client { size(s: string): number { return internalCompute(s); } }\nexport interface Config { endpoint?: string; }\n',
            'pkg/src/index.ts': 'export {Client, Config} from "./old-impl";\n',
            'pkg/src/lite.ts': 'export const LITE = true;\n',
          });
          const baseSha = commitAll('base');

          // Delete internal.ts and rename old-impl.ts -> new-impl.ts while preserving public surface
          writeFiles({
            'pkg/src/internal.ts': null,
            'pkg/src/old-impl.ts': null,
            'pkg/src/new-impl.ts':
              'export class Client { size(s: string): number { return s.length; } }\nexport interface Config { endpoint?: string; }\n',
            'pkg/src/index.ts': 'export {Client, Config} from "./new-impl";\n',
          });
          const refactorSha = commitAll('internal-refactor');
          const refactorErrs = await checkBreakingChanges({
            diffRevArgs: [baseSha, refactorSha],
            baseRev: baseSha,
            headRev: refactorSha,
            repoRoot: tmpDir,
          });
          assert.deepEqual(refactorErrs, []);

          // Now drop `Config` re-export and remove `./lite` subpath from package.json#exports
          writeFiles({
            'pkg/package.json': {
              name: '@test/client',
              version: '1.0.0',
              exports: {
                '.': {
                  types: './build/src/index.d.ts',
                  default: './build/src/index.js',
                },
              },
            },
            'pkg/src/index.ts': 'export {Client} from "./new-impl";\n',
          });
          const breakSha = commitAll('drop-reexport-and-subpath');
          const breakErrs = await checkBreakingChanges({
            diffRevArgs: [refactorSha, breakSha],
            baseRev: refactorSha,
            headRev: breakSha,
            repoRoot: tmpDir,
          });
          assert.ok(
            breakErrs.some(e => e.includes("Export 'Config' was removed")),
            `Expected Config removal error, got: ${breakErrs.join('; ')}`,
          );
          assert.ok(
            breakErrs.some(e =>
              e.includes(
                "Public subpath export './lite' was removed from package.json#exports",
              ),
            ),
            `Expected ./lite subpath removal error, got: ${breakErrs.join('; ')}`,
          );
        });
      },
    );

    it(
      'enforces dual ESM/CJS exports lanes, removed conditions/exports, private: true, ambient d.ts, and tsconfig changes',
      {timeout: 60000},
      async () => {
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'tsconfig.base.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'CommonJS',
                strict: false,
                strictNullChecks: false,
              },
            },
            'pkg-dual/package.json': {
              name: '@test/dual',
              version: '1.0.0',
              exports: {
                '.': {
                  import: {
                    types: './build/esm/index.d.mts',
                    default: './build/esm/index.mjs',
                  },
                  require: {
                    types: './build/cjs/index.d.cts',
                    default: './build/cjs/index.cjs',
                  },
                },
              },
            },
            'pkg-dual/tsconfig.json': {
              compilerOptions: {
                strict: true,
                module: 'NodeNext',
                moduleResolution: 'NodeNext',
              },
            },
            'pkg-dual/src/index.mts':
              'export function runEsm(x: string | number): string { return String(x); }\n',
            'pkg-dual/src/index.cts':
              'export function runCjs(x: string | number): string { return String(x); }\n',
            'pkg-ambient/package.json': {
              name: '@test/ambient',
              version: '1.0.0',
              types: 'types/firestore.d.ts',
              files: ['types', 'pipelines'],
            },
            'pkg-ambient/pipelines/package.json': {
              name: '@test/ambient-pipelines',
              types: '../types/pipelines.d.ts',
            },
            'pkg-ambient/tsconfig.json': {compilerOptions: {strict: true}},
            'pkg-ambient/types/shim.d.ts':
              "declare module 'third-party-shim' { export interface ShimObj { ok: boolean; } }\n",
            'pkg-ambient/types/firestore.d.ts': [
              '/// <reference path="./shim.d.ts" />',
              'declare namespace TestFs {',
              '  export interface Settings { host?: string; }',
              '  /** @internal */',
              '  export type InternalKind = "a" | "b";',
              '  export class Doc { kind: InternalKind; constructor(s?: Settings); }',
              '  export namespace Pipelines {',
              '    export interface ExecOpts { atomic?: boolean; }',
              '  }',
              '}',
              "declare module '@test/ambient' {",
              '  export = TestFs;',
              '}',
              '',
            ].join('\n'),
            'pkg-ambient/types/pipelines.d.ts': [
              "import './firestore';",
              "declare module '@test/ambient/pipelines' {",
              '  export = TestFs.Pipelines;',
              '}',
              '',
            ].join('\n'),
            'pkg-pub/package.json': {
              name: '@test/pub',
              version: '1.0.0',
              exports: {
                '.': './build/src/index.js',
                './extra': './build/src/extra.js',
              },
              types: './build/src/index.d.ts',
            },
            'pkg-pub/tsconfig.json': {
              extends: '../tsconfig.base.json',
              compilerOptions: {outDir: 'build'},
            },
            'pkg-pub/src/index.ts':
              'export function greet(name = null as string | null) { return name; }\n',
            'pkg-pub/src/extra.ts': 'export const EXTRA = 1;\n',
          });
          const baseSha = commitAll('base');

          // 1. Narrow CJS lane only (`runCjs`) and break ambient `Settings.host` & `ExecOpts.atomic`
          writeFiles({
            'pkg-dual/src/index.cts':
              'export function runCjs(x: number): string { return String(x); }\n',
            'pkg-ambient/types/firestore.d.ts': [
              '/// <reference path="./shim.d.ts" />',
              'declare namespace TestFs {',
              '  export interface Settings { host: string; }',
              '  /** @internal */',
              '  export type InternalKind = "a" | "b";',
              '  export class Doc { kind: InternalKind; constructor(s?: Settings); }',
              '  export namespace Pipelines {',
              '    export interface ExecOpts { atomic: boolean; }',
              '  }',
              '}',
              "declare module '@test/ambient' {",
              '  export = TestFs;',
              '}',
              '',
            ].join('\n'),
          });
          const step1Sha = commitAll('narrow-cjs-and-ambient');
          const step1Errs = await checkBreakingChanges({
            diffRevArgs: [baseSha, step1Sha],
            baseRev: baseSha,
            headRev: step1Sha,
            repoRoot: tmpDir,
          });
          assert.ok(
            step1Errs.some(
              e => e.includes('index.cts') && e.includes('runCjs'),
            ),
            `Expected CJS lane narrowing error, got: ${step1Errs.join('; ')}`,
          );
          assert.ok(
            step1Errs.some(
              e =>
                e.includes('firestore.d.ts') &&
                e.includes("Interface/Type 'Settings'"),
            ),
            `Expected ambient firestore.d.ts error, got: ${step1Errs.join('; ')}`,
          );
          assert.ok(
            step1Errs.some(
              e =>
                e.includes('pipelines.d.ts') &&
                e.includes("Interface/Type 'ExecOpts'"),
            ),
            `Expected legacy subdir pipelines.d.ts error, got: ${step1Errs.join('; ')}`,
          );

          // 2. Drop `require` condition on dual pkg, mark `pkg-ambient` private, delete `exports` on `pkg-pub`,
          //    and flip `strictNullChecks: true` in `tsconfig.base.json` (`name = null` inferred without null vs with null).
          writeFiles({
            'tsconfig.base.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'CommonJS',
                strict: false,
                strictNullChecks: true,
              },
            },
            'pkg-dual/package.json': {
              name: '@test/dual',
              version: '1.0.0',
              exports: {
                '.': {
                  import: {
                    types: './build/esm/index.d.mts',
                    default: './build/esm/index.mjs',
                  },
                },
              },
            },
            'pkg-ambient/package.json': {
              name: '@test/ambient',
              version: '1.0.0',
              private: true,
              types: 'types/firestore.d.ts',
            },
            'pkg-pub/package.json': {
              name: '@test/pub',
              version: '1.0.0',
              main: './build/src/index.js',
              types: './build/src/index.d.ts',
            },
            'pkg-pub/src/index.ts':
              'export function greet(name: string) { return name; }\n',
          });
          const step2Sha = commitAll('pkg-manifest-and-tsconfig-breaks');
          const step2Errs = await checkBreakingChanges({
            diffRevArgs: [step1Sha, step2Sha],
            baseRev: step1Sha,
            headRev: step2Sha,
            repoRoot: tmpDir,
          });
          assert.ok(
            step2Errs.some(e =>
              e.includes("removed CommonJS ('require') support"),
            ),
            `Expected dropped require condition error, got: ${step2Errs.join('; ')}`,
          );
          assert.ok(
            step2Errs.some(e => e.includes('"private": true')),
            `Expected private: true conversion error, got: ${step2Errs.join('; ')}`,
          );
          assert.ok(
            step2Errs.some(
              e => e.includes("'./extra'") && e.includes('removed'),
            ),
            `Expected ./extra subpath removal when exports deleted, got: ${step2Errs.join('; ')}`,
          );
          assert.ok(
            step2Errs.some(
              e => e.includes('pkg-pub') && e.includes("Function 'greet'"),
            ),
            `Expected signature error on '.', got: ${step2Errs.join('; ')}`,
          );

          // 3. Pure tsconfig*.json edit (`strictNullChecks: false -> true`) with ZERO .ts edits
          //    changes emitted .d.ts types (`host = null`: `any` -> `null`; `[1, null]`: `number[]` -> `(number | null)[]`).
          writeFiles({
            'pkg-cfg/package.json': {
              name: '@test/cfg',
              version: '1.0.0',
              types: './build/src/index.d.ts',
            },
            'pkg-cfg/tsconfig.base.json': {
              compilerOptions: {
                strict: false,
                strictNullChecks: false,
                outDir: 'build',
              },
            },
            'pkg-cfg/tsconfig.json': {extends: './tsconfig.base.json'},
            'pkg-cfg/src/index.ts':
              'export function setHost(host = null): void {}\nexport const ITEMS = [1, null];\n',
          });
          const cfgBase = commitAll('cfg-base');
          writeFiles({
            'pkg-cfg/tsconfig.base.json': {
              compilerOptions: {
                strict: false,
                strictNullChecks: true,
                outDir: 'build',
              },
            },
          });
          const cfgHead = commitAll('cfg-strict-only');
          const cfgErrs = await checkBreakingChanges({
            diffRevArgs: [cfgBase, cfgHead],
            baseRev: cfgBase,
            headRev: cfgHead,
            repoRoot: tmpDir,
          });
          assert.ok(
            cfgErrs.some(
              e => e.includes('pkg-cfg') && e.includes("Function 'setHost'"),
            ),
            `Expected tsconfig.base.json strictNullChecks change to catch setHost(any -> null), got: ${cfgErrs.join('; ')}`,
          );
        });
      },
    );
  });

  describe('variance, any-safety, expandos, predicates, and overload shadowing', () => {
    it('enforces covariant readonly/getter properties and invariant mutable class/value properties', () => {
      assert.ok(
        compareSourceTexts(
          'export class Doc { readonly id: string = "a"; }',
          'export class Doc { readonly id: string | undefined = undefined; }',
        ).some(e => e.includes("Class 'Doc': property 'id'")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export class Doc { readonly id: string | undefined = "a"; }',
          'export class Doc { readonly id: string = "a"; }',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export class Auth { get token(): string { return "t"; } }',
          'export class Auth { get token(): string | null { return null; } }',
        ).some(e => e.includes("Class 'Auth': property 'token'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Cfg { endpoint: string = "a"; }',
          'export class Cfg { endpoint: string | undefined = undefined; }',
        ).some(e => e.includes("Class 'Cfg': property 'endpoint'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Cfg { port: string | number = 80; }',
          'export class Cfg { port: number = 80; }',
        ).some(e => e.includes("Class 'Cfg': property 'port'")),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export class Box { get v(): string { return ""; } set v(x: string) {} }',
          'export class Box { get v(): string { return ""; } set v(x: string | number) {} }',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export const DEFAULTS: { readonly retries: number } = { retries: 3 };',
          'export const DEFAULTS: { readonly retries: number | undefined } = { retries: undefined };',
        ).some(e => e.includes("Value 'DEFAULTS': property 'retries'")),
      );
      assert.ok(
        compareSourceTexts(
          'export let logLevel: string | number = 1;',
          'export const logLevel: string | number = 1;',
        ).some(e => e.includes("was made readonly ('const')")),
      );
    });

    it('catches narrowing from any and widening returns to any across direct and nested types while allowing any -> unknown', () => {
      assert.ok(
        compareSourceTexts(
          'export function send(body: any): void {}',
          'export function send(body: string): void {}',
        ).length > 0,
      );
      assert.deepEqual(
        compareSourceTexts(
          'export function send(body: any): void {}',
          'export function send(body: unknown): void {}',
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export function getId(): string { return "x"; }',
          'export function getId(): any { return "x"; }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export async function fetchId(): Promise<string> { return "x"; }',
          'export async function fetchId(): Promise<any> { return "x"; }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export function batch(items: any[]): void {}',
          'export function batch(items: string[]): void {}',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export function put(doc: Record<string, any>): void {}',
          'export function put(doc: Record<string, number>): void {}',
        ).length > 0,
      );
    });

    it('checks callable expandos, merged class/enum namespaces, required input callbacks, and contravariant callback output types', () => {
      assert.ok(
        compareSourceTexts(
          'export function req(u: string): void {} req.resetStats = (): void => {}; req.defaults = (o: {timeout?: number | string}) => req;',
          'export function req(u: string): void {} req.defaults = (o: {timeout: number}) => req;',
        ).some(e => e.includes("'resetStats' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Client {} export namespace Client { export interface Opts { a?: number; } export type Mode = "x" | "y"; }',
          'export class Client {} export namespace Client { export interface Opts { a: number; } }',
        ).some(e =>
          e.includes("Namespace 'Client': export 'Mode' was removed"),
        ),
      );
      assert.ok(
        compareSourceTexts(
          'export enum Kind { A = 1 } export namespace Kind { export function from(s: string): Kind { return Kind.A; } }',
          'export enum Kind { A = 1 } export namespace Kind {}',
        ).some(e => e.includes("Namespace 'Kind': export 'from' was removed")),
      );
      assert.ok(
        compareSourceTexts(
          'export interface Opts { onErr: (err: Error) => void; } export function run(o: Opts): void {}',
          'export interface Opts { onErr: (err: Error | string) => void; } export function run(o: Opts): void {}',
        ).some(e => e.includes("callback property 'onErr'")),
      );
      assert.ok(
        compareSourceTexts(
          'export type RequestCallback<T> = (err: Error | null, res?: T) => void; export interface Row { id: string; count: number; } export class Table { getRows(cb: RequestCallback<Row[]>): void {} }',
          'export type RequestCallback<T> = (err: Error | null, res?: T) => void; export interface Row { id: string; count?: number; } export class Table { getRows(cb: RequestCallback<Row[]>): void {} }',
        ).some(e =>
          e.includes("required output property 'count' was made optional"),
        ),
      );
    });

    it('checks NodeNext .d.mts generics, type guards/asserts/this params, static & nested generics, rest tails, setter/inherited visibility, @internal constructors/enums, and overload shadowing', () => {
      assert.ok(
        compareSourceTexts(
          'export interface Envelope<T extends string | number> { payload?: T; }',
          'export interface Envelope<T extends string> { payload?: T; }',
          {},
          {
            entryFileName: 'index.d.mts',
            compilerOptions: {module: 199, moduleResolution: 99},
          },
        ).some(e =>
          e.includes('type parameter constraint became more restrictive'),
        ),
      );
      assert.ok(
        compareSourceTexts(
          'export namespace NS { export interface Base { a: string; } export interface Sub extends Base { b: number; } } export function f<T extends NS.Base>(x: T): T { return x; }',
          'export namespace NS { export interface Base { a: string; } export interface Sub extends Base { b: number; } } export function f<T extends NS.Sub>(x: T): T { return x; }',
        ).some(e => e.includes('generic constraint became more restrictive')),
      );
      assert.ok(
        compareSourceTexts(
          'export function isStr(x: unknown): x is string { return typeof x === "string"; }',
          'export function isStr(x: unknown): boolean { return typeof x === "string"; }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export function check(x: unknown): asserts x is string { if (typeof x !== "string") throw new Error(); }',
          'export function check(x: unknown): void { if (typeof x !== "string") throw new Error(); }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export class C { id = 1; } export function run(x: number): number { return x; }',
          'export class C { id = 1; } export function run(this: C, x: number): number { return x; }',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export class Util { static wrap<T>(v: T | string): T { return v as T; } }',
          'export class Util { static wrap<T>(v: T): T { return v; } }',
        ).some(e => e.includes("Value 'Util': method 'wrap'")),
      );
      assert.ok(
        compareSourceTexts(
          'export class Box<T> { send<U>(owner: T, item: U | string): U { return item as U; } }',
          'export class Box<T> { send<U>(owner: T, item: U): U { return item; } }',
        ).some(e => e.includes("Class 'Box': method 'send'")),
      );
      assert.ok(
        compareSourceTexts(
          'export function log(...args: Array<string | number>): void {}',
          'export function log(first?: string | number, ...rest: number[]): void {}',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export function tags(...args: readonly (string | number)[]): void {}',
          'export function tags(...args: readonly string[]): void {}',
        ).length > 0,
      );
      assert.ok(
        compareSourceTexts(
          'export class Box { get v(): number { return 1; } set v(x: number) {} }',
          'export class Box { get v(): number { return 1; } protected set v(x: number) {} }',
        ).some(e => e.includes("setter 'v' visibility was restricted")),
      );
      assert.ok(
        compareSourceTexts(
          'class Base {} export class Client extends Base { public open(): void {} }',
          'class Base { protected open(): void {} } export class Client extends Base {}',
        ).some(e =>
          e.includes(
            "member 'open' visibility was restricted from 'public' to 'protected'",
          ),
        ),
      );
      assert.deepEqual(
        compareSourceTexts(
          'export declare class Secret { /** @internal */ constructor(raw: string); readonly ok: boolean; } export declare enum Kind { A = 1, /** @internal */ _B = 2 } declare function h(x: string): void; export { /** @internal */ h };',
          'export declare class Secret { /** @internal */ constructor(raw: number, f: boolean); readonly ok: boolean; } export declare enum Kind { A = 1 }',
          {},
          {entryFileName: 'mod.d.ts'},
        ),
        [],
      );
      assert.ok(
        compareSourceTexts(
          'export declare function parse(x: string): RegExp;',
          'export declare function parse(x: unknown): unknown;\nexport declare function parse(x: string): RegExp;',
          {},
          {entryFileName: 'mod.d.ts'},
        ).some(e => e.includes('is shadowed by earlier overload')),
      );
      assert.ok(
        compareSourceTexts(
          'interface One { a: string; } export function run(v: One): void {}',
          'import {One} from "./other"; export function run(v: One): void {}',
          {'__head__/other.ts': 'export interface One { b: number; }'},
        ).length > 0,
      );
    });

    it(
      'covers callback arity/rest tails, callable nullability, generic helpers, Reference any-safety, index signatures, overloaded generic methods, and variance modifiers',
      {timeout: 60000},
      async () => {
        // H2: Callback required parameter changed to optional or rest, and callback rest-tail truncation
        assert.ok(
          compareSourceTexts(
            'export function onMsg(cb: (topic: string, data: string) => void): void {}',
            'export function onMsg(cb: (topic: string, ...data: string[]) => void): void {}',
          ).length > 0,
        );
        assert.ok(
          compareSourceTexts(
            'export function onLog(cb: (lvl: number, ...tags: string[]) => void): void {}',
            'export function onLog(cb: (lvl: number, meta: string, ...counts: number[]) => void): void {}',
          ).length > 0,
        );
        // H2: Callable property nullability & mutable callable property write variance
        assert.ok(
          compareSourceTexts(
            'export class Sender { send: (msg: string) => Promise<void> = async () => {}; }',
            'export class Sender { send: ((msg: string) => Promise<void>) | null = null; }',
          ).some(e => e.includes("Class 'Sender': property 'send'")),
        );
        assert.ok(
          compareSourceTexts(
            'export interface Opts { onError?: ((err: Error) => void) | null; } export function run(o: Opts): void {}',
            'export interface Opts { onError?: (err: Error) => void; } export function run(o: Opts): void {}',
          ).some(e => e.includes("callback property 'onError'")),
        );
        assert.ok(
          compareSourceTexts(
            'export class Client { hook: (req: string) => string = s => s; }',
            'export class Client { hook: (req: string | number) => string = s => String(s); }',
          ).some(e => e.includes("Class 'Client': property 'hook'")),
        );
        // H3: Unexported generic type alias helper constraint/default narrowing & @internal default class in .d.ts
        assert.ok(
          compareSourceTexts(
            'export interface Opts { a?: string; }\ntype Env<T extends string | number = string> = { opts?: Opts; payload: T };\nexport declare function read(): Env;',
            'export interface Opts { a?: string | number; }\ntype Env<T extends number = number> = { opts?: Opts; payload: T };\nexport declare function read(): Env;',
            {},
            {entryFileName: 'index.d.ts'},
          ).length > 0,
        );
        assert.deepEqual(
          compareSourceTexts(
            '/** @internal */\nexport default class InternalThing { x: string; }\nexport interface Pub { a: number; }',
            '/** @internal */\nexport default class InternalThing { x: number; }\nexport interface Pub { a: number; }',
            {},
            {entryFileName: 'index.d.ts'},
          ),
          [],
        );
        // M2: hasUnsafeAnyAssignment on ObjectFlags.Reference generic interfaces
        assert.ok(
          compareSourceTexts(
            'export interface GaxiosResponse<T = any> { data: T; }\nexport function handle(res: GaxiosResponse<any>): void {}',
            'export interface GaxiosResponse<T = any> { data: T; }\nexport function handle(res: GaxiosResponse<{ id: string }>): void {}',
          ).length > 0,
        );
        assert.ok(
          compareSourceTexts(
            'export interface GaxiosResponse<T = any> { data: T; }\nexport declare function fetchUser(): Promise<GaxiosResponse<{ id: string }>>;',
            'export interface GaxiosResponse<T = any> { data: T; }\nexport declare function fetchUser(): Promise<GaxiosResponse<any>>;',
            {},
            {entryFileName: 'index.d.ts'},
          ).length > 0,
        );
        // M4: Index signature referencing unified exported class
        assert.deepEqual(
          compareSourceTexts(
            'export class Topic { name = ""; }\nexport interface TopicMap { [key: string]: Topic; }',
            'export class Topic { name = ""; flush(): void {} }\nexport interface TopicMap { [key: string]: Topic; }',
          ),
          [],
        );
        // M5: Multi-overload generic methods & single rest tuple minArgs
        assert.ok(
          compareSourceTexts(
            'export class Table {\n  insert<T>(rows: Array<T | string>): Promise<void>;\n  insert<T>(rows: Array<T | string>, cb: (err: Error | null) => void): void;\n  insert<T>(_rows: Array<T | string>): any {}\n}',
            'export class Table {\n  insert<T>(rows: Array<T>): Promise<void>;\n  insert<T>(rows: Array<T>, cb: (err: Error | null) => void): void;\n  insert<T>(_rows: Array<T>): any {}\n}',
          ).some(e => e.includes("Class 'Table': method 'insert'")),
        );
        assert.ok(
          compareSourceTexts(
            'export function exec(...args: string[]): void {}',
            'export function exec(...args: [string, ...string[]]): void {}',
          ).length > 0,
        );
        assert.ok(
          compareSourceTexts(
            'export function exec(...args: string[]): void {}',
            'export function exec(...args: [...string[], { strict: boolean }]): void {}',
          ).length > 0,
        );
        // L1 & L2: Variance modifiers (in/out/const) and removed class getter with setter retained
        assert.ok(
          compareSourceTexts(
            'export interface Producer<out T> { get(): T; }',
            'export interface Producer<in out T> { get(): T; }',
          ).some(e => e.includes('variance modifier')),
        );
        assert.ok(
          compareSourceTexts(
            'export function routes<const T extends readonly string[]>(r: T): T { return r; }',
            'export function routes<T extends readonly string[]>(r: T): T { return r; }',
          ).length > 0,
        );
        assert.ok(
          compareSourceTexts(
            'export class Box { get v(): string | undefined { return ""; } set v(x: string | undefined) {} }',
            'export class Box { set v(x: string | undefined) {} }',
          ).some(e => e.includes("getter 'v' visibility was restricted")),
        );
        // Output-only interface wrapping a unified class + non-exported @internal interface in .d.ts
        assert.deepEqual(
          compareSourceTexts(
            'export interface ClientConfig { port?: number; }\nexport class Topic { constructor(c?: ClientConfig) {} }\nexport interface GetTopicsResponse { topics: Topic[]; }\nexport declare function getTopics(): Promise<GetTopicsResponse>;',
            'export interface ClientConfig { port?: number | string; }\nexport class Topic { constructor(c?: ClientConfig) {} }\nexport interface GetTopicsResponse { topics: Topic[]; totalCount: number; }\nexport declare function getTopics(): Promise<GetTopicsResponse>;',
            {},
            {entryFileName: 'index.d.ts'},
          ),
          [],
        );
        assert.ok(
          compareSourceTexts(
            '/** @internal */\ninterface InternalMeta { tag: string | number; }\nexport interface PublicOpts { meta?: InternalMeta; }',
            '/** @internal */\ninterface InternalMeta { tag: number; }\nexport interface PublicOpts { meta?: InternalMeta; }',
            {},
            {entryFileName: 'index.d.ts'},
          ).length > 0,
        );
        // Round 2A & 2B: unexported enum unification, variance across MethodSignature/unexported wrappers/callbacks/inherited classes,
        // dropping all exports, ambient module @internal & local helpers, Node10 .mts generics, callback type predicates, Readonly<T>, and property-to-accessor restrictions
        assert.deepEqual(
          compareSourceTexts(
            'enum Mode { A = "a", B = "b" }\nexport function setMode(m: Mode, extra?: string): void {}',
            'enum Mode { A = "a", B = "b" }\nexport function setMode(m: Mode, extra?: string | number): void {}',
          ),
          [],
        );
        assert.ok(
          compareSourceTexts(
            'export interface Row { id: number; label: string; }\ninterface QueryPage { rows: Row[]; }\nexport declare function query(): Promise<QueryPage>;',
            'export interface Row { id?: number; label: string; }\ninterface QueryPage { rows: Row[]; }\nexport declare function query(): Promise<QueryPage>;',
          ).some(e => e.includes("Interface/Type 'Row'")),
        );
        assert.ok(
          compareSourceTexts(
            'export interface Token { secret: string; }\nexport interface AuthClient { send(token: Token): void; }\nexport function connect(auth: AuthClient): void {}',
            'export interface Token { secret: string; requiredNew: number; }\nexport interface AuthClient { send(token: Token): void; }\nexport function connect(auth: AuthClient): void {}',
          ).some(e => e.includes("Interface/Type 'Token'")),
        );
        assert.ok(
          compareSourceTexts(
            'type Callback<T> = (err: Error | null, res?: T) => void;\nexport interface Row { id: string; count: number; }\nexport class Table { getRows(cb: Callback<Row[]>): void {} }',
            'type Callback<T> = (err: Error | null, res?: T) => void;\nexport interface Row { id: string; count?: number; }\nexport class Table { getRows(cb: Callback<Row[]>): void {} }',
          ).some(e => e.includes("Interface/Type 'Row'")),
        );
        assert.ok(
          compareSourceTexts(
            'export function foo(x: string): void {}',
            'function foo(x: string): void {}',
          ).some(e => e.includes("Export 'foo' was removed")),
        );
        assert.deepEqual(
          compareSourceTexts(
            "declare module 'pkg' {\n  interface LocalHelper { a: string; }\n  /** @internal */\n  export interface Secret { b: string; }\n  export interface Pub { x?: LocalHelper; }\n}",
            "declare module 'pkg' {\n  interface LocalHelper { a: string; }\n  export interface Pub { x?: LocalHelper; }\n}",
            {},
            {entryFileName: 'index.d.ts'},
          ),
          [],
        );
        assert.deepEqual(
          compareSourceTexts(
            'export interface Box<T> { items: Array<T>; }',
            'export interface Box<T> { items: T[]; }',
            {},
            {entryFileName: 'index.mts'},
          ),
          [],
        );
        assert.ok(
          compareSourceTexts(
            'export function filter(pred: (x: unknown) => boolean): void {}',
            'export function filter(pred: (x: unknown) => x is string): void {}',
          ).length > 0,
        );
        assert.ok(
          compareSourceTexts(
            'export const cfg: { host: string } = { host: "a" };',
            'export const cfg: Readonly<{ host: string }> = { host: "a" };',
          ).some(e => e.includes("property 'host' was made readonly")),
        );
        assert.ok(
          compareSourceTexts(
            'export class Box { public v: string = ""; }',
            'export class Box { public get v(): string { return ""; } protected set v(x: string) {} }',
          ).some(e => e.includes("setter 'v' visibility was restricted")),
        );
        assert.ok(
          compareSourceTexts(
            'export let config: { port?: number } = {};',
            'export const config: { port?: number } = {};',
          ).some(e => e.includes("Exported value 'config' was made readonly")),
        );
        // Round 3 & Round 4: inherited generic base class/interface instantiation changes, swapped type parameters,
        // keyof input parameter variance, heritage contravariant type args, and adding optional defaulted type params
        assert.ok(
          compareSourceTexts(
            'export class BaseService<T> { value!: T; fetch(): Promise<T> { return null as any; } send(item: T): void {} }\nexport class UserService extends BaseService<string> {}',
            'export class BaseService<T> { value!: T; fetch(): Promise<T> { return null as any; } send(item: T): void {} }\nexport class UserService extends BaseService<number> {}',
          ).some(
            e =>
              e.includes("Class 'UserService': method 'fetch'") ||
              e.includes("Class 'UserService': property 'value'"),
          ),
        );
        assert.ok(
          compareSourceTexts(
            'export class Tag { private x = 1; }\nexport interface Box<T, U> { first: [Tag, T]; }',
            'export class Tag { private x = 1; }\nexport interface Box<U, T> { first: [Tag, T]; }',
          ).some(e => e.includes("Interface/Type 'Box': property 'first'")),
        );
        assert.ok(
          compareSourceTexts(
            'export interface Options { a?: string; b?: number; }\nexport function getOption(key: keyof Options): unknown { return key; }',
            'export interface Options { a?: string; b: number; }\nexport function getOption(key: keyof Options): unknown { return key; }',
          ).some(e => e.includes("Interface/Type 'Options'")),
        );
        assert.ok(
          compareSourceTexts(
            'export interface Command { id: string; }\nexport class BaseProcessor<T> { handle(cmd: T): void {} }\nexport class MyProcessor extends BaseProcessor<Command> {}',
            'export interface Command { id: string; priority: number; }\nexport class BaseProcessor<T> { handle(cmd: T): void {} }\nexport class MyProcessor extends BaseProcessor<Command> {}',
          ).some(e => e.includes("Interface/Type 'Command'")),
        );
        assert.deepEqual(
          compareSourceTexts(
            'export declare function create<T = string>(val?: T): T;',
            'export declare function create<T = string, U = number>(val?: T): T;',
            {},
            {entryFileName: 'index.d.ts'},
          ),
          [],
        );
        // Round 5: input callback type aliases, inherited base-class visibility demotions, generic class constructors, and swapped multi-overload generic type params
        assert.ok(
          compareSourceTexts(
            'export type Handler = (ev: string) => void | Promise<void>;\nexport function onEvent(h: Handler): void {}',
            'export type Handler = (ev: string | number) => Promise<void>;\nexport function onEvent(h: Handler): void {}',
          ).some(e => e.includes("Callable type 'Handler'")),
        );
        assert.ok(
          compareSourceTexts(
            'class InternalBase { public open(): void {} }\nexport class Client extends InternalBase {}',
            'class InternalBase { protected open(): void {} }\nexport class Client extends InternalBase {}',
          ).some(e =>
            e.includes(
              "Class 'Client': member 'open' visibility was restricted from 'public' to 'protected'",
            ),
          ),
        );
        assert.deepEqual(
          compareSourceTexts(
            'export class Box<T> { value?: T; }',
            'export class Box<T> { value?: T; constructor(init?: T) {} }',
          ),
          [],
        );
        assert.deepEqual(
          compareSourceTexts(
            'export class Box<T> { constructor(val: T) {} }',
            'export class Box<T> { constructor(val: T | null) {} }',
          ),
          [],
        );
        assert.ok(
          compareSourceTexts(
            'export class Box<T> { constructor(val: T | null) {} }',
            'export class Box<T> { constructor(val: T) {} }',
          ).some(e => e.includes("Constructor for 'Box'")),
        );
        assert.ok(
          compareSourceTexts(
            'export declare function fn(x: number): number;\nexport declare function fn<T extends object, U>(a: T, b: unknown): T;',
            'export declare function fn(x: number): number;\nexport declare function fn<T extends object, U>(a: U, b: T): T;',
            {},
            {entryFileName: 'index.d.ts'},
          ).some(e => e.includes("Function 'fn'")),
        );
        // H1 & M1 + Round 1B: Legacy types/main repointing, tsconfig paths/baseUrl in base, dual .mts/.cts lane deletion, and subdir stub package.json
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'pkg/package.json': {
              name: '@google-cloud/legacy-pkg',
              version: '1.0.0',
              main: './build/src/index.js',
              types: './build/src/index.d.ts',
            },
            'pkg/tsconfig.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'CommonJS',
                strict: true,
                resolveJsonModule: true,
                baseUrl: '.',
                paths: {'@/*': ['src/*']},
                outDir: 'build',
              },
            },
            'pkg/src/schema.json': {version: 1, endpoint: 'a'},
            'pkg/src/types.ts':
              'export interface PathConfig { port?: string | number; }',
            'pkg/src/index.ts':
              'import schema from "./schema.json";\nexport {PathConfig} from "@/types";\nexport const SCHEMA = schema;\nexport function oldApi(x: string | number): void {}',
            'pkg-dual/package.json': {
              name: '@google-cloud/dual-pkg',
              version: '1.0.0',
              exports: {
                '.': {
                  import: './build/esm/index.mjs',
                  default: './build/cjs/index.cjs',
                },
              },
            },
            'pkg-dual/tsconfig.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'NodeNext',
                moduleResolution: 'NodeNext',
                strict: true,
                outDir: 'build',
              },
            },
            'pkg-dual/src/index.mts':
              'export function dualFn(x: string | number): void {}\n',
            'pkg-dual/src/index.cts':
              'export function dualFn(x: string | number): void {}\n',
          });
          const baseSha = commitAll('base');
          // Narrow PathConfig via `@/types`, repoint types/main to src/v2.ts + rename pkg, and delete pkg-dual/src/index.mts
          writeFiles({
            'pkg/package.json': {
              name: '@google-cloud/renamed-pkg',
              version: '1.0.0',
              exports: {
                '.': {
                  import: './build/src/v2.mjs',
                },
              },
            },
            'pkg/src/types.ts':
              'export interface PathConfig { port?: number; }',
            'pkg/src/v2.ts':
              'export {PathConfig} from "@/types";\nexport function oldApi(x: number): void {}',
            'pkg-dual/src/index.mts': null,
          });
          const headSha = commitAll('head');
          const errs = await checkBreakingChanges({
            diffRevArgs: [baseSha, headSha],
            baseRev: baseSha,
            headRev: headSha,
            repoRoot: tmpDir,
          });
          assert.ok(
            errs.some(e => e.includes('Published package was renamed')),
          );
          assert.ok(
            errs.some(e => e.includes("removed CommonJS ('require') support")),
          );
          assert.ok(errs.some(e => e.includes("Function 'oldApi'")));
          assert.ok(
            errs.some(e =>
              e.includes("Interface/Type 'PathConfig': property 'port'"),
            ),
          );
          assert.ok(
            errs.some(
              e =>
                e.includes('pkg-dual/src/index.mts') &&
                e.includes('Public entrypoint source file was deleted'),
            ),
          );
        });
      },
    );
  });

  describe('historical commits (PR #9539 and PR #9549)', () => {
    it(
      'detects the breaking change in PR #9539 (4443d6d6b1) and passes on its revert PR #9549 (d62a64f338)',
      {timeout: 60000},
      async () => {
        // Always verify the exact PR #9539 / PR #9549 Pub/Sub ClientConfig.port breaking change & revert
        // in a hermetic git repo so shallow CI clones (fetch-depth: 2) never skip this test!
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'handwritten/pubsub/package.json': {
              name: '@google-cloud/pubsub',
              version: '4.0.0',
              main: './build/src/index.js',
              types: './build/src/index.d.ts',
            },
            'handwritten/pubsub/tsconfig.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'CommonJS',
                strict: true,
                outDir: 'build',
              },
            },
            'handwritten/pubsub/src/pubsub.ts':
              'export interface ClientConfig {\n  projectId?: string;\n  port?: string | number;\n}\nexport class PubSub {\n  constructor(options?: ClientConfig) {}\n}\n',
            'handwritten/pubsub/src/index.ts':
              'export {ClientConfig, PubSub} from "./pubsub";\n',
          });
          const beforePr9539 = commitAll('before PR #9539');
          // PR #9539 commit: narrows ClientConfig.port from `string | number` to `number`
          writeFiles({
            'handwritten/pubsub/src/pubsub.ts':
              'export interface ClientConfig {\n  projectId?: string;\n  port?: number;\n}\nexport class PubSub {\n  constructor(options?: ClientConfig) {}\n}\n',
          });
          const pr9539Sha = commitAll('PR #9539');
          const pr9539Errors = await checkBreakingChanges({
            diffRevArgs: [beforePr9539, pr9539Sha],
            baseRev: beforePr9539,
            headRev: pr9539Sha,
            repoRoot: tmpDir,
          });
          assert.ok(
            pr9539Errors.some(
              e =>
                e.includes("Interface/Type 'ClientConfig': property 'port'") &&
                e.includes("was 'string | number | undefined'") &&
                e.includes("now 'number | undefined'"),
            ),
            `Expected PR #9539 ClientConfig.port breaking change, got: ${pr9539Errors.join('\n')}`,
          );

          // PR #9549 commit: reverts ClientConfig.port back to `string | number`
          writeFiles({
            'handwritten/pubsub/src/pubsub.ts':
              'export interface ClientConfig {\n  projectId?: string;\n  port?: string | number;\n}\nexport class PubSub {\n  constructor(options?: ClientConfig) {}\n}\n',
          });
          const pr9549Sha = commitAll('PR #9549');
          const pr9549Errors = await checkBreakingChanges({
            diffRevArgs: [pr9539Sha, pr9549Sha],
            baseRev: pr9539Sha,
            headRev: pr9549Sha,
            repoRoot: tmpDir,
          });
          assert.deepEqual(pr9549Errors, []);
        });

        const pubsubDeps = path.join(
          REPO_ROOT,
          'handwritten/pubsub/node_modules',
        );
        if (
          hasGitCommit('4443d6d6b1^') &&
          hasGitCommit('d62a64f338^') &&
          fs.existsSync(pubsubDeps)
        ) {
          const breakingErrors = await checkBreakingChanges({
            diffRevArgs: ['4443d6d6b1^', '4443d6d6b1'],
            baseRev: '4443d6d6b1^',
            headRev: '4443d6d6b1',
            repoRoot: REPO_ROOT,
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
            repoRoot: REPO_ROOT,
          });
          assert.deepEqual(revertErrors, []);
        }
      },
    );

    it(
      'avoids false positives on constructable union aliases, widened class/enum unions, distributed unions, overload splitting, subpath namespace exports, unresolved imports, and version-only package.json bumps',
      {timeout: 120000},
      async () => {
        // 1. Constructable union type alias (e.g. `AnyAuthClientConstructor`), widened class/enum unions,
        // distributed union properties, intersection type aliases with JSDoc/optional additions,
        // optional-parameter overload splitting, and unresolved external imports.
        const errs1 = compareSourceTexts(
          `
          import {MissingExternalType} from 'non-existent-external-pkg-xyz';
          export class AuthClient {
            private secret = 1;
            request(): void {}
          }
          export class JwtClient extends AuthClient {
            authorize(): void {}
          }
          export type ALL_EXPORTS = typeof AuthClient | typeof JwtClient | string;
          export type AnyAuthClientConstructor = Extract<ALL_EXPORTS, typeof AuthClient>;
          export enum Mode {
            FAST = 'FAST',
            SAFE = 'SAFE',
          }
          export type StageOptions = { rawOptions?: Record<string, unknown> };
          export type UpsertStageOptions = StageOptions & {
            transforms?: string[];
            client?: string | AuthClient;
          };
          export interface DistributedOpts {
            item?: { kind: 'a' | 'b'; value: number };
          }
          export class Pipeline {
            insert(options?: UpsertStageOptions): Pipeline { return this; }
          }
          export declare function runWithClient(
            client: AuthClient,
            mode: Mode,
            ext: MissingExternalType,
          ): void;
          `,
          `
          import {MissingExternalType} from 'non-existent-external-pkg-xyz';
          export class AuthClient {
            private secret = 1;
            request(): void {}
            newHelperMethod(): string { return 'ok'; }
          }
          export class JwtClient extends AuthClient {
            authorize(): void {}
          }
          export type ALL_EXPORTS = typeof AuthClient | typeof JwtClient | string;
          export type AnyAuthClientConstructor = Extract<ALL_EXPORTS, typeof AuthClient>;
          export enum Mode {
            FAST = 'FAST',
            SAFE = 'SAFE',
            TURBO = 'TURBO',
          }
          export type StageOptions = { rawOptions?: Record<string, unknown> };
          export type UpsertStageOptions = StageOptions & {
            /** Added JSDoc comment and optional property */
            additionalFields?: string[];
            transforms?: string[];
            client?: string | AuthClient;
          };
          export interface DistributedOpts {
            item?: { kind: 'a'; value: number } | { kind: 'b'; value: number };
          }
          export class Pipeline {
            insert(): Pipeline;
            insert(options: UpsertStageOptions): Pipeline;
            insert(options?: UpsertStageOptions): Pipeline { return this; }
          }
          export declare function runWithClient(
            client: AuthClient | string,
            mode: Mode | null,
            ext: MissingExternalType,
          ): void;
          `,
        );
        assert.deepEqual(errs1, []);

        // 2. Subpath ambient `.d.ts` (`export = Ns.Sub`) referencing parent namespace classes,
        // and version-only / devDependencies-only `package.json` edits skipped by `collectTouchedPackages`.
        await createTempGitRepo(async ({tmpDir, writeFiles, commitAll}) => {
          writeFiles({
            'handwritten/pkg/package.json': {
              name: '@google-cloud/pkg',
              version: '1.0.0',
              types: './types/main.d.ts',
              exports: {
                '.': {types: './types/main.d.ts', default: './build/index.js'},
                './sub': {types: './types/sub.d.ts', default: './build/sub.js'},
              },
            },
            'handwritten/pkg/tsconfig.json': {
              compilerOptions: {
                target: 'ES2022',
                module: 'CommonJS',
                strict: true,
              },
            },
            'handwritten/pkg/types/main.d.ts': `
              declare namespace MyCloud {
                export class DocRef {
                  private _id: string;
                  id: string;
                }
                export namespace Sub {
                  export type StageOpts = {
                    doc: string | DocRef;
                  };
                }
              }
              export = MyCloud;
            `,
            'handwritten/pkg/types/sub.d.ts': `
              import './main';
              import Sub = MyCloud.Sub;
              export = Sub;
            `,
          });
          const baseSha = commitAll('base');

          // Touch only `version` and `devDependencies` in `package.json` -> should skip package completely.
          writeFiles({
            'handwritten/pkg/package.json': {
              name: '@google-cloud/pkg',
              version: '1.0.1',
              types: './types/main.d.ts',
              exports: {
                '.': {types: './types/main.d.ts', default: './build/index.js'},
                './sub': {types: './types/sub.d.ts', default: './build/sub.js'},
              },
              devDependencies: {typescript: '^5.0.0'},
            },
          });
          const verBumpSha = commitAll('chore: release 1.0.1');
          const verBumpErrs = await checkBreakingChanges({
            diffRevArgs: [baseSha, verBumpSha],
            baseRev: baseSha,
            headRev: verBumpSha,
            repoRoot: tmpDir,
          });
          assert.deepEqual(verBumpErrs, []);

          // Now add a non-breaking method to `MyCloud.DocRef` in `main.d.ts` and check that `sub.d.ts` passes.
          writeFiles({
            'handwritten/pkg/types/main.d.ts': `
              declare namespace MyCloud {
                export class DocRef {
                  private _id: string;
                  id: string;
                  newMethod(): void;
                }
                export namespace Sub {
                  export type StageOpts = {
                    /** JSDoc comment update */
                    doc: string | DocRef;
                  };
                }
              }
              export = MyCloud;
            `,
          });
          const subUpdateSha = commitAll('feat: add DocRef.newMethod');
          const subUpdateErrs = await checkBreakingChanges({
            diffRevArgs: [verBumpSha, subUpdateSha],
            baseRev: verBumpSha,
            headRev: subUpdateSha,
            repoRoot: tmpDir,
          });
          assert.deepEqual(subUpdateErrs, []);
        });
      },
    );
  });
});

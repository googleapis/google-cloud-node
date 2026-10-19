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

'use strict';

const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const ts = require('typescript');
const {describe, it} = globalThis;

const {
  isIgnoredSourceFile,
  normalizeInternalComments,
  compareDeclarationPairs,
  checkPackageChanges,
} = require('../breaking-change-check.cjs');

function transpile(src, fileName = 'index.ts') {
  return ts.transpileDeclaration(normalizeInternalComments(src), {
    fileName,
    compilerOptions: {stripInternal: true},
  }).outputText;
}

function checkSnippet(baseSrc, headSrc) {
  return compareDeclarationPairs([
    {
      reportFile: 'src/index.ts',
      basePath: path.resolve('__test_base__/index.d.ts'),
      headPath: path.resolve('__test_head__/index.d.ts'),
      baseDts: transpile(baseSrc),
      headDts: transpile(headSrc),
      checkExports: true,
    },
  ]);
}

describe('breaking-change-check holistic TypeScript assignability engine', () => {
  it('filters non-public and generated paths in isIgnoredSourceFile', () => {
    assert.equal(isIgnoredSourceFile('packages/foo/src/index.ts'), true);
    assert.equal(isIgnoredSourceFile('handwritten/pubsub/test/index.ts'), true);
    assert.equal(
      isIgnoredSourceFile('handwritten/pubsub/system-test/test.ts'),
      true,
    );
    assert.equal(
      isIgnoredSourceFile('handwritten/pubsub/samples/ quickstart.ts'),
      true,
    );
    assert.equal(
      isIgnoredSourceFile('handwritten/pubsub/protos/protos.d.ts'),
      true,
    );
    assert.equal(isIgnoredSourceFile('core/packages/gax/src/grpc.ts'), false);
    assert.equal(isIgnoredSourceFile('handwritten/pubsub/src/pubsub.ts'), false);
  });

  it('detects all breaking change categories from the capability matrix', () => {
    const breakingScenarios = [
      [
        'Function parameter narrowed (port: string | number -> number)',
        'export function connect(port: string | number): void {}',
        'export function connect(port: number): void {}',
        /connect/,
      ],
      [
        'Class method parameter narrowed (port: string | number -> number)',
        'export class Client { connect(port: string | number): void {} }',
        'export class Client { connect(port: number): void {} }',
        /Client\.connect/,
      ],
      [
        'Class constructor parameter narrowed (port: string | number -> number)',
        'export class Client { constructor(port: string | number) {} }',
        'export class Client { constructor(port: number) {} }',
        /Constructor of class 'Client'/,
      ],
      [
        'Function required parameter added (connect(port) -> connect(port, host))',
        'export function connect(port: number): void {}',
        'export function connect(port: number, host: string): void {}',
        /connect/,
      ],
      [
        'Function optional parameter made required (port?: number -> port: number)',
        'export function connect(port?: number): void {}',
        'export function connect(port: number): void {}',
        /connect/,
      ],
      [
        'Input interface new required property added (host: string)',
        'export interface ClientConfig { port?: number; }',
        'export interface ClientConfig { port?: number; host: string; }',
        /Input type 'ClientConfig' added required property 'host'/,
      ],
      [
        'Input interface optional property made required (port?: number -> port: number)',
        'export interface ClientConfig { port?: number; }',
        'export interface ClientConfig { port: number; }',
        /Input type 'ClientConfig' optional property 'port' was made required/,
      ],
      [
        'Input interface 2-member union narrowed (string | number -> number)',
        'export interface ClientConfig { port?: string | number; }',
        'export interface ClientConfig { port?: number; }',
        /Input type 'ClientConfig' property 'port' was narrowed/,
      ],
      [
        'Input interface 3-member union narrowed (string | number | boolean -> string | number)',
        'export interface ClientConfig { port?: string | number | boolean; }',
        'export interface ClientConfig { port?: string | number; }',
        /Input type 'ClientConfig' property 'port' was narrowed/,
      ],
      [
        'Input interface property changed to disjoint type (port?: string -> port?: number)',
        'export interface ClientConfig { port?: string; }',
        'export interface ClientConfig { port?: number; }',
        /Input type 'ClientConfig' property 'port' was narrowed/,
      ],
      [
        'Function return type widened ((): string -> (): string | undefined)',
        'export function getHost(): string { return ""; }',
        'export function getHost(): string | undefined { return undefined; }',
        /getHost/,
      ],
      [
        'Class property type widened (endpoint: string -> string | undefined)',
        'export class Client { endpoint: string = ""; }',
        'export class Client { endpoint: string | undefined = undefined; }',
        /Property 'Client\.endpoint'/,
      ],
      [
        'Return interface required property made optional (data: string -> data?: string)',
        'export interface Response { data: string; }',
        'export interface Response { data?: string; }',
        /Return type 'Response' required property 'data' was made optional/,
      ],
      [
        'Return interface property type widened (data: string -> data: string | null)',
        'export interface Response { data: string; }',
        'export interface Response { data: string | null; }',
        /Return type 'Response' property 'data' was widened/,
      ],
      [
        'Removed top-level export',
        'export const A = 1; export const B = 2;',
        'export const A = 1;',
        /Export 'B' was removed/,
      ],
      [
        'Removed interface optional property',
        'export interface ClientConfig { servicePath?: string; port?: number; }',
        'export interface ClientConfig { servicePath?: string; }',
        /Property or method 'port' was removed from 'ClientConfig'/,
      ],
      [
        'Removed class method',
        'export class Client { connect(): void {} close(): void {} }',
        'export class Client { connect(): void {} }',
        /Member 'close' was removed from class 'Client'/,
      ],
      [
        'Class member visibility restricted from public to protected',
        'export class Client { public close(): void {} }',
        'export class Client { protected close(): void {} }',
        /Member 'Client\.close' visibility was restricted from 'public' to 'protected'/,
      ],
      [
        'Class member visibility restricted from public to private',
        'export class Client { public close(): void {} }',
        'export class Client { private close(): void {} }',
        /Member 'Client\.close' visibility was restricted from 'public' to 'private'/,
      ],
      [
        'Generic type parameter constraint narrowed',
        'export type Keys<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>;',
        'export type Keys<T, K extends keyof T> = Pick<T, K>;',
        /Type parameter constraint on 'Keys' became more restrictive/,
      ],
      [
        'Function overload removed',
        'export function parse(x: string): object;\nexport function parse(x: Uint8Array): object;\nexport function parse(x: string | Uint8Array): object { return {}; }',
        'export function parse(x: string): object;\nexport function parse(x: string): object { return {}; }',
        /Export 'parse' signature or type changed incompatibly/,
      ],
      [
        'Enum member removed',
        'export enum State { OPEN = 0, CLOSED = 1 }',
        'export enum State { OPEN = 0 }',
        /Member 'CLOSED' was removed from enum 'State'/,
      ],
    ];

    for (const [label, baseSrc, headSrc, expectedPattern] of breakingScenarios) {
      const res = checkSnippet(baseSrc, headSrc);
      assert.ok(
        res.some(item => expectedPattern.test(item.explanation)),
        `Expected breaking change matching ${expectedPattern} for "${label}", got: ${JSON.stringify(res)}`,
      );
    }
  });

  it('produces zero false positives on non-breaking evolutions and @internal declarations', () => {
    const nonBreakingScenarios = [
      [
        'Single-line @internal property removed or modified (gax GrpcClient.baseDirectory pattern)',
        'export class GrpcClient { /** @internal */ baseDirectory?: string; connect(): void {} }',
        'export class GrpcClient { connect(): void {} }',
      ],
      [
        'Input interface property widened (port?: number -> string | number)',
        'export interface ClientConfig { port?: number; }',
        'export interface ClientConfig { port?: string | number; }',
      ],
      [
        'Input interface widened when echoed on class property and getter (PubSub ClientConfig pattern)',
        'export interface ClientConfig { port?: number; }\nexport class PubSub {\n  options: ClientConfig;\n  constructor(options?: ClientConfig) { this.options = options || {}; }\n  getClientConfig(): Promise<ClientConfig> { return Promise.resolve(this.options); }\n}',
        'export interface ClientConfig { port?: string | number; }\nexport class PubSub {\n  options: ClientConfig;\n  constructor(options?: ClientConfig) { this.options = options || {}; }\n  getClientConfig(): Promise<ClientConfig> { return Promise.resolve(this.options); }\n}',
      ],
      [
        'Input interface required property made optional',
        'export interface Options { timeout: number; }',
        'export interface Options { timeout?: number; }',
      ],
      [
        'Input interface new optional property added',
        'export interface Options { timeout?: number; }',
        'export interface Options { timeout?: number; endpoint?: string; }',
      ],
      [
        'Function parameter widened and optional parameter added',
        'export function connect(port: number): void {}',
        'export function connect(port: string | number, host?: string): void {}',
      ],
      [
        'Private class members added, modified, or removed and protected members preserved',
        'export class Client { private secret = "a"; protected helper(): number { return 1; } public run(port?: number): void {} }',
        'export class Client { private secret = 42; private extra(): void {} protected helper(): number { return 1; } public run(port?: string | number): void {} }',
      ],
      [
        'New public method added to class',
        'export class Client { connect(): void {} }',
        'export class Client { connect(): void {} disconnect(): void {} }',
      ],
      [
        'Return interface adds new field or makes optional field required',
        'export interface Response { data?: string; }',
        'export interface Response { data: string; requestId: string; }',
      ],
      [
        'Function overload added',
        'export function parse(x: string): object;\nexport function parse(x: string): object { return {}; }',
        'export function parse(x: string): object;\nexport function parse(x: Uint8Array): object;\nexport function parse(x: string | Uint8Array): object { return {}; }',
      ],
      [
        'Generic type parameter constraint widened',
        'export type Keys<T, K extends keyof T> = Pick<T, K>;',
        'export type Keys<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>;',
      ],
    ];

    for (const [label, baseSrc, headSrc] of nonBreakingScenarios) {
      const res = checkSnippet(baseSrc, headSrc);
      assert.deepEqual(
        res,
        [],
        `Expected zero false positives for "${label}", got: ${JSON.stringify(res)}`,
      );
    }
  });

  it('tracks cross-file re-exports and inferred return types across package compilations', () => {
    const tmpPkg = fs.mkdtempSync(path.join(os.tmpdir(), 'holistic-bcc-pkg-'));
    try {
      fs.mkdirSync(path.join(tmpPkg, 'src'), {recursive: true});
      fs.writeFileSync(
        path.join(tmpPkg, 'package.json'),
        JSON.stringify({name: 'tmp-pkg', version: '1.0.0'}),
      );
      fs.writeFileSync(
        path.join(tmpPkg, 'tsconfig.json'),
        JSON.stringify({
          compilerOptions: {
            target: 'ES2022',
            module: 'commonjs',
            strict: true,
            declaration: true,
            rootDir: '.',
            outDir: 'build',
          },
          include: ['src/**/*.ts'],
        }),
      );
      fs.writeFileSync(
        path.join(tmpPkg, 'src/helper.ts'),
        'export function resolveHost() { return "localhost"; }\n',
      );
      fs.writeFileSync(
        path.join(tmpPkg, 'src/client.ts'),
        'import {resolveHost} from "./helper";\nexport class ServiceClient { /** @internal */ baseDirectory?: string;\n  getEndpoint() { return resolveHost(); }\n}\n',
      );
      fs.writeFileSync(
        path.join(tmpPkg, 'src/index.ts'),
        'export {ServiceClient} from "./client";\nexport {resolveHost} from "./helper";\n',
      );

      // 1. Widening an inferred return type in a dependency (src/helper.ts) is caught on ServiceClient.getEndpoint
      const crossFileBreaking = checkPackageChanges({
        pkgDir: tmpPkg,
        modifiedEntries: [
          {
            status: 'M',
            oldRel: 'src/helper.ts',
            newRel: 'src/helper.ts',
            oldAbs: path.join(tmpPkg, 'src/helper.ts'),
            newAbs: path.join(tmpPkg, 'src/helper.ts'),
          },
        ],
        baseFileReader: () =>
          'export function resolveHost(): string { return "localhost"; }\n',
        headFileReader: () =>
          'export function resolveHost(): string | undefined { return undefined; }\n',
      });
      assert.ok(
        crossFileBreaking.some(e =>
          e.explanation.includes('ServiceClient.getEndpoint'),
        ),
        `Expected ServiceClient.getEndpoint inferred return type breakage, got: ${JSON.stringify(crossFileBreaking)}`,
      );

      // 2. Removing a re-export from src/index.ts is caught
      const removedReexport = checkPackageChanges({
        pkgDir: tmpPkg,
        modifiedEntries: [
          {
            status: 'M',
            oldRel: 'src/index.ts',
            newRel: 'src/index.ts',
            oldAbs: path.join(tmpPkg, 'src/index.ts'),
            newAbs: path.join(tmpPkg, 'src/index.ts'),
          },
        ],
        baseFileReader: () =>
          'export {ServiceClient} from "./client";\nexport {resolveHost} from "./helper";\n',
        headFileReader: () => 'export {ServiceClient} from "./client";\n',
      });
      assert.ok(
        removedReexport.some(e =>
          e.explanation.includes("Export 'resolveHost' was removed"),
        ),
        `Expected removed re-export to be caught, got: ${JSON.stringify(removedReexport)}`,
      );

      // 3. Modifying src/client.ts with @internal baseDirectory and inferred return type produces 0 false positives
      const nonBreakingInferred = checkPackageChanges({
        pkgDir: tmpPkg,
        modifiedEntries: [
          {
            status: 'M',
            oldRel: 'src/client.ts',
            newRel: 'src/client.ts',
            oldAbs: path.join(tmpPkg, 'src/client.ts'),
            newAbs: path.join(tmpPkg, 'src/client.ts'),
          },
        ],
        baseFileReader: () =>
          fs.readFileSync(path.join(tmpPkg, 'src/client.ts'), 'utf8'),
        headFileReader: () =>
          fs.readFileSync(path.join(tmpPkg, 'src/client.ts'), 'utf8') +
          '\n// non-breaking comment\n',
      });
      assert.deepEqual(nonBreakingInferred, []);
    } finally {
      fs.rmSync(tmpPkg, {recursive: true, force: true});
    }
  });

  it('catches PR #9539 (4443d6d6b1) breaking change and passes PR #9549 (d62a64f338) revert with 0 false positives', function () {
    this.timeout(60000);
    const repoRoot = path.resolve(__dirname, '../../..');
    const pubsubPkg = path.join(repoRoot, 'handwritten/pubsub');
    const pubsubFileAbs = path.join(pubsubPkg, 'src/pubsub.ts');
    if (!fs.existsSync(pubsubFileAbs)) {
      this.skip();
      return;
    }

    try {
      execFileSync('git', ['cat-file', '-e', '4443d6d6b1'], {
        cwd: repoRoot,
        stdio: 'ignore',
      });
      execFileSync('git', ['cat-file', '-e', 'd62a64f338'], {
        cwd: repoRoot,
        stdio: 'ignore',
      });
    } catch {
      this.skip();
      return;
    }

    const pr9539Res = checkPackageChanges({
      pkgDir: pubsubPkg,
      modifiedEntries: [
        {
          status: 'M',
          oldRel: 'handwritten/pubsub/src/pubsub.ts',
          newRel: 'handwritten/pubsub/src/pubsub.ts',
          oldAbs: pubsubFileAbs,
          newAbs: pubsubFileAbs,
        },
      ],
      baseFileReader: rel =>
        execFileSync('git', ['show', `4443d6d6b1^:${rel}`], {
          cwd: repoRoot,
          encoding: 'utf8',
        }),
      headFileReader: rel =>
        execFileSync('git', ['show', `4443d6d6b1:${rel}`], {
          cwd: repoRoot,
          encoding: 'utf8',
        }),
    });
    assert.equal(pr9539Res.length, 1);
    assert.match(
      pr9539Res[0].explanation,
      /Input type 'ClientConfig' property 'port' was narrowed/,
    );

    const pr9549Res = checkPackageChanges({
      pkgDir: pubsubPkg,
      modifiedEntries: [
        {
          status: 'M',
          oldRel: 'handwritten/pubsub/src/pubsub.ts',
          newRel: 'handwritten/pubsub/src/pubsub.ts',
          oldAbs: pubsubFileAbs,
          newAbs: pubsubFileAbs,
        },
      ],
      baseFileReader: rel =>
        execFileSync('git', ['show', `d62a64f338^:${rel}`], {
          cwd: repoRoot,
          encoding: 'utf8',
        }),
      headFileReader: rel =>
        execFileSync('git', ['show', `d62a64f338:${rel}`], {
          cwd: repoRoot,
          encoding: 'utf8',
        }),
    });
    assert.deepEqual(pr9549Res, []);
  });
});

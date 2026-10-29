// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs';
import * as Module from 'module';
import * as os from 'os';
import * as path from 'path';
import {pathToFileURL} from 'url';
import {createProxyquire, proxyquire} from '../src';

describe('proxyquire utilities (unit)', () => {
  let tmpDir: string;
  let depFile: string;
  let sutFile: string;
  let transitiveFile: string;

  beforeAll(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'proxyquire-test-'));
    depFile = path.join(tmpDir, 'dep.js');
    transitiveFile = path.join(tmpDir, 'transitive.js');
    sutFile = path.join(tmpDir, 'sut.js');

    fs.writeFileSync(
      depFile,
      [
        'module.exports = {',
        '  greet: () => "real-greet",',
        '  extra: () => "real-extra",',
        '  constant: 42,',
        '};',
      ].join('\n'),
    );
    fs.writeFileSync(
      transitiveFile,
      [
        'const dep = require("./dep");',
        'module.exports = { run: () => dep.greet() };',
      ].join('\n'),
    );
    fs.writeFileSync(
      sutFile,
      [
        'const dep = require("./dep");',
        'const trans = require("./transitive");',
        'const pathMod = require("path");',
        'module.exports = {',
        '  greet: () => dep.greet(),',
        '  extra: () => dep.extra && dep.extra(),',
        '  constant: dep.constant,',
        '  hasExtra: "extra" in dep,',
        '  keys: Object.keys(dep),',
        '  transGreet: () => trans.run(),',
        '  sep: pathMod.sep,',
        '};',
      ].join('\n'),
    );
  });

  afterAll(() => {
    fs.rmSync(tmpDir, {recursive: true, force: true});
  });

  it('stubs direct dependencies and falls through to real module via Proxy without mutating stub', () => {
    const stub = {greet: () => 'stubbed-greet'};
    const loaded = proxyquire(sutFile, {'./dep': stub});
    expect(loaded.greet()).toBe('stubbed-greet');
    expect(loaded.extra()).toBe('real-extra');
    expect(loaded.constant).toBe(42);
    expect(loaded.hasExtra).toBe(true);
    expect(loaded.keys).toEqual(
      expect.arrayContaining(['greet', 'extra', 'constant']),
    );
    // Stub object itself was not mutated in place
    expect('extra' in stub).toBe(false);
    expect(Object.keys(stub)).toEqual(['greet']);
  });

  it('supports @noCallThru on individual stubs and noCallThru() / callThru() on instance', () => {
    const pq = createProxyquire(__filename);
    const stubWithNoCallThru = {
      greet: () => 'isolated',
      '@noCallThru': true,
    };
    const loaded1 = pq.load(sutFile, {'./dep': stubWithNoCallThru});
    expect(loaded1.greet()).toBe('isolated');
    expect(loaded1.extra()).toBeUndefined();
    expect(loaded1.constant).toBeUndefined();

    pq.noCallThru();
    const loaded2 = pq(sutFile, {'./dep': {greet: () => 'instance-no-call'}});
    expect(loaded2.greet()).toBe('instance-no-call');
    expect(loaded2.extra()).toBeUndefined();

    pq.callThru();
    const loaded3 = pq(sutFile, {'./dep': {greet: () => 'instance-call-thru'}});
    expect(loaded3.greet()).toBe('instance-call-thru');
    expect(loaded3.extra()).toBe('real-extra');
  });

  it('supports @global stubs across transitive dependencies', () => {
    const loadedNonGlobal = proxyquire(sutFile, {
      './dep': {greet: () => 'direct-only'},
    });
    expect(loadedNonGlobal.greet()).toBe('direct-only');

    const loadedGlobal = proxyquire(sutFile, {
      './dep': {greet: () => 'global-stub', '@global': true},
    });
    expect(loadedGlobal.greet()).toBe('global-stub');
    expect(loadedGlobal.transGreet()).toBe('global-stub');
  });

  it('throws MODULE_NOT_FOUND when stub is null', () => {
    expect(() => proxyquire(sutFile, {'./dep': null})).toThrow(
      /Cannot find module '\.\/dep'/,
    );
  });

  it('supports noPreserveCache() and preserveCache()', () => {
    const rawMod = ((
      Module as unknown as {Module?: {_cache?: NodeJS.Dict<NodeModule>}}
    ).Module ?? Module) as {_cache?: NodeJS.Dict<NodeModule>};
    const modCache =
      rawMod._cache ??
      (Object.getPrototypeOf(rawMod) as {_cache?: NodeJS.Dict<NodeModule>})
        ?._cache ??
      require.cache;
    const pq = createProxyquire(module);
    pq.noPreserveCache();
    const loaded1 = pq(sutFile, {'./dep': {greet: () => 'a'}});
    expect(loaded1.greet()).toBe('a');
    expect(modCache[sutFile]).toBeUndefined();

    pq.preserveCache();
    const loaded2 = pq(sutFile, {'./dep': {greet: () => 'b'}});
    expect(loaded2.greet()).toBe('b');
    expect(modCache[sutFile]).toBeDefined();
  });

  it('respects Proxy getOwnPropertyDescriptor invariants for non-configurable stub properties', () => {
    const fnStub = Object.assign(function customFn() {}, {
      greet: () => 'fn-greet',
    });
    Object.defineProperty(fnStub, 'locked', {
      value: 123,
      configurable: false,
      enumerable: true,
    });
    const depCheckFile = path.join(tmpDir, 'dep-check.js');
    fs.writeFileSync(
      depCheckFile,
      [
        'const dep = require("./dep");',
        'module.exports = {',
        '  protoDesc: Object.getOwnPropertyDescriptor(dep, "prototype"),',
        '  lockedDesc: Object.getOwnPropertyDescriptor(dep, "locked"),',
        '  extraDesc: Object.getOwnPropertyDescriptor(dep, "extra"),',
        '  missingDesc: Object.getOwnPropertyDescriptor(dep, "nonExistent"),',
        '  keys: Object.keys(dep),',
        '};',
      ].join('\n'),
    );
    const loaded = proxyquire(depCheckFile, {'./dep': fnStub});
    expect(loaded.protoDesc?.configurable).toBe(false);
    expect(loaded.lockedDesc?.configurable).toBe(false);
    expect(loaded.lockedDesc?.value).toBe(123);
    expect(loaded.extraDesc?.configurable).toBe(true);
    expect(loaded.missingDesc).toBeUndefined();
    expect(loaded.keys).toEqual(
      expect.arrayContaining(['greet', 'locked', 'extra', 'constant']),
    );
  });

  it('supports bare module stubs and unresolvable relative paths', () => {
    const loaded = proxyquire(sutFile, {
      path: {sep: '/custom-sep'},
      './non-existent-relative': {foo: 'bar'},
    });
    expect(loaded.sep).toBe('/custom-sep');
  });

  it('normalizes file:// URLs passed to createProxyquire or returned by stack frames', () => {
    const pqFromUrl = createProxyquire(pathToFileURL(sutFile).href);
    const loaded = pqFromUrl('./sut', {'./dep': {greet: () => 'url-caller'}});
    expect(loaded.greet()).toBe('url-caller');
  });
});

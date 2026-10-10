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

'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {spawnSync} = require('child_process');
const {describe, it, beforeEach, afterEach} = globalThis;

const repoRoot = path.resolve(__dirname, '../../..');
const runTestPath = path.join(repoRoot, 'bin/run-test.cjs');
const rootMocharc = path.join(repoRoot, '.mocharc.cjs');
const {
  stripCommentsAndStrings,
  fileHasOnly,
  findOnlyFiles,
  expandTargetFiles,
  resolveTestArgs,
} = require(runTestPath);

describe('bin/run-test.cjs .only support', () => {
  let tmpDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'run-test-only-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, {recursive: true, force: true});
  });

  it('ignores .only inside comments and string literals', () => {
    const file = path.join(tmpDir, 'commented.js');
    fs.writeFileSync(
      file,
      [
        '// it.only("commented out", () => {});',
        '/* describe.only("block comment", () => {}); */',
        'const str = "it.only(\'in string\')";',
        'const tpl = `describe.only("in template")`;',
        'it("normal test with https://example.com//not-a-comment", () => {});',
      ].join('\n'),
    );
    assert.strictEqual(fileHasOnly(file), false);
    assert.ok(
      !stripCommentsAndStrings('const s = "it.only()";').includes('it.only'),
    );
  });

  it('detects it.only, describe.only, specify.only, and regex-preceded calls', () => {
    const file1 = path.join(tmpDir, 'it-only.js');
    fs.writeFileSync(file1, 'it.only("exclusive", () => {});');
    assert.strictEqual(fileHasOnly(file1), true);

    const file2 = path.join(tmpDir, 'describe-only.js');
    fs.writeFileSync(
      file2,
      'mocha_1.describe.only("exclusive suite", () => {});',
    );
    assert.strictEqual(fileHasOnly(file2), true);

    const file3 = path.join(tmpDir, 'regex-quote-before-only.js');
    fs.writeFileSync(
      file3,
      [
        "const rx = /can't match/;",
        '/* inline comment */specify.only("still detected after single quote in regex", () => {});',
      ].join('\n'),
    );
    assert.strictEqual(fileHasOnly(file3), true);
  });

  it('narrows target files, preserves Mocha flags (--retries, -c), and adds --no-parallel', () => {
    const testDir = path.join(tmpDir, 'build/test');
    fs.mkdirSync(testDir, {recursive: true});
    fs.writeFileSync(
      path.join(testDir, 'a.js'),
      'describe("a", () => { it("t1", () => {}); });',
    );
    fs.writeFileSync(
      path.join(testDir, 'b.js'),
      'describe("b", () => { it.only("t2", () => {}); });',
    );

    const resolved = resolveTestArgs(
      [
        '--config',
        '../../.mocharc.cjs',
        '--retries',
        '3',
        '-c',
        '--timeouts',
        '--parallel',
        'build/test',
      ],
      tmpDir,
    );
    assert.strictEqual(resolved.hasOnly, true);
    assert.deepStrictEqual(resolved.onlyFiles, [
      path.join('build', 'test', 'b.js'),
    ]);
    assert.deepStrictEqual(resolved.args, [
      '--config',
      '../../.mocharc.cjs',
      '--retries',
      '3',
      '-c',
      '--timeouts',
      '--no-parallel',
      path.join('build', 'test', 'b.js'),
    ]);
  });

  it('expands recursive globs and selects only build/test by default when both build/test and test exist', () => {
    const nestedBuildDir = path.join(tmpDir, 'build/test/unit');
    const srcTestDir = path.join(tmpDir, 'test/unit');
    fs.mkdirSync(nestedBuildDir, {recursive: true});
    fs.mkdirSync(srcTestDir, {recursive: true});

    const compiledFile = path.join(nestedBuildDir, 'nested.js');
    const sourceFile = path.join(srcTestDir, 'nested.ts');
    fs.writeFileSync(sourceFile, 'it.only("ts source", () => {});');
    fs.writeFileSync(compiledFile, 'it.only("js build", () => {});');

    const expanded = expandTargetFiles('build/test/**/*.js', tmpDir);
    assert.deepStrictEqual(expanded, [compiledFile]);

    const defaultOnly = findOnlyFiles([], tmpDir);
    assert.deepStrictEqual(defaultOnly, [compiledFile]);
  });

  it('auto-compiles when .only is added to or removed from a .ts source file', () => {
    const buildTestDir = path.join(tmpDir, 'build/test');
    const srcTestDir = path.join(tmpDir, 'test');
    fs.mkdirSync(buildTestDir, {recursive: true});
    fs.mkdirSync(srcTestDir, {recursive: true});

    const srcFile = path.join(srcTestDir, 'sample.ts');
    const outFile = path.join(buildTestDir, 'sample.js');
    const compileMarker = path.join(tmpDir, 'compile-count.txt');

    // Simple compile script that copies test/sample.ts -> build/test/sample.js
    fs.writeFileSync(
      path.join(tmpDir, 'compile.cjs'),
      [
        "const fs = require('fs');",
        "const path = require('path');",
        "fs.copyFileSync(path.join(__dirname, 'test/sample.ts'), path.join(__dirname, 'build/test/sample.js'));",
        "const countFile = path.join(__dirname, 'compile-count.txt');",
        "const prev = fs.existsSync(countFile) ? Number(fs.readFileSync(countFile, 'utf8')) : 0;",
        'fs.writeFileSync(countFile, String(prev + 1));',
      ].join('\n'),
    );
    fs.writeFileSync(
      path.join(tmpDir, 'package.json'),
      JSON.stringify({
        name: 'temp-pkg',
        scripts: {compile: 'node compile.cjs'},
      }),
    );

    // 1. Initial state: build/test/sample.js has no .only, test/sample.ts adds .only
    fs.writeFileSync(outFile, 'it("normal", () => {});');
    fs.writeFileSync(srcFile, 'it.only("exclusive", () => {});');

    const addedResolved = resolveTestArgs(['build/test'], tmpDir);
    assert.strictEqual(addedResolved.hasOnly, true);
    assert.deepStrictEqual(addedResolved.onlyFiles, [
      path.join('build', 'test', 'sample.js'),
    ]);
    assert.strictEqual(fs.readFileSync(compileMarker, 'utf8'), '1');

    // 2. Removing .only from test/sample.ts triggers recompile so stale .only in build/ is cleared
    fs.writeFileSync(srcFile, 'it("normal again", () => {});');
    const removedResolved = resolveTestArgs(['build/test'], tmpDir);
    assert.strictEqual(removedResolved.hasOnly, false);
    assert.deepStrictEqual(removedResolved.onlyFiles, []);
    assert.strictEqual(fs.readFileSync(compileMarker, 'utf8'), '2');
  });

  it('preserves original arguments when no test file contains .only', () => {
    const testDir = path.join(tmpDir, 'build/test');
    fs.mkdirSync(testDir, {recursive: true});
    fs.writeFileSync(
      path.join(testDir, 'a.js'),
      'describe("a", () => { it("t1", () => {}); });',
    );

    const inputArgs = ['--config', '../../.mocharc.cjs', 'build/test'];
    const resolved = resolveTestArgs(inputArgs, tmpDir);
    assert.strictEqual(resolved.hasOnly, false);
    assert.deepStrictEqual(resolved.onlyFiles, []);
    assert.deepStrictEqual(resolved.args, inputArgs);
  });

  it('executes only the .only test under Node.js even with parallel .mocharc.cjs', () => {
    const testDir = path.join(tmpDir, 'build/test');
    fs.mkdirSync(testDir, {recursive: true});
    fs.writeFileSync(
      path.join(testDir, 'other.js'),
      `
      describe('other file', () => {
        it('should not run', () => {
          throw new Error('other file should not run');
        });
      });
      `,
    );
    fs.writeFileSync(
      path.join(testDir, 'exclusive.js'),
      `
      describe('exclusive file', () => {
        it.only('runs exclusively', () => {});
        it('sibling test should not run', () => {
          throw new Error('sibling test should not run');
        });
      });
      `,
    );

    const res = spawnSync(
      process.execPath,
      [runTestPath, '--no-c8', '--config', rootMocharc, testDir],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node'},
      },
    );
    assert.strictEqual(
      res.status,
      0,
      `stderr: ${res.stderr}\nstdout: ${res.stdout}`,
    );
    assert.match(res.stdout, /1 passing/);
  });

  it('executes only the .only test under Bun (including via npm_config_user_agent=bun/*)', function () {
    const bunCheck = spawnSync('bun', ['--version'], {encoding: 'utf8'});
    if (bunCheck.status !== 0) {
      this.skip();
      return;
    }

    const testDir = path.join(tmpDir, 'build/test');
    fs.mkdirSync(testDir, {recursive: true});
    fs.writeFileSync(
      path.join(testDir, 'other.js'),
      `
      throw new Error('other.js should not even be loaded when exclusive.js has .only');
      `,
    );
    fs.writeFileSync(
      path.join(testDir, 'exclusive.js'),
      `
      describe('exclusive bun suite', () => {
        it.only('runs exclusively in bun under ' + (typeof Bun !== 'undefined' ? 'bun' : 'node'), () => {});
        it('sibling test should not run', () => {
          throw new Error('sibling test should not run');
        });
      });
      `,
    );

    const res = spawnSync(
      process.execPath,
      [runTestPath, '--config', rootMocharc, testDir],
      {
        cwd: repoRoot,
        encoding: 'utf8',
        env: {
          ...process.env,
          JS_RUNTIME: '',
          npm_config_user_agent: 'bun/1.2.0 npm/? node/v22.0.0',
        },
      },
    );
    assert.strictEqual(
      res.status,
      0,
      `stderr: ${res.stderr}\nstdout: ${res.stdout}`,
    );
    assert.match(res.stdout, /runs exclusively in bun under bun/);
    assert.match(res.stdout, /1 passing/);
  });

  it('exits 0 when invoked with build/test in a package without test directories', () => {
    const res = spawnSync(
      process.execPath,
      [runTestPath, '--no-c8', 'build/test'],
      {
        cwd: tmpDir,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node'},
      },
    );
    assert.strictEqual(res.status, 0);
  });
});

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
  resolveBin,
  ensureWorkspacePackagesLinked,
} = require(runTestPath);

describe('bin/run-test.cjs .only support', () => {
  let tmpDir;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'run-test-only-'));
  });

  afterEach(() => {
    fs.rmSync(tmpDir, {recursive: true, force: true});
  });

  it('ignores .only inside comments, string literals, and regex literals', () => {
    const file = path.join(tmpDir, 'commented.js');
    fs.writeFileSync(
      file,
      [
        '// it.only("commented out", () => {});',
        '/* describe.only("block comment", () => {}); */',
        'const str = "it.only(\'in string\')";',
        'const tpl = `describe.only("in template")`;',
        'const rx = /it\\.only\\(/;',
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
        'const rxUrl = /https?:\\/\\/foo\\/*bar/;',
        'const rxTick = /`/;',
        "const rxSameLine = /can't/; specify.only('still detected after regex literals', () => {});",
        '/* trailing comment */',
      ].join('\n'),
    );
    assert.strictEqual(fileHasOnly(file3), true);

    const file4 = path.join(tmpDir, 'division-and-templates-before-only.js');
    fs.writeFileSync(
      file4,
      [
        'const secs = ms / 1000; const url = `https://example.com`;',
        'const ratio = (a + b) / items[0]; const label = `status`;',
        'it.only("detected after division and template literal", () => {});',
        'const msg = `done`;',
      ].join('\n'),
    );
    assert.strictEqual(fileHasOnly(file4), true);

    const file5 = path.join(tmpDir, 'only-each-and-bracket.js');
    fs.writeFileSync(
      file5,
      'it.only.each([1, 2])("case %d", () => {});',
    );
    assert.strictEqual(fileHasOnly(file5), true);

    const file6 = path.join(tmpDir, 'bracket-only.js');
    fs.writeFileSync(
      file6,
      'describe[\'only\']("bracket exclusive", () => {});',
    );
    assert.strictEqual(fileHasOnly(file6), true);
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
        '--parallel=true',
        '-p=true',
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

  it('auto-compiles when .only is added to or removed from a .ts source file and skips compile when dual CJS/ESM builds are in sync', () => {
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

    // 3. Dual CJS + ESM build targets do not trigger redundant compile when stems are in sync
    const cjsDir = path.join(tmpDir, 'build/cjs/test');
    const esmDir = path.join(tmpDir, 'build/esm/test');
    fs.mkdirSync(cjsDir, {recursive: true});
    fs.mkdirSync(esmDir, {recursive: true});
    const cjsFile = path.join(cjsDir, 'sample.js');
    const esmFile = path.join(esmDir, 'sample.js');
    fs.writeFileSync(srcFile, 'it.only("dual", () => {});');
    fs.writeFileSync(cjsFile, 'it.only("dual", () => {});');
    fs.writeFileSync(esmFile, 'it.only("dual", () => {});');
    const now = Date.now() / 1000;
    fs.utimesSync(srcFile, now - 60, now - 60);
    fs.utimesSync(cjsFile, now, now);
    fs.utimesSync(esmFile, now, now);

    const dualResolved = resolveTestArgs(
      ['build/cjs/test', 'build/esm/test'],
      tmpDir,
    );
    assert.strictEqual(dualResolved.hasOnly, true);
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
    assert.strictEqual(resolved.skip, false);
    assert.deepStrictEqual(resolved.onlyFiles, []);
    assert.deepStrictEqual(resolved.args, inputArgs);
  });

  it('isolates .only across multi-step glob targets and sibling suites without redundant compiles', () => {
    const buildTestDir = path.join(tmpDir, 'build/test');
    const srcTestDir = path.join(tmpDir, 'test');
    const buildConformanceDir = path.join(tmpDir, 'build/conformance');
    const srcConformanceDir = path.join(tmpDir, 'dev/conformance');
    fs.mkdirSync(buildTestDir, {recursive: true});
    fs.mkdirSync(srcTestDir, {recursive: true});
    fs.mkdirSync(buildConformanceDir, {recursive: true});
    fs.mkdirSync(srcConformanceDir, {recursive: true});

    const compileMarker = path.join(tmpDir, 'compile-count.txt');
    fs.writeFileSync(
      path.join(tmpDir, 'compile.cjs'),
      [
        "const fs = require('fs');",
        "const path = require('path');",
        "for (const name of fs.readdirSync(path.join(__dirname, 'test'))) {",
        "  if (name.endsWith('.ts')) {",
        "    fs.copyFileSync(path.join(__dirname, 'test', name), path.join(__dirname, 'build/test', name.replace(/\\.ts$/, '.js')));",
        '  }',
        '}',
        "const countFile = path.join(__dirname, 'compile-count.txt');",
        "const prev = fs.existsSync(countFile) ? Number(fs.readFileSync(countFile, 'utf8')) : 0;",
        'fs.writeFileSync(countFile, String(prev + 1));',
      ].join('\n'),
    );
    fs.writeFileSync(
      path.join(tmpDir, 'package.json'),
      JSON.stringify({
        name: 'multi-step-pkg',
        scripts: {compile: 'node compile.cjs'},
      }),
    );

    const v2Src = path.join(srcTestDir, 'agents_v2.ts');
    const v2Out = path.join(buildTestDir, 'agents_v2.js');
    const v2BetaSrc = path.join(srcTestDir, 'agents_v2beta1.ts');
    const v2BetaOut = path.join(buildTestDir, 'agents_v2beta1.js');
    const confSrc = path.join(srcConformanceDir, 'conformance.ts');
    const confOut = path.join(buildConformanceDir, 'conformance.js');

    fs.writeFileSync(v2Src, 'it.only("v2 exclusive", () => {});');
    fs.writeFileSync(v2Out, 'it("stale v2", () => {});');
    fs.writeFileSync(
      v2BetaSrc,
      'it("v2beta1 should not run", () => { throw new Error("v2beta1 ran"); });',
    );
    fs.writeFileSync(
      v2BetaOut,
      'it("v2beta1 should not run", () => { throw new Error("v2beta1 ran"); });',
    );
    fs.writeFileSync(
      confSrc,
      'it("conformance should not run", () => { throw new Error("conformance ran"); });',
    );
    fs.writeFileSync(
      confOut,
      'it("conformance should not run", () => { throw new Error("conformance ran"); });',
    );

    // Step 1 (build/test/*_v2.js): compiles once and selects agents_v2.js
    const step1 = resolveTestArgs(['build/test/*_v2.js'], tmpDir);
    assert.strictEqual(step1.hasOnly, true);
    assert.strictEqual(step1.skip, false);
    assert.deepStrictEqual(step1.onlyFiles, [
      path.join('build', 'test', 'agents_v2.js'),
    ]);
    assert.strictEqual(fs.readFileSync(compileMarker, 'utf8'), '1');

    // Step 2 (build/test/*_v2beta1.js): sees build/test is already in sync (no recompile) and skips
    const step2 = resolveTestArgs(['build/test/*_v2beta1.js'], tmpDir);
    assert.strictEqual(step2.hasOnly, false);
    assert.strictEqual(step2.skip, true);
    assert.strictEqual(fs.readFileSync(compileMarker, 'utf8'), '1');

    // Step 3 (build/conformance): detects sibling suite .only and skips
    const step3 = resolveTestArgs(['build/conformance'], tmpDir);
    assert.strictEqual(step3.hasOnly, false);
    assert.strictEqual(step3.skip, true);

    // Running run-test.cjs on the skipped sibling target exits 0 without executing its throwing test
    const skipRes = spawnSync(
      process.execPath,
      [runTestPath, '--no-c8', '--config', rootMocharc, 'build/conformance'],
      {
        cwd: tmpDir,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node'},
      },
    );
    assert.strictEqual(
      skipRes.status,
      0,
      `stderr: ${skipRes.stderr}\nstdout: ${skipRes.stdout}`,
    );
  });

  it('resolves package root and cjs/test sources when invoked from a parent directory', () => {
    const pkgDir = path.join(tmpDir, 'packages/sub-pkg');
    const srcCjsDir = path.join(pkgDir, 'cjs/test');
    const buildCjsDir = path.join(pkgDir, 'build/cjs/test');
    fs.mkdirSync(srcCjsDir, {recursive: true});
    fs.mkdirSync(buildCjsDir, {recursive: true});

    fs.writeFileSync(
      path.join(pkgDir, 'compile.cjs'),
      [
        "const fs = require('fs');",
        "const path = require('path');",
        "fs.copyFileSync(path.join(__dirname, 'cjs/test/unit.ts'), path.join(__dirname, 'build/cjs/test/unit.js'));",
      ].join('\n'),
    );
    fs.writeFileSync(
      path.join(pkgDir, 'package.json'),
      JSON.stringify({
        name: 'sub-pkg',
        scripts: {compile: 'node compile.cjs'},
      }),
    );
    fs.writeFileSync(
      path.join(srcCjsDir, 'unit.ts'),
      'it.only("compiled from cjs/test", () => {});',
    );
    fs.writeFileSync(
      path.join(buildCjsDir, 'unit.js'),
      'it("stale build", () => {});',
    );

    const resolved = resolveTestArgs(
      ['packages/sub-pkg/build/cjs/test'],
      tmpDir,
    );
    assert.strictEqual(resolved.hasOnly, true);
    assert.deepStrictEqual(resolved.onlyFiles, [
      path.join('packages', 'sub-pkg', 'build', 'cjs', 'test', 'unit.js'),
    ]);
  });

  it('disables parallel mode in .mocharc.cjs when Mocha is invoked directly on a target with .only', () => {
    const testDir = path.join(tmpDir, 'build/test');
    fs.mkdirSync(testDir, {recursive: true});
    const exclusiveFile = path.join(testDir, 'direct-mocha.js');
    fs.writeFileSync(
      exclusiveFile,
      'describe("direct mocha", () => { it.only("works with .mocharc.cjs", () => {}); });',
    );

    const mochaBin = resolveBin('mocha/bin/mocha.js');
    const res = spawnSync(
      process.execPath,
      [mochaBin, '--config', rootMocharc, exclusiveFile],
      {
        cwd: tmpDir,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node', MOCHA_PARALLEL: ''},
      },
    );
    assert.strictEqual(
      res.status,
      0,
      `stderr: ${res.stderr}\nstdout: ${res.stdout}`,
    );
    assert.match(res.stdout, /1 passing/);
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

  it('exits 0 when invoked with build/test in a package without test directories, but does not exit 0 when one of multiple targets exists', () => {
    const resEmpty = spawnSync(
      process.execPath,
      [runTestPath, '--no-c8', 'build/test'],
      {
        cwd: tmpDir,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node'},
      },
    );
    assert.strictEqual(resEmpty.status, 0);

    // When build/esm/test is missing but cjs/test and build/cjs/test exist with a failing test, it must fail
    fs.mkdirSync(path.join(tmpDir, 'cjs/test'), {recursive: true});
    fs.mkdirSync(path.join(tmpDir, 'build/cjs/test'), {recursive: true});
    fs.writeFileSync(
      path.join(tmpDir, 'cjs/test/fail.ts'),
      'it("fails", () => { throw new Error("boom"); });\n',
    );
    fs.writeFileSync(
      path.join(tmpDir, 'build/cjs/test/fail.js'),
      'it("fails", () => { throw new Error("boom"); });\n',
    );
    const resMulti = spawnSync(
      process.execPath,
      [runTestPath, '--no-c8', 'build/esm/test', 'build/cjs/test'],
      {
        cwd: tmpDir,
        encoding: 'utf8',
        env: {...process.env, JS_RUNTIME: 'node'},
      },
    );
    assert.strictEqual(resMulti.status, 1);

    // And resolveBin rethrows MODULE_NOT_FOUND cleanly for missing scoped packages
    assert.throws(
      () => resolveBin('@nonexistent-scope/nonexistent-pkg/bin/cli.js'),
      {code: 'MODULE_NOT_FOUND'},
    );
  });

  it('links compiled in-repo workspace packages (gaxios, teeny-request) in .pnpm and package node_modules when versions diverge', () => {
    const gaxiosWorkspaceDir = path.join(tmpDir, 'core/packages/gaxios');
    const teenyWorkspaceDir = path.join(tmpDir, 'core/packages/teeny-request');
    const pnpmGaxios8Dir = path.join(
      tmpDir,
      'node_modules/.pnpm/gaxios@8.3.0/node_modules/gaxios',
    );
    const pnpmGaxios7Dir = path.join(
      tmpDir,
      'node_modules/.pnpm/gaxios@7.1.3/node_modules/gaxios',
    );
    const consumerDir = path.join(tmpDir, 'core/packages/gcp-metadata');
    const consumerGaxiosDir = path.join(consumerDir, 'node_modules/gaxios');
    const consumerTeenyDir = path.join(
      consumerDir,
      'node_modules/teeny-request',
    );
    const legacyConsumerDir = path.join(tmpDir, 'packages/legacy-pkg');
    const legacyConsumerGaxiosDir = path.join(
      legacyConsumerDir,
      'node_modules/gaxios',
    );

    fs.mkdirSync(pnpmGaxios8Dir, {recursive: true});
    fs.writeFileSync(
      path.join(pnpmGaxios8Dir, 'package.json'),
      JSON.stringify({name: 'gaxios', version: '8.3.0'}),
    );
    fs.mkdirSync(pnpmGaxios7Dir, {recursive: true});
    fs.writeFileSync(
      path.join(pnpmGaxios7Dir, 'package.json'),
      JSON.stringify({name: 'gaxios', version: '7.1.3'}),
    );
    fs.mkdirSync(path.join(consumerDir, 'node_modules'), {recursive: true});
    fs.symlinkSync(pnpmGaxios8Dir, consumerGaxiosDir, 'junction');
    fs.mkdirSync(consumerTeenyDir, {recursive: true});
    fs.writeFileSync(
      path.join(consumerTeenyDir, 'package.json'),
      JSON.stringify({name: 'teeny-request', version: '11.0.1'}),
    );
    fs.mkdirSync(path.join(legacyConsumerDir, 'node_modules'), {
      recursive: true,
    });
    fs.symlinkSync(pnpmGaxios7Dir, legacyConsumerGaxiosDir, 'junction');

    // Before workspace packages are compiled, existing node_modules entries remain untouched.
    ensureWorkspacePackagesLinked(tmpDir, [
      consumerDir,
      legacyConsumerDir,
      tmpDir,
    ]);
    assert.notStrictEqual(
      fs.realpathSync(pnpmGaxios8Dir),
      fs.existsSync(gaxiosWorkspaceDir)
        ? fs.realpathSync(gaxiosWorkspaceDir)
        : '',
    );

    // Populate compiled workspace packages with release-please bumped versions.
    fs.mkdirSync(path.join(gaxiosWorkspaceDir, 'build/cjs/src'), {
      recursive: true,
    });
    fs.writeFileSync(
      path.join(gaxiosWorkspaceDir, 'package.json'),
      JSON.stringify({name: 'gaxios', version: '8.3.1'}),
    );
    fs.writeFileSync(
      path.join(gaxiosWorkspaceDir, 'build/cjs/src/index.js'),
      'module.exports = {};\n',
    );

    fs.mkdirSync(path.join(teenyWorkspaceDir, 'build/src'), {recursive: true});
    fs.writeFileSync(
      path.join(teenyWorkspaceDir, 'package.json'),
      JSON.stringify({name: 'teeny-request', version: '11.1.1'}),
    );
    fs.writeFileSync(
      path.join(teenyWorkspaceDir, 'build/src/index.js'),
      'module.exports = {};\n',
    );

    ensureWorkspacePackagesLinked(tmpDir, [
      consumerDir,
      legacyConsumerDir,
      gaxiosWorkspaceDir,
      tmpDir,
    ]);

    const realGaxiosWorkspace = fs.realpathSync(gaxiosWorkspaceDir);
    const realTeenyWorkspace = fs.realpathSync(teenyWorkspaceDir);
    assert.strictEqual(fs.realpathSync(pnpmGaxios8Dir), realGaxiosWorkspace);
    assert.strictEqual(fs.realpathSync(consumerGaxiosDir), realGaxiosWorkspace);
    assert.strictEqual(fs.realpathSync(consumerTeenyDir), realTeenyWorkspace);
    // Older major version in .pnpm store and in legacy consumer must not be replaced.
    assert.notStrictEqual(fs.realpathSync(pnpmGaxios7Dir), realGaxiosWorkspace);
    assert.notStrictEqual(
      fs.realpathSync(legacyConsumerGaxiosDir),
      realGaxiosWorkspace,
    );

    // Calling a second time is idempotent.
    ensureWorkspacePackagesLinked(tmpDir, [
      consumerDir,
      legacyConsumerDir,
      tmpDir,
    ]);
    assert.strictEqual(fs.realpathSync(consumerGaxiosDir), realGaxiosWorkspace);
  });
});
